import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import ModalPortal from "../Modals/ModalPortal";
import Accordion from "../UI/Accordion";
import Checkbox from "../UI/Checkbox";
import { useMouse } from "@/lib/hooks/useMouse";
import { useMove } from "@/lib/hooks/useMove";
import { clamp } from "@/lib/utils/clamp";
import { IProductsFilter } from "./ProductsFilter";
import { useSWRConfig } from "swr";
import { fetcher } from "@/lib/helpers/helpers";

interface IFilterModal {
  filters: FilterData;
  setFilters: Dispatch<SetStateAction<FilterData>>;
  setApplyFilters: Dispatch<SetStateAction<boolean>>;
  setPage: Dispatch<SetStateAction<number>>;
  onClose: () => void;
}

type FilterData = {
  brands: string[];
  madeIn: string[];
};

const FilterModal = ({
  filters,
  setFilters,
  onClose,
  setApplyFilters,
  setPage
}: IFilterModal) => {
  const [allBrands, setAllBrands] = useState({} as FilterData);
  const [priceRange, setPriceRange] = useState(0);
  const [priceRange2, setPriceRange2] = useState(450);
  const { mutate } = useSWRConfig();

  const fRef = useRef<HTMLDivElement>();

  const test = {
    min: 0,
    max: 20890
  };

  useEffect(() => {
    const handler = async () => {
      const res = await fetch(`${window.location.origin}/api/product-filter`);

      const data = await res.json();

      setAllBrands(data);
    };

    handler();
  }, []);

  console.log(allBrands);

  const onCheckbox = (n: string, name: keyof typeof filters) => {
    if (!filters[name]) {
      setFilters((prev) => {
        return {
          ...prev,
          [name]: [n]
        };
      });
      return;
    }

    if (filters[name].includes(n)) {
      setFilters((prev) => {
        return {
          ...prev,
          [name]: prev[name]?.filter((v) => v !== n)
        };
      });
    } else {
      setFilters((prev) => {
        return {
          ...prev,
          [name]: prev[name]?.length > 0 ? prev[name].concat(n) : [n]
        };
      });
    }
  };

  console.log(filters);

  return (
    <ModalPortal onClose={onClose}>
      <div className="w-full h-full  flex justify-end">
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-full md:w-1/4 bg-gray-12  p-6 flex flex-col h-full dark:bg-gray-2"
        >
          <div className="h-full overflow-y-auto overflow-x-hidden">
            <span className="text-sm text-gray-6 dark:text-gray-9 ">
              ФИЛЬТРЫ
            </span>
            <Accordion title="Бренд">
              <div className="flex flex-col gap-2">
                {allBrands.brands?.map((b) => (
                  <Checkbox
                    key={b}
                    label={b}
                    name="brands"
                    checked={filters.brands?.includes(b)}
                    onChange={(e) => onCheckbox(b, "brands")}
                  />
                ))}
              </div>
            </Accordion>

            <div>
              <h3 className="text-gray-2 dark:text-gray-14 font-medium">
                Ценовой диапозон
              </h3>
              <div className="w-full mt-4 flex items-center justify-between">
                <div className="w-12 flex justify-center py-1 rounded bg-white dark:bg-black text-sm text-black dark:text-white font-medium">
                  {priceRange}
                </div>
                <div className="w-12 flex justify-center py-1 rounded bg-white dark:bg-black text-sm text-black dark:text-white font-medium">
                  {priceRange2}
                </div>
              </div>
              <div className="mt-6 flex">
                <div
                  ref={fRef as React.RefObject<HTMLDivElement>}
                  className="w-1/2 h-1  relative bg-white dark:bg-black"
                >
                  <div className="w-[calc(100%-16px)] h-full relative">
                    <div
                      style={{ left: (priceRange / test.max) * 100 + "%" }}
                      className="w-5 h-5 rounded-full bg-gray-4 dark:bg-gray-12 absolute top-1/2 -translate-y-1/2"
                    ></div>
                  </div>
                  <input
                    type="range"
                    name="minPrice"
                    id="minPrice"
                    min={0}
                    max={test.max}
                    value={priceRange}
                    // onChange={(e) => setPriceRange(+e.target.value)}
                    onChange={(e) => setPriceRange(+e.target.value)}
                    className="w-full absolute"
                  />
                </div>
                <div
                  ref={fRef as React.RefObject<HTMLDivElement>}
                  className="w-1/2 h-1  relative bg-white dark:bg-black"
                >
                  <div className="w-[calc(100%-16px)] h-full relative">
                    <div
                      style={{ left: (priceRange2 / test.max) * 100 + "%" }}
                      className="w-5 h-5 rounded-full bg-gray-4 dark:bg-gray-12 absolute top-1/2 -translate-y-1/2"
                    ></div>
                  </div>
                  <input
                    type="range"
                    name="minPrice"
                    id="minPrice"
                    min={0}
                    max={test.max}
                    value={priceRange2}
                    // onChange={(e) => setPriceRange(+e.target.value)}
                    onChange={(e) => setPriceRange2(+e.target.value)}
                    className="w-full absolute"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="w-1/2 py-1.5 mt-2 rounded bg-opac-b-2 dark:bg-opac-w-2 text-white text-sm font-medium"
            >
              Закрыть
            </button>
            <button
              onClick={() => {
                setPage(0), setApplyFilters((p) => !p);
              }}
              className="w-1/2 py-1.5 mt-2 rounded bg-rose-8 text-white text-sm font-medium"
            >
              Применить фильтры
            </button>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};

export default FilterModal;
