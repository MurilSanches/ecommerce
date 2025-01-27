import React from "react";
import Image from "next/image";

const FooterSecurity = () => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="flex items-center space-x-2">
        <Image
          src="/payment/safe-site-icon.png"
          alt="Certificado SSL"
          width={150}
          height={40}
        />
      </div>
    </div>
  );
};

export default FooterSecurity;
