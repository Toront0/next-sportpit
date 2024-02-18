"use client";

import Header from "@/components/Header/Header";

import Link from "next/link";
import React from "react";
import { HiArrowSmLeft } from "react-icons/hi";

import FavoritesItem from "@/components/favorites/FavoritesItem";
import { useFavoriteState } from "@/lib/store/store";

import { BsFillArrowThroughHeartFill } from "react-icons/bs";

const Favorites = () => {
  const favoriteItems = useFavoriteState((s) => s.items);

  return (
    <div className="w-full h-full">
      <Header />
      <div className="w-full h-[calc(100%-48px)]">
        {favoriteItems.length > 0 ? (
          <div className="max-w-[2000px] p-4  mx-auto h-full flex flex-col">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-extrabold text-gray-4 dark:text-gray-12">
                Избранное
              </h2>
              <Link
                href="/products"
                className="text-sm text-gray-4 group dark:text-gray-12 flex items-center gap-2 px-4 py-1.5 rounded border border-opac-b-2 dark:border-opac-w-2"
              >
                <HiArrowSmLeft className="text-xl group-hover:-translate-x-1 transition-transform" />
                Назад к покупкам
              </Link>
            </div>
            <section className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
              {favoriteItems.map((v) => (
                <FavoritesItem
                  key={v.id}
                  title={v.title}
                  img={v.img}
                  price={v.price}
                  id={v.id}
                />
              ))}
            </section>
          </div>
        ) : (
          <div className="w-full  h-full flex flex-col text-gray-7 dark:text-gray-8 items-center justify-center">
            <BsFillArrowThroughHeartFill className="text-5xl" />
            <span className="text-sm inline-block mt-3 ">
              Ваш список избранных товаров пуст.
            </span>
            <Link
              href="/products"
              className="text-sm px-3  py-1 mt-2 rounded bg-opac-b-2 dark:bg-opac-w-2 text-gray-4 dark:text-gray-12"
            >
              Добавить
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
