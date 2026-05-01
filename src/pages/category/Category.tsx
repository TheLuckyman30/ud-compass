import { ItemCard } from "../../components";
import { useGeneralStoe } from "../../utils/zustand/general-store";

export function Category() {
  const selectedCategory = useGeneralStoe((state) => state.selectedCategory);

  return (
    <section className="flex flex-col gap-5">
      <p className="font-medium text-3xl text-gray">
        {selectedCategory.name.toUpperCase()}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {selectedCategory.items.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
    </section>
  );
}
