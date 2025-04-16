import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import { useTaskContext } from "../context/TaskContext";

const Dashboard: React.FC = () => {
  const { tasks, deleteTask } = useTaskContext();

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

            {/* ✅ Edit Button */}
            <Link to={`/edit/${task.id}`}>
              <button>Edit</button>
            </Link>

            {/* ✅ Delete Button */}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
