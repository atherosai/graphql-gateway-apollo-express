import users from '../db/users-db';
import genId from '../lib/gen-id';

export const createUser = (input) => {
  const newUser = {
    id: genId(),
    ...input,
  };
  users.unshift(newUser);
  return newUser;
};

export const getUsers = () => users;

export const getOneUser = (id) => users.find((user) => user.id === id);
