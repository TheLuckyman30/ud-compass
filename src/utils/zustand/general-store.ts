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
  addFavItem: (itemId: ItemId, item: Item) => void;
  removeFavItem: (itemId: ItemId) => void;
}

export const useGeneralStore = create<GeneralStore>((set) => {
  const [categoryMap, itemMap] = buildData();

  return {
    currentPage: PAGES.Home,
    allCategories: categoryMap,
    allItems: itemMap,
    favoriteItems: new Map<ItemId, Item>(),
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
    addFavItem: (itemId: ItemId, item: Item) => {
      set((state) => {
        const newFavoriteItems = new Map(state.favoriteItems);
        newFavoriteItems.set(itemId, item);

        return { favoriteItems: newFavoriteItems };
      });
    },
    removeFavItem: (itemId: ItemId) => {
      set((state) => {
        const newFavoriteItems = new Map(state.favoriteItems);
        newFavoriteItems.delete(itemId);

        return { favoriteItems: newFavoriteItems };
      });
    },
  };
});
