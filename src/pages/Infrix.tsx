import { FiArrowRight, FiCheckCircle, FiTarget, FiEye } from 'react-icons/fi';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO';

export default function Infrix() {
  return (
    <>
      <SEO
        title="INFRIX - Ingeniería & Construcción"
        description="INFRIX: excelencia en ingeniería, acabados y desarrollo de proyectos civiles de alto impacto. Parte del ecosistema Krea & Terra Hub."
        keywords="INFRIX, ingeniería civil, construcción, acabados, proyectos civiles, drywall, estructuras, melamina, muebles, instalaciones eléctricas, gasfitería"
        canonical="/infrix"
      />

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative h-[70vh] overflow-hidden bg-orange-700">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: 'url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2&fm=webp)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-orange-700/60" />
          <div className="absolute inset-0 container mx-auto px-6 flex items-center">
            <div className="max-w-3xl">
              <FadeIn direction="right">
                <span className="text-orange-200 font-black tracking-[0.3em] text-[10px] uppercase mb-4 block">Ingeniería & Construcción</span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter">INFRIX</h1>
                <p className="text-white/70 text-xl mb-10 max-w-xl leading-relaxed">
                  Excelencia en ingeniería, acabados y desarrollo de proyectos civiles de alto impacto.
                </p>
                <a
                  href="https://infrix-web.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 px-10 py-4 rounded-full bg-white text-orange-800 hover:bg-orange-100 transition-all duration-500 font-black text-xs uppercase tracking-widest shadow-xl"
                >
                  Visitar sitio original
                  <FiArrowRight size={18} />
                </a>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <FadeIn direction="up">
                <span className="text-orange-600 font-black tracking-[0.3em] text-xs uppercase mb-4 block">Nuestros Servicios</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Soluciones Integrales</h2>
                <p className="text-slate-500 text-lg">Ofrecemos servicios completos de ingeniería y construcción con los más altos estándares de calidad.</p>
              </FadeIn>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Drywall & Estructuras", desc: "Instalación profesional de sistemas de drywall y estructuras metálicas para espacios residenciales y comerciales." },
                { title: "Melamina & Muebles", desc: "Diseño y fabricación de muebles a medida con acabados de alta calidad en melamina y otros materiales." },
                { title: "Instalaciones Eléctricas", desc: "Instalaciones eléctricas certificadas para hogares, oficinas y edificios comerciales." },
                { title: "Gasfitería & Saneamiento", desc: "Servicios completos de gasfitería,Fontanería y sistemas de saneamiento." },
                { title: "Pintura & Recubrimientos", desc: "Acabados de pintura interior y exterior con productos de alta durabilidad." },
                { title: "Proyectos Civiles", desc: "Desarrollo integral de proyectos de construcción civil con gestión profesional." },
              ].map((servicio, idx) => (
                <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                  <div className="p-8 rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6">
                      <FiCheckCircle size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{servicio.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{servicio.desc}</p>
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
                  <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 mb-8">
                    <FiTarget size={32} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-6">Misión</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Brindar soluciones de ingeniería y construcción de excelencia, superando las expectativas de nuestros clientes con calidad, innovación y compromiso.
                  </p>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 mb-8">
                    <FiEye size={32} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-6">Visión</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Ser referentes en ingeniería y construcción en el Perú, reconocidos por nuestra calidad humana y excelencia operativa.
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
