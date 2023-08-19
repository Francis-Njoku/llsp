// @ts-ignore
import * as React from "react";
// import gql from "graphql-tag";
import { Mutation, MutationFn } from "react-apollo";

import {
  UpdateUserMutation,
  UpdateUserMutationVariables
} from "../../schemaTypes";
import { updateUserMutation } from "../UpdateUser";

export interface WithUpdatePassword {
  updateUser: MutationFn<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >;
}

interface Props {
  children: (data: WithUpdatePassword) => JSX.Element | null;
}

export class UpdatePassword extends React.PureComponent<Props> {
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
