# June 29, 2026 - CSS Flexbox and Grid Layout

## What I Studied Today
Today we studied the two most powerful and modern layout systems in CSS -
Flexbox and Grid. Before Flexbox and Grid existed, developers had to use
floats and positioning hacks to create layouts which was very complicated.
Flexbox and Grid have completely changed how we build web layouts and every
modern website uses one or both of these systems. After today our layouts
became clean, responsive and professional!

---

## 1. WHY DO WE NEED FLEXBOX AND GRID?

Before Flexbox and Grid, creating layouts was very painful:
- Centering an element vertically was extremely difficult
- Making equal height columns required hacks
- Responsive layouts needed a lot of complicated code
- Float based layouts would break easily

Flexbox solves ONE DIMENSIONAL layouts (either row OR column)
Grid solves TWO DIMENSIONAL layouts (rows AND columns together)

---

## 2. CSS FLEXBOX - Complete Guide

### What is Flexbox?
Flexbox stands for Flexible Box Layout.
It is a CSS layout model that arranges elements in a single direction
either horizontally (row) or vertically (column).

To use Flexbox you apply display: flex to the PARENT container.
The parent is called FLEX CONTAINER.
The children inside are called FLEX ITEMS.

### Basic Setup:
HTML:
<div class='container'>
  <div class='item'>Item 1</div>
  <div class='item'>Item 2</div>
  <div class='item'>Item 3</div>
</div>

CSS:
.container {
  display: flex;
}

Just adding display: flex arranges all children in a ROW by default!

---

### FLEX CONTAINER PROPERTIES (applied on parent)

#### a) flex-direction
Controls the direction flex items are arranged.

.container {
  flex-direction: row;            /* left to right (DEFAULT) */
  flex-direction: row-reverse;    /* right to left */
  flex-direction: column;         /* top to bottom */
  flex-direction: column-reverse; /* bottom to top */
}

#### b) justify-content
Controls alignment of items along the MAIN AXIS.
If flex-direction is row, main axis is HORIZONTAL.
If flex-direction is column, main axis is VERTICAL.

.container {
  justify-content: flex-start;    /* items at start (DEFAULT) */
  justify-content: flex-end;      /* items at end */
  justify-content: center;        /* items in center */
  justify-content: space-between; /* equal space BETWEEN items */
  justify-content: space-around;  /* equal space AROUND items */
  justify-content: space-evenly;  /* perfectly equal space everywhere */
}

Visual of justify-content with row direction:
flex-start:    [1][2][3]               
flex-end:                  [1][2][3]
center:            [1][2][3]
space-between: [1]     [2]     [3]
space-around:    [1]   [2]   [3]
space-evenly:  [1]  [2]  [3]

#### c) align-items
Controls alignment of items along the CROSS AXIS.
If flex-direction is row, cross axis is VERTICAL.
If flex-direction is column, cross axis is HORIZONTAL.

.container {
  align-items: stretch;     /* items stretch to fill container (DEFAULT) */
  align-items: flex-start;  /* items at top */
  align-items: flex-end;    /* items at bottom */
  align-items: center;      /* items in middle - VERY USEFUL! */
  align-items: baseline;    /* items aligned by text baseline */
}

#### d) flex-wrap
Controls whether items wrap to next line or stay in one line.

.container {
  flex-wrap: nowrap;       /* all items in one line (DEFAULT) */
  flex-wrap: wrap;         /* items wrap to next line if needed */
  flex-wrap: wrap-reverse; /* items wrap in reverse order */
}

#### e) gap
Sets space between flex items. Much better than using margin!

.container {
  gap: 20px;          /* same gap in all directions */
  gap: 10px 20px;     /* row-gap column-gap */
  row-gap: 10px;      /* only between rows */
  column-gap: 20px;   /* only between columns */
}

#### f) flex-flow
Shorthand for flex-direction and flex-wrap together.

.container {
  flex-flow: row wrap;           /* direction wrap */
  flex-flow: column nowrap;
}

#### g) align-content
Controls spacing between ROWS when items wrap to multiple lines.
Only works when flex-wrap is set to wrap.

.container {
  align-content: flex-start;
  align-content: flex-end;
  align-content: center;
  align-content: space-between;
  align-content: space-around;
  align-content: stretch;
}

---

### FLEX ITEM PROPERTIES (applied on children)

#### a) flex-grow
Controls how much an item GROWS relative to other items
when there is extra space available.

.item { flex-grow: 0; }  /* does not grow (DEFAULT) */
.item { flex-grow: 1; }  /* grows to fill available space */

Example:
.item-1 { flex-grow: 1; }
.item-2 { flex-grow: 2; }  /* grows TWICE as much as item-1 */
.item-3 { flex-grow: 1; }

#### b) flex-shrink
Controls how much an item SHRINKS when there is not enough space.

