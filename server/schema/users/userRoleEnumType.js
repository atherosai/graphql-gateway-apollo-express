import {
  GraphQLEnumType,
} from 'graphql';

const roleEnumType = new GraphQLEnumType({
  name: 'RoleEnum',
  values: {
    admin: {
      value: 0,
    },
    accountant: {
      value: 1,
    },
  },
});

export {
  roleEnumType as default,
};
