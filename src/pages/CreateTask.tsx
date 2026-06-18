import React, { useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import './CreateTask.css';

const CreateTask: React.FC = () => {
  const { addTask } = useTaskContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "") return alert("Title is required");

    addTask({
      id: Math.random().toString(36).slice(2, 11),
      title,
      description,
      completed: false,
      createdAt: new Date().toISOString(),
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="create-task-container">
      <h2>Create New Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What needs to be done?"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add any details or notes..."
          />
        </div>
        <button type="submit" className="submit-btn">Create Task</button>
      </form>
    </div>
  );
};

export default CreateTask;
