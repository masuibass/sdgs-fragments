import React from "react";
import Image from "next/image";
import Draggable, { DraggableEvent, DraggableData } from "react-draggable";
import { sdg_icons } from "../lib/def";
import { useAppDispatch } from "../app/hooks";
import { move } from "../app/cardsSlice";

export type CardProps = {
  id: number;
  sdgs_goal_id: number;
  comment: string;
  author: string;
  position: { x: number; y: number };
};

const handleOnStop = (event: DraggableEvent, data: DraggableData) => {
  console.log(event, data);
};

const Card: React.FC<CardProps> = ({
  id,
  sdgs_goal_id,
  comment,
  author,
  position,
}) => {
  const dispatch = useAppDispatch();

  const handleOnStop = (event: DraggableEvent, data: DraggableData) => {
    dispatch(move({ position: { x: data.lastX, y: data.lastY }, id }));
  };

  return (
    <Draggable
      position={position}
      handle="img"
      onStop={(event, data) => handleOnStop(event, data)}
    >
      <div className="absolute flex flex-col items-center">
        <div
          className="relative flex flex-col items-center w-48 bg-white border-4 border-t-0"
          style={{ borderColor: `${sdg_icons[sdgs_goal_id].color}` }}
        >
          <div className="relative flex-grow-0 flex-shrink-0 w-full h-48">
            <Image
              src={sdg_icons[sdgs_goal_id].path}
              alt={sdg_icons[sdgs_goal_id].alt}
              layout="fill"
              objectFit="cover"
              draggable="false"
            />
          </div>
          <div className="px-2 py-1">
            <span className="line-clamp-10">{comment}</span>
          </div>
          <div className="p-1 text-xs">{author}</div>
        </div>
      </div>
    </Draggable>
  );
};

export default Card;
