import { GraphQLList } from 'graphql';
import { createUser } from '../../db/usersDb';
import CreateUserInput from './createUserInputType';
import User from './userType';

const userMutations = {
  createUsers: {
    type: new GraphQLList(User),
    args: {
      input: {
        type: new GraphQLList(CreateUserInput),
      },
    },
    resolve: async (source, { input }) => {
      const result = input.map(userPayload => createUser(userPayload));
      return result;
    },
  },
};

export { userMutations as default };
