import React, { useState } from "react";
import { Product } from "./ProductCard";
import { useCart } from "@/context/CartContext";

function AddToCart({
  product,
  quantity,
}: {
  product: Product | null;
  quantity?: number;
}) {
  const [hover, setHover] = useState(false);
  const { addToCart, cart, deleteCartItem } = useCart();

  if (!product) return;

  const isInCart = cart.some((item: Product) => item.id === product?.id);
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isInCart) {
      deleteCartItem(product.id);
    } else {
      addToCart(product, quantity);
    }
  };
  
  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`mt-3 px-3 py-2 rounded-md text-white ${
        isInCart
          ? "bg-green-600 hover:bg-red-600"
          : "bg-blue-900 hover:bg-blue-600"
      }`}
    >
      {isInCart
        ? hover
          ? "Remove from Cart"
          : "Added to Cart"
        : "Add to Cart"}
    </button>
  );
}

export default AddToCart;
