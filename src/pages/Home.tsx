import { FiArrowRight, FiTarget, FiEye, FiCheckCircle, FiShield, FiUsers, FiAward, FiLayers, FiMap, FiHeart, FiZap, FiLink, FiGlobe, FiTrendingUp } from 'react-icons/fi';
import FadeIn from '../components/FadeIn';

export default function Home() {

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION SIMPLE */}
      <section className="relative h-screen overflow-hidden bg-slate-950">
        {/* Imagen de fondo */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/assets/images/ImagenKT.svg)' }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/40 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        {/* Contenido del Hero */}
        <div className="absolute inset-0 container mx-auto px-6 flex items-center pt-20">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 rounded-full text-[10px] uppercase font-black tracking-[0.3em] mb-4 border border-white/20 text-blue-400">
              Ecosistema Empresarial
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-black text-white mb-4 leading-[0.9] tracking-tighter">
              KREA & TERRA HUB
            </h1>
            <p className="text-sm md:text-lg lg:text-xl text-white/50 mb-8 leading-relaxed font-light max-w-xl">
              Somos un HUB empresarial que integra y desarrolla soluciones en diversos sectores, generando valor sostenible y crecimiento continuo.
            </p>
            <a 
              href="#unidades-negocio"
              className="group flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-700 shadow-2xl bg-blue-800 hover:bg-blue-700 text-white"
            >
              Conocenos
              <FiArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN 1: QUIÉNES SOMOS */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <FadeIn direction="right">
                <span className="text-blue-600 font-black tracking-[0.3em] text-xs uppercase mb-4 block">Presentación</span>
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-normal">
                  KREA & TERRA <span className="bg-gradient-to-r from-blue-900 to-green-600 bg-clip-text text-transparent">HUB</span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Somos un ecosistema empresarial que integra y desarrolla negocios en diversos sectores, impulsando soluciones estratégicas con enfoque en eficiencia, innovación y crecimiento sostenible. En KREA & TERRA HUB, transformamos oportunidades en empresas sólidas,generando valor real y resultados de alto impacto.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-slate-100">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <FiAward className="text-blue-900" size={24} />
                      <h4 className="text-3xl font-black text-blue-900">10+</h4>
                    </div>
                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mt-1">Años de Experticia</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <FiHeart className="text-green-600" size={24} />
                      <h4 className="text-3xl font-black text-green-600">100%</h4>
                    </div>
                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mt-1">Compromiso</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <FiLayers className="text-blue-900" size={24} />
                      <h4 className="text-3xl font-black text-blue-900">3+</h4>
                    </div>
                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mt-1">Sectores Desarrollados</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <FiMap className="text-green-600" size={24} />
                      <h4 className="text-3xl font-black text-green-600">Nacional</h4>
                    </div>
                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mt-1">Cobertura</p>
                  </div>
                </div>
              </FadeIn>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <FadeIn direction="left" delay={0.2}>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group">
                  <img 
                    src="/assets/images/Imagen2.jpeg" 
                    alt="Equipo Krea & Terra Hub" 
                    className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent" />
                </div>
                {/* Elemento flotante */}
                <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl hidden md:block max-w-[240px]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <FiUsers size={24} />
                    </div>
                    <span className="font-bold text-slate-800">Calidad Humana</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">Trabajamos con los mejores profesionales en cada área.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: MISIÓN Y VISIÓN */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 font-primary">
          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 h-full hover:shadow-xl transition-all duration-500 group">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform">
                  <FiTarget size={32} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Nuestra Misión</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Integrar, desarrollar y potenciar negocios en diversos sectores, brindando soluciones estratégicas que generen valor sostenible, eficiencia operativa y crecimiento para nuestros clientes y aliados.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 h-full hover:shadow-xl transition-all duration-500 group">
                <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 mb-8 group-hover:scale-110 transition-transform">
                  <FiEye size={32} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Nuestra Visión</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Consolidarnos al 2030 como un HUB empresarial líder en el Perú, con presencia internacional, reconocido por integrar y escalar negocios en múltiples sectores con innovación, sostenibilidad y alto impacto.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: PRINCIPIOS */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeIn direction="up">
              <span className="text-blue-600 font-black tracking-[0.3em] text-xs uppercase mb-4 block">Fundamentos</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Nuestros Principios</h2>
              <p className="text-slate-500 text-lg">La base de todas nuestras operaciones y el compromiso con nuestra excelencia.</p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none pb-4 lg:pb-0 scrollbar-hide">
            {[
              { icon: FiCheckCircle, title: "Integridad", desc: "Actuamos con honestidad y transparencia en cada proyecto.", color: "text-blue-600", bg: "bg-blue-50" },
              { icon: FiZap, title: "Excelencia Operativa", desc: "Buscamos altos estándares en cada negocio, asegurando eficiencia, precisión y resultados confiables.", color: "text-green-600", bg: "bg-green-50" },
              { icon: FiLink, title: "Integración Estratégica", desc: "Conectamos y articulamos negocios para generar sinergias, optimizar recursos y potenciar resultados.", color: "text-blue-900", bg: "bg-slate-100" },
              { icon: FiGlobe, title: "Sostenibilidad", desc: "Protegemos el futuro a través de prácticas responsables.", color: "text-green-900", bg: "bg-emerald-50" },
              { icon: FiTrendingUp, title: "Innovación y Crecimiento", desc: "Impulsamos el desarrollo continuo de nuevos negocios y soluciones con enfoque en crecimiento sostenible.", color: "text-green-900", bg: "bg-emerald-50" },
            ].map((principio, idx) => (
              <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                <div className="p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-slate-50/50 transition-all duration-300 text-center snap-center min-w-[280px] sm:min-w-0">
                  <div className={`w-14 h-14 rounded-xl ${principio.bg} ${principio.color} flex items-center justify-center mx-auto mb-6`}>
                    <principio.icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{principio.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{principio.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: LÍNEAS DE NEGOCIO */}
      <section id="unidades-negocio" className="pb-24 scroll-mt-24">
        <div className="container mx-auto px-6 mb-16">
          <FadeIn direction="up">
            <span className="text-slate-400 font-black tracking-[0.3em] text-xs uppercase mb-4 block">Estructura Corporativa</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">Unidades de Negocio</h2>
          </FadeIn>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-[3rem] mx-6 shadow-2xl border border-slate-100">
          {/* INFRIX */}
          <div className="relative group overflow-hidden bg-blue-900 py-32 px-12 md:px-20 text-white min-h-[500px] flex items-center">
            {/* Imagen de fondo */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-30 group-hover:opacity-40"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2&fm=webp)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-transparent" />
            
            <div className="relative z-10 w-full">
              <FadeIn direction="right">
                <span className="text-blue-400 font-black tracking-[0.3em] text-[10px] uppercase mb-4 block">NGENIERÍA & CONSTRUCCIÓN</span>
                <h3 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">INFRIX</h3>
                <p className="text-white/70 text-lg mb-10 max-w-md leading-relaxed">
                  Excelencia en ingeniería, acabados y desarrollo de proyectos civiles de alto impacto.
                </p>
                <a
                  href="https://infrix-web.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 px-10 py-4 rounded-full bg-white text-blue-900 hover:bg-blue-50 transition-all duration-500 font-black text-xs uppercase tracking-widest shadow-xl"
                >
                  Ir a Infrix
                  <FiArrowRight size={18} />
                </a>
              </FadeIn>
            </div>
          </div>

          {/* INTALLPA FOODS */}
          <div className="relative group overflow-hidden bg-green-900 py-32 px-12 md:px-20 text-white min-h-[500px] flex items-center">
            {/* Imagen de fondo */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-30 group-hover:opacity-40"
              style={{
                backgroundImage: 'url(/assets/images/Arboldecacao.webp)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-green-950 to-transparent" />
            
            <div className="relative z-10 w-full text-right flex flex-col items-end">
              <FadeIn direction="left">
                <span className="text-green-400 font-black tracking-[0.3em] text-[10px] uppercase mb-4 block text-right">Agroindustria & Exportación</span>
                <h3 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">INTALLPA <span className="text-green-500">FOODS</span></h3>
                <p className="text-white/70 text-lg mb-10 max-w-md leading-relaxed ml-auto">
                  Cultivando y procesando los mejores productos de la tierra con visión de calidad global.
                </p>
                <a
                  href="https://intallpa-web.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 px-10 py-4 rounded-full bg-white text-green-900 hover:bg-green-50 transition-all duration-500 font-black text-xs uppercase tracking-widest shadow-xl"
                >
                  Ir a Intallpa Foods
                  <FiArrowRight size={18} />
                </a>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

