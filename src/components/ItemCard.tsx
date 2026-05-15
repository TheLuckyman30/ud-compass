import { useGeneralStore } from "@utils/zustand";
import { PAGES } from "@utils/constants";
import type { Item } from "@utils/interfaces";
import { ColorHeart } from "./ColorHeart";
import "@css/components/item-card.css";
import { Info } from "lucide-react";

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
    e.preventDefault();
    updateFavItems(item.id);
  };

  const handleChanePage = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setCurrentPage(PAGES.Resource);
    setSelectedItem(item.id);
  };

  return (
    <a href={item.link} target="__blank">
      <div className="item-card">
        <div className="flex-1">
          <p className="ic-item-title">{item.title}</p>
          {item.subtitle && <p className="ic-item-subtitle">{item.subtitle}</p>}
        </div>
        <div className="ic-icons">
          <div onClick={handleChanePage}>
            <Info className="hover:scale-115 duration-150 cursor-pointer" />
          </div>
          <div onClick={handleFavUpdate}>
            <ColorHeart fillColor={isFavorited} />
          </div>
        </div>
      </div>
    </a>
  );
}
