// src/pages/TaskDetails.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTaskContext } from "../context/TaskContext";
import { Task } from "../types/task";

const TaskDetails: React.FC = () => {
  const { id } = useParams();  // Get task ID from URL
  const { tasks } = useTaskContext(); // Get tasks from context
  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    const foundTask = tasks.find((task) => task.id === id);
    if (foundTask) {
      setTask(foundTask);
    }
  }, [id, tasks]);

  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.completed ? "Completed" : "Pending"}</p>
      <p>Created At: {new Date(task.createdAt).toLocaleString()}</p>
    </div>
  );
};

export default TaskDetails;
