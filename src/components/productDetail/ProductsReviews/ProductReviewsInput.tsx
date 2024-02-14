import { IoSend } from "react-icons/io5";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { useState } from "react";
import { useSession } from "next-auth/react";
import AuthModal from "@/components/Modals/AuthModal/AuthModal";
import { CommentsResType } from "./ProductsReviews";

interface IProductReviewsInput {
  productId: number;
  setComments: React.Dispatch<React.SetStateAction<CommentsResType>>;
}

const ProductReviewsInput = ({
  productId,
  setComments
}: IProductReviewsInput) => {
  const { data } = useSession();
  const [expandStarPicker, setExpandStarPicker] = useState(false);
  const [rating, setRating] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [showAuthBadge, setShowAuthBadge] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleInsertComment = async () => {
    if (!data?.user) {
      setShowAuthBadge(true);
      return;
    }

    const res = await fetch(`${window.location.origin}/api/product-comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: +data?.user.id,
        review: inputValue,
        rating: rating,
        productId: productId
      })
    });

    if (res.status === 201) {
      setComments((prev) => {
        return {
          ...prev,
          reviews: prev.reviews.concat({
            id: prev.reviews.length + 1,
            createdAt: new Date(),
            rating: rating,
            review: inputValue,
            user: {
              first_name: data.user.firstName,
              last_name: data.user.lastName,
              profile_img: data.user.image || ""
            }
          })
        };
      });

      setInputValue("");
      setRating(0);
    }
  };

  return (
    <div className="flex items-center w-full relative gap-2">
      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
      {showAuthBadge && (
        <div className="absolute p-2 left-1/2 -translate-x-1/2 bottom-full mb-3 rounded text-sm text-white bg-rose-6">
          <div className="relative w-full">
            Чтобы оставить отзыв вы должны{" "}
            <button
              className="underline"
              onClick={() => setShowAuthModal(true)}
            >
              авторизоваться!
            </button>
            <div className="w-0 h-0 border-[14px] border-transparent absolute left-1/2 -translate-x-1/2 border-t-rose-6 border-b-0"></div>
          </div>
        </div>
      )}
      <div className=""></div>
      <div className="h-full   relative">
        <button
          onClick={() => setExpandStarPicker((p) => !p)}
          className="text-xl px-2 w-16 flex items-center gap-1 justify-center h-full bg-opac-b-1 dark:bg-opac-w-1 rounded  dark:text-[#e0f44a]"
        >
          {rating === 0 ? <FaRegStar /> : <FaStar />}

          <span className="text-sm">{rating}/5</span>
        </button>
        {expandStarPicker && (
          <div className="absolute border border-opac-b-2 dark:border-opac-w-1 bottom-full mb-2 w-64 p-3 bg-white rounded dark:bg-gray-2">
            <span className="text-sm text-gray-4 dark:text-gray-12">
              Ваша оценка
            </span>
            <div className="flex gap-2 mt-1 text-lg dark:text-[#e0f44a]">
              {Array.from({ length: 5 }).map((v, i) => (
                <>
                  {i >= rating ? (
                    <button className="" onClick={() => setRating(i + 1)}>
                      <FaRegStar />
                    </button>
                  ) : (
                    <button
                      className=""
                      onClick={() =>
                        i + 1 === 1 && rating === 1
                          ? setRating(0)
                          : setRating(i + 1)
                      }
                    >
                      <FaStar />
                    </button>
                  )}
                </>
              ))}
            </div>
          </div>
        )}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full bg-opac-b-1 px-2 py-2 text-sm rounded focus:outline-none dark:bg-opac-w-1 text-gray-4 dark:text-gray-12 font-medium"
        placeholder="Введите комментарий"
      />

      <button
        onClick={handleInsertComment}
        className="h-full aspect-square flex items-center justify-center text-white bg-rose-7 rounded"
      >
        <IoSend />
      </button>
    </div>
  );
};

export default ProductReviewsInput;
