import { CategoryCard } from "../../components";
import resources from "../../data/resources.json";

export function Home() {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <p className="font-medium text-3xl text-gray">CATEGORIES</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {resources.map((resource) => (
            <CategoryCard category={resource} />
          ))}
        </div>
      </div>
    </section>
  );
}
