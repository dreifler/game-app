/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFighter = /* GraphQL */ `
  query GetFighter($id: ID!) {
    getFighter(id: $id) {
      id
      username
      name
      createdAt
      updatedAt
    }
  }
`;
export const listFighters = /* GraphQL */ `
  query ListFighters(
    $filter: ModelFighterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFighters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
