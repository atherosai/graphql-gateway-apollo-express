import {
  GraphQLNonNull,
} from 'graphql';
import isEmail from 'validator/lib/isEmail';

import { createUser } from '../../db/users';


const userMutations = {
  createUser: {
    type: require('./userType').default,
    args: {
      input: {
        type: new GraphQLNonNull(require('./userInputType').default),
      },
    },
    resolve: async (rootValue, { input }) => {
      if (!isEmail(input.email)) {
        throw new Error('Email is not in valid format');
      }
      return await createUser(input);
    },
  },
};

export {
  userMutations as default,
};
