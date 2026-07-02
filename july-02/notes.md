# July 2, 2026 - JavaScript Data Types

## What I Studied Today
Today we started JavaScript - the most important programming language
for web development! JavaScript makes websites INTERACTIVE and DYNAMIC.
HTML gives structure, CSS gives style, but JavaScript gives BEHAVIOUR.
Today we covered JavaScript Data Types in complete detail - understanding
data types is the foundation of all programming in JavaScript.
Every value in JavaScript has a data type and understanding them deeply
is essential before moving forward!

---

## 1. WHAT IS JAVASCRIPT?

JavaScript is a lightweight, interpreted, high level programming language.
It runs directly in the browser without needing any compilation.
JavaScript can:
- Change HTML content dynamically
- Change CSS styles dynamically
- Respond to user events (clicks, keypresses, scrolling)
- Validate forms before sending to server
- Fetch data from APIs without reloading page
- Create animations and interactive effects
- Build complete web applications (frontend AND backend with Node.js)

JavaScript was created in 1995 by Brendan Eich in just 10 days!
Today it is the most popular programming language in the world.

---

## 2. HOW TO ADD JAVASCRIPT TO HTML

### a) Inline JavaScript
Written directly inside an HTML tag using event attributes.
<button onclick='alert(Hello World)'>Click Me</button>
Not recommended for large projects.

### b) Internal JavaScript
Written inside <script> tag within the HTML file.
<script>
  console.log('Hello World');
</script>
Can be placed in <head> or at bottom of <body>.
Best practice: place at BOTTOM of <body> so HTML loads first.

### c) External JavaScript
Written in a separate .js file and linked to HTML.
<script src='script.js'></script>
Best practice for all real projects!

---

## 3. WHAT ARE DATA TYPES?

A data type tells JavaScript WHAT KIND OF VALUE a variable holds.
Different data types behave differently and support different operations.

JavaScript has TWO categories of data types:

PRIMITIVE DATA TYPES (7 types):
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol
7. BigInt

NON-PRIMITIVE / REFERENCE DATA TYPES:
1. Object
2. Array
3. Function

---

## 4. VARIABLES IN JAVASCRIPT

Before data types, we need to understand variables.
Variables are containers that STORE data values.

### Three ways to declare variables:

#### var (Old way - avoid using)
var name = 'Gurleen';
var age = 20;
- Function scoped
- Can be redeclared and reassigned
- Gets hoisted to top of scope
- Avoid using in modern JavaScript

#### let (Modern - use for changeable values)
let name = 'Gurleen';
let age = 20;
age = 21;   /* can be reassigned */
- Block scoped
- Can be reassigned but NOT redeclared in same scope
- Most commonly used in modern JavaScript

#### const (Modern - use for fixed values)
const PI = 3.14159;
const courseName = 'MERN Stack';
- Block scoped
- CANNOT be reassigned or redeclared
- Must be assigned a value when declared
- Use const by default, only use let when you know value will change

### Rules for naming variables:
- Can contain letters, numbers, underscore _, dollar sign $
- Cannot START with a number
- Cannot use reserved keywords (let, const, if, for etc)
- Case sensitive: myName and myname are DIFFERENT variables
- Use camelCase convention: firstName, lastName, totalPrice

---

## 5. PRIMITIVE DATA TYPES IN DETAIL

### a) NUMBER

JavaScript has only ONE number type for ALL numbers.
This includes integers, decimals, negative numbers.

let age = 25;                  /* integer */
let price = 99.99;             /* decimal / float */
let temperature = -10;         /* negative */
let big = 1000000;             /* large number */
let sci = 1.5e6;               /* scientific notation = 1500000 */

#### Special Number Values:
let inf = Infinity;            /* positive infinity */
let negInf = -Infinity;        /* negative infinity */
let notNum = NaN;              /* Not a Number */

console.log(10 / 0);           /* Infinity */
console.log(-10 / 0);          /* -Infinity */
console.log('hello' / 2);      /* NaN - cannot divide string by number */

#### Number Methods:
let num = 3.14159;
num.toFixed(2);                /* '3.14' - rounds to 2 decimal places */
num.toString();                /* '3.14159' - converts number to string */
Number.isInteger(5);           /* true */
Number.isInteger(5.5);         /* false */
Number.isNaN(NaN);             /* true */
Number.isFinite(Infinity);     /* false */
Number.isFinite(100);          /* true */
parseInt('42px');              /* 42 - extracts integer from string */
parseFloat('3.14abc');         /* 3.14 - extracts decimal from string */

