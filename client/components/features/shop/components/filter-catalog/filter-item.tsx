"use client";

import { FilterOption } from "../../types/filter";
import { ChevronUp, ChevronDown } from "lucide-react";
import Checkbox from "@/components/ui/checkbox";
import { useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export const FilterItem = ({
  items,
  name,
}: {
  items: FilterOption[];
  name: string;
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const paramKey = name.toLowerCase();

  const handleCheck = (itemName: string) => {
    const currentParams = new URLSearchParams(
      Array.from(searchParams.entries()),
    );

    const activeValues = currentParams.getAll(paramKey);

    if (activeValues.includes(itemName)) {
      currentParams.delete(paramKey, itemName);
    } else {
      currentParams.append(paramKey, itemName);
    }

    router.push(`${pathname}?${currentParams.toString()}`, { scroll: true });
  };

  return (
    <div className="mb-8">
      <div
        className="flex gap-4 justify-between  mb-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="text-lg font-semibold capitalize">{name}</h4>
        {isOpen ? <ChevronDown /> : <ChevronUp />}
      </div>

      {isOpen &&
        items.map((item) => {
          const isActive = searchParams.getAll(paramKey).includes(item.name);
          return (
            <div
              key={item.name}
              onClick={() => handleCheck(item.name)}
              className="flex items-center pointer gap-2 mb-4 group transition-all cursor-pointer"
            >
              <Checkbox checked={isActive} />
              <p className="text-white/50 text-lg font-medium group-hover:text-white duration-400 ease-in-out ">
                {item.name}
              </p>
            </div>
          );
        })}

      <hr className="text-white/20" />
    </div>
  );
};
