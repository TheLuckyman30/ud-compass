import { CategoryCard } from "@components";
import resources from "@data/resources.json";
import "@css/pages/home.css";

export function Home() {
  return (
    <section className="home">
      <div className="h-cat-container">
        <p className="h-cat-header">Categories</p>
        <div className="h-categories">
          {resources.map((resource) => (
            <CategoryCard category={resource} />
          ))}
        </div>
      </div>
    </section>
  );
}
