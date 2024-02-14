"use client";

import Image, { StaticImageData } from "next/image";
import React, { useRef, useState } from "react";

import { HiMiniArrowSmallRight, HiMiniArrowSmallLeft } from "react-icons/hi2";

import { FaStarHalfAlt } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import Link from "next/link";

type SliderItem = {
  id: number;
  img: StaticImageData;
  title: string;
  price: number;
  avgRating: number;
};

interface ISlider {
  blockTitle: string;
  items: SliderItem[];
}

const Slider = ({ blockTitle, items }: ISlider) => {
  const [pos, setPos] = useState(0);
  const ref = useRef<HTMLDivElement>();

  const moveRight = () => {
    const moveness = (ref.current?.offsetWidth || 400) / 2;

    const contMaxVal =
      (ref.current?.scrollWidth || 0) - (ref.current?.offsetWidth || 0);

    setPos((prev) => Math.min(prev + moveness, contMaxVal));
  };

  const moveLeft = () => {
    const moveness = (ref.current?.offsetWidth || 400) / 2;

    setPos((prev) => Math.max(0, prev - moveness));
  };

  return (
    <section className="max-w-[1440px] my-12 xl:my-24 mx-auto px-4 overflow-hidden">
      <div className="flex items-center justify-between">
        <h3 className="text-xl text-gray-4 dark:text-gray-12 font-bold">
          {blockTitle}
        </h3>
        <div className="flex items-center gap-4">
          <button
            onClick={moveLeft}
            className="w-8 h-8 rounded-full active:scale-90 transition-transform text-gray-4 dark:text-gray-12 border-2 border-gray-2 dark:border-gray-14 flex items-center justify-center text-3xl"
          >
            <HiMiniArrowSmallLeft />
          </button>
          <button
            onClick={moveRight}
            className="w-8 h-8 rounded-full active:scale-90 transition-transform text-gray-4 dark:text-gray-12 border-2 border-gray-2 dark:border-gray-14 flex items-center justify-center text-3xl"
          >
            <HiMiniArrowSmallRight />
          </button>
        </div>
      </div>
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        style={{ transform: `translateX(-${pos}px)` }}
        className="flex flex-nowrap transition-transform duration-300 gap-4 mt-4"
      >
        {items.map((v) => (
          <div
            key={v.id}
            className="min-w-[calc(40%-12px)] xl:min-w-[calc(20%-12px)] group/cont"
          >
            <div className="w-full bg-opac-b-1 relative rounded dark:bg-opac-w-1 aspect-square">
              <Link href={`/products/${v.id}`}>
                <Image src={v.img} alt={v.title} />
              </Link>

              <div className="absolute top-2 z-10 right-2 hidden group-hover/cont:flex flex-col gap-2 ">
                <button
                  className={`rounded-full group p-2 text-black dark:text-white bg-opac-b-1 dark:bg-opac-w-1  transition-colors text-sm font-semibold`}
                >
                  <FiHeart className="text-xl lg:group-hover:[fill-rule:nonzero] lg:group-hover:[fill:black] dark:lg:group-hover:[fill:white] transition-transform lg:group-hover:scale-[1.2]" />
                </button>
                <button
                  className={`rounded-full  group p-2 text-black dark:text-white bg-opac-b-1 dark:bg-opac-w-1  transition-colors text-sm font-semibold`}
                >
                  <PiShoppingCartSimpleBold className="text-xl lg:group-hover:[fill-rule:nonzero] lg:group-hover:[fill:black] dark:lg:group-hover:[fill:white] transition-transform lg:group-hover:scale-[1.2]" />
                </button>
              </div>
            </div>
            <div className="mt-1">
              <div className="flex items-center gap-4 justify-between">
                <Link
                  href={`/products/${v.id}`}
                  className="text-sm truncate hover:underline text-gray-2 font-medium dark:text-gray-14"
                >
                  {v.title}
                </Link>
                <div className="flex items-center gap-1 dark:text-[#e0f44a]">
                  <FaStarHalfAlt />
                  4.5
                </div>
              </div>
              <span className="text-gray-2 font-semibold dark:text-gray-14">
                {v.price}₽
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
