import { Link } from 'react-router-dom';
import { FiEye, FiTarget, FiTrendingUp, FiUsers, FiHome } from 'react-icons/fi';
import FadeIn from '../components/FadeIn';

export default function About() {
  return (
    <div className="min-h-screen pt-12">
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(/assets/images/3.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
        <div className="relative z-10 container mx-auto px-6 text-white">
          {/* Mobile: Compact Glass Breadcrumb */}
          <div className="sm:hidden flex justify-center mb-6">
            <nav className="flex items-center p-0.5 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-lg">
              <Link 
                to="/" 
                className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-[0.2em] text-white/50"
              >
                <div className="w-5 h-5 rounded-md bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <FiHome size={11} />
                </div>
                Inicio
              </Link>
              <div className="h-3 w-[1px] bg-white/10 mx-0.5" />
              <div className="px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.25em] text-white/90 cursor-default">
                Nosotros
              </div>
            </nav>
          </div>

          {/* Desktop: Refined Compact Breadcrumb */}
          <div className="hidden sm:flex justify-start mb-8">
            <nav className="flex items-center p-0.5 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-lg group transition-all duration-500 hover:bg-white/10">
              <Link 
                to="/" 
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300 group/item"
              >
                <div className="w-5 h-5 rounded-md bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover/item:bg-blue-500 group-hover/item:text-white transition-all duration-300">
                  <FiHome size={11} />
                </div>
                Inicio
              </Link>
              <div className="h-3 w-[1px] bg-white/10 mx-0.5" />
              <div className="px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.25em] text-white/90 cursor-default">
                Nosotros
              </div>
            </nav>
          </div>

          <FadeIn direction="up" delay={0.2} className="text-center px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-tight text-white">
              NUESTRA VISIÓN y MISIÓN COMO<br />
              <span className="text-blue-400 italic font-light">HUB EMPRESARIAL</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <FadeIn direction="up" className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6 uppercase tracking-tight">Nuestra Esencia</h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {/* MISIÓN */}
              <FadeIn direction="left" delay={0.1}>
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 flex flex-col h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 group">
                  {/* Gradient top bar */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400" />
                  {/* Decorative blurred circle */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-50 opacity-60 blur-2xl pointer-events-none" />
                  <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full bg-blue-100/30 blur-xl pointer-events-none" />
                  {/* Decorative dots grid */}
                  <div className="absolute top-6 right-6 grid grid-cols-3 gap-1 opacity-20 pointer-events-none">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-1 h-1 rounded-full bg-blue-900" />
                    ))}
                  </div>

                  <div className="relative z-10 p-10 flex flex-col flex-1">
                    {/* Number label */}
                    <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-blue-400 mb-6">01 — Misión</span>
                    {/* Icon */}
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-blue-100 transition-transform duration-300 group-hover:scale-105">
                      <FiTarget className="text-blue-900" size={26} />
                    </div>
                    {/* Title */}
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-5 tracking-tight uppercase">Misión</h3>
                    {/* Divider accent */}
                    <div className="w-10 h-0.5 bg-gradient-to-r from-blue-900 to-blue-400 rounded-full mb-5" />
                    {/* Quote mark */}
                    <span className="text-5xl leading-none font-serif text-blue-100 select-none mb-1">"</span>
                    <p className="text-base text-gray-600 leading-relaxed font-light -mt-3">
                      Diseñar y ejecutar <span className="text-blue-900 font-semibold">infraestructura de alto valor</span>, garantizando estándares superiores de calidad y acabados de excelencia en cada proyecto, así como comercializar productos agroindustriales bajo criterios de sostenibilidad, eficiencia y alto estándar competitivo.
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* VISIÓN */}
              <FadeIn direction="right" delay={0.2}>
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 flex flex-col h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 group">
                  {/* Gradient top bar */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-green-700 via-green-500 to-emerald-400" />
                  {/* Decorative blurred circle */}
                  <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-green-50 opacity-60 blur-2xl pointer-events-none" />
                  <div className="absolute bottom-4 right-4 w-24 h-24 rounded-full bg-green-100/30 blur-xl pointer-events-none" />
                  {/* Decorative dots grid */}
                  <div className="absolute top-6 right-6 grid grid-cols-3 gap-1 opacity-20 pointer-events-none">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-1 h-1 rounded-full bg-green-700" />
                    ))}
                  </div>

                  <div className="relative z-10 p-10 flex flex-col flex-1">
                    {/* Number label */}
                    <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-green-600 mb-6">02 — Visión</span>
                    {/* Icon */}
                    <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-green-100 transition-transform duration-300 group-hover:scale-105">
                      <FiEye className="text-green-700" size={26} />
                    </div>
                    {/* Title */}
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-5 tracking-tight uppercase">Visión</h3>
                    {/* Divider accent */}
                    <div className="w-10 h-0.5 bg-gradient-to-r from-green-700 to-emerald-400 rounded-full mb-5" />
                    {/* Quote mark */}
                    <span className="text-5xl leading-none font-serif text-green-100 select-none mb-1">"</span>
                    <p className="text-base text-gray-600 leading-relaxed font-light -mt-3">
                      Ser el hub empresarial referente en Perú en <span className="text-green-700 font-semibold">infraestructura y agroindustria</span>, reconocido como socio estratégico clave en proyectos de gran envergadura y en agroexportación de calidad mundial.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Workflow: Krea + Terra → HUB DE ALIANZAS */}
            <div className="mb-24">
              {/* Label */}
              <FadeIn direction="up" delay={0.1} className="text-center mb-12">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">Modelo de Integración</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-2 uppercase tracking-tight">
                  Nuestro <span className="text-blue-900">Ecosistema</span>
                </h3>
              </FadeIn>

              {/* Nodes */}
              <div className="flex flex-col lg:flex-row items-center justify-center">

                {/* KREA */}
                <FadeIn direction="left" delay={0.2} className="flex flex-col lg:flex-row items-center">
                  <Link to="/servicios" className="group flex-shrink-0 text-center">
                    <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1 group-hover:border-blue-900/20">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                        <svg className="w-5 h-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div className="font-bold text-lg text-blue-900 uppercase tracking-wide">Krea</div>
                      <div className="text-[9px] font-semibold uppercase tracking-widest text-slate-400 mt-1">Servicios</div>
                    </div>
                    <p className="mt-4 text-xs text-slate-500 max-w-[160px] mx-auto leading-relaxed">
                      Infraestructura y acabados de excelencia
                    </p>
                  </Link>

                  {/* Connector → HUB */}
                  <div className="my-5 lg:my-0 lg:mx-6 flex flex-col lg:flex-row items-center gap-1">
                    <div className="w-px h-8 lg:w-12 lg:h-px border-l-2 lg:border-l-0 lg:border-t-2 border-dashed border-slate-300" />
                    <svg className="w-3 h-3 text-slate-400 rotate-90 lg:rotate-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M14 10l-5 5V5l5 5z" />
                    </svg>
                  </div>
                </FadeIn>

                {/* HUB DE ALIANZAS */}
                <FadeIn direction="up" delay={0.4} className="flex-shrink-0 z-10 text-center my-2 lg:my-0">
                  <Link to="/nosotros" className="group block">
                    <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl flex flex-col items-center justify-center transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-green-900/20" />
                      <div className="relative z-10 text-center px-4">
                        <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mx-auto mb-4">
                          <svg className="w-5 h-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                        </div>
                        <div className="font-bold text-xl tracking-tight leading-tight">HUB DE</div>
                        <div className="font-bold text-xl tracking-tight text-blue-300">ALIANZAS</div>
                        <div className="mt-3 h-px w-8 bg-white/20 mx-auto" />
                        <p className="mt-3 text-[10px] text-white/40 uppercase tracking-widest font-medium">
                          Núcleo estratégico
                        </p>
                      </div>
                    </div>
                  </Link>
                  <p className="mt-4 text-xs text-slate-500 max-w-[180px] mx-auto leading-relaxed">
                    Un modelo integrado que une sectores estratégicos
                  </p>
                </FadeIn>

                {/* Connector HUB → TERRA */}
                <FadeIn direction="right" delay={0.6} className="flex flex-col lg:flex-row items-center">
                  <div className="my-5 lg:my-0 lg:mx-6 flex flex-col lg:flex-row items-center gap-1">
                    <svg className="w-3 h-3 text-slate-400 rotate-90 lg:rotate-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M14 10l-5 5V5l5 5z" />
                    </svg>
                    <div className="w-px h-8 lg:w-12 lg:h-px border-l-2 lg:border-l-0 lg:border-t-2 border-dashed border-slate-300" />
                  </div>

                  {/* TERRA */}
                  <Link to="/productos" className="group flex-shrink-0 text-center">
                    <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1 group-hover:border-green-700/20">
                      <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center mb-3">
                        <svg className="w-5 h-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                        </svg>
                      </div>
                      <div className="font-bold text-lg text-green-700 uppercase tracking-wide">Terra</div>
                      <div className="text-[9px] font-semibold uppercase tracking-widest text-slate-400 mt-1">Productos</div>
                    </div>
                    <p className="mt-4 text-xs text-slate-500 max-w-[160px] mx-auto leading-relaxed">
                      Productos agroindustriales de origen sostenible y comercio justo.                    </p>
                  </Link>
                </FadeIn>

              </div>
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
              Ser el nexo estratégico entre la <span className="text-blue-400 font-medium">construcción </span> y <span className="text-green-400 font-medium">la agroindustria,
              </span> integrando infraestructura de alto valor y producción sostenible para generar crecimiento rentable y desarrollo de largo plazo.
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}