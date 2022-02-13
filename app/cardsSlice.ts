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

const defaultCardsList: CardProps[] = [];

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
    drag: (state, action: PayloadAction<MoveCardPayload>) => {
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
    update: (state, action: PayloadAction<CardProps>) => {
      const targetCardIndex = state.list.findIndex(
        (card) => card.id == action.payload.id
      );
      state.list[targetCardIndex] = {
        ...state.list[targetCardIndex],
        ...action.payload,
      };
    },
    remove: (state, action: PayloadAction<RemoveCardPayload>) => {
      const targetCardIndex = state.list.findIndex(
        (card) => card.id == action.payload.id
      );
      state.list.splice(targetCardIndex, 1);
    },
    init: (state, action: PayloadAction<CardProps[]>) => {
      action.payload.length > 0 && (state.list = action.payload);
    },
  },
});

export const { add, drag, remove, init, update } = counterSlice.actions;
export default counterSlice.reducer;
