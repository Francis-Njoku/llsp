// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import { 
    CreateInstructorMutation, 
    CreateInstructorMutationVariables 
} from "../../schemaTypes";

export const createInstructorMutation = gql`
  mutation CreateInstructorMutation(
    $pictureUrl: String
    $name: String!
    $linkedInUrl: String
    $title: String!
    $description: String!
  ) {
    createInstructor(
      pictureUrl: $pictureUrl
      name: $name
      linkedInUrl: $linkedInUrl
      title: $title
      description: $description
    ) {
      errors {
        message
        path
      }
    }
  }
`;

export interface WithCreateInstructor {
  createInstructor: (variables: CreateInstructorMutationVariables) => void;
}

export const withCreateInstructor = graphql<
  any,
  CreateInstructorMutation,
  CreateInstructorMutationVariables,
  WithCreateInstructor
>(createInstructorMutation, {
  props: ({ mutate }) => ({
    createInstructor: async variables => {
      if (!mutate) {
        return;
      }

      const response = await mutate({
        variables
      });

      console.log(response);
    }
  })
});