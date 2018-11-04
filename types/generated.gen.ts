/* tslint:disable */

// ====================================================
// START: Typescript template
// ====================================================

// ====================================================
// Types
// ====================================================

export interface Query {
  user?: User | null;

  users: User[];
}
/** User type definition */
export interface User {
  id: string;

  username: string;

  email?: string | null;

  phone?: string | null;

  firstName?: string | null;

  lastName?: string | null;
}

export interface Mutation {
  createUsers?: (User | null)[] | null;
}

// ====================================================
// InputTypes
// ====================================================

export interface CreateUserInput {
  username: string;

  email?: string | null;

  phone?: string | null;

  firstName?: string | null;

  lastName?: string | null;
}

// ====================================================
// Arguments
// ====================================================

export interface UserQueryArgs {
  id: string;
}
export interface UsersQueryArgs {
  role?: RoleEnum | null;
}
export interface CreateUsersMutationArgs {
  input?: (CreateUserInput | null)[] | null;
}

// ====================================================
// Enums
// ====================================================

export enum RoleEnum {
  admin = "admin",
  accountant = "accountant"
}

// ====================================================
// END: Typescript template
// ====================================================
