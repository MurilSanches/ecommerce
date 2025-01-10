import React from "react";

type MenuLateralProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MenuLateral({ isOpen, onClose }: MenuLateralProps) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="w-64 bg-white h-full shadow-lg p-4">
        {/* Close Button */}
        <button
          className="text-gray-500 hover:text-black text-xl"
          onClick={onClose}
        >
          ×
        </button>

        {/* Menu Items */}
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
  );
}
