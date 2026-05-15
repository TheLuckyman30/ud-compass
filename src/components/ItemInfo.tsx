import type { Item } from "@utils/interfaces";
import { ColorHeart } from "./ColorHeart";
import { useGeneralStore } from "@utils/zustand";
import "@css/components/item-info.css";

interface ItemInfoProps {
  item: Item;
}

export function ItemInfo({ item }: ItemInfoProps) {
  const favoriteItems = useGeneralStore((state) => state.favoriteItems);
  const updateFavItems = useGeneralStore((state) => state.updateFavItems);
  const isFavorited = favoriteItems.has(item.id);

  const handleFavUpdate = () => {
    updateFavItems(item.id);
  };

  return (
    <div className="item-info-card">
      <div className="iic-header">
        <div className="iic-title-container">
          <h1 className="iic-item-title">{item.title}</h1>
          <div onClick={handleFavUpdate}>
            <ColorHeart fillColor={isFavorited} />
          </div>
        </div>

        {item.subtitle && <p className="iic-item-subtitle">{item.subtitle}</p>}
      </div>
      <div className="iic-main-content">
        <div>
          <p className="iic-audience-header">Audience</p>
          <div className="iic-audience-chip">{item.audience}</div>
        </div>
        <div>
          <h2 className="iic-description-header">Description</h2>
          <p className="iic-description">{item.description}</p>
        </div>
      </div>
      <div className="iic-link-container">
        <a href={item.link} target="_blank">
          <button className="iic-link">Go Now →</button>
        </a>
      </div>
    </div>
  );
}
