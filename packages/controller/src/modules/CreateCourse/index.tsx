// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import { 
    CreateCourseMutation, 
    CreateCourseMutationVariables 
} from "../../schemaTypes";

export const createCourseMutation = gql`
  mutation CreateCourseMutation(
    $pictureUrl: String
    $title: String!
    $summary: String
    $description: String!
    $duration: String!
    $type: String!
    $price: Float!
    $discount: Float
    $instructorId: String!
    $bespokeAvailability: Boolean!
    $assessmentType: String!
    $learningObjectives: String!
    $trainingDates: String!
    $link: String
    $venue: String
  ) {
    createCourse(
      pictureUrl: $pictureUrl
      title: $title
      summary: $summary
      description: $description
      duration: $duration
      type: $type
      price: $price
      discount: $discount
      instructorId: $instructorId
      bespokeAvailability: $bespokeAvailability
      assessmentType: $assessmentType
      learningObjectives: $learningObjectives
      trainingDates: $trainingDates
      link: $link
      venue: $venue
    ) {
      errors {
        message
        path
      }
    }
  }
`;

export interface WithCreateCourse {
  createCourse: (variables: CreateCourseMutationVariables) => void;
}

export const withCreateCourse = graphql<
  any,
  CreateCourseMutation,
  CreateCourseMutationVariables,
  WithCreateCourse
>(createCourseMutation, {
  props: ({ mutate }) => ({
    createCourse: async variables => {
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