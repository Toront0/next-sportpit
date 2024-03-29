"use client";

import {
  useCartState,
  useComparisonState,
  useFavoriteState
} from "@/lib/store/store";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { FaStarHalfAlt, FaHeartBroken } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

import {
  BsFileEarmarkBarGraph,
  BsFileEarmarkBarGraphFill
} from "react-icons/bs";

import {
  BsCartPlus,
  BsCartPlusFill,
  BsCartXFill,
  BsFillCartDashFill,
  BsFillCartCheckFill
} from "react-icons/bs";

import { ProductItemPreviewType } from "@/app/products/page";

export interface IProductItem {
  id: number;
  img: string;
  title: string;
  price: number;
  avgRating: number;
}

const ProductItem = ({
  id,
  img,
  title,
  price,
  category,
  amount_of_portion,
  brand,
  in_stock,
  made_in,
  release_form,
  weight
}: ProductItemPreviewType) => {
  const cartState = useCartState();
  const favoriteState = useFavoriteState();
  const comparisonState = useComparisonState();

  const isItemFavorite = () => {
    return favoriteState.items.findIndex((v) => v.id === id) === -1
      ? false
      : true;
  };

  const isItemExist = () => {
    return cartState.items.findIndex((v) => v.id === id) === -1 ? false : true;
  };

  const isItemInComparison = () => {
    return comparisonState.items.findIndex((v) => v.id === id) === -1
      ? false
      : true;
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

  const handleClickFavoriteBtn = () => {
    if (isItemFavorite()) {
      favoriteState.deleteItemFromFavorites(id);
    } else {
      favoriteState.addItemToFavorites({
        id,
        title,
        img,
        price
      });
    }
  };

  const handleClickComparisonBtn = () => {
    if (isItemInComparison()) {
      comparisonState.deleteItemFromComparison(id);
    } else {
      comparisonState.addItemToComparison({
        id,
        category
      });
    }
  };

  return (
    <div className="group/cont  col-span-1  h-full ">
      <div className="rounded bg-opac-b-2  overflow-hidden relative dark:bg-opac-w-2 w-full aspect-square ">
        <Link
          href={`products/${id}`}
          className="w-full h-full group cursor-pointer"
        >
          <Image
            src={img}
            fill={true}
            alt="alt text"
            className="group-hover:scale-[1.03] transition-transform will-change-transform"
          />
        </Link>
        <div className="absolute top-2 right-2 hidden group-hover/cont:flex flex-col gap-2 ">
          <button
            onClick={handleClickFavoriteBtn}
            className={`rounded-full group p-2 text-white bg-rose-7 lg:hover:bg-rose-8  transition-colors text-sm font-semibold `}
          >
            {isItemFavorite() ? (
              <div className="transition-transform lg:group-hover:scale-[1.2]">
                <FiHeart className="text-xl [fill-rule:nonzero] block  lg:group-hover:hidden fill-white transition-transform lg:group-hover:scale-[1.2]" />
                <FaHeartBroken className="text-xl hidden lg:group-hover:block " />
              </div>
            ) : (
              <FiHeart className="text-xl lg:group-hover:[fill-rule:nonzero] lg:group-hover:[fill:white]  transition-transform lg:group-hover:scale-[1.2]" />
            )}
          </button>
          <button
            onClick={handleClickCartBtn}
            className={`rounded-full  group p-2 text-white bg-rose-9  transition-colors text-sm font-semibold group`}
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
          <button
            onClick={handleClickComparisonBtn}
            className={`rounded-full  group p-2 text-white bg-rose-9  transition-colors font-semibold group text-xl`}
          >
            {/* <IoGitCompareSharp /> */}
            {isItemInComparison() ? (
              <div className="transition-transform lg:group-hover:scale-[1.15]">
                <BsFileEarmarkBarGraph className="text-xl hidden lg:group-hover:block" />
                <BsFileEarmarkBarGraphFill className="text-xl block lg:group-hover:hidden" />
              </div>
            ) : (
              <div className="transition-transform lg:group-hover:scale-[1.15]">
                <BsFileEarmarkBarGraph className="text-xl block lg:group-hover:hidden" />
                <BsFileEarmarkBarGraphFill className="text-xl hidden lg:group-hover:block" />
              </div>
            )}
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-2 justify-between">
        <div>
          <div className="h-10">
            <Link
              href={`products/${id}`}
              className={`line-clamp-2 hover:underline text-sm text-gray-1 dark:text-gray-15`}
            >
              {title}
            </Link>
          </div>
          <div className="flex justify-between">
            <span className="text-xl font-semibold text-gray-2 dark:text-gray-14">
              {price} ₽
            </span>
            {/* <div className="text-sm text-gray-4 dark:text-gray-12 flex items-center gap-1">
              <FaStarHalfAlt className="text-lg dark:text-[#e0f44a]" />
              {avgRating}
            </div> */}
          </div>
        </div>
        <div className="mt-2">
          <button
            onClick={handleClickCartBtn}
            className="px-3 py-1 rounded text-sm font-medium text-white bg-[#be123c]"
          >
            {cartState.items.findIndex((v) => v.id === id) === -1
              ? "В корзину"
              : "Удалить из корзины"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
