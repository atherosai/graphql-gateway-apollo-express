import { GraphQLNonNull } from 'graphql';
import isEmail from 'validator/lib/isEmail';

import { createUser, updateUser } from '../../db/users';

import User from './userType';
import AddUserInput from './addUserInputType';
import UpdateUserInput from './updateUserInputType';

const userMutations = {
  createUser: {
    type: User,
    args: {
      input: {
        type: new GraphQLNonNull(AddUserInput),
      },
    },
    resolve: async (rootValue, { input }) => {
      if (input.email && !isEmail(input.email)) {
        throw new Error('Email is not in valid format');
      }
      return createUser(input);
    },
  },
  updateUser: {
    type: User,
    args: {
      input: {
        type: new GraphQLNonNull(UpdateUserInput),
      },
    },
    resolve: async (rootValue, { input }) => updateUser(input),
  },
};

export { userMutations as default };
