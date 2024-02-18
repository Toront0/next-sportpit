"use client";

import Header from "@/components/Header/Header";
import CartItem from "@/components/UI/CartItem";
import Link from "next/link";
import React from "react";

import { HiArrowSmLeft } from "react-icons/hi";

import { useCartState } from "@/lib/store/store";

import { GiShoppingCart } from "react-icons/gi";
import CartTotal from "@/components/cart/CartTotal";

const Cart = () => {
  const cartState = useCartState();

  return (
    <div className="w-full h-full overflow-hidden  ">
      <Header />
      <div className="w-full h-[calc(100%-48px)]">
        {cartState.items.length > 0 ? (
          <div className="max-w-[2000px] p-4  mx-auto h-full flex flex-col">
            <div className="">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-extrabold text-gray-4 dark:text-gray-12">
                  Корзина
                </h2>
                <Link
                  href="/products"
                  className="text-sm text-gray-4 group dark:text-gray-12 flex items-center gap-2 px-4 py-1.5 rounded border border-opac-b-2 dark:border-opac-w-2"
                >
                  <HiArrowSmLeft className="text-xl group-hover:-translate-x-1 transition-transform" />
                  Назад к покупкам
                </Link>
              </div>
              <div className="flex mt-4 border-b border-opac-b-1 dark:border-opac-w-1 py-4 ">
                <div className="w-3/5 xl:w-2/5 flex items-center text-sm text-gray-4 dark:text-gray-12">
                  НАЗВАНИЕ
                </div>
                <div className="w-1/5 justify-center hidden xl:flex items-center text-sm text-gray-4 dark:text-gray-12">
                  ЦЕНА
                </div>
                <div className="w-2/5 xl:w-1/5 justify-center flex items-center text-sm text-gray-4 dark:text-gray-12">
                  КОЛ-ВО
                </div>
                <div className="w-1/5  justify-center hidden xl:flex items-center text-sm text-gray-4 dark:text-gray-12">
                  ОБЩАЯ ЦЕНА
                </div>
              </div>
            </div>

            <main className=" h-full overflow-y-auto py-3 flex flex-col gap-3">
              {cartState.items.map((v) => (
                <CartItem
                  key={v.id}
                  title={v.title}
                  price={v.price}
                  qty={v.qty}
                  img={v.img}
                  id={v.id}
                />
              ))}
            </main>
            <CartTotal />
          </div>
        ) : (
          <div className="w-full  h-full flex flex-col text-gray-7 dark:text-gray-8 items-center justify-center">
            <GiShoppingCart className="text-5xl" />
            <span className=" inline-block mt-3 ">Ваша корзина пуста</span>
            <Link
              href="/products"
              className="text-sm px-3  py-1 mt-2 rounded bg-opac-b-2 dark:bg-opac-w-2 text-gray-4 dark:text-gray-12"
            >
              Наполнить
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
