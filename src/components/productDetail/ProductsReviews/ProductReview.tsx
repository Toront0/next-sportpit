import Image from "next/image";
import { FaRegStar, FaStar } from "react-icons/fa6";

type ReviewerType = {
  first_name: string;
  last_name: string;
  profile_img: string;
};

export type ProductReviewType = {
  id: number;
  createdAt: Date;
  user: ReviewerType;
  rating: number;
  review: string;
};

const ProductReview = ({
  id,
  createdAt,
  user,
  review,
  rating
}: ProductReviewType) => {
  const formattedTime = new Intl.DateTimeFormat("ru", {
    dateStyle: "short"
  }).format(createdAt);

  return (
    <div className="flex gap-2">
      <div className="min-w-[40px] max-w-[40px] h-10 relative flex items-center justify-center rounded-full bg-gray-12 dark:bg-gray-4">
        <Image src={user.profile_img} alt={user.first_name} fill />
        {/* <div className="w-5 h-5 bg-gray-8"></div> */}
      </div>
      <div>
        <div className="flex items-baseline gap-3">
          <h3 className=" text-gray-4 dark:text-gray-12 font-medium">
            {user.first_name} {user.last_name}
          </h3>
          <div className="flex text-black dark:text-[#e0f44a] gap-1">
            {Array.from({ length: rating }).map((s, i) => (
              <FaStar key={i} />
            ))}
            {Array.from({ length: 5 - rating }).map((s, i) => (
              <FaRegStar key={i} />
            ))}
          </div>
          <span className="text-xs text-gray-7 dark:text-gray-9">
            {formattedTime}
          </span>
        </div>
        <p className="text-gray-2 text-sm dark:text-gray-14">{review}</p>
      </div>
    </div>
  );
};

export default ProductReview;
