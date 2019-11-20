
import {
  GraphQLEnumType,
} from 'graphql';

const TaskStateEnumType = new GraphQLEnumType({
  name: 'TaskStateEnum',
  values: {
    ASSIGNED: {
      value: 0,
    },
    UNASSIGNED: {
      value: 1,
    },
    IN_PROGRESS: {
      value: 2,
    },
  },
});

export default TaskStateEnumType;
