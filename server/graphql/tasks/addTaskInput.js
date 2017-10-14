import {
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLFloat,
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
    taskPriority: {
      type: GraphQLInt,
      defaultValue: 1,
    },
    progress: {
      type: GraphQLFloat,
      defaultValue: 0,
    },
  }),
});

export {
  addTaskInputType as default,
};
