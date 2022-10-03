
import {
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import { getTasks } from '@tasks/tasks-operations';
import Task from '@tasks/TaskType';

const TaskQueries = {
  tasks: {
    type: new GraphQLNonNull(new GraphQLList(Task)),
    resolve: () => getTasks(),
  },
};

export default TaskQueries;
