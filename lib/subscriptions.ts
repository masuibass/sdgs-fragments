import {
  onCreateCards,
  onUpdateCards,
  onDeleteCards,
} from "../src/graphql/subscriptions";
import { API, graphqlOperation, GraphQLResult } from "@aws-amplify/api";
import {
  OnCreateCardsSubscription,
  OnUpdateCardsSubscription,
  OnDeleteCardsSubscription,
} from "../lib/api";
import { Observable } from "./../node_modules/zen-observable-ts";
import { AWSAppSyncRealTimeProvider } from "@aws-amplify/pubsub";
import { add, update, remove } from "../app/cardsSlice";
import { CardProps } from "../components/DraggableCard";

import { Dispatch, AnyAction } from "@reduxjs/toolkit";

export const subscribeOnCreate = (dispatch: Dispatch<AnyAction>) => {
  const onCreateSubscription = (
    API.graphql(graphqlOperation(onCreateCards)) as Observable<{
      provider: AWSAppSyncRealTimeProvider;
      value: GraphQLResult<OnCreateCardsSubscription>;
    }>
  ).subscribe({
    next: ({ value }) => {
      const card = value.data?.onCreateCards;
      dispatch(
        add({
          id: card?.id,
          sdgs_goal_id: card?.sdgs_goal_id,
          comment: card?.comment,
          author: card?.author,
          position: card?.position,
        } as CardProps)
      );
    },
  });
  return onCreateSubscription;
};

export const subscribeOnUpdate = (dispatch: Dispatch<AnyAction>) => {
  const onUpdateSubscription = (
    API.graphql(graphqlOperation(onUpdateCards)) as Observable<{
      provider: AWSAppSyncRealTimeProvider;
      value: GraphQLResult<OnUpdateCardsSubscription>;
    }>
  ).subscribe({
    next: ({ value }) => {
      const card = value.data?.onUpdateCards;
      dispatch(
        update({
          id: card?.id,
          sdgs_goal_id: card?.sdgs_goal_id,
          comment: card?.comment,
          author: card?.author,
          position: card?.position,
        } as CardProps)
      );
    },
  });
  return onUpdateSubscription;
};

export const subscribeOnDelete = (dispatch: Dispatch<AnyAction>) => {
  const onDeleteSubscription = (
    API.graphql(graphqlOperation(onDeleteCards)) as Observable<{
      provider: AWSAppSyncRealTimeProvider;
      value: GraphQLResult<OnDeleteCardsSubscription>;
    }>
  ).subscribe({
    next: ({ value }) => {
      const card = value.data?.onDeleteCards;
      dispatch(
        remove({
          id: card?.id as string,
        })
      );
    },
  });
  return onDeleteSubscription;
};
