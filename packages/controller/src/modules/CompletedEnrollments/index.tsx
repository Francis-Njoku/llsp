// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { newEnrollmentSubscription } from "../MyEnrollments";
import { Query } from "react-apollo";

import {
  CompletedEnrollmentsQuery,
  CompletedEnrollmentsQueryVariables,
  CompletedEnrollmentsQuery_completedEnrollments
} from "../../schemaTypes";

export const completedEnrollmentsQuery = gql`
  query CompletedEnrollmentsQuery(
    $offset: Int!
    $limit: Int!
  ){
    completedEnrollments(
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

newEnrollmentSubscription;

export interface WithCompletedEnrollments {
  enrollments: CompletedEnrollmentsQuery_completedEnrollments[];
  loading: boolean;
  loadMore: () => void;
  hasMoreEnrollments: boolean;
  subscribe: () => () => void;
}

interface Props {
  variables: CompletedEnrollmentsQueryVariables;
  children: (data: WithCompletedEnrollments) => JSX.Element | null;
}

export class CompletedEnrollments extends React.PureComponent<Props> {
  render() {
    const { children, variables } = this.props;
    return (
      <Query<CompletedEnrollmentsQuery>
        query={completedEnrollmentsQuery}
        variables={variables}
      >
        {({ data, loading, fetchMore, subscribeToMore  }) => {
          let enrollments: CompletedEnrollmentsQuery_completedEnrollments[] = [];

          if (data && data.completedEnrollments) {
            enrollments = data.completedEnrollments;
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
                    completedEnrollments: [
                      ...prev.completedEnrollments,
                      ...fetchMoreResult.completedEnrollments
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
                    completedEnrollments: [
                      ...prev.completedEnrollments,
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
