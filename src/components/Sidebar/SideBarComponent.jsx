import React from "react";

const SideBarComponent = ({ title, data }) => {
  return (
    <div className="bg-[#f6f7f8] rounded-lg">
      <h3 className="p-4">{title}</h3>
      <ul>
        {data.map((deal) => (
          <div className="flex justify-between p-4">
            <li>{deal.name}</li>
            <li>{deal.quantity}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SideBarComponent;
