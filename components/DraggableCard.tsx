import React, { useState } from "react";
import Draggable, { DraggableEvent, DraggableData } from "react-draggable";
import { AiOutlineDelete as Remove } from "react-icons/ai";

import { useAppDispatch } from "../app/hooks";
import { drag, remove } from "../app/cardsSlice";
import Card, { CardEssentials } from "./Card";
import { sdg_icons } from "../lib/def";
import { deleteCardAsyncFunc, updateCardAsyncFunc } from "../lib/mutations";

export type CardProps = {
  id: string;
  position: { x: number; y: number };
} & CardEssentials;

const DraggableCard: React.FC<CardProps> = ({
  id,
  position,
  sdgs_goal_id,
  comment,
  author,
}) => {
  const [isDragged, setDragged] = useState(false);

  const dispatch = useAppDispatch();

  const handleOnStop = (event: DraggableEvent, data: DraggableData) => {
    setDragged(false);
    dispatch(drag({ position: { x: data.lastX, y: data.lastY }, id }));
    updateCardAsyncFunc({
      id,
      sdgs_goal_id,
      comment,
      author,
      position: { x: data.lastX, y: data.lastY },
    });
  };

  return (
    <Draggable
      position={position}
      handle="img"
      onStart={() => setDragged(true)}
      onStop={(event, data) => handleOnStop(event, data)}
    >
      <div
        className="absolute transition-transform duration-75 animate-spawn"
        style={{
          transitionDuration: isDragged ? "0ms" : "400ms",
          transitionTimingFunction: isDragged ? "unset" : "ease-in-out",
        }}
      >
        <div className="relative group">
          <Card {...{ sdgs_goal_id, comment, author }} />

          {/* Remove Button */}
          <button
            onClick={async () => {
              const result = await deleteCardAsyncFunc(id);
            }}
            className="absolute p-2 transition-opacity duration-200 bg-white border rounded-full shadow-lg opacity-0 -top-4 -right-4 group-hover:opacity-95"
          >
            <Remove className="w-4 h-4" />
          </button>

          {/* Expose Animation */}
          <div
            className="absolute top-0 w-full h-full -z-10 animate-expose"
            style={{ background: `${sdg_icons[sdgs_goal_id].color}` }}
          />
        </div>
      </div>
    </Draggable>
  );
};

export default DraggableCard;
