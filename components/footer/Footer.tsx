import Image from "next/image";

import FooterContact from "./FooterContact";
import FooterInstitutional from "./FooterInstitutional";
import FooterPayment from "./FooterPayment";
import FooterSecurity from "./FooterSecurity";
import FooterSocialMedia from "./FooterSocialMedia";

export default function Footer() {
  return (
    <footer className="bg-black pt-8 text-white">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-4">
        <FooterSecurity />
        <FooterInstitutional />
        <div>
          <FooterPayment />
          <FooterContact />
        </div>
        <FooterSocialMedia />
      </div>

      <div className="mt-8 bg-white py-4 text-center text-sm text-gray-500">
        <p>&copy; Copyright Ecommerce - CNPJ 40.669.336/0001-66</p>
      </div>
    </footer>
  );
}
