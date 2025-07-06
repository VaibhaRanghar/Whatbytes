"use client";
import ProductCard, { Product } from "./ProductCard";
import { useProducts } from "@/context/ProductsContext";

function ProductsListing() {
  const { filteredProducts } = useProducts();
  if (!filteredProducts || filteredProducts.length === 0) {
    return <p className="text-center p-4">Loading products...</p>;
  }
  return (
    <div className="text-black p-5">
      <h1 className="mb-2">Product Listing</h1>
      <div className="grid grid-cols-[repeat(auto-fit,268px)] gap-2 overflow-y-scroll">
        {filteredProducts.map((p: Product) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default ProductsListing;
