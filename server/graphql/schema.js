import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      ...require('./users/userQueries.js').default,
    }),
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      ...require('./users/userMutations.js').default,
    }),
  }),
});
