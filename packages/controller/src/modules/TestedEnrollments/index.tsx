// @ts-ignore
import * as React from "react";
import gql from "graphql-tag";
import { newEnrollmentSubscription } from "../MyEnrollments";
import { Query } from "react-apollo";

import {
  TestedEnrollmentsQuery,
  TestedEnrollmentsQueryVariables,
  TestedEnrollmentsQuery_testedEnrollments
} from "../../schemaTypes";

export const testedEnrollmentsQuery = gql`
  query TestedEnrollmentsQuery(
    $offset: Int!
    $limit: Int!
  ){
    testedEnrollments(
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

newEnrollmentSubscription;

export interface WithTestedEnrollments {
  enrollments: TestedEnrollmentsQuery_testedEnrollments[];
  loading: boolean;
  loadMore: () => void;
  hasMoreEnrollments: boolean;
  subscribe: () => () => void;
}

interface Props {
  variables: TestedEnrollmentsQueryVariables;
  children: (data: WithTestedEnrollments) => JSX.Element | null;
}

export class TestedEnrollments extends React.PureComponent<Props> {
  render() {
    const { children, variables } = this.props;
    return (
      <Query<TestedEnrollmentsQuery>
        query={testedEnrollmentsQuery}
        variables={variables}
      >
        {({ data, loading, fetchMore, subscribeToMore  }) => {
          let enrollments: TestedEnrollmentsQuery_testedEnrollments[] = [];

          if (data && data.testedEnrollments) {
            enrollments = data.testedEnrollments;
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
                    testedEnrollments: [
                      ...prev.testedEnrollments,
                      ...fetchMoreResult.testedEnrollments
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
                    testedEnrollments: [
                      ...prev.testedEnrollments,
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
