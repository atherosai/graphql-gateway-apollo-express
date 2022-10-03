import {
  GraphQLObjectType,
  GraphQLNonNull,
} from 'graphql';
import User from '@users/UserType';

const CreateUserPayload = new GraphQLObjectType({
  name: 'CreateUserPayload',
  description: 'User type definition',
  fields: () => ({
    user: {
      type: new GraphQLNonNull(User),
    },
  }),
});

export default CreateUserPayload;
