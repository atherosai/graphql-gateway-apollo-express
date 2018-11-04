import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';

import userQueries from './users/userQueries';
import userMutations from './users/userMutations';

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
