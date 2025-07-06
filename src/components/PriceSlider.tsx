"use client";
import { Range } from "react-range";
import { useState } from "react";

const items = [
  { name: "Speaker", price: 200 },
  { name: "DJ Lights", price: 500 },
  { name: "Performer", price: 800 },
  { name: "Stage Setup", price: 1000 },
];

export default function PriceSlider() {
  const [values, setValues] = useState([0, 1000]);

  console.log(items);

  return (
    <div className="">
      <p className="">Price</p>

      <Range
        step={10}
        min={0}
        max={1000}
        values={values}
        onChange={setValues}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="h-1 w-20 bg-blue-200 rounded relative"
            style={{ ...props.style }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div {...props} className="w-3 h-3 bg-white rounded-full shadow " />
        )}
      />

      <div className="flex justify-between mt-2 ">
        <span>{values[0]}</span>
        <span>{values[1]}</span>
      </div>
    </div>
  );
}