#### Math Object:
Math.round(4.6);               /* 5 - rounds to nearest integer */
Math.ceil(4.2);                /* 5 - always rounds UP */
Math.floor(4.9);               /* 4 - always rounds DOWN */
Math.abs(-10);                 /* 10 - absolute value (removes negative) */
Math.max(1, 5, 3, 9, 2);      /* 9 - finds maximum value */
Math.min(1, 5, 3, 9, 2);      /* 1 - finds minimum value */
Math.pow(2, 10);               /* 1024 - 2 to the power of 10 */
Math.sqrt(25);                 /* 5 - square root */
Math.random();                 /* random decimal between 0 and 1 */
Math.floor(Math.random() * 10); /* random integer between 0 and 9 */
Math.PI;                       /* 3.141592653589793 */

#### Arithmetic Operators:
let a = 10, b = 3;
a + b;    /* 13  - addition */
a - b;    /* 7   - subtraction */
a * b;    /* 30  - multiplication */
a / b;    /* 3.33... - division */
a % b;    /* 1   - modulus (remainder) */
a ** b;   /* 1000 - exponentiation (10 to power 3) */

#### Increment and Decrement:
let x = 5;
x++;      /* post increment - returns 5, then x becomes 6 */
++x;      /* pre increment - x becomes 7, then returns 7 */
x--;      /* post decrement - returns 7, then x becomes 6 */
--x;      /* pre decrement - x becomes 5, then returns 5 */

#### Assignment Operators:
let n = 10;
n += 5;   /* n = n + 5 = 15 */
n -= 3;   /* n = n - 3 = 12 */
n *= 2;   /* n = n * 2 = 24 */
n /= 4;   /* n = n / 4 = 6 */
n %= 4;   /* n = n % 4 = 2 */
n **= 3;  /* n = n ** 3 = 8 */

---

### b) STRING

Strings are sequences of characters - text, words, sentences.
Strings must be wrapped in quotes.

let name = 'Gurleen';           /* single quotes */
let city = 'Ludhiana';          /* double quotes */
let course = 'MERN Stack';      /* backticks (template literal) */

All three types of quotes work, but backticks have EXTRA POWERS!

#### String Indexing:
Every character in a string has an INDEX starting from 0.
let str = 'Hello';
str[0]  /* 'H' */
str[1]  /* 'e' */
str[4]  /* 'o' */
str[str.length - 1]  /* 'o' - last character */

#### String Properties:
let str = 'Hello World';
str.length;            /* 11 - number of characters including space */

#### String Methods:
let str = 'Hello World';

/* Case conversion */
str.toUpperCase();     /* 'HELLO WORLD' */
str.toLowerCase();     /* 'hello world' */

/* Searching */
str.indexOf('World');  /* 6 - index where 'World' starts */
str.indexOf('xyz');    /* -1 - returns -1 if not found */
str.includes('Hello'); /* true - checks if string contains value */
str.startsWith('Hello'); /* true */
str.endsWith('World');   /* true */

/* Extracting */
str.slice(0, 5);       /* 'Hello' - from index 0 to 5 (not including 5) */
str.slice(6);          /* 'World' - from index 6 to end */
str.slice(-5);         /* 'World' - last 5 characters */
str.substring(0, 5);   /* 'Hello' - similar to slice */

/* Modifying */
str.replace('World', 'JavaScript'); /* 'Hello JavaScript' */
str.replaceAll('l', 'L');           /* 'HeLLo WorLd' */
str.trim();            /* removes whitespace from both ends */
str.trimStart();       /* removes whitespace from start only */
str.trimEnd();         /* removes whitespace from end only */

/* Splitting and Joining */
str.split(' ');        /* ['Hello', 'World'] - splits into array */
str.split('');         /* ['H','e','l','l','o',' ','W','o','r','l','d'] */
'Hello'.split('').join('-'); /* 'H-e-l-l-o' */

/* Repeating and Padding */
'Ha'.repeat(3);        /* 'HaHaHa' */
'5'.padStart(3, '0');  /* '005' - pad with zeros at start */
'5'.padEnd(3, '0');    /* '500' - pad with zeros at end */

/* Getting character */
str.charAt(0);         /* 'H' - character at index 0 */
str.charCodeAt(0);     /* 72 - ASCII code of 'H' */

#### Template Literals (Backticks) - VERY IMPORTANT!
Template literals use backtick characters and allow:
1. String interpolation (embedding variables directly)
2. Multi-line strings

let name = 'Gurleen';
let course = 'MERN Stack';
let age = 20;

/* Old way - string concatenation */
let msg1 = 'My name is ' + name + ' and I am learning ' + course;

