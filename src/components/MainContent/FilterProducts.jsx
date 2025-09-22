import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { CgMenuGridR } from "react-icons/cg";
import { Menu } from "lucide-react";

const FilterProducts = ({
  productData,
  setSortBy,
  setCurrentPage,
  sortBy,
  setItemsPerPage,
}) => {
  return (
    <div className=" md:flex justify-between  bg-[#F6F7F8]">
      <div className="flex flex-col md:flex-row md:items-center  gap-7 p-2">
        <div className="">{productData.length} Items</div>
        <div className="relative inline-block">
          <label htmlFor="sortby">Sort By</label>
          <select
            name=""
            id=""
            value={sortBy}
            className="px-5 py-1 outline-none shadow-sm appearance-none w-full md:w-[143px] md:ml-4   cursor-pointer"
            onChange={(e) => {
              setSortBy(e.target.value);
              setCurrentPage(1);
            }}>
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="Popularity">Popularity</option>
          </select>
          <span class="pointer-events-none absolute right-3 top-[85%] -translate-y-[85%]  md:top-1/2 md:-translate-y-1/2">
            <TiArrowSortedDown />
          </span>
        </div>
        <div className="relative inline-block">
          <label htmlFor="sortby">Show</label>
          <select
            name=""
            id=""
            className="px-5 py-1 outline-none shadow-sm appearance-none w-full md:w-[143px] md:ml-4  cursor-pointer"
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}>
            <option value="6">6</option>
            <option value="12">12</option>
            <option value="18">18</option>
            <option value="24">24</option>
          </select>
          <span class="pointer-events-none absolute right-3 top-[85%] -translate-y-[85%]  md:top-1/2 md:-translate-y-1/2">
            <TiArrowSortedDown />
          </span>
        </div>
      </div>
      <div className="flex justify-between    ">
        <div className="  hover:bg-[#F1F3F4] cursor-pointer   p-2 flex items-center  justify-center ">
          <CgMenuGridR color="#40BFFF" size={22} />
        </div>
        <div className="hover:bg-[#F1F3F4] cursor-pointer transition delay-200 p-2   flex items-center justify-center">
          <Menu color="#C1C8CE" />
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;
