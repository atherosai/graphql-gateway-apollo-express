import {
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import { getTasks, getTaskById } from '../../db/tasksDb';
import Task from './taskType';

const taskQueries = {
  tasks: {
    type: new GraphQLNonNull(new GraphQLList(Task)),
    resolve: async () => getTasks(),
  },
  task: {
    type: new GraphQLNonNull(Task),
    args: {
      input: {
        type: new GraphQLNonNull(require('./getTaskInput').default),
      },
    },
    resolve: async (source, { input }) => {
      const result = await getTaskById(input.id);
      console.log('result', result);
      return result;
    },
  },
};

export {
  taskQueries as default,
};
