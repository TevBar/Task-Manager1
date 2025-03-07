import React, { useEffect } from "react";
import { useTaskContext } from "../context/TaskContext"; // Import useTaskContext hook

const Dashboard: React.FC = () => {
  const { tasks, deleteTask } = useTaskContext(); // Use the context

  const handleDelete = (id: string) => {
    deleteTask(id);
  };

  return (
    <div>
      <h1>Task Dashboard</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
