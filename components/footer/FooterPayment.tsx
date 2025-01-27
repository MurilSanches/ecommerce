import React from "react";
import Image from "next/image";

const FooterPayment = () => {
  return (
    <>
      <h4 className="mb-4 text-lg font-bold">Pagamentos</h4>
      <div className="mb-6 flex items-center gap-x-2">
        <div>
          <Image
            src="/payment/mastercard.png"
            alt="MasterCard"
            width={40}
            height={25}
          />
        </div>
        <div>
          <Image src="/payment/visa.png" alt="Visa" width={40} height={25} />
        </div>

        <div>
          <Image src="/payment/amex.png" alt="Amex" width={40} height={25} />
        </div>

        <div>
          <Image
            src="/payment/hipercard.png"
            alt="hypercard"
            width={40}
            height={25}
          />
        </div>
        <div>
          <Image
            src="/payment/elo-white.png"
            alt="Elo"
            width={40}
            height={15}
          />
        </div>
      </div>
    </>
  );
};

export default FooterPayment;
