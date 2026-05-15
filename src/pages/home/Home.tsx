import { CategoryCard, ItemCard } from "@components";
import { useGeneralStore } from "@utils/zustand";
import "@css/pages/home.css";

export function Home() {
  const allCategories = useGeneralStore((state) => state.allCategories);
  const favoriteItems = useGeneralStore((state) => state.favoriteItems);
  const favItemsArray = Array.from(favoriteItems.values());
  const categoryArray = Array.from(allCategories.values());

  return (
    <section className="home">
      <div className="h-sections">
        <div>
          <div className="h-container">
            <p className="h-header">Favorites</p>
            <div className="h-cards">
              {favItemsArray.map((item) => (
                <ItemCard item={item} />
              ))}
              {favItemsArray.length === 0 && (
                <p className="h-no-fav-text">Nothing Favorited!</p>
              )}
            </div>
          </div>
        </div>
        <div className="h-container">
          <p className="h-header">Categories</p>
          <div className="h-cards">
            {categoryArray.map((category) => (
              <CategoryCard category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
