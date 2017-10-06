import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';

import userMutations from './users/userMutations';
import userQueries from './users/userQueries';
import taskQueries from './tasks/taskQueries';
import taskMutations from './tasks/taskMutations';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      ...userQueries,
      ...taskQueries,
    }),
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      ...userMutations,
      ...taskMutations,
    }),
  }),
});
