"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ProductHome = () => {
  const [hovered, setHovered] = useState(false); // Estado para controlar o hover

  return (
    <Link
      href={`/produto/123/jordan`}
      className="flex cursor-pointer flex-col items-center rounded-md bg-white shadow-md"
    >
      <div
        onMouseEnter={() => setHovered(true)} // Quando o mouse entra na área da imagem
        onMouseLeave={() => setHovered(false)} // Quando o mouse sai da área da imagem
      >
        <Image
          src={hovered ? "/images/foto2.avif" : "/images/foto1.avif"} // Alterna a imagem
          alt="Produto"
          width={200}
          height={200}
          className="rounded-md transition-all duration-300" // Adiciona uma transição suave
        />
      </div>
      <div className="flex w-full flex-col justify-center gap-y-2 p-4 text-center">
        <h3 className="mt-2 text-lg font-bold text-gray-600">Tênis XYZ</h3>
        <p className="mt-1 font-semibold text-gray-600">
          2x de R$ 149,90 sem juros
        </p>
        <p className="mt-1 text-gray-600">R$ 299,90</p>
        <button
          className="w-full rounded bg-gray-800 px-4 py-2 text-white"
          type="button"
        >
          Comprar
        </button>
      </div>
    </Link>
  );
};

export default ProductHome;
