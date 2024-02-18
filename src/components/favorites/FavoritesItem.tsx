import { useCartState, useFavoriteState } from "@/lib/store/store";
import { FavoriteItemType } from "@/lib/store/types";
import Image, { StaticImageData } from "next/image";
import React from "react";
import {
  BsCartPlus,
  BsCartPlusFill,
  BsCartXFill,
  BsFillCartCheckFill
} from "react-icons/bs";
import { FaHeartBroken } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

import { TbShoppingCartX, TbShoppingCartUp } from "react-icons/tb";

const FavoritesItem = ({ id, title, price, img }: FavoriteItemType) => {
  const cartState = useCartState();

  const deleteItemFromFavorites = useFavoriteState(
    (s) => s.deleteItemFromFavorites
  );

  const isItemExist = () => {
    return cartState.items.findIndex((v) => v.id === id) === -1 ? false : true;
  };

  const handleClickCartBtn = () => {
    if (!isItemExist()) {
      cartState.addItemToCart({
        id: id,
        title: title,
        img: img,
        price: price,
        qty: 1
      });
    } else {
      cartState.removeItemFromCart(id);
    }
  };

  return (
    <div className="col-span-1 group/cont w-full relative cursor-pointer overflow-hidden ">
      <div className="absolute top-2 right-2 z-10 hidden group-hover/cont:block">
        <button
          onClick={() => deleteItemFromFavorites(id)}
          className="flex items-center text-white group rounded-full px-2 py-2 gap-2 bg-rose-7 xl:hover:bg-rose-8"
        >
          <div className="transition-transform lg:group-hover:scale-[1.2]">
            <FiHeart className="text-xl [fill-rule:nonzero] block  lg:group-hover:hidden fill-white transition-transform lg:group-hover:scale-[1.2]" />
            <FaHeartBroken className="text-xl hidden lg:group-hover:block " />
          </div>
        </button>
        <button
          onClick={handleClickCartBtn}
          className={`rounded-full my-2  group p-2 text-white bg-rose-9  transition-colors text-sm font-semibold group`}
        >
          {isItemExist() ? (
            <div className="transition-transform lg:group-hover:scale-[1.2]">
              <BsCartXFill className="text-xl hidden lg:group-hover:block" />
              <BsFillCartCheckFill className="text-xl block lg:group-hover:hidden" />
            </div>
          ) : (
            <div className="transition-transform lg:group-hover:scale-[1.2]">
              <BsCartPlus className="text-xl block lg:group-hover:hidden" />
              <BsCartPlusFill className="text-xl hidden lg:group-hover:block" />
            </div>
          )}
        </button>
      </div>
      <div className="w-full aspect-square relative xl:group-hover/cont:brightness-50 bg-opac-b-1 dark:bg-opac-w-1 rounded">
        <Image src={img} alt={title} fill />
      </div>
      <div className="absolute font-semibold text-gray-12 w-full bottom-0 py-2 left-2">
        <h4 className="text-sm">{title}</h4>
        <span>{price}₽</span>
      </div>
    </div>
  );
};

export default FavoritesItem;
