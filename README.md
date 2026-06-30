# 🌸 Lunessa – PCOD Wellness & Self-Care Platform

> **Empowering women through AI-driven wellness, PCOD management, nutrition guidance, and personalized self-care support.**

Lunessa is a full-stack wellness platform designed to help women manage **PCOD/PCOS**, adopt healthier lifestyles, and access AI-powered wellness guidance. It combines personalized health tracking, an intelligent chatbot, secure authentication, premium wellness plans, and an integrated wellness store into one seamless experience.

---

## ✨ Features

### 🔐 Authentication
- User Registration
- Email & Password Login
- Google Sign-In (Firebase Authentication)
- Forgot Password
- Secure User Profile Management

### 🤖 AI Wellness Chatbot – Sakhi
- Powered by Google Gemini AI
- PCOD & PCOS awareness
- Menstrual health guidance
- Emotional wellness support
- Personalized self-care recommendations
- Natural Hinglish conversations

### 🩺 Wellness Dashboard
- Personalized wellness insights
- Wellness score tracking
- Healthy lifestyle recommendations
- Self-care progress monitoring

### 🛍 Wellness Store
- Browse wellness products
- Add to Cart
- Shopping Cart Management
- Secure Checkout
- Order History

### 💳 Payment & Checkout
- UPI Payment Interface
- Order Confirmation Email
- Purchase History
- Delivery Details

### 👤 User Profile
- Custom Avatar Selection
- Saved Wellness Plans
- Recent Orders
- Wellness Statistics
- User Activity Tracking

---

# 🛠 Tech Stack

## Frontend
- React.js
- React Router DOM
- Tailwind CSS
- Axios
- Firebase Authentication

## Backend
- Spring Boot
- Spring MVC
- Spring Data JPA
- Hibernate
- Spring Mail
- Spring WebFlux (WebClient)

## Database
- PostgreSQL

## AI Integration
- Google Gemini API

## Deployment
- Render (Frontend)
- Render (Backend)
- PostgreSQL (Render)

---

# 📂 Project Structure

```
Lunessa/
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── firebase.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── src/main/java/com/lunessa/backend/
│   │   ├── controller/
│   │   ├── model/
│   │   ├── repository/
│   │   ├── service/
│   │   ├── config/
│   │   └── BackendApplication.java
│   │
│   ├── src/main/resources/
│   │   └── application.properties
│   │
│   └── pom.xml
│
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/your-username/lunessa.git

cd lunessa
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## Backend Setup

```bash
cd backend

mvn clean install

mvn spring-boot:run
```

Backend will run on:

```
http://localhost:8080
```

---

# ⚙️ Environment Variables

## Backend (`application.properties`)

```properties
spring.datasource.url=YOUR_DATABASE_URL
spring.datasource.username=YOUR_DATABASE_USERNAME
spring.datasource.password=YOUR_DATABASE_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=YOUR_EMAIL
spring.mail.password=YOUR_APP_PASSWORD

gemini.api.key=YOUR_GEMINI_API_KEY
```

---

## Firebase Configuration

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/signup` | Register a new user |
| POST | `/api/auth/login` | Login user |

---

## Profile

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/profile/{email}` | Fetch user profile |

---

## AI Chatbot

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/chat` | Chat with Sakhi AI |

---

## Checkout

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/checkout/pay` | Complete checkout and send receipt |

---

# 📸 Application Screens

- 🏠 Home
- 🔑 Login
- 📝 Signup
- 🔒 Forgot Password
- 👩 User Profile
- 🤖 AI Chatbot (Sakhi)
- 🛍 Wellness Store
- 🛒 Shopping Cart
- 💳 Checkout
- 💎 Premium Plans

---

# 🌟 Future Enhancements

- 📱 Android & iOS App
- 📅 Menstrual Cycle Tracker
- ❤️ Health Monitoring
- 🥗 Personalized Diet Plans
- 🏃 Workout Recommendations
- 📊 Health Analytics Dashboard
- 🔔 Smart Notifications
- ☁️ Cloud Backup & Sync

---

# 👩‍💻 Contributors

- [Drishti Chopra](https://github.com/Drishti-tech2507)
- [Sparsh Kapoor](https://github.com/SparshKapoor-CODER)
