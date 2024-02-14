"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import FilterModal from "./FilterModal";
import { FilterData, ResType } from "@/app/products/page";

import { IoClose } from "react-icons/io5";
import { useDebouncedValue } from "@/lib/hooks/useDebouncedValue";

export interface IProductsFilter {
  filters: FilterData;
  setFilters: Dispatch<SetStateAction<FilterData>>;
  setApplyFilters: Dispatch<SetStateAction<boolean>>;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  setData: Dispatch<SetStateAction<ResType>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  searchInput: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
}

const ProductsFilter = ({
  filters,
  setFilters,
  setApplyFilters,
  setPage,
  setData,
  page,
  setLoading,
  searchInput,
  setSearchInput
}: IProductsFilter) => {
  const [expandFilter, setExpandFilter] = useState(false);
  const [expandSearchbar, setExpandSearchbar] = useState(false);
  // const [searchInput, setSearchInput] = useState("");
  const [debounced] = useDebouncedValue(searchInput, 500);

  useEffect(() => {
    if (debounced.length < 1) return;

    if (searchInput.length > 0) {
      try {
        const handler = async () => {
          setLoading(true);
          const res = await fetch(
            `${window.location.origin}/api/product-search?q=${searchInput}&page=${page}`
          );

          const data = await res.json();

          console.log("data", data);

          setData(data);
        };

        handler();
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    } else {
      setApplyFilters((p) => !p);
    }
  }, [debounced, page]);

  const onCloseInput = () => {
    if (searchInput.length > 0) {
      setSearchInput("");
    }
    setExpandSearchbar((p) => !p);
  };

  return (
    <div className="flex items-center mt-4 justify-between">
      {expandFilter && (
        <FilterModal
          onClose={() => setExpandFilter(false)}
          filters={filters}
          setFilters={setFilters}
          setApplyFilters={setApplyFilters}
          setPage={setPage}
        />
      )}
      <div className="flex gap-2">
        <button
          onClick={() => setExpandFilter(true)}
          className="bg-rose-7 text-white px-3 py-1 rounded text-sm font-medium"
        >
          Фильтр
        </button>
        {Object.values(filters).length > 0 && (
          <button
            onClick={() => {
              setFilters({} as FilterData), setApplyFilters((p) => !p);
              setPage(0);
            }}
            className="bg-opac-b-1 group dark:bg-opac-w-2 text-gray-4 dark:text-gray-12 pr-3 pl-2 py-1 flex items-center gap-1 rounded text-sm font-medium"
          >
            <IoClose className="text-xl xl:group-hover:scale-125  transition-transform" />
            Очистить фильтры
          </button>
        )}
      </div>
      <div className="relative h-8 flex items-center rounded bg-opac-b-2 dark:bg-opac-w-2">
        <button
          onClick={onCloseInput}
          className="text-lg h-full aspect-square flex items-center justify-center text-gray-4 dark:text-gray-12"
        >
          {expandSearchbar ? <IoClose /> : <IoSearch />}
        </button>
        <input
          type="text"
          className={` h-full transition-all ${
            expandSearchbar ? "w-96" : "w-0"
          } bg-transparent focus:outline-none text-gray-2 dark:text-gray-14 text-sm`}
          placeholder="Поиск..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ProductsFilter;
