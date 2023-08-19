// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Mutation, MutationFn } from "react-apollo";

import {
  DeleteInstructorMutation,
  DeleteInstructorMutationVariables
} from "../../schemaTypes";

export const deleteInstructorMutation = gql`
  mutation DeleteInstructorMutation(
    $id: String!
  ) {
    deleteInstructor(
      id: $id, 
    ){
      errors {
        message
        path
      }
    }
  }
`;

export interface WithDeleteInstructor {
  deleteInstructor: MutationFn<
    DeleteInstructorMutation,
    DeleteInstructorMutationVariables
  >;
}

interface Props {
  children: (data: WithDeleteInstructor) => JSX.Element | null;
}

export class DeleteInstructor extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;
    return (
      <Mutation<DeleteInstructorMutation, DeleteInstructorMutationVariables>
        mutation={deleteInstructorMutation}
      >
        {mutate => {
          return children({
            deleteInstructor: mutate
          });
        }}
      </Mutation>
    );
  }
}