.item { flex-shrink: 1; }  /* can shrink (DEFAULT) */
.item { flex-shrink: 0; }  /* never shrinks */

#### c) flex-basis
Sets the DEFAULT size of an item before growing or shrinking.

.item { flex-basis: auto; }    /* size based on content (DEFAULT) */
.item { flex-basis: 200px; }   /* starts at 200px */
.item { flex-basis: 30%; }     /* starts at 30% of container */

#### d) flex Shorthand
Shorthand for flex-grow flex-shrink flex-basis together.

.item { flex: 0 1 auto; }   /* DEFAULT */
.item { flex: 1; }          /* flex-grow: 1, very commonly used */
.item { flex: 1 1 200px; }  /* grow, shrink, start at 200px */

#### e) align-self
Overrides align-items for a SPECIFIC item only.

.item-special {
  align-self: flex-start;  /* this item aligns at top */
  align-self: flex-end;    /* this item aligns at bottom */
  align-self: center;      /* this item aligns in middle */
  align-self: stretch;
}

#### f) order
Controls the ORDER in which items appear visually.
Default order is 0. Lower numbers appear first.

.item-1 { order: 3; }   /* appears third */
.item-2 { order: 1; }   /* appears first */
.item-3 { order: 2; }   /* appears second */

---

### FLEXBOX COMMON USE CASES

#### Perfect Centering (Most asked in interviews!)
.container {
  display: flex;
  justify-content: center;  /* center horizontally */
  align-items: center;      /* center vertically */
  height: 100vh;            /* full screen height */
}
This perfectly centers any element both horizontally AND vertically!

#### Navigation Bar
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  background-color: #2c3e50;
  height: 60px;
}

