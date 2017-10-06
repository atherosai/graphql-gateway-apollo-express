import {
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLBoolean,
} from 'graphql';
import TaskEnumType from './taskStateEnumType';

const addTaskInputType = new GraphQLInputObjectType({
  name: 'AddTaskInput',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    completed: {
      type: GraphQLBoolean,
      defaultValue: false,
    },
    state: {
      type: TaskEnumType,
      defaultValue: 'unassigned',
    },
  }),
});

export {
  addTaskInputType as default,
};
