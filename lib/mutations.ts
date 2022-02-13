import { API, graphqlOperation } from "@aws-amplify/api";
import { CardProps } from "../components/DraggableCard";
import { createCards, deleteCards, updateCards } from "../graphql/mutations";

export const createCardAsyncFunc = async (card: CardProps) => {
  try {
    const result = await API.graphql(
      graphqlOperation(createCards, { input: card })
    );
    return result;
  } catch (err) {
    console.error(err);
    return {};
  }
};

export const deleteCardAsyncFunc = async (id: string) => {
  try {
    const result = await API.graphql(
      graphqlOperation(deleteCards, { input: { id } })
    );
    return result;
  } catch (err) {
    console.error(err);
    return {};
  }
};

export const updateCardAsyncFunc = async (card: CardProps) => {
  try {
    const result = await API.graphql(
      graphqlOperation(updateCards, { input: card })
    );
    return result;
  } catch (err) {
    console.error(err);
    return {};
  }
};
