import Link from "next/link";
import React from "react";
import { BiCart, BiSearch } from "react-icons/bi";

function Header() {
  return (
    <header>
      <h1>Logo</h1>
      <div className="relative sm:w-sm flex border-1  border-slate-400 rounded-lg">
        <BiSearch
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300"
          size={20}
        />
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Search for products"
          className="p-2 pl-12 min-w-full"
        />
      </div>
      <Link href={"/cart"} className="flex items-center gap-2 scale-100 sm:scale-110 bg-blue-950 px-3 sm:px-5 py-1 rounded-md">
        <BiCart /> Cart
      </Link>
    </header>
  );
}

export default Header;
