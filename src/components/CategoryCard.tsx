import { useGeneralStoe } from "@utils/zustand";
import type { Category } from "@utils/interfaces";

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
      className="bg-white text-center rounded-sm border border-gray-400 py-10 shadow-md hover:scale-110 duration-75 cursor-pointer font-medium"
      onClick={() => {
        setSelectedCategory(category);
        setCurrentPage(1);
      }}
    >
      {category.name}
    </div>
  );
}
