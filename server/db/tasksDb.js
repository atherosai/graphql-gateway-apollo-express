import { random } from 'faker';

const tasks = [{
  id: random.uuid(),
  name: 'Test task',
  completed: false,
  createdAt: '2017-10-06T14:54:54+00:00',
  updatedAt: '2017-10-06T14:54:54+00:00',
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

const getTasks = () => new Promise((resolve) => {
  setTimeout(() =>
    resolve(tasks), 50);
});

export {
  getTasks,
  addTask,
};
