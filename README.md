# Feedback Collector

## About

Feedback Collector is a simple web application built using React, Vite, Tailwind CSS, and Supabase.

It allows users to submit feedback, view all submitted feedback, search feedback by keyword, filter feedback by date, and delete feedback when required.

The project was developed as part of a frontend assignment while following proper project structure, file separation, and coding best practices.

---

## Features

- Submit feedback with Name, Email, and Message
- View all submitted feedback
- Search feedback by name, email, or message
- Filter feedback by submission date
- Delete feedback with confirmation
- Form validation using React Hook Form
- Loading state while fetching and submitting data
- Success and error notifications
- Responsive user interface

---

## Technologies Used

- React
- Vite
- Tailwind CSS
- Supabase
- React Hook Form
- React Hot Toast

---

## Getting Started

### Clone the repository

```bash
git clone <repository-url>
```

### Move to the project folder

```bash
cd feedbackcollector
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

Add the following environment variables:

```env
VITE_SUPABASE_URL=YOUR_SUPABASE_PROJECT_URL
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_PUBLISHABLE_KEY
```

### Start the development server

```bash
npm run dev
```

The application will start on:

```
http://localhost:5173
```

---

## Database

The project uses Supabase as the backend.

Create a table named **feedbacks** with the following fields:

- id
- name
- email
- message
- created_at

Enable the required permissions (RLS policies) so the application can insert, fetch, and delete feedback records.

---

## Project Structure

The project is organized into separate folders to keep the code clean and maintainable.

- **components** – Reusable React components.
- **pages** – Page-level components.
- **services** – Handles communication with Supabase.
- **utils** – Utility functions and validation logic.
- **assets** – Static files such as images or styles.

---

## Future Improvements

Some features that can be added in the future:

- Edit feedback
- Export feedback
- User authentication
- Pagination

---

## Author

**Pranjal Singh**

B.Tech CSE (Data Science)  
Amity University Chhattisgarh