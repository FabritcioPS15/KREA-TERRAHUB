import { FiAward, FiHeart, FiHome, FiChevronRight, FiDownload, FiCalendar } from 'react-icons/fi';
import { FaLeaf } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

const products = [
  {
    id: 1,
    name: 'Cacao de origen Orgánico',
    description: 'Cacao orgánico de origen certificado, cultivado de manera sostenible en nuestras tierras.',
    image: 'https://images.pexels.com/photos/4022090/pexels-photo-4022090.jpeg?auto=compress&cs=tinysrgb&w=600&fm=webp',
  },
  {
    id: 2,
    name: 'Café',
    description: 'Chocolate premium elaborado artesanalmente con cacao de primera calidad.',
    image: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=600&fm=webp',
  },
  {
    id: 3,
    name: 'Quinua periada y Maca en Polvo',
    description: 'Café de altura seleccionado, tostado y empacado con los más altos estándares de calidad.',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600&fm=webp',
  },
  {
    id: 4,
    name: 'Frutas deshidratadas (Mango,Aguaymanto y Piña)',
    description: 'Aceites naturales extraídos de productos orgánicos, ideales para uso culinario y cosmético.',
    image: '/assets/images/Fruta deshidratada.jpeg',
  },
];

export default function Products() {
  return (
    <div className="min-h-screen pt-12">
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/Agroindustria.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
        <div className="relative z-10 container mx-auto px-6 text-white">
          <div className="mb-6 flex justify-center w-full">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-white/90 bg-white/10 border border-white/20 rounded-full px-5 py-2 backdrop-blur-md shadow-sm">
              <Link to="/" className="flex items-center gap-2 hover:text-white transition-colors">
                <FiHome size={14} />
                Inicio
              </Link>
              <FiChevronRight className="text-white/50" size={14} />
              <span className="text-white">Productos</span>
            </div>
          </div>

          <FadeIn direction="up" delay={0.2} className="text-center px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
              PRODUCTOS <span className="text-green-400 italic font-light">AGROINDUSTRIALES</span>
              <br className="hidden sm:block" /> SELECTOS
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <FadeIn
                key={product.id}
                direction="up"
                delay={index * 0.1}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-green-900 opacity-20 group-hover:opacity-10 transition-opacity" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <button className="w-full mb-3 flex items-center justify-center gap-2 px-6 py-2.5 bg-white border-2 border-slate-900 text-slate-900 rounded-xl hover:bg-slate-900 hover:text-white transition-all duration-300 font-bold text-sm tracking-tight group shadow-sm hover:shadow-md active:scale-[0.98]">
                    <FiDownload className="group-hover:-translate-y-1 transition-transform duration-300" />
                    Descargar Ficha Técnica
                  </button>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-2">{product.description}</p>
                  <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 text-white rounded-xl hover:bg-green-600 transition-all duration-300 font-bold text-sm tracking-tight shadow-md hover:shadow-xl hover:shadow-green-900/20 active:scale-[0.98] group/btn">
                    <FiCalendar size={18} className="group-hover/btn:rotate-12 transition-transform" />
                    Agendar Reunión Comercial
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <FadeIn direction="up" className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestro Compromiso</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Trabajamos directamente con agricultores locales para garantizar productos de la más alta
              calidad, cultivados de manera sostenible y respetando el medio ambiente. Cada producto es
              seleccionado cuidadosamente y procesado bajo estrictos controles de calidad.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn direction="up" delay={0.1} className="text-center p-6">
              <div className="flex justify-center mb-4">
                <FaLeaf className="text-green-700" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">100% Orgánico</h3>
              <p className="text-gray-600">
                Productos cultivados sin pesticidas ni químicos, respetando la naturaleza.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="text-center p-6">
              <div className="flex justify-center mb-4">
                <FiAward className="text-blue-900" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Certificación Internacional</h3>
              <p className="text-gray-600">
                Productos certificados que cumplen con los estándares internacionales de calidad.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} className="text-center p-6">
              <div className="flex justify-center mb-4">
                <FiHeart className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Comercio Justo</h3>
              <p className="text-gray-600">
                Apoyamos a las comunidades locales con prácticas de comercio justo y sostenible.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
