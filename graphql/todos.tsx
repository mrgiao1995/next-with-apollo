import { gql } from "@apollo/client";
import { USER_FIELDS } from './fragments/user';
import { TODO_FIELDS } from './fragments/todo';

export const GET_ALL_TODOS = gql`
  query GetAllTodo {
    todos {
       ...TodoFields
        user {
          ...UserFields
        }
    }
  }
  ${USER_FIELDS}
  ${TODO_FIELDS}
`;

