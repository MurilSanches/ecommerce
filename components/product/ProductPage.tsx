"use client";

import React, { useState } from "react";
import Image from "next/image";

import ProductList from "./ProductList";

const ProductPage = () => {
  const [hovered, setHovered] = useState(false); // Para hover na imagem do produto

  return (
    <div className="mx-auto max-w-6xl p-4">
      {/* Seção principal */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Imagem do produto */}
        <div>
          <div
            className="relative"
            onMouseEnter={() => setHovered(true)} // Hover na imagem
            onMouseLeave={() => setHovered(false)} // Hover sai
          >
            <Image
              src={hovered ? "/images/foto1.avif" : "/images/foto2.avif"}
              alt="Kimono California 2.0"
              width={500}
              height={500}
              className="rounded-md shadow-lg transition-all duration-300"
            />
          </div>
          {/* Miniaturas das imagens */}
          <div className="mt-4 flex space-x-2">
            <Image
              src="/images/foto1.avif"
              alt="Miniatura 1"
              width={100}
              height={100}
              className="cursor-pointer rounded-md border border-gray-200 hover:border-gray-400"
              onClick={() => setHovered(false)}
            />
            <Image
              src="/images/foto2.avif"
              alt="Miniatura 2"
              width={100}
              height={100}
              className="cursor-pointer rounded-md border border-gray-200 hover:border-gray-400"
              onClick={() => setHovered(true)}
            />
          </div>
        </div>

        {/* Informações do produto */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Kimono California 2.0
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Disponível para todas as faixas etárias e estilos.
          </p>
          <p className="mt-4 text-xl font-semibold text-gray-800">R$ 299,90</p>
          <p className="text-md mt-2 font-medium text-gray-600">
            Em até <strong>2x de R$ 149,95 sem juros</strong>
          </p>

          {/* Botões */}
          <div className="mt-6 flex flex-col space-y-4">
            <button className="w-full rounded-md bg-gray-800 py-3 font-medium text-white hover:bg-gray-700">
              Comprar
            </button>
            <button className="w-full rounded-md border border-gray-800 py-3 font-medium text-gray-800 hover:bg-gray-100">
              Adicionar à lista de desejos
            </button>
          </div>

          {/* Descrição do produto */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-800">
              Descrição do Produto
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Kimono Califórnia Off Medidas aproximadas: 0,65 altura x 1,80
              largura (0,89 frente + 0,89 costas), manga 3/4 podendo ser
              colocado por cima de outra peça ou sozinho. O coringa que precisa
              ter! Por que você vai amar? Conforto: Sabe aquele tecido que
              abraça? Em viscolinho, para você se sentir confortavel em todos os
              looks e momentos! Para todos: Do PP (32) ao GG (44) temos o
              tamanho perfeito esperando por você :)) Celebramos a diversidade
              com um caimento que valoriza cada corpo! Investimento inteligente:
              Além de estar sempre na moda, a qualidade do nosso kimono
              significa que você terá uma peça durável e atemporal no armário!
              Ah, e fica a dica para o look completo: Vestido + Kimono / Cropped
              + Shorts Jeans + Kimono / Cropped + Calça + Kimono - aposte!
            </p>
          </div>
        </div>
      </div>

      {/* Seção de detalhes adicionais */}
      <div className="mt-12 border-t pt-8">
        <h2 className="text-xl font-semibold text-gray-800">Especificações</h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-gray-600">
          <li>Material: Algodão premium</li>
          <li>Cor: Preto</li>
          <li>Tamanhos disponíveis: A1, A2, A3, A4</li>
          <li>Marca: Leone CL</li>
        </ul>
      </div>

      <ProductList title="Produtos Relacionados" />
    </div>
  );
};

export default ProductPage;
