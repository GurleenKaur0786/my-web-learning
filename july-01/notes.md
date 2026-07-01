# July 1, 2026 - CSS Animations

## What I Studied Today
Today we studied CSS Animations - one of the most exciting topics in CSS!
Animations bring websites to life and make them feel modern, interactive
and professional. Before CSS Animations, developers had to use JavaScript
or Flash to animate elements. Now we can create beautiful smooth animations
with pure CSS! Today we covered Transitions, Keyframe Animations and
Transform properties in complete detail.

---

## 1. WHAT ARE CSS ANIMATIONS?

CSS Animations allow HTML elements to gradually change from one style
to another without using JavaScript.
There are TWO main ways to animate in CSS:

1. CSS Transitions  - Simple animations triggered by state changes
2. CSS Keyframes    - Complex animations with full control over every step

---

## 2. CSS TRANSFORMS

Before learning animations, we need to understand CSS Transform.
Transform lets us MOVE, ROTATE, SCALE and SKEW elements.
Transforms are what actually CHANGE the element visually during animation.

Syntax:
selector {
  transform: function(value);
}

### a) translate() - Move an element
/* Move horizontally and vertically */
transform: translate(50px, 100px);   /* right 50px, down 100px */
transform: translateX(50px);          /* only horizontal */
transform: translateY(100px);         /* only vertical */
transform: translate(-50%, -50%);     /* move left and up by half its size */

### b) rotate() - Rotate an element
transform: rotate(45deg);    /* rotate 45 degrees clockwise */
transform: rotate(-90deg);   /* rotate 90 degrees counter-clockwise */
transform: rotate(180deg);   /* flip upside down */
transform: rotate(360deg);   /* full rotation */

### c) scale() - Resize an element
transform: scale(2);         /* double the size */
transform: scale(0.5);       /* half the size */
transform: scale(1.2);       /* 20% bigger */
transform: scaleX(2);        /* double width only */
transform: scaleY(0.5);      /* half height only */
transform: scale(1.2, 0.8);  /* wider and shorter */

### d) skew() - Tilt/slant an element
transform: skew(20deg);          /* skew horizontally */
transform: skewX(20deg);         /* tilt along X axis */
transform: skewY(10deg);         /* tilt along Y axis */
transform: skew(20deg, 10deg);   /* tilt both axes */

### e) Multiple Transforms Together
You can chain multiple transforms in one line:
transform: translate(50px, 50px) rotate(45deg) scale(1.5);
Important: Transforms are applied RIGHT TO LEFT in the list!

### f) transform-origin
Controls the PIVOT POINT of the transformation.
Default is center center.
transform-origin: top left;      /* rotate from top-left corner */
transform-origin: bottom right;  /* rotate from bottom-right corner */
transform-origin: 50% 50%;       /* default - rotate from center */
transform-origin: 0 0;           /* rotate from top-left (same as top left) */

---

## 3. CSS TRANSITIONS

Transitions create smooth animations between TWO states of an element.
They are triggered by state changes like :hover, :focus, :active or
class changes via JavaScript.

### Syntax:
selector {
  transition: property duration timing-function delay;
}

### Transition Properties:

#### a) transition-property
Which CSS property to animate.
transition-property: all;              /* animate ALL changing properties */
transition-property: background-color; /* only animate background */
transition-property: width, height;    /* animate multiple properties */

#### b) transition-duration
How long the animation takes.
transition-duration: 0.3s;    /* 300 milliseconds - fast */
transition-duration: 0.5s;    /* 500 milliseconds - medium */
transition-duration: 1s;      /* 1 second - slow */
transition-duration: 2s;      /* 2 seconds - very slow */

#### c) transition-timing-function
Controls the SPEED CURVE of the animation (how it accelerates/decelerates).
transition-timing-function: ease;         /* slow start, fast middle, slow end (DEFAULT) */
transition-timing-function: linear;       /* same speed throughout */
transition-timing-function: ease-in;      /* starts slow, ends fast */
transition-timing-function: ease-out;     /* starts fast, ends slow */
transition-timing-function: ease-in-out;  /* slow start AND slow end */
transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1); /* custom curve */

#### d) transition-delay
How long to WAIT before starting the animation.
transition-delay: 0s;     /* no delay (DEFAULT) */
transition-delay: 0.2s;   /* wait 200ms before starting */
transition-delay: 1s;     /* wait 1 second before starting */

### Shorthand Transition:
/* property duration timing-function delay */
transition: all 0.3s ease 0s;
transition: background-color 0.5s ease-in-out;
transition: width 0.3s ease, height 0.3s ease 0.1s;

---

### TRANSITION EXAMPLES

