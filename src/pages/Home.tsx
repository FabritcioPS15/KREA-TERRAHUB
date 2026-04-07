import { useEffect, useState } from 'react';
import { FiArrowRight, FiTarget, FiEye, FiCheckCircle, FiShield, FiUsers, FiAward, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../components/FadeIn';

const HERO_SLIDES = [
  {
    id: 1,
    title: "Innovación & Sostenibilidad",
    subtitle: "KREA & TERRA HUB",
    description: "Uniendo la excelencia técnica de la ingeniería con la pureza de la agroindustria peruana.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    accent: "blue"
  },
  {
    id: 2,
    title: "Infraestructura de Clase Mundial",
    subtitle: "INFRIX",
    description: "Soluciones integrales en construcción, acabados y proyectos civiles de alta complejidad.",
    image: "https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    accent: "blue"
  },
  {
    id: 3,
    title: "Excelencia Agroindustrial",
    subtitle: "INTALLPA FOODS",
    description: "Procesamos y exportamos los mejores productos de nuestra tierra hacia el mercado global.",
    image: "https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    accent: "green"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <div className="min-h-screen bg-white">
      {/* WRAPPER PARA FIT VIEWPORT (HERO + MARQUEE) */}
      <div className="h-screen flex flex-col relative overflow-hidden">
        {/* HERO SECTION DYNAMICS */}
        <section className="relative flex-1 overflow-hidden bg-slate-950">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              {/* Imagen de fondo con efecto zoom suave */}
              <motion.div 
                initial={{ scale: 1.15, filter: 'blur(0px)' }}
                animate={{ scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 8, ease: "easeOut" }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${HERO_SLIDES[currentSlide].image})` }}
              />
              {/* Overlay gradiente complejo y artístico */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/40 to-black/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Contenido del Hero con Glassmorphism */}
              <div className="absolute inset-0 container mx-auto px-6 flex items-center pt-20">
                <motion.div 
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-3xl p-6 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[3rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden"
                >
                  {/* Luz decorativa interior */}
                  <div className={`absolute -top-24 -right-24 w-64 h-64 blur-[120px] rounded-full opacity-20 
                    ${HERO_SLIDES[currentSlide].accent === 'green' ? 'bg-green-400' : 'bg-blue-400'}`} />

                  <motion.span 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className={`inline-block px-4 py-1 rounded-full text-[8px] md:text-[10px] uppercase font-black tracking-[0.3em] mb-4 border border-white/20
                      ${HERO_SLIDES[currentSlide].accent === 'green' ? 'text-green-400' : 'text-blue-400'}`}
                  >
                    {HERO_SLIDES[currentSlide].title}
                  </motion.span>
                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-[5rem] font-black text-white mb-4 leading-[0.9] tracking-tighter"
                  >
                    {HERO_SLIDES[currentSlide].subtitle}
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-sm md:text-lg lg:text-xl text-white/50 mb-8 leading-relaxed font-light max-w-xl"
                  >
                    {HERO_SLIDES[currentSlide].description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="flex flex-wrap gap-4"
                  >
                    <a 
                      href="#unidades-negocio"
                      className={`group flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-700 shadow-2xl
                      ${HERO_SLIDES[currentSlide].accent === 'green' ? 'bg-green-600 hover:bg-green-500 text-white' : 'bg-blue-800 hover:bg-blue-700 text-white'}`}
                    >
                      Explorar Ahora
                      <FiArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controles del Hero - Responsivos */}
          <div className="absolute bottom-6 md:bottom-10 right-6 md:right-10 flex gap-3 z-20">
            <button onClick={prevSlide} className="w-10 h-10 md:w-12 md:h-12 rounded-xl border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all backdrop-blur-xl group">
              <FiChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button onClick={nextSlide} className="w-10 h-10 md:w-12 md:h-12 rounded-xl border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all backdrop-blur-xl group">
              <FiChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          {/* Indicadores Minimalistas */}
          <div className="absolute bottom-6 md:bottom-10 left-6 md:right-32 flex items-center gap-4 z-20">
            {HERO_SLIDES.map((_, idx) => (
              <button key={idx} onClick={() => setCurrentSlide(idx)} className="group relative py-2">
                <div className={`h-[2px] transition-all duration-700 rounded-full ${currentSlide === idx ? 'w-10 md:w-16 bg-white' : 'w-4 md:w-8 bg-white/20'}`} />
              </button>
            ))}
          </div>
        </section>

        {/* SECCIÓN LOGO MARQUEE (CARRUSEL RÁPIDO) */}
        <div className="bg-slate-100 py-6 md:py-8 border-b border-slate-200 overflow-hidden relative group h-[80px] md:h-[100px] flex items-center">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-100 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-100 to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex whitespace-nowrap"
            animate={{ x: [0, -1920] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="flex items-center gap-12 px-12">
                <span className="text-xl md:text-3xl font-black text-slate-300 hover:text-slate-900 transition-colors tracking-tighter uppercase italic">KREA & TERRA HUB</span>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                <span className="text-xl md:text-3xl font-black text-slate-300 hover:text-slate-900 transition-colors tracking-tighter uppercase">INFRIX</span>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                <span className="text-xl md:text-3xl font-black text-slate-300 hover:text-slate-900 transition-colors tracking-tighter uppercase italic">INTALLPA FOODS</span>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* SECCIÓN 1: QUIÉNES SOMOS */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <FadeIn direction="right">
                <span className="text-blue-600 font-black tracking-[0.3em] text-xs uppercase mb-4 block">Presentación</span>
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tighter">
                  KREA & TERRA <span className="bg-gradient-to-r from-blue-900 to-green-600 bg-clip-text text-transparent">HUB</span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Somos un ecosistema empresarial diversificado que une la excelencia técnica de la ingeniería con la pureza de la agroindustria. En <span className="font-bold text-slate-800">KREA & TERRA HUB</span>, nos dedicamos a transformar ideas en realidades tangibles y productos excepcionales, siempre bajo un estándar de calidad global.
                </p>
                <div className="grid grid-cols-2 gap-8 py-8 border-t border-slate-100">
                  <div>
                    <h4 className="text-3xl font-black text-blue-900">10+</h4>
                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mt-1">Años de Experticia</p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-black text-green-600">100%</h4>
                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mt-1">Compromiso</p>
                  </div>
                </div>
              </FadeIn>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <FadeIn direction="left" delay={0.2}>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group">
                  <img 
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
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
                  Ofrecer soluciones integrales de alta calidad tanto en el sector de infraestructura como en el agroindustrial, impulsando el desarrollo sostenible y generando valor excepcional para nuestros clientes y la sociedad.
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
                  Ser reconocidos para el 2030 como el holding líder en innovación y sostenibilidad en el Perú, expandiendo nuestra presencia en el mercado internacional con productos y servicios que trascienden fronteras.
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
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FiCheckCircle, title: "Integridad", desc: "Actuamos con honestidad y transparencia en cada proyecto.", color: "text-blue-600", bg: "bg-blue-50" },
              { icon: FiShield, title: "Calidad", desc: "No comprometemos el estándar de excelencia en lo que entregamos.", color: "text-green-600", bg: "bg-green-50" },
              { icon: FiUsers, title: "Trabajo en Equipo", desc: "La colaboración es la clave de nuestro éxito colectivo.", color: "text-blue-900", bg: "bg-slate-100" },
              { icon: FiAward, title: "Sostenibilidad", desc: "Protegemos el futuro a través de prácticas responsables.", color: "text-green-900", bg: "bg-emerald-50" },
            ].map((principio, idx) => (
              <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                <div className="p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-slate-50/50 transition-all duration-300 text-center">
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
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">Unidades Estratégicas</h2>
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
                <span className="text-blue-400 font-black tracking-[0.3em] text-[10px] uppercase mb-4 block">Infraestructura & Construcción</span>
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

