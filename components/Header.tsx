'use client'

import React, { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Header principal */}
      <header className="bg-black text-white">
        {/* Top section */}
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          {/* Botão de menu (aparece apenas no mobile) */}
          <button
            className="text-white md:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            ☰
          </button>

          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.png" // Substitua pelo caminho da logo
              alt="Levine Logo"
              width={100}
              height={40}
            />
          </div>

          {/* Barra de pesquisa */}
          <div className="hidden md:flex flex-grow mx-4">
            <input
              type="text"
              placeholder="O que você procura?"
              className="w-full px-4 py-2 rounded-full text-black placeholder-gray-500"
            />
          </div>

          {/* Ícones de conta, pedidos e carrinho */}
          <div className="flex space-x-6">
            <div className="flex flex-col items-center">
              <Image
                src="/user-icon.png" // Ícone de "Conta"
                alt="Conta"
                width={24}
                height={24}
              />
              <span className="text-sm">Conta</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/orders-icon.png" // Ícone de "Pedidos"
                alt="Pedidos"
                width={24}
                height={24}
              />
              <span className="text-sm">Pedidos</span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/cart-icon.png" // Ícone de "Carrinho"
                alt="Carrinho"
                width={24}
                height={24}
              />
              <span className="text-sm">0</span>
            </div>
          </div>
        </div>

        {/* Menu de navegação (versão desktop) */}
        <nav className="hidden md:flex bg-white text-black">
          <div className="container mx-auto flex items-center justify-center space-x-6 py-2">
            {[
              "MACAQUINHOS E VESTIDOS",
              "CASACOS E JAQUETAS",
              "BLUSAS E CROPPEDS",
              "CONJUNTOS E BODYS",
              "CALÇAS",
              "SHORTS E SAIAS",
              "KIMONOS",
              { label: "PROMOÇÃO", className: "text-red-600 font-bold" },
            ].map((item, index) =>
              typeof item === "string" ? (
                <a
                  key={index}
                  href="#"
                  className="text-sm hover:text-gray-700 transition"
                >
                  {item}
                </a>
              ) : (
                <a
                  key={index}
                  href="#"
                  className={`text-sm hover:text-gray-700 transition ${item.className}`}
                >
                  {item.label}
                </a>
              )
            )}
          </div>
        </nav>
      </header>

      {/* Menu lateral para mobile */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-64 bg-white h-full shadow-lg p-4">
          {/* Botão de fechar */}
          <button
            className="text-gray-500 hover:text-black text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            ×
          </button>

          {/* Itens do menu lateral */}
          <nav className="mt-4">
            {[
              "MACAQUINHOS E VESTIDOS",
              "CASACOS E JAQUETAS",
              "BLUSAS E CROPPEDS",
              "CONJUNTOS E BODYS",
              "CALÇAS",
              "SHORTS E SAIAS",
              "KIMONOS",
              { label: "PROMOÇÃO", className: "text-red-600 font-bold" },
            ].map((item, index) =>
              typeof item === "string" ? (
                <a
                  key={index}
                  href="#"
                  className="block text-black hover:text-gray-700 py-2"
                >
                  {item}
                </a>
              ) : (
                <a
                  key={index}
                  href="#"
                  className={`block py-2 hover:text-gray-700 ${item.className}`}
                >
                  {item.label}
                </a>
              )
            )}
          </nav>
        </div>
      </div>
    </>
  );
}
