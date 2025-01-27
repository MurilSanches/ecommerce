"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { categories } from "@/data/categories";
import { BsBoxSeam } from "react-icons/bs";
import { IoBagHandleOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";

import SideMenu from "./SideMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/busca/${(event.target as HTMLFormElement)[0].value}`);
  };

  return (
    <>
      {/* Header principal */}
      <header className="bg-black text-white">
        {/* Top section */}
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Botão de menu (aparece apenas no mobile) */}
          <button
            className="text-white md:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            ☰
          </button>

          {/* Logo */}
          <Link className="flex items-center" href="/">
            <Image
              src="/logo.png" // Substitua pelo caminho da logo
              alt="Levine Logo"
              width={100}
              height={80}
            />
          </Link>

          {/* Barra de pesquisa */}
          <div className="mx-4 hidden w-full flex-grow md:flex">
            <form onSubmit={handleSubmit} className="w-full">
              <input
                type="text"
                placeholder="O que você procura?"
                className="w-full rounded bg-white px-4 py-2 text-black placeholder-gray-500"
              />
            </form>
          </div>

          {/* Ícones de conta, pedidos e carrinho */}
          <div className="flex space-x-6">
            <div className="flex flex-col items-center gap-y-2">
              <MdOutlineAccountCircle size={24} />
              <span className="text-sm">Conta</span>
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <BsBoxSeam size={24} />
              <span className="text-sm">Pedidos</span>
            </div>
            <div className="flex flex-col items-center gap-y-2">
              <IoBagHandleOutline size={24} />
              <span className="text-sm">0</span>
            </div>
          </div>
        </div>

        {/* Menu de navegação (versão desktop) */}
        <nav className="hidden bg-white text-black shadow-md md:flex">
          <div className="container mx-auto flex items-center justify-center space-x-6 py-2">
            {categories.map((item, index) => (
              <Link
                key={item.id}
                href={`/categoria/${item.id}`}
                className={`text-sm transition hover:text-gray-700 ${item.className}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* Menu lateral para mobile */}
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
