import React, { useState } from "react";

const ColorComponent = ({ colors, selectedColor, onColorSelect }) => {
  return (
    <div className="bg-[#f6f7f8] rounded-lg flex flex-col p-5 gap-4">
      <h3 className="uppercase mb-4">COLOR</h3>
      <div className="flex gap-4 items-center justify-between  ">
        {colors.map((color) => (
          <button
            style={{ background: color.value }}
            key={color.id}
            className={`w-5 h-5 rounded-full cursor-pointer ${
              selectedColor === color.value
                ? "border-black ring-2 ring-offset-1 ring-blue-300"
                : "border-gray-300"
            }`}
            onClick={() => onColorSelect(color.value)}></button>
        ))}
      </div>
    </div>
  );
};

export default ColorComponent;
