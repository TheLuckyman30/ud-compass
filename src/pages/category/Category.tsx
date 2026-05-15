import { ItemCard } from "@components";
import { useGeneralStore } from "@utils/zustand";
import { findItems } from "@utils/helpers";
import "@css/pages/category.css";

export function Category() {
  const selectedCategoryId = useGeneralStore(
    (state) => state.selectedCategoryId,
  );
  const allCategories = useGeneralStore((state) => state.allCategories);
  const allItems = useGeneralStore((state) => state.allItems);
  const category = allCategories.get(selectedCategoryId);

  if (!category) return null;
  const items = findItems(Array.from(category.items.values()), allItems);

  return (
    <section className="category">
      <p className="cat-header">{category.name}</p>
      <div className="cat-items">
        {items.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
    </section>
  );
}
