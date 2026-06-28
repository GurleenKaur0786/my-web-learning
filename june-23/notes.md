# June 23, 2026 - Anchor Tags and Forms

## What I Studied Today
Today we explored one of the most important parts of HTML - Links and Forms!

---

## 1. Anchor Tags <a>
The anchor tag is used to create hyperlinks on a webpage.

### Syntax:
<a href='URL'>Click Here</a>

### Types of Links:
- External Link: Opens another website
  Example: <a href='https://www.google.com'>Go to Google</a>

- Internal Link: Opens another page within same website
  Example: <a href='about.html'>About Us</a>

- Email Link: Opens email app
  Example: <a href='mailto:someone@email.com'>Send Email</a>

- Target Attribute:
  _blank  = opens link in new tab
  _self   = opens in same tab (default)

---

## 2. HTML Forms
Forms are used to collect input from the user - like login pages, signup pages, contact forms etc.

### Basic Form Structure:
<form action='' method='post'>
  ...input fields go here...
</form>

### Form Input Types:
- text     : Single line text input (name, username)
- password : Hides the typed text
- email    : Validates email format
- number   : Only allows numbers
- radio    : Select one option from many
- checkbox : Select multiple options
- submit   : Button to submit the form
- reset    : Clears all form fields
- textarea : Multi-line text input
- select   : Dropdown menu

### Example Form:
<form>
  Name: <input type='text' placeholder='Enter your name'><br>
  Email: <input type='email' placeholder='Enter email'><br>
  Password: <input type='password'><br>
  Gender:
    <input type='radio' name='gender' value='female'> Female
    <input type='radio' name='gender' value='male'> Male
  <input type='submit' value='Register'>
</form>

### Important Attributes:
- action      : Where form data is sent
- method      : How data is sent (GET or POST)
- placeholder : Hint text inside input box
- required    : Makes field mandatory
- name        : Identifies the field

---

## Key Takeaway:
Anchor tags connect pages together and make the web navigable.
Forms are how websites collect user data - every login, signup and
contact page uses HTML forms!
