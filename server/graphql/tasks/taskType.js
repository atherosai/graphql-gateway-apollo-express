import {
  GraphQLString,
  GraphQLID,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLFloat,
  GraphQLBoolean,
} from 'graphql';

import DateTimeScalar from '../scalars/dateTimeScalar';
import TaskStateEnumType from './taskStateEnumType';

const taskType = new GraphQLObjectType({
  name: 'Task',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    completed: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    state: {
      type: new GraphQLNonNull(TaskStateEnumType),
    },
    progress: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    taskPriority: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    dueDate: {
      type: DateTimeScalar,
    },
    createdAt: {
      type: new GraphQLNonNull(DateTimeScalar),
    },
    updatedAt: {
      type: new GraphQLNonNull(DateTimeScalar),
    },
  }),
});

export {
  taskType as default,
};
