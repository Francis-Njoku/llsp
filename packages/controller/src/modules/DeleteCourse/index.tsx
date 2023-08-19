// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Mutation, MutationFn } from "react-apollo";

import {
  DeleteCourseMutation,
  DeleteCourseMutationVariables
} from "../../schemaTypes";

export const deleteCourseMutation = gql`
  mutation DeleteCourseMutation(
    $id: String!
  ) {
    deleteCourse(
      id: $id, 
    ){
      errors {
        message
        path
      }
    }
  }
`;

export interface WithDeleteCourse {
  deleteCourse: MutationFn<
    DeleteCourseMutation,
    DeleteCourseMutationVariables
  >;
}

interface Props {
  children: (data: WithDeleteCourse) => JSX.Element | null;
}

export class DeleteCourse extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;
    return (
      <Mutation<DeleteCourseMutation, DeleteCourseMutationVariables>
        mutation={deleteCourseMutation}
      >
        {mutate => {
          return children({
            deleteCourse: mutate
          });
        }}
      </Mutation>
    );
  }
}