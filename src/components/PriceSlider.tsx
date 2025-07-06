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
      <h3 className="font-semibold my-2">Price</h3>

      <Range
        step={10}
        min={0}
        max={1000}
        values={values}
        onChange={setValues}
        renderTrack={({ props, children }) => {
          return (
            <div
              {...props}
              className="h-1 min-w-40 ml-1 bg-blue-200 rounded relative"
              style={{ ...props.style }}
            >
              {children}
            </div>
          );
        }}
        renderThumb={({ props }) => {
          const { key, ...rest } = props;
          return (
            <div
              key={key}
              {...rest}
              className="w-3 h-3 ml-1 bg-white rounded-full shadow "
            />
          );
        }}
      />

      <div className="flex justify-between mt-2 ">
        <span>{values[0]}</span>
        <span>{values[1]}</span>
      </div>
    </div>
  );
}
