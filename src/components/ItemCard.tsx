import { useGeneralStore } from "@utils/zustand";
import { PAGES } from "@utils/constants";
import type { Item } from "@utils/interfaces";
import "@css/components/item-card.css";

interface ItemCardProps {
  item: Item;
}

export function ItemCard({ item }: ItemCardProps) {
  const setSelectedItem = useGeneralStore((state) => state.setSelectedItem);
  const setCurrentPage = useGeneralStore((state) => state.setCurrentPage);

  return (
    <div
      className="item-card"
      onClick={() => {
        setCurrentPage(PAGES.Resource);
        setSelectedItem(item.id);
      }}
    >
      <div>
        <p className="ic-item-title">{item.title}</p>
        {item.subtitle && <p className="ic-item-subtitle">{item.subtitle}</p>}
      </div>
    </div>
  );
}