#### Button Hover Effect
.button {
  background-color: #6c5ce7;
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.button:hover {
  background-color: #a29bfe;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(108, 92, 231, 0.4);
}
When user hovers over button:
- Color smoothly changes
- Button lifts up 3px
- Shadow appears underneath
Creates a beautiful floating button effect!

#### Card Hover Effect
.card {
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}
Card lifts up and shadow gets bigger on hover - very popular effect!

#### Image Zoom on Hover
.image-container {
  overflow: hidden;
  border-radius: 10px;
}
.image-container img {
  width: 100%;
  transition: transform 0.5s ease;
}
.image-container:hover img {
  transform: scale(1.1);
}
Image smoothly zooms in when hovered. overflow: hidden keeps
the zoomed image from going outside the container!

#### Color Changing Link
a {
  color: #6c5ce7;
  text-decoration: none;
  transition: color 0.3s ease;
}
a:hover {
  color: #fd79a8;
}

#### Smooth Width Expansion
.search-bar {
  width: 150px;
  transition: width 0.4s ease;
  border: 2px solid #ccc;
  padding: 8px;
  border-radius: 20px;
}
.search-bar:focus {
  width: 300px;
  border-color: #6c5ce7;
  outline: none;
}
Search bar smoothly expands when user clicks on it!

---

## 4. CSS KEYFRAME ANIMATIONS

Keyframe animations give you FULL CONTROL over the animation.
Unlike transitions (which only go from A to B), keyframe animations
can have MULTIPLE STEPS - A to B to C to D and so on!

### Syntax - Two Parts:

PART 1: Define the animation using @keyframes rule
@keyframes animationName {
  0%   { /* styles at start */ }
  50%  { /* styles at middle */ }
  100% { /* styles at end */ }
}

PART 2: Apply the animation to an element
selector {
  animation-name: animationName;
  animation-duration: 2s;
}

Or using from and to for simple two-state animations:
@keyframes slideIn {
  from { transform: translateX(-100px); opacity: 0; }
  to   { transform: translateX(0);      opacity: 1; }
}

---

### ANIMATION PROPERTIES

#### a) animation-name
Name of the @keyframes animation to apply.
animation-name: bounce;
animation-name: fadeIn;
animation-name: spin;

#### b) animation-duration
How long ONE cycle of the animation takes.
animation-duration: 1s;
animation-duration: 0.5s;
animation-duration: 3s;

#### c) animation-timing-function
Speed curve - same values as transition-timing-function.
animation-timing-function: ease;
animation-timing-function: linear;
animation-timing-function: ease-in-out;
animation-timing-function: steps(5);  /* jumps in 5 steps, no smooth movement */

#### d) animation-delay
How long to wait before animation starts.
animation-delay: 0s;      /* starts immediately */
animation-delay: 1s;      /* waits 1 second */
animation-delay: -1s;     /* animation starts 1s INTO the cycle (already playing) */

#### e) animation-iteration-count
How many times the animation repeats.
animation-iteration-count: 1;         /* plays once (DEFAULT) */
animation-iteration-count: 3;         /* plays 3 times */
animation-iteration-count: infinite;  /* plays forever */

#### f) animation-direction
Controls the direction of animation playback.
animation-direction: normal;            /* plays forward (DEFAULT) */
animation-direction: reverse;           /* plays backward */
animation-direction: alternate;         /* forward, then backward, then forward */
animation-direction: alternate-reverse; /* backward, then forward, then backward */

#### g) animation-fill-mode
Controls what styles apply BEFORE and AFTER the animation.
animation-fill-mode: none;      /* element returns to original styles (DEFAULT) */
animation-fill-mode: forwards;  /* element KEEPS the final animation styles */
animation-fill-mode: backwards; /* element gets START styles during delay period */
animation-fill-mode: both;      /* combines forwards and backwards */

Most commonly used: animation-fill-mode: forwards
This keeps the element in its final animated state after animation ends!

#### h) animation-play-state
Pauses or plays the animation.
animation-play-state: running;  /* animation is playing (DEFAULT) */
animation-play-state: paused;   /* animation is paused */

Useful with JavaScript or hover:
.element:hover {
  animation-play-state: paused;  /* pause animation on hover */
}

### Shorthand Animation:
/* name duration timing-function delay iteration-count direction fill-mode */
animation: spin 2s linear infinite;
animation: fadeIn 0.5s ease forwards;
animation: bounce 1s ease-in-out 0.2s 3 alternate;

### Multiple Animations:
animation: spin 2s linear infinite, pulse 1s ease-in-out infinite;

---

### KEYFRAME ANIMATION EXAMPLES

#### Fade In
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.element {
  animation: fadeIn 1s ease forwards;
}

#### Fade In From Bottom (Very Popular!)
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.element {
  animation: fadeInUp 0.6s ease forwards;
}
This is used on almost every modern landing page for hero text!

#### Spinning Loader
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.loader {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #6c5ce7;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
This creates a classic circular loading spinner!

#### Bounce Effect
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
    animation-timing-function: ease-in;
  }
  50% {
    transform: translateY(-30px);
    animation-timing-function: ease-out;
  }
}
.bouncing-ball {
  animation: bounce 0.8s infinite;
}

