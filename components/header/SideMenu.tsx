import React from "react";
import Link from "next/link";
import { categories } from "@/data/categories";

type SideMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SideMenu({ isOpen, onClose }: SideMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="h-full w-64 bg-white p-4 shadow-lg">
        <button
          className="text-xl text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ×
        </button>

        <nav className="mt-4">
          {categories.map((item, index) => (
            <Link
              key={item.id}
              href={`/categoria/${item.id}`}
              className={`block py-2 hover:text-gray-700 ${item.className}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
