// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import {
  ViewInstructorQuery_viewInstructor,
  ViewInstructorQuery,
  ViewInstructorQueryVariables
} from "../../schemaTypes";

export const viewInstructorQuery = gql`
  query ViewInstructorQuery($id: String!) {
    viewInstructor(id: $id){
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

export interface WithViewInstructor {
  match: ViewInstructorQuery_viewInstructor | null;
  loading: boolean;
}

interface Props {
  instructorId: string;
  children: (data: WithViewInstructor) => JSX.Element | null;
}

export class ViewInstructor extends React.PureComponent<Props> {
  render() {
    const { children, instructorId } = this.props;
    return (
      <Query<ViewInstructorQuery, ViewInstructorQueryVariables>
        query={viewInstructorQuery}
        variables={{ id: instructorId }}
      >
        {({ data, loading }) => {
          let match: ViewInstructorQuery_viewInstructor | null = null;

          if (data && data.viewInstructor) {
            match = data.viewInstructor;
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