#### Pulse / Heartbeat Effect
@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(108, 92, 231, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 15px rgba(108, 92, 231, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(108, 92, 231, 0);
  }
}
.pulse-button {
  animation: pulse 2s infinite;
}
Creates a glowing pulsing ring effect - used for call to action buttons!

#### Shake Effect (For Error Messages)
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-8px); }
  20%, 40%, 60%, 80% { transform: translateX(8px); }
}
.error-input {
  animation: shake 0.5s ease forwards;
}
When user enters wrong password, input box shakes left and right!

#### Typewriter Effect
@keyframes typewriter {
  from { width: 0; }
  to   { width: 100%; }
}
@keyframes blink {
  0%, 100% { border-color: transparent; }
  50%       { border-color: black; }
}
.typewriter-text {
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid black;
  width: 0;
  animation: typewriter 3s steps(30) forwards,
             blink 0.7s step-end infinite;
}
Text appears letter by letter like it is being typed!

#### Gradient Background Animation
@keyframes gradientShift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animated-bg {
  background: linear-gradient(270deg, #6c5ce7, #fd79a8, #fdcb6e, #00b894);
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
}
Background colors smoothly shift through multiple colors continuously!

#### Floating Animation
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
  50% {
    transform: translateY(-20px);
    box-shadow: 0 25px 15px rgba(0,0,0,0.1);
  }
}
.floating-card {
  animation: float 3s ease-in-out infinite;
}
Element gently floats up and down forever - great for hero images!

#### Slide In From Left
@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.slide-element {
  animation: slideInLeft 0.5s ease forwards;
}

#### Staggered Animation (Multiple Elements with Delay)
.card:nth-child(1) { animation: fadeInUp 0.5s ease forwards; }
.card:nth-child(2) { animation: fadeInUp 0.5s ease 0.1s forwards; }
.card:nth-child(3) { animation: fadeInUp 0.5s ease 0.2s forwards; }
.card:nth-child(4) { animation: fadeInUp 0.5s ease 0.3s forwards; }
Each card fades in one after another with a small delay - beautiful effect!

---

## 5. PERFORMANCE TIPS FOR CSS ANIMATIONS

### Animate ONLY these properties for smooth 60fps animations:
- transform (translate, rotate, scale)
- opacity

These are GPU accelerated and never cause layout recalculation!

### AVOID animating these properties (causes layout shifts, laggy):
- width / height
- top / left / bottom / right
- margin / padding
- font-size

### Use will-change for complex animations:
.animated-element {
  will-change: transform, opacity;
}
This tells the browser to prepare for animation in advance,
making it smoother. But dont overuse it!

### Prefer transform over position for movement:
GOOD: transform: translateX(100px);   /* smooth, GPU accelerated */
BAD:  left: 100px;                    /* causes layout recalculation, janky */

---

## 6. CSS ANIMATION vs JAVASCRIPT ANIMATION

### Use CSS Animations when:
- Simple transitions and effects
- Hover effects
- Loading spinners
- Entrance animations
- Looping background effects
- Performance is important

### Use JavaScript when:
- Animation needs complex logic or conditions
- Animation depends on user input in real time
- Physics based animations
- Sequencing many complex animations
- Need to pause, reverse, control precisely

### Libraries built on CSS Animations:
- Animate.css : Ready made CSS animation classes
- AOS (Animate On Scroll) : Trigger animations when scrolling
- WOW.js : Similar to AOS

---

## 7. COMPLETE EXAMPLE - Animated Landing Page Hero

HTML:
<section class='hero'>
  <h1 class='hero-title'>Welcome to My Portfolio</h1>
  <p class='hero-subtitle'>Frontend Developer and Designer</p>
  <button class='hero-button'>View My Work</button>
</section>

CSS:
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-30px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes gradientShift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.05); }
}

.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(270deg, #6c5ce7, #fd79a8, #0984e3);
  background-size: 400% 400%;
  animation: gradientShift 6s ease infinite;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  color: white;
}
.hero-title {
  font-size: 60px;
  font-weight: 700;
  animation: fadeInDown 0.8s ease forwards;
}
.hero-subtitle {
  font-size: 24px;
  font-weight: 300;
  opacity: 0;
  animation: fadeInUp 0.8s ease 0.3s forwards;
}
.hero-button {
  margin-top: 30px;
  padding: 15px 40px;
  background: white;
  color: #6c5ce7;
  border: none;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  opacity: 0;
  animation: fadeInUp 0.8s ease 0.6s forwards;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hero-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.2);
  animation: pulse 1s ease infinite;
}

---

## Key Takeaway:
CSS Animations are made up of three tools working together - Transform,
Transition and Keyframes. Transforms change what the element looks like.
Transitions smoothly animate between two states triggered by hover or focus.
Keyframes give complete control with multiple animation steps.
Always animate transform and opacity for best performance as these are
GPU accelerated. The most commonly used animations in real projects are
fadeIn, fadeInUp, slideIn and pulse - master these and you can build
any animated UI you see on professional websites. CSS Animations combined
with Flexbox and Grid layouts is the complete package for modern frontend development!
