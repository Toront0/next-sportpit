import { ProductItemPreviewType } from "@/app/products/page";
import { ICartItem } from "../types/types";

export interface IUseCartState {
  items: ICartItem[];
  addItemToCart: (v: ICartItem) => void;
  removeItemFromCart: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
}

export type Toast = {
  id: number;
  title: string;
  subtitle: string;
  type: "error" | "success";
};

export interface IUseToaster {
  toasts: Toast[];
  setToast: (t: Toast) => void;
  deleteToast: (id: number) => void;
}

export interface IUseTheme {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export type FavoriteItemType = {
  id: number;
  title: string;
  price: number;
  img: string;
};

export interface IUseFavoritesState {
  items: FavoriteItemType[];
  addItemToFavorites: (val: FavoriteItemType) => void;
  deleteItemFromFavorites: (id: number) => void;
  syncWithLocalStorage: () => void;
}

type ComparisonItem = {
  id: number;
  category: string;
};

export interface IUseComparisonState {
  items: ComparisonItem[];
  addItemToComparison: (v: ComparisonItem) => void;
  deleteItemFromComparison: (id: number) => void;
  syncWithLocalStorage: () => void;
}
