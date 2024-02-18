import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";

import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft
} from "react-icons/md";

import { FaCheck, FaMinus, FaRegStar } from "react-icons/fa6";

import { FaStarHalfAlt } from "react-icons/fa";

import img from "/public/protein_2.png";

import { FaStar } from "react-icons/fa";
import { useComparisonState } from "@/lib/store/store";
import ComparingItemsSkeleton from "./ComparingItemsSkeleton";
import Link from "next/link";

interface IComparingItems {
  chosenCategory: string;
}

type ProductItemPreviewType = {
  id: number;
  img: string;
  title: string;
  price: number;
  in_stock: number;
  weight: number;
  category: string;
  brand: string;
  made_in: string;
  amount_of_portion: number;
  release_form: string;
  avg: number;
  count: number;
};

const ComparingItems = ({ chosenCategory }: IComparingItems) => {
  const [currentPos, setCurrentPos] = useState(0);
  const ref = useRef<HTMLDivElement>();
  const comparisonState = useComparisonState();
  const [isLoading, setIsLoading] = useState(false);

  const [compareItems, setCompareItems] = useState<ProductItemPreviewType[]>(
    []
  );

  useEffect(() => {
    const handler = async () => {
      if (comparisonState.items.length < 1) return;
      try {
        setIsLoading(true);
        const res = await fetch(
          `${window.location.origin}/api/comparing-products?category=${chosenCategory}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(comparisonState.items.map((v) => v.id))
          }
        );

        const data = await res.json();

        setCompareItems(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    handler();
  }, [chosenCategory]);

  const moveRight = () => {
    if (ref.current) {
      const maxVal = ref.current.scrollWidth - ref.current.offsetWidth;

      setCurrentPos((p) =>
        Math.min(p + (ref.current?.offsetWidth || 200) / 2, maxVal)
      );
    }
  };
  const moveLeft = () => {
    if (ref.current) {
      setCurrentPos((p) =>
        Math.max(0, p - (ref.current?.offsetWidth || 200) / 2)
      );
    }
  };

  const handleDeleteItem = (id: number) => {
    setCompareItems((v) => v.filter((v) => v.id !== id));

    comparisonState.deleteItemFromComparison(id);
  };

  return (
    <div className=" h-fit py-12  flex">
      <div className="min-w-[33%] relative z-10  lg:min-w-[15%] h-full  text-center flex flex-col items-center">
        <div className="min-h-[60px] ">
          {comparisonState.items.length > 0 && (
            <>
              <h2 className="text-base lg:text-3xl font-extrabold text-gray-4 dark:text-gray-12">
                {comparisonState.items.length}
              </h2>
              <h3 className="text-xs lg:text-base text-gray-6 dark:text-gray-9">
                Продукты для сравнения
              </h3>
            </>
          )}
        </div>
        <div className="w-full  min-h-[250px] lg:min-h-[350px] flex items-center justify-center">
          <div className="w-24 md:w-32 rounded-full flex items-center text-gray-2 dark:text-gray-14 text-xl border border-opac-b-2 dark:border-opac-w-2 h-8 md:h-10">
            <button
              onClick={moveLeft}
              className="h-full border-r border-opac-b-2 dark:border-opac-w-2 w-1/2 flex items-center justify-center "
            >
              <MdOutlineKeyboardArrowLeft />
            </button>
            <button
              onClick={moveRight}
              className="h-full w-1/2 flex items-center justify-center "
            >
              <MdOutlineKeyboardArrowRight />
            </button>
          </div>
        </div>
        <ul className="mt-8">
          <li className="text-xs lg:text-sm mb-12 text-gray-8 font-semibold h-8 flex items-center justify-center  dark:text-gray-7"></li>
          <li className="text-xs lg:text-sm text-gray-8 font-semibold h-8 flex items-center justify-center  dark:text-gray-7">
            ЦЕНА
          </li>
          <li className="text-xs lg:text-sm my-12 text-gray-8 font-semibold h-8 flex items-center justify-center  dark:text-gray-7">
            БРЕНД
          </li>
          <li className="text-xs lg:text-sm  text-gray-8 font-semibold h-8 flex items-center justify-center  dark:text-gray-7">
            Страна производитель
          </li>
          <li className="text-xs lg:text-sm my-12 text-gray-8 font-semibold h-8 flex items-center justify-center  dark:text-gray-7">
            Есть в наличии
          </li>
          <li className="text-xs lg:text-sm  text-gray-8 font-semibold h-8 flex items-center justify-center  dark:text-gray-7">
            Вес
          </li>
          <li className="text-xs lg:text-sm my-12 text-gray-8 font-semibold h-8 flex items-center justify-center  dark:text-gray-7">
            Количество порций
          </li>
          <li className="text-xs lg:text-sm  text-gray-8 font-semibold h-8 flex items-center justify-center  dark:text-gray-7">
            Формы выпуска
          </li>
          <li className="text-xs lg:text-sm my-12  text-gray-8 font-semibold h-8 flex items-center justify-center  dark:text-gray-7">
            Бесплатная доставка
          </li>
        </ul>
      </div>
      <div className="min-w-[67%] lg:w-[85%] h-full  overflow-hidden">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          style={{ transform: `translateX(-${currentPos}px)` }}
          className="flex w-full transition-transform   h-full"
        >
          {isLoading ? (
            <ComparingItemsSkeleton />
          ) : (
            <>
              {comparisonState.items.length > 0 ? (
                <>
                  {compareItems.map((v) => (
                    <div
                      key={v.id}
                      className="min-w-[50%] max-w-[50%]  lg:min-w-[20%] lg:max-w-[20%] h-full text-center flex flex-col items-center"
                    >
                      <div className="h-[60px] w-3/4 ">
                        <h3 className="text-black    line-clamp-2 dark:text-white text-sm lg:text-xl font-bold">
                          {v.title}
                        </h3>
                      </div>
                      <div className="w-full h-[250px]  lg:min-h-[350px] gap-2 flex flex-col items-center justify-center">
                        <Link
                          href={`products/${v.id}`}
                          className="h-1/2 group  w-full relative"
                        >
                          <Image
                            src={v.img}
                            alt={v.title}
                            fill
                            className=" object-contain lg:group-hover:scale-110 transition-transform will-change-transform"
                          />
                        </Link>
                        <div className="flex flex-col items-center gap-2 ">
                          <div className="flex gap-1 text-xs lg:text-base items-center text-black dark:text-[#e0f44a]">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <div>
                                {v.avg - i >= 1 ? (
                                  <FaStar />
                                ) : v.avg - i <= 1 && v.avg - i > 0 ? (
                                  <FaStarHalfAlt />
                                ) : (
                                  <FaRegStar />
                                )}
                              </div>
                            ))}

                            {v.avg > 0 && (
                              <span className="text-black dark:text-white font-medium italic">
                                {v.avg}
                              </span>
                            )}
                          </div>
                          <span className="text-xs md:text-sm text-gray-6 dark:text-gray-9">
                            Отзывы: {v.count}
                          </span>
                        </div>
                      </div>
                      <ul className="mt-8">
                        <li className="  rounded mb-12   font-semibold h-8 flex items-center justify-center ">
                          <button
                            onClick={() => handleDeleteItem(v.id)}
                            className="bg-opac-b-2 text-gray-5 dark:text-gray-10 px-2 py-1 text-xs lg:text-xs rounded  dark:bg-opac-w-2"
                          >
                            Удалить
                          </button>
                        </li>
                        <li className="text-xs lg:text-sm text-gray-1 font-semibold h-8 flex items-center justify-center dark:text-gray-15">
                          {v.price}₽
                        </li>
                        <li className="text-xs lg:text-sm my-12 text-gray-1 font-semibold h-8 flex items-center justify-center dark:text-gray-15">
                          {v.brand}
                        </li>
                        <li className="text-xs lg:text-sm  text-gray-1 font-semibold h-8 flex items-center justify-center dark:text-gray-15">
                          {v.made_in}
                        </li>
                        <li className="text-xl text-black my-12 dark:text-[#e0f44a]  font-semibold h-8 flex items-center justify-center ">
                          <FaCheck />
                        </li>
                        <li className="text-xs lg:text-sm  text-gray-1 font-semibold h-8 flex items-center justify-center dark:text-gray-15">
                          {v.weight}г
                        </li>
                        <li className="text-xs lg:text-sm my-12 text-gray-1 font-semibold h-8 flex items-center justify-center dark:text-gray-15">
                          {v.amount_of_portion}
                        </li>
                        <li className="text-xs lg:text-sm  text-gray-1 font-semibold h-8 flex items-center justify-center dark:text-gray-15">
                          {v.release_form}
                        </li>
                        <li className="text-xl text-gray-1 my-12 dark:text-gray-15 font-semibold h-8 flex items-center justify-center ">
                          <FaMinus />
                        </li>
                      </ul>
                    </div>
                  ))}
                </>
              ) : (
                <div className="flex w-full text-xl flex-col text-gray-4 dark:text-gray-12 items-center">
                  У вас нет товаров для сравнения
                  <Link
                    href="/products"
                    className="text-sm px-2 py-1 rounded bg-opac-b-1 dark:bg-opac-w-1 mt-2"
                  >
                    Добавить
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComparingItems;
