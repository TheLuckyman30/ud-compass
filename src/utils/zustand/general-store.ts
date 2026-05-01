import { create } from "zustand";
import type { Category, Page } from "../";
import resources from "../../data/resources.json";
import { pages } from "../../App";

interface GeneralStore {
  currentPage: Page;
  selectedCategory: Category;
  setCurrentPage: (newPage: Page) => void;
  setSelectedCategory: (newCategory: Category) => void;
}

export const useGeneralStoe = create<GeneralStore>((set) => ({
  currentPage: pages[0],
  selectedCategory: resources[0],
  setCurrentPage: (newPage: Page) => {
    set({ currentPage: newPage });
  },
  setSelectedCategory: (newCategory: Category) => {
    set({ selectedCategory: newCategory });
  },
}));
