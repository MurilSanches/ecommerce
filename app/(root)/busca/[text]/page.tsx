import React from "react";

import ProductList from "@/components/product/ProductList";

interface PageProps {
  params: { text: string };
}

const page = async ({ params }: PageProps) => {
  return (
    <div className="container mx-auto">
      <ProductList title={`Voce procurou por ${params.text}`} />
    </div>
  );
};

export default page;
