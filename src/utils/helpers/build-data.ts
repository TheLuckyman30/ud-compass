import resources from "@data/resources.json";
import type { ItemId, Item, ItemMap } from "@utils/interfaces";
import type {
  CategoryId,
  Category,
  CategoryMap,
} from "@utils/interfaces/Category";

export function buildData() {
  const categoryMap: CategoryMap = new Map<CategoryId, Category>();
  const itemMap: ItemMap = new Map<ItemId, Item>();

  let itemIndex = 0;
  resources.forEach((category, i) => {
    const newCategoryId = `cat-${i}`;
    const newItemSet = new Set<string>();
    category.items.forEach((item) => {
      const newItemId = `item-${itemIndex}`;
      const newItem: Item = { id: newItemId, ...item };
      itemMap.set(newItemId, newItem);
      newItemSet.add(newItemId);
      itemIndex++;
    });
    const newCategory: Category = {
      id: newCategoryId,
      name: category.name,
      items: newItemSet,
    };
    categoryMap.set(newCategoryId, newCategory);
  });

  return [categoryMap, itemMap] as const;
}
