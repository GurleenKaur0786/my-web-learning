# June 24, 2026 - CSS and Page Layouts

## What I Studied Today
Today we entered the world of CSS - Cascading Style Sheets!
CSS is what makes a webpage BEAUTIFUL. Without CSS, every website
would look like a plain text document. CSS adds colors, fonts,
spacing, sizing, and layouts to our HTML structure.

---

## 1. What is CSS?
CSS stands for Cascading Style Sheets.
It describes HOW HTML elements should be displayed on screen.
The word 'Cascading' means styles flow down from parent to child elements.

### Basic CSS Syntax:
selector {
  property: value;
}

Example:
h1 {
  color: red;
  font-size: 36px;
  text-align: center;
}

---

## 2. Ways to Add CSS

### a) Inline CSS
Written directly inside the HTML tag using style attribute.
Example: <h1 style='color:red; font-size:24px;'>Hello</h1>
Drawback: Hard to manage for large projects.

### b) Internal CSS
Written inside <style> tag in the <head> section of HTML.
Example:
<head>
  <style>
    h1 { color: blue; }
    p  { font-size: 16px; }
  </style>
</head>
Best for: Single page styling.

### c) External CSS
Written in a separate .css file and linked to HTML.
Example:
<head>
  <link rel='stylesheet' href='style.css'>
</head>
Best for: Large projects with multiple pages.

---

## 3. CSS Selectors
Selectors are used to TARGET which HTML element to style.

### Types of Selectors:
- Element Selector  : targets all elements of that type
  p { color: gray; }

- Class Selector    : targets elements with a specific class (use . )
  .highlight { background-color: yellow; }
  <p class='highlight'>This is highlighted</p>

- ID Selector       : targets one unique element (use # )
  #header { font-size: 40px; }
  <h1 id='header'>Welcome</h1>

- Universal Selector: targets ALL elements (use * )
  * { margin: 0; padding: 0; }

- Group Selector    : targets multiple elements at once
  h1, h2, h3 { color: darkblue; }

---

## 4. CSS Box Model
Every HTML element is a rectangular box.
The Box Model describes the space around elements.

Structure (from inside to outside):
+---------------------------+
|        MARGIN             |
|  +---------------------+  |
|  |      BORDER         |  |
|  |  +---------------+  |  |
|  |  |    PADDING    |  |  |
|  |  |  +---------+  |  |  |
|  |  |  | CONTENT |  |  |  |
|  |  |  +---------+  |  |  |
|  |  +---------------+  |  |
|  +---------------------+  |
+---------------------------+

- Content : The actual text or image
- Padding : Space between content and border
- Border  : The line around the element
- Margin  : Space outside the border (between elements)

Example:
div {
  width: 300px;
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
}

---

## 5. Page Layouts with CSS

### a) Normal Flow
By default, block elements stack vertically and inline elements
sit side by side.
Block elements  : div, p, h1-h6, ul, li
Inline elements : span, a, img, strong

### b) Display Property
display: block;        - Takes full width, starts on new line
display: inline;       - Takes only needed width, no new line
display: inline-block; - Inline but can have width and height
display: none;         - Hides the element completely

### c) Float Layout
float: left;  - Element floats to the left
float: right; - Element floats to the right
clear: both;  - Stops floating effect

Example:
.image { float: left; margin: 10px; }

### d) Flexbox Layout
Most modern and powerful layout system!
Applied on the PARENT container.

.container {
  display: flex;
  justify-content: center;   /* horizontal alignment */
  align-items: center;       /* vertical alignment */
  flex-direction: row;       /* row or column */
  gap: 20px;                 /* space between items */
}

justify-content values:
- flex-start  : items at the start
- flex-end    : items at the end
- center      : items in the center
- space-between: equal space between items
- space-around : equal space around items

### e) CSS Grid Layout
Used to create two-dimensional layouts (rows AND columns).

.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: auto;
  gap: 15px;
}

---

## 6. Common CSS Properties

### Text Properties:
color            : text color
font-size        : size of text (px, em, rem, %)
font-family      : typeface (Arial, Times New Roman etc)
font-weight      : bold, normal, 100-900
text-align       : left, right, center, justify
text-decoration  : underline, none, line-through
text-transform   : uppercase, lowercase, capitalize
line-height      : space between lines
letter-spacing   : space between letters

### Background Properties:
background-color : solid color background
background-image : image as background
background-size  : cover, contain, auto
background-repeat: repeat, no-repeat
background-position: center, top, left

### Border Properties:
border           : width style color
border-radius    : rounds the corners
Example:
button {
  border: 2px solid blue;
  border-radius: 10px;
}

### Sizing:
width  : fixed (px) or flexible (%, vw)
height : fixed (px) or flexible (%, vh)
max-width  : maximum width limit
min-height : minimum height limit

---

## Key Takeaway:
CSS is the design language of the web. The Box Model is the foundation
of all layouts. Flexbox is the most important layout tool to master
for modern web development. Every professional website uses CSS heavily
to create beautiful, responsive, and user-friendly designs!
