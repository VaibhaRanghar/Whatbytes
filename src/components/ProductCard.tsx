"use client";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "./AddToCart";

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  quantity?: number;
}

function ProductCard({ product }: { product: Product }) {
  const { title, price, image } = product;
  return (
    <Link
      href={`/product/${product.id}`}
      className="group flex flex-col justify-between bg-white rounded-lg shadow hover:shadow-lg transition duration-300 p-4"
    >
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className="object-cover rounded-lg mb-4 w-full h-48"
      />

      <div className="flex flex-col gap-1">
        <p className="font-semibold text-sm text-slate-700 line-clamp-2">
          {title}
        </p>
        <p className="font-bold text-blue-900 text-lg">${price}</p>
        <AddToCart product={product} />
      </div>
    </Link>
  );
}

export default ProductCard;
