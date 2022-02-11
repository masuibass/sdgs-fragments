import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { RootState } from "../app/store";
import { useAppSelector } from "../app/hooks";

import Card from "../components/Card";

const Home: NextPage = () => {
  const cards = useAppSelector((state: RootState) => state.cards.list);

  return (
    <div className="container">
      <Head>
        <title>SDGs Tags</title>
        <meta name="description" content="Comment and Post it about SDGs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {cards.map((card) => (
        <Card {...card} key={card.id} />
      ))}
    </div>
  );
};

export default Home;
