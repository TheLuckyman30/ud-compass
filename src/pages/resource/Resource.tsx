import { ItemInfo } from "@components";
import { PAGES } from "@utils/constants";
import { useGeneralStoe } from "@utils/zustand";

export function Resource() {
  const selectedItem = useGeneralStoe((state) => state.selectedItem);
  const setCurrentPage = useGeneralStoe((state) => state.setCurrentPage);

  return (
    <div className="flex flex-col max-w-7xl mx-auto gap-5">
      <button
        className="p-2 text-xs bg-ud-darkBlue rounded-md text-white font-medium shadow-md cursor-pointer hover:scale-105 duration-75 w-fit"
        onClick={() => setCurrentPage(PAGES.Category)}
      >
        Go Back
      </button>
      <ItemInfo item={selectedItem} />
    </div>
  );
}
