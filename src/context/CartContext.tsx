"use client";

import { Product } from "@/components/ProductCard";
import { useSearchParams } from "next/navigation";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  deleteCartItem: (id: number) => void;
  getCartItemById: (id: number) => CartItem | null;
  filteredCart: CartItem[];
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [filteredCart, setFilteredCart] = useState<CartItem[]>(cart);
  const [filters, setFilters] = useState<string | "">("");

  const searchParams = useSearchParams();

  useEffect(() => {
    const items = localStorage.getItem("cart");
    if (items) setCart(JSON.parse(items));
  }, []);

  useEffect(() => {
    const search = searchParams.get("search") || "";
    setFilters(search);
  }, [searchParams]);

  useEffect(() => {
    const searchText = filters.toLowerCase();

    const result = cart.filter((p) => {
      const matchSearch = p.title.toLowerCase().includes(searchText);
      return matchSearch;
    });

    setFilteredCart(result);
  }, [filters, cart]);

  const addToCart = (product: Product, quantity: number = 1) => {
    const exist = cart.find((c) => c.id === product.id);
    let newCart: CartItem[] = [];
    if (exist)
      newCart = [
        ...cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        ),
      ];
    else newCart = [...cart, { ...product, quantity }];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const deleteCartItem = (id: number) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const getCartItemById = (id: number) => {
    return cart.find((c) => c.id === id) || null;
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, deleteCartItem, getCartItemById, filteredCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};
