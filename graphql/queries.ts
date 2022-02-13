/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCards = /* GraphQL */ `
  query GetCards($id: ID!) {
    getCards(id: $id) {
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
export const listCards = /* GraphQL */ `
  query ListCards(
    $filter: ModelCardsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
