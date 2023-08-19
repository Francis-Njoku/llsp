// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import { 
    SendMessageMutation, 
    SendMessageMutationVariables 
} from "../../schemaTypes";

export const sendMessageMutation = gql`
  mutation SendMessageMutation(
    $name: String!
    $email: String!
    $subject: String!
    $message: String!
  ) {
    sendMessage(
      input: {
        name: $name
        email: $email
        subject: $subject
        message: $message
      }
    ){
      errors {
        message
        path
      }
    }
  }
`;

export interface WithSendMessage {
  sendMessage: (variables: SendMessageMutationVariables) => void;
}

export const withSendMessage = graphql<
  any,
  SendMessageMutation,
  SendMessageMutationVariables,
  WithSendMessage
>(sendMessageMutation, {
  props: ({ mutate }) => ({
    sendMessage: async variables => {
      if (!mutate) {
        return;
      }

      await mutate({
        variables
      });
    }
  })
});
