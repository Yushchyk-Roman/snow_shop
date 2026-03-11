import Image from "next/image";
import ProductCard from "./product-card";
import { Product } from "@/types/product";

export const ProductList = async () => {
  const res = await fetch("http://localhost:4200/products", {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error("Щось пішло не так");
  }

  const goods: Product[] = await res.json();

  return (
    <div className="grid grid-cols-2 gap-y-8">
      {goods.map((item) => {
        return <ProductCard key={item.id} product={item} />;
      })}
    </div>
  );
};
