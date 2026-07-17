# July 17, 2026 - JWT Authentication and Authorization in Depth

## What I Studied Today
Today I studied JSON Web Tokens (JWT) in depth - how authentication and authorization actually work end-to-end in our EMS project, from login through to protected routes on both the backend and frontend.

---

## 1. Authentication vs Authorization

- **Authentication** - verifying WHO the user is (login with email/password)
- **Authorization** - verifying WHAT that user is allowed to do (e.g., only "admin" role can access certain routes)
- Our project handles both: `authController.js` handles authentication (login), while `role` field + `RoleBaseRoute.jsx` handles authorization

---

## 2. What is a JWT?

- A JWT (JSON Web Token) is a compact, self-contained way to securely transmit information between parties as a JSON object
- It's digitally signed, so the server can verify it hasn't been tampered with
- A JWT has 3 parts, separated by dots: `header.payload.signature`
  - **Header** - algorithm used (e.g., HS256)
  - **Payload** - the actual data (e.g., user id, role) - NOT encrypted, just encoded (never put secrets like passwords in here)
  - **Signature** - created using a secret key, ensures the token wasn't modified

Example decoded payload:
```json
{
  "id": "64f1a2b3c4d5e6f7a8b9c0d1",
  "role": "admin",
  "iat": 1721160000,
  "exp": 1721246400
}
```

---

## 3. Why JWT Instead of Sessions?

- Traditional sessions store login state on the server (in memory or a database) and give the browser a session ID cookie
- JWT is **stateless** - the server doesn't store anything; the token itself contains all the info needed to verify the user
- This fits REST APIs well since REST is meant to be stateless by design
- Easier to scale across multiple servers since there's no shared session store needed

---

## 4. How Login Works in Our Project (authController.js)

```javascript
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, error: "Wrong password" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_KEY,
      { expiresIn: "10d" }
    );

    res.status(200).json({
      success: true,
      token,
      user: { id: user._id, name: user.name, role: user.role }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server error" });
  }
};
```

Breaking this down:
- `bcrypt.compare()` checks the plain-text password against the stored hashed password - passwords are never stored or compared in plain text
- `jwt.sign(payload, secret, options)` creates the token - `process.env.JWT_KEY` is the secret key stored in `.env` (never hardcoded, never committed to GitHub)
- `expiresIn: "10d"` means the token automatically becomes invalid after 10 days - a security measure so stolen tokens don't work forever

---

## 5. Password Hashing with bcrypt

- Passwords must NEVER be stored as plain text in the database
- `bcrypt` hashes the password using a one-way algorithm - it can't be reversed back to the original password
- During signup, we hash before saving:
```javascript
  const hashedPassword = await bcrypt.hash(password, 10);
  // 10 = salt rounds - higher = more secure but slower
```
- During login, we can't "unhash" - instead we hash the entered password the same way and compare using `bcrypt.compare()`

---

## 6. Protecting Backend Routes (authMiddleware.js)

```javascript
const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ success: false, error: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, error: "Invalid or expired token" });
  }
};
```

- The frontend sends the token in the request header as: `Authorization: Bearer <token>`
- `.split(" ")[1]` extracts just the token part (removing the word "Bearer")
- `jwt.verify()` checks the signature - if the token was tampered with or expired, it throws an error, and the middleware blocks the request

### Adding role-based restriction
```javascript
const verifyAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ success: false, error: "Access denied - Admins only" });
  }
  next();
};
```
Used together:
```javascript
router.post("/add", verifyUser, verifyAdmin, addDepartment);
```
This means: check the token is valid first, THEN check the role is admin, THEN run the actual controller.

---

## 7. Protecting Frontend Routes (React)

### Storing the token after login
After a successful login, the token is stored (commonly in `localStorage` or React context) so it can be attached to future requests:
```javascript
localStorage.setItem("token", response.data.token);
```

### PrivateRoutes.jsx - blocking access if not logged in
```javascript
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoutes = () => {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
```
- If there's no logged-in user, redirect to `/login`
- `<Outlet />` renders the nested child route if allowed through

### RoleBaseRoute.jsx - restricting by role
```javascript
const RoleBaseRoute = ({ requiredRole }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (user.role !== requiredRole) return <Navigate to="/unauthorized" />;
  return <Outlet />;
};
```
- Even if logged in, this blocks employees from reaching admin-only pages like the Admin Dashboard

---

## 8. Sending the Token with Every Request

Every API call from the frontend needs to include the token, usually via axios:
```javascript
axios.get("/api/department", {
  headers: { Authorization: `Bearer ${token}` }
});
```
Without this header, protected backend routes (guarded by `verifyUser`) will reject the request with a 401.

---

## 9. Full Authentication Flow in Our EMS Project

1. User submits login form (`Login.jsx`) → `POST /api/auth/login`
2. Backend checks email/password with bcrypt, and if valid, signs a JWT containing `id` and `role`
3. Frontend stores the token and user info (in AuthContext + localStorage)
4. On every protected page load or API call, the token is sent in the `Authorization` header
5. Backend's `verifyUser` middleware checks the token is valid before running the controller
6. If the route needs a specific role (e.g., admin-only), `verifyAdmin`/`RoleBaseRoute` checks `user.role` too
7. If any check fails, the request is rejected (401/403) and the frontend redirects appropriately

---

## Summary
Today's focus was understanding JWT authentication end-to-end - from hashing and verifying passwords with bcrypt, to signing and verifying tokens with a secret key, to protecting both backend routes (middleware) and frontend routes (PrivateRoutes/RoleBaseRoute) based on login status and user role. This connects directly to how our EMS project secures the Admin and Employee dashboards.