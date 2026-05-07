import type { Item } from "../utils";

interface ItemInfoProps {
  item: Item;
}

export function ItemInfo({ item }: ItemInfoProps) {
  return (
    <div className="bg-white rounded-sm border border-gray-400 px-5 py-10 shadow-md">
      <p className="font-bold text-2xl">{item.title}</p>
      <p className="text-sm text-gray italic">{item.subtitle}</p>
      <br />
      <div>
        <span className="font-semibold">Roles:</span>{" "}
        <span className="text-sm text-gray italic">{item.audience}</span>
      </div>
      <br />
      <div>
        <span className="font-semibold text-lg">Description</span>
        <p>{item.description}</p>
      </div>
      <br />
      <a href={item.link} target="_blank">
        <button className="p-2 bg-ud-darkBlue rounded-md text-white font-medium shadow-md cursor-pointer hover:scale-105 duration-75">
          Go To
        </button>
      </a>
    </div>
  );
}
