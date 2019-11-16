import {
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLNonNull,
} from 'graphql';
import User from "./UserType"

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