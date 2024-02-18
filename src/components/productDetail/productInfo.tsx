"use client";

import React, { useState } from "react";

import { Prisma } from "@prisma/client";

import ProductDescription from "./ProductDescription";
import ProductsReviews from "./ProductsReviews/ProductsReviews";
import { IProductItem } from "../products/ProductItem";
import { ProductDetail } from "@/app/products/[slug]/page";

const ProductInfo = ({
  description,
  title,
  price,
  id,
  img,
  category,
  avgrating
}: ProductDetail) => {
  const [currentState, setCurrentState] = useState<
    "description" | "reviews" | "characteristics"
  >("description");

  return (
    <div className="w-full lg:w-1/2 flex flex-col bg-gray-15 dark:bg-gray-1">
      <div className=" flex items-center px-4 sticky xl:px-8 top-0 h-12  bg-gray-15 dark:bg-gray-2 border-b border-opac-b-2 dark:border-opac-w-2 gap-6">
        <button
          onClick={() => setCurrentState("description")}
          className={` ${
            currentState === "description"
              ? "text-gray-1  dark:text-gray-15"
              : "text-gray-7  dark:text-gray-8"
          } font-semibold`}
        >
          Описание
        </button>
        <button
          onClick={() => setCurrentState("reviews")}
          className={` ${
            currentState === "reviews"
              ? "text-gray-1  dark:text-gray-15"
              : "text-gray-7  dark:text-gray-8"
          } font-semibold`}
        >
          Отзывы
        </button>
      </div>
      <div className="w-full h-full px-4 xl:px-8 flex flex-col overflow-y-auto">
        {/* <button
            onClick={() => window.history.back()}
            className="text-sm text-gray-4 group dark:text-gray-12 flex items-center gap-2 px-4 py-1.5 rounded border border-opac-b-2 dark:border-opac-w-2"
          >
            <HiArrowSmallLeft className="text-xl group-hover:-translate-x-1 transition-transform" />
            Вернуться назад
          </button> */}

        <div className="my-4 h-full">
          {currentState === "description" ? (
            <ProductDescription
              description={description}
              title={title}
              price={price}
              id={id}
              img={img}
              category={category}
              avgrating={avgrating}
            />
          ) : currentState === "reviews" ? (
            <ProductsReviews productId={id} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
