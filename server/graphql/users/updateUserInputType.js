import { GraphQLString, GraphQLInputObjectType, GraphQLNonNull, GraphQLID } from 'graphql';

const UserInputType = new GraphQLInputObjectType({
  name: 'UpdateUserInput',
  description: 'Input user payload',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    username: {
      type: GraphQLString,
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

export { UserInputType as default };
