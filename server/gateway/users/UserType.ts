import {
  GraphQLString,
  GraphQLID,
  GraphQLObjectType,
  GraphQLNonNull,
} from 'graphql';
import UserRoleEnum from '@users/UserRoleEnumType';
import DateTime from '@gateway/custom-scalars/DateTime';


const User = new GraphQLObjectType({
  name: 'User',
  description: 'User type definition',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    username: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: GraphQLString,
    },
    phone: {
      type: GraphQLString,
    },
    firstName: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
    role: {
      type: new GraphQLNonNull(UserRoleEnum),
    },
    createdAt: {
      type: new GraphQLNonNull(DateTime),
    },
    updatedAt: {
      type: DateTime,
    },
  }),
});

export default User;
