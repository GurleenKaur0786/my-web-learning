# July 6, 2026 - Basics of React and MERN Stack

## What I Studied Today
Today we started the most exciting part of the course - React and the
complete MERN Stack! This is where everything comes together. We learned
what React is, why it exists, how it works, and got a complete overview
of the entire MERN Stack architecture. Starting tomorrow we will be
building a complete Employee Management System project using everything
we have learned so far plus React. Today is the foundation day before
the real project begins!

---

## 1. WHAT IS THE MERN STACK?

MERN Stack is a collection of four powerful technologies used together
to build complete full stack web applications - both frontend and backend.

M - MongoDB   : Database (stores all data)
E - Express   : Backend web framework (handles server logic)
R - React     : Frontend library (builds the user interface)
N - Node.js   : JavaScript runtime (runs JavaScript on the server)

### Why MERN Stack?
- ALL FOUR technologies use JavaScript
- One language for entire application - frontend AND backend
- Huge community and job market demand
- JSON data flows seamlessly between all four layers
- Fast development and great performance
- Most popular stack for startups and modern web apps
- Companies using MERN: Facebook, Netflix, Uber, Airbnb, LinkedIn

---

## 2. MERN STACK ARCHITECTURE

How all four pieces work together:

USER (Browser)
     |
     | HTTP Request
     v
REACT (Frontend - runs in browser)
     |
     | fetch() / axios API calls
     v
EXPRESS + NODE.js (Backend - runs on server)
     |
     | Database queries
     v
MONGODB (Database - stores data)
     |
     | Returns data (JSON)
     v
EXPRESS + NODE.js (Processes and sends response)
     |
     | JSON Response
     v
REACT (Receives data, updates UI)
     |
     | Renders updated UI
     v
USER sees updated page

### Data Flow Example (Employee Management System):
1. User clicks Add Employee button in React
2. React sends POST request to Express API
3. Express receives request, validates data
4. Express saves employee data to MongoDB
5. MongoDB confirms save, returns new employee
6. Express sends success response to React
7. React updates the employee list on screen
8. User sees new employee added instantly

---

## 3. NODE.JS - The Foundation

### What is Node.js?
Node.js is a JavaScript runtime environment that allows JavaScript
to run OUTSIDE the browser, directly on a computer or server.

Before Node.js: JavaScript only ran in browsers
After Node.js:  JavaScript runs everywhere - servers, computers, IoT devices

### Key Features:
- Built on Chrome V8 JavaScript engine (same engine as Chrome browser)
- Non-blocking, event-driven architecture
- Single threaded but handles thousands of concurrent connections
- Huge package ecosystem via npm (Node Package Manager)
- Perfect for real-time applications

### What Node.js is used for:
- Building web servers and REST APIs
- Command line tools
- Real-time applications (chat, gaming, live updates)
- Microservices
- Streaming applications

### npm - Node Package Manager:
npm is the world's largest software registry with 2 million+ packages.
npm install express        /* install a package */
npm install -g nodemon     /* install globally */
npm init                   /* create package.json */
npm run start              /* run a script */

### package.json:
The configuration file for every Node.js project.
{
  'name': 'employee-management-system',
  'version': '1.0.0',
  'description': 'MERN Stack Employee Management System',
  'main': 'server.js',
  'scripts': {
    'start': 'node server.js',
    'dev': 'nodemon server.js'
  },
  'dependencies': {
    'express': '^4.18.2',
    'mongoose': '^7.0.0',
    'cors': '^2.8.5',
    'dotenv': '^16.0.0'
  }
}

---

## 4. EXPRESS.JS - The Backend Framework

### What is Express?
Express is a minimal and flexible Node.js web application framework.
It provides a robust set of features for building web and mobile apps.
Express is the E in MERN.

### What Express does:
- Creates a web server
- Handles HTTP requests (GET, POST, PUT, DELETE)
- Defines API routes (endpoints)
- Middleware for processing requests
- Connects to MongoDB via Mongoose
- Sends responses back to React frontend

### Basic Express Server:
const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());  /* middleware to parse JSON */

/* Routes */
app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.get('/api/employees', (req, res) => {
  res.json({ employees: [] });
});

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});

