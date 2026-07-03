# July 3, 2026 - JavaScript Functions, Event Handling, Async/Await and Fetch API

## What I Studied Today
Today was one of the most important days of the entire course!
We covered JavaScript Functions in complete depth, Event Handling which
makes websites interactive, and then moved into the most powerful
concepts of modern JavaScript - Asynchronous Programming, Async/Await
and the Fetch API. These topics are used in EVERY real world web
application. After today we can make websites that respond to user
actions AND communicate with servers to fetch real data!

---

## 1. JAVASCRIPT FUNCTIONS - COMPLETE GUIDE

### What is a Function?
A function is a reusable block of code that performs a specific task.
Instead of writing the same code again and again, we write it once
inside a function and call it whenever needed.

### Why Use Functions?
- Reusability: write once, use many times
- Organization: breaks code into logical chunks
- Readability: easier to understand and maintain
- Debugging: easier to find and fix bugs
- DRY Principle: Don't Repeat Yourself

---

### a) Function Declaration

function functionName(parameter1, parameter2) {
  /* function body */
  return result;
}

Example:
function greet(name) {
  return 'Hello ' + name + '! Welcome to MERN Stack!';
}
console.log(greet('Gurleen'));  /* Hello Gurleen! Welcome to MERN Stack! */

Key Points:
- function keyword comes first
- Parameters are inputs (optional)
- return sends back a value (optional)
- If no return, function returns undefined
- Function declarations are HOISTED (can be called before they are defined)

greet('Gurleen');  /* works even before the function definition! */
function greet(name) { return 'Hello ' + name; }

---

### b) Function Expression

const functionName = function(parameter1, parameter2) {
  return result;
};

Example:
const add = function(a, b) {
  return a + b;
};
console.log(add(5, 3));  /* 8 */

Key Points:
- Function is stored in a variable
- NOT hoisted - cannot be called before it is defined
- The function has no name (anonymous function)
- Semicolon at the end because it is a variable assignment

---

### c) Arrow Functions (ES6 - Most Modern Way)

Arrow functions are shorter and cleaner syntax for functions.
They were introduced in ES6 (2015) and are now the most popular way.

/* Full syntax */
const functionName = (parameter1, parameter2) => {
  return result;
};

/* Shorthand - single expression (implicit return) */
const functionName = (parameter1, parameter2) => result;

/* Single parameter - no brackets needed */
const functionName = parameter => result;

/* No parameters */
const functionName = () => result;

Examples:
const add = (a, b) => a + b;
const square = x => x * x;
const greet = name => 'Hello ' + name;
const sayHi = () => 'Hi there!';

/* Multi-line arrow function */
const multiply = (a, b) => {
  let result = a * b;
  console.log('Multiplying...');
  return result;
};

Key Differences from Regular Functions:
- Shorter syntax
- No own 'this' keyword (inherits from parent scope)
- Cannot be used as constructors
- No arguments object
- Perfect for callbacks and array methods

---

### d) Parameters and Arguments

Parameters = variables listed in function definition
Arguments  = actual values passed when calling function

function greet(name, age) {  /* name and age are PARAMETERS */
  return name + ' is ' + age + ' years old';
}
greet('Gurleen', 20);  /* 'Gurleen' and 20 are ARGUMENTS */

#### Default Parameters (ES6):
function greet(name = 'Guest', age = 18) {
  return name + ' is ' + age + ' years old';
}
greet();              /* 'Guest is 18 years old' - uses defaults */
greet('Gurleen');     /* 'Gurleen is 18 years old' - age uses default */
greet('Gurleen', 20); /* 'Gurleen is 20 years old' - no defaults used */

#### Rest Parameters (...args):
Collects all remaining arguments into an array.
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
sum(1, 2, 3);           /* 6 */
sum(1, 2, 3, 4, 5);     /* 15 */
sum(10, 20, 30, 40);    /* 100 */

function introduce(firstName, lastName, ...hobbies) {
  return firstName + ' ' + lastName + ' likes ' + hobbies.join(', ');
}
introduce('Gurleen', 'Kaur', 'coding', 'reading', 'music');
/* 'Gurleen Kaur likes coding, reading, music' */

