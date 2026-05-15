export type CategoryId = string;

export interface Category {
  id: CategoryId;
  name: string;
  items: Set<string>;
}

export type CategoryMap = Map<CategoryId, Category>;
