"use client";

import { Range } from "react-range";
import { useState, useEffect } from "react";
import { useProducts } from "@/context/ProductsContext";

export default function PriceSlider() {
  const { filters, setFilters } = useProducts();
  const [values, setValues] = useState<[number, number]>(filters.priceRange);

  useEffect(() => {
    setFilters((prev) => ({ ...prev, priceRange: values }));
  }, [values]);

  return (
    <div>
      <h3 className="font-semibold my-2">Price</h3>

      <Range
        step={10}
        min={0}
        max={1000}
        values={values}
        onChange={(newValues) => setValues(newValues as [number, number])}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="h-1 min-w-40 ml-1 bg-blue-200 rounded relative"
            style={{ ...props.style }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => {
          const { key, ...rest } = props;
          return (
            <div
              key={key}
              {...rest}
              className="w-3 h-3 ml-1 bg-white rounded-full shadow"
            />
          );
        }}
      />

      <div className="flex justify-between mt-2">
        <span>₹{values[0]}</span>
        <span>₹{values[1]}</span>
      </div>
    </div>
  );
}
