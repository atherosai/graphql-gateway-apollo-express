import {
  GraphQLList,
} from 'graphql';
import { getUsers } from '../../db/usersDb';
import User from './userType';
import UserRoleEnum from './userRoleEnumType';

const userQueries = {
  users: {
    type: new GraphQLList(User),
    args: {
      role: {
        type: UserRoleEnum,
      },
    },
    resolve: async (source, { role }) => {
      const result = await getUsers();
      if (role) {
        return result.filter(user => user.role === role);
      }
      return result;
    },
  },
};

export {
  userQueries as default,
};
