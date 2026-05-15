import { useGeneralStoe } from "@utils/zustand";
import type { Category } from "@utils/interfaces";
import { PAGES } from "@utils/constants";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const setSelectedCategory = useGeneralStoe(
    (state) => state.setSelectedCategory,
  );
  const setCurrentPage = useGeneralStoe((state) => state.setCurrentPage);

  return (
    <div
      className="bg-white h-50 w-full border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 duration-150 cursor-pointer flex items-center justify-center text-center font-semibold text-xl text-gray-800 overflow-hidden"
      onClick={() => {
        setSelectedCategory(category);
        setCurrentPage(PAGES.Category);
      }}
    >
      <div className="flex items-center justify-center w-full gap-5">
        <svg
          className=" w-10 h-10 text-ud-blue"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
        </svg>
        <span className="text-center">{category.name}</span>
      </div>
    </div>
  );
}
