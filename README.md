# 🧠 SmartTrack 📈

SmartTrack is a simple CRUD (Create, Read, Update, Delete) web application built with **ReactJS** (frontend) and **ExpressJS** (backend). It allows users to manage a list of dummy employee data.

<br>

## 📌 Features

- View all employee entries
- Add a new employee
- Edit existing employee information
- Delete employees from the list

<br>

## 🛠️ Tech Stack

**Frontend:**
- ReactJS

**Backend:**
- Node.js
- ExpressJS
- In-memory data storage (no database)

<br>

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js installed on your system
- npm or yarn package manager

## 🖥️ Installation

### 1. Clone the repository

```
git clone https://github.com/joaquingalang/smart-track
cd smarttrack
```

### 2. Setup Backend

```
cd backend
npm install
node server.js
```
The backend server will start on http://localhost:5000.

### 3. Setup Frontend
```
cd ../frontend
npm install
npm start
```
The React development server will start on http://localhost:3000.

<br>

## 📂 Folder Structure

```
smarttrack/
│
├── backend/
│   ├── server.js
│   └── routes/
│       └── employees.js
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── App.js
│       └── index.js
```

