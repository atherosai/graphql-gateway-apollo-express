import {
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLFloat,
    GraphQLBoolean,
  } from 'graphql';
  
  import DateTime from '../custom-scalars/DateTime';
  import TaskStateEnumType from './TaskStateEnumType';
  
  const TaskType = new GraphQLObjectType({
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
        defaultValue: false
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
        type: DateTime,
      },
      createdAt: {
        type: new GraphQLNonNull(DateTime),
      },
      updatedAt: {
        type: DateTime,
      },
    }),
  });
  
  export default TaskType