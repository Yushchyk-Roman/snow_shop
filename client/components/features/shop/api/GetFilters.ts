import { FiltersResponse } from "../types/filter";

export const GetFilters = async (): Promise<FiltersResponse> => {
  const res = await fetch("http://localhost:4200/products/filters", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw Error("Не вдалося завантажити фільтри");
  }

  return res.json();
};
