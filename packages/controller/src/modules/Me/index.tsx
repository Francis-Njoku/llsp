import * as React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import {
  MeQuery_me,
  MeQuery
} from "../../schemaTypes";


export const meQuery = gql`
  query MeQuery {
    me {
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

export interface WithMe {
  match: MeQuery_me | null;
  loading: boolean;
}

interface Props {
  children: (data: WithMe) => JSX.Element | null;
}

export class ViewMe extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;
    return (
      <Query<MeQuery>
        query={meQuery}
      >
        {({ data, loading }) => {
          let match: MeQuery_me | null = null;

          if (data && data.me) {
            match = data.me;
          }

          return children({
            match,
            loading
          });
        }}
      </Query>
    );
  }
}