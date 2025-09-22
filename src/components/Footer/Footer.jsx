import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { footerLinks } from "../../data/footerLinks";
import FooterComponent from "./FooterComponent";

const Footer = () => {
  return (
    <div className="bg-[#BCDDFE] p-15">
  {/* Top Section */}
  <div className="flex flex-col lg:flex-row gap-8 lg:gap-55">
    <div className="w-full lg:w-[250px]">
      <div className="w-[100px] mx-auto lg:mx-0">
        <img className="w-full h-full" src="/logo.png" alt="" />
      </div>
      <p className="text-[12px] mt-2 text-center lg:text-left">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever.Since the 1500s, when an unknown printer.
      </p>
    </div>

    <div className="w-full lg:w-[250px] mt-6 lg:mt-0">
      <h3 className="font-medium text-center lg:text-left">Follow Us</h3>
      <p className="text-[12px] mt-2 text-center lg:text-left">
        Since the 1500s, when an unknown printer took a galley of type and
        scrambled.
      </p>
      <div className="mt-2 flex justify-center lg:justify-start gap-6 items-center">
        <FaFacebookF size={12} color="#385C8E" />
        <FaTwitter size={12} color="#03A9F4" />
      </div>
    </div>

    <div className="w-full lg:w-[145px] mt-6 lg:mt-0">
      <h3 className="font-medium text-center lg:text-left">Contact Us</h3>
      <p className="text-[12px] mt-2 text-center lg:text-left">
        E-Comm , 4578 Marmora Road, Glasgow D04 89GR
      </p>
    </div>
  </div>

  {/* Footer Links */}
  <div className="flex   flex-row  justify-between mt-6 gap-6 max-[700px]:flex-col ">
    {footerLinks.map((link) => (
      <FooterComponent key={link.title} title={link.title} data={link.links} />
    ))}
  </div>

  {/* Divider */}
  <div className="border-t-2 mt-10 w-[95%] mx-auto border-[#F6F7F8]"></div>

  {/* Bottom Section */}
  <div className="flex flex-col lg:flex-row mt-4 justify-between items-center gap-4">
    <span className="text-sm text-[#C1C8CE] text-center lg:text-left">
      © 2018 Ecommerce theme by www.bisenbaev.com
    </span>
    <div className="flex flex-wrap justify-center lg:justify-end gap-3">
      <img src="footerImages/Western-union.png" alt="Western-union" />
      <img src="footerImages/Group 19.png" alt="Master Card" />
      <img src="footerImages/Paypal.png" alt="Paypal" />
      <img src="footerImages/Shape 327 (3).png" alt="Visa Card" />
    </div>
  </div>
</div>

  );
};

export default Footer;
