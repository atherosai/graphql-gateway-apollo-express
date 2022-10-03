import {
  GraphQLNonNull,
} from 'graphql';
import { createTask } from '@tasks/tasks-operations';
import CreateTaskInput from '@tasks/CreateTaskInputType';
import CreateTaskPayload from '@tasks/CreateTaskPayloadType';

const TaskMutations = {
  createTask: {
    type: CreateTaskPayload,
    args: {
      input: {
        type: new GraphQLNonNull(CreateTaskInput),
      },
    },
    resolve: (_source, { input }) => {
      const createdTask = createTask(input);
      return {
        task: createdTask,
      };
    },
  },
};

export default TaskMutations;