#### Spread Operator (...):
Expands an array into individual arguments.
function add(a, b, c) { return a + b + c; }
const nums = [1, 2, 3];
add(...nums);  /* same as add(1, 2, 3) = 6 */

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];  /* [1, 2, 3, 4, 5, 6] */

---

### e) Return Statement

Functions can return any data type including objects, arrays, functions!

/* Return a number */
const add = (a, b) => a + b;

/* Return a string */
const greet = name => 'Hello ' + name;

/* Return an object */
const createUser = (name, age) => ({
  name: name,
  age: age,
  isActive: true
});
createUser('Gurleen', 20);  /* { name: 'Gurleen', age: 20, isActive: true } */

/* Return an array */
const getNumbers = () => [1, 2, 3, 4, 5];

/* Return a function (Higher Order Function!) */
const multiplier = factor => number => number * factor;
const double = multiplier(2);
const triple = multiplier(3);
double(5);  /* 10 */
triple(5);  /* 15 */

/* Early return - exit function early based on condition */
function divide(a, b) {
  if (b === 0) return 'Cannot divide by zero!';
  return a / b;
}

---

### f) Scope

Scope determines WHERE variables are accessible in code.

#### Global Scope:
Variables declared outside any function - accessible EVERYWHERE.
let globalVar = 'I am global';
function test() {
  console.log(globalVar);  /* accessible inside function */
}
console.log(globalVar);    /* accessible outside function */

#### Local / Function Scope:
Variables declared inside a function - only accessible INSIDE that function.
function test() {
  let localVar = 'I am local';
  console.log(localVar);  /* works fine */
}
console.log(localVar);    /* ERROR! localVar is not defined */

#### Block Scope (let and const only):
Variables declared inside {} blocks - only accessible inside that block.
if (true) {
  let blockVar = 'I am block scoped';
  const blockConst = 'Me too';
  var notBlock = 'I am NOT block scoped';  /* var ignores block scope! */
}
console.log(blockVar);    /* ERROR! */
console.log(blockConst);  /* ERROR! */
console.log(notBlock);    /* 'I am NOT block scoped' - var leaks out! */

#### Lexical Scope (Closure):
Inner functions can access variables from outer functions.
function outer() {
  let outerVar = 'I am from outer';
  function inner() {
    console.log(outerVar);  /* inner can access outer's variables! */
  }
  inner();
}

---

### g) Closures

A closure is when an inner function REMEMBERS variables from its
outer function even after the outer function has finished executing.

function counter() {
  let count = 0;           /* this variable is 'closed over' */
  return function() {
    count++;
    return count;
  };
}

const myCounter = counter();  /* counter() runs and returns inner function */
myCounter();  /* 1 */
myCounter();  /* 2 */
myCounter();  /* 3 */

count variable is NOT accessible from outside but the inner function
remembers and updates it every time it is called! This is a closure!

Real world use - creating private variables:
function bankAccount(initialBalance) {
  let balance = initialBalance;  /* private - cannot be accessed directly */
  return {
    deposit: amount => { balance += amount; return balance; },
    withdraw: amount => {
      if (amount > balance) return 'Insufficient funds';
      balance -= amount;
      return balance;
    },
    getBalance: () => balance
  };
}
const account = bankAccount(1000);
account.deposit(500);    /* 1500 */
account.withdraw(200);   /* 1300 */
account.getBalance();    /* 1300 */
account.balance;         /* undefined - balance is private! */

---

### h) Higher Order Functions

A Higher Order Function (HOF) is a function that:
- Takes another function as an argument, OR
- Returns a function

This is possible because functions are FIRST CLASS CITIZENS in JavaScript.

#### Functions as Arguments (Callbacks):
function doOperation(a, b, operation) {
  return operation(a, b);
}
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
doOperation(5, 3, add);       /* 8 */
doOperation(5, 3, multiply);  /* 15 */

Most common HOFs - Array Methods:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* map - transforms every element */
numbers.map(n => n * 2);          /* [2,4,6,8,10,12,14,16,18,20] */
numbers.map(n => n + ' items');   /* ['1 items', '2 items'...] */

