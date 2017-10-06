import {
  GraphQLEnumType,
} from 'graphql';

const taskStateEnumType = new GraphQLEnumType({
  name: 'TaskStateEnumType',
  values: {
    assigned: {
      value: 0,
    },
    unassigned: {
      value: 1,
    },
    inProgress: {
      value: 2,
    },
  },
});

export {
  taskStateEnumType as default,
};
