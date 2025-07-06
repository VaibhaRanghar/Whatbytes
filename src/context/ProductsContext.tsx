"use client";

import { createContext, useContext, useEffect, useState } from "react";
import mockProducts from "@/data/MockData";
import { Product } from "@/components/ProductCard";

type PriceRange = [number, number];

interface FilterState {
  categories: string[];
  priceRange: PriceRange;
  search: string;
}

interface ProductsContextType {
  products: Product[];
  filteredProducts: Product[];
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  resetFilters: () => void;
}

const ProductsContext = createContext<ProductsContextType | null>(null);

export const ProductsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products] = useState<Product[]>(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: [0, 1000],
    search: "",
  });

  const resetFilters = () => {
    setFilters({ categories: [], priceRange: [0, 10000], search: "" });
  };

  useEffect(() => {
    const [min, max] = filters.priceRange;
    const categoriesToMatch = filters.categories.includes("All")
      ? []
      : filters.categories;
    const search = filters.search?.toLowerCase();

    const result = products.filter((p) => {
      const matchCat =
        !categoriesToMatch.length || categoriesToMatch.includes(p.category);
      const matchPrice = p.price >= min && p.price <= max;
      const matchSearch = p.title.toLowerCase().includes(search);
      return matchCat && matchPrice && matchSearch;
    });

    setFilteredProducts(result);
  }, [products, filters]);

  return (
    <ProductsContext.Provider
      value={{ products, filteredProducts, filters, setFilters, resetFilters }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const ctx = useContext(ProductsContext);
  if (!ctx) throw new Error("useProducts must be used within ProductsProvider");
  return ctx;
};
