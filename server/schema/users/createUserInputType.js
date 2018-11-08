import { GraphQLString, GraphQLInputObjectType, GraphQLNonNull } from 'graphql';

const createUserInputType = new GraphQLInputObjectType({
  name: 'CreateUserInput',
  fields: () => ({
    username: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: GraphQLString,
    },
    phone: {
      type: GraphQLString,
    },
    firstName: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
  }),
});

export { createUserInputType as default };
