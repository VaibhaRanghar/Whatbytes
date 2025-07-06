import ProductsListing from "@/components/ProductsListing";
import Sidebar from "@/components/Sidebar";

export default async function Home() {
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="grid grid-cols-[auto_1fr] min-h-screen text-white">
        <Sidebar />
        <section className="">
          <ProductsListing />
        </section>
      </div>
    </div>
  );
}
