import React from "react";
import PriceSlider from "./PriceSlider";

function Category({
  type,
  categories,
}: {
  type?: { type: "slider" | "options"; text: "dark" | "light" };
  categories: string[];
}) {
  return (
    <form
      className={`flex flex-col items-start ${
        type?.text === "light" ? "text-white" : "text-black"
      }`}
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
        <select name="price" id="price">
          <option value="5000">5000</option>
          <option value="4000">4000</option>
          <option value="3000">3000</option>
          <option value="2000">2000</option>
          <option value="1000">1000</option>
        </select>
      )}
    </form>
  );
}

export default Category;
