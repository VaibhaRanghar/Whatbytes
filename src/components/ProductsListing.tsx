"use client";
import ProductCard, { Product } from "./ProductCard";
import { useProducts } from "@/context/ProductsContext";

function ProductsListing() {
  const { filteredProducts } = useProducts();
  if (!filteredProducts || filteredProducts.length === 0) {
    return <p className="text-center p-4">No products found.</p>;
  }
  return (
    <section className="p-4 sm:p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-blue-900">Product Listing</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((p: Product) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

export default ProductsListing;
