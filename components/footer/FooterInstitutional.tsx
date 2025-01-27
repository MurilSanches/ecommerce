import React from "react";

const FooterInstitutional = () => {
  return (
    <div>
      <h4 className="mb-4 text-lg font-bold">Institucional</h4>
      <ul className="space-y-2">
        <li>
          <a
            href="/quem-somos"
            className="text-sm text-gray-400 hover:text-white"
          >
            Quem Somos
          </a>
        </li>
        <li>
          <a
            href="/politica-de-trocas"
            className="text-sm text-gray-400 hover:text-white"
          >
            Política de Trocas
          </a>
        </li>
        <li>
          <a
            href="/politica-de-entregas"
            className="text-sm text-gray-400 hover:text-white"
          >
            Política de Entregas
          </a>
        </li>
        <li>
          <a
            href="/politica-de-privacidade"
            className="text-sm text-gray-400 hover:text-white"
          >
            Política de Privacidade
          </a>
        </li>
        <li>
          <a
            href="/termos-e-condicoes"
            className="text-sm text-gray-400 hover:text-white"
          >
            Termos e Condições
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterInstitutional;
