import React from 'react';

const TermosECondicoes = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Seção de Introdução */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Termos e Condições
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Bem-vindo à nossa loja online. Ao acessar e utilizar nossos serviços, você concorda com os seguintes termos e condições.
          </p>
        </div>
      </section>

      {/* Seção de Aceitação dos Termos */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900">Aceitação dos Termos</h2>
          <p className="mt-4 text-lg text-gray-600">
            Ao utilizar nosso site e serviços, você concorda em cumprir e estar vinculado aos termos e condições aqui descritos.
          </p>
        </div>
      </section>

      {/* Seção de Uso do Site */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900">Uso do Site</h2>
          <p className="mt-4 text-lg text-gray-600">
            Você concorda em utilizar nosso site apenas para fins legais e de acordo com todas as leis aplicáveis.
          </p>
        </div>
      </section>

      {/* Seção de Propriedade Intelectual */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900">Propriedade Intelectual</h2>
          <p className="mt-4 text-lg text-gray-600">
            Todo o conteúdo presente em nosso site, incluindo textos, imagens e logotipos, são de propriedade exclusiva da nossa empresa.
          </p>
        </div>
      </section>

      {/* Seção de Limitação de Responsabilidade */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900">Limitação de Responsabilidade</h2>
          <p className="mt-4 text-lg text-gray-600">
            Não nos responsabilizamos por danos diretos ou indiretos decorrentes do uso ou impossibilidade de uso de nosso site.
          </p>
        </div>
      </section>

      {/* Seção de Alterações nos Termos */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900">Alterações nos Termos</h2>
          <p className="mt-4 text-lg text-gray-600">
            Reservamo-nos o direito de modificar estes termos a qualquer momento. Recomendamos que você os revise periodicamente.
          </p>
        </div>
      </section>

      {/* Seção de Contato */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900">Contato</h2>
          <p className="mt-4 text-lg text-gray-600">
            Se você tiver dúvidas sobre nossos termos e condições, entre em contato conosco através do e-mail <strong>contato@exemplo.com</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}

export default TermosECondicoes;
