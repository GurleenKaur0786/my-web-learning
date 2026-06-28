# June 25, 2026 - Internal and External CSS

## What I Studied Today
Today we did a deep dive into the two most important ways of writing CSS -
Internal CSS and External CSS. We understood when to use which method,
how to organize stylesheets, and how CSS rules interact with each other
through specificity and inheritance.

---

## 1. Recap - Three Ways to Write CSS

### a) Inline CSS
- Written directly inside HTML tag using style attribute
- Highest priority but worst practice for large projects
- Example:
  <p style='color:red; font-size:18px;'>This is inline styled</p>

### b) Internal CSS
- Written inside <style> tag within the <head> section of HTML file
- Good for single page websites or page specific styles
- Example:
  <head>
    <style>
      body {
        background-color: #f0f0f0;
        font-family: Arial, sans-serif;
      }
      h1 {
        color: darkblue;
        text-align: center;
      }
      p {
        font-size: 16px;
        line-height: 1.6;
        color: #333;
      }
    </style>
  </head>

### c) External CSS
- Written in a completely separate file with .css extension
- Linked to HTML using <link> tag in the <head>
- Best practice for all real world and multi page projects
- Example:
  HTML File:
  <head>
    <link rel='stylesheet' href='style.css'>
  </head>

  style.css file:
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #ffffff;
  }
  h1 {
    color: navy;
    font-size: 36px;
  }

---

## 2. Why External CSS is the Best Practice

- One CSS file can style MULTIPLE HTML pages at once
- If you want to change the color of headings across 50 pages,
  you change it in ONE place only
- Makes code cleaner and easier to read
- Browser caches the CSS file so pages load faster
- Team members can work on HTML and CSS separately
- Easier to maintain and scale large projects

---

## 3. CSS Specificity - Which Style Wins?
When multiple CSS rules target the same element, the browser
decides which one to apply using SPECIFICITY rules.

Specificity Order (lowest to highest):
1. Universal Selector     *          = 0 points
2. Element Selector       p, h1      = 1 point
3. Class Selector         .box       = 10 points
4. ID Selector            #header    = 100 points
5. Inline Style           style=''   = 1000 points
6. !important             (override) = highest of all

Example:
p { color: blue; }           /* 1 point  - loses */
.text { color: green; }      /* 10 points - wins over element */
#para { color: red; }        /* 100 points - wins over class */

### !important Rule:
Use it to FORCE a style to apply no matter what.
p { color: purple !important; }
Warning: Avoid overusing !important as it makes debugging hard.

---

## 4. CSS Inheritance
Some CSS properties are automatically passed from parent to child elements.

Properties that ARE inherited:
- color
- font-family
- font-size
- font-weight
- line-height
- text-align

Properties that are NOT inherited:
- margin
- padding
- border
- background
- width / height

Example:
body {
  font-family: Arial;
  color: #333;
}
All text inside body will automatically use Arial font and #333 color
because these properties are inherited by child elements!

---

## 5. CSS Cascade
The word Cascading in CSS means styles flow downward.
When two rules have the SAME specificity, the one written
LAST in the stylesheet wins.

Example:
h1 { color: red; }
h1 { color: blue; }   /* This wins because it comes last */

This is why the ORDER of CSS rules matters a lot!

---

## 6. Organizing External CSS File - Best Practices

A well organized style.css file looks like this:

/* ===== RESET STYLES ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ===== BODY STYLES ===== */
body {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
}

/* ===== HEADER ===== */
header {
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  text-align: center;
}

/* ===== NAVIGATION ===== */
nav a {
  text-decoration: none;
  color: white;
  margin: 0 15px;
}

/* ===== MAIN CONTENT ===== */
main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 30px;
}

/* ===== FOOTER ===== */
footer {
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 15px;
}

---

## 7. Linking Multiple CSS Files
You can link more than one external CSS file to one HTML page.
This is useful for separating layout styles from color/theme styles.

<head>
  <link rel='stylesheet' href='reset.css'>
  <link rel='stylesheet' href='layout.css'>
  <link rel='stylesheet' href='theme.css'>
</head>

Files are applied in order - reset first, then layout, then theme.

---

## 8. CSS Comments
Comments in CSS are written like this and are ignored by the browser:
/* This is a comment */
/* Use comments to label sections of your stylesheet */

---

## Key Takeaway:
Internal CSS is good for quick single page styling but External CSS
is always the professional standard. Understanding Specificity and
Cascade helps you debug styling issues easily. Always organize your
CSS file in a logical order with comments for clean and maintainable code.
A good developer writes CSS that is easy for OTHER people to read and understand!
