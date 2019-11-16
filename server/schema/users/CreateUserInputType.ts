import {
    GraphQLString,
    GraphQLInputObjectType,
    GraphQLNonNull,
  } from 'graphql';
import UserRole from "./UserRoleEnumType";

const CreateUserInputType = new GraphQLInputObjectType({
  name: 'CreateUserInput',
  description: 'Input payload for creating user',
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
    role: {
      type: UserRole,
      defaultValue: UserRole.getValue("ACCOUNTANT").value
    }
  }),
});
  
export default CreateUserInputType;