/* filter - keeps elements that pass condition */
numbers.filter(n => n % 2 === 0); /* [2,4,6,8,10] - even numbers only */
numbers.filter(n => n > 5);       /* [6,7,8,9,10] */

/* reduce - reduces array to single value */
numbers.reduce((sum, n) => sum + n, 0);         /* 55 - sum */
numbers.reduce((max, n) => n > max ? n : max, 0); /* 10 - maximum */

/* find - returns first matching element */
numbers.find(n => n > 5);         /* 6 */

/* every - checks if ALL elements match */
numbers.every(n => n > 0);        /* true */
numbers.every(n => n > 5);        /* false */

/* some - checks if ANY element matches */
numbers.some(n => n > 9);         /* true */
numbers.some(n => n > 100);       /* false */

/* Chaining HOFs */
const result = numbers
  .filter(n => n % 2 === 0)       /* [2,4,6,8,10] */
  .map(n => n * n)                 /* [4,16,36,64,100] */
  .reduce((sum, n) => sum + n, 0); /* 220 */

---

### i) Immediately Invoked Function Expression (IIFE)

A function that runs IMMEDIATELY when it is defined.
Used to create a private scope and avoid polluting global scope.

(function() {
  let privateVar = 'I am private';
  console.log('IIFE ran immediately!');
})();

/* Arrow function IIFE */
(() => {
  console.log('Arrow IIFE!');
})();

/* IIFE with parameters */
((name) => {
  console.log('Hello ' + name);
})('Gurleen');

---

### j) Recursive Functions

A function that calls ITSELF until a base condition is met.

function factorial(n) {
  if (n === 0 || n === 1) return 1;  /* base case */
  return n * factorial(n - 1);        /* recursive call */
}
factorial(5);  /* 5 * 4 * 3 * 2 * 1 = 120 */
factorial(0);  /* 1 */

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
fibonacci(7);  /* 13 */

function countDown(n) {
  if (n <= 0) { console.log('Done!'); return; }
  console.log(n);
  countDown(n - 1);
}
countDown(5);  /* 5, 4, 3, 2, 1, Done! */

---

## 2. EVENT HANDLING - COMPLETE GUIDE

### What is an Event?
An event is something that happens in the browser:
- User clicks a button
- User types in an input
- User moves the mouse
- Page finishes loading
- Form is submitted
- Window is scrolled

JavaScript can LISTEN for these events and RESPOND to them!
This is what makes websites INTERACTIVE!

---

### Ways to Handle Events

#### a) HTML Event Attributes (Avoid - old way)
<button onclick='alert(Clicked!)'>Click Me</button>
Not recommended - mixes HTML and JavaScript.

#### b) DOM Event Properties
const btn = document.querySelector('button');
btn.onclick = function() {
  alert('Button clicked!');
};
Better but can only attach ONE handler per event.

#### c) addEventListener (Best Practice - always use this!)
const btn = document.querySelector('button');
btn.addEventListener('click', function() {
  alert('Button clicked!');
});

/* With arrow function */
btn.addEventListener('click', () => {
  alert('Button clicked!');
});

/* Can attach MULTIPLE handlers to same event */
btn.addEventListener('click', handler1);
btn.addEventListener('click', handler2);  /* both will run! */

/* Remove event listener */
btn.removeEventListener('click', handler1);

---

### Common Event Types

#### Mouse Events:
element.addEventListener('click', handler);       /* single click */
element.addEventListener('dblclick', handler);    /* double click */
element.addEventListener('mousedown', handler);   /* mouse button pressed */
element.addEventListener('mouseup', handler);     /* mouse button released */
element.addEventListener('mouseover', handler);   /* mouse enters element */
element.addEventListener('mouseout', handler);    /* mouse leaves element */
element.addEventListener('mousemove', handler);   /* mouse moves over element */
element.addEventListener('contextmenu', handler); /* right click */

#### Keyboard Events:
document.addEventListener('keydown', handler);    /* key pressed down */
document.addEventListener('keyup', handler);      /* key released */
document.addEventListener('keypress', handler);   /* key pressed (deprecated) */

