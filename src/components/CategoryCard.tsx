import { useGeneralStore } from "@utils/zustand";
import type { Category } from "@utils/interfaces";
import { PAGES } from "@utils/constants";
import "@css/components/category-card.css";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const setSelectedCategory = useGeneralStore(
    (state) => state.setSelectedCategory,
  );
  const setCurrentPage = useGeneralStore((state) => state.setCurrentPage);

  return (
    <div
      className="category-card"
      onClick={() => {
        setSelectedCategory(category.id);
        setCurrentPage(PAGES.Category);
      }}
    >
      <div className="cc-content-container">
        <svg
          className="cc-svg"
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
        <span className="cc-text">{category.name}</span>
      </div>
    </div>
  );
}
