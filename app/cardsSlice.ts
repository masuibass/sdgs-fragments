import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardProps } from "../components/DraggableCard";

interface CardsState {
  list: CardProps[];
}

interface MoveCardPayload {
  position: { x: number; y: number };
  id: string;
}

interface RemoveCardPayload {
  id: string;
}

const defaultCardsList: CardProps[] = [
  {
    id: "1e71cd67-6f7b-4ee2-9a9e-912cacf46e95",
    sdgs_goal_id: 1,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    author: "author a",
    position: { x: 0, y: 0 },
  },
  {
    id: "e4825c89-ab6c-4159-add1-dca3af0d8dad",
    sdgs_goal_id: 2,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    author: "author b",
    position: { x: 200, y: 0 },
  },
  {
    id: "60ec2636-d226-470a-9f3b-a951d43428d8",
    sdgs_goal_id: 3,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    author: "author c",
    position: { x: -200, y: 0 },
  },
];

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
    remove: (state, action: PayloadAction<RemoveCardPayload>) => {
      const { id } = action.payload;
      const targetCardIndex = state.list.findIndex((card) => card.id == id);
      state.list.splice(targetCardIndex, 1);
    },
  },
});

export const { add, move, remove } = counterSlice.actions;
export default counterSlice.reducer;