#### Form Events:
form.addEventListener('submit', handler);         /* form submitted */
input.addEventListener('change', handler);        /* value changed and blurred */
input.addEventListener('input', handler);         /* value changes in real time */
input.addEventListener('focus', handler);         /* element gets focus */
input.addEventListener('blur', handler);          /* element loses focus */
select.addEventListener('change', handler);       /* dropdown selection changed */

#### Window/Document Events:
window.addEventListener('load', handler);         /* page fully loaded */
document.addEventListener('DOMContentLoaded', handler); /* DOM ready */
window.addEventListener('resize', handler);       /* window resized */
window.addEventListener('scroll', handler);       /* page scrolled */
window.addEventListener('beforeunload', handler); /* before page closes */

#### Touch Events (Mobile):
element.addEventListener('touchstart', handler);  /* finger touches screen */
element.addEventListener('touchend', handler);    /* finger lifts from screen */
element.addEventListener('touchmove', handler);   /* finger moves on screen */

---

### The Event Object

When an event fires, JavaScript automatically passes an EVENT OBJECT
to the handler function. It contains information about the event.

btn.addEventListener('click', function(event) {
  console.log(event);              /* the full event object */
  console.log(event.type);         /* 'click' - type of event */
  console.log(event.target);       /* the element that was clicked */
  console.log(event.currentTarget); /* element with the listener */
  console.log(event.timeStamp);    /* when the event occurred */
  console.log(event.clientX);      /* mouse X position */
  console.log(event.clientY);      /* mouse Y position */
});

document.addEventListener('keydown', function(event) {
  console.log(event.key);          /* 'a', 'Enter', 'ArrowUp' etc */
  console.log(event.keyCode);      /* numeric key code */
  console.log(event.ctrlKey);      /* true if Ctrl was held */
  console.log(event.shiftKey);     /* true if Shift was held */
  console.log(event.altKey);       /* true if Alt was held */
});

input.addEventListener('input', function(event) {
  console.log(event.target.value); /* current value of input field */
});

---

### Preventing Default Behavior

Some elements have DEFAULT behaviors:
- clicking a link navigates to URL
- submitting a form reloads the page
- right-clicking shows context menu

event.preventDefault() stops these default behaviors!

/* Prevent form from reloading page on submit */
form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Form submitted without page reload!');
  /* now handle form data with JavaScript */
});

/* Prevent link from navigating */
link.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('Link click intercepted!');
});

/* Prevent right click context menu */
document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
  console.log('Custom context menu!');
});

---

### Event Bubbling and Capturing

When an event fires on a child element, it BUBBLES UP to parent elements.
This means parent event listeners also fire!

HTML:
<div id='grandparent'>
  <div id='parent'>
    <button id='child'>Click Me</button>
  </div>
</div>

JavaScript:
document.getElementById('child').addEventListener('click', () => {
  console.log('Child clicked');
});
document.getElementById('parent').addEventListener('click', () => {
  console.log('Parent clicked');
});
document.getElementById('grandparent').addEventListener('click', () => {
  console.log('Grandparent clicked');
});

When button is clicked, output is:
Child clicked
Parent clicked
Grandparent clicked
Event BUBBLES UP from child to parent to grandparent!

#### Stop Bubbling:
btn.addEventListener('click', function(event) {
  event.stopPropagation();  /* stops event from bubbling up */
  console.log('Only child fires!');
});

#### Event Capturing (third parameter = true):
parent.addEventListener('click', handler, true);  /* fires during capture phase */
child.addEventListener('click', handler, false);  /* fires during bubble phase (default) */

---

### Event Delegation

Instead of attaching listeners to many child elements,
attach ONE listener to the PARENT and check which child was clicked.
This is more efficient and works for dynamically added elements!

/* Without delegation - inefficient */
document.querySelectorAll('li').forEach(li => {
  li.addEventListener('click', () => console.log('Item clicked'));
});

/* With delegation - efficient */
document.querySelector('ul').addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    console.log('Item clicked: ' + event.target.textContent);
  }
});

