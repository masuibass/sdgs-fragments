import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardProps } from "../components/Card";

const defaultCardsList: CardProps[] = [
  {
    id: 1,
    sdgs_goal_id: 1,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    author: "author a",
    position: { x: 100, y: 200 },
  },
  {
    id: 2,
    sdgs_goal_id: 2,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    author: "author b",
    position: { x: 300, y: 100 },
  },
  {
    id: 3,
    sdgs_goal_id: 3,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    author: "author c",
    position: { x: 400, y: 300 },
  },
];

interface CardsState {
  list: CardProps[];
}

interface MoveCardPayload {
  position: { x: number; y: number };
  id: number;
}

const initialState: CardsState = {
  list: defaultCardsList,
};

export const counterSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardProps>) => {
      state.list.push(action.payload);
    },
    move: (state, action: PayloadAction<MoveCardPayload>) => {
      const { position, id } = action.payload;
      const targetCardIndex = state.list.findIndex((card) => card.id == id);
      state.list[targetCardIndex] = {
        ...state.list[targetCardIndex],
        position: {
          x: position.x,
          y: position.y,
        },
      };
    },
  },
});

export const { add, move } = counterSlice.actions;
export default counterSlice.reducer;
