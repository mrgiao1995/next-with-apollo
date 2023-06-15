import { gql } from "@apollo/client";
import { USER_FIELDS } from './fragments/user';
import { TODO_FIELDS } from './fragments/todo';

export const CREATE_TODO = gql`
  mutation CreateTodo($text: String!, $userId: String!) {
    createTodo(input: {
        text: $text
        userId: $userId
    }) {
       ...TodoFields
        user {
          ...UserFields
        }
    }
  }
  ${USER_FIELDS}
  ${TODO_FIELDS}
`