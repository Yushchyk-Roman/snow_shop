import Header from "../components/layout/header";
import Hero from "../components/home/hero"
import Catalog from "@/components/home/tranding-collection";
export default function Home() {
  return (
  <div className="max-w-360 w-full mx-auto">
      <Header></Header>
      <Hero></Hero>
      <Catalog/>
  </div>
  );
}
