import React from "react";

import ProductListItem from "./ProductListItem";

interface ProductListProps {
  title: string;
}

const ProductList = ({ title }: ProductListProps) => {
  return (
    <section className="py-12">
      <h2 className="mb-6 text-2xl font-bold">{title}</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {Array.from({ length: 10 }, (v, k) => k + 1).map((num) => (
          <ProductListItem key={num} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
