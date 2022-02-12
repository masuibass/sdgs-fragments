import type { NextPage } from "next";
import Head from "next/head";
import { RootState } from "../app/store";
import { useAppSelector } from "../app/hooks";
import { AiOutlinePlus as Plus } from "react-icons/ai";

import DraggableCard from "../components/DraggableCard";
import AddForm from "../components/AddForm";
import { useState } from "react";

const Home: NextPage = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const cards = useAppSelector((state: RootState) => state.cards.list);

  return (
    <div
      id="screen"
      className="flex flex-col items-center justify-center w-screen h-screen"
    >
      <Head>
        <title>SDGs Tags</title>
        <meta name="description" content="Comment and Post it about SDGs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {cards.map((card) => (
        <DraggableCard {...card} key={card.id} />
      ))}

      <AddForm visible={visible} setVisible={setVisible} />

      {/* Plus Button */}
      <button
        onClick={() => setVisible(!visible)}
        className="absolute flex items-center justify-center p-4 bg-white border rounded-full shadow-xl bottom-8 right-8"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Home;
