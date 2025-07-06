import React from "react";
import PriceSlider from "./PriceSlider";

function Category({
  type,
  categories,
}: {
  type?: {
    type?: "slider" | "options";
    text?: "dark" | "light";
    bg?: "light" | "transparent";
  };
  categories: string[];
}) {
  return (
    <form
      className={`min-w-40 flex flex-col gap-2 items-start ${
        type?.bg === "light" ? "bg-white" : ""
      } ${type?.text === "light" ? "text-white" : "text-black"}`}
    >
      {categories.map((c) => (
        <span key={c} className="text-sm">
          <input type="checkbox" name={c} id={c} />
          <span>{" " + c}</span>
        </span>
      ))}
      {type?.type === "slider" ? (
        <PriceSlider />
      ) : (
        <>
          <h3 className="font-semibold my-1">Price</h3>
          <select
            name="price"
            id="price"
            className="self-stretch border border-slate-400 rounded-sm"
          >
            <option value="5000">5000</option>
            <option value="4000">4000</option>
            <option value="3000">3000</option>
            <option value="2000">2000</option>
            <option value="1000">1000</option>
          </select>
        </>
      )}
    </form>
  );
}

export default Category;
