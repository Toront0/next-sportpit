import { useCartState, useFavoriteState } from "@/lib/store/store";
import React, { useState } from "react";
import { FaHeartBroken } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";

interface IProductDescription {
  description: string;
  title: string;
  price: number;
  id: number;
  img: string;
}

const ProductDescription = ({
  description,
  title,
  price,
  id,
  img
}: IProductDescription) => {
  const [itemQty, setItemQty] = useState(1);
  const cartState = useCartState();
  const favoriteState = useFavoriteState();

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

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-2 dark:text-gray-14">
        {title}
      </h1>
      <div className="flex mt-4 gap-8 items-center">
        <span className="text-3xl font-extrabold text-gray-2 dark:text-gray-14">
          {price} ₽
        </span>
        <div className="flex text-lg text-gray-4 dark:text-[#e0f44a] items-center gap-1">
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <span className="font-bold dark:text-gray-12">4.6</span>
        </div>
      </div>
      <div className="">
        <div className="flex items-center gap-4 mt-4">
          <div className="flex bg-white dark:bg-gray-2 rounded border border-opac-b-3 dark:border-opac-w-3 items-center h-10 w-fit">
            <button
              onClick={() => setItemQty((prev) => Math.max(1, prev - 1))}
              className="text-sm font-bold h-full text-gray-4  dark:text-gray-12 hover:bg-rose-6 rounded-l hover:text-white px-4"
            >
              -
            </button>
            <span className="font-bold h-full w-14 flex items-center border-x border-opac-b-2 dark:border-opac-w-2 justify-center  text-gray-4 dark:text-gray-12 px-4">
              {itemQty}
            </span>
            <button
              onClick={() => setItemQty((prev) => prev + 1)}
              className="text-sm h-full font-bold text-gray-4 dark:text-gray-12 hover:bg-rose-6 rounded-r hover:text-white px-4"
            >
              +
            </button>
          </div>
          <button
            onClick={handleClickCartBtn}
            className="px-3 py-1.5 rounded text-xs xl:text-sm font-medium text-white bg-[#be123c]"
          >
            {cartState.items.findIndex((v) => v.id === id) === -1
              ? "В корзину"
              : "Удалить из корзины"}
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

            {/* <FiHeart className="text-xl lg:group-hover:[fill-rule:nonzero] lg:group-hover:[fill:black] dark:lg:group-hover:[fill:white] transition-transform lg:group-hover:scale-[1.2]" /> */}
          </button>
        </div>
      </div>
      {/* <div
        dangerouslySetInnerHTML={{ __html: JSON.stringify(description) }}
        className=" text-gray-4 mt-4 dark:text-gray-12"
      ></div> */}
      <pre className=" whitespace-pre-wrap text-gray-4 py-6 dark:text-gray-12">
        {description}
      </pre>
    </div>
  );
};

export default ProductDescription;
