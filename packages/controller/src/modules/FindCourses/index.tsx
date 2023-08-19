// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import {
  FindCoursesQuery,
  FindCoursesQueryVariables,
  FindCoursesQuery_findCourses
} from "../../schemaTypes";

export const findCoursesQuery = gql`
  query FindCoursesQuery(
    $offset: Int!
    $limit: Int!
  ){
    findCourses(
      offset: $offset, 
      limit: $limit
    ){
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

export interface WithFindCourses {
  courses: FindCoursesQuery_findCourses[];
  loading: boolean;
  loadMore: () => void;
  hasMoreCourses: boolean;
}

interface Props {
  variables: FindCoursesQueryVariables;
  children: (data: WithFindCourses) => JSX.Element | null;
}

export class FindCourses extends React.PureComponent<Props> {
  render() {
    const { children, variables } = this.props;
    return (
      <Query<FindCoursesQuery>
        query={findCoursesQuery}
        variables={variables}
      >
        {({ data, loading, fetchMore  }) => {
          let courses: FindCoursesQuery_findCourses[] = [];

          if (data && data.findCourses) {
            courses = data.findCourses;
          }

          let hasMoreCourses = courses.length % variables.limit === 0;
          
          if (courses.length <= variables.offset) {
            hasMoreCourses = false;
          }

          return children({
            hasMoreCourses,
            courses,
            loading,
            loadMore: () => {
              fetchMore({
                variables: {
                  ...variables,
                  offset: courses.length
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                  if (!fetchMoreResult) {
                    return prev;
                  }
                  return {
                    ...prev,
                    findCourses: [
                      ...prev.findCourses,
                      ...fetchMoreResult.findCourses
                    ]
                  };
                }
              });
            }
          });
        }}
      </Query>
    );
  }
}

// export const withFindCourses = graphql<
//   any,
//   FindCoursesQuery,
//   {},
//   WithFindCourses
// >(findCoursesQuery, {
//   props: ({ data }) => {
//     let courses: FindCoursesQuery_findCourses[] = [];

//     if (data && !data.loading && data.findCourses) {
//       courses = data.findCourses;
//     }

//     return {
//       courses,
//       loading: data ? data.loading : false
//     };
//   }
// });