import {
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLID,
  GraphQLFloat,
} from 'graphql';
import TaskEnumType from './taskStateEnumType';
import DateTime from '../scalars/dateTimeScalar';

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
    dueDate: {
      type: DateTime,
    },
  }),
});

export { addTaskInputType as default };
