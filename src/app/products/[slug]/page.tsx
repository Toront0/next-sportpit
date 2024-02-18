import React from "react";

import Image from "next/image";
import ProductInfo from "@/components/productDetail/productInfo";
import Header from "@/components/Header/Header";

import prisma from "@/lib/db";

export type ProductDetail = {
  id: number;
  img: string;
  title: string;
  price: number;
  avgrating: number;
  description: string;
  category: string;
};

const ProductDetail = async ({ params }: { params: { slug: string } }) => {
  // const res = await fetch(`/api/product-detail/${+params.slug}`);
  const [data] = await prisma.$queryRaw<
    ProductDetail[]
  >`Select t1.id, t1.title, t1.img,  t1.description, t1.price, t1.category, avg(coalesce(t2.rating, 0)) as avgRating from products t1 left join comments t2 on t1.id = t2.product_id where t1.id = ${+params.slug} group by t1.id`;

  return (
    <div className="w-full h-full overflow-y-auto ">
      <Header />
      <div className="h-[calc(100%-48px)] w-full   ">
        <div className="flex flex-col w-full h-full lg:flex-row ">
          <div className="w-full lg:w-1/2 min-h-[50%] lg:h-full bg-white dark:bg-black flex items-center justify-center">
            <div className="w-1/2 lg:w-3/4 h-1/2 lg:h-3/4 relative   ">
              <Image src={data?.img ? data.img : ""} alt="123" fill={true} />
            </div>
          </div>
          {data && (
            <ProductInfo
              id={data?.id}
              title={data?.title}
              category={data.category}
              avgrating={+data.avgrating.toString()}
              description={data?.description}
              price={data?.price}
              img={data?.img}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