/* New way - template literal (much cleaner!) */
let msg2 = 'My name is  and I am learning ';
let msg3 = 'Next year I will be  years old';

/* Multi-line string */
let multiLine = 'Line 1
Line 2
Line 3';

/* Expression inside template literal */
let a = 10, b = 20;
console.log('Sum of  and  is ');
/* Output: Sum of 10 and 20 is 30 */

#### String Concatenation:
let firstName = 'Gurleen';
let lastName = 'Kaur';
let fullName = firstName + ' ' + lastName;  /* 'Gurleen Kaur' */

---

### c) BOOLEAN

Boolean has only TWO possible values: true or false.
Used for conditions, comparisons and decision making.

let isLoggedIn = true;
let hasAccount = false;
let isAdult = true;
let isPremium = false;

#### Comparison Operators (return boolean):
let a = 10, b = 20;
a == b;    /* false - equal value (loose) */
a != b;    /* true  - not equal value */
a === b;   /* false - equal value AND type (strict - ALWAYS USE THIS!) */
a !== b;   /* true  - not equal value or type */
a > b;     /* false - greater than */
a < b;     /* true  - less than */
a >= b;    /* false - greater than or equal */
a <= b;    /* true  - less than or equal */

#### == vs === (VERY IMPORTANT!)
== checks only VALUE (does type conversion)
=== checks VALUE AND TYPE (no type conversion)

5 == '5';     /* true  - because '5' is converted to 5 */
5 === '5';    /* false - number 5 is not same type as string '5' */
0 == false;   /* true  - because false converts to 0 */
0 === false;  /* false - number is not boolean */
null == undefined;  /* true */
null === undefined; /* false */

ALWAYS use === in JavaScript to avoid unexpected bugs!

#### Logical Operators:
let isAdult = true;
let hasID = false;

/* AND operator - both must be true */
isAdult && hasID;   /* false - because hasID is false */

/* OR operator - at least one must be true */
isAdult || hasID;   /* true - because isAdult is true */

/* NOT operator - reverses the boolean */
!isAdult;           /* false - reverses true to false */
!hasID;             /* true  - reverses false to true */

#### Truthy and Falsy Values (VERY IMPORTANT!)
In JavaScript, values that are NOT strictly true or false
can still behave like booleans in conditions.

FALSY values (behave like false):
false, 0, -0, '', null, undefined, NaN

TRUTHY values (behave like true):
Everything else! Including:
true, 1, -1, 'hello', [], {}, 'false', '0', Infinity

Examples:
if (0)         { } /* does NOT run - 0 is falsy */
if ('')        { } /* does NOT run - empty string is falsy */
if (null)      { } /* does NOT run - null is falsy */
if ('Gurleen') { } /* RUNS - non-empty string is truthy */
if (42)        { } /* RUNS - non-zero number is truthy */
if ([])        { } /* RUNS - empty array is truthy! */

---

### d) UNDEFINED

A variable that has been DECLARED but NOT assigned a value
automatically gets the value undefined.

let x;
console.log(x);           /* undefined */
console.log(typeof x);    /* 'undefined' */

let person = {name: 'Gurleen'};
console.log(person.age);  /* undefined - property does not exist */

function greet() {
  /* no return statement */
}
console.log(greet());     /* undefined - function returns nothing */

undefined means: variable exists but has no value yet.

---

### e) NULL

null is an INTENTIONAL absence of any value.
It means: I am DELIBERATELY setting this to have no value.

let selectedUser = null;   /* no user selected yet */
let data = null;           /* no data loaded yet */

console.log(typeof null);  /* 'object' - this is a famous JS bug! */

#### null vs undefined:
undefined = variable declared but never assigned (unintentional)
null      = variable intentionally set to have no value

let a;           /* undefined - forgot to assign */
let b = null;    /* null - deliberately empty */

null == undefined;   /* true  - loose comparison */
null === undefined;  /* false - strict comparison */

---

### f) SYMBOL

Symbol is a unique and immutable primitive value.
Every Symbol is GUARANTEED to be unique, even if two symbols
have the same description.

const id1 = Symbol('id');
const id2 = Symbol('id');
console.log(id1 === id2);  /* false - they are always unique! */

Mainly used for:
- Creating unique object property keys
- Avoiding naming conflicts in large codebases
- Well-known symbols for customizing JS behavior

const USER_ID = Symbol('userId');
const user = {
  name: 'Gurleen',
  [USER_ID]: 12345   /* symbol as object key */
};

---

### g) BIGINT

BigInt is used for numbers LARGER than Number can safely handle.
Regular numbers are safe up to 2^53 - 1 = 9007199254740991

