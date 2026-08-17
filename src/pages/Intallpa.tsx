import { FiArrowRight, FiCheckCircle, FiTarget, FiGlobe } from 'react-icons/fi';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO';

export default function Intallpa() {
  return (
    <>
      <SEO
        title="INTALLPA FOODS - Agroindustria & Exportación"
        description="INTALLPA FOODS: cultivando y procesando los mejores productos de la tierra con visión de calidad global. Cacao orgánico, café, quinua y más."
        keywords="INTALLPA FOODS, agroindustria, exportación, cacao orgánico, café, quinua, maca, productos agrícolas, Perú"
        canonical="/intallpa"
      />

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative h-[70vh] overflow-hidden bg-green-900">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: 'url(/assets/images/Arboldecacao.webp)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 to-green-900/60" />
          <div className="absolute inset-0 container mx-auto px-6 flex items-center">
            <div className="max-w-3xl">
              <FadeIn direction="right">
                <span className="text-green-400 font-black tracking-[0.3em] text-[10px] uppercase mb-4 block">Agroindustria & Exportación</span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter">INTALLPA <span className="text-green-500">FOODS</span></h1>
                <p className="text-white/70 text-xl mb-10 max-w-xl leading-relaxed">
                  Cultivando y procesando los mejores productos de la tierra con visión de calidad global.
                </p>
                <a
                  href="https://intallpa-web.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 px-10 py-4 rounded-full bg-white text-green-900 hover:bg-green-50 transition-all duration-500 font-black text-xs uppercase tracking-widest shadow-xl"
                >
                  Visitar sitio original
                  <FiArrowRight size={18} />
                </a>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Productos */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <FadeIn direction="up">
                <span className="text-green-600 font-black tracking-[0.3em] text-xs uppercase mb-4 block">Nuestros Productos</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Productos de la Tierra</h2>
                <p className="text-slate-500 text-lg">Ofrecemos productos agroindustriales de origen con los más altos estándares de calidad orgánica.</p>
              </FadeIn>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Cacao Orgánico", desc: "Cacao de origen peruano, cultivado y procesado bajo estándares orgánicos internacionales." },
                { title: "Café Verde", desc: "Café de altura con perfil de sabor único, listo para tostadores y exportación." },
                { title: "Quinua Premium", desc: "Quinua seleccionada de los Andes peruanos, rica en proteínas y nutrientes." },
                { title: "Maca en Polvo", desc: "Maca peruana procesada para preservar todas sus propiedades energéticas y nutritivas." },
                { title: "Fruta Deshidratada", desc: "Frutas tropicales deshidratadas sin conservantes artificiales." },
                { title: "Exportación Global", desc: "Logística internacional certificada para mercados de América, Europa y Asia." },
              ].map((producto, idx) => (
                <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                  <div className="p-8 rounded-2xl border border-slate-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-6">
                      <FiCheckCircle size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{producto.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{producto.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <FadeIn direction="up">
                <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 mb-8">
                    <FiTarget size={32} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-6">Misión</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Procesar y exportar productos agrícolas peruanos de la más alta calidad, conectando el talento local con mercados internacionales.
                  </p>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 mb-8">
                    <FiGlobe size={32} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-6">Visión</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Ser una empresa agroindustrial líder en exportación de productos peruanos, reconocida por su calidad orgánica y compromiso sostenible.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
