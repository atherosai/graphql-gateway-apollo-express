import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';

import UserQueries from '@users/UserQueries';
import UserMutations from '@users/UserMutations';
import TaskMutations from '@tasks/TaskMutations';
import TaskQueries from '@tasks/TaskQueries';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      ...UserQueries,
      ...TaskQueries,
    }),
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      ...UserMutations,
      ...TaskMutations,
    }),
  }),
});

export default schema;
