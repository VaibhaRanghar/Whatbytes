"use client";

import { Range } from "react-range";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PriceSlider() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [values, setValues] = useState<[number, number]>(() => {
    const fromUrl = searchParams.get("price")?.split("-").map(Number);
    return fromUrl?.length === 2
      ? ([fromUrl[0], fromUrl[1]] as [number, number])
      : [0, 1000];
  });

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("price", `${values[0]}-${values[1]}`);
    router.replace(`${pathname}?${params.toString()}`);
  }, [values]);

  return (
    <div>
      <h3 className="font-semibold my-2">Price</h3>

      <Range
        step={10}
        min={0}
        max={10000}
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
