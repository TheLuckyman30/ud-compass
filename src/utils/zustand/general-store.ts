import { create } from "zustand";
import resources from "../../data/resources.json";
import type { Category, Item } from "@utils/interfaces";
import type { JSX } from "react";
import { PAGES } from "@utils/constants";

interface GeneralStore {
  currentPage: () => JSX.Element | null;
  selectedCategory: Category;
  selectedItem: Item;
  setCurrentPage: (newPage: () => JSX.Element | null) => void;
  setSelectedCategory: (newCategory: Category) => void;
  setSelectedItem: (newItem: Item) => void;
}

export const useGeneralStoe = create<GeneralStore>((set) => ({
  currentPage: PAGES.Home,
  selectedCategory: resources[0],
  selectedItem: resources[0].items[0],
  setCurrentPage: (newPage: () => JSX.Element | null) => {
    set({ currentPage: newPage });
  },
  setSelectedCategory: (newCategory: Category) => {
    set({ selectedCategory: newCategory });
  },
  setSelectedItem: (newItem: Item) => {
    set({ selectedItem: newItem });
  },
}));
