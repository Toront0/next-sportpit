import React from "react";

interface IPagination {
  activeIndex: number;
  count: number;
  pageOffset: number;
  onChange: (e: number) => void;
}

const Pagination = ({
  activeIndex,
  count,
  pageOffset,
  onChange
}: IPagination) => {
  console.log("all pages", count);

  return (
    <div className="flex w-full justify-center mt-12 gap-4">
      {Array.from({ length: Math.ceil(count / pageOffset) }).map((_, i) => (
        <button
          key={i}
          onClick={() => onChange(i)}
          className={`w-9 h-9 rounded bg-opac-b-1 dark:bg-opac-w-1 text-sm  ${
            activeIndex === i
              ? "text-gray-1 dark:text-gray-15 font-semibold"
              : "text-gray-6 dark:text-gray-9 font-normal"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