Benefits:
- One listener instead of many
- Works for dynamically added elements
- Better memory performance

---

### DOM Manipulation with Events

#### Selecting Elements:
document.getElementById('myId');          /* by ID */
document.querySelector('.myClass');       /* first match by CSS selector */
document.querySelectorAll('.myClass');    /* all matches - NodeList */
document.getElementsByClassName('name'); /* by class name - HTMLCollection */
document.getElementsByTagName('div');    /* by tag name */

#### Changing Content:
element.textContent = 'New text';        /* changes text only */
element.innerHTML = '<b>Bold text</b>';  /* changes HTML content */
element.innerText = 'Visible text';      /* changes visible text */

#### Changing Styles:
element.style.color = 'red';
element.style.backgroundColor = '#6c5ce7';
element.style.fontSize = '20px';
element.style.display = 'none';          /* hide element */
element.style.display = 'block';         /* show element */

#### Changing Classes:
element.classList.add('active');         /* add class */
element.classList.remove('active');      /* remove class */
element.classList.toggle('active');      /* add if not there, remove if there */
element.classList.contains('active');    /* true/false - check if class exists */
element.classList.replace('old', 'new'); /* replace one class with another */

#### Changing Attributes:
element.getAttribute('src');             /* get attribute value */
element.setAttribute('src', 'new.jpg'); /* set attribute value */
element.removeAttribute('disabled');     /* remove attribute */
element.hasAttribute('disabled');        /* true/false */

#### Creating and Adding Elements:
const newDiv = document.createElement('div');
newDiv.textContent = 'I am new!';
newDiv.classList.add('card');
document.body.appendChild(newDiv);       /* add at end of body */
parent.insertBefore(newDiv, sibling);    /* insert before sibling */
parent.prepend(newDiv);                  /* add at start of parent */
parent.append(newDiv);                   /* add at end of parent */

#### Removing Elements:
element.remove();                        /* remove element itself */
parent.removeChild(child);              /* remove child from parent */

---

### Complete Event Handling Example

HTML:
<div id='app'>
  <input type='text' id='taskInput' placeholder='Enter a task'>
  <button id='addBtn'>Add Task</button>
  <ul id='taskList'></ul>
</div>

JavaScript:
const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

/* Add task on button click */
addBtn.addEventListener('click', addTask);

/* Add task on Enter key press */
input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') addTask();
});

function addTask() {
  const taskText = input.value.trim();
  if (taskText === '') return;  /* do nothing if empty */

  const li = document.createElement('li');
  li.textContent = taskText;

  /* Delete task on click (event delegation) */
  li.addEventListener('click', function() {
    li.remove();
  });

  taskList.appendChild(li);
  input.value = '';  /* clear input */
  input.focus();     /* put cursor back in input */
}

---

## 3. ASYNCHRONOUS JAVASCRIPT

### What is Synchronous vs Asynchronous?

SYNCHRONOUS: Code runs line by line, one at a time.
Each line WAITS for the previous one to finish before running.

console.log('First');
console.log('Second');
console.log('Third');
/* Output: First, Second, Third - in order */

ASYNCHRONOUS: Some operations take time (fetching data, reading files,
waiting for timers). Instead of BLOCKING everything, JavaScript
continues running other code while waiting for the slow operation.

console.log('First');
setTimeout(() => console.log('Second'), 2000);  /* wait 2 seconds */
console.log('Third');
/* Output: First, Third, Second */
Third prints BEFORE Second because setTimeout is async!

### Why Do We Need Async?
- Fetching data from an API takes time (hundreds of milliseconds)
- Reading files takes time
- Database queries take time
- If JavaScript waited (blocked) for each, websites would freeze!
- Async lets JavaScript do other things while waiting

---

### a) Callbacks

The original way to handle async code.
A callback is a function passed as argument to be called LATER.

function fetchData(callback) {
  setTimeout(function() {
    const data = { name: 'Gurleen', course: 'MERN Stack' };
    callback(data);  /* call the callback with data when ready */
  }, 2000);
}

fetchData(function(data) {
  console.log(data.name);  /* runs after 2 seconds */
});

