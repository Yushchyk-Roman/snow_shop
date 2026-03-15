import Header from "../components/layout/header";
import Hero from "../components/home/hero";
import Catalog from "@/components/features/shop/components/tranding-collection";
import Footer from "@/components/layout/footer";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  return (
    <div className="flex flex-col gap-20 ">
      <Header></Header>
      <Hero></Hero>
      <Catalog searchParams={resolvedParams} />

      <hr className="text-white/20" />
      <Footer />
    </div>
  );
}