### REST API Endpoints for Employee Management System:
GET    /api/employees          - get all employees
GET    /api/employees/:id      - get single employee
POST   /api/employees          - create new employee
PUT    /api/employees/:id      - update entire employee
PATCH  /api/employees/:id      - update part of employee
DELETE /api/employees/:id      - delete employee

### Middleware:
Middleware functions run BETWEEN receiving request and sending response.
app.use(express.json());          /* parse JSON body */
app.use(cors());                  /* allow cross-origin requests */
app.use(express.static('public')); /* serve static files */

---

## 5. MONGODB - The Database

### What is MongoDB?
MongoDB is a NoSQL document database.
Instead of tables and rows (like SQL), MongoDB uses Collections and Documents.

SQL Database:     MongoDB:
Tables       ->   Collections
Rows         ->   Documents
Columns      ->   Fields
JOIN         ->   Embedded documents or 

### Why MongoDB for MERN?
- Stores data as JSON-like documents (BSON)
- Perfect match with JavaScript objects
- Flexible schema - no rigid table structure
- Scales horizontally very well
- Great for rapidly changing data structures

### MongoDB Document Example (Employee):
{
  _id: ObjectId('64f1a2b3c4d5e6f7a8b9c0d1'),
  firstName: 'Gurleen',
  lastName: 'Kaur',
  email: 'gurleen@company.com',
  phone: '9876543210',
  department: 'Engineering',
  position: 'Frontend Developer',
  salary: 50000,
  joiningDate: '2026-06-22',
  isActive: true,
  address: {
    city: 'Ludhiana',
    state: 'Punjab',
    pincode: '141001'
  },
  skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  createdAt: '2026-07-06T10:00:00.000Z'
}

### Mongoose - MongoDB ODM:
Mongoose is a library that makes working with MongoDB in Node.js easier.
It provides schema validation, models and query helpers.

const mongoose = require('mongoose');

/* Connect to MongoDB */
mongoose.connect('mongodb://localhost:27017/employeeDB');

/* Define Schema */
const employeeSchema = new mongoose.Schema({
  firstName:  { type: String, required: true },
  lastName:   { type: String, required: true },
  email:      { type: String, required: true, unique: true },
  phone:      { type: String, required: true },
  department: { type: String, required: true },
  position:   { type: String, required: true },
  salary:     { type: Number, required: true },
  joiningDate:{ type: Date, default: Date.now },
  isActive:   { type: Boolean, default: true },
  skills:     [String]
}, { timestamps: true });

/* Create Model */
const Employee = mongoose.model('Employee', employeeSchema);

/* CRUD Operations */
/* Create */
const newEmployee = new Employee({ firstName: 'Gurleen', ... });
await newEmployee.save();

/* Read all */
const employees = await Employee.find();

/* Read one */
const employee = await Employee.findById(id);

/* Update */
await Employee.findByIdAndUpdate(id, { salary: 60000 }, { new: true });

/* Delete */
await Employee.findByIdAndDelete(id);

---

## 6. REACT - The Frontend Library

### What is React?
React is a JavaScript library for building user interfaces.
It was created by Facebook (Meta) in 2013 and open sourced.
React is the R in MERN and the most popular frontend library in the world.

### Why React?
- Component based architecture - build reusable UI pieces
- Virtual DOM for blazing fast updates
- One way data flow - predictable and easy to debug
- Huge ecosystem and community
- Used by: Facebook, Instagram, Netflix, Airbnb, Uber, WhatsApp Web
- Most in demand frontend skill in job market

### Key Concepts of React:

---

### a) Virtual DOM

The DOM (Document Object Model) is the browser's representation of HTML.
Manipulating the real DOM directly is SLOW.

React creates a VIRTUAL DOM - a lightweight copy of the real DOM in memory.
When state changes:
1. React creates a new Virtual DOM tree
2. Compares it with the previous Virtual DOM (DIFFING)
3. Finds exactly what changed (RECONCILIATION)
4. Updates ONLY those specific parts in the real DOM (PATCHING)

This makes React extremely fast because it minimizes real DOM operations!

---

### b) JSX - JavaScript XML

JSX is a syntax extension for JavaScript that looks like HTML.
It allows us to write HTML-like code directly in JavaScript files.
JSX is NOT HTML - it gets compiled to JavaScript by Babel.

/* JSX */
const element = <h1>Hello Gurleen!</h1>;

