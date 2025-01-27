'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import ProductList from './ProductList';

const ProductPage = () => {
  const [hovered, setHovered] = useState(false); // Para hover na imagem do produto

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Seção principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          <div className="flex space-x-2 mt-4">
            <Image
              src="/images/foto1.avif"
              alt="Miniatura 1"
              width={100}
              height={100}
              className="rounded-md cursor-pointer border border-gray-200 hover:border-gray-400"
              onClick={() => setHovered(false)}
            />
            <Image
              src="/images/foto2.avif"
              alt="Miniatura 2"
              width={100}
              height={100}
              className="rounded-md cursor-pointer border border-gray-200 hover:border-gray-400"
              onClick={() => setHovered(true)}
            />
          </div>
        </div>

        {/* Informações do produto */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Kimono California 2.0</h1>
          <p className="text-gray-600 mt-2 text-lg">Disponível para todas as faixas etárias e estilos.</p>
          <p className="text-gray-800 text-xl font-semibold mt-4">
            R$ 299,90
          </p>
          <p className="text-gray-600 text-md font-medium mt-2">
            Em até <strong>2x de R$ 149,95 sem juros</strong>
          </p>

          {/* Botões */}
          <div className="mt-6 flex flex-col space-y-4">
            <button className="bg-gray-800 text-white py-3 rounded-md font-medium w-full hover:bg-gray-700">
              Comprar
            </button>
            <button className="border border-gray-800 text-gray-800 py-3 rounded-md font-medium w-full hover:bg-gray-100">
              Adicionar à lista de desejos
            </button>
          </div>

          {/* Descrição do produto */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-800">Descrição do Produto</h2>
            <p className="text-gray-600 mt-2 text-sm leading-6">
                Kimono Califórnia Off
                Medidas aproximadas: 0,65 altura x 1,80 largura (0,89 frente + 0,89 costas), manga 3/4 podendo ser colocado por cima de outra peça ou sozinho.
                
                O coringa que precisa ter!
                Por que você vai amar?
                Conforto: Sabe aquele tecido que abraça? Em viscolinho, para você se sentir confortavel em todos os looks e momentos!

                Para todos: Do PP (32) ao GG (44) temos o tamanho perfeito esperando por você :)) Celebramos a diversidade com um caimento que valoriza cada corpo!

                Investimento inteligente: Além de estar sempre na moda, a qualidade do nosso kimono significa que você terá uma peça durável e atemporal no armário!
                Ah, e fica a dica para o look completo: Vestido + Kimono / Cropped + Shorts Jeans + Kimono / Cropped + Calça + Kimono - aposte!
            </p>
          </div>
        </div>
      </div>

      {/* Seção de detalhes adicionais */}
      <div className="mt-12 border-t pt-8">
        <h2 className="text-xl font-semibold text-gray-800">Especificações</h2>
        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
          <li>Material: Algodão premium</li>
          <li>Cor: Preto</li>
          <li>Tamanhos disponíveis: A1, A2, A3, A4</li>
          <li>Marca: Leone CL</li>
        </ul>
      </div>

      <ProductList title="Produtos Relacionados"/>      
    </div>
  );
};

export default ProductPage;
