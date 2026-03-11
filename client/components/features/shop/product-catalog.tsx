import { Grid3x3, List } from "lucide-react";
import { ProductList } from "./product-list";

const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "low_to_high" },
  { label: "Price: High to Low ", value: "high_to_low" },
  { label: "Highest Rated", value: "highest_rated" },
  { label: "Name: [A-Z]", value: "names_a_z" },
];

export default function ProductCatalog() {

  return (
    <section className="col-span-5">
      <div
        className="flex items-center justify-between px-8 h-20 border
       border-white/10 bg-filter-bg rounded-2xl mb-8 "
      >
        <p className="text-white/50">
          <span>6</span> products
        </p>

        <div className="flex gap-8">
          <select
            className="border border-white/10 rounded-lg px-4 bg-filter-bg cursor-pointer
             hover:text-main-clr transition-all duration-700 focus:text-white ease-in-out"
            name=""
            id=""
          >
            {SORT_OPTIONS.map((sort_option) => {
              return (
                <option className="" value={sort_option.value}>
                  {sort_option.label}
                </option>
              );
            })}
          </select>

          <div className="flex gap-2 items-center">
            <div className="bg-main-clr rounded-md p-2 cursor-pointer">
              <Grid3x3 />
            </div>
            <div className=" rounded-md p-2 bg-black cursor-pointer">
              <List />
            </div>
          </div>
        </div>
      </div>
{/* 
      <div className="grid grid-cols-2 gap-y-8">
        {prouctsData.map((item) => {
          return <ProductCard key={item.id} product={item}/>;
        })}
      </div> */}

      <ProductList />
    </section>
  );
}
