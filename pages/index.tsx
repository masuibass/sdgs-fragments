import type { NextPage } from "next";
import Head from "next/head";
import { RootState } from "../app/store";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { AiOutlinePlus as PlusIcon } from "react-icons/ai";

import DraggableCard, { CardProps } from "../components/DraggableCard";
import AddForm from "../components/AddForm";
import { useState, useEffect } from "react";
import { init } from "../app/cardsSlice";
import { listCardsAsyncFunc } from "../lib/queries";
import {
  subscribeOnCreate,
  subscribeOnUpdate,
  subscribeOnDelete,
} from "../lib/subscriptions";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const list = await listCardsAsyncFunc();
      dispatch(init(list));
    })();
  }, []);

  useEffect(() => {
    const onCreateSubscription = subscribeOnCreate(dispatch);
    const onUpdateSubscription = subscribeOnUpdate(dispatch);
    const onDeleteSubscription = subscribeOnDelete(dispatch);

    return () => {
      onCreateSubscription.unsubscribe();
      onUpdateSubscription.unsubscribe();
      onDeleteSubscription.unsubscribe();
    };
  }, []);

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
        className="absolute flex items-center justify-center shadow-xl bottom-8 right-8 bg-[#009EDB] text-white font-bold py-2 px-4 rounded-full"
      >
        <span className="pr-3 text-sm">SDGsタグを追加</span>
        <div className="flex items-center justify-center p-2 text-gray-600 bg-white border rounded-full">
          <PlusIcon className="w-4 h-4" />
        </div>
      </button>
    </div>
  );
};

export default Home;
