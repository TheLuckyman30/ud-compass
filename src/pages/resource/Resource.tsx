import { ItemInfo } from "@components";
import { PAGES } from "@utils/constants";
import { useGeneralStore } from "@utils/zustand";
import "@css/pages/resource.css";

export function Resource() {
  const allItems = useGeneralStore((state) => state.allItems);
  const selectedItemId = useGeneralStore((state) => state.selectedItemId);
  const setCurrentPage = useGeneralStore((state) => state.setCurrentPage);
  const item = allItems.get(selectedItemId);

  if (!item) return null;

  return (
    <div className="resource">
      <button
        className="res-back"
        onClick={() => setCurrentPage(PAGES.Category)}
      >
        ← Go Back
      </button>
      <ItemInfo item={item} />
    </div>
  );
}
