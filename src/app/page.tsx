import ProductsListing from "@/components/ProductsListing";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="grid grid-cols-[auto_1fr] min-h-screen text-white">
      <Sidebar />
      <section className="">
        <ProductsListing />
      </section>
    </div>
  );
}
