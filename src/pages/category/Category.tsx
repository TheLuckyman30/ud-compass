import { ItemCard } from "@components";
import { useGeneralStoe } from "@utils/zustand";
import "@css/pages/category.css";

export function Category() {
  const selectedCategory = useGeneralStoe((state) => state.selectedCategory);

  return (
    <section className="category">
      <p className="cat-header">{selectedCategory.name}</p>
      <div className="cat-items">
        {selectedCategory.items.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
    </section>
  );
}
