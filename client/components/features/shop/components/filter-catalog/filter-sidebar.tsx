import { FiltersResponse } from "../../types/filter";
import { FilterItem } from "./filter-item";


export default function FilterSidebar({
  filters,
}: {
  filters: FiltersResponse;
}) {
  return (
    <aside className="w-full col-span-2 ">
      <p className="text-2xl font-bold mb-8">Filters</p>
      <div className="border border-white/10 rounded-2xl bg-filter-bg mb-8">
        <div className="m-8">

      <FilterItem items={filters.brands} name='brands'/>
      <FilterItem items={filters.categories} name='categories'/>
        </div>
      </div>

      <div className="flex flex-col border border-white/10 rounded-2xl bg-filter-bg p-8">
        <p className="mb-6 text-lg font-semibold">Price Range</p>

        <div className="flex items-center gap-6 text-white/70">
          <input
            type="number"
            defaultValue={filters.price.min || 0}
            placeholder="Min"
            className="w-1/3 border border-white/10 rounded-lg bg-filter-bg h-10 pl-4"
          />
          <span className="">-</span>
          <input
            type="number"
            defaultValue={filters.price.max || 1000}
            placeholder="Max"
            className="w-1/3 border border-white/10 rounded-lg bg-filter-bg h-10 pl-4"
          />
        </div>
      </div>
    </aside>
  );
}
