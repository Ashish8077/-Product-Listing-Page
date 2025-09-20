import React from "react";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2 shadow-sm capitalize">
      <div className="w-[182px] h-[44px] ">
        <img className="w-full h-full" src="./logo.png" alt="logo" />
      </div>
      <nav>
        <ul className="flex gap-15">
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
        <div>
          <ShoppingCart />
        </div>
        <div className="flex gap-2">
          items<span className="text-[#969393]">$0.00</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
