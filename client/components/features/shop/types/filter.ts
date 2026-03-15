export type FilterItem = {
  label: string;
  value: string;
};

export type FilterSection = {
  id: string;
  title: string;
  items: FilterItem[];
};

export interface FilterOption {
  name: string;
  count: number;
}

export interface FiltersResponse {
  price: { min: number; max: number };
  brands: FilterOption[];
  categories: FilterOption[];
}
