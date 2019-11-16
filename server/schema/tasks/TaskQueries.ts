 
import {
    GraphQLList,
    GraphQLNonNull,
  } from 'graphql';
  import { getTasks } from '../../operations/tasks-operations';
  import Task from './TaskType';
  
  const TaskQueries = {
    tasks: {
      type: new GraphQLNonNull(new GraphQLList(Task)),
      resolve: () => getTasks(),
    },
  };
  
  export default TaskQueries;