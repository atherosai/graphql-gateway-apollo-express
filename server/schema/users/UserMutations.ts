 
import {
    GraphQLList,
    GraphQLNonNull
  } from 'graphql';
import { isEmail } from 'validator';
import { createUser } from '../../operations/users-operations';
import CreateUserInput from "./CreateUserInputType";
import CreateUserPayload from "./CreateUserPayload";
import CreateUsersPayload from "./CreateUsersPayload";

const UserMutations = {
    createUser: {
        type: CreateUserPayload,
        args: {
            input: {
                type: new GraphQLNonNull(CreateUserInput),
            },
        },
        resolve: async ({}, { input }) => {
            if (input.email && !isEmail(input.email)) {
                throw new Error('Email is not in valid format');
            }
            return createUser(input);
        },
    },
    createUsers: {
        type: CreateUsersPayload,
        args: {
            input: {
                type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(CreateUserInput)))
            }
        },
        resolve: ({}, { input }) => {
            const createUsers = input.map(userPayload => createUser(userPayload));
            return {
                users: createUsers
            }
        }
    },
}

export default UserMutations;