import {
  useCartState,
  useComparisonState,
  useFavoriteState
} from "@/lib/store/store";
import React, { useState } from "react";
import { FaHeartBroken, FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";

interface IProductDescription {
  description: string;
  title: string;
  price: number;
  id: number;
  img: string;
  category: string;
  avgrating: number;
}

const ProductDescription = ({
  description,
  title,
  price,
  id,
  img,
  category,
  avgrating
}: IProductDescription) => {
  const [itemQty, setItemQty] = useState(1);
  const cartState = useCartState();
  const favoriteState = useFavoriteState();
  const comparisonState = useComparisonState();

  const handleClickCartBtn = () => {
    if (cartState.items.findIndex((v) => v.id === id) === -1) {
      cartState.addItemToCart({
        id,
        title,
        price,
        img,
        qty: itemQty
      });
    } else {
      cartState.removeItemFromCart(id);
    }
  };

  const handleClickFavoriteBtn = () => {
    if (favoriteState.items.findIndex((v) => v.id === id) === -1) {
      favoriteState.addItemToFavorites({
        id,
        title,
        price,
        img
      });
    } else {
      favoriteState.deleteItemFromFavorites(id);
    }
  };

  const handleClickCompareBtn = () => {
    if (comparisonState.items.findIndex((v) => v.id === id) === -1) {
      comparisonState.addItemToComparison({ id: id, category: category });
    } else {
      comparisonState.deleteItemFromComparison(id);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-2 dark:text-gray-14">
        {title}
      </h1>
      <div className="flex mt-4 gap-8 items-center">
        <span className="text-3xl font-extrabold text-gray-2 dark:text-gray-14">
          {price} ₽
        </span>
        <div className="flex gap-1 text-xs lg:text-base items-center text-black dark:text-[#e0f44a]">
          {Array.from({ length: 5 }).map((_, i) => (
            <div>
              {avgrating - i >= 1 ? (
                <FaStar />
              ) : avgrating - i <= 1 && avgrating - i > 0 ? (
                <FaStarHalfAlt />
              ) : (
                <FaRegStar />
              )}
            </div>
          ))}

          {avgrating > 0 && (
            <span className="text-black dark:text-white font-medium italic">
              {avgrating}
            </span>
          )}
        </div>
      </div>
      <div className="">
        <div className="flex items-center gap-4 mt-4 flex-wrap">
          <div className="flex bg-white dark:bg-gray-2 rounded border border-opac-b-3 dark:border-opac-w-3 items-center h-10 w-fit">
            <button
              onClick={() => setItemQty((prev) => Math.max(1, prev - 1))}
              className="text-sm font-bold h-full text-gray-4  dark:text-gray-12 lg:hover:bg-rose-6 rounded-l hover:text-white px-4"
            >
              -
            </button>
            <span className="font-bold h-full w-14 flex items-center border-x border-opac-b-2 dark:border-opac-w-2 justify-center  text-gray-4 dark:text-gray-12 px-4">
              {itemQty}
            </span>
            <button
              onClick={() => setItemQty((prev) => prev + 1)}
              className="text-sm h-full font-bold text-gray-4 dark:text-gray-12 lg:hover:bg-rose-6 rounded-r hover:text-white px-4"
            >
              +
            </button>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleClickCartBtn}
              className="px-3 py-1.5 rounded text-xs xl:text-sm font-medium text-white bg-[#be123c]"
            >
              {cartState.items.findIndex((v) => v.id === id) === -1
                ? "В корзину"
                : "Удалить из корзины"}
            </button>
            <button
              onClick={handleClickCompareBtn}
              className={`rounded group px-3 py-1.5 text-black flex items-center gap-2 dark:text-white bg-opac-b-1 dark:bg-opac-w-1  transition-colors text-xs xl:text-sm font-semibold`}
            >
              {comparisonState.items.findIndex((v) => v.id === id) === -1
                ? "Добавить в сравнение"
                : "Удалить из сравнения"}
            </button>
            <button
              onClick={handleClickFavoriteBtn}
              className={`rounded group px-3 py-1.5 text-black flex items-center gap-2 dark:text-white bg-opac-b-1 dark:bg-opac-w-1  transition-colors text-xs xl:text-sm font-semibold`}
            >
              {favoriteState.items.findIndex((v) => v.id === id) === -1 ? (
                <>
                  Добавить в избранное
                  <FiHeart className="text-xl lg:group-hover:[fill-rule:nonzero] lg:group-hover:[fill:black] dark:lg:group-hover:[fill:white] transition-transform lg:group-hover:scale-[1.2]" />
                </>
              ) : (
                <>
                  Удалить из избранного
                  <div className="transition-transform lg:group-hover:scale-[1.2]">
                    <FiHeart className="text-xl [fill-rule:nonzero] block  lg:group-hover:hidden fill-black dark:fill-white transition-transform lg:group-hover:scale-[1.2]" />
                    <FaHeartBroken className="text-xl hidden lg:group-hover:block " />
                  </div>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <pre className=" whitespace-pre-wrap text-gray-4 py-6 dark:text-gray-12">
        {description}
      </pre>
    </div>
  );
};

export default ProductDescription;
