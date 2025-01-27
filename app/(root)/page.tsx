import Image from "next/image";

import ProductList from "@/components/product/ProductList";

export default function Home() {
  return (
    <>
      <section className="relative bg-gray-200">
        <Image
          src="/banner.jpg"
          alt="Banner"
          width={1920}
          height={600}
          className="h-auto w-full"
        />
        <div className="absolute inset-0 flex items-center justify-center"></div>
      </section>

      <div className="container mx-auto">
        <ProductList title="Lançamentos" />
      </div>
    </>
  );
}
