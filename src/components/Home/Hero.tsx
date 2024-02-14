import Link from "next/link";
import React from "react";

import img from "/public/hero-bg.png";
import img2 from "/public/hero_bg_3.png";
import img3 from "../../../public/hero_bg_3.png";
import Image from "next/image";
import HeroBadge from "../UI/Icons/HeroBadge";
import HeroBadge2 from "../UI/Icons/HeroBadge2";
import HeroBadge3 from "../UI/Icons/HeroBadge3";
import HeroBadge4 from "../UI/Icons/HeroBadge4";
import HeroBadge5 from "../UI/Icons/HeroBadge5";

const Hero = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4  w-full h-full overflow-x-hidden">
      <div className="w-full flex flex-col xl:flex-row items-center   h-full ">
        <div className="w-full h-full flex flex-col justify-center items-center xl:items-start xl:w-1/2 text-center xl:text-left">
          <h1 className="text-3xl xl:text-6xl font-extrabold text-gray-1 dark:text-gray-15">
            №1 На рынке спортивного питания
          </h1>
          <p className="text-[13px] lg:text-[15px] text-gray-4 mt-2 dark:text-gray-12">
            Откройте для себя совершенно новый мир спортивных результатов с
            нашим магазином спортивного питания. У нас есть энергия, необходимое
            для того, чтобы вывести вашу игру на новый уровень. Наши научно
            разработанные добавки дадут вам преимущество.
          </p>
          <p className="text-[13px] lg:text-[15px] text-gray-4 dark:text-gray-12 mt-2">
            {" "}
            Толкайтесь сильнее, бегайте быстрее, поднимайте тяжелее — мы вас
            поддержим.
          </p>
          <Link
            href="/products"
            className="px-4 w-fit py-1.5 mt-4 inline-block rounded text-[13px] lg:text-[15px] text-white bg-rose-8 font-medium"
          >
            Каталог
          </Link>
        </div>
        <div className="w-full xl:w-1/2 h-full xl:h-3/5 relative  flex justify-center items-center">
          <div className="w-full aspect-square relative">
            <div className="absolute top-[20%] -translate-y-1/2 left-[10%] md:left-[25%] z-10">
              <HeroBadge />
            </div>
            <div className="absolute top-[35%] -translate-y-1/2 left-[55%] z-10">
              <HeroBadge2 />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-1/2 z-10">
              <HeroBadge3 />
            </div>
            <div className="absolute top-[65%] -translate-y-1/2 left-[55%] z-10">
              <HeroBadge4 />
            </div>
            <div className="absolute top-3/4 -translate-y-1/2 right-[55%] z-10">
              <HeroBadge5 />
            </div>
          </div>
          <Image src={img2} alt="123" className=" object-contain" fill={true} />
          {/* <img src={img2} alt="" /> */}
          {/* <div className="w-full h-full bg-white">123</div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
{
  /* <div className="w-full aspect-square relative">
            <div className="absolute top-[20%] -translate-y-1/2 left-[10%] md:left-[25%] z-10">
              <HeroBadge />
            </div>
            <div className="absolute top-[35%] -translate-y-1/2 left-[55%] z-10">
              <HeroBadge2 />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-1/2 z-10">
              <HeroBadge3 />
            </div>
            <div className="absolute top-[65%] -translate-y-1/2 left-[55%] z-10">
              <HeroBadge4 />
            </div>
            <div className="absolute top-3/4 -translate-y-1/2 right-[55%] z-10">
              <HeroBadge5 />
            </div>
       
          </div> */
}
