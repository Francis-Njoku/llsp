// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import {
  ViewUserQuery_viewUser,
  ViewUserQuery,
  ViewUserQueryVariables
} from "../../schemaTypes";

export const viewUserQuery = gql`
  query ViewUserQuery($id: String!) {
    viewUser(id: $id) {
      id
      firstname
      lastname
      email
      dob
      gender
      role
      onboarded
      createdOn
      updatedAt
    }
  }
`;

export interface WithViewUser {
  user: ViewUserQuery_viewUser | null;
  loading: boolean;
}

interface Props {
  userId: string;
  children: (data: WithViewUser) => JSX.Element | null;
}

export class ViewUser extends React.PureComponent<Props> {
  render() {
    const { children, userId } = this.props;
    return (
      <Query<ViewUserQuery, ViewUserQueryVariables>
        query={viewUserQuery}
        variables={{ id: userId }}
      >
        {({ data, loading }) => {
          let user: ViewUserQuery_viewUser | null = null;

          if (data && data.viewUser) {
            user = data.viewUser;
          }

          return children({
            user,
            loading
          });
        }}
      </Query>
    );
  }
}
