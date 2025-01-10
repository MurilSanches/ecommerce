import React from 'react';

const PoliticaDeEntregas = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Seção de Introdução */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Política de Entregas
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Nossa prioridade é a satisfação de nossos clientes. Por isso, elaboramos uma política de entregas clara e objetiva para garantir a melhor experiência possível.
          </p>
        </div>
      </section>

      {/* Seção de Métodos de Envio */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900">Métodos de Envio</h2>
          <p className="mt-4 text-lg text-gray-600">
            Trabalhamos com os seguintes métodos de envio:
          </p>
          <ul className="mt-4 list-disc pl-6 text-lg text-gray-600">
            <li><strong>Correios:</strong> Envio padrão com rastreamento;</li>
            <li><strong>Transportadora Parceira:</strong> Para regiões específicas;</li>
            <li><strong>Retirada na Loja:</strong> Disponível para clientes locais.</li>
          </ul>
        </div>
      </section>

      {/* Seção de Prazos de Entrega */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900">Prazos de Entrega</h2>
          <p className="mt-4 text-lg text-gray-600">
            Os prazos de entrega variam conforme a região e o método de envio escolhido:
          </p>
          <ul className="mt-4 list-disc pl-6 text-lg text-gray-600">
            <li><strong>Capitais e Regiões Metropolitanas:</strong> 3 a 5 dias úteis;</li>
            <li><strong>Interior de São Paulo:</strong> 5 a 7 dias úteis;</li>
            <li><strong>Outras Regiões:</strong> 7 a 10 dias úteis;</li>
            <li><strong>Retirada na Loja:</strong> Disponível em até 24 horas após confirmação de pagamento.</li>
          </ul>
        </div>
      </section>

      {/* Seção de Custos de Envio */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900">Custos de Envio</h2>
          <p className="mt-4 text-lg text-gray-600">
            Os custos de envio são calculados automaticamente no momento da finalização da compra, com base no peso do produto, destino e método de envio escolhido.
          </p>
        </div>
      </section>

      {/* Seção de Rastreamento */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900">Rastreamento de Pedido</h2>
          <p className="mt-4 text-lg text-gray-600">
            Após o envio, você receberá um código de rastreamento para acompanhar o status da entrega diretamente no site da transportadora.
          </p>
        </div>
      </section>

      {/* Seção de Problemas com a Entrega */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900">Problemas com a Entrega</h2>
          <p className="mt-4 text-lg text-gray-600">
            Em caso de atraso ou problemas com a entrega, entre em contato conosco através do e-mail <strong>contato@exemplo.com</strong> ou pelo telefone <strong>(11) 99999-9999</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}

export default PoliticaDeEntregas;
