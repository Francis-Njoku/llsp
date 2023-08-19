// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import {
  FindInstructorsQuery,
  FindInstructorsQuery_findInstructors
} from "../../schemaTypes";

export const findInstructorsQuery = gql`
  query FindInstructorsQuery {
    findInstructors {
      id
      pictureUrl
      name
      linkedInUrl
      title
      description
      featured
      createdBy {
        id
        firstname
        lastname
        email
        phone
      }
      createdOn
      updatedAt
    }
  }
`;

export interface WithFindInstructors {
  instructors: FindInstructorsQuery_findInstructors[];
  loading: boolean;
}

export const withFindInstructors = graphql<
  any,
  FindInstructorsQuery,
  {},
  WithFindInstructors
>(findInstructorsQuery, {
  props: ({ data }) => {
    let instructors: FindInstructorsQuery_findInstructors[] = [];

    if (data && !data.loading && data.findInstructors) {
      instructors = data.findInstructors;
    }

    return {
      instructors,
      loading: data ? data.loading : false
    };
  }
});