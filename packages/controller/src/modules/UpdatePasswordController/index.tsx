import * as React from "react";
import gql from "graphql-tag";
import { graphql, ChildMutateProps } from "react-apollo";

import {
  UpdatePasswordChangeMutation,
  UpdatePasswordChangeMutationVariables
} from "../../schemaTypes";
import { normalizeErrors } from "../../utils/normalizeErrors";
import { NormalizedErrorMap } from "../../types/NormalizedErrorMap";

interface Props {
  children: (
    data: {
      submit: (
        values: UpdatePasswordChangeMutationVariables
      ) => Promise<NormalizedErrorMap | null>;
    }
  ) => JSX.Element | null;
}

class C extends React.PureComponent<
  ChildMutateProps<
    Props,
    UpdatePasswordChangeMutation,
    UpdatePasswordChangeMutationVariables
  >
> {
  submit = async (values: UpdatePasswordChangeMutationVariables) => {
    console.log(values);
    const {
      data: { updatePasswordChange }
    }: any = await this.props.mutate({
      variables: values
    });

    console.log(updatePasswordChange);

    if (updatePasswordChange) {
      return normalizeErrors(updatePasswordChange);
    }

    return null;
  };

  render() {
    return this.props.children({ submit: this.submit });
  }
}

const updatePasswordChangeMutation = gql`
  mutation UpdatePasswordChangeMutation($newPassword: String!) {
    updatePasswordChange(newPassword: $newPassword) {
      path
      message
    }
  }
`;

export const UpdatePasswordController = graphql<
  Props,
  UpdatePasswordChangeMutation,
  UpdatePasswordChangeMutationVariables
>(updatePasswordChangeMutation)(C);