import { useGeneralStoe } from "@utils/zustand";
import type { Item } from "@utils/interfaces";
import { PAGES } from "@utils/constants";

interface ItemCardProps {
  item: Item;
}

export function ItemCard({ item }: ItemCardProps) {
  const setSelectedItem = useGeneralStoe((state) => state.setSelectedItem);
  const setCurrentPage = useGeneralStoe((state) => state.setCurrentPage);

  return (
    <div
      className="bg-white rounded-sm border border-gray-400 px-5 py-10 shadow-md hover:scale-110 duration-75 cursor-pointer font-medium"
      onClick={() => {
        setCurrentPage(PAGES.Resource);
        setSelectedItem(item);
      }}
    >
      <p>{item.title}</p>
      <p className="text-xs text-gray italic">{item.subtitle}</p>
    </div>
  );
}
