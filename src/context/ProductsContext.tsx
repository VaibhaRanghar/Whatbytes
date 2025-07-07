// context/ProductsContext.tsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams, usePathname } from "next/navigation";
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
  getProductById: (id: number) => Product | null;
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

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const cat = searchParams.get("category")?.split(",") || [];
    const search = searchParams.get("search") || "";
    const priceParam = searchParams.get("price")?.split("-").map(Number);
    const priceRange: PriceRange =
      priceParam?.length === 2 ? [priceParam[0], priceParam[1]] : [0, 1000];

    const newFilters: FilterState = {
      categories: cat,
      priceRange,
      search,
    };
    setFilters(newFilters);
  }, [pathname, searchParams]);

  useEffect(() => {
    const [min, max] = filters.priceRange;
    const cats = filters.categories.includes("All") ? [] : filters.categories;
    const searchText = filters.search.toLowerCase();

    const result = products.filter((p) => {
      const matchCat = !cats.length || cats.includes(p.category);
      const matchPrice = p.price >= min && p.price <= max;
      const matchSearch = p.title.toLowerCase().includes(searchText);
      return matchCat && matchPrice && matchSearch;
    });

    setFilteredProducts(result);
  }, [filters, products]);

  const getProductById = (id: number) => {
    return products.find((p) => p.id === id) || null;
  };

  return (
    <ProductsContext.Provider
      value={{ products, filteredProducts, filters, getProductById }}
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
