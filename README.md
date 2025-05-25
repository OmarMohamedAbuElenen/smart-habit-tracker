# Smart Habit Tracker

A full-stack application for logging and tracking daily habits. The backend is built with Django and Django REST Framework, and the frontend is built with React and Material UI.

---

## Features

### Backend

* JWT Authentication (register, login, logout)
* CRUD API for managing habits
* Track daily habit completion and compute streaks
* Filter habits by tag (e.g., health, productivity)
* API endpoints for habit management and user authentication

### Frontend

* Responsive UI built with Material UI
* Dashboard displaying habits, streaks, and progress charts
* Dark mode toggle

---

## Technologies Used

### Backend

* Python 3.11
* Django & Django REST Framework
* Simple JWT for authentication

### Frontend

* React.js
* Material UI
* React Router

---

## Getting Started

### Prerequisites

* Python 3.11+
* Node.js and npm (for frontend)
* Docker & Docker Compose (optional but recommended)

---

### Installation

Clone the repository:

```bash
git clone https://github.com/OmarMohamedAbuElenen/smart-habit-tracker.git
cd smart-habit-tracker
```

---

### Backend Setup

Navigate to the backend folder:

```bash
cd habit_tracker
```

Create and activate a Python virtual environment (recommended):

```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run migrations:

```bash
python manage.py migrate
```

Start the backend server:

```bash
python manage.py runserver
```

---

### Frontend Setup

Navigate to the frontend folder:

```bash
cd ../habit_tracker_fe
```

Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm start
```

---

### Running with Docker

From the project root, build and run backend and frontend containers:

```bash
docker-compose up --build
```

---

## Running the Application

* Frontend is accessible at: [http://localhost:3000](http://localhost:3000)
* Backend API is accessible at: [http://localhost:8000](http://localhost:8000)

---

## API Endpoints

### Authentication

* `POST /register/` — Register new user
* `POST /login/` — Obtain JWT token pair
### Habits

* `GET /habits/?tag=TAG_NAME` — List user’s habits (optional filter by tag)
* `POST /habits/` — Create a new habit
* `POST /habits/sreaks/` — List Tags streaks

---

## Upcoming Work

1. Implement frontend pages for managing habits and marking completion

2. Enhance user account functionality, including logout feature

3. Introduce state management in the frontend (e.g., Redux or Context API)

4. Support pagination for habit listings

5. Add linters and formatters for both backend (e.g., flake8, black) and frontend (e.g., ESLint, Prettier)

6. Expand habits functionality with additional filters and analytics

---

## Enjoy tracking your habits and maintaining streaks! 🎯✨

---