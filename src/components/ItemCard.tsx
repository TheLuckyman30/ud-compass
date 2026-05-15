import { useGeneralStore } from "@utils/zustand";
import { PAGES } from "@utils/constants";
import type { Item } from "@utils/interfaces";
import "@css/components/item-card.css";

interface ItemCardProps {
  item: Item;
}

export function ItemCard({ item }: ItemCardProps) {
  const favoriteItems = useGeneralStore((state) => state.favoriteItems);
  const updateFavItems = useGeneralStore((state) => state.updateFavItems);
  const setSelectedItem = useGeneralStore((state) => state.setSelectedItem);
  const setCurrentPage = useGeneralStore((state) => state.setCurrentPage);
  const isFavorited = favoriteItems.has(item.id);

  const handleFavUpdate = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    updateFavItems(item.id);
  };

  return (
    <div
      className="item-card"
      onClick={() => {
        setCurrentPage(PAGES.Resource);
        setSelectedItem(item.id);
      }}
    >
      <div className="flex-1">
        <p className="ic-item-title">{item.title}</p>
        {item.subtitle && <p className="ic-item-subtitle">{item.subtitle}</p>}
      </div>
      <div className="flex w-full justify-end">
        <div onClick={handleFavUpdate}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={`ic-heart ${isFavorited ? "ic-favorited" : "ic-base"}`}
            fill={isFavorited ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 21s-6.716-4.35-9.428-7.062C.24 11.607.5 8.5 2.8 6.8 4.6 5.5 7.2 6 8.5 7.5L12 11l3.5-3.5c1.3-1.5 3.9-2 5.7-.7 2.3 1.7 2.56 4.8.228 7.138C18.716 16.65 12 21 12 21z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
