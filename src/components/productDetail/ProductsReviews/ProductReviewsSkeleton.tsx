import React from "react";

interface IProductReviewsSkeleton {
  itemsToRender?: number;
}

const ProductReviewsSkeleton = ({ itemsToRender }: IProductReviewsSkeleton) => {
  return (
    <>
      {Array.from({ length: itemsToRender || 10 }).map((c, i) => (
        <div key={i} className="w-full animate-pulse flex gap-2 ">
          <div className="min-w-[40px] h-10 rounded-full bg-opac-b-1 dark:bg-opac-w-1"></div>
          <div className="w-full ">
            <div className="w-1/4 bg-opac-b-1 dark:bg-opac-w-1 h-4"></div>
            <div className="w-3/4 mt-2 bg-opac-b-1 dark:bg-opac-w-1 h-6"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductReviewsSkeleton;
