import { Select } from "@mantine/core";
import resources from "@data/resources.json";
import { useGeneralStoe } from "@utils/zustand";
import type { Item } from "@utils/interfaces";
import "@mantine/core/styles.css";

interface SearchItem {
  value: number;
  label: string;
}

export function Search() {
  const setSelectedItem = useGeneralStoe((state) => state.setSelectedItem);
  const setCurrentPage = useGeneralStoe((state) => state.setCurrentPage);
  const searchMap = new Map<number, Item>();
  const allItems: SearchItem[] = [];
  let index = 0;
  resources.forEach((resource) =>
    resource.items.forEach((item) => {
      const newSearchItem = { value: index, label: item.title };
      searchMap.set(index, item);
      allItems.push(newSearchItem);
      index++;
    }),
  );

  const handleChange = (value: number | null) => {
    if (value) {
      const selectedItem = searchMap.get(value);
      if (selectedItem) {
        setSelectedItem(selectedItem);
        setCurrentPage(2);
      }
    }
  };

  return (
    <Select
      placeholder="Search"
      data={allItems}
      searchable
      onChange={(value) => handleChange(value)}
    />
  );
}
