import type { Item } from "../utils";

interface ItemCardProps {
  item: Item;
}

export function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="bg-white rounded-sm border border-gray-400 px-5 py-10 shadow-md hover:scale-110 duration-75 cursor-pointer font-medium">
      <p>{item.title}</p>
      <p className="text-xs text-gray italic">{item.subtitle}</p>
    </div>
  );
}
