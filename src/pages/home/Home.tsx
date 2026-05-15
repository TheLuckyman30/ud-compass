import { CategoryCard } from "@components";
import { useGeneralStore } from "@utils/zustand";
import "@css/pages/home.css";

export function Home() {
  const allCategories = useGeneralStore((state) => state.allCategories);
  const categoryArray = Array.from(allCategories.values());

  return (
    <section className="home">
      <div className="h-cat-container">
        <p className="h-cat-header">Categories</p>
        <div className="h-categories">
          {categoryArray.map((category) => (
            <CategoryCard category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
