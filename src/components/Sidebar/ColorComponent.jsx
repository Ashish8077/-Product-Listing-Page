import React from "react";

const ColorComponent = ({ colors }) => {
  return (
    <div className="bg-[#f6f7f8] rounded-lg flex flex-col p-5 gap-4">
      <h3 className="uppercase mb-4">COLOR</h3>
      <div className="flex gap-4 items-center justify-between  ">
        {colors.map((color) => (
          <button
            style={{ background: color.value }}
            className="w-5 h-5 rounded-full focus:outline-none border-black ring-2 ring-offset-2 ring-blue-200 cursor-pointer   "></button>
        ))}
      </div>
    </div>
  );
};

export default ColorComponent;
