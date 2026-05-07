import { create } from "zustand";
import type { Category, Item } from "../";
import resources from "../../data/resources.json";

interface GeneralStore {
  currentPage: number;
  selectedCategory: Category;
  selectedItem: Item;
  setCurrentPage: (newPage: number) => void;
  setSelectedCategory: (newCategory: Category) => void;
  setSelectedItem: (newItem: Item) => void;
}

export const useGeneralStoe = create<GeneralStore>((set) => ({
  currentPage: 0,
  selectedCategory: resources[0],
  selectedItem: resources[0].items[0],
  setCurrentPage: (newPage: number) => {
    set({ currentPage: newPage });
  },
  setSelectedCategory: (newCategory: Category) => {
    set({ selectedCategory: newCategory });
  },
  setSelectedItem: (newItem: Item) => {
    set({ selectedItem: newItem });
  },
}));
