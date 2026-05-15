import type { Item, ItemMap } from "@utils/interfaces";

export function findItems(itemIds: string[], allItems: ItemMap) {
  const items: Item[] = [];
  itemIds.forEach((id) => {
    const item = allItems.get(id);
    if (item) items.push(item);
  });

  return items;
}
