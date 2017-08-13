import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';

import userMutations from './users/userMutations';
import userQueries from './users/userQueries';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      ...userQueries,
    }),
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      ...userMutations,
    }),
  }),
});
