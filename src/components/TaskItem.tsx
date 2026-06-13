// src/components/TaskItem.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Task } from "../types/task";
import { useNavigate } from "react-router-dom";

interface TaskItemProps {
  task: Task;
  index: number; // For staggered animation
  onDelete: (id: string) => void; // Proper delete handler
}

const TaskItem: React.FC<TaskItemProps> = ({ task, index, onDelete }) => {
  const navigate = useNavigate();
  const [isCompleted, setIsCompleted] = useState(false);

  const handleEdit = () => {
    navigate(`/edit/${task.id}`);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleToggleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <motion.div
      className="task-item"
      // Entry animation - slides in from right with stagger
      initial={{ x: 50, opacity: 0, scale: 0.9 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      exit={{ x: -50, opacity: 0, scale: 0.9 }}
      transition={{
        duration: 0.3,
        delay: index * 0.1, // Stagger effect based on index
        ease: "easeOut"
      }}
      // Hover animation
      whileHover={{ 
        scale: 1.02, 
        boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
        transition: { duration: 0.2 }
      }}
      // Tap animation for mobile
      whileTap={{ scale: 0.98 }}
      // Layout animation for smooth repositioning
      layout
      style={{
        padding: "20px",
        margin: "10px 0",
        backgroundColor: isCompleted ? "#f0f8ff" : "#ffffff",
        borderRadius: "12px",
        border: "1px solid #e0e0e0",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Animated background for completion */}
      <motion.div
        className="completion-overlay"
        initial={{ width: 0 }}
        animate={{ width: isCompleted ? "100%" : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          backgroundColor: "rgba(76, 175, 80, 0.1)",
          zIndex: 0
        }}
      />
      
      <div style={{ position: "relative", zIndex: 1 }}>
        <motion.h3
          style={{
            textDecoration: isCompleted ? "line-through" : "none",
            opacity: isCompleted ? 0.7 : 1,
            transition: "all 0.3s ease"
          }}
          animate={{
            color: isCompleted ? "#666" : "#333"
          }}
        >
          {task.title}
        </motion.h3>
        
        <motion.p
          style={{
            textDecoration: isCompleted ? "line-through" : "none",
            opacity: isCompleted ? 0.6 : 0.8
          }}
        >
          {task.description}
        </motion.p>
        
        <div className="task-actions" style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
          <motion.button
            onClick={handleToggleComplete}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "8px 16px",
              backgroundColor: isCompleted ? "#4CAF50" : "#2196F3",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            {isCompleted ? "✓ Completed" : "Mark Complete"}
          </motion.button>
          
          <motion.button
            onClick={handleEdit}
            whileHover={{ scale: 1.05, backgroundColor: "#FF9800" }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "8px 16px",
              backgroundColor: "#FFC107",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Edit
          </motion.button>
          
          <motion.button
            onClick={handleDelete}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "#D32F2F",
              boxShadow: "0 4px 12px rgba(211, 47, 47, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "8px 16px",
              backgroundColor: "#F44336",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Delete
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default TaskItem;
