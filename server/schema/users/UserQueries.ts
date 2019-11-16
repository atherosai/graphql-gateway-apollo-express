 
import {
    GraphQLList,
    GraphQLNonNull,
    GraphQLID
  } from 'graphql';
import { getUsers } from '../../operations/users-operations';
import User from './UserType';
import UserRoleEnum from "./UserRoleEnumType"

const UserQueries = {
    user: {
        type: User,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
        },
        resolve: () => {

        }
    },
    users: {
        type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(User))),
        args: {
            role: {
                type: UserRoleEnum
            }
        },
        resolve: ({}, { role }) => {
            const result = getUsers();
            if (role != null) {
                console.log("role", role, result.filter(user => user.role === role))
               return result.filter(user => user.role === role);
            }
            return result;
        }
    },
};

export default UserQueries