"use client";

import Header from "@/components/Header/Header";
import CartItem from "@/components/UI/CartItem";
import Link from "next/link";
import React from "react";

import { HiArrowSmLeft } from "react-icons/hi";

import { useCartState } from "@/lib/store/store";

const page = () => {
  const cartState = useCartState();

  const totalPrice = cartState.items.reduce((acc, val) => {
    return acc + val.qty * val.price;
  }, 0);

  return (
    <div className="w-full h-full overflow-hidden  ">
      <Header />
      <div className="w-full h-[calc(100%-48px)]">
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
          {totalPrice > 0 && (
            <div className="w-full p-6 rounded-xl  flex justify-between bg-opac-b-2 dark:bg-opac-w-2">
              <div></div>
              <div className="w-1/2 xl:w-1/5">
                <ul>
                  <li className="flex items-center justify-between">
                    <span className="text-sm text-gray-6 dark:text-gray-9">
                      SUBTOTAL TTC
                    </span>
                    <span className="text-sm text-gray-3 font-medium dark:text-gray-13">
                      {totalPrice} ₽
                    </span>
                  </li>
                  <li className="flex items-center my-4 justify-between">
                    <span className="text-sm text-gray-6 dark:text-gray-9">
                      SHIPPING
                    </span>
                    <span className="text-sm text-gray-3 font-medium dark:text-gray-13">
                      Free
                    </span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-sm text-gray-6 dark:text-gray-9">
                      TOTAL
                    </span>
                    <span className="text-sm text-gray-3 font-medium dark:text-gray-13">
                      {totalPrice} ₽
                    </span>
                  </li>
                </ul>
                <button className="flex items-center w-full mt-2 justify-between py-2 px-3 rounded-lg bg-[#be123c] font-medium text-white">
                  Оплатить
                  <span>{totalPrice} ₽</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
