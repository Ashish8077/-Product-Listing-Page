import React from "react";

const PriceComponent = () => {
  return (
    <div className="bg-[#f6f7f8] rounded-lg flex flex-col p-4 gap-4">
      <h3 className="uppercase">Prices</h3>
      <label className="inline-flex justify-between" htmlFor="price">
        Range: <span>$13.99 - $25.99</span>
      </label>
      <input type="range" id="price" name="range" />
    </div>
  );
};

export default PriceComponent;
