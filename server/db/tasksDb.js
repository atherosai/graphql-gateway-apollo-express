import { random } from 'faker';

const tasks = [{
  id: 6,
  name: 'Test task',
  completed: false,
  createdAt: '2017-10-06T14:54:54+00:00',
  updatedAt: '2017-10-06T14:54:54+00:00',
  taskPriority: 1,
  progress: '55.5',
  state: 1,
}];

const addTask = (input) => {
  const newTask = {
    id: random.uuid(),
    ...input,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  tasks.unshift(newTask);
  return new Promise((resolve) => {
    setTimeout(() =>
      resolve(newTask), 50);
  });
};

const getTaskById = id => new Promise(resolve => setTimeout(() =>
  resolve(tasks.find(task => task.id === id)), 50));

const getTasks = () => new Promise((resolve) => {
  setTimeout(() =>
    resolve(tasks), 50);
});

export {
  getTaskById,
  getTasks,
  addTask,
};
