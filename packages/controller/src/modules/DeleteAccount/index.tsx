// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import {
  DeleteAccountMutation,
  DeleteAccountMutationVariables
} from "../../schemaTypes";

export const deleteAccountMutation = gql`
  mutation DeleteAccountMutation($id: String!) {
    deleteAccount(id: $id){
      errors{
        path
        message
      }
      message
    }
  }
`;

export interface WithDeleteAccount {
  deleteAccount: (variables: DeleteAccountMutationVariables) => void;
}

export const withDeleteAccount = graphql<
  any,
  DeleteAccountMutation,
  DeleteAccountMutationVariables,
  WithDeleteAccount
>(deleteAccountMutation, {
  props: ({ mutate }) => ({
    deleteAccount: async variables => {
      if (!mutate) {
        return;
      }

      await mutate({
        variables
      });
    }
  })
});
