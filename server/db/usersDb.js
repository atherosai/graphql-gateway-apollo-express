import { random } from 'faker';

const users = [
  {
    id: '7b838108-3720-4c50-9de3-a7cc04af24f5',
    firstName: 'Berniece',
    lastName: 'Kris',
    phone: '021.807.6991 x10598',
    username: 'Ana_Quigley',
    role: 0,
  },
  {
    id: '66c9b0fd-7df6-4e2a-80c2-0e4f8cdd89b1',
    firstName: 'Bradly',
    lastName: 'Lind',
    phone: '863.803.0636 x9247',
    username: 'Winona_Kulas12',
    role: 0,
  },
  {
    id: '718590a1-33ac-4e61-9fef-b06916acd76b',
    firstName: 'Leila',
    lastName: 'Schowalter',
    phone: '1-425-625-3887',
    username: 'Isabell.Kautzer',
    role: 0,
  },
  {
    id: '411df0f3-bb2c-4f5f-870f-3db9c30d754f',
    firstName: 'Laila',
    lastName: 'Breitenberg',
    phone: '155.714.0635 x741',
    username: 'Christophe.Oberbrunner',
    role: 1,
  },
  {
    id: 'e1254480-d205-4be8-abfa-67ad7dcd03fb',
    firstName: 'Joe',
    lastName: 'Crist',
    phone: '895-077-1248',
    username: 'Dahlia.Gerhold56',
    role: 1,
  },
  {
    id: 'd0087200-9621-4787-a3db-cebbede163e6',
    firstName: 'Bettye',
    lastName: 'Bartoletti',
    phone: '1-610-898-0105',
    username: 'Thad_Mayert',
    role: 1,
  },
];

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

const getOneUser = ({ id }) => new Promise(resolve => resolve(users.find(user => user.id === id)));

const getUsers = () => new Promise((resolve) => {
  setTimeout(() =>
    resolve(users), 50);
});

export {
  getOneUser,
  createUser,
  getUsers,
};
