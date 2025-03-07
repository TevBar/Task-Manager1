import React, { useState, useEffect } from "react";
import { useTaskContext } from "../context/TaskContext"; // Import the custom hook to access tasks
import { useNavigate, useParams } from "react-router-dom";
import { Task } from "../types/task"; // Ensure that the Task type is correctly defined

const EditTask: React.FC = () => {
  const { tasks, editTask } = useTaskContext(); // Access the context functions
  const { id } = useParams<{ id: string }>(); // Get the task ID from the URL parameters
  const navigate = useNavigate(); // To navigate after editing

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  // useEffect to populate form fields when the task is found
  useEffect(() => {
    const taskToEdit = tasks.find((task) => task.id === id); // Find the task by its ID
    if (taskToEdit) {
      setTitle(taskToEdit.title); // Set title in state
      setDescription(taskToEdit.description); // Set description in state
    }
  }, [id, tasks]); // Re-run when the task ID or tasks change

  // Handle form submission to update the task
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Ensure the title is not empty
    if (title.trim() === "") return alert("Title is required");

    // Call the editTask function from context to update the task in state
    editTask(id!, { title, description, completed: false, createdAt: new Date().toISOString() });

    // Redirect to the dashboard after editing
    navigate("/"); // Redirect to the dashboard or wherever you want
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task Title"
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task Description"
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditTask;
