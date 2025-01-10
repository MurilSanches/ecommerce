import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Segurança */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-2">
            <Image
              src="/ssl-icon.png" // Substitua pela imagem correspondente
              alt="Certificado SSL"
              width={40}
              height={40}
            />
            <div>
              <p className="text-sm font-bold">100% SEGURO</p>
              <p className="text-sm">CERTIFICADO SSL</p>
            </div>
          </div>
        </div>

        {/* Institucional */}
        <div>
          <h4 className="text-lg font-bold mb-4">Institucional</h4>
          <ul className="space-y-2">
            <li>
              <a href="/quem-somos" className="text-sm text-gray-400 hover:text-white">Quem Somos</a>
            </li>
            <li>
              <a href="/politica-de-trocas" className="text-sm text-gray-400 hover:text-white">Política de Trocas</a>
            </li>
            <li>
              <a href="/politica-de-entregas" className="text-sm text-gray-400 hover:text-white">Política de Entregas</a>
            </li>
            <li>
              <a href="/politica-de-privacidade" className="text-sm text-gray-400 hover:text-white">Política de Privacidade</a>
            </li>
            <li>
              <a href="/termos-e-condicoes" className="text-sm text-gray-400 hover:text-white">Termos e Condições</a>
            </li>
          </ul>
        </div>

        {/* Pagamentos e Contato */}
        <div>
          <h4 className="text-lg font-bold mb-4">Pagamentos</h4>
          <div className="flex space-x-4 mb-6">
            <Image
              src="/mastercard.png" // Substitua pelas imagens dos métodos de pagamento
              alt="MasterCard"
              width={40}
              height={25}
            />
            <Image
              src="/visa.png"
              alt="Visa"
              width={40}
              height={25}
            />
            <Image
              src="/amex.png"
              alt="Amex"
              width={40}
              height={25}
            />
            <Image
              src="/elo.png"
              alt="Elo"
              width={40}
              height={25}
            />
          </div>
          <h4 className="text-lg font-bold mb-4">Contato</h4>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <Image
                src="/whatsapp-icon.png" // Substitua pelo ícone do WhatsApp
                alt="WhatsApp"
                width={20}
                height={20}
              />
              <span className="text-sm"> (19) 99981-1912</span>
            </li>
            <li>
              <a
                href="https://www.ecommerce.com.br"
                className="text-sm text-gray-400 hover:text-white"
              >
                www.ecommerce.com.br
              </a>
            </li>
            <li>
              <a
                href="mailto:ecommerce@ecommerce.com.br"
                className="text-sm text-gray-400 hover:text-white"
              >
                ecommerce@ecommerce.com.br
              </a>
            </li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-bold mb-4">Redes Sociais</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Image
                src="/instagram-icon.png" // Substitua pelo ícone do Instagram
                alt="Instagram"
                width={20}
                height={20}
              />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Image
                src="/facebook-icon.png" // Substitua pelo ícone do Facebook
                alt="Facebook"
                width={20}
                height={20}
              />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Image
                src="/whatsapp-icon.png" // Substitua pelo ícone do WhatsApp
                alt="WhatsApp"
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Rodapé final */}
      <div className="bg-white py-4 mt-8 text-center text-sm text-gray-500">
        <p>
          &copy; Copyright Ecommerce - CNPJ 40.669.336/0001-66
        </p>
        
      </div>
    </footer>
  );
}
