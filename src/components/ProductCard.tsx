"use client";
import Image from "next/image";
import Link from "next/link";

import { useCart } from "@/context/CartContext";

export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { title, price, images } = product;
  return (
    <div className="rounded-md p-2 bg-slate-50 m-2 hover:scale-110 transition-all duration-300 ease-in-out ">
      <Link href={"#"} className="flex flex-col justify-between min-h-full">
        <div>
          <Image src={images[0]} alt="Product Image" height={200} width={200} />
          <p className="text-wrap">{title}</p>
          <p>${price}</p>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="px-3 py-2 bg-blue-900 text-white rounded-md align-bottom"
        >
          Add to Cart
        </button>
      </Link>
    </div>
  );
}

export default ProductCard;
