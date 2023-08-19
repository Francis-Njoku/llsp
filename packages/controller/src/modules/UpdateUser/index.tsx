// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Mutation, MutationFn } from "react-apollo";

import {
  UpdateUserMutation,
  UpdateUserMutationVariables
} from "../../schemaTypes";

export const updateUserMutation = gql`
  mutation UpdateUserMutation(
    $input: UpdateUserInput!
  ) {
    updateUser(
      input: $input
    )
  }
`;

export interface WithUpdateUser {
  updateUser: MutationFn<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >;
}

interface Props {
  children: (data: WithUpdateUser) => JSX.Element | null;
}

export class UpdateUser extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;
    return (
      <Mutation<UpdateUserMutation, UpdateUserMutationVariables>
        mutation={updateUserMutation}
      >
        {mutate => {
          return children({
            updateUser: mutate
          });
        }}
      </Mutation>
    );
  }
}
