# 💰 FinTrackr – Personal Finance Planner

## 🚀 Project Overview

FinTrackr is a full-stack MERN application designed to help users manage their personal finances effectively.

Users can:

* Track income and expenses
* Set financial goals
* Monitor spending patterns
* Get insights through analytics
* Manage budgets and alerts

---

## 🎯 Objective

This project is built to:

* Revise and strengthen MERN stack concepts
* Practice real-world system design
* Collaborate using GitHub like a professional team

---

## 🧑‍💻 Team Structure

### Backend Developer

* Responsible for APIs, database, and business logic
* Works on `backend` branch

### Frontend Developer

* Responsible for UI/UX and API integration
* Works on `frontend` branch

---

## 🧠 Tech Stack

### Backend

* Node.js
* Express.js
* TypeScript
* MongoDB (Mongoose)

### Frontend

* React.js (Vite)
* JavaScript
* Axios / Fetch

---

## 📁 Project Structure

```
FinTrackr/
│
├── backend/
│   └── src/
│       ├── config/
│       │   └── credentials.ts
|       |   └── db.ts
│       │       # MongoDB connection setup
│
│       ├── controllers/
│       │   ├── auth.controller.ts
│       │   ├── transaction.controller.ts
│       │   ├── goal.controller.ts
│       │   └── analytics.controller.ts
│       │       # Handles request logic and responses
│
│       ├── models/
│       │   ├── user.model.ts
│       │   ├── transaction.model.ts
│       │   ├── goal.model.ts
│       │   └── budget.model.ts
│       │       # MongoDB schemas
│
│       ├── routes/
│       │   ├── auth.routes.ts
│       │   ├── transaction.routes.ts
│       │   ├── goal.routes.ts
│       │   └── analytics.routes.ts
│       │       # API endpoints
│
│       ├── middleware/
│       │   └── auth.middleware.ts
│       │       # Authentication (JWT)
│
│       ├── utils/
│       │   └── calculations.ts
│       │       # Helper functions (analytics logic)
│
│       ├── app.ts
│       │       # Express app setup
│
│       └── server.ts
│               # Entry point
│
├── frontend/
│   └── src/
│       ├── components/
│       │       # Reusable UI components
│
│       ├── pages/
│       │   ├── Dashboard.jsx
│       │   ├── Transactions.jsx
│       │   ├── Goals.jsx
│       │   └── Budget.jsx
│       │       # Main screens
│
│       ├── services/
│       │   └── api.js
│       │       # API calls to backend
│
│       ├── App.jsx
│       └── main.jsx
│
└── README.md
```

---

## 🔗 API Overview (Backend)

### Auth

* POST `/api/auth/register` → Register user
* POST `/api/auth/login` → Login user

### Transactions

* POST `/api/transactions` → Add transaction
* GET `/api/transactions` → Get transactions (filterable)
* DELETE `/api/transactions/:id` → Delete transaction

### Goals

* POST `/api/goals` → Create goal
* GET `/api/goals` → Get all goals
* PUT `/api/goals/:id` → Update progress
* DELETE `/api/goals/:id` → Delete goal

### Analytics

* GET `/api/analytics/summary`
* GET `/api/analytics/category`
* GET `/api/analytics/monthly`

### Budget

* POST `/api/budget`
* GET `/api/budget/alerts`

---

## 🔄 Git Workflow

### Branches:

* `main` → stable code
* `backend` → backend development
* `frontend` → frontend development

---

### Backend Developer:

```
git checkout backend
git add .
git commit -m "message"
git push origin backend
```

---

### Frontend Developer:

```
git checkout frontend
git add .
git commit -m "message"
git push origin frontend
```

---

### Merge to Main (After Testing):

```
git checkout main
git merge backend
git merge frontend
git push origin main
```

---

## ⚠️ Rules

* ❌ Do NOT push directly to `main`
* ✅ Always work on your branch
* ✅ Keep commits clean and meaningful
* ✅ Communicate API changes clearly

---

## 📌 Future Enhancements

* Charts & visual analytics
* Recurring transactions
* Export reports (PDF/CSV)
* AI-based financial suggestions

---

## 🏁 Status

🚧 In Development
