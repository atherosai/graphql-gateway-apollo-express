import {
    GraphQLNonNull,
  } from 'graphql';
  import { createTask } from '../../operations/tasks-operations';
  import Task from './TaskType';
  import CreateTaskInput from './CreateTaskInputType';
  import CreateTaskPayload from "./CreateTaskPayloadType"
import { create } from 'domain';
  const TaskMutations = {
    createTask: {
      type: CreateTaskPayload,
      args: {
        input: {
          type: new GraphQLNonNull(CreateTaskInput),
        },
      },
      resolve: async (root, { input }) => {
        const createdTask = await createTask(input);
        return {
          task: createdTask
        }
      },
    },
  };

  export default TaskMutations