"use client";
import AddToCart from "@/components/AddToCart";
import { useCart } from "@/context/CartContext";
import { useProducts } from "@/context/ProductsContext";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function ProductDetails() {
  const params = useParams<{ id: string }>();
  const { getProductById } = useProducts();
  const { getCartItemById } = useCart();
  const cart = getCartItemById(Number(params.id));
  const product = getProductById(Number(params.id));
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (cart) setQuantity(cart.quantity);
  }, [cart]);

  if (!product)
    return (
      <div>
        <h1>No product found with id {params.id}</h1>
      </div>
    );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 max-w-6xl mx-auto">
      <div className="flex flex-col gap-4">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          className="rounded shadow"
        />
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-blue-900">{product.title}</h1>
        <p className="text-lg text-green-600 font-semibold">₹{product.price}</p>
        <p className="text-gray-700">{product.description}</p>
        <p className="text-sm text-slate-500">Category: {product.category}</p>

        {/* Quantity Selector */}
        <div className="flex items-center gap-2">
          <label htmlFor="qty" className="text-sm">
            Qty:
          </label>
          <input
            id="qty"
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-16 border rounded px-2 py-1"
          />
        </div>

        <AddToCart product={product} quantity={quantity} />
      </div>
    </div>
  );
}

export default ProductDetails;