#### Card Layout
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.card {
  flex: 1 1 300px;  /* grow, shrink, min width 300px */
  max-width: 350px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

---

## 3. CSS GRID - Complete Guide

### What is CSS Grid?
CSS Grid is a TWO DIMENSIONAL layout system.
It lets you control both ROWS and COLUMNS at the same time.
Grid is perfect for creating page layouts, dashboards, image galleries
and any design that needs both horizontal and vertical control.

To use Grid you apply display: grid to the PARENT container.
The parent is called GRID CONTAINER.
The children inside are called GRID ITEMS.

### Basic Setup:
HTML:
<div class='grid-container'>
  <div class='grid-item'>Item 1</div>
  <div class='grid-item'>Item 2</div>
  <div class='grid-item'>Item 3</div>
  <div class='grid-item'>Item 4</div>
  <div class='grid-item'>Item 5</div>
  <div class='grid-item'>Item 6</div>
</div>

CSS:
.grid-container {
  display: grid;
  grid-template-columns: 200px 200px 200px;  /* 3 columns of 200px each */
}

---

### GRID CONTAINER PROPERTIES

#### a) grid-template-columns
Defines the NUMBER and SIZE of columns.

.container {
  /* Fixed pixel columns */
  grid-template-columns: 200px 200px 200px;

  /* Percentage columns */
  grid-template-columns: 33% 33% 33%;

  /* fr unit - fractional unit (MOST IMPORTANT!) */
  grid-template-columns: 1fr 1fr 1fr;      /* 3 equal columns */
  grid-template-columns: 2fr 1fr 1fr;      /* first column is twice as wide */
  grid-template-columns: 300px 1fr 1fr;    /* fixed + flexible */

  /* repeat() function - shorthand for repeating */
  grid-template-columns: repeat(3, 1fr);   /* same as 1fr 1fr 1fr */
  grid-template-columns: repeat(4, 200px); /* 4 columns of 200px */

  /* auto-fill - creates as many columns as fit */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  /* auto-fit - similar but collapses empty columns */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

The fr unit (fractional unit) is the most important unit in Grid!
1fr means ONE fraction of the available space.
If you have 3 columns of 1fr each, each gets 1/3 of the space.

#### b) grid-template-rows
Defines the NUMBER and SIZE of rows.

.container {
  grid-template-rows: 100px 200px 100px;   /* 3 rows with fixed heights */
  grid-template-rows: repeat(3, 1fr);      /* 3 equal rows */
  grid-template-rows: auto;                /* height based on content */
}

#### c) gap (grid-gap)
Sets space between grid items.

.container {
  gap: 20px;              /* same gap for rows and columns */
  gap: 10px 20px;         /* row-gap column-gap */
  row-gap: 10px;
  column-gap: 20px;
}

#### d) justify-items
Aligns items HORIZONTALLY inside their grid cell.

.container {
  justify-items: start;    /* items at left of cell */
  justify-items: end;      /* items at right of cell */
  justify-items: center;   /* items centered in cell */
  justify-items: stretch;  /* items fill entire cell width (DEFAULT) */
}

#### e) align-items
Aligns items VERTICALLY inside their grid cell.

.container {
  align-items: start;      /* items at top of cell */
  align-items: end;        /* items at bottom of cell */
  align-items: center;     /* items centered vertically in cell */
  align-items: stretch;    /* items fill entire cell height (DEFAULT) */
}

#### f) justify-content
Aligns the ENTIRE GRID horizontally inside the container.
Used when total grid is smaller than container.

.container {
  justify-content: start;
  justify-content: end;
  justify-content: center;
  justify-content: space-between;
  justify-content: space-around;
  justify-content: space-evenly;
}

#### g) align-content
Aligns the ENTIRE GRID vertically inside the container.

.container {
  align-content: start;
  align-content: end;
  align-content: center;
  align-content: space-between;
  align-content: space-around;
}

#### h) grid-template-areas
Lets you NAME areas of the grid and assign items to them visually!
This is one of the most powerful and readable features of Grid.

.container {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 60px 1fr 60px;
  grid-template-areas:
    'header  header'
    'sidebar main'
    'footer  footer';
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }

This creates a full classic webpage layout with just a few lines!

---

### GRID ITEM PROPERTIES

#### a) grid-column
Controls which COLUMNS an item spans across.

.item {
  grid-column: 1 / 3;      /* starts at line 1, ends at line 3 (spans 2 cols) */
  grid-column: 1 / -1;     /* spans from first to LAST column */
  grid-column: span 2;     /* spans 2 columns from current position */
}

#### b) grid-row
Controls which ROWS an item spans across.

.item {
  grid-row: 1 / 3;         /* starts at row 1, ends at row 3 (spans 2 rows) */
  grid-row: span 2;        /* spans 2 rows */
}

#### c) grid-area
Assigns item to a named grid area OR defines position shorthand.

/* Using named areas */
.header { grid-area: header; }

/* Shorthand: row-start / column-start / row-end / column-end */
.item { grid-area: 1 / 1 / 3 / 3; }

#### d) justify-self
Overrides justify-items for a SPECIFIC item.

.special-item {
  justify-self: center;
  justify-self: end;
}

#### e) align-self
Overrides align-items for a SPECIFIC item.

.special-item {
  align-self: center;
  align-self: end;
}

---

### GRID COMMON USE CASES

#### Classic Website Layout
.page {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 70px 1fr 60px;
  grid-template-areas:
    'header  header'
    'sidebar content'
    'footer  footer';
  min-height: 100vh;
  gap: 0;
}

header  { grid-area: header;  background: #2c3e50; color: white; }
.sidebar{ grid-area: sidebar; background: #34495e; color: white; }
main    { grid-area: content; padding: 30px; }
footer  { grid-area: footer;  background: #2c3e50; color: white; }

#### Responsive Image Gallery
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  padding: 20px;
}
.gallery img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}
This gallery automatically adjusts number of columns based on screen size!

#### Dashboard Layout
.dashboard {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 20px;
  padding: 20px;
}
.stats-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
.main-chart {
  grid-column: span 2;   /* chart takes 2 columns */
  grid-row: span 2;      /* chart takes 2 rows */
}

---

## 4. FLEXBOX vs GRID - When to Use Which?

### Use FLEXBOX when:
- Arranging items in a SINGLE direction (row or column)
- Building navigation bars
- Centering elements
- Making button groups
- Aligning items inside a card
- Small scale component layouts

### Use GRID when:
- Creating full PAGE layouts
- You need control over BOTH rows and columns
- Building dashboards
- Image galleries
- Any complex two dimensional layout
- When you know exactly how many rows AND columns you need

### Can you use BOTH together?
YES! And you should!
Use Grid for the overall PAGE LAYOUT.
Use Flexbox for individual COMPONENTS inside the grid.

Example:
.page { display: grid; }       /* Grid for page layout */
nav   { display: flex; }       /* Flexbox for navbar items */
.card { display: flex; }       /* Flexbox for card content */

---

## 5. minmax() Function in Grid
The minmax() function sets a minimum AND maximum size for a column or row.

grid-template-columns: minmax(200px, 1fr);
/* column is at least 200px but can grow up to fill available space */

grid-template-columns: repeat(3, minmax(150px, 1fr));
/* 3 columns, each minimum 150px, maximum equal share of space */

Combined with auto-fit for fully responsive layouts:
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
/* creates as many 250px minimum columns as fit, all grow equally */
This single line creates a FULLY RESPONSIVE grid with no media queries!

---

## Key Takeaway:
Flexbox and Grid are the two most essential CSS skills for modern
web development. Flexbox is best for one dimensional layouts like
navbars, card rows, and centering. Grid is best for two dimensional
page layouts like dashboards and full website structure. In real
projects you will ALWAYS use both together - Grid for the big picture
layout and Flexbox for the smaller components inside. Mastering these
two layout systems means you can build ANY layout you see on the web.
Every professional website, web app and dashboard uses Flexbox and Grid!
