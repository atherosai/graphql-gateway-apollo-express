
import {
  GraphQLEnumType,
} from 'graphql';

const UserRoleEnumType = new GraphQLEnumType({
  name: 'UserRoleEnum',
  values: {
    ADMIN: {
      value: 0,
    },
    ACCOUNTANT: {
      value: 1,
    },
  },
});

export default UserRoleEnumType;