#### Callback Hell (Pyramid of Doom):
The problem with callbacks - deeply nested code!

fetchUser(function(user) {
  fetchPosts(user.id, function(posts) {
    fetchComments(posts[0].id, function(comments) {
      fetchLikes(comments[0].id, function(likes) {
        /* deeply nested - very hard to read and maintain! */
        console.log(likes);
      });
    });
  });
});

This is called CALLBACK HELL and is why Promises were introduced!

---

### b) Promises

A Promise is an object representing the EVENTUAL completion or failure
of an asynchronous operation.

A Promise has 3 states:
- PENDING  : operation is still running
- FULFILLED: operation completed successfully (resolved)
- REJECTED : operation failed (rejected)

#### Creating a Promise:
const myPromise = new Promise(function(resolve, reject) {
  /* do some async operation */
  const success = true;
  if (success) {
    resolve('Operation succeeded!');   /* call resolve with result */
  } else {
    reject('Operation failed!');       /* call reject with error */
  }
});

#### Using a Promise:
myPromise
  .then(function(result) {
    console.log(result);  /* 'Operation succeeded!' */
  })
  .catch(function(error) {
    console.log(error);   /* 'Operation failed!' */
  })
  .finally(function() {
    console.log('Always runs!');  /* runs whether success or failure */
  });

#### Promise with setTimeout:
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
wait(2000).then(() => console.log('2 seconds passed!'));

#### Promise Chaining:
fetch('https://api.example.com/user')
  .then(response => response.json())
  .then(user => fetch('https://api.example.com/posts/' + user.id))
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(error => console.error('Error:', error));

Much cleaner than callback hell but still a bit hard to read!

#### Promise.all - Run multiple promises simultaneously:
const promise1 = fetch('/api/users');
const promise2 = fetch('/api/posts');
const promise3 = fetch('/api/comments');

Promise.all([promise1, promise2, promise3])
  .then(([users, posts, comments]) => {
    console.log('All data fetched!');
  })
  .catch(error => console.error('One failed:', error));
Waits for ALL promises to resolve. Fails if ANY one fails.

#### Promise.allSettled - Wait for all, get all results:
Promise.allSettled([promise1, promise2, promise3])
  .then(results => {
    results.forEach(result => {
      if (result.status === 'fulfilled') console.log(result.value);
      else console.log('Failed:', result.reason);
    });
  });
Waits for ALL, does NOT fail even if some reject.

#### Promise.race - First one wins:
Promise.race([promise1, promise2, promise3])
  .then(result => console.log('First to finish:', result));
Returns result of whichever promise resolves FIRST.

#### Promise.any - First success wins:
Promise.any([promise1, promise2, promise3])
  .then(result => console.log('First success:', result))
  .catch(() => console.log('All failed!'));
Returns first SUCCESSFUL result. Only fails if ALL fail.

---

### c) Async / Await (Most Modern and Clean Way!)

Async/Await is syntactic sugar built on top of Promises.
It makes async code look and behave like synchronous code!
This is the STANDARD way to write async JavaScript today.

#### async keyword:
Adding async before a function makes it return a Promise automatically.
async function myFunction() {
  return 'Hello';
}
myFunction();          /* returns Promise { 'Hello' } */
myFunction().then(console.log);  /* 'Hello' */

#### await keyword:
await pauses execution INSIDE an async function until Promise resolves.
await can ONLY be used inside async functions!

async function fetchUser() {
  const response = await fetch('https://api.example.com/user');
  const user = await response.json();
  console.log(user);
  return user;
}

Without await:
function fetchUser() {
  fetch('https://api.example.com/user')
    .then(response => response.json())
    .then(user => console.log(user));
}

async/await is much cleaner and easier to read!

#### Error Handling with try/catch:
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('HTTP error! Status: ' + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
  } finally {
    console.log('Fetch attempt completed');
  }
}

#### Multiple awaits:
async function loadDashboard() {
  try {
    const usersResponse = await fetch('/api/users');
    const users = await usersResponse.json();

    const postsResponse = await fetch('/api/posts');
    const posts = await postsResponse.json();

    const statsResponse = await fetch('/api/stats');
    const stats = await statsResponse.json();

    return { users, posts, stats };
  } catch (error) {
    console.error('Dashboard load failed:', error);
  }
}

