import React, { useState } from "react";
import { useTaskContext } from "../context/TaskContext"; // Correct import
import './createTask.css'

const CreateTask: React.FC = () => {
  const { addTask } = useTaskContext(); // Using useTaskContext to get the addTask function
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "") return alert("Title is required");

    addTask({
      id: Math.random().toString(36).substr(2, 9), // Generate a unique ID (could be better, such as using a UUID library)
      title,
      description,
      completed: false,
      createdAt: new Date().toISOString(),
    });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
      />
      <button type="submit">Create Task</button>
    </form>
  );
};

export default CreateTask;
