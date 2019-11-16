import users from "../db/users-db";
import genId from "../lib/gen-id";

export const createUser = (input) => {
    const newUser = {
        id: genId(),
        ...input
    }
    users.unshift(newUser)
    return newUser;
}

export const getUsers = () => {
    return users;
}

export const getOneUser = (id) => {
    return users.find((user) => {
        return user.id === id
    })
}