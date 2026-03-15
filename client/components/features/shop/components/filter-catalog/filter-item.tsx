"use client";

import { FilterOption } from "../../types/filter";
import { ChevronUp, ChevronDown } from "lucide-react";
import Checkbox from "@/components/ui/checkbox";
import { useState } from "react";

export const FilterItem = ({ items, name }: { items: FilterOption[]; name: string}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
 {console.log(items)}
  return (
    <div className="mb-8">
      <div className="flex gap-4 justify-between  mb-4 cursor-pointer" onClick={handleClick}>
        <h4 className="text-lg font-semibold capitalize">{name}</h4>
        {isOpen ? <ChevronDown/> : <ChevronUp/>}
      </div>
     
    {isOpen && (
      items.map((item) => {
        return (
          <div key={item.name} className="flex items-center pointer gap-2 mb-4 group transition-all cursor-pointer">
            <Checkbox />
            <p className="text-white/50 text-lg font-medium group-hover:text-white duration-400 ease-in-out ">
              {item.name}
            </p>
          </div>
        );
      })
    )}

      <hr className="text-white/20" />
    </div>
  );
};
