import {
    GraphQLNonNull,
  } from 'graphql';
import { createTask } from '../../operations/tasks-operations';
import CreateTaskInput from './CreateTaskInputType';
import CreateTaskPayload from "./CreateTaskPayloadType"

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
        task: createdTask
      }
    },
  },
};

export default TaskMutations