"use client";

import { useState } from "react";
import { Grid3x3, List } from "lucide-react";
import { ProductList } from "./product-list";
import { Product } from "@/types/product";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "low_to_high" },
  { label: "Price: High to Low", value: "high_to_low" },
  { label: "Highest Rated", value: "highest_rated" },
  { label: "Name: [A-Z]", value: "names_a_z" },
];

export default function ProductCatalog({ products }: { products: Product[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  const currentSort = searchParams.get("sort") || "featured";

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSort = e.target.value;
    const params = new URLSearchParams(searchParams.toString());

    if (newSort === "featured") {
      params.delete("sort");
    } else {
      params.set("sort", newSort);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const sortedProducts = [...products].sort((a, b) => {
    switch (currentSort) {
      case "low_to_high":
        return a.price - b.price;
      case "high_to_low":
        return b.price - a.price;
      case "featured":
      default:
        return 0;
    }
  });

  return (
    <section className="col-span-5">
      <div className="flex items-center justify-between px-8 h-20 border border-white/10 bg-filter-bg rounded-2xl mb-8">
        <p className="text-white/50">
          <span>{products.length}</span> products
        </p>

        <div className="flex gap-8">
          <select
            value={currentSort}
            onChange={handleSortChange}
            className="border border-white/10 rounded-lg px-4 bg-filter-bg cursor-pointer hover:text-main-clr transition-all duration-700 focus:text-white ease-in-out outline-none"
          >
            {SORT_OPTIONS.map((sort_option) => (
              <option key={sort_option.value} value={sort_option.value}>
                {sort_option.label}
              </option>
            ))}
          </select>

          <div className="flex gap-2 items-center">
            <div
              onClick={() => setViewMode("grid")}
              className={`rounded-md p-2 cursor-pointer transition-colors duration-300 ${
                viewMode === "grid" ? "bg-main-clr text-white" : "bg-black text-white/50 hover:text-white"
              }`}
            >
              <Grid3x3 />
            </div>
            <div
              onClick={() => setViewMode("list")}
              className={`rounded-md p-2 cursor-pointer transition-colors duration-300 ${
                viewMode === "list" ? "bg-main-clr text-white" : "bg-black text-white/50 hover:text-white"
              }`}
            >
              <List />
            </div>
          </div>
        </div>
      </div>
      <ProductList products={sortedProducts} viewMode={viewMode} />
    </section>
  );
}