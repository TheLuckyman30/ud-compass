import { create } from "zustand";
import type { Category } from "../";
import resources from "../../data/resources.json";

interface GeneralStore {
  currentPage: number;
  selectedCategory: Category;
  setCurrentPage: (newPage: number) => void;
  setSelectedCategory: (newCategory: Category) => void;
}

export const useGeneralStoe = create<GeneralStore>((set) => ({
  currentPage: 0,
  selectedCategory: resources[0],
  setCurrentPage: (newPage: number) => {
    set({ currentPage: newPage });
  },
  setSelectedCategory: (newCategory: Category) => {
    set({ selectedCategory: newCategory });
  },
}));