const bigNumber = 9007199254740991n;   /* add 'n' at the end */
const anotherBig = BigInt(9007199254740991);

console.log(typeof bigNumber);  /* 'bigint' */

/* Cannot mix BigInt and regular Number */
bigNumber + 1n;    /* correct */
bigNumber + 1;     /* ERROR! */

Used in: cryptography, financial calculations, scientific computing.

---

## 6. NON-PRIMITIVE / REFERENCE DATA TYPES

### a) OBJECT

Objects store MULTIPLE values as key-value pairs.
They represent real world entities with properties.

let person = {
  name: 'Gurleen',
  age: 20,
  course: 'MERN Stack',
  city: 'Ludhiana',
  isStudent: true
};

#### Accessing Object Properties:
/* Dot notation */
person.name;         /* 'Gurleen' */
person.age;          /* 20 */

/* Bracket notation - use when key has spaces or is dynamic */
person['name'];      /* 'Gurleen' */
person['course'];    /* 'MERN Stack' */

let key = 'city';
person[key];         /* 'Ludhiana' */

#### Modifying Objects:
person.age = 21;              /* update existing property */
person.email = 'g@email.com'; /* add new property */
delete person.city;           /* delete a property */

#### Nested Objects:
let student = {
  name: 'Gurleen',
  address: {
    city: 'Ludhiana',
    state: 'Punjab',
    pincode: '141001'
  },
  marks: {
    html: 95,
    css: 90,
    javascript: 85
  }
};
student.address.city;    /* 'Ludhiana' */
student.marks.html;      /* 95 */

#### Object Methods:
Object.keys(person);     /* ['name', 'age', 'course', 'city'] - array of keys */
Object.values(person);   /* ['Gurleen', 20, 'MERN Stack', 'Ludhiana'] - array of values */
Object.entries(person);  /* [['name','Gurleen'], ['age',20], ...] - array of pairs */
Object.assign({}, person); /* creates a shallow copy of object */

---

### b) ARRAY

Arrays store MULTIPLE values in an ORDERED LIST.
Each value has an index starting from 0.

let fruits = ['Apple', 'Banana', 'Mango', 'Orange'];
let numbers = [1, 2, 3, 4, 5];
let mixed = ['Gurleen', 20, true, null];  /* can store different types */

#### Accessing Array Elements:
fruits[0];             /* 'Apple' */
fruits[2];             /* 'Mango' */
fruits[fruits.length - 1]; /* 'Orange' - last element */

#### Array Methods:
let arr = [1, 2, 3, 4, 5];

/* Adding elements */
arr.push(6);           /* adds to END - [1,2,3,4,5,6] */
arr.unshift(0);        /* adds to START - [0,1,2,3,4,5,6] */

/* Removing elements */
arr.pop();             /* removes from END - returns removed element */
arr.shift();           /* removes from START - returns removed element */

/* Finding elements */
arr.indexOf(3);        /* 2 - index of value 3 */
arr.includes(4);       /* true - checks if value exists */
arr.find(x => x > 3); /* 4 - first element that satisfies condition */
arr.findIndex(x => x > 3); /* 3 - index of first matching element */

/* Transforming */
arr.reverse();         /* reverses the array in place */
arr.sort();            /* sorts array (alphabetically by default) */
arr.sort((a,b) => a - b);  /* sorts numbers in ascending order */
arr.join(', ');        /* '1, 2, 3, 4, 5' - joins into string */

/* Extracting */
arr.slice(1, 3);       /* [2, 3] - extract without modifying original */
arr.splice(1, 2);      /* removes 2 elements starting at index 1 */
arr.splice(1, 0, 10);  /* inserts 10 at index 1 without removing */

/* Iterating */
arr.forEach(x => console.log(x));  /* loops through each element */
arr.map(x => x * 2);               /* [2,4,6,8,10] - new array with doubled values */
arr.filter(x => x > 2);            /* [3,4,5] - new array with elements > 2 */
arr.reduce((sum, x) => sum + x, 0); /* 15 - reduces to single value (sum) */
arr.every(x => x > 0);             /* true - checks if ALL elements satisfy condition */
arr.some(x => x > 4);              /* true - checks if ANY element satisfies condition */

/* Flattening */
[1, [2, 3], [4, [5]]].flat();      /* [1, 2, 3, 4, [5]] - flattens one level */
[1, [2, [3, [4]]]].flat(Infinity); /* [1, 2, 3, 4] - flattens all levels */

/* Spreading */
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];  /* [1, 2, 3, 4, 5, 6] */

---

### c) FUNCTION (also a data type in JavaScript!)

