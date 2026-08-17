import { FiArrowRight, FiCheckCircle, FiTarget, FiEye, FiCode, FiCpu, FiDatabase, FiCloud } from 'react-icons/fi';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO';

export default function Modiru() {
  return (
    <>
      <SEO
        title="MODIRU - Tecnología & Innovación"
        description="MODIRU: soluciones tecnológicas innovadoras para transformar y optimizar procesos empresariales. Desarrollo de software, consultoría TI y más."
        keywords="MODIRU, tecnología, innovación, desarrollo de software, consultoría TI, transformación digital, automatización"
        canonical="/modiru"
      />

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative h-[70vh] overflow-hidden bg-amber-900">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: 'url(https://images.pexels.com/photos/11035544/pexels-photo-11035544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2&fm=webp)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-950/90 to-amber-900/60" />
          <div className="absolute inset-0 container mx-auto px-6 flex items-center">
            <div className="max-w-3xl">
              <FadeIn direction="right">
                <span className="text-amber-200 font-black tracking-[0.3em] text-[10px] uppercase mb-4 block">Tecnología & Innovación</span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter">MODIRU</h1>
                <p className="text-white/70 text-xl mb-10 max-w-xl leading-relaxed">
                  Soluciones tecnológicas innovadoras para transformar y optimizar procesos empresariales.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-4 px-10 py-4 rounded-full bg-white text-amber-800 hover:bg-amber-100 transition-all duration-500 font-black text-xs uppercase tracking-widest shadow-xl"
                >
                  Próximamente
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
                <span className="text-amber-600 font-black tracking-[0.3em] text-xs uppercase mb-4 block">Nuestros Servicios</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Soluciones Digitales</h2>
                <p className="text-slate-500 text-lg">Impulsamos la transformación digital de las empresas con tecnología de vanguardia.</p>
              </FadeIn>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: FiCode, title: "Desarrollo de Software", desc: "Aplicaciones web y móviles personalizadas para optimizar tus procesos de negocio." },
                { icon: FiCpu, title: "Consultoría TI", desc: "Asesoramiento estratégico para la transformación digital de tu empresa." },
                { icon: FiDatabase, title: "Gestión de Datos", desc: "Soluciones de big data, analítica y business intelligence." },
                { icon: FiCloud, title: "Cloud Computing", desc: "Migración y gestión de infraestructura en la nube." },
                { icon: FiCheckCircle, title: "Automatización", desc: "Automatización de procesos para mejorar la eficiencia operativa." },
                { icon: FiTarget, title: "Innovación Digital", desc: "Innovación tecnológica aplicada a la mejora continua." },
              ].map((servicio, idx) => (
                <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                  <div className="p-8 rounded-2xl border border-slate-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                      <servicio.icon size={24} />
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
                  <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 mb-8">
                    <FiTarget size={32} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-6">Misión</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Desarrollar soluciones tecnológicas innovadoras que transformen y optimicen los procesos empresariales, generando valor real.
                  </p>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 mb-8">
                    <FiEye size={32} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-6">Visión</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Ser una empresa líder en soluciones tecnológicas en Perú, reconocida por su innovación y capacidad de transformación digital.
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
