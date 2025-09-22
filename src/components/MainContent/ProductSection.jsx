import React, { useMemo, useState } from "react";
import HeroBanner from "./HeroBanner";
import FilterProducts from "./FilterProducts";
import ProductGrid from "./ProductGrid";
import PaginationComponent from "./PaginationComponent";
import { products as productData } from "../../data/productData";

const ProductSection = ({selectedColor}) => {
  const [sortBy, setSortBy] = useState("name ");
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);


  const sortedProducts = useMemo(() => {
    let sorted = [...productData];

 
    if (sortBy === "name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "price") {
      sorted.sort((a, b) => a.discountPrice - b.discountPrice);
    } else if (sortBy === "Popularity") {
      sorted.sort((a, b) => b.ratingValue - a.ratingValue);
    }

    return sorted;
  }, [sortBy]);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  return (
    <div className="lg:ml-5 flex flex-col  justify-between gap-5  w-full">
      <HeroBanner />
      <FilterProducts
        sortBy={sortBy}
        productData={productData}
        setSortBy={setSortBy}
        setCurrentPage={setCurrentPage}
        setItemsPerPage={setItemsPerPage}
      />
      <ProductGrid products={currentProducts} selectedColor={selectedColor} />
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default ProductSection;
