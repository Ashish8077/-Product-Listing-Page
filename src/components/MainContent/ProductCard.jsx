import React from "react";
import { renderStars } from "../../utils/star.util";
import { formatPriceUSD } from "../../utils/price.util";

const ProductCard = ({ product, selectedColor }) => {
  return (
    <div className=" shadow-md rounded-sm relative mb-5 ">
      {product.isHot && (
        <div className="p-1 border w-[50px] sm:w-[60px] flex justify-center items-center bg-red-500 text-white absolute left-0 top-0 rounded-sm text-xs sm:text-sm">
          HOT
        </div>
      )}

      <div
        className="w-full aspect-[4/3] flex items-center justify-center overflow-hidden"
        style={{
          background: selectedColor || "#fff",
          transition: "background 0.3s",
        }}>
        <img
          className="w-full h-auto object-contain"
          src={product.imageUrl}
          alt={product.name}
        />
      </div>
      <div>
        <h2 className="mt-1 text-center font-bold text-sm sm:text-base md:text-lg text-[#223263] line-clamp-1">
          {product.name}
        </h2>
        <p className="mt-1 flex justify-center items-center gap-1 text-xs sm:text-sm ">
          {renderStars(product.ratingValue)}
        </p>
        <p className="mt-2 flex gap-1 sm:gap-2 pb-2 justify-center items-center text-xs sm:text-sm">
          <span className="text-base sm:text-lg text-[#40BFFF] font-bold ">
            {formatPriceUSD(product.price)}
          </span>
          <span className="text-xs sm:text-sm text-[#9098B1] font-normal line-through">
            {formatPriceUSD(product.discountPrice)}
          </span>
          <span className="text-[#FB7181] font-bold text-xs sm:text-sm">
            {product.discountPercent}% off
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
