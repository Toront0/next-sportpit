import React from "react";

const CTABlock = () => {
  return (
    <section className="w-full flex my-12 justify-center bg-rose-7 dark:bg-rose-10 py-12">
      <div className=" text-center flex justify-center  flex-col">
        <h4 className="text-3xl text-white font-extralight">
          {" "}
          Оставьте свой контакты
        </h4>
        <p className="text-gray-12 w-3/4  xl:w-full mx-auto text-sm">
          Подпишитесь на нашу рассылку, чтобы оставаться в курсе новостей,
          скидок и новых поступлений.
        </p>
        <div className="mt-3 w-3/4 xl:w-full flex justify-center mx-auto gap-2">
          <input
            type="text"
            className="w-full bg-gray-12  dark:text-white p-2 text-sm text-black focus:outline-none rounded"
            placeholder="Ваш почтовый адрес"
          />
          <button className="px-2 py-1 rounded bg-rose-6 dark:bg-rose-7 text-white text-sm font-medium">
            Подписаться
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTABlock;
