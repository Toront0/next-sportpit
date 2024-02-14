import React from "react";
import { getServerSession } from "next-auth";

import img from "/public/protein_2.png";
import Image from "next/image";
import ProductInfo from "@/components/productDetail/productInfo";
import Header from "@/components/Header/Header";

import prisma from "@/lib/db";
import { IProductItem } from "@/components/products/ProductItem";
import { authOptions } from "@/lib/types/next_auth";

export type ProductDetail = {
  id: number;
  img: string;
  title: string;
  price: number;
  avgRating: number;
  description: string;
};

const page = async ({ params }: { params: { slug: string } }) => {
  const user = await getServerSession(authOptions);

  const data = await prisma.products.findUnique({
    where: { id: +params.slug }
  });

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
              in_stock={data.in_stock}
              category={data.category}
              amount_of_portion={data.amount_of_portion}
              brand={data.brand}
              made_in={data.made_in}
              release_form={data.release_form}
              weight={data.weight}
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

export default page;
