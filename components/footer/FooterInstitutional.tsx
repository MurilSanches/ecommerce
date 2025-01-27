import React from "react";
import Link from "next/link";

const FooterInstitutional = () => {
  return (
    <div>
      <h4 className="mb-4 text-lg font-bold">Institucional</h4>
      <ul className="space-y-2">
        <li>
          <Link
            href="/quem-somos"
            className="text-sm text-gray-400 hover:text-white"
          >
            Quem Somos
          </Link>
        </li>
        <li>
          <Link
            href="/politica-de-trocas"
            className="text-sm text-gray-400 hover:text-white"
          >
            Política de Trocas
          </Link>
        </li>
        <li>
          <Link
            href="/politica-de-entregas"
            className="text-sm text-gray-400 hover:text-white"
          >
            Política de Entregas
          </Link>
        </li>
        <li>
          <Link
            href="/politica-de-privacidade"
            className="text-sm text-gray-400 hover:text-white"
          >
            Política de Privacidade
          </Link>
        </li>
        <li>
          <Link
            href="/termos-e-condicoes"
            className="text-sm text-gray-400 hover:text-white"
          >
            Termos e Condições
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterInstitutional;
