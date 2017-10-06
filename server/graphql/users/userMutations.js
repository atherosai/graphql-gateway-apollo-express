import {
  GraphQLNonNull,
} from 'graphql';
import isEmail from 'validator/lib/isEmail';

import { createUser } from '../../db/usersDb';

import User from './userType';
import UserInput from './userInputType';

const userMutations = {
  createUser: {
    type: User,
    args: {
      input: {
        type: new GraphQLNonNull(UserInput),
      },
    },
    resolve: async (rootValue, { input }) => {
      if (input.email && !isEmail(input.email)) {
        throw new Error('Email is not in valid format');
      }
      return createUser(input);
    },
  },
};

export {
  userMutations as default,
};
