// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import { 
  InitiatePaymentMutation, 
  InitiatePaymentMutationVariables 
} from "../../schemaTypes";

export const initiatePaymentMutation = gql`
  mutation InitiatePaymentMutation(
    $id: String!
    $email: String!
    $firstname: String
    $lastname: String
    $phone: String
    $amount: Float!
    $reference: String!
  ) {
    initiatePayment(
      id: $id
      email: $email
      firstname: $firstname
      lastname: $lastname
      phone: $phone
      amount: $amount
      reference: $reference
    ){
      errors{
        path
        message
      }
      message
    }
  }
`;

export interface WithInitiatePayment {
  initiatePayment: (variables: InitiatePaymentMutationVariables) => void;
}

export const withInitiatePayment = graphql<
  any,
  InitiatePaymentMutation,
  InitiatePaymentMutationVariables,
  WithInitiatePayment
>(initiatePaymentMutation, {
  props: ({ mutate }) => ({
    initiatePayment: async variables => {
      if (!mutate) {
        return;
      }

      await mutate({
        variables
      });
    }
  })
});