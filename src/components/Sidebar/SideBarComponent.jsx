import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const SideBarComponent = ({ title, data }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="bg-[#f6f7f8] rounded-lg">
      <button
        className="p-4 inline-flex w-full  cursor-pointer justify-between"
        onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span>
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>
      {isOpen && (
        <ul>
          {data.map((deal) => (
            <div
              className="flex justify-between p-4 hover:text-blue-400 cursor-pointer"
              key={deal.id}>
              <li>{deal.name}</li>
              <li>{deal.quantity}</li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SideBarComponent;
