// src/services/taskService.ts
export const taskService = {
  getAllTasks: async () => {
    const response = await fetch("/api/tasks");
    return await response.json();
  },
  createTask: async (task: Task) => {
    await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify(task),
      headers: { "Content-Type": "application/json" },
    });
  },
  updateTask: async (task: Task) => {
    await fetch(`/api/tasks/${task.id}`, {
      method: "PUT",
      body: JSON.stringify(task),
      headers: { "Content-Type": "application/json" },
    });
  },
};
