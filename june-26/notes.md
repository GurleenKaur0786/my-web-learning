# June 26, 2026 - Background Images, Web Fonts and Shadows

## What I Studied Today
Today we studied some of the most visually powerful CSS properties -
Background Images, Web Fonts and Shadows. These are the properties that
make websites look truly professional and modern. After today, our pages
stopped looking plain and started looking like REAL websites!

---

## 1. CSS Background Properties

### a) background-color
Sets a solid color as the background of an element.
body {
  background-color: #f4f4f4;
}
div {
  background-color: rgb(255, 200, 100);
}

### b) background-image
Sets an image as the background of an element.
body {
  background-image: url('background.jpg');
}
You can also use gradients as background images:
div {
  background-image: linear-gradient(to right, #ff6b6b, #feca57);
}
div {
  background-image: radial-gradient(circle, #6c5ce7, #a29bfe);
}

### c) background-repeat
Controls whether the background image repeats or not.
body {
  background-repeat: no-repeat;  /* image appears only once */
  background-repeat: repeat;     /* repeats in both directions (default) */
  background-repeat: repeat-x;   /* repeats only horizontally */
  background-repeat: repeat-y;   /* repeats only vertically */
}

### d) background-size
Controls the size of the background image.
body {
  background-size: cover;    /* covers entire element, may crop image */
  background-size: contain;  /* fits entire image inside element */
  background-size: 100% 100%; /* stretches to fill exactly */
  background-size: 400px 300px; /* fixed size */
}

MOST USED: background-size: cover
This ensures the background image always covers the full screen
no matter what screen size the user has!

### e) background-position
Controls WHERE the background image appears.
body {
  background-position: center center; /* most common */
  background-position: top left;
  background-position: bottom right;
  background-position: 50% 50%;
}

### f) background-attachment
Controls whether background scrolls with page or stays fixed.
body {
  background-attachment: fixed;  /* PARALLAX effect - image stays fixed */
  background-attachment: scroll; /* image scrolls with page (default) */
}
Using background-attachment: fixed creates a beautiful parallax
scrolling effect seen on many modern websites!

### g) Shorthand Background Property
All background properties can be written in one line:
body {
  background: url('bg.jpg') no-repeat center center / cover fixed;
}
Order: image repeat position / size attachment

---

## 2. CSS Gradients

### Linear Gradient
Creates a gradient that goes in a straight line direction.
div {
  background: linear-gradient(direction, color1, color2, color3...);
}

Examples:
/* Top to bottom (default) */
background: linear-gradient(#ff0000, #0000ff);

/* Left to right */
background: linear-gradient(to right, #ff6b6b, #feca57);

/* Diagonal */
background: linear-gradient(to bottom right, #6c5ce7, #fd79a8);

/* With angle */
background: linear-gradient(45deg, #00b894, #0984e3);

/* Multiple color stops */
background: linear-gradient(to right, red, orange, yellow, green, blue);

### Radial Gradient
Creates a gradient that radiates from a center point outward.
div {
  background: radial-gradient(circle, #fdcb6e, #e17055);
}

---

## 3. Web Fonts

### What are Web Fonts?
By default, browsers only support a few basic fonts called
System Fonts or Web Safe Fonts:
- Arial
- Times New Roman
- Courier New
- Georgia
- Verdana

Web Fonts allow us to use THOUSANDS of beautiful fonts
from the internet on our websites!

### Google Fonts - Most Popular Web Font Service
Google Fonts is completely FREE and has 1000+ fonts!
Website: https://fonts.google.com

### How to Use Google Fonts:

Step 1: Go to fonts.google.com
Step 2: Search for a font (example: Poppins, Roboto, Montserrat)
Step 3: Click Select this style
Step 4: Copy the <link> tag and paste in your HTML <head>
Step 5: Use the font in your CSS

Example - Using Poppins font:

In HTML <head>:
<link rel='preconnect' href='https://fonts.googleapis.com'>
<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin>
<link href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap' rel='stylesheet'>

In CSS:
body {
  font-family: 'Poppins', sans-serif;
}
h1 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
}
p {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
}

### Popular Google Fonts:
- Poppins     : Modern, clean, great for everything
- Roboto      : Used by Google itself, very readable
- Montserrat  : Bold and strong, great for headings
- Open Sans   : Very readable, great for body text
- Lato        : Elegant and professional
- Playfair Display : Decorative, great for luxury brands
- Nunito      : Rounded and friendly, great for apps

### @font-face - Using Custom Font Files
If you have downloaded a font file (.ttf, .woff, .woff2),
you can use it with @font-face rule:

@font-face {
  font-family: 'MyCustomFont';
  src: url('fonts/myfont.woff2') format('woff2'),
       url('fonts/myfont.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: 'MyCustomFont', Arial, sans-serif;
}

Font file formats:
- .woff2 : Best format, smallest size, modern browsers
- .woff  : Good format, wide browser support
- .ttf   : TrueType, works everywhere
- .eot   : Old Internet Explorer only (avoid)

---

## 4. CSS Shadows

### a) box-shadow
Adds a shadow around an HTML element (box/div/button etc).

Syntax:
box-shadow: horizontal vertical blur spread color;

Values:
- horizontal : shadow moves left (-) or right (+)
- vertical   : shadow moves up (-) or down (+)
- blur       : how blurry/soft the shadow is
- spread     : how large the shadow grows
- color      : color of the shadow (use rgba for transparency)

Examples:
/* Simple shadow */
div {
  box-shadow: 5px 5px 10px gray;
}

/* Soft modern shadow */
.card {
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
}

/* Multiple shadows */
.element {
  box-shadow: 2px 2px 5px red, -2px -2px 5px blue;
}

/* Inset shadow (shadow goes INSIDE the element) */
.input {
  box-shadow: inset 0px 2px 5px rgba(0,0,0,0.2);
}

/* Glowing effect */
.button {
  box-shadow: 0px 0px 20px rgba(108, 92, 231, 0.8);
}

### b) text-shadow
Adds a shadow behind text.

Syntax:
text-shadow: horizontal vertical blur color;

Examples:
/* Simple text shadow */
h1 {
  text-shadow: 2px 2px 4px gray;
}

/* Dark dramatic shadow */
h1 {
  text-shadow: 3px 3px 6px rgba(0,0,0,0.5);
}

/* Glowing text effect */
h1 {
  color: white;
  text-shadow: 0px 0px 20px #6c5ce7;
}

/* Multiple shadows for 3D effect */
h1 {
  text-shadow: 1px 1px 0px #ccc,
               2px 2px 0px #c9c9c9,
               3px 3px 0px #bbb,
               4px 4px 0px #b9b9b9;
}

---

## 5. Putting It All Together - Example of a Hero Section

A hero section is the big banner at the top of a website.
Here is how we use all todays topics together:

HTML:
<section class='hero'>
  <div class='hero-content'>
    <h1>Welcome to My Website</h1>
    <p>Building the web one line at a time</p>
    <button>Get Started</button>
  </div>
</section>

CSS:
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

.hero {
  background-image: url('hero-bg.jpg');
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 50px;
  border-radius: 15px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.4);
}

.hero-content h1 {
  font-family: 'Poppins', sans-serif;
  font-size: 60px;
  font-weight: 700;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.6);
  margin-bottom: 20px;
}

.hero-content p {
  font-family: 'Poppins', sans-serif;
  font-size: 22px;
  font-weight: 300;
  margin-bottom: 30px;
}

.hero-content button {
  background: linear-gradient(to right, #6c5ce7, #a29bfe);
  color: white;
  border: none;
  padding: 15px 40px;
  font-size: 18px;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0px 5px 20px rgba(108, 92, 231, 0.6);
}

---

## Key Takeaway:
Background images with cover sizing make websites look full and rich.
Web Fonts (especially Google Fonts) instantly make any website look
10x more professional - never rely on default fonts in real projects.
Box shadows add depth and make elements like cards and buttons
feel modern and clickable. Combining all three - backgrounds,
fonts and shadows - is what separates beginner websites from
professional ones. Every modern website you see uses all of these!
