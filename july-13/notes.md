# July 13, 2026 - MongoDB Concepts (Detailed)

## What I Studied Today
Today I went deep into MongoDB fundamentals - the NoSQL database powering our MERN stack project (Employee Management System). The goal was to properly understand how our User, Department, and Employee data actually gets stored, queried, and connected behind the scenes, instead of just copying Mongoose code without knowing why it works.

---

## 1. What is MongoDB and Why NoSQL?

- MongoDB is a **NoSQL (Not Only SQL)**, document-oriented database
- Traditional SQL databases (MySQL, PostgreSQL) store data in rigid tables with fixed columns and rows
- MongoDB instead stores data as **documents** inside **collections**, using a flexible, JSON-like structure called **BSON** (Binary JSON)
- BSON supports extra data types beyond regular JSON, like dates, binary data, and ObjectIds

### Why choose MongoDB for a project like EMS?
- Our data model keeps evolving (we added `role` to Users later, then Department references) - MongoDB doesn't force a fixed schema, so this kind of change is painless
- Documents map naturally to JavaScript objects, which fits perfectly with our Express + React (MERN) stack - no complex conversion between JSON and database rows
- Great for horizontal scaling (sharding) if the app grows large

### SQL vs NoSQL - Core Difference
- SQL: data split across multiple related tables, joined at query time
- NoSQL (MongoDB): related data can be **embedded** directly inside one document, or **referenced** across collections - the developer chooses based on the use case

---

## 2. Key Terminology (SQL vs MongoDB Mapping)

| SQL Term      | MongoDB Term   | Meaning                              |
|---------------|----------------|---------------------------------------|
| Database      | Database       | Container for all collections         |
| Table         | Collection     | Group of related documents            |
| Row           | Document       | A single record (like one user)       |
| Column        | Field          | A key inside a document               |
| Primary Key   | _id            | Unique identifier, auto-generated     |
| Join          | Populate / Embedding | How related data is connected  |

---

## 3. Documents and Collections in Depth

A **document** is a single JSON-like record:
```json
{
  "_id": "64f1a2b3c4d5e6f7a8b9c0d1",
  "name": "Gurleen Kaur",
  "email": "gurleen@example.com",
  "role": "admin",
  "createdAt": "2026-07-09T10:00:00Z"
}
```

Key properties of documents:
- Every document automatically gets a unique `_id` field (of type `ObjectId`) unless you provide your own
- Documents in the same collection do **not** need identical fields - one user document could have an extra field another doesn't. This is called a **flexible / dynamic schema**
- Field values can be strings, numbers, booleans, arrays, nested objects, dates, or even other documents

A **collection** groups similar documents together:
- Example: all users go into the `users` collection, all departments into `departments`
- Collections are created automatically the first time you insert a document into them - no need to manually define them upfront (unlike SQL tables)

---

## 4. The `_id` Field and ObjectId

- MongoDB auto-generates a 12-byte `ObjectId` for every new document if you don't specify one
- It encodes information: a timestamp, a random value, and an incrementing counter - meaning IDs are roughly sortable by creation time
- This is why in our project we can do things like `User.findById(id)` - `_id` acts as the natural unique key, similar to a primary key in SQL

---

## 5. Mongoose - Connecting MongoDB with Node.js

Mongoose is an **ODM (Object Data Modeling)** library that sits between our Express server and MongoDB. It gives structure to MongoDB's flexible documents.

### Why use Mongoose instead of the raw MongoDB driver?
- Enforces a schema (data validation) even though MongoDB itself doesn't require one
- Provides built-in validation (`required`, `unique`, `enum`, `min`, `max`, etc.)
- Gives convenient query methods and middleware (hooks like `pre-save`)
- Supports population of referenced documents (explained below)

### Defining a Schema (based on our project's User model)
```javascript
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "employee"], default: "employee" }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
module.exports = User;
```

### Breaking down the schema options:
- `required: true` - field must be provided or the save will fail with a validation error
- `unique: true` - creates a unique index so no two documents can share that email
- `enum: [...]` - restricts the field to only the listed values (used for role-based access in our auth system)
- `default:` - value used if none is provided
- `{ timestamps: true }` - automatically adds `createdAt` and `updatedAt` fields to every document

---

## 6. CRUD Operations in Mongoose (in Detail)

### Create
```javascript
// Method 1
const user = await User.create({ name: "Gurleen", email: "g@x.com", password: "hashed", role: "admin" });

// Method 2
const user = new User({ name: "Gurleen", email: "g@x.com" });
await user.save();
```

### Read
```javascript
await User.find();                      // get all documents
await User.find({ role: "admin" });      // filter by field
await User.findById(id);                 // find by _id
await User.findOne({ email: "g@x.com" }); // find first match
```

### Update
```javascript
await User.findByIdAndUpdate(id, { role: "admin" }, { new: true });
// { new: true } returns the UPDATED document instead of the old one
```

### Delete
```javascript
await User.findByIdAndDelete(id);
await User.deleteMany({ role: "employee" }); // bulk delete
```

---

## 7. Relationships Between Collections

MongoDB is not relational by design, but two common patterns handle relationships:

### a) Embedding (nesting data directly)
Good when data is tightly bound and rarely queried separately:
```javascript
{
  name: "Gurleen",
  address: { city: "Amritsar", pincode: "143001" }
}
```

### b) Referencing (linking via ObjectId) - what our project uses
Good when data is shared/reused across documents, like Departments linked to Employees:
```javascript
const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const employeeSchema = new mongoose.Schema({
  name: String,
  department: { type: mongoose.Schema.Types.ObjectId, ref: "Department" }
});
```

- The `ref: "Department"` tells Mongoose which model this ObjectId points to
- On its own, querying an employee only returns the department's ID, not its full details

### Populate - resolving references
```javascript
const employees = await Employee.find().populate("department");
```
- This replaces the department ObjectId with the actual full department document (name, etc.)
- Similar in spirit to a SQL JOIN, but done at the application level by Mongoose, not the database engine itself

---

## 8. Indexes (Why Queries Are Fast)

- By default, MongoDB creates an index on `_id` for every collection
- We can add custom indexes for fields we query often, e.g. `email` (since `unique: true` auto-creates one)
- Indexes drastically speed up lookups - without them, MongoDB would scan every document (a "collection scan") to find matches

---

## 9. Validation and Error Handling

- Mongoose validation runs automatically before saving, and throws a `ValidationError` if rules are broken (e.g., missing required field, duplicate unique field)
- In our `authController.js`, this is why we wrap `User.create()` in a try/catch - so we can send a proper error response instead of crashing the server

---

## 10. Why This Matters for Our EMS Project

- **User model** uses `enum` + `required` + `unique` to enforce valid, non-duplicate accounts with defined roles - directly powering our login/JWT authentication system
- **Department model** is referenced by Employees using ObjectId - lets us populate full department info on the Admin Dashboard without duplicating department data everywhere
- Flexible schema means as we add new features (like Employee salary, attendance, etc.) later, we can extend models without breaking existing data

---

## Summary
Today's focus was understanding MongoDB's document/collection model, how Mongoose schemas add structure and validation on top of it, the difference between embedding vs referencing related data, and how our project's User-Department relationship actually works using ObjectId references and `.populate()`. This connects the theory directly to the models we've already built in `server/models/`.
