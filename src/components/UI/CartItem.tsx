import { ICartItem } from "@/lib/types/types";
import Image, { StaticImageData } from "next/image";
import React from "react";

import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

import TrashIcon from "./Icons/TrashIcon";
import { useCartState } from "@/lib/store/store";

const CartItem = ({ id, img, title, price, qty }: ICartItem) => {
  const cartState = useCartState();

  return (
    <div className="flex w-full relative ">
      <div className="flex w-3/5 xl:w-2/5 gap-2">
        <div className="h-20 aspect-square rounded relative bg-gray-12 dark:bg-gray-4">
          <Image src={img} alt={title} fill={true} />
        </div>
        <div>
          <h4 className=" text-gray-2 font-semibold dark:text-gray-14">
            {title}
          </h4>
        </div>
      </div>
      <div className="w-1/5 justify-center hidden xl:flex items-center font-semibold  text-gray-4 dark:text-gray-12">
        {price}₽
      </div>
      <div className="w-2/5 xl:w-1/5  justify-center flex gap-4 items-center font-semibold  text-gray-4 dark:text-gray-12">
        <button onClick={() => cartState.decreaseQty(id)} className="text-2xl">
          <RiArrowLeftSLine />
        </button>
        <div className="w-8 flex justify-center">{qty}</div>
        <button onClick={() => cartState.increaseQty(id)} className="text-2xl">
          <RiArrowRightSLine />
        </button>
      </div>
      <div className="w-1/5  justify-evenly hidden xl:flex items-center font-semibold  text-gray-4 dark:text-gray-12">
        <div></div>
        <span className="ml-6">{qty * price}₽</span>
        <button
          onClick={() => cartState.removeItemFromCart(id)}
          className="text-2xl group px-2 py-1 rounded hover:bg-opac-b-1 dark:hover:bg-opac-w-1 text-rose-6"
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
