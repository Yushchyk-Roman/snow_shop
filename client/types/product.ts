export type Product = {
    id: number,
  title: string;
  slug: string;
  brand: string;
  description: string;
  category: string;
  price: number;
  oldPrice: number;
  stock: number;
  images: string[];
  badges: string[];
  attributes: Record<string, any>;
}