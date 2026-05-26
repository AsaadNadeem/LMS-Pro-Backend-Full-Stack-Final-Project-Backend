# Backend - MERN Learning Management System

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Environment variables are already configured in `.env`:
- PORT: 8000
- MONGODB_URI: mongodb://localhost:27017/online_academy_databases
- JWT Secrets configured

⚠️ **For production, update:**
- `REFRESH_TOKEN_SECRET` and `ACCESS_TOKEN_SECRET` with strong random values
- `MONGODB_URI` to production MongoDB URL
- `CORS_ORIGIN` to production frontend URL

### 3. Start MongoDB
```bash
mongosh
```

### 4. Start Server
```bash
npm run dev      # Development (with auto-reload)
npm start        # Production
```

Server runs on: **http://localhost:8000**

### 5. Create Admin User (Optional)
```bash
npm run seed:admin
```

## API Documentation

### Core Endpoints
- **Users**: `/api/users` - Authentication & registration
- **Courses**: `/api/courses` - Course management
- **Lessons**: `/api/lessons` - Lesson content
- **Enrollments**: `/api/enrollments` - Course enrollment
- **Admin**: `/api/admin` - Administrative functions

## Security Features
✅ JWT Authentication
✅ Rate Limiting (100 req/15 min)
✅ XSS Protection
✅ CORS Configuration
✅ Helmet Security Headers
✅ Bcrypt Password Hashing

## Technologies
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Multer** - File uploads
- **Cloudinary** - Image hosting

## Troubleshooting
- MongoDB connection failed? Ensure MongoDB is running
- Port 8000 in use? Change PORT in .env
- CORS errors? Check CORS_ORIGIN matches frontend URL

For detailed setup, see [../SETUP_GUIDE.md](../SETUP_GUIDE.md)

Admin analytics

Secure API communication

The application follows MVC architecture, RESTful API standards, secure authentication practices, and clean frontend design principles.

🏗️ System Architecture
Client (React + Axios)
        ↓
Express REST API (Node.js)
        ↓
MongoDB Database (Mongoose ODM)
🔹 Architecture Principles Used

Separation of Concerns

MVC Pattern (Models, Controllers, Routes)

Reusable Middleware

Centralized Error Handling

Standardized API Response Structure

Cookie-based JWT Authentication

Role-Based Access Control (RBAC)

🛠️ Technology Stack
🔹 Frontend

React JS (Vite)

React Router DOM

Axios

React Bootstrap

React Toastify

Context API

🔹 Backend

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

Bcrypt Password Hashing

Dotenv (Environment Variables)

Cookie Parser

👥 User Roles & Capabilities

1️⃣ Admin

View all users

Delete users

Create instructors

View platform analytics

Manage courses

2️⃣ Instructor

Create courses

Edit courses

Delete courses

Create lessons

Update lessons

Delete lessons

Manage owned course content

3️⃣ Student

Register & Login

Browse available courses

View course details

Enroll in courses

View enrolled courses

Track learning progress

🔐 Authentication & Security Implementation

This system implements enterprise-level authentication flow:

✔ Password Security

Passwords hashed using Bcrypt

No plaintext passwords stored

✔ JWT Authentication

Access Token

Refresh Token

Token rotation strategy

Secure HTTP-only cookies

✔ Role-Based Authorization

Protected routes

Instructor ownership validation

Admin privilege enforcement

✔ API Protection

Middleware-based authentication

Custom ApiError class

Consistent ApiResponse wrapper

MongoDB ObjectId validation

🗄️ Database Design

📌 User Schema

name

email (unique)

password (hashed)

role (admin | instructor | student)

refreshToken

timestamps

📌 Course Schema

title

description

category

price

instructor (ObjectId reference → User)

timestamps

📌 Lesson Schema

title

duration

course (ObjectId reference → Course)

timestamps

📌 Enrollment Schema

student (ObjectId reference → User)

course (ObjectId reference → Course)

progress

timestamps

📊 ER Diagram (Conceptual)
User (1) —— (Many) Course
User (1) —— (Many) Enrollment
Course (1) —— (Many) Lesson
Course (1) —— (Many) Enrollment
🔌 RESTful API Design
🔐 Authentication
Method	Endpoint	Description
POST	/api/users/register	Register user
POST	/api/users/login	Login user
POST	/api/users/logout	Logout user
POST	/api/users/refresh-token	Refresh JWT
📚 Course Management
Method	Endpoint	Access
GET	/api/courses	Public
GET	/api/courses/:id	Public
POST	/api/courses	Instructor
PUT	/api/courses/:id	Instructor (Owner)
DELETE	/api/courses/:id	Instructor / Admin
🎥 Lesson Management
Method	Endpoint	Access
POST	/api/lessons/create-lesson	Instructor
GET	/api/lessons/course/:courseId	Student / Instructor
GET	/api/lessons/:id	Student / Instructor
PUT	/api/lessons/:id	Instructor
DELETE	/api/lessons/:id	Instructor
🎓 Enrollment
Method	Endpoint	Access
POST	/api/enrollments/enroll	Student
GET	/api/enrollments/my-courses	Student
PUT	/api/enrollments/:id	Student
👨‍💼 Admin APIs
Method	Endpoint	Description
GET	/api/admin/users	Get all users
DELETE	/api/admin/users/:id	Delete user
GET	/api/admin/analytics	Platform analytics
POST	/api/admin/create-instructor	Create instructor
🎨 Frontend Features

Clean Dashboard UI

Role-Based Navigation

Toast Notifications

Protected Routes

Responsive Layout (React Bootstrap)

Form Validation

Loading States

Error Handling UI

Conditional Rendering by Role

📂 Project Structure
🔹 Backend Structure
backend/
│
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── utils/
├── server.js
└── .env
🔹 Frontend Structure
frontend/
│
├── components/
├── pages/
├── services/
├── context/
├── routes/
├── App.jsx
└── main.jsx
⚙️ Installation & Setup

1️⃣ Clone Repository :

git clone backend: https://github.com/AsaadNadeem/LMS-Pro-Backend-Full-Stack-Final-Project-Backend

git clone frontend: https://github.com/AsaadNadeem/LMS-Pro-Frontend-Full-Stack-Final-Project-Frontend

2️⃣ Backend Setup
cd backend
npm install

Create .env file:

PORT=8000
MONGO_URI=your_mongodb_uri
ACCESS_TOKEN_SECRET=your_access_secret
REFRESH_TOKEN_SECRET=your_refresh_secret

Run server:

npm run dev

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

Frontend:
http://localhost:5173

Backend:
http://localhost:8000
//📜 Student Declaration

I confirm that this project is my original work and has not been copied from any unauthorized source.
Student Name: Asaad Nadeem
Date:05-26-2026
