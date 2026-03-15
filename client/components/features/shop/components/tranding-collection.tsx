import FilterSidebar from "@/components/features/shop/components/filter-catalog/filter-sidebar";
import ProductList from "./product-catalog/product-catalog";
import { GetFilters } from "../api/GetFilters";
import { GetProducts } from "../api/GetProducts";


export default async function Catalog() {

  const [filters, products] = await Promise.all([GetFilters(), GetProducts()]);
  return (
    <section className="max-w-360 w-full mx-auto mt-50">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-[64px] font-bold tracking-tight mb-4">
          Premium Collection
        </h2>
        <p className="text-xl w-2/3 tracking-normal text-zinc-400 text-center">
          Discover our curated selection of high-performance snowboards
          engineered for every riding style and terrain.
        </p>
      </div>

      <div className="grid grid-cols-7 gap-12 p-8">
        <FilterSidebar filters={filters} />
        <ProductList />
      </div>
    </section>
  );
}
