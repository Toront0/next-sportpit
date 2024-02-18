import { create } from "zustand";
import {
  IUseCartState,
  IUseComparisonState,
  IUseFavoritesState,
  IUseTheme,
  IUseToaster
} from "./types";

// const getFromLocalStorage = () => {
//   if (window !== undefined) {
//     const res = window.localStorage.getItem("cart_items");

//     if (res) {
//       return JSON.parse(res);
//     }
//   }
//   return [];
// };

export const useCartState = create<IUseCartState>((set, get) => ({
  items: [],
  addItemToCart(v) {
    const existingItemIdx = get().items.findIndex((val) => val.id === v.id);
    const updatedData = [...get().items];

    if (existingItemIdx === -1) {
      window.localStorage.setItem(
        "cart_items",
        JSON.stringify(updatedData.concat(v))
      );
      set({ items: updatedData.concat(v) });
    } else {
      updatedData[existingItemIdx].qty += 1;
      window.localStorage.setItem("cart_items", JSON.stringify(updatedData));

      set({ items: updatedData });
    }
  },
  removeItemFromCart(id) {
    const updatedData = get().items.filter((v) => v.id !== id);
    window.localStorage.setItem("cart_items", JSON.stringify(updatedData));
    set({ items: updatedData });
  },
  increaseQty(id) {
    const existingItemIdx = get().items.findIndex((val) => val.id === id);
    const updatedData = [...get().items];

    updatedData[existingItemIdx].qty += 1;

    set({ items: updatedData });
  },
  decreaseQty(id) {
    const existingItemIdx = get().items.findIndex((val) => val.id === id);
    const updatedData = [...get().items];

    updatedData[existingItemIdx].qty = Math.max(
      1,
      updatedData[existingItemIdx].qty - 1
    );

    set({ items: updatedData });
  }
}));

export const useToaster = create<IUseToaster>((set, get) => ({
  toasts: [],
  setToast(t) {
    set({ toasts: get().toasts.concat(t) });
  },
  deleteToast(id) {
    set({ toasts: get().toasts.filter((v) => v.id !== id) });
  }
}));

type Returning = "light" | "dark";

function getLocalTheme(): Returning {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme") as Returning;
    } else {
      return "light";
    }
  }

  return "light";
}

export const useTheme = create<IUseTheme>((set, get) => ({
  theme: getLocalTheme(),
  toggleTheme() {
    if (get().theme === "light") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      set({ theme: "dark" });
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      set({ theme: "light" });
    }
  }
}));

export const useFavoriteState = create<IUseFavoritesState>((set, get) => ({
  items: [],
  addItemToFavorites(val) {
    const updatedData = get().items.concat(val);
    localStorage.setItem("favorite-items", JSON.stringify(updatedData));
    set({ items: updatedData });
  },
  deleteItemFromFavorites(id) {
    const updatedData = get().items.filter((v) => v.id !== id);
    localStorage.setItem("favorite-items", JSON.stringify(updatedData));
    set({ items: updatedData });
  },
  syncWithLocalStorage() {
    if (global?.window && typeof window !== undefined) {
      const res = window.localStorage.getItem("favorite-items");

      if (res) {
        set({ items: JSON.parse(res) });
      }
    }
  }
}));

export const useComparisonState = create<IUseComparisonState>((set, get) => ({
  items: [],
  addItemToComparison(v) {
    const updatedData = get().items.concat(v);
    localStorage.setItem("comparison-items", JSON.stringify(updatedData));
    set({ items: updatedData });
  },
  deleteItemFromComparison(id) {
    const updatedData = get().items.filter((v) => v.id !== id);

    localStorage.setItem("comparison-items", JSON.stringify(updatedData));
    set({ items: updatedData });
  },
  syncWithLocalStorage() {
    if (global?.window && typeof window !== undefined) {
      const res = window.localStorage.getItem("comparison-items");

      if (res) {
        set({ items: JSON.parse(res) });
      }
    }
  }
}));