/* What it compiles to */
const element = React.createElement('h1', null, 'Hello Gurleen!');

JSX Rules:
- Every JSX element must have ONE root element (or use fragments)
- All tags must be closed: <br /> not <br>
- Use className instead of class (class is reserved in JS)
- Use htmlFor instead of for (for is reserved in JS)
- JavaScript expressions go inside curly braces {}
- Inline styles use objects: style={{ color: 'red', fontSize: '16px' }}
- Comments: {/* this is a JSX comment */}

Examples:
const name = 'Gurleen';
const age = 20;
const isLoggedIn = true;

/* Variables in JSX */
const element = <h1>Hello {name}!</h1>;

/* Expressions in JSX */
const element = <p>Next year you will be {age + 1}</p>;

/* Conditional rendering */
const element = <p>{isLoggedIn ? 'Welcome back!' : 'Please login'}</p>;

/* Calling functions */
const element = <p>{name.toUpperCase()}</p>;

/* Multiple lines - must have one parent */
const element = (
  <div>
    <h1>Hello {name}</h1>
    <p>Age: {age}</p>
  </div>
);

/* Using Fragment to avoid extra div */
const element = (
  <>
    <h1>Hello {name}</h1>
    <p>Age: {age}</p>
  </>
);

---

### c) Components

Components are the BUILDING BLOCKS of React applications.
A component is a reusable, self-contained piece of UI.
Think of components like custom HTML tags that you create yourself!

Everything in React is a component:
- Header component
- Navbar component
- EmployeeCard component
- EmployeeForm component
- Button component
- Modal component

#### Functional Components (Modern Standard):
function EmployeeCard(props) {
  return (
    <div className='employee-card'>
      <h2>{props.name}</h2>
      <p>{props.department}</p>
      <p>{props.position}</p>
    </div>
  );
}

/* Arrow function component */
const EmployeeCard = (props) => {
  return (
    <div className='employee-card'>
      <h2>{props.name}</h2>
      <p>{props.department}</p>
    </div>
  );
};

/* With destructuring */
const EmployeeCard = ({ name, department, position, salary }) => {
  return (
    <div className='employee-card'>
      <h2>{name}</h2>
      <p>Department: {department}</p>
      <p>Position: {position}</p>
      <p>Salary: Rs.{salary}</p>
    </div>
  );
};

#### Using Components:
function App() {
  return (
    <div>
      <EmployeeCard
        name='Gurleen Kaur'
        department='Engineering'
        position='Frontend Developer'
        salary={50000}
      />
      <EmployeeCard
        name='Rahul Singh'
        department='Marketing'
        position='Marketing Manager'
        salary={45000}
      />
    </div>
  );
}

---

### d) Props (Properties)

Props are how we pass data FROM parent component TO child component.
Props are READ ONLY - a child component CANNOT modify its props!
Props flow in ONE direction: Parent -> Child (one way data flow)

/* Parent passes props */
<EmployeeCard name='Gurleen' salary={50000} isActive={true} />

/* Child receives and uses props */
const EmployeeCard = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Salary: {props.salary}</p>
      <p>Status: {props.isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
};

/* With destructuring (cleaner) */
const EmployeeCard = ({ name, salary, isActive }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Salary: {salary}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
};

/* Default props */
const EmployeeCard = ({ name = 'Unknown', salary = 0, isActive = true }) => {
  return <div>{name} - {salary}</div>;
};

