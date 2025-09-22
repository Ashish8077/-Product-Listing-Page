import React, { useState } from "react";

const PriceComponent = ({ onPriceChange }) => {
  const min = 0;
  const max = 100000; // based on your dataset max price
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(max);

  const handleMinChange = (e) => {
    const value = Number(e.target.value);
    if (value <= maxValue - 1) {
      setMinValue(value);
      onPriceChange(value, maxValue);
    }
  };

  const handleMaxChange = (e) => {
    const value = Number(e.target.value);
    if (value >= minValue + 1) {
      setMaxValue(value);
      onPriceChange(minValue, value);
    }
  };

  return (
    <div className="bg-[#f6f7f8] rounded-lg flex flex-col p-4 gap-4">
      <h3 className="uppercase">Prices</h3>

      <label className="inline-flex justify-between">
    
        <span>
          ${minValue} - ${maxValue}
        </span>
      </label>

      <div className="relative w-full h-2 bg-gray-200 rounded">
        <div
          className="absolute h-2 bg-blue-500 rounded"
          style={{
            left: `${((minValue - min) / (max - min)) * 100}%`,
            right: `${100 - ((maxValue - min) / (max - min)) * 100}%`,
          }}></div>

        <input
          type="range"
          min={min}
          max={max}
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-full h-2 bg-transparent appearance-none pointer-events-auto "
        />

        <input
          type="range"
          min={min}
          max={max}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full h-2 bg-transparent appearance-none pointer-events-auto  outline-none"
        />
      </div>
    </div>
  );
};

export default PriceComponent;
