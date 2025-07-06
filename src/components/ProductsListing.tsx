"use client";
import ProductCard, { Product } from "./ProductCard";
import { useProducts } from "@/context/ProductsContext";

function ProductsListing() {
  const { products } = useProducts();
  if (!products || products.length === 0) {
    return <p className="text-center p-4">Loading products...</p>;
  }
  return (
    <div className="text-black p-5">
      <h1>Product Listing</h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2">
        {products.map((p: Product) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default ProductsListing;
