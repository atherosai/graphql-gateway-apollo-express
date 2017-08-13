import {
  GraphQLList,
} from 'graphql';
import { getUsers } from '../../db/users';
import User from './userType';

const userQueries = {
  users: {
    type: new GraphQLList(User),
    resolve: async () => getUsers(),
  },
};

export {
  userQueries as default,
};
