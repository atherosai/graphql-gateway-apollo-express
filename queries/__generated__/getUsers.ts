/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUsers
// ====================================================

export interface getUsers_users {
  id: string;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  phone: string | null;
  active: boolean | null;
}

export interface getUsers {
  users: getUsers_users[];
}
