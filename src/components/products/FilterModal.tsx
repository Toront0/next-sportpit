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
import DoubleRangeInput from "../UI/DoubleRangeInput";

interface IFilterModal {
  filters: FilterData;
  setFilters: Dispatch<SetStateAction<FilterData>>;
  setApplyFilters: Dispatch<SetStateAction<boolean>>;
  setPage: Dispatch<SetStateAction<number>>;
  onClose: () => void;
}

type FilterData = {
  brands: string[];
  made_in: string[];
  release_form: string[];
  category: string[];
};

type CheckboxTypes = {
  brands: string;
  made_in: string;
  release_form: string;
  category: string;
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
  const [priceRange2, setPriceRange2] = useState(0);
  const [weightRange, setWeightRange] = useState(0);
  const [weightRange2, setWeightRange2] = useState(0);

  useEffect(() => {
    const handler = async () => {
      const res = await fetch(`${window.location.origin}/api/product-filter`);

      const data = await res.json();

      setPriceRange2(data.max_price);
      setWeightRange2(data.max_weight);
      setPriceRange(data.min_price);
      setWeightRange(data.min_weight);

      setAllBrands(data);
    };

    handler();
  }, []);

  console.log(allBrands);

  const onCheckbox = (n: string, name: keyof CheckboxTypes) => {
    if (!filters[name]) {
      setFilters((prev) => {
        return {
          ...prev,
          [name]: [n]
        };
      });
      return;
    }

    if (typeof name === "string" && filters[name].includes(n)) {
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
            <Accordion title="Страна производитель">
              <div className="flex flex-col gap-2">
                {allBrands.made_in?.map((b) => (
                  <Checkbox
                    key={b}
                    label={b}
                    name="made_in"
                    checked={filters.made_in?.includes(b)}
                    onChange={(e) => onCheckbox(b, "made_in")}
                  />
                ))}
              </div>
            </Accordion>
            <Accordion title="Категория">
              <div className="flex flex-col gap-2">
                {allBrands.category?.map((b) => (
                  <Checkbox
                    key={b}
                    label={b}
                    name="category"
                    checked={filters.category?.includes(b)}
                    onChange={(e) => onCheckbox(b, "category")}
                  />
                ))}
              </div>
            </Accordion>
            <Accordion title="Форма выпуска">
              <div className="flex flex-col gap-2">
                {allBrands.release_form?.map((b) => (
                  <Checkbox
                    key={b}
                    label={b}
                    name="release_form"
                    checked={filters.release_form?.includes(b)}
                    onChange={(e) => onCheckbox(b, "release_form")}
                  />
                ))}
              </div>
            </Accordion>

            <div>
              <h3 className="text-gray-2 dark:text-gray-14 font-medium"></h3>
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
