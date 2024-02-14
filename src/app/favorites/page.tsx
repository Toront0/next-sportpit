"use client";

import Header from "@/components/Header/Header";

import Link from "next/link";
import React from "react";
import { HiArrowSmLeft } from "react-icons/hi";

import FavoritesItem from "@/components/favorites/FavoritesItem";
import { useFavoriteState } from "@/lib/store/store";

const Favorites = () => {
  const favoriteItems = useFavoriteState((s) => s.items);

  return (
    <div>
      <Header />
      <div className="w-full h-[calc(100%-48px)]">
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
      </div>
    </div>
  );
};

export default Favorites;
