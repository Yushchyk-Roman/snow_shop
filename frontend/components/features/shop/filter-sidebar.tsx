import { FilterSection } from "@/app/types/filter";
import Checkbox from "@/components/ui/checkbox";
import { ChevronUp, ChevronDown } from "lucide-react";

const FILTER_CONFIG: FilterSection[] = [
  {
    id: "stiffness",
    title: "Stiffness",
    items: [
      { label: "Soft (1-3)", value: "soft" },
      { label: "Medium (4-6)", value: "mediun" },
      { label: "Stiff (7-10)", value: "stiff" },
    ],
  },
  {
    id: "camber_profile",
    title: "Camber Profile",
    items: [
      { label: "Traditional Camber", value: "traditional_camber" },
      { label: "Rocker", value: "rocket" },
      { label: "Flat", value: "flat" },
      { label: "Hybrid", value: "hybrid" },
    ],
  },
  {
    id: "shape",
    title: "Shape",
    items: [
      { label: "Directional", value: "directional" },
      { label: "True Twin", value: "true_twin" },
      { label: "Directional Twin", value: "directional_twin" },
      { label: "Asymmetric", value: "asymmetric" },
    ],
  },
  {
    id: "terrain",
    title: "Terrain",
    items: [
      { label: "All-Mountain", value: "all_mountain" },
      { label: "Freestyle", value: "freestyle" },
      { label: "Freeride", value: "freeride" },
      { label: "Powder", value: "powder" },
      { label: "Park", value: "park" },
    ],
  },
];

export default function FilterSidebar() {
  return (
    <aside className="w-full sticky top-32 h-[calc(100vh-6rem)] col-span-2 ">
      <p className="text-2xl font-bold mb-8">Filters</p>
      <div className="border border-white/10 rounded-2xl bg-filter-bg mb-8">
        <div className="m-8">
          {FILTER_CONFIG.map((filter_categories) => {
            return (
              <div className="mb-8">
                <div className="flex gap-4 justify-between  mb-4">
                  <h4
                    key={filter_categories.id}
                    className="text-lg font-semibold"
                  >
                    {filter_categories.title}
                  </h4>
                  <ChevronUp />
                </div>

                {filter_categories.items.map((filter_item) => {
                  return (
                    <div className="flex items-center pointer gap-2 mb-4 group transition-all cursor-pointer">
                      <Checkbox />
                      <p
                        key={filter_item.value}
                        className="text-white/50 text-lg font-medium group-hover:text-white duration-400 ease-in-out "
                      >
                        {filter_item.label}
                      </p>
                    </div>
                  );
                })}

                <hr className="text-white/20" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col border border-white/10 rounded-2xl bg-filter-bg p-8">
        <p className="mb-6 text-lg font-semibold">Price Range</p>

        <div className="flex items-center gap-6 text-white/70">
          <input
            type="number"
            placeholder="Min"
            className="w-1/3 border border-white/10 rounded-lg bg-filter-bg h-10 pl-4"
          />
          <span className="">-</span>
          <input
            type="number"
            placeholder="Max"
            className="w-1/3 border border-white/10 rounded-lg bg-filter-bg h-10 pl-4"
          />
        </div>
      </div>
    </aside>
  );
}
