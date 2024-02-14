import Image from "next/image";
import React from "react";

import img from "@/assets/workWith/cognizant-svgrepo-com.svg";
import img2 from "@/assets/workWith/infosys.svg";
import img3 from "@/assets/workWith/walmart.svg";
import img4 from "@/assets/workWith/salesforce.svg";
import img5 from "@/assets/workWith/wanda-group.svg";
import img6 from "@/assets/workWith/bbva-2.svg";
import img7 from "@/assets/workWith/daikin.svg";
import img8 from "@/assets/workWith/chicco.svg";
import img9 from "@/assets/workWith/naval.svg";

const WorksWith = () => {
  return (
    <section className="max-w-[1440px] h-48  my-12  mx-auto px-4 ">
      <h3 className="text-lg text-gray-4 dark:text-gray-12 font-medium text-center">
        Бренды с которыми мы работаем
      </h3>

      <div className="w-full h-full relative overflow-hidden">
        <div className="absolute top-0 left-0 h-full  bg-gradient-to-r from-gray-14 dark:from-gray-2   to-transparent z-10 w-[10%]"></div>
        <div className="absolute top-0 right-0 h-full  bg-gradient-to-l from-gray-14 dark:from-gray-2   to-transparent z-10 w-[10%]"></div>
        <ul className="items-center  flex h-full  w-full gap-24 flex-nowrap  infinite-scroll">
          <li className="w-28 xl:w-40">
            <Image src={img} alt="123" />
          </li>
          <li className="w-28 xl:w-40">
            <Image src={img2} alt="123" />
          </li>
          <li className="w-28 xl:w-40">
            <Image src={img3} alt="123" />
          </li>
          <li className="w-28 xl:w-40">
            <Image src={img4} alt="123" />
          </li>
          <li className="w-28 xl:w-40">
            <Image src={img5} alt="123" />
          </li>
          <li className="w-28 xl:w-40">
            <Image src={img6} alt="123" />
          </li>
          <li className="w-28 xl:w-40">
            <Image src={img7} alt="123" />
          </li>
          <li className="w-28 xl:w-40">
            <Image src={img8} alt="123" />
          </li>
          <li className="w-28 xl:w-40">
            <Image src={img9} alt="123" />
          </li>
          <li className="w-28 xl:w-40">
            <Image src={img} alt="123" />
          </li>
          <li className="w-28 xl:w-40">
            <Image src={img2} alt="123" />
          </li>
          <li className="w-28 xl:w-40 ">
            <Image src={img3} alt="123" />
          </li>
          <li className="w-28 xl:w-40 ">
            <Image src={img4} alt="123" />
          </li>
          <li className="w-28 xl:w-40 ">
            <Image src={img5} alt="123" />
          </li>
          <li className="w-28 xl:w-40 ">
            <Image src={img6} alt="123" />
          </li>
          <li className="w-28 xl:w-40 ">
            <Image src={img7} alt="123" />
          </li>
          <li className="w-28 xl:w-40 ">
            <Image src={img8} alt="123" />
          </li>
          <li className="w-28 xl:w-40 ">
            <Image src={img9} alt="123" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WorksWith;
