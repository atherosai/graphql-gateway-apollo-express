import {
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

import { internet, random } from 'faker';

import {
  UserType,
  UserInputType,
} from './usersTypes';


export const userQueries = {
  users: {
    type: new GraphQLList(UserType),
    resolve: async () => {
      const users = await new Promise(resolve =>
        setTimeout(() =>
          resolve(new Array(10).fill(undefined).map(() => ({
            id: random.uuid(),
            email: internet.email(),
          }))), 100),
      );
      return users;
    },
  },
};


export const userMutations = {
  createUser: {
    type: UserType,
    args: {
      userPayload: {
        type: new GraphQLNonNull(UserInputType),
      },
    },
    resolve: async (rootValue, { userPayload }) => {
      const result = await new Promise((resolve) => {
        setTimeout(() =>
          resolve(Object.assign(userPayload, {
            id: random.uuid(),
          })), 100);
      });
      return result;
    },
  },
};
