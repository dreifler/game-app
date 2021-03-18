/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFighter = /* GraphQL */ `
  mutation CreateFighter(
    $input: CreateFighterInput!
    $condition: ModelFighterConditionInput
  ) {
    createFighter(input: $input, condition: $condition) {
      id
      username
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateFighter = /* GraphQL */ `
  mutation UpdateFighter(
    $input: UpdateFighterInput!
    $condition: ModelFighterConditionInput
  ) {
    updateFighter(input: $input, condition: $condition) {
      id
      username
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteFighter = /* GraphQL */ `
  mutation DeleteFighter(
    $input: DeleteFighterInput!
    $condition: ModelFighterConditionInput
  ) {
    deleteFighter(input: $input, condition: $condition) {
      id
      username
      name
      createdAt
      updatedAt
    }
  }
`;
