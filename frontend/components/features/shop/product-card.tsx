import Star from "@/components/ui/stars";
import Image from "next/image";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { Product } from "@/types/product";


interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div
      className=" border border-white/20 rounded-2xl h-160 w-100 group
      hover:border-add-color/80 transition-all duration-700 ease-in-out
      "
    >
      <div className="h-110 w-full relative overflow-hidden rounded-t-2xl ">
        <Image
          draggable="false"
          src={product.image}
          alt={product.title}
          fill
          className="object-cover rounded-t-2xl transition-transform group-hover:scale-110 duration-700"
        />
        <div className="flex absolute gap-2 top-4 left-4 text-sm">
          {product.badges.map((badge: string, index: number) => (
            <p 
              key={index} 
              className={`uppercase px-4 py-1 rounded-xl text-white ${badge.toLowerCase() === 'trending' ? 'bg-future-grad' : 'bg-add-color'}`}
            >
              {badge}
            </p>
          ))}
        </div>
        <div className="p-2 bg-black/60 rounded-md absolute top-4 right-4 opacity-0 
        group-hover:opacity-100 duration-700 cursor-pointer hover:bg-add-color ease-in-out hover:-scale-110 hover:shadow-[0_0_20px_rgba(1,168,197,0.4)]">
          <Eye />
        </div>
        <div className="absolute bottom-4 right-4 flex items-center gap-2 
        opacity-0 group-hover:opacity-100 duration-700
        ">
          <div className="p-2 bg-black/60 rounded-md cursor-pointer hover:bg-add-color duration-500 ease-in-out hover:scale-110">
            <Heart />
          </div>
          <div className="p-2 rounded-md bg-add-color cursor-pointer hover:scale-110">
            <ShoppingCart />
          </div>
        </div>
      </div>

      <div className="px-6 py-4 flex flex-col gap-2 ">
        <p className="text-add-color font-medium  uppercase">{product.brand}</p>
        <h4 className="text-2xl font-medium">{product.title}</h4>
        <div className="flex gap-2 text-white/50 mb-2">
          {product.specs.map((spec: string, index: number) => (
            <p key={index} className="bg-filter-bg px-2 py-1 border border-white/20 rounded-lg ">
              {spec}
            </p>
          ))}
        </div>
        <hr className="text-white/20" />
        <div className="flex justify-between items-center gap-2 mt-2">
          <Star/>
          <p className="text-2xl font-bold">
            $<span>{product.price}</span>
          </p>
        </div>
      </div>
    </div>
  );
}