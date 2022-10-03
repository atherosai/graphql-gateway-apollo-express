
import {
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLFloat,
} from 'graphql';
import TaskStateEnum from '@tasks/TaskStateEnumType';
import DateTime from '@gateway/custom-scalars/DateTime';

const CreateTaskInputType = new GraphQLInputObjectType({
  name: 'CreateTaskInput',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    completed: {
      type: GraphQLBoolean,
      defaultValue: false,
    },
    state: {
      type: TaskStateEnum,
      defaultValue: TaskStateEnum.getValue('ASSIGNED'),
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

export default CreateTaskInputType;
