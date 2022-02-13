import { listCards } from "../src/graphql/queries";
import { API, GraphQLResult, graphqlOperation } from "@aws-amplify/api";
import { ListCardsQuery } from "./api";
import { CardProps } from "../components/DraggableCard";

export const listCardsAsyncFunc = async () => {
  try {
    const result = (await API.graphql(
      graphqlOperation(listCards)
    )) as GraphQLResult<ListCardsQuery>;

    if (!result) throw new Error(`Result: ${typeof result}`);

    const cards = result.data?.listCards?.items.map((card) => ({
      id: card?.id,
      author: card?.author,
      comment: card?.comment,
      sdgs_goal_id: card?.sdgs_goal_id,
      position: { x: card?.position.x, y: card?.position.y },
    })) as CardProps[];

    return cards;
  } catch (err) {
    console.error(err);
    return [];
  }
};
