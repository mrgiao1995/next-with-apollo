/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllTodo
// ====================================================

export interface GetAllTodo_todos_user {
  __typename: "User";
  id: string;
  name: string;
}

export interface GetAllTodo_todos {
  __typename: "Todo";
  id: string;
  text: string;
  done: boolean;
  user: GetAllTodo_todos_user;
}

export interface GetAllTodo {
  todos: GetAllTodo_todos[];
}
