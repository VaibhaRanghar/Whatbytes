import ProductsListing from "@/components/ProductsListing";
import Sidebar from "@/components/Sidebar";

export default async function Home() {
  return (
    <main className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-row gap-0 lg:gap-6">
        <Sidebar />
        <section className="flex-1">
          <ProductsListing />
        </section>
      </div>
    </main>
  );
}
