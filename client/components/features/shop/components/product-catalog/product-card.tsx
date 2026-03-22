import Star from "@/components/ui/stars";
import Image from "next/image";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  viewMode?: "grid" | "list";
}

export default function ProductCard({ product, viewMode = "grid" }: ProductCardProps) {
  return (
    <div
      className={`border border-white/20 rounded-2xl group hover:border-add-color/80 transition-all duration-700 ease-in-out flex ${
        viewMode === "list" ? "flex-row h-72 w-full" : "flex-col h-160 w-full"
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          viewMode === "list" ? "h-full w-2/5 rounded-l-2xl" : "h-110 w-full rounded-t-2xl"
        }`}
      >
        <Image
          draggable="false"
          src={product.images[0]}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-transform group-hover:scale-110 duration-700 ${
            viewMode === "list" ? "rounded-l-2xl" : "rounded-t-2xl"
          }`}
        />
        <div className="flex absolute gap-2 top-4 left-4 text-sm">
          {product.badges?.map((badge: string, index: number) => (
            <p
              key={index}
              className={`uppercase px-4 py-1 rounded-xl text-white ${
                badge.toLowerCase() === "trending" ? "bg-future-grad" : "bg-add-color"
              }`}
            >
              {badge}
            </p>
          ))}
        </div>
        <div
          className="p-2 bg-black/60 rounded-md absolute top-4 right-4 opacity-0 
        group-hover:opacity-100 duration-700 cursor-pointer hover:bg-add-color ease-in-out hover:-scale-110 hover:shadow-[0_0_20px_rgba(1,168,197,0.4)]"
        >
          <Eye />
        </div>
        <div
          className="absolute bottom-4 right-4 flex items-center gap-2 
        opacity-0 group-hover:opacity-100 duration-700
        "
        >
          <div className="p-2 bg-black/60 rounded-md cursor-pointer hover:bg-add-color duration-500 ease-in-out hover:scale-110">
            <Heart />
          </div>
          <div className="p-2 rounded-md bg-add-color cursor-pointer hover:scale-110">
            <ShoppingCart />
          </div>
        </div>
      </div>

      <div
        className={`flex flex-col ${
          viewMode === "list" ? "w-3/5 p-8 justify-center gap-4" : "px-6 py-4 gap-2"
        }`}
      >
        <p className="text-add-color font-medium uppercase">{product.brand}</p>
        <h4 className="text-2xl font-medium">{product.title}</h4>
        <div className="flex gap-2 text-white/50 mb-2">
          {product.attributes?.terrain?.map((item: string, index: number) => (
            <p key={index} className="bg-filter-bg px-2 py-1 border border-white/20 rounded-lg ">
              {item}
            </p>
          ))}
        </div>
        <hr className="text-white/20" />
        <div className="flex justify-between items-center gap-2 mt-2">
          <Star />
          <p className="text-2xl font-bold">
            $<span>{product.price}</span>
          </p>
        </div>
      </div>
    </div>
  );
}