import {
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import { getTasks } from '../../db/tasksDb';
import Task from './taskType';

const taskQueries = {
  tasks: {
    type: new GraphQLNonNull(new GraphQLList(Task)),
    resolve: async () => getTasks(),
  },
};

export {
  taskQueries as default,
};
