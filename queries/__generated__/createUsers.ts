/* tslint:disable */
// This file was automatically generated and should not be edited.

import { CreateUserInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: createUsers
// ====================================================

export interface createUsers_createUsers {
  id: string;
  firstName: string | null;
  lastName: string | null;
  username: string;
  phone: string | null;
  email: string | null;
  active: boolean | null;
}

export interface createUsers {
  createUsers: (createUsers_createUsers | null)[] | null;
}

export interface createUsersVariables {
  input: CreateUserInput[];
}
