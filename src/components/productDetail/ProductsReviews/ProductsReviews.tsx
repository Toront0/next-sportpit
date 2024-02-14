import React, { useEffect, useState } from "react";

import ProductsReview, { ProductReviewType } from "./ProductReview";

import img from "/public/protein_2.png";
import ProductReviewsInput from "./ProductReviewsInput";
import ProductReview from "./ProductReview";
import ProductReviewsSkeleton from "./ProductReviewsSkeleton";
import Pagination from "@/components/UI/Pagination";

interface IProductsReviews {
  productId: number;
}

export type CommentsResType = {
  reviews: ProductReviewType[];
  count: number;
};

const ProductsReviews = ({ productId }: IProductsReviews) => {
  const [comments, setComments] = useState({} as CommentsResType);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const handler = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `${window.location.origin}/api/product-comments?page=${page}&id=${productId}`
        );

        const data = await res.json();

        setComments(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    handler();
  }, [page]);

  return (
    <div className="flex flex-col h-full ">
      <div className="h-full flex flex-col gap-4 overflow-y-auto">
        {isLoading ? (
          <ProductReviewsSkeleton
            itemsToRender={comments.count && comments.count - page * 5}
          />
        ) : (
          <>
            {comments.reviews?.length > 0 ? (
              <>
                {comments.reviews?.map((c) => (
                  <ProductReview
                    id={c.id}
                    createdAt={c.createdAt}
                    user={c.user}
                    rating={c.rating}
                    review={c.review}
                  />
                ))}
                <Pagination
                  activeIndex={page}
                  count={comments.count}
                  pageOffset={20}
                  onChange={(v) => setPage(v)}
                />
              </>
            ) : (
              <div className="text-sm text-gray-4 dark:text-gray-12">
                Станьте первым, кто оставит отзыв под этим товаром.
              </div>
            )}
          </>
        )}
      </div>
      <ProductReviewsInput productId={productId} setComments={setComments} />
    </div>
  );
};

export default ProductsReviews;
