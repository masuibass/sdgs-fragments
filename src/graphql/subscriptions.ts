/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCards = /* GraphQL */ `
  subscription OnCreateCards($filter: ModelSubscriptionCardsFilterInput) {
    onCreateCards(filter: $filter) {
      id
      author
      comment
      sdgs_goal_id
      position {
        x
        y
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCards = /* GraphQL */ `
  subscription OnUpdateCards($filter: ModelSubscriptionCardsFilterInput) {
    onUpdateCards(filter: $filter) {
      id
      author
      comment
      sdgs_goal_id
      position {
        x
        y
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCards = /* GraphQL */ `
  subscription OnDeleteCards($filter: ModelSubscriptionCardsFilterInput) {
    onDeleteCards(filter: $filter) {
      id
      author
      comment
      sdgs_goal_id
      position {
        x
        y
      }
      createdAt
      updatedAt
    }
  }
`;
