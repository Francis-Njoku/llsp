// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import {
  FindUsersQuery,
  FindUsersQuery_findUsers
} from "../../schemaTypes";

export const findUsersQuery = gql`
  query FindUsersQuery {
    findUsers {
      id
      firstname
      lastname
      email
      phone
      dob
      gender
      role
      onboarded
      createdOn
      updatedAt
    }
  }
`;

export interface WithFindUsers {
  users: FindUsersQuery_findUsers[];
  loading: boolean;
}

export const withFindUsers = graphql<
  any,
  FindUsersQuery,
  {},
  WithFindUsers
>(findUsersQuery, {
  props: ({ data }) => {
    let users: FindUsersQuery_findUsers[] = [];

    if (data && !data.loading && data.findUsers) {
      users = data.findUsers;
    }

    return {
      users,
      loading: data ? data.loading : false
    };
  }
});