import ProductCard from "./product-card";
import { Product } from "@/types/product";

export const ProductList = ({products}: {products: Product[]}) => {
  return (
    <div className="grid grid-cols-2 gap-y-8">
      {products.map((item: Product) => {
        return <ProductCard key={item.id} product={item} />;
      })}
    </div>
  );
};
