import React from "react";

import ProductList from "@/components/product/ProductList";

interface PageProps {
  params: Promise<{ text: string }>;
}

const page = async ({ params }: PageProps) => {
  const { text } = await params;

  return (
    <div className="container mx-auto">
      <ProductList title={`Voce procurou por ${text}`} />
    </div>
  );
};

export default page;
