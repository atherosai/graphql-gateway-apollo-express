
import genId from "../lib/gen-id";
import tasks from "../db/tasks-db";

export const createTask = (input) => {
    const newTask = {
      id: genId(),
      ...input,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    tasks.unshift(newTask);
    return newTask;
  };
  
export const getTaskById = id => tasks.find(task => task.id === id)
  
export const getTasks = () => tasks;