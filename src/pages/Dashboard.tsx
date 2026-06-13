import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTaskContext } from "../context/TaskContext";
import TaskList from "../components/TaskList";

const Dashboard: React.FC = () => {
  const { tasks, deleteTask } = useTaskContext();

  const handleDelete = (id: string) => {
    deleteTask(id);
  };

  return (
    <motion.div
      className="dashboard"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}
    >
      {/* Animated Header */}
      <motion.div
        className="dashboard-header"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ textAlign: "center", marginBottom: "30px" }}
      >
        <motion.h1
          style={{ 
            color: "#333",
            marginBottom: "10px",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          📋 Task Dashboard
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{ color: "#666", fontSize: "1.1rem" }}
        >
          Manage your tasks efficiently with style
        </motion.p>

        {/* Animated Create Task Button */}
        <Link to="/create">
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 6px 20px rgba(102, 126, 234, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{
              padding: "12px 24px",
              backgroundColor: "#667eea",
              color: "white",
              border: "none",
              borderRadius: "25px",
              fontSize: "1rem",
              cursor: "pointer",
              margin: "20px 0",
              fontWeight: "500"
            }}
          >
            ➕ Create New Task
          </motion.button>
        </Link>
      </motion.div>

      {/* Tasks Stats */}
      <motion.div
        className="task-stats"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "30px"
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            padding: "15px 20px",
            backgroundColor: "#e3f2fd",
            borderRadius: "10px",
            textAlign: "center",
            minWidth: "120px"
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{ fontSize: "1.5rem", marginBottom: "5px" }}
          >
            📊
          </motion.div>
          <div style={{ fontWeight: "bold", color: "#1976d2" }}>
            {tasks.length}
          </div>
          <div style={{ fontSize: "0.9rem", color: "#666" }}>
            Total Tasks
          </div>
        </motion.div>
      </motion.div>

      {/* Animated Task List */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <TaskList tasks={tasks} onDeleteTask={handleDelete} />
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
