import { Select } from "@mantine/core";
import { useGeneralStore } from "@utils/zustand";
import { PAGES } from "@utils/constants";
import type { ItemId } from "@utils/interfaces";
import "@mantine/core/styles.css";

interface SearchItem {
  value: ItemId;
  label: string;
}

export function Search() {
  const allItems = useGeneralStore((state) => state.allItems);
  const setSelectedItem = useGeneralStore((state) => state.setSelectedItem);
  const setCurrentPage = useGeneralStore((state) => state.setCurrentPage);
  const itemArray = Array.from(allItems.values());

  const searchArray: SearchItem[] = [];
  itemArray.forEach((item) => {
    const newSearchItem: SearchItem = { value: item.id, label: item.title };
    searchArray.push(newSearchItem);
  });

  const handleChange = (value: ItemId | null) => {
    if (value) {
      const selectedItem = allItems.get(value);
      if (selectedItem) {
        setSelectedItem(selectedItem.id);
        setCurrentPage(PAGES.Resource);
      }
    }
  };

  return (
    <Select
      placeholder="Search"
      data={searchArray}
      searchable
      onChange={(value) => handleChange(value)}
    />
  );
}
