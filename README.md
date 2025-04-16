# 📝 Task Manager App

Welcome to the **Task Manager App** — a simple yet powerful web app that allows you to manage your daily tasks with features like creating, editing, and deleting tasks. It also includes secure **user authentication** using **Auth0**.

---

## 🚀 Features

- ✅ Create, edit, and delete tasks  
- ✅ User authentication and protected routes using Auth0  
- ✅ React Context API for state management  
- ✅ TypeScript + React Router + Auth0 integration  
- ✅ Clean, responsive UI  

---

## 🛠️ Tech Stack

- [React](https://reactjs.org/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [React Router](https://reactrouter.com/)  
- [Auth0](https://auth0.com/)  
- [Vite](https://vitejs.dev/)  
- [React Context API](https://reactjs.org/docs/context.html)  

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/TevBar/task-manager.git
cd task-manager


npm install
# or
yarn install


🔐 Auth0 Configuration
This app uses Auth0 for authentication.

✅ Create Auth0 App:
Go to Auth0 Dashboard

Create a new Single Page Application

Add the following to your app’s Allowed Callback URLs and Logout URLs:

bash
Copy
Edit
http://localhost:5173/callback
http://localhost:5173
✅ Create .env file at root:
ini
Copy
Edit
VITE_AUTH0_DOMAIN=your-auth0-domain
VITE_AUTH0_CLIENT_ID=your-client-id
VITE_AUTH0_CALLBACK_URL=http://localhost:5173/callback
You’ll find domain and clientId in your Auth0 application settings.

📂 Project Structure
css
Copy
Edit
src/
├── components/
│   └── Navbar.tsx
│   └── ProtectedRoute.tsx
├── context/
│   └── TaskContext.tsx
├── pages/
│   └── Dashboard.tsx
│   └── CreateTask.tsx
│   └── EditTask.tsx
│   └── TaskDetails.tsx
│   └── Login.tsx
│   └── Register.tsx
│   └── Callback.tsx
├── types/
│   └── task.ts
├── App.tsx
├── main.tsx
▶️ Run the App
bash
Copy
Edit
npm run dev
# or
yarn dev
The app will be running at http://localhost:5173

✅ Usage
Click Login to authenticate via Auth0

Create a new task

Edit or delete existing tasks

All routes are protected and only accessible to authenticated users
