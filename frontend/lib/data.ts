import { FooterList } from "@/types/footer";
import { FilterSection } from "@/types/filter";
import { Product } from "@/types/product";

export const FOOTER_LIST: FooterList[] = [
  {
    id: "shop",
    title: "Shop",
    links: [
      { name: "All Boards" },
      { name: "New Arrivals" },
      { name: "Best Sellers" },
      { name: "Sale" },
    ],
  },
  {
    id: "support",
    title: "Support",
    links: [
      { name: "Contact Us" },
      { name: "Shipping Info" },
      { name: "Returns" },
      { name: "FAQ" },
    ],
  },
  {
    id: "connect",
    title: "Connect",
    links: [
      { name: "Instagram" },
      { name: "YouTube" },
      { name: "Facebook" },
      { name: "Twitter" },
    ],
  },
];

export const FILTER_CONFIG: FilterSection[] = [
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

export const PRODUCTS: Product[] = [
  {
    id: "1",
    brand: "Apex",
    title: "Artic Phantom Elite",
    price: 649,
    image: "/photo.jpg", 
    rating: 5,
    badges: ["Trending", "New"],
    specs: ["All-Mountain", "Traditional Camber"],
  },
  {
    id: "2",
    brand: "Nitro",
    title: "Park Destroyer Pro",
    price: 459,
    image: "/board-2.jpg",
    rating: 4,
    badges: ["Best Seller"],
    specs: ["Park", "Flat"],
  },
  {
    id: "3",
    brand: "Burton",
    title: "Custom X",
    price: 820,
    image: "/board-3.jpg",
    rating: 5,
    badges: [],
    specs: ["Freeride", "Camber"],
  },
];