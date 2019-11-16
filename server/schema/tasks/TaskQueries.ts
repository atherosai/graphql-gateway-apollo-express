 
import {
    GraphQLList,
    GraphQLNonNull,
    GraphQLID
  } from 'graphql';
  import { getTasks } from '../../operations/tasks-operations';
  import Task from './TaskType';
  
  const TaskQueries = {
    tasks: {
      type: new GraphQLNonNull(new GraphQLList(Task)),
      resolve: async () => getTasks(),
    },
  };
  
  export default TaskQueries;