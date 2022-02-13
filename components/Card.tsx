import React from "react";
import Image from "next/image";

import { sdg_icons } from "../lib/def";

export type CardEssentials = {
  sdgs_goal_id: number;
  comment: string;
  author: string;
};

const Card: React.FC<CardEssentials> = ({ sdgs_goal_id, comment, author }) => {
  return (
    <div
      className="relative flex flex-col items-center bg-white border-4 shadow-xl w-36"
      // Border Color
      style={{ borderColor: `${sdg_icons[sdgs_goal_id].color}` }}
    >
      {/* Image */}
      <div
        className="relative flex-grow-0 flex-shrink-0 w-full h-36"
        style={{ background: `${sdg_icons[sdgs_goal_id].color}` }}
      >
        <Image
          src={sdg_icons[sdgs_goal_id].path}
          alt={sdg_icons[sdgs_goal_id].alt}
          layout="fill"
          objectFit="cover"
          draggable="false"
          priority={true}
        />
      </div>

      {/* Comment */}
      <div className="px-2 py-1">
        <span className="text-sm line-clamp-10">{comment}</span>
      </div>

      {/* Author */}
      <div className="p-1">
        <span className="text-xs text-gray-400">{author}</span>
      </div>
    </div>
  );
};

export default Card;