/* children prop - content between opening and closing tags */
const Card = ({ children, title }) => {
  return (
    <div className='card'>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

/* Using children */
<Card title='Employee Details'>
  <p>This content goes into children prop</p>
  <button>Edit</button>
</Card>

---

### e) State and useState Hook

State is DATA that belongs to a component and can CHANGE over time.
When state changes, React automatically RE-RENDERS the component
to show the updated UI.

useState is a React Hook that adds state to functional components.

import { useState } from 'react';

const Counter = () => {
  /* useState returns [currentValue, setterFunction] */
  const [count, setCount] = useState(0);  /* initial value is 0 */

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

#### State with different data types:
/* String state */
const [name, setName] = useState('');

/* Number state */
const [age, setAge] = useState(0);

/* Boolean state */
const [isVisible, setIsVisible] = useState(false);

/* Array state */
const [employees, setEmployees] = useState([]);

/* Object state */
const [employee, setEmployee] = useState({
  firstName: '',
  lastName: '',
  email: '',
  department: ''
});

#### Updating object state (must spread existing state!):
const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: ''
});

/* Update single field */
const handleChange = (e) => {
  setFormData({
    ...formData,              /* spread existing fields */
    [e.target.name]: e.target.value  /* update only changed field */
  });
};

#### Updating array state:
const [employees, setEmployees] = useState([]);

/* Add to array */
const addEmployee = (newEmployee) => {
  setEmployees([...employees, newEmployee]);
};

/* Remove from array */
const removeEmployee = (id) => {
  setEmployees(employees.filter(emp => emp._id !== id));
};

/* Update item in array */
const updateEmployee = (id, updatedData) => {
  setEmployees(employees.map(emp =>
    emp._id === id ? { ...emp, ...updatedData } : emp
  ));
};

---

### f) useEffect Hook

useEffect lets you perform SIDE EFFECTS in functional components.
Side effects include: fetching data, updating DOM, setting up subscriptions,
setting timers, and anything that happens outside React's render cycle.

import { useState, useEffect } from 'react';

/* Basic useEffect */
useEffect(() => {
  /* this runs after every render */
  console.log('Component rendered');
});

/* Run ONCE on mount (like componentDidMount) */
useEffect(() => {
  console.log('Component mounted - runs only once');
  fetchEmployees();  /* fetch data when component first loads */
}, []);  /* empty array = no dependencies = run once */

/* Run when specific value changes */
useEffect(() => {
  console.log('Count changed to:', count);
}, [count]);  /* runs whenever count changes */

/* Cleanup function (like componentWillUnmount) */
useEffect(() => {
  const timer = setInterval(() => {
    console.log('tick');
  }, 1000);

  return () => {
    clearInterval(timer);  /* cleanup runs when component unmounts */
    console.log('Component unmounted, timer cleared');
  };
}, []);

#### Fetching data with useEffect:
const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/employees');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setEmployees(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);  /* runs once when component mounts */

  if (loading) return <div>Loading employees...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {employees.map(emp => (
        <EmployeeCard key={emp._id} {...emp} />
      ))}
    </div>
  );
};

---

### g) Event Handling in React

React event handling is similar to DOM events but with JSX syntax.

/* Click event */
<button onClick={() => console.log('Clicked!')}>Click Me</button>

/* With event object */
<button onClick={(e) => console.log(e.target)}>Click</button>

/* Calling a function */
const handleClick = () => {
  console.log('Button clicked!');
};
<button onClick={handleClick}>Click Me</button>

/* Note: onClick={handleClick} NOT onClick={handleClick()} */
/* With () it calls immediately on render, without () it calls on click */

/* Input change event */
<input
  type='text'
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

/* Form submit */
const handleSubmit = (e) => {
  e.preventDefault();  /* prevent page reload */
  console.log('Form submitted:', formData);
};
<form onSubmit={handleSubmit}>...</form>

---

### h) Lists and Keys

Rendering lists of data in React uses the map() method.
Each item in a list MUST have a unique key prop!

const employees = [
  { _id: '1', name: 'Gurleen', department: 'Engineering' },
  { _id: '2', name: 'Rahul', department: 'Marketing' },
  { _id: '3', name: 'Priya', department: 'HR' }
];

/* Rendering list */
const EmployeeList = () => {
  return (
    <ul>
      {employees.map(employee => (
        <li key={employee._id}>  {/* key must be unique! */}
          {employee.name} - {employee.department}
        </li>
      ))}
    </ul>
  );
};

/* Rendering list with components */
const EmployeeList = () => {
  return (
    <div>
      {employees.map(employee => (
        <EmployeeCard
          key={employee._id}
          name={employee.name}
          department={employee.department}
        />
      ))}
    </div>
  );
};

Why keys are important:
- Keys help React identify which items changed, were added or removed
- Keys must be UNIQUE among siblings
- Use database IDs as keys, not array indexes
- Using index as key can cause bugs with reordering

---

### i) Conditional Rendering

Showing or hiding components based on conditions.

