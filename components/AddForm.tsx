import React, { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import { sdg_icons } from "../lib/def";
import { add } from "../app/cardsSlice";
import { useAppDispatch } from "../app/hooks";

import Card, { CardEssentials } from "./Card";
import {
  AiFillCaretLeft as LeftIcon,
  AiFillCaretRight as RightIcon,
} from "react-icons/ai";
import { createCardAsyncFunc } from "../lib/mutations";

type Props = {
  visible: boolean;
  setVisible: Function;
};

const AddForm: React.FC<Props> = ({ visible, setVisible }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<CardEssentials>({
    defaultValues: { sdgs_goal_id: 0, comment: "", author: "" },
  });
  const onSubmit = async (cardEssentials: CardEssentials) => {
    const card = {
      id: uuidv4(),
      position: {
        x: Math.floor(Math.random() * 1000 - 500),
        y: Math.floor(Math.random() * 700 - 350),
      },
      ...cardEssentials,
    };
    await createCardAsyncFunc(card);
    reset();
    setVisible(false);
  };

  return (
    <div
      className="absolute px-8 py-4 transition-opacity duration-200 bg-white border shadow-2xl rounded-xl"
      style={
        visible
          ? { opacity: 100, visibility: "visible" }
          : { opacity: 0, visibility: "hidden" }
      }
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center space-y-2"
      >
        <div className="flex items-center space-x-4">
          <div className="w-8">
            {watch("sdgs_goal_id") != 0 && (
              <button
                type="button"
                onClick={() => {
                  if (watch("sdgs_goal_id") == 0) return;
                  setValue("sdgs_goal_id", getValues("sdgs_goal_id") - 1);
                }}
              >
                <LeftIcon className="w-8 h-8 text-gray-600" />
              </button>
            )}
          </div>

          <Card
            sdgs_goal_id={watch("sdgs_goal_id") || 0}
            comment={watch("comment") || "コメントを入力"}
            author={watch("author") || "お名前"}
          />

          <div className="w-8">
            {watch("sdgs_goal_id") != sdg_icons.length - 1 && (
              <button
                type="button"
                onClick={() => {
                  if (watch("sdgs_goal_id") == sdg_icons.length - 1) return;
                  setValue("sdgs_goal_id", getValues("sdgs_goal_id") - 0 + 1);
                }}
              >
                <RightIcon className="w-8 h-8 text-gray-600" />
              </button>
            )}
          </div>
        </div>

        <div className="w-full">
          <label
            htmlFor="sdgs_goal"
            className="block m-0 text-xs text-gray-400"
          >
            SDGs目標
          </label>
          <select
            id="sdgs_goal"
            className="p-2 text-xs bg-white rounded-lg shadow-lg focus:outline-none focus:border-[#009EDB] border border-gray-300 w-full"
            {...register("sdgs_goal_id")}
          >
            {sdg_icons.map((icon, i) => (
              <option key={i} value={icon.id}>
                {icon.id} - {icon.alt}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full">
          <label htmlFor="comment" className="block m-0 text-xs text-gray-400">
            コメント
            {errors.comment && (
              <span className="ml-2 text-xs text-red-500">
                ※コメントを入力してください
              </span>
            )}
          </label>
          <textarea
            id="comment"
            className="w-full p-2 text-sm bg-white rounded-lg shadow-lg focus:outline-none focus:border-[#009EDB] border border-gray-300"
            wrap="soft"
            placeholder="コメントを入力"
            {...register("comment", { required: true })}
          />
        </div>

        <div className="w-full">
          <label htmlFor="name" className="block m-0 text-xs text-gray-400">
            お名前
            {errors.author && (
              <span className="ml-2 text-xs text-red-500">
                ※お名前を入力してください
              </span>
            )}
          </label>
          <input
            id="name"
            className="w-full p-2 text-xs bg-white rounded-lg shadow-lg focus:outline-none focus:border-[#009EDB] border border-gray-300"
            type="text"
            placeholder="お名前"
            {...register("author", { required: true })}
          />
        </div>

        <div className="pt-6">
          <input
            type="submit"
            className="px-4 cursor-pointer py-2 text-white bg-[#009EDB] font-bold text-sm rounded-full shadow-lg"
            value="タグを追加する"
          />

          <input
            type="button"
            onClick={() => {
              reset();
              setVisible(false);
            }}
            className="px-4 py-2 ml-2 text-sm border rounded-full shadow-lg cursor-pointer"
            value="キャンセル"
          />
        </div>
      </form>
    </div>
  );
};

export default AddForm;