#### Parallel fetching with async/await (faster!):
async function loadDashboardFast() {
  try {
    /* Start ALL fetches at the same time */
    const [usersRes, postsRes, statsRes] = await Promise.all([
      fetch('/api/users'),
      fetch('/api/posts'),
      fetch('/api/stats')
    ]);

    /* Then parse all responses */
    const [users, posts, stats] = await Promise.all([
      usersRes.json(),
      postsRes.json(),
      statsRes.json()
    ]);

    return { users, posts, stats };
  } catch (error) {
    console.error('Error:', error);
  }
}
This is MUCH faster because all three fetches run simultaneously!

---

## 4. FETCH API - COMPLETE GUIDE

### What is the Fetch API?
The Fetch API is the modern built-in JavaScript way to make
HTTP requests to servers and APIs.
It replaced the older XMLHttpRequest (XHR) and is much cleaner.

fetch() always returns a PROMISE that resolves to a Response object.

---

### Basic Fetch Syntax:
fetch(url, options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

/* With async/await (preferred) */
async function getData() {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

---

### The Response Object:

After fetch resolves, you get a Response object with:
response.ok;           /* true if status 200-299 */
response.status;       /* HTTP status code: 200, 404, 500 etc */
response.statusText;   /* 'OK', 'Not Found', 'Internal Server Error' */
response.url;          /* the URL that was fetched */
response.headers;      /* response headers */

/* Parsing the body (choose ONE based on content type): */
response.json();       /* parse as JSON - returns Promise */
response.text();       /* parse as plain text - returns Promise */
response.blob();       /* parse as binary (images, files) - returns Promise */
response.formData();   /* parse as form data - returns Promise */
response.arrayBuffer(); /* parse as raw binary data */

---

### HTTP Methods with Fetch:

#### GET Request (Fetch data):
async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Failed to fetch users');
    const users = await response.json();
    console.log(users);
    return users;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

#### POST Request (Send data):
async function createUser(userData) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer your-token-here'
      },
      body: JSON.stringify(userData)  /* convert object to JSON string */
    });
    if (!response.ok) throw new Error('Failed to create user');
    const newUser = await response.json();
    console.log('Created user:', newUser);
    return newUser;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

createUser({ name: 'Gurleen', email: 'gurleen@email.com', course: 'MERN' });

#### PUT Request (Update entire resource):
async function updateUser(id, userData) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    const updatedUser = await response.json();
    return updatedUser;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

#### PATCH Request (Update part of resource):
async function updateUserName(id, newName) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newName })  /* only send what changes */
    });
    const updatedUser = await response.json();
    return updatedUser;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

#### DELETE Request (Delete resource):
async function deleteUser(id) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('Failed to delete');
    console.log('User ' + id + ' deleted successfully');
    return true;
  } catch (error) {
    console.error('Error:', error.message);
    return false;
  }
}

---

### Fetch Options Object (All Available Options):

fetch(url, {
  method: 'POST',          /* GET, POST, PUT, PATCH, DELETE */
  headers: {               /* HTTP headers */
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123',
    'Accept': 'application/json',
    'X-Custom-Header': 'value'
  },
  body: JSON.stringify(data),  /* request body (not for GET) */
  mode: 'cors',            /* cors, no-cors, same-origin */
  credentials: 'include',  /* include, same-origin, omit */
  cache: 'no-cache',       /* default, no-cache, reload, force-cache */
  redirect: 'follow',      /* follow, error, manual */
  signal: abortController.signal  /* for cancelling requests */
});

---

### Cancelling Fetch Requests (AbortController):

const controller = new AbortController();
const signal = controller.signal;

async function fetchWithTimeout(url, timeout = 5000) {
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, { signal });
    clearTimeout(timeoutId);
    return await response.json();
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Request was cancelled - took too long!');
    } else {
      throw error;
    }
  }
}

/* Cancel manually */
controller.abort();  /* cancels the fetch immediately */

---

