// src/types/task.ts

export interface Task {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: string; // Ensure this field is included in the type
  }
  