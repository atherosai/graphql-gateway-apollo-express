import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';

const getTaskInputType = new GraphQLInputObjectType({
  name: 'GetTaskInput',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  }),
});

export {
  getTaskInputType as default,
};
