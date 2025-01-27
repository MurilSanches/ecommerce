import React from "react";
import { categories } from "@/data/categories";

import ProductList from "@/components/product/ProductList";

interface pageProps {
  params: Promise<{ category: string }>;
}

const page = async ({ params }: pageProps) => {
  const { category } = await params;
  const categoryData = categories.find((c) => c.id === category);

  return (
    <div className="container mx-auto">
      <ProductList title={categoryData?.label ?? ""} />
    </div>
  );
};

export default page;
