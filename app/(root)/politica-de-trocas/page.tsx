import React from 'react';

const PoliticaDeTrocas = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Seção de Introdução */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Política de Trocas
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Nossa prioridade é a satisfação de nossos clientes. Por isso, elaboramos uma política de trocas clara e objetiva para garantir a melhor experiência possível.
          </p>
        </div>
      </section>

      {/* Seção de Condições Gerais */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900">Condições Gerais</h2>
          <p className="mt-4 text-lg text-gray-600">
            Para que a troca seja efetuada, o produto deve atender às seguintes condições:
          </p>
          <ul className="mt-4 list-disc pl-6 text-lg text-gray-600">
            <li>Estar em sua embalagem original;</li>
            <li>Não apresentar sinais de uso;</li>
            <li>Estar acompanhado da nota fiscal de compra;</li>
            <li>Ser solicitado dentro do prazo estipulado.</li>
          </ul>
        </div>
      </section>

      {/* Seção de Prazos */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900">Prazos para Solicitação de Troca</h2>
          <p className="mt-4 text-lg text-gray-600">
            As solicitações de troca devem ser realizadas dentro dos seguintes prazos:
          </p>
          <ul className="mt-4 list-disc pl-6 text-lg text-gray-600">
            <li><strong>Defeito de Fabricação:</strong> até 7 dias corridos após o recebimento;</li>
            <li><strong>Desistência ou Arrependimento:</strong> até 7 dias corridos após o recebimento;</li>
            <li><strong>Troca por Insatisfação com Modelo ou Tamanho:</strong> até 7 dias corridos após o recebimento.</li>
          </ul>
        </div>
      </section>

      {/* Seção de Procedimento para Troca */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900">Procedimento para Solicitação de Troca</h2>
          <p className="mt-4 text-lg text-gray-600">
            Para solicitar a troca, siga os seguintes passos:
          </p>
          <ol className="mt-4 list-decimal pl-6 text-lg text-gray-600">
            <li>Entre em contato conosco através do e-mail <strong>contato@exemplo.com</strong> ou pelo telefone <strong>(11) 99999-9999</strong>;</li>
            <li>Informe o número do pedido, o produto a ser trocado e o motivo da solicitação;</li>
            <li>Aguarde a confirmação da nossa equipe com as instruções para envio do produto;</li>
            <li>Envie o produto conforme as orientações recebidas;</li>
            <li>Após o recebimento e análise, enviaremos o produto substituto ou efetuaremos o reembolso, conforme o caso.</li>
          </ol>
        </div>
      </section>

      {/* Seção de Custos de Envio */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900">Custos de Envio</h2>
          <p className="mt-4 text-lg text-gray-600">
            Os custos de envio para a troca serão:
          </p>
          <ul className="mt-4 list-disc pl-6 text-lg text-gray-600">
            <li><strong>Defeito de Fabricação:</strong> sem custo para o cliente;</li>
            <li><strong>Desistência ou Arrependimento:</strong> custo de envio por conta do cliente;</li>
            <li><strong>Troca por Insatisfação com Modelo ou Tamanho:</strong> custo de envio por conta do cliente.</li>
          </ul>
        </div>
      </section>

      {/* Seção de Produtos em Promoção */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900">Produtos em Promoção</h2>
          <p className="mt-4 text-lg text-gray-600">
            Produtos adquiridos em promoção ou liquidação não são elegíveis para troca, exceto em casos de defeito de fabricação.
          </p>
        </div>
      </section>
    </div>
  );
}

export default PoliticaDeTrocas;
