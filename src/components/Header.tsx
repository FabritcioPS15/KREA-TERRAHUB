import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed w-full top-0 z-50 transition-all duration-700 ease-in-out ${!isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
          : 'bg-white/70 backdrop-blur-xl shadow-[0_10px_40px_rgb(0,0,0,0.08)] border-b border-white/20 py-2'
          }`}
        style={{ willChange: 'background-color, backdrop-filter, box-shadow, padding' }}
      >
        <div className="container mx-auto px-8 flex items-center justify-center">
          {/* Logo y Branding */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <div className="relative flex items-center h-10 lg:h-12">
                <img
                  src="/assets/logo.png"
                  alt="KREA & TERRA HUB"
                  className="h-full object-contain transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3"
                />
              </div>
              <div className="flex flex-col ml-4 leading-none text-center">
                <span className="font-black text-sm md:text-xl uppercase tracking-tighter bg-gradient-to-r from-blue-950 via-blue-800 to-green-700 bg-clip-text text-transparent">
                  KREA & TERRA HUB
                </span>
                <span className="text-[8px] md:text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] mt-1">Ecosistema Empresarial</span>
              </div>
            </Link>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {/* No hay menú móvil por ahora ya que no hay items en el navbar */}
      </AnimatePresence>
    </>
  );
}
