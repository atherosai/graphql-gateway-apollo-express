import {
  GraphQLNonNull,
} from 'graphql';
import { addTask } from '../../db/tasksDb';
import Task from './taskType';
import addTaskInput from './addTaskInput';

const taskMutations = {
  addTask: {
    type: new GraphQLNonNull(Task),
    args: {
      input: {
        type: new GraphQLNonNull(addTaskInput),
      },
    },
    resolve: async (source, { input }) => {
      console.log('input', input);
      const result = await addTask(input);
      return result;
    },
  },
};

export {
  taskMutations as default,
};
