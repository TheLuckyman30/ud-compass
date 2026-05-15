import { create } from "zustand";
import { buildData } from "@utils/helpers";
import { PAGES } from "@utils/constants";
import type { ItemMap, CategoryMap, ItemId, Item } from "@utils/interfaces";
import type { JSX } from "react";

interface GeneralStore {
  currentPage: () => JSX.Element | null;
  allCategories: CategoryMap;
  allItems: ItemMap;
  favoriteItems: ItemMap;
  selectedCategoryId: string;
  selectedItemId: string;
  setCurrentPage: (newPage: () => JSX.Element | null) => void;
  setSelectedCategory: (newCategoryId: string) => void;
  setSelectedItem: (newItemId: string) => void;
  updateFavItems: (itemId: ItemId) => void;
}

export const useGeneralStore = create<GeneralStore>((set) => {
  const [categoryMap, itemMap] = buildData();
  const favItemKey = "udc-favoriteItems";
  let initialFavItems: ItemMap | null = null;

  const itemsFromStorage = localStorage.getItem(favItemKey);
  if (itemsFromStorage) {
    const favDataArray: [ItemId, Item][] = JSON.parse(itemsFromStorage);
    initialFavItems = new Map(favDataArray);
  }

  return {
    currentPage: PAGES.Home,
    allCategories: categoryMap,
    allItems: itemMap,
    favoriteItems: initialFavItems ?? new Map<ItemId, Item>(),
    selectedCategoryId: "cat-0",
    selectedItemId: "item-0",
    setCurrentPage: (newPage: () => JSX.Element | null) => {
      set({ currentPage: newPage });
    },
    setSelectedCategory: (newCategoryId: string) => {
      set({ selectedCategoryId: newCategoryId });
    },
    setSelectedItem: (newItemId: string) => {
      set({ selectedItemId: newItemId });
    },
    updateFavItems: (itemId: ItemId) => {
      set((state) => {
        const newFavoriteItems = new Map(state.favoriteItems);
        const hasItem = newFavoriteItems.has(itemId);

        if (hasItem) {
          newFavoriteItems.delete(itemId);
        } else {
          const item = state.allItems.get(itemId);
          if (item) {
            newFavoriteItems.set(itemId, item);
          }
        }

        const convertedMap = JSON.stringify(
          Array.from(newFavoriteItems.entries()),
        );
        localStorage.setItem(favItemKey, convertedMap);

        return { favoriteItems: newFavoriteItems };
      });
    },
  };
});
