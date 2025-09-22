import React from "react";
import ProductCard from "./ProductCard";
// import { products } from "../../data/productData";

const ProductGrid = ({ products, selectedColor }) => {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          selectedColor={selectedColor}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
