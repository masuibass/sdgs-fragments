/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCardsInput = {
  id?: string | null,
  author: string,
  comment: string,
  sdgs_goal_id: number,
  position: PositionInput,
};

export type PositionInput = {
  x: number,
  y: number,
};

export type ModelCardsConditionInput = {
  author?: ModelStringInput | null,
  comment?: ModelStringInput | null,
  sdgs_goal_id?: ModelIntInput | null,
  and?: Array< ModelCardsConditionInput | null > | null,
  or?: Array< ModelCardsConditionInput | null > | null,
  not?: ModelCardsConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Cards = {
  __typename: "Cards",
  id: string,
  author: string,
  comment: string,
  sdgs_goal_id: number,
  position: Position,
  createdAt: string,
  updatedAt: string,
};

export type Position = {
  __typename: "Position",
  x: number,
  y: number,
};

export type UpdateCardsInput = {
  id: string,
  author?: string | null,
  comment?: string | null,
  sdgs_goal_id?: number | null,
  position?: PositionInput | null,
};

export type DeleteCardsInput = {
  id: string,
};

export type ModelCardsFilterInput = {
  id?: ModelIDInput | null,
  author?: ModelStringInput | null,
  comment?: ModelStringInput | null,
  sdgs_goal_id?: ModelIntInput | null,
  and?: Array< ModelCardsFilterInput | null > | null,
  or?: Array< ModelCardsFilterInput | null > | null,
  not?: ModelCardsFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelCardsConnection = {
  __typename: "ModelCardsConnection",
  items:  Array<Cards | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionCardsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  author?: ModelSubscriptionStringInput | null,
  comment?: ModelSubscriptionStringInput | null,
  sdgs_goal_id?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionCardsFilterInput | null > | null,
  or?: Array< ModelSubscriptionCardsFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateCardsMutationVariables = {
  input: CreateCardsInput,
  condition?: ModelCardsConditionInput | null,
};

export type CreateCardsMutation = {
  createCards?:  {
    __typename: "Cards",
    id: string,
    author: string,
    comment: string,
    sdgs_goal_id: number,
    position:  {
      __typename: "Position",
      x: number,
      y: number,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCardsMutationVariables = {
  input: UpdateCardsInput,
  condition?: ModelCardsConditionInput | null,
};

export type UpdateCardsMutation = {
  updateCards?:  {
    __typename: "Cards",
    id: string,
    author: string,
    comment: string,
    sdgs_goal_id: number,
    position:  {
      __typename: "Position",
      x: number,
      y: number,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCardsMutationVariables = {
  input: DeleteCardsInput,
  condition?: ModelCardsConditionInput | null,
};

export type DeleteCardsMutation = {
  deleteCards?:  {
    __typename: "Cards",
    id: string,
    author: string,
    comment: string,
    sdgs_goal_id: number,
    position:  {
      __typename: "Position",
      x: number,
      y: number,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCardsQueryVariables = {
  id: string,
};

export type GetCardsQuery = {
  getCards?:  {
    __typename: "Cards",
    id: string,
    author: string,
    comment: string,
    sdgs_goal_id: number,
    position:  {
      __typename: "Position",
      x: number,
      y: number,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCardsQueryVariables = {
  filter?: ModelCardsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCardsQuery = {
  listCards?:  {
    __typename: "ModelCardsConnection",
    items:  Array< {
      __typename: "Cards",
      id: string,
      author: string,
      comment: string,
      sdgs_goal_id: number,
      position:  {
        __typename: "Position",
        x: number,
        y: number,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCardsSubscriptionVariables = {
  filter?: ModelSubscriptionCardsFilterInput | null,
};

export type OnCreateCardsSubscription = {
  onCreateCards?:  {
    __typename: "Cards",
    id: string,
    author: string,
    comment: string,
    sdgs_goal_id: number,
    position:  {
      __typename: "Position",
      x: number,
      y: number,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCardsSubscriptionVariables = {
  filter?: ModelSubscriptionCardsFilterInput | null,
};

export type OnUpdateCardsSubscription = {
  onUpdateCards?:  {
    __typename: "Cards",
    id: string,
    author: string,
    comment: string,
    sdgs_goal_id: number,
    position:  {
      __typename: "Position",
      x: number,
      y: number,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCardsSubscriptionVariables = {
  filter?: ModelSubscriptionCardsFilterInput | null,
};

export type OnDeleteCardsSubscription = {
  onDeleteCards?:  {
    __typename: "Cards",
    id: string,
    author: string,
    comment: string,
    sdgs_goal_id: number,
    position:  {
      __typename: "Position",
      x: number,
      y: number,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
