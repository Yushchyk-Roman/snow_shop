import Header from "../components/layout/header";
import Hero from "../components/home/hero";
import Catalog from "@/components/home/tranding-collection";
import Footer from "@/components/layout/footer";
export default function Home() {
  return (
    <div className="flex flex-col gap-20 ">
      <Header></Header>
      <Hero></Hero>
      <Catalog />

      <hr className="text-white/20" />
      <Footer />
    </div>
  );
}
