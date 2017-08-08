import {
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import { getUsers } from '../../db/users';

const userQueries = {
  users: {
    type: new GraphQLList(require('./userType.js').default),
    resolve: async () => await getUsers(),
  },
};

export {
  userQueries as default,
};
