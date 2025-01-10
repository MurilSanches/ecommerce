import React from 'react';

const PoliticaDePrivacidade = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Seção de Introdução */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Política de Privacidade
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Sua privacidade é importante para nós. Esta política explica como coletamos, usamos e protegemos suas informações pessoais.
          </p>
        </div>
      </section>

      {/* Seção de Informações Coletadas */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900">Informações Coletadas</h2>
          <p className="mt-4 text-lg text-gray-600">
            Coletamos informações pessoais, como nome, e-mail e endereço, quando você realiza uma compra ou se inscreve em nossa newsletter.
          </p>
        </div>
      </section>

      {/* Seção de Uso das Informações */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900">Uso das Informações</h2>
          <p className="mt-4 text-lg text-gray-600">
            Utilizamos suas informações para processar pedidos, enviar atualizações sobre sua compra e oferecer promoções personalizadas.
          </p>
        </div>
      </section>

      {/* Seção de Proteção das Informações */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900">Proteção das Informações</h2>
          <p className="mt-4 text-lg text-gray-600">
            Adotamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado, alteração ou divulgação.
          </p>
        </div>
      </section>

      {/* Seção de Compartilhamento de Informações */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900">Compartilhamento de Informações</h2>
          <p className="mt-4 text-lg text-gray-600">
            Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para processar pagamentos ou conforme exigido por lei.
          </p>
        </div>
      </section>

      {/* Seção de Seus Direitos */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900">Seus Direitos</h2>
          <p className="mt-4 text-lg text-gray-600">
            Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Para exercer esses direitos, entre em contato conosco.
          </p>
        </div>
      </section>

      {/* Seção de Alterações na Política */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900">Alterações na Política</h2>
          <p className="mt-4 text-lg text-gray-600">
            Podemos atualizar esta política periodicamente. Recomendamos que você a revise regularmente para estar ciente de quaisquer mudanças.
          </p>
        </div>
      </section>

      {/* Seção de Contato */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900">Contato</h2>
          <p className="mt-4 text-lg text-gray-600">
            Se você tiver dúvidas sobre nossa política de privacidade, entre em contato conosco através do e-mail <strong>contato@exemplo.com</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}

export default PoliticaDePrivacidade;
