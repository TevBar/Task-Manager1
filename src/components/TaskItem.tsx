// src/components/TaskItem.tsx
import React from "react";
import { Task } from "../types/task";
import { useNavigate } from "react-router-dom";

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit/${task.id}`);
  };

  const handleDelete = () => {
    // Call delete function from the context (not implemented here)
    alert("Delete Task");
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
