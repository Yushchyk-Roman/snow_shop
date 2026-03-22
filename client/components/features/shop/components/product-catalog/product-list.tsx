import ProductCard from "./product-card";
import { Product } from "@/types/product";

export const ProductList = ({
  products,
  viewMode,
}: {
  products: Product[];
  viewMode: "grid" | "list";
}) => {
  return (
    <div
      className={
        viewMode === "grid"
          ? "grid grid-cols-2 gap-y-8 gap-x-6"
          : "flex flex-col gap-6"
      }
    >
      {products.map((item: Product) => {
        return <ProductCard key={item.id} product={item} viewMode={viewMode} />;
      })}
    </div>
  );
};
