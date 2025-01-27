'use client'

import Image from 'next/image';
import React, { useState } from 'react';

const ProductHome = () => {
  const [hovered, setHovered] = useState(false); // Estado para controlar o hover

  return (
    <a href={`/produto/123/jordan`} className="bg-white shadow-md rounded-md flex flex-col items-center cursor-pointer">
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
      <div className="flex flex-col w-full text-center justify-center p-4 gap-y-2">
        <h3 className="text-gray-600 text-lg font-bold mt-2">Tênis XYZ</h3>
        <p className="text-gray-600 mt-1 font-semibold">2x de R$ 149,90 sem juros</p>
        <p className="text-gray-600 mt-1">R$ 299,90</p>
        <button
          className="w-full bg-gray-800 text-white rounded px-4 py-2"
          type="button"
        >
          Comprar
        </button>
      </div>
    </a>
  );
};

export default ProductHome;
