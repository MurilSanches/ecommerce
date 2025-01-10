import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';

export default function Home() {
  return (
    <>

      {/* Banner */}
      <section className="relative bg-gray-200">
        <Image
          src="/banner.jpg" // Substitua pela imagem correta
          alt="Banner"
          width={1920}
          height={600}
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white shadow-md">
            Destaques da Loja
          </h1>
        </div>
      </section>

      

      {/* Products */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Produtos em Destaque</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Exemplo de produto */}
            <div className="bg-white shadow-md rounded-md p-4">
              <Image
                src="/product1.jpg" // Substitua pela imagem do produto
                alt="Produto 1"
                width={200}
                height={200}
                className="rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">Tênis XYZ</h3>
              <p className="text-gray-600 mt-1">R$ 299,90</p>
            </div>

            <div className="bg-white shadow-md rounded-md p-4">
              <Image
                src="/product1.jpg" // Substitua pela imagem do produto
                alt="Produto 1"
                width={200}
                height={200}
                className="rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">Tênis XYZ</h3>
              <p className="text-gray-600 mt-1">R$ 299,90</p>
            </div>


            <div className="bg-white shadow-md rounded-md p-4">
              <Image
                src="/product1.jpg" // Substitua pela imagem do produto
                alt="Produto 1"
                width={200}
                height={200}
                className="rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">Tênis XYZ</h3>
              <p className="text-gray-600 mt-1">R$ 299,90</p>
            </div>

            <div className="bg-white shadow-md rounded-md p-4">
              <Image
                src="/product1.jpg" // Substitua pela imagem do produto
                alt="Produto 1"
                width={200}
                height={200}
                className="rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">Tênis XYZ</h3>
              <p className="text-gray-600 mt-1">R$ 299,90</p>
            </div>

            <div className="bg-white shadow-md rounded-md p-4">
              <Image
                src="/product1.jpg" // Substitua pela imagem do produto
                alt="Produto 1"
                width={200}
                height={200}
                className="rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">Tênis XYZ</h3>
              <p className="text-gray-600 mt-1">R$ 299,90</p>
            </div>

            <div className="bg-white shadow-md rounded-md p-4">
              <Image
                src="/product1.jpg" // Substitua pela imagem do produto
                alt="Produto 1"
                width={200}
                height={200}
                className="rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">Tênis XYZ</h3>
              <p className="text-gray-600 mt-1">R$ 299,90</p>
            </div>

            <div className="bg-white shadow-md rounded-md p-4">
              <Image
                src="/product1.jpg" // Substitua pela imagem do produto
                alt="Produto 1"
                width={200}
                height={200}
                className="rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">Tênis XYZ</h3>
              <p className="text-gray-600 mt-1">R$ 299,90</p>
            </div>

            <div className="bg-white shadow-md rounded-md p-4">
              <Image
                src="/product1.jpg" // Substitua pela imagem do produto
                alt="Produto 1"
                width={200}
                height={200}
                className="rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">Tênis XYZ</h3>
              <p className="text-gray-600 mt-1">R$ 299,90</p>
            </div>
            {/* Adicione mais produtos conforme necessário */}
          </div>
        </div>
      </section>
      </>
  
  );
}
