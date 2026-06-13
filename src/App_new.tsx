import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";
import TaskDetails from "./pages/TaskDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Callback from "./pages/Callback";
import ProtectedRoute from "./components/ProtectedRoute";
import { TaskProvider } from "./context/TaskContext";

// Page transition variants
const pageVariants = {
  initial: { 
    opacity: 0, 
    x: -20,
    scale: 0.98
  },
  in: { 
    opacity: 1, 
    x: 0,
    scale: 1
  },
  out: { 
    opacity: 0, 
    x: 20,
    scale: 1.02
  }
};

const pageTransition = {
  type: "tween" as const,
  ease: "anticipate" as const,
  duration: 0.4
};

const App: React.FC = () => {
  const { isLoading } = useAuth0();
  const location = useLocation();

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column"
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          style={{ fontSize: "3rem", marginBottom: "20px" }}
        >
          ⏳
        </motion.div>
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ fontSize: "1.2rem", color: "#666" }}
        >
          Loading your workspace...
        </motion.p>
      </motion.div>
    );
  }

  return (
    <TaskProvider>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Public routes */}
          <Route
            path="/"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Dashboard />
              </motion.div>
            }
          />
          <Route
            path="/callback"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Callback />
              </motion.div>
            }
          />
          <Route
            path="/login"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Login />
              </motion.div>
            }
          />
          <Route
            path="/register"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Register />
              </motion.div>
            }
          />

          {/* Protected routes for task management */}
          <Route
            path="/create"
            element={
              <ProtectedRoute>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <CreateTask />
                </motion.div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit/:id"
            element={
              <ProtectedRoute>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <EditTask />
                </motion.div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/task/:id"
            element={
              <ProtectedRoute>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <TaskDetails />
                </motion.div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </AnimatePresence>
    </TaskProvider>
  );
};

export default App;
