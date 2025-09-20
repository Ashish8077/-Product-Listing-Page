import React from "react";
import { hotDeals, colors, brands } from "../../data/hotDeals";
import SideBarComponent from "./SideBarComponent";
import PriceComponent from "./PriceComponent";
import ColorComponent from "./ColorComponent";

const Sidebar = () => {
  console.log(hotDeals);
  return (
    <aside className="w-[355px] flex flex-col gap-5">
      <SideBarComponent title={"Hot Deals"} data={hotDeals} />
      <PriceComponent />
      <ColorComponent colors={colors} />
      <SideBarComponent title={"BRAND"} data={brands} />
      <div className="bg-[#f6f7f8] rounded-lg p-6 flex justify-center items-center text-[20px] font-medium">
        MORE
      </div>
    </aside>
  );
};

export default Sidebar;
