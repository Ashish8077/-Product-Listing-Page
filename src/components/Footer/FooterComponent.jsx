import React from "react";

const FooterComponent = ({ title, data }) => {
  console.log(data);
  return (
    <div className="font-[400]">
      <h3 className=" text-[#22262A] mb-4 font-medium">{title}</h3>
      <ul className="text-sm">
        {data.map(({ label }) => (
          <li>
            <a href="#">{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterComponent;
