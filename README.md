# Flex Living Reviews Dashboard - Frontend

## 1. Project Overview

The frontend is a **React-based dashboard** for managers to view, filter, and analyze property reviews. It displays normalized review data, property performance metrics, and allows managers to approve which reviews are visible on the public website.

---

## 2. Tech Stack

- **React.js** (functional components & hooks)
- **Redux Toolkit** (state management)
- **Tailwind CSS** (UI styling)
- **React Router v6** (routing)
- **Axios / Fetch API** (data fetching)

---

## 3. Features

- **Manager Dashboard**
  - View all properties and their reviews
  - Average rating per property
  - Category-wise scores (Cleanliness, Communication, House Rules)
  - Filter by rating, category, channel, or date
  - Sort reviews by latest or oldest
  - Toggle review visibility (public/private)

- **Review Display Page**
  - Dedicated section for selected reviews
  - Shows only approved reviews
  - Mirrors property details layout
  - Displays property images, amenities, and policies

---

## 4. Folder Structure

/frontend
├─ src/
│ ├─ components/
│ │ ├─ PropertyCard.jsx
│ │ ├─ CardReview.jsx
│ │ └─ SortingHeader.jsx
│ ├─ pages/
│ │ ├─ Dashboard.jsx
│ │ └─ ReviewDetails.jsx
│ ├─ redux/
│ │ ├─ store.js
│ │ └─ reviewSlice.js
│ └─ App.jsx
└─ tailwind.config.js

---

## 5. Setup Instructions

1. Clone the repository:
   Git Clone `https://github.com/Emmykage/flexiLiving_frontend.git`

2. Navigate to frontend folder:
   ```bash
   cd frontend
   ```

Install dependencies:

npm install

Start the React app:

npm run dev

Access dashboard at http://localhost:5173

## 6. Live Demo

[Live Demo](https://flexi-living-frontend-jkddyebn7-emmykages-projects.vercel.app)
[Live Demo Netlify](https://flexliving.netlify.app/)

## 7. Design & Logic Decisions

Normalized review data fetched from backend for easy rendering

Redux store manages both raw and normalized review data

Dynamic filtering supports rating, category, channel, and time

Tailwind CSS for consistent, modern UI

Framer Motion Library for Extra Effects

Review toggle updates state in Redux and affects dashboard & public view

7. Notes

Mocked Hostaway API data is used

Google Reviews exploration is optional but documented

All frontend components are reusable and maintainable
