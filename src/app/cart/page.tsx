"use client";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";

function Cart() {
  const { filteredCart } = useCart();

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto bg-slate-50 rounded-xl min-h-full">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">Cart</h1>

      {filteredCart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredCart.map((c, i) => (
            <ProductCard product={c} key={i} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
