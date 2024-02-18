"use client";

import Header from "@/components/Header/Header";

import ComparingItems from "@/components/compare/ComparingItems";
import { useComparisonState } from "@/lib/store/store";
import { useState } from "react";

const ComparePage = () => {
  const comparisonState = useComparisonState((s) => s.items);
  const [chosenCategory, setChosenCategory] = useState(0);

  const getUniqueCategories = () => {
    return [...new Set([...comparisonState.map((v) => v.category)])];
  };

  console.log(getUniqueCategories());

  return (
    <div className="w-full h-full">
      <Header />
      <div className="w-full h-[calc(100%-48px)] overflow-y-auto  ">
        <div className="max-w-[2000px] p-4  mx-auto h-full flex flex-col">
          <div className="flex items-center gap-6">
            {getUniqueCategories().map((v) => (
              <button
                key={v}
                className="px-2 py-1 rounded text-sm text-gray-4 dark:text-gray-12"
              >
                {v}
              </button>
            ))}
          </div>
          <ComparingItems
            chosenCategory={getUniqueCategories()[chosenCategory]}
          />
        </div>
      </div>
    </div>
  );
};

export default ComparePage;
