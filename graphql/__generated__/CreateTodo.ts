/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateTodo
// ====================================================

export interface CreateTodo_createTodo_user {
  __typename: "User";
  id: string;
  name: string;
}

export interface CreateTodo_createTodo {
  __typename: "Todo";
  id: string;
  text: string;
  done: boolean;
  user: CreateTodo_createTodo_user;
}

export interface CreateTodo {
  createTodo: CreateTodo_createTodo;
}

export interface CreateTodoVariables {
  text: string;
  userId: string;
}
