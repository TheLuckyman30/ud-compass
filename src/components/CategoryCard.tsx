import { useGeneralStoe } from "@utils/zustand";
import type { Category } from "@utils/interfaces";
import { PAGES } from "@utils/constants";
import "@css/components/category-card.css";

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
      className="category-card"
      onClick={() => {
        setSelectedCategory(category);
        setCurrentPage(PAGES.Category);
      }}
    >
      <div className="content-container">
        <svg
          className="svg"
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
        <span className="text">{category.name}</span>
      </div>
    </div>
  );
}