const EmployeeCard = ({ employee, isAdmin }) => {
  return (
    <div>
      <h2>{employee.name}</h2>

      {/* Ternary operator */}
      {employee.isActive
        ? <span className='active'>Active</span>
        : <span className='inactive'>Inactive</span>
      }

      {/* AND operator - render only if true */}
      {isAdmin && <button>Delete Employee</button>}

      {/* Nullish coalescing */}
      <p>{employee.phone ?? 'No phone provided'}</p>
    </div>
  );
};

/* Conditional component rendering */
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <Dashboard /> : <LoginPage />}
    </div>
  );
};

---

### j) React Project Structure

A well organized React project looks like this:

employee-management-system/
  frontend/                    /* React app */
    public/
      index.html
    src/
      components/              /* reusable components */
        Navbar.jsx
        EmployeeCard.jsx
        EmployeeForm.jsx
        Modal.jsx
        Loader.jsx
      pages/                   /* page level components */
        Dashboard.jsx
        EmployeeList.jsx
        AddEmployee.jsx
        EditEmployee.jsx
        EmployeeDetail.jsx
      hooks/                   /* custom hooks */
        useEmployees.js
        useFetch.js
      context/                 /* global state */
        EmployeeContext.jsx
      services/                /* API calls */
        employeeService.js
      utils/                   /* helper functions */
        formatDate.js
        validateForm.js
      App.jsx                  /* root component */
      main.jsx                 /* entry point */
      index.css
    package.json

  backend/                     /* Node + Express API */
    models/
      Employee.js              /* Mongoose schema */
    routes/
      employeeRoutes.js        /* API routes */
    controllers/
      employeeController.js    /* route logic */
    middleware/
      errorHandler.js
    config/
      db.js                    /* MongoDB connection */
    server.js                  /* entry point */
    package.json
    .env                       /* environment variables */

---

### k) Creating a React App

Using Vite (Modern, Fast - Recommended):
npm create vite@latest frontend -- --template react
cd frontend
npm install
npm run dev

Using Create React App (Older, slower):
npx create-react-app frontend
cd frontend
npm start

Vite is much faster and is the new standard for React projects!

---

### l) React File Structure Basics

#### main.jsx (Entry Point):
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

#### App.jsx (Root Component):
import { useState } from 'react'
import Navbar from './components/Navbar'
import EmployeeList from './pages/EmployeeList'
import './App.css'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <main>
        <EmployeeList />
      </main>
    </div>
  )
}

export default App

---

## 7. EMPLOYEE MANAGEMENT SYSTEM - PROJECT PREVIEW

### What we will build starting tomorrow:

#### Features:
- View all employees in a table/card layout
- Add new employee with a form
- Edit existing employee details
- Delete employee with confirmation
- Search employees by name or department
- Filter employees by department
- View individual employee profile
- Dashboard with employee statistics

#### Tech Stack:
Frontend: React + Vite + CSS
Backend:  Node.js + Express.js
Database: MongoDB + Mongoose
API:      REST API

#### API Endpoints we will build:
GET    /api/employees           - fetch all employees
GET    /api/employees/:id       - fetch single employee
POST   /api/employees           - add new employee
PUT    /api/employees/:id       - update employee
DELETE /api/employees/:id       - delete employee
GET    /api/employees/search    - search employees
GET    /api/stats               - dashboard statistics

#### Components we will build:
- App.jsx              - root component with routing
- Navbar.jsx           - top navigation bar
- Dashboard.jsx        - stats overview page
- EmployeeList.jsx     - table of all employees
- EmployeeCard.jsx     - individual employee card
- EmployeeForm.jsx     - add and edit form
- EmployeeDetail.jsx   - single employee profile
- SearchBar.jsx        - search functionality
- Modal.jsx            - confirmation dialogs
- Loader.jsx           - loading spinner
- ErrorMessage.jsx     - error display

---

## Key Takeaway:
The MERN Stack is the complete package for full stack JavaScript development.
MongoDB stores data as JSON documents, Express handles server routing and
API logic, React builds the interactive user interface and Node.js runs
JavaScript on the server. React is built around components which are
reusable pieces of UI, props which pass data from parent to child, and
state which is data that changes over time and triggers re-renders.
The two most important React hooks are useState for managing state and
useEffect for side effects like fetching data. JSX makes writing UI
in JavaScript feel natural and powerful. Tomorrow we begin applying all
of this by building a real world Employee Management System which will
showcase HTML, CSS, JavaScript, React, Express, Node.js and MongoDB
all working together as one complete application!
