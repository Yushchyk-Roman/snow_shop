export type FilterItem = {
  label: string;
  value: string;
};

export type FilterSection = {
  id: string;
  title: string;
  items: FilterItem[];
};
