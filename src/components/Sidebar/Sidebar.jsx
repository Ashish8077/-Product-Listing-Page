import React from "react";
import { hotDeals, colors, brands } from "../../data/hotDeals";
import SideBarComponent from "./SideBarComponent";
import PriceComponent from "./PriceComponent";
import ColorComponent from "./ColorComponent";

const Sidebar = ({ selectedColor, setSelectedColor }) => {
  const handlePriceChange = (min, max) => {
    const newProducts = products.filter(
      (p) => p.price >= min && p.price <= max
    );
    setFilteredProducts(newProducts);
  };
  return (
    <aside className="lg:w-[355px] flex justify-between flex-col ">
      <div className="flex flex-col gap-5">
        <SideBarComponent title={"Hot Deals"} data={hotDeals} />
        <PriceComponent onPriceChange={handlePriceChange} />
        <ColorComponent
          colors={colors}
          selectedColor={selectedColor}
          onColorSelect={setSelectedColor}
        />
        <SideBarComponent title={"BRAND"} data={brands} />
      </div>
      <div className="bg-[#f6f7f8] rounded-sm p-3 flex justify-center items-center text-[20px] font-medium mt-5 lg:mt-0">
        MORE
      </div>
    </aside>
  );
};

export default Sidebar;
