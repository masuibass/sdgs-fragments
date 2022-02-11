import React, { useState } from "react";
import { add, move } from "../app/cardsSlice";
import { useAppDispatch } from "../app/hooks";

const Form: React.FC = () => {
  const dispatch = useAppDispatch();

  const [inputs, setInputs] = useState({
    id: 4,
    sdgs_goal_id: 4,
    comment: "どやろか",
    author: "ますいむつお",
    position: { x: 500, y: 500 },
  });
  const [position, setPosition] = useState({
    x: 100,
    y: 100,
  });
  return (
    <div>
      <div>
        <input className="border" value={inputs.sdgs_goal_id} />
        <input className="border" value={inputs.comment} />
        <input className="border" value={inputs.author} />
        <input className="border" value={inputs.position.x} />
        <input className="border" value={inputs.position.y} />
        <button className="border" onClick={() => dispatch(add(inputs))}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Form;
