/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiCart, BiSearch } from "react-icons/bi";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

function Header() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const showSearch = pathname.endsWith("/") || pathname.endsWith("cart");

  useEffect(() => {
    function handleURL() {
      const timer = setTimeout(() => {
        const params = new URLSearchParams(searchParams.toString());
        if (searchParams.has("search")) params.delete("search");
        if (search) params.set("search", search);
        router.replace(`${pathname}?${params.toString()}`);
      }, 500);
      return timer;
    }

    const timer = handleURL();
    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  return (
    <header className="flex items-center justify-between gap-4 px-4 py-3 shadow-md bg-white sticky top-0 z-10">
      <Link href={"/"}>
        <h1 className="text-xl font-bold ">LOGO</h1>
      </Link>

      {showSearch ? (
        <div className="relative flex-grow max-w-sm">
          <BiSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full p-2 pl-10 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      ) : null}
      
      <Link
        href="/cart"
        className="flex items-center gap-2 px-4 py-2 bg-blue-950 text-white rounded-md hover:bg-blue-800 transition"
      >
        <BiCart size={20} /> <span className="hidden sm:inline">Cart</span>
      </Link>
    </header>
  );
}

export default Header;
