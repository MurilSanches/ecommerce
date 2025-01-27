import React from "react";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

const FooterContact = () => {
  return (
    <>
      <h4 className="mb-4 text-lg font-bold">Contato</h4>
      <ul className="space-y-2">
        <li className="flex items-center space-x-2">
          <FaWhatsapp />
          <span className="text-sm"> (19) 99981-1912</span>
        </li>
        <li className="flex items-center space-x-2">
          <a
            href="https://www.ecommerce.com.br"
            className="text-sm text-gray-400 hover:text-white"
          >
            www.ecommerce.com.br
          </a>
        </li>
        <li className="flex items-center space-x-2">
          <CiMail />
          <a
            href="mailto:ecommerce@ecommerce.com.br"
            className="text-sm text-gray-400 hover:text-white"
          >
            ecommerce@ecommerce.com.br
          </a>
        </li>
      </ul>
    </>
  );
};

export default FooterContact;
