// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import {
  FindEnrollmentsQuery,
  FindEnrollmentsQueryVariables,
  FindEnrollmentsQuery_findEnrollments
} from "../../schemaTypes";

export const findEnrollmentsQuery = gql`
  query FindEnrollmentsQuery(
    $offset: Int!
    $limit: Int!
  ){
    findEnrollments(
      offset: $offset, 
      limit: $limit
    ){
      id
      course {
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
      paid
      completed
      owner {
        id
        email
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
  }
`;

export const newEnrollmentSubscription = gql`
  subscription NewEnrollmentSubscription {
    newEnrollment{
      id
      course {
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
      completed
      owner {
        id
        email
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
  }
`;

export interface WithFindEnrollments {
  enrollments: FindEnrollmentsQuery_findEnrollments[];
  loading: boolean;
  loadMore: () => void;
  hasMoreEnrollments: boolean;
  subscribe: () => () => void;
}

interface Props {
  variables: FindEnrollmentsQueryVariables;
  children: (data: WithFindEnrollments) => JSX.Element | null;
}

export class FindEnrollments extends React.PureComponent<Props> {
  render() {
    const { children, variables } = this.props;
    return (
      <Query<FindEnrollmentsQuery>
        query={findEnrollmentsQuery}
        variables={variables}
      >
        {({ data, loading, fetchMore, subscribeToMore  }) => {
          let enrollments: FindEnrollmentsQuery_findEnrollments[] = [];

          if (data && data.findEnrollments) {
            enrollments = data.findEnrollments;
          }

          let hasMoreEnrollments = enrollments.length % variables.limit === 0;
          
          if (enrollments.length <= variables.offset) {
            hasMoreEnrollments = false;
          }

          return children({
            hasMoreEnrollments,
            enrollments,
            loading,
            loadMore: () => {
              fetchMore({
                variables: {
                  ...variables,
                  offset: enrollments.length
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                  if (!fetchMoreResult) {
                    return prev;
                  }
                  return {
                    ...prev,
                    findEnrollments: [
                      ...prev.findEnrollments,
                      ...fetchMoreResult.findEnrollments
                    ]
                  };
                }
              });
            },
            subscribe: () =>
              subscribeToMore({
                document: newEnrollmentSubscription,
                updateQuery: (prev, { subscriptionData }) => {
                  if (!subscriptionData.data) {
                    return prev;
                  }

                  // update prev with new data
                  return {
                    ...prev,
                    findEnrollments: [
                      ...prev.findEnrollments,
                      (subscriptionData.data as any).newEnrollment
                    ]
                  };
                }
              })
          });
        }}
      </Query>
    );
  }
}
