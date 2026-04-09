# Interactive Calendar Component

A polished and interactive calendar component built using React, inspired by a physical wall calendar design.

---

## Features

* Wall Calendar UI

  * Hero image section with month theme
  * Clean and aesthetic layout inspired by real calendars

* Month Navigation

  * Navigate between months and years seamlessly

* Day Range Selection

  * Select start and end dates
  * Visual highlighting for:

    * Start date
    * End date
    * Dates in between

* Today Highlight

  * Automatically highlights the current date

* Holiday Indicators

  * Small dot markers for special dates

* Notes Section

  * Add notes for:

    * Entire month
    * Selected date range

* Dark Mode

  * Toggle between light and dark themes

* Responsive Design

  * Works on desktop and mobile devices

---

## Tech Stack

* React (Functional Components and Hooks)
* JavaScript (ES6)
* CSS (Custom styling)

---

## Project Structure

```
src/
├── components/
│   ├── Calendar.jsx
│   ├── Header.jsx
│   ├── HeroSection.jsx
│   ├── CalendarGrid.jsx
│   ├── DayCell.jsx
│   ├── Notes.jsx
│
├── data/
│   └── constants.js
│
├── utils/
│   └── dateUtils.js
│
├── styles/
│   └── calendar.css
```

---

## How to Run Locally

1. Clone the repository:

```
git clone https://github.com/your-username/calendar-app.git
```

2. Navigate to the project folder:

```
cd calendar-app
```

3. Install dependencies:

```
npm install
```

4. Start the development server:

```
npm start
```

5. Open in your browser:

```
http://localhost:3000
```

---

## Key Design Decisions

### Component-Based Architecture

The application is divided into reusable components to improve readability and maintainability.

### State Management

React hooks (`useState`) are used to manage:

* Selected date range
* Month and year navigation
* Dark mode

### Separation of Concerns

* Logic is placed in `utils/`
* Static data is stored in `data/`
* UI components are organized in `components/`

