import { GraphQLList, GraphQLID, GraphQLNonNull } from 'graphql';
import { getUsers, getOneUser } from '../../db/usersDb';
import User from './userType';
import UserRoleEnum from './userRoleEnumType';

const userQueries = {
  user: {
    type: User,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    resolve: async (source, { id }) => {
      const result = await getOneUser({ id });
      return result;
    },
  },
  users: {
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(User))),
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

export { userQueries as default };
