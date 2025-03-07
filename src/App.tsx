import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";
import TaskDetails from "./pages/TaskDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Callback from "./pages/Callback";
import ProtectedRoute from "./components/ProtectedRoute"; // Protect routes
import { TaskProvider } from "./context/TaskContext"; // Provide global task state

const App: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0(); // Add isLoading state

  if (isLoading) return <p>Loading...</p>; // Show loading state

  return (
    <TaskProvider> {/* Provide global task state */}
      <Navbar />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected routes for task management */}
        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <CreateTask />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <ProtectedRoute>
              <EditTask />
            </ProtectedRoute>
          }
        />
        <Route
          path="/task/:id"
          element={
            <ProtectedRoute>
              <TaskDetails />
            </ProtectedRoute>
          }
        />
      </Routes>
    </TaskProvider>
  );
};

export default App;
