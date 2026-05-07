import { ItemInfo } from "../../components";
import { useGeneralStoe } from "../../utils/zustand/general-store";

export function Resoruce() {
  const selectedItem = useGeneralStoe((state) => state.selectedItem);
  const setCurrentPage = useGeneralStoe((state) => state.setCurrentPage);

  return (
    <div className="flex flex-col max-w-7xl mx-auto gap-5">
      <button
        className="p-2 text-xs bg-ud-darkBlue rounded-md text-white font-medium shadow-md cursor-pointer hover:scale-105 duration-75 w-fit"
        onClick={() => setCurrentPage(1)}
      >
        Go Back
      </button>
      <ItemInfo item={selectedItem} />
    </div>
  );
}
