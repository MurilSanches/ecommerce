import React from 'react';

const QuemSomos = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Seção de Introdução */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Quem Somos
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Somos uma empresa focada em oferecer produtos de qualidade e uma experiência de compra única. Nosso compromisso é com a satisfação total de nossos clientes, sempre buscando inovação e excelência.
          </p>
        </div>
      </section>

      {/* Seção de História */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Nossa História</h2>
          <p className="mt-4 text-lg text-gray-600">
            Desde o início, nossa missão é proporcionar aos nossos clientes não apenas produtos, mas também uma experiência de compra excepcional. Com mais de 10 anos de mercado, buscamos sempre inovações para atender às suas necessidades.
          </p>
        </div>
      </section>

      {/* Seção de Valores */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Nossos Valores</h2>
          <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900">Qualidade</h3>
              <p className="mt-2 text-lg text-gray-600">
                Trabalhamos para garantir a melhor qualidade em todos os nossos produtos.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900">Inovação</h3>
              <p className="mt-2 text-lg text-gray-600">
                Buscamos constantemente por novas soluções e tecnologias para atender nossos clientes.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900">Compromisso</h3>
              <p className="mt-2 text-lg text-gray-600">
                Nosso compromisso é com a satisfação de nossos clientes e com a excelência em cada detalhe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Fale Conosco</h2>
          <p className="mt-4 text-lg text-gray-600">
            Se você deseja saber mais sobre nossa empresa, entre em contato conosco. Estamos aqui para ajudar!
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700">
            Entre em contato
          </button>
        </div>
      </section>
    </div>
  );
}

export default QuemSomos;