Functions are reusable blocks of code.
In JavaScript, functions are FIRST CLASS CITIZENS -
they can be stored in variables, passed as arguments and returned!

/* Function Declaration */
function greet(name) {
  return 'Hello ' + name + '!';
}
greet('Gurleen');  /* 'Hello Gurleen!' */

/* Function Expression */
const greet = function(name) {
  return 'Hello ' + name + '!';
};

/* Arrow Function (Modern - most commonly used) */
const greet = (name) => 'Hello ' + name + '!';
const add = (a, b) => a + b;
const square = x => x * x;   /* single parameter - no brackets needed */

console.log(typeof greet);  /* 'function' */

---

## 7. typeof OPERATOR

typeof tells you the DATA TYPE of any value.

typeof 42;           /* 'number' */
typeof 3.14;         /* 'number' */
typeof 'hello';      /* 'string' */
typeof true;         /* 'boolean' */
typeof undefined;    /* 'undefined' */
typeof null;         /* 'object' - famous JS bug! */
typeof Symbol();     /* 'symbol' */
typeof 42n;          /* 'bigint' */
typeof {};           /* 'object' */
typeof [];           /* 'object' - arrays are objects in JS! */
typeof function(){}; /* 'function' */

---

## 8. TYPE CONVERSION

### Implicit Type Conversion (Type Coercion)
JavaScript automatically converts types in certain situations.

'5' + 3;       /* '53'  - number converts to string (concatenation) */
'5' - 3;       /* 2     - string converts to number (subtraction) */
'5' * 3;       /* 15    - string converts to number */
'5' == 5;      /* true  - string converts to number for comparison */
true + 1;      /* 2     - true converts to 1 */
false + 1;     /* 1     - false converts to 0 */
null + 1;      /* 1     - null converts to 0 */
undefined + 1; /* NaN   - undefined converts to NaN */

### Explicit Type Conversion
Manually converting from one type to another.

/* To Number */
Number('42');        /* 42 */
Number('3.14');      /* 3.14 */
Number('');          /* 0 */
Number('abc');       /* NaN */
Number(true);        /* 1 */
Number(false);       /* 0 */
Number(null);        /* 0 */
Number(undefined);   /* NaN */
parseInt('42px');    /* 42 */
parseFloat('3.14px'); /* 3.14 */
+'42';               /* 42 - unary plus operator */

/* To String */
String(42);          /* '42' */
String(true);        /* 'true' */
String(null);        /* 'null' */
String(undefined);   /* 'undefined' */
(42).toString();     /* '42' */
(255).toString(16);  /* 'ff' - converts to hexadecimal */
(8).toString(2);     /* '1000' - converts to binary */

/* To Boolean */
Boolean(1);          /* true */
Boolean(0);          /* false */
Boolean('hello');    /* true */
Boolean('');         /* false */
Boolean(null);       /* false */
Boolean(undefined);  /* false */
Boolean([]);         /* true - empty array is truthy! */
Boolean({});         /* true - empty object is truthy! */
!!value;             /* double NOT - quick way to convert to boolean */

---

## 9. PRIMITIVE vs REFERENCE TYPES - KEY DIFFERENCE

### Primitive types are stored by VALUE:
let a = 10;
let b = a;    /* b gets a COPY of the value */
b = 20;
console.log(a);  /* still 10 - changing b did NOT affect a */

### Reference types are stored by REFERENCE:
let obj1 = { name: 'Gurleen' };
let obj2 = obj1;   /* obj2 points to SAME object in memory */
obj2.name = 'Kaur';
console.log(obj1.name);  /* 'Kaur' - obj1 also changed! */

This happens because objects and arrays store a REFERENCE
(memory address) not the actual value. Both variables point
to the SAME object in memory!

To avoid this, create a proper copy:
let obj3 = { ...obj1 };        /* spread operator - shallow copy */
let obj4 = Object.assign({}, obj1);  /* Object.assign - shallow copy */
let obj5 = JSON.parse(JSON.stringify(obj1)); /* deep copy */

---

## Key Takeaway:
JavaScript has 7 primitive data types: Number, String, Boolean,
Undefined, Null, Symbol and BigInt. It also has reference types:
Object, Array and Function. Always use === for comparison to avoid
type coercion bugs. Understanding truthy and falsy values is essential
for writing correct conditions. The difference between primitive
(stored by value) and reference types (stored by reference) is one
of the most important concepts in JavaScript and affects how you
copy and compare values. typeof is your best friend for debugging
and checking data types. Mastering data types is the foundation
for everything else in JavaScript - variables, functions, loops,
conditions, APIs and beyond!
