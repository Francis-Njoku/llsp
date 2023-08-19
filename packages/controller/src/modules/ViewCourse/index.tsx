// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import {
  ViewCourseQuery_viewCourse,
  ViewCourseQuery,
  ViewCourseQueryVariables
} from "../../schemaTypes";

export const viewCourseQuery = gql`
  query ViewCourseQuery($id: String!) {
    viewCourse(id: $id) {
      id
      pictureUrl
      title
      summary
      description
      duration
      type
      price
      discount
      instructor {
        id
        pictureUrl
        name
        linkedInUrl
        title
        description
        createdBy {
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
        createdOn
        updatedAt
      }
      bespokeAvailability
      assessmentType
      learningObjectives
      trainingDates
      link
      venue
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

export interface WithViewCourse {
  match: ViewCourseQuery_viewCourse | null;
  loading: boolean;
}

interface Props {
  courseId: string;
  children: (data: WithViewCourse) => JSX.Element | null;
}

export class ViewCourse extends React.PureComponent<Props> {
  render() {
    const { children, courseId } = this.props;
    return (
      <Query<ViewCourseQuery, ViewCourseQueryVariables>
        query={viewCourseQuery}
        variables={{ id: courseId }}
      >
        {({ data, loading }) => {
          let match: ViewCourseQuery_viewCourse | null = null;

          if (data && data.viewCourse) {
            match = data.viewCourse;
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
