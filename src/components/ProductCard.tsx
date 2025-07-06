"use client";
import Image from "next/image";
import Link from "next/link";

import { useCart } from "@/context/CartContext";

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

function ProductCard({ product }: { product: Product }) {
  const { addToCart, cart, deleteCartItem } = useCart();
  const { title, price, image, id } = product;
  const isInCart = cart.some((item: Product) => item.id === id);
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); 
    if (isInCart) {
      deleteCartItem(id);
    } else {
      addToCart(product);
    }
  };
  return (
    <div className="rounded-md p-2 bg-slate-50 m-2 hover:scale-110 transition-all duration-300 ease-in-out ">
      <Link href={"#"} className="flex flex-col justify-between min-h-full">
        <div>
          <Image src={image} alt="Product Image" height={300} width={300} />
          <p className="text-wrap font-semibold">{title}</p>
          <p className="font-bold text-lg">${price}</p>
        </div>
        <button
          onClick={handleClick}
          className={`mt-3 px-3 py-2 rounded-md text-white ${
            isInCart
              ? "bg-green-600 hover:bg-red-600"
              : "bg-blue-900 hover:bg-blue-600"
          }`}
        >
          {isInCart ? "Added" : "Add to Cart"}
        </button>
      </Link>
    </div>
  );
}

export default ProductCard;
