"use client";

import Header from "@/components/Header/Header";
import ProductItem, { IProductItem } from "@/components/products/ProductItem";
import React, { useEffect, useState } from "react";

import img from "/public/protein_2.png";
import ProductsFilter from "@/components/products/ProductsFilter";

import prisma from "@/lib/db";
import Pagination from "@/components/UI/Pagination";
import ProductsSkeleton from "@/components/products/ProductsSkeleton";
import useSWR from "swr";
import { fetcher } from "@/lib/helpers/helpers";
import { useDebouncedValue } from "@/lib/hooks/useDebouncedValue";

type ProductType = {
  id: number;
  title: string;
  img: string;
  description: string;
};

type IProductItemPreview = {
  id: number;
  img: string;
  title: string;
  price: number;
  in_stock: number;
};

export type ResType = {
  products: IProductItemPreview[];
  count: number;
};

export type FilterData = {
  brands: string[];
  madeIn: string[];
};

const ProductsPage = () => {
  // const data = (await prisma.product.findMany()) as unknown as IProductItem[];
  const [filters, setFilters] = useState({} as FilterData);
  const [data, setData] = useState({} as ResType);
  const [applyFilters, setApplyFilters] = useState(false);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (searchInput.length > 0) return;
    const handler = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${window.location.origin}/api/products?page=${page}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },

            body: JSON.stringify(filters)
          }
        );

        const d = await res.json();

        setData(d);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    handler();
  }, [applyFilters, page]);

  return (
    <div className="w-full h-full">
      <Header />
      <div className=" overflow-y-auto h-[calc(100%-48px)]">
        <div className="max-w-[2000px] p-4 mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-4 dark:text-gray-12">
            Товары
          </h2>
          <ProductsFilter
            filters={filters}
            setFilters={setFilters}
            setApplyFilters={setApplyFilters}
            setPage={setPage}
            setData={setData}
            page={page}
            setLoading={setLoading}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
          <main className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
            {loading ? (
              <ProductsSkeleton />
            ) : (
              <>
                {data?.products?.map((v) => (
                  <ProductItem
                    key={v.id}
                    id={v.id}
                    title={v.title}
                    img={v.img}
                    price={v.price}
                    avgRating={4.6}
                    searchQuery={"123"}
                  />
                ))}
              </>
            )}
          </main>
          <Pagination
            activeIndex={page}
            count={data?.count}
            pageOffset={30}
            onChange={(v) => setPage(v)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
