import {
  GraphQLObjectType,
  GraphQLNonNull,
} from 'graphql';
import Task from '@tasks/TaskType';

const CreateTaskPayload = new GraphQLObjectType({
  name: 'CreateTaskPayload',
  description: 'CreateTaskPayload type definition',
  fields: () => ({
    task: {
      type: new GraphQLNonNull(Task),
    },
  }),
});

export default CreateTaskPayload;
