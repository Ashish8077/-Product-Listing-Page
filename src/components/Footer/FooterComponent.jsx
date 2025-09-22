import React from "react";

const FooterComponent = ({ title, data }) => {
  return (
    <div className="font-[400]">
      <h3 className=" text-[#22262A] mb-4 font-medium">{title}</h3>
      <ul className="text-sm">
        {data.map(({ label }) => (
          <li key={crypto.randomUUID()}>
            <a href="#">{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterComponent;
