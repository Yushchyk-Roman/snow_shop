import { Product } from "@/types/product";

export const GetProducts = async (): Promise<Product[]> => {
  const res = await fetch("http://localhost:4200/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw Error("Не вдалося отримати дані продуктів");
  }

  return res.json();
};
