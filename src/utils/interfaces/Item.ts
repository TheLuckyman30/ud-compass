export type ItemId = string;

export interface Item {
  id: ItemId;
  title: string;
  subtitle: string;
  description: string;
  audience: string;
  contactInfo: string;
  redirectLink: string;
  link: string;
}

export type ItemMap = Map<ItemId, Item>;
