# Personalized Webpage

A responsive, interactive webpage built with HTML, CSS, and JavaScript. The project allows users to enter their personal details and receive a personalized greeting, age-based message, age calculation in months, and daily motivational quotes.


## Project Overview

The Personalized Webpage is a beginner-friendly front-end project designed to practise JavaScript fundamentals while creating a useful and interactive user experience.

Users enter their name and age through a form. The webpage saves their information in the browser, displays personalized content, calculates their age in months, and presents motivational quotes.

## Objectives

- Practise selecting and manipulating HTML elements using JavaScript.
- Understand event listeners and form submission.
- Apply conditional statements using `if...else`.
- Work with functions, parameters, and return-independent calculations.
- Use `localStorage` to persist user information.
- Practise `for` loops and dynamically create HTML elements.
- Apply responsive CSS styling to improve the user experience.

## Features

### 1. Personal Information Form
- Accepts the user's name and age.
- Validates required inputs using HTML form attributes.
- Saves submitted details in browser `localStorage`.

### 2. Personalized Greeting
- Retrieves the saved name from `localStorage`.
- Uses JavaScript template literals to display a customized welcome message.

### 3. Age-Based Message
- Uses an `if...else` statement to display a message based on the user's age.

### 4. Age in Months Calculator
- Converts the user's age in years into months.
- Uses the formula: `age in years × 12`.

### 5. Motivational Quotes
- Uses a `for` loop to generate five motivational quote items.
- Dynamically creates list elements using JavaScript.
- Clears existing quotes before generating new ones to prevent duplication when the user edits their details.

### 6. Edit Personal Details
- Allows users to return to the form after viewing their personalized content.
- Supports updating their information and submitting the form again.

### 7. Responsive User Interface
- Uses a clean layout, rounded cards, subtle shadows, and consistent colors.
- Includes interactive input fields and button hover effects.
- Adapts the layout for smaller screens using CSS media queries.

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and form elements |
| CSS3 | Styling, layout, responsiveness, and animations |
| JavaScript | Interactivity, calculations, conditions, loops, and DOM manipulation |
| Web Storage API | Saving and retrieving user details with `localStorage` |
| Visual Studio Code | Code editor |
| Google Chrome | Browser testing and debugging |

## Project Structure

```text
personalized-webpage/
│
├── index.html       # Webpage structure and form
├── index.css        # Styling and responsive design
├── index.js         # JavaScript functionality
└── README.md        # Project documentation
```



## How It Works

1. The user enters their name and age.
2. JavaScript listens for the form's `submit` event and prevents the page from reloading.
3. The submitted details are saved in `localStorage`.
4. The form is hidden, and the personalized section becomes visible.
5. JavaScript displays the greeting, age-based message, age in months, and five motivational quotes.
6. The user can click **Edit My details** to return to the form and submit updated information.

## Design and Styling

The interface uses a simple, modern design focused on readability and ease of use.

| Design Element | Color | Hex Code |
|---|---|---|
| Primary color | Navy Blue | `#263D5C` |
| Accent color | Warm Orange | `#E9A23B` |
| Page background | Light Gray-Blue | `#F4F6FB` |
| Main card background | White | `#FFFFFF` |
| Main text | Dark Blue-Gray | `#252B42` |
| Success message background | Soft Green | `#E5F5EC` |

**Typography:** Arial, Helvetica, sans-serif.

**UI elements:** Rounded cards, form inputs, full-width buttons, subtle shadows, focus indicators, and responsive spacing.

## Future Improvements

- Display a wider variety of motivational quotes.
- Add a clear option to reset saved personal information.
- Improve input validation and provide clearer error messages.
- Add a theme switcher for light and dark modes.
- Improve accessibility and keyboard navigation.
- Deploy the webpage using GitHub Pages.

## Author

**Mack Lenton**

This project was developed as part of my JavaScript learning journey, focusing on core programming concepts and front-end web development.
