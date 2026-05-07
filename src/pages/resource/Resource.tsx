import { ItemInfo } from "../../components";
import { useGeneralStoe } from "../../utils/zustand/general-store";

export function Resoruce() {
  const selectedItem = useGeneralStoe((state) => state.selectedItem);

  return (
    <div className="flex w-full justify-center">
      <ItemInfo item={selectedItem} />
    </div>
  );
}
