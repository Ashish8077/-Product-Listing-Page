import React, { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 left-0 z-50  bg-white flex justify-between items-center px-4 py-2 shadow-sm capitalize ">
      <div className="w-[150px] sm:w-[182px] h-[40px] sm:h-[44px]">
        <img
          className="w-full h-full object-contain"
          src="./logo.png"
          alt="logo"
        />
      </div>
      {/* <div className="w-[182px] h-[44px] ">
        <img className="w-full h-full" src="./logo.png" alt="logo" />
      </div> */}
      <nav className={` ${isOpen ? "block" : "hidden"} min-[900px]:block `}>
        <ul
          className={`  flex flex-col gap-5 p-4 absolute right-0 w-full max-[900px]:h-screen top-14 max-[900px]:bg-gray-100 min-[900px]:flex-row min-[900px]:gap-15 min-[900px]:static`}>
          <li>
            <a className="hover:text-blue-400" href="">
              HOME
            </a>
          </li>
          <li>
            <a className="hover:text-blue-400" href="">
              BAG
            </a>
          </li>
          <li>
            <a className="hover:text-blue-400" href="">
              SNEAKERS
            </a>
          </li>
          <li>
            <a className="hover:text-blue-400" href="">
              BELT
            </a>
          </li>
          <li>
            <a className="hover:text-blue-400" href="">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
      <div className=" flex gap-6">
        <button className="cursor-pointer">
          <ShoppingCart />
        </button>
        <div className="flex gap-2">
          items<span className="text-[#969393]">$0.00</span>
        </div>
      </div>
      <button
        className="max-[400px]:ml-3 min-[900px]:hidden cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
};

export default Header;
