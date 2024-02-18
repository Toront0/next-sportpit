import React from "react";

interface IDoubleRangeInput {
  value: number;
  value2: number;
  onChange: (v: number) => void;
  onChange2: (v: number) => void;
  min: number;
  max: number;
  step: number;
}

const DoubleRangeInput = ({
  value,
  value2,
  onChange,
  onChange2,
  min,
  max,
  step
}: IDoubleRangeInput) => {
  return (
    <div className="w-full h-1 bg-purple-7 ">
      <div
        style={{
          width: (value / max) * 100 + "%"
        }}
        className="absolute top-0 bg-white dark:bg-black h-full"
      ></div>
      <div
        style={{
          width: 100 - (value2 / max) * 100 + "%"
        }}
        className="absolute top-0 right-0 bg-white dark:bg-black h-full"
      ></div>
      <input
        type="range"
        min={min}
        // defaultValue={allBrands.min_price}
        value={value}
        onChange={(e) => {
          onChange(Math.min(+e.target.value, value2 - 500));
        }}
        step={step}
        max={max}
        className="w-full absolute bg-white pointer-events-none -top-1.5"
      />
      <input
        type="range"
        min={0}
        // defaultValue={allBrands.max_price}
        value={value2}
        step={step}
        onChange={(e) => onChange2(Math.max(+e.target.value, value + 500))}
        max={max}
        className="w-full absolute bg-none pointer-events-none -top-1.5"
      />
    </div>
  );
};

export default DoubleRangeInput;
