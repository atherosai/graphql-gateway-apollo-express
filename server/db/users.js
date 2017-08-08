import {
  internet,
  random,
  name,
  phone,
} from 'faker';

const users = new Array(10).fill(undefined).map(() => ({
  id: random.uuid(),
  email: internet.email(),
  phone: phone.phoneNumber(),
  firstName: name.firstName(),
  lastName: name.lastName(),
}));

const createUser = (input) => {
  const newUser = {
    id: random.uuid(),
    ...input,
  };
  users.unshift(newUser);
  return new Promise((resolve) => {
    setTimeout(() =>
      resolve(newUser), 50);
  });
};

const getUsers = () => new Promise((resolve) => {
  setTimeout(() =>
    resolve(users), 50);
});

export {
  createUser,
  getUsers,
};
