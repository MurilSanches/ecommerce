import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const FooterSocialMedia = () => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <h4 className="mb-4 text-lg font-bold">Redes Sociais</h4>
      <div className="flex space-x-4">
        <Link href="#" className="text-gray-400 hover:text-white">
          <FaInstagram />
        </Link>
        <Link href="#" className="text-gray-400 hover:text-white">
          <FaFacebookF />
        </Link>
        <Link href="#" className="text-gray-400 hover:text-white">
          <FaWhatsapp />
        </Link>
      </div>
    </div>
  );
};

export default FooterSocialMedia;
