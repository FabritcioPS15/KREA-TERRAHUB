import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <div className="grid md:grid-cols-2 h-screen w-full overflow-hidden relative">
        {/* LADO IZQUIERDO: INFRIX (Infraestructura) */}
        <div className="relative flex items-center justify-center p-6 sm:p-8 md:p-16 h-[50vh] md:h-screen overflow-hidden group">
          {/* Imagen de fondo */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
            style={{
              backgroundImage:
                'url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2&fm=webp)',
            }}
          />
          {/* Overlay color - Gradiente premium azul profundo */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/60 via-blue-900/80 to-blue-900/95 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-90" />
          
          <div className="relative z-10 text-center md:text-right text-white flex flex-col items-center md:items-end w-full max-w-xl ml-auto">
            <FadeIn direction="up" delay={0.2} className="w-full">
              <span className="text-blue-400 font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">División Infraestructura</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-black mb-6 leading-[1] tracking-tighter drop-shadow-2xl">
                INFRIX
              </h1>
              <p className="text-white/70 text-sm md:text-base font-medium mb-8 max-w-md leading-relaxed tracking-wide">
                Soluciones de ingeniería, acabados de excelencia y desarrollo de proyectos civiles de alto nivel.
              </p>
              <div className="flex justify-center md:justify-end">
                <a
                  href="https://infrix-web.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 px-10 py-4 rounded-full text-white border border-white/20 bg-blue-600/20 backdrop-blur-md hover:bg-white hover:text-blue-900 transition-all duration-500 font-bold text-xs uppercase tracking-widest shadow-2xl"
                >
                  Explorar Infrix
                  <FiArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* LADO DERECHO: INTALLPA (Agroindustria) */}
        <div className="relative flex items-center justify-center p-6 sm:p-8 md:p-16 h-[50vh] md:h-screen overflow-hidden group">
          {/* Imagen de fondo */}
          <img
            src="/assets/images/Arboldecacao.webp"
            alt="INTALLPA"
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
          />
          {/* Overlay color - Gradiente premium verde profundo */}
          <div className="absolute inset-0 bg-gradient-to-l from-green-950/60 via-green-900/80 to-green-900/95 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-90" />

          <div className="relative z-10 text-center md:text-left text-white flex flex-col items-center md:items-start w-full max-w-xl mr-auto">
            <FadeIn direction="up" delay={0.4} className="w-full">
              <span className="text-green-400 font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">División Agroindustrial</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-black mb-6 leading-[1] tracking-tighter drop-shadow-2xl">
                INTALLPA
              </h1>
              <p className="text-white/70 text-sm md:text-base font-medium mb-8 max-w-md leading-relaxed tracking-wide">
                Productos agroindustriales de origen, cultivando excelencia y sostenibilidad desde la tierra.
              </p>
              <div className="flex justify-center md:justify-start">
                <a
                  href="https://intallpa-web.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 px-10 py-4 rounded-full text-white border border-white/20 bg-green-600/20 backdrop-blur-md hover:bg-white hover:text-green-900 transition-all duration-500 font-bold text-xs uppercase tracking-widest shadow-2xl"
                >
                  Explorar Intallpa
                  <FiArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Mezcla central orgánica mejorada */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-32 md:w-64 lg:w-96 z-10 pointer-events-none overflow-hidden">
          <motion.div 
            className="h-full w-full bg-gradient-to-r from-transparent via-black/40 to-transparent blur-3xl opacity-50"
            animate={{
              x: [-20, 20, -20],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
    </div>
  );
}
