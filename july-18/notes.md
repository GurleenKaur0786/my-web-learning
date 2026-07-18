# July 18, 2026 - React Fundamentals and Hooks

## What I Studied Today
Today I studied core React concepts - components, props, state, and hooks - connecting the theory directly to how our EMS frontend is built, especially `AuthContext.jsx`, `AdminDashboard.jsx`, and the dashboard components.

---

## 1. What is React?

- React is a JavaScript library for building user interfaces using reusable **components**
- It uses a **Virtual DOM** - instead of directly updating the real browser DOM (slow), React calculates the minimal set of changes needed and updates only that, making UI updates fast
- Our entire `frontend/src` is built as a tree of components rendering inside `App.jsx`

---

## 2. Components and JSX

- A component is just a JavaScript function that returns JSX (HTML-like syntax inside JS)
- Example, similar to our `Navbar.jsx`:
```javascript
const Navbar = () => {
  return (
    <div className="navbar">
      <h1>EMS Dashboard</h1>
    </div>
  );
};

export default Navbar;
```
- JSX must return a single parent element (or use a Fragment `<>...</>`)
- Components are composed together - `AdminDashboard.jsx` uses `AdminSidebar`, `Navbar`, and `SummaryCards` together

---

## 3. Props - Passing Data Into Components

Props let a parent component send data down to a child:
```javascript
const SummaryCard = ({ title, count }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{count}</p>
    </div>
  );
};

// Used like:
<SummaryCard title="Total Employees" count={25} />
```
- Props are **read-only** - a child component cannot modify the props it receives directly
- This one-way data flow (parent → child) makes React apps predictable and easier to debug

---

## 4. State - Data That Changes Over Time

State is data a component "remembers" and can update, causing it to re-render.

### useState Hook
```javascript
import { useState } from "react";

const AddDepartment = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => setName(e.target.value);

  return (
    <input value={name} onChange={handleChange} placeholder="Department Name" />
  );
};
```
- `useState("")` returns an array: the current value (`name`) and a function to update it (`setName`)
- Calling `setName(...)` tells React "this value changed, re-render this component"
- This is exactly how our `AddDepartment.jsx` and `EditDepartment.jsx` forms track user input before submitting to the backend

---

## 5. useEffect Hook - Running Code at the Right Time

`useEffect` runs side effects - code that needs to run after render, like fetching data from our Express API.

```javascript
import { useState, useEffect } from "react";
import axios from "axios";

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      const response = await axios.get("http://localhost:5000/api/department", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });
      setDepartments(response.data.departments);
    };
    fetchDepartments();
  }, []); // empty array = run once, when component first mounts

  return (
    <ul>
      {departments.map((dept) => (
        <li key={dept._id}>{dept.name}</li>
      ))}
    </ul>
  );
};
```

Key points about the dependency array (the `[]` at the end):
- `[]` (empty) - runs once, right after the component first renders (like "on page load")
- `[someValue]` - re-runs whenever `someValue` changes
- No array at all - runs after EVERY render (rarely what you want, can cause infinite loops if it also updates state)

This is exactly how `DepartmentList.jsx` loads existing departments from MongoDB when the page opens.

---

## 6. Context API - Sharing State Without Prop Drilling

- "Prop drilling" = passing props down through many layers of components just to reach one that needs it - messy and hard to maintain
- Context API lets us share data (like the logged-in user) globally without manually passing it through every component

### Our AuthContext.jsx pattern
```javascript
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData, token) => {
    setUser(userData);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
```

- `AuthProvider` wraps the whole app in `main.jsx`/`App.jsx`, making `user`, `login`, and `logout` available to any component
- Any component calls `const { user } = useAuth();` to access the logged-in user - no need to pass it as props through every level
- This is exactly what `PrivateRoutes.jsx` and `RoleBaseRoute.jsx` use to check if someone is logged in and what role they have

---

## 7. Conditional Rendering

React lets us show different UI based on state/props:
```javascript
{user ? <AdminDashboard /> : <Navigate to="/login" />}
```
or
```javascript
{departments.length === 0 ? <p>No departments found</p> : <DepartmentList departments={departments} />}
```

---

## 8. Lists and Keys

When rendering a list with `.map()`, React needs a unique `key` prop on each item to efficiently track which items changed, were added, or removed:
```javascript
{departments.map((dept) => (
  <li key={dept._id}>{dept.name}</li>
))}
```
- Using the MongoDB `_id` as the key is ideal since it's guaranteed unique
- Without keys (or using array index as key), React can misidentify items during updates, causing bugs

---

## 9. How It All Connects in Our EMS Project

Example - the Admin Dashboard loading:
1. `AdminDashboard.jsx` renders, wrapped by `AuthProvider` so it has access to `user` via `useAuth()`
2. `useEffect` runs on mount, calling the Express API (`/api/department`, `/api/employee`, etc.) with the JWT from context/localStorage
3. Data comes back and is stored in state via `useState`
4. Component re-renders automatically, showing the fetched data (department list, summary cards, etc.)
5. If the user edits something (like `EditDepartment.jsx`), `useState` tracks the input, and on submit, an API call updates MongoDB, then state updates to reflect the change immediately in the UI

---

## Summary
Today's focus was understanding React's core building blocks - components, props, state, useEffect for data fetching, and the Context API for sharing authentication state globally. This ties directly into how our EMS frontend fetches data from Express, manages user input in forms, and keeps the Admin/Employee dashboards reactive to both login state and live data from MongoDB.