### Working with Real APIs:

#### JSONPlaceholder (Free Fake REST API for practice):
Base URL: https://jsonplaceholder.typicode.com

Endpoints:
/posts          - 100 posts
/comments       - 500 comments
/albums         - 100 albums
/photos         - 5000 photos
/todos          - 200 todos
/users          - 10 users

/* Fetch all posts */
async function getAllPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  console.log(posts.length);  /* 100 */
  return posts;
}

/* Fetch single post */
async function getPost(id) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
  const post = await response.json();
  return post;
}

/* Fetch with query parameters */
async function getUserPosts(userId) {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?userId=' + userId
  );
  const posts = await response.json();
  return posts;
}

---

### Displaying API Data in HTML:

HTML:
<div id='loading'>Loading users...</div>
<div id='error' style='display:none; color:red;'></div>
<div id='userContainer'></div>

JavaScript:
async function displayUsers() {
  const loading = document.getElementById('loading');
  const errorDiv = document.getElementById('error');
  const container = document.getElementById('userContainer');

  try {
    loading.style.display = 'block';
    errorDiv.style.display = 'none';

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Failed to load users');
    const users = await response.json();

    loading.style.display = 'none';

    container.innerHTML = users.map(user => '
      <div class=card>
        <h3>' + user.name + '</h3>
        <p>Email: ' + user.email + '</p>
        <p>Phone: ' + user.phone + '</p>
        <p>Company: ' + user.company.name + '</p>
      </div>
    ').join('');

  } catch (error) {
    loading.style.display = 'none';
    errorDiv.style.display = 'block';
    errorDiv.textContent = 'Error: ' + error.message;
  }
}

displayUsers();

---

### Complete Mini Project - Weather App Structure:

async function getWeather(city) {
  const API_KEY = 'your-api-key';
  const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

  try {
    const response = await fetch(
      BASE_URL + '?q=' + city + '&appid=' + API_KEY + '&units=metric'
    );

    if (!response.ok) {
      if (response.status === 404) throw new Error('City not found!');
      throw new Error('Weather service unavailable');
    }

    const weather = await response.json();

    return {
      city: weather.name,
      country: weather.sys.country,
      temperature: Math.round(weather.main.temp),
      feelsLike: Math.round(weather.main.feels_like),
      humidity: weather.main.humidity,
      description: weather.weather[0].description,
      icon: weather.weather[0].icon,
      windSpeed: weather.wind.speed
    };

  } catch (error) {
    console.error('Weather fetch error:', error.message);
    throw error;
  }
}

/* Usage */
getWeather('Ludhiana')
  .then(data => console.log(data))
  .catch(err => console.error(err));

---

## 5. LOCAL STORAGE AND SESSION STORAGE

Often used together with Fetch API to cache data locally!

/* localStorage - persists even after browser closes */
localStorage.setItem('username', 'Gurleen');
localStorage.getItem('username');          /* 'Gurleen' */
localStorage.removeItem('username');
localStorage.clear();                      /* clears ALL localStorage */

/* Store objects (must stringify) */
const user = { name: 'Gurleen', course: 'MERN' };
localStorage.setItem('user', JSON.stringify(user));
const retrieved = JSON.parse(localStorage.getItem('user'));

/* sessionStorage - clears when browser tab closes */
sessionStorage.setItem('token', 'abc123');
sessionStorage.getItem('token');
sessionStorage.removeItem('token');

---

## Key Takeaway:
Functions are the building blocks of JavaScript - master all types
from declarations to arrow functions to closures and higher order functions.
Event handling is what makes websites interactive - always use
addEventListener and understand the event object, bubbling and delegation.
Asynchronous JavaScript is essential for modern web development -
start with understanding callbacks, then Promises, then master
Async/Await which is the standard today. The Fetch API is how
JavaScript communicates with servers and external APIs - understanding
GET POST PUT PATCH DELETE and proper error handling is must have knowledge
for any MERN Stack developer. These four topics together - Functions,
Events, Async/Await and Fetch - form the complete foundation of
modern frontend JavaScript development and everything in React and
Node.js builds on top of exactly these concepts!
