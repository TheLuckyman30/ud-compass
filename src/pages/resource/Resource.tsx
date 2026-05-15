import { ItemInfo } from "@components";
import { PAGES } from "@utils/constants";
import { useGeneralStoe } from "@utils/zustand";
import "@css/pages/resource.css";

export function Resource() {
  const selectedItem = useGeneralStoe((state) => state.selectedItem);
  const setCurrentPage = useGeneralStoe((state) => state.setCurrentPage);

  return (
    <div className="resource">
      <button
        className="res-back"
        onClick={() => setCurrentPage(PAGES.Category)}
      >
        ← Go Back
      </button>
      <ItemInfo item={selectedItem} />
    </div>
  );
}
