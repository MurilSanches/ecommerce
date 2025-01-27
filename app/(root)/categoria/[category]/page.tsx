import React from "react";
import { categories } from "@/data/categories";

import ProductList from "@/components/product/ProductList";

interface pageProps {
  params: { category: string };
}

const page = ({ params }: pageProps) => {
  const category = categories.find((c) => c.id === params.category);

  return (
    <div className="container mx-auto">
      <ProductList title={category?.label ?? ""} />
    </div>
  );
};

export default page;
