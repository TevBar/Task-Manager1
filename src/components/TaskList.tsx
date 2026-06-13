// src/components/TaskList.tsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Task } from "../types/task";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask }) => {
  return (
    <motion.div
      className="task-list-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence mode="popLayout">
        {tasks.length === 0 ? (
          <motion.div
            key="empty-state"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            style={{
              textAlign: "center",
              padding: "40px",
              backgroundColor: "#f9f9f9",
              borderRadius: "12px",
              border: "2px dashed #ddd"
            }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{ fontSize: "3rem", marginBottom: "10px" }}
            >
              📝
            </motion.div>
            <h3 style={{ color: "#666", margin: "10px 0" }}>No tasks yet</h3>
            <p style={{ color: "#888" }}>Create your first task to get started!</p>
          </motion.div>
        ) : (
          tasks.map((task, index) => (
            <TaskItem 
              key={task.id} 
              task={task} 
              index={index}
              onDelete={onDeleteTask}
            />
          ))
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TaskList;
