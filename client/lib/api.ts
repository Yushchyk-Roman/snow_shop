import { FOOTER_LIST, FILTER_CONFIG, PRODUCTS } from "@/lib/data";
import { Product } from "@/types/product";
import { FilterSection } from "@/components/features/shop/types/filter";
import { FooterList } from "@/types/footer";

const simulateFetch = async <T>(data: T): Promise<T> => {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return data;
};

export const getProducts = () => simulateFetch<Product[]>(PRODUCTS);

export const getFilters = () => simulateFetch<FilterSection[]>(FILTER_CONFIG);

export const getFooter = () => simulateFetch<FooterList[]>(FOOTER_LIST);
