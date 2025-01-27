import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const FooterSocialMedia = () => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <h4 className="mb-4 text-lg font-bold">Redes Sociais</h4>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-400 hover:text-white">
          <FaInstagram />
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <FaFacebookF />
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default FooterSocialMedia;
