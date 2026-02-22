import { Link } from 'react-router-dom';
import { FiEye, FiTarget, FiTrendingUp, FiUsers, FiHome, FiChevronRight } from 'react-icons/fi';
import FadeIn from '../components/FadeIn';

export default function About() {
  return (
    <div className="min-h-screen pt-12">
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2&fm=webp)',
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
              <span className="text-white">Nosotros</span>
            </div>
          </div>

          <FadeIn direction="up" delay={0.2} className="text-center px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-tight text-white">
              NUESTRA VISIÓN COMO<br />
              <span className="text-blue-400 italic font-light">HUB EMPRESARIAL</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <FadeIn direction="up" className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Misión & Visión</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Somos un hub empresarial innovador que integra soluciones constructivas de alta calidad con
                productos agroindustriales selectos, generando valor a través de alianzas estratégicas y
                prácticas sostenibles que benefician a nuestros clientes y comunidades.
              </p>
            </FadeIn>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-16 mb-24 scale-90 sm:scale-100">
              <FadeIn direction="up" delay={0.2} className="relative group text-center">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center text-slate-900 transform transition-all duration-500 group-hover:shadow-xl group-hover:border-blue-900/20 group-hover:-translate-y-2">
                  <div className="text-center">
                    <div className="font-bold text-2xl sm:text-3xl mb-1 sm:mb-2 text-blue-900 uppercase">Krea</div>
                    <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-slate-400">Servicios</div>
                  </div>
                </div>
                <p className="mt-6 text-sm text-slate-600 leading-relaxed max-w-[200px] mx-auto">
                  Soluciones constructivas integrales con enfoque en innovación y calidad de ejecución.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.4} className="relative group text-center lg:mt-8">
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl bg-slate-950 text-white shadow-2xl flex flex-col items-center justify-center transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-blue-900/40 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-green-900/40 opacity-50" />
                  <div className="relative z-10 text-center">
                    <div className="font-bold text-2xl sm:text-3xl mb-1 tracking-tight">HUB DE</div>
                    <div className="font-bold text-2xl sm:text-3xl tracking-tight text-blue-400">ALIANZAS</div>
                  </div>
                </div>
                <p className="mt-6 text-sm text-slate-700 leading-relaxed font-semibold max-w-[240px] mx-auto uppercase tracking-tighter">
                  Un modelo integrado que une sectores estratégicos para construir sinergias extraordinarias.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.6} className="relative group text-center">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center text-slate-900 transform transition-all duration-500 group-hover:shadow-xl group-hover:border-green-800/20 group-hover:-translate-y-2">
                  <div className="text-center">
                    <div className="font-bold text-2xl sm:text-3xl mb-1 sm:mb-2 text-green-800 uppercase">Terra</div>
                    <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-slate-400">Productos</div>
                  </div>
                </div>
                <p className="mt-6 text-sm text-slate-600 leading-relaxed max-w-[200px] mx-auto">
                  Productos agroindustriales de origen que promueven prácticas sostenibles y comercio justo.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Nuestros Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <FadeIn direction="up" delay={0.1} className="text-center p-6 hover:shadow-xl transition-shadow rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <FiTarget className="text-blue-900" size={40} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Excelencia</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Compromiso con la calidad superior en cada proyecto y producto que entregamos.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="text-center p-6 hover:shadow-xl transition-shadow rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <FiEye className="text-green-700" size={40} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Sostenibilidad</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Prácticas responsables que protegen el medio ambiente y las comunidades.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} className="text-center p-6 hover:shadow-xl transition-shadow rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <FiUsers className="text-blue-900" size={40} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Colaboración</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Alianzas estratégicas que generan valor compartido para todos los involucrados.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.4} className="text-center p-6 hover:shadow-xl transition-shadow rounded-lg">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <FiTrendingUp className="text-green-700" size={40} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Innovación</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Búsqueda constante de mejores soluciones y nuevas oportunidades de crecimiento.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-black relative overflow-hidden">
        <div className="absolute inset-0  opacity-50" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <FadeIn direction="up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-8 leading-tight">Nuestro <span className="italic font-semibold text-blue-400">Propósito</span></h2>
            <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light text-black px-2">
              Ser el puente que conecta la <span className="text-blue-400 font-medium">construcción de espacios</span> con la producción de <span className="text-green-400 font-medium">alimentos naturales</span>, creando un ecosistema empresarial sostenible que genera impacto positivo real.
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
