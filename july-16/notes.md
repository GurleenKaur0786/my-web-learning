# July 16, 2026 - Express.js and REST API Concepts

## What I Studied Today
Today I studied Express.js in depth and how REST APIs are structured, connecting the theory directly to how our EMS backend (`server/`) is built - specifically our routes, controllers, and middleware.

---

## 1. What is Express.js?

- Express is a minimal, unopinionated web framework for Node.js
- It simplifies building web servers and APIs by handling routing, requests, responses, and middleware without needing raw Node's `http` module boilerplate
- Our entire `server/index.js` is built on top of Express

### Why Express for our project?
- Fast to set up REST APIs
- Huge middleware ecosystem (cors, dotenv, jsonwebtoken, bcrypt, etc. - all used in our project)
- Pairs naturally with MongoDB/Mongoose and a React frontend (the "E" in MERN)

---

## 2. What is a REST API?

REST (Representational State Transfer) is an architectural style for designing APIs, built around:
- **Resources** (e.g., users, departments, employees) - each identified by a URL
- **HTTP methods** describing the action to perform on that resource:

| Method | Purpose            | Example in our project              |
|--------|---------------------|--------------------------------------|
| GET    | Read data            | `GET /api/department` - list all     |
| POST   | Create data          | `POST /api/auth/login` - login user  |
| PUT    | Update data          | `PUT /api/department/:id` - edit dept|
| DELETE | Remove data          | `DELETE /api/department/:id`         |

- REST APIs are **stateless** - each request contains everything needed to process it (this is why we send a JWT token with each request instead of relying on server-side sessions)

---

## 3. Express App Structure

```javascript
const express = require("express");
const app = express();

app.use(express.json()); // parses incoming JSON request bodies
app.use(cors());          // allows frontend (different port) to call this API

app.listen(5000, () => console.log("Server running on port 5000"));
```

- `express.json()` middleware is essential - without it, `req.body` would be `undefined` when the frontend sends JSON data (like login credentials)
- `cors()` is needed because our React frontend (e.g., port 5173) and Express backend (port 5000) run on different origins - browsers block cross-origin requests by default unless the server explicitly allows them

---

## 4. Routing in Express

Routes define which function runs for which URL + HTTP method combination.

### Basic route
```javascript
app.get("/api/department", getAllDepartments);
```

### Using the Router (how our project is actually structured)
Instead of writing every route directly in `index.js`, we split them into separate files inside `server/routes/`:

```javascript
// server/routes/department.js
const express = require("express");
const router = express.Router();
const { getAllDepartments, addDepartment, updateDepartment } = require("../controllers/departmentController");

router.get("/", getAllDepartments);
router.post("/add", addDepartment);
router.put("/:id", updateDepartment);

module.exports = router;
```

Then mounted in `index.js`:
```javascript
app.use("/api/department", require("./routes/department"));
```

This keeps route definitions clean and separates "what URL triggers what" from "what actually happens" (that logic lives in controllers).

---

## 5. Controllers - Where the Actual Logic Lives

Controllers contain the real business logic - talking to the database, processing data, and sending responses. This is the **MVC (Model-View-Controller)** pattern applied to a backend API (no "View" here since React handles that separately).

Example, similar to our `departmentController.js`:
```javascript
const Department = require("../models/Department");

const getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    return res.status(200).json({ success: true, departments });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Server error" });
  }
};

const addDepartment = async (req, res) => {
  try {
    const { name } = req.body;
    const newDept = new Department({ name });
    await newDept.save();
    return res.status(201).json({ success: true, department: newDept });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Server error" });
  }
};

module.exports = { getAllDepartments, addDepartment };
```

Key points:
- Controllers are `async` because database calls (`await Department.find()`) take time
- Every response follows a consistent shape (`success`, plus `data` or `error`) - makes it predictable for the frontend to handle
- Proper HTTP status codes matter: `200` OK, `201` Created, `400` Bad Request, `401` Unauthorized, `500` Server Error

---

## 6. Middleware - Functions That Run Before the Controller

Middleware are functions that sit in between the incoming request and the final route handler. They can:
- Modify the request/response
- End the request early (e.g., reject unauthorized access)
- Pass control forward using `next()`

### Example: our `authMiddleware.js`
```javascript
const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ success: false, error: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded; // attach user info to request
    next(); // move on to the actual route handler
  } catch (error) {
    return res.status(401).json({ success: false, error: "Invalid token" });
  }
};

module.exports = verifyUser;
```

Used in a route like:
```javascript
router.get("/", verifyUser, getAllDepartments);
```

- `verifyUser` runs first - if the token is invalid, the request stops there and `getAllDepartments` never runs
- This is exactly how our Admin/Employee dashboards stay protected - the frontend sends the JWT with every request, and this middleware checks it

---

## 7. Request and Response Objects

- `req` (request) - contains everything about the incoming request:
  - `req.body` - data sent in a POST/PUT request (needs `express.json()` middleware to work)
  - `req.params` - values from the URL itself (e.g., `/department/:id` → `req.params.id`)
  - `req.headers` - metadata like the `Authorization` header carrying our JWT
- `res` (response) - used to send data back:
  - `res.status(200).json({...})` - sends a JSON response with a status code
  - Always send a response - if a route never calls `res.send()`/`res.json()`, the request hangs forever

---

## 8. Error Handling Pattern

- Every controller function wraps logic in `try/catch` so unexpected errors (bad DB connection, invalid data, etc.) don't crash the whole server
- Errors are caught and turned into a clean JSON response instead of an ugly stack trace reaching the frontend

---

## 9. How It All Connects in Our EMS Project

Full request flow example - editing a department:
1. Frontend (`EditDepartment.jsx`) sends `PUT /api/department/:id` with the new name and the JWT token in headers
2. Express receives it, matches the route in `routes/department.js`
3. `verifyUser` middleware checks the token - if invalid, request stops here
4. If valid, `updateDepartment` controller runs - finds the department by ID, updates it, saves to MongoDB via Mongoose
5. Controller sends back `{ success: true, department: updatedDept }`
6. Frontend receives this and updates the UI (department list refreshes)

---

## Summary
Today's focus was understanding how Express.js structures a REST API - routes define the URL/method, controllers hold the actual logic, and middleware like our JWT verification protects routes before