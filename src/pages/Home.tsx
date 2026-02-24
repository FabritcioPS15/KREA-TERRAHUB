import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="grid md:grid-cols-2 h-screen w-full overflow-hidden relative">
        {/* LADO IZQUIERDO: KREA (Construcción) */}
        <div className="relative flex items-center justify-center p-6 sm:p-8 md:p-16 h-[50vh] md:h-screen overflow-hidden group">
          {/* Imagen de fondo */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
            style={{
              backgroundImage:
                'url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2&fm=webp)',
            }}
          />
          {/* Overlay color - Gradiente sutil para permitir ver parte de la imagen */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-blue-900/60 to-blue-900/90" />

          <div className="relative z-10 text-right text-white flex flex-col items-end w-full max-w-xl ml-auto">
            <FadeIn direction="up" delay={0.2} className="w-full">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-4 sm:mb-6 leading-[1.1] tracking-tight drop-shadow-lg text-shadow-3d text-center md:text-right">
                INFRAESTRUCTURA<br />
                Y ACABADOS DE<br />
                EXCELENCIA
              </h1>
              <div className="flex justify-center md:justify-end">
                <Link
                  to="/servicios"
                  className="inline-flex items-center gap-3 px-8 py-3 rounded-md text-white border border-white/40 bg-blue-900/90 hover:bg-white hover:text-blue-900 transition-all duration-300 font-medium text-sm tracking-wide"
                >
                  Ver Servicios
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* LADO DERECHO: TERRA (Agroindustria) */}
        <div className="relative flex items-center justify-center p-6 sm:p-8 md:p-16 h-[50vh] md:h-screen overflow-hidden group">
          {/* Imagen de fondo */}
          <img
            src="/assets/images/Arboldecacao.webp"
            alt="TERRA"
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Overlay color - Gradiente sutil para permitir ver parte de la imagen */}
          <div className="absolute inset-0 bg-gradient-to-l from-green-950/20 via-green-900/60 to-green-900/90" />

          <div className="relative z-10 text-left text-white flex flex-col items-start w-full max-w-xl mr-auto">
            <FadeIn direction="up" delay={0.4} className="w-full">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-4 sm:mb-6 leading-[1.1] tracking-tight drop-shadow-lg text-shadow-3d-green text-center md:text-left">
                PRODUCTOS<br />
                AGROINDUSTRIALES<br />
                DE ORIGEN
              </h1>
              <div className="flex justify-center md:justify-start">
                <Link
                  to="/productos"
                  className="inline-flex items-center gap-3 px-8 py-3 rounded-md text-white border border-white/40 bg-green-800/90 hover:bg-white hover:text-green-800 transition-all duration-300 font-medium text-sm tracking-wide"
                >
                  Ver Productos
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Mezcla central orgánica para suavizar la transición entre las dos áreas */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-64 lg:w-96 z-10 pointer-events-none hidden md:block overflow-hidden">
          <motion.svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="h-full w-full"
            animate={{
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <defs>
              <linearGradient id="hero-blend" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#164e63" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#14532d" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <motion.path
              d="M50 0 C 70 20, 30 40, 50 60 C 70 80, 30 100, 50 100"
              stroke="url(#hero-blend)"
              strokeWidth="60"
              fill="none"
              className="blur-3xl"
              animate={{
                d: [
                  "M50 0 C 70 20, 30 40, 50 60 C 70 80, 30 100, 50 100",
                  "M50 0 C 30 25, 70 75, 50 100",
                  "M50 0 C 70 20, 30 40, 50 60 C 70 80, 30 100, 50 100"
                ]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.svg>
        </div>

        {/* Separador móvil horizontal orgánico */}
        <div className="absolute top-[50%] left-0 w-full h-32 -translate-y-1/2 z-10 pointer-events-none md:hidden overflow-hidden">
          <motion.svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="h-full w-full rotate-90 scale-x-150"
            animate={{
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <path
              d="M50 0 C 70 20, 30 40, 50 60 C 70 80, 30 100, 50 100"
              stroke="url(#hero-blend)"
              strokeWidth="40"
              fill="none"
              className="blur-2xl opacity-40"
            />
          </motion.svg>
        </div>
      </div>

      <section className="bg-slate-950 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-green-900/20 opacity-50" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight max-w-4xl mx-auto">
              Tu Hub Empresarial: <span className="font-semibold italic text-blue-400">Construimos solidez</span> y <span className="font-semibold italic text-green-400">cultivamos excelencia.</span>
            </h2>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn direction="up">
              <span className="text-blue-900 font-bold tracking-widest text-xs uppercase mb-4 block">Nuestra Esencia</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">Quiénes Somos</h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                En Krea & Terra Hub somos el punto de encuentro entre la ingeniería de alto nivel y la riqueza agroindustrial. Impulsamos el desarrollo a través de la ejecución de proyectos civiles, mineros y electromecánicos de excelencia; mientras llevamos lo mejor de nuestra tierra al mercado con productos agroindustriales de origen. Nuestro compromiso es inquebrantable: solidez estructural, innovación y sostenibilidad en cada operación."
              </p>
              <Link
                to="/nosotros"
                className="inline-flex items-center gap-2 px-10 py-4 bg-slate-900 text-white rounded-md hover:bg-blue-900 transition-all duration-300 font-medium text-sm tracking-wide shadow-xl hover:shadow-blue-900/20"
              >
                Más sobre nosotros
                <FiArrowRight size={18} />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
