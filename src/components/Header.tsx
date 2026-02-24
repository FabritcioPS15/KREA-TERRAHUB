import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiHome, FiUsers, FiBriefcase, FiPackage, FiMail, FiPhone } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [marker, setMarker] = useState<{ left: number; width: number; visible: boolean }>({
    left: 0,
    width: 0,
    visible: false,
  });

  const isHomePage = location.pathname === '/';

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const markerColorClass = useMemo(() => {
    if (isHomePage && !isScrolled) return 'bg-white/25';
    return location.pathname.startsWith('/productos') ? 'bg-green-600/20' : 'bg-blue-900/15';
  }, [isHomePage, isScrolled, location.pathname]);

  const desktopLinkClass = (path: string, accent: 'blue' | 'green') => {
    const base =
      'relative text-sm font-semibold px-4 py-2 rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
    const active = isActive(path);

    if (isHomePage && !isScrolled) {
      return `${base} focus-visible:ring-white/60 focus-visible:ring-offset-transparent ${active ? 'text-white' : 'text-white/80 hover:text-white'
        }`;
    }

    if (active) {
      return `${base} ${accent === 'green'
        ? 'text-green-700 focus-visible:ring-green-300 focus-visible:ring-offset-white'
        : 'text-blue-900 focus-visible:ring-blue-300 focus-visible:ring-offset-white'
        }`;
    }

    return `${base} text-gray-700 hover:text-gray-900 focus-visible:ring-gray-300 focus-visible:ring-offset-white`;
  };

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useLayoutEffect(() => {
    const updateMarker = () => {
      const navEl = navRef.current;
      const activeEl = linkRefs.current[location.pathname] ?? null;
      if (!navEl || !activeEl) {
        setMarker((m) => ({ ...m, visible: false }));
        return;
      }

      const navRect = navEl.getBoundingClientRect();
      const activeRect = activeEl.getBoundingClientRect();

      setMarker({
        left: activeRect.left - navRect.left,
        width: activeRect.width,
        visible: true,
      });
    };

    const raf = window.requestAnimationFrame(updateMarker);
    window.addEventListener('resize', updateMarker);
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener('resize', updateMarker);
    };
  }, [location.pathname]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed w-full top-0 z-50 transition-colors duration-300 ${isHomePage && !isScrolled
        ? 'bg-transparent backdrop-blur-none shadow-none border-none'
        : !isScrolled
          ? 'bg-white shadow-sm border-b border-gray-200'
          : 'bg-white/70 backdrop-blur-xl shadow-[0_10px_30px_-20px_rgba(0,0,0,0.35)] border-b border-gray-200/60'
        }`}
    >
      <div className="container mx-auto px-6 py-3 flex items-center">
        {/* Lado Izquierdo: Logo */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <div
              className={`flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-xl transition-all duration-300 ${isHomePage && !isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : ''
                }`}
            >
              <div className="relative flex items-center h-8 md:h-10">
                <img
                  src="/assets/logo.png"
                  alt="KREA & TERRA HUB S.A.C."
                  className="h-full object-contain drop-shadow-sm hover:drop-shadow-md transition-all duration-300 transform hover:scale-105"
                />
              </div>
              <div className="flex items-baseline ml-2 sm:ml-4">
                <span className="font-bold text-[13px] sm:text-base leading-none bg-gradient-to-r from-blue-900 to-green-600 bg-clip-text text-transparent uppercase tracking-tight">
                  KREA & TERRA HUB
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Centro: Navegación Principal */}
        <div className="hidden md:flex flex-none items-center">
          <div ref={navRef} className="relative flex items-center">
            <div
              className={`absolute top-1/2 -translate-y-1/2 h-9 rounded-md transition-[left,width,opacity] duration-300 ease-out ${markerColorClass} ${marker.visible ? 'opacity-100' : 'opacity-0'
                }`}
              style={{ left: marker.left, width: marker.width }}
              aria-hidden="true"
            />

            <nav className="relative flex items-center gap-1 lg:gap-2">
              <Link
                to="/"
                ref={(el) => {
                  linkRefs.current['/'] = el;
                }}
                className={desktopLinkClass('/', 'blue')}
              >
                Inicio
              </Link>
              <Link
                to="/nosotros"
                ref={(el) => {
                  linkRefs.current['/nosotros'] = el;
                }}
                className={desktopLinkClass('/nosotros', 'blue')}
              >
                Nosotros
              </Link>
              <Link
                to="/servicios"
                ref={(el) => {
                  linkRefs.current['/servicios'] = el;
                }}
                className={desktopLinkClass('/servicios', 'blue')}
              >
                Servicios (Krea)
              </Link>
              <Link
                to="/productos"
                ref={(el) => {
                  linkRefs.current['/productos'] = el;
                }}
                className={desktopLinkClass('/productos', 'green')}
              >
                Producto (Terra)
              </Link>
              <Link
                to="/portafolio"
                ref={(el) => {
                  linkRefs.current['/portafolio'] = el;
                }}
                className={desktopLinkClass('/portafolio', 'blue')}
              >
                Portafolio
              </Link>
              <Link
                to="/blog"
                ref={(el) => {
                  linkRefs.current['/blog'] = el;
                }}
                className={desktopLinkClass('/blog', 'blue')}
              >
                Blog
              </Link>
            </nav>
          </div>
        </div>

        {/* Lado Derecho: Botón de Contacto y Menú Móvil */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <Link
            to="/contacto"
            className={`hidden md:inline-flex px-5 py-2 rounded-md font-bold text-xs uppercase tracking-widest transition-all duration-300 ${isHomePage && !isScrolled
              ? 'bg-white text-blue-950 hover:bg-gray-100 shadow-sm'
              : 'bg-blue-900 text-white hover:bg-blue-800 shadow-md'
              }`}
          >
            Contacto
          </Link>

          <button
            className={`md:hidden transition-colors ${isHomePage && !isScrolled
              ? 'text-white hover:text-white/80'
              : 'text-gray-600 hover:text-gray-800'
              }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50 overflow-hidden"
          >
            <nav className="container mx-auto px-6 pt-6 pb-12 flex flex-col h-full">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 px-2">Menú Principal</span>

                <Link
                  to="/"
                  onClick={closeMenu}
                  className={`flex items-center gap-4 text-lg font-medium transition-all duration-300 py-3 px-4 rounded-2xl ${isActive('/') ? 'bg-blue-50 text-blue-900 shadow-sm' : 'text-slate-600 active:bg-slate-50'
                    }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${isActive('/') ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    <FiHome size={18} />
                  </div>
                  Inicio
                </Link>

                <Link
                  to="/nosotros"
                  onClick={closeMenu}
                  className={`flex items-center gap-4 text-lg font-medium transition-all duration-300 py-3 px-4 rounded-2xl ${isActive('/nosotros') ? 'bg-blue-50 text-blue-900 shadow-sm' : 'text-slate-600 active:bg-slate-50'
                    }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${isActive('/nosotros') ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    <FiUsers size={18} />
                  </div>
                  Nosotros
                </Link>

                <Link
                  to="/servicios"
                  onClick={closeMenu}
                  className={`flex items-center gap-4 text-lg font-medium transition-all duration-300 py-3 px-4 rounded-2xl ${isActive('/servicios') ? 'bg-blue-50 text-blue-900 shadow-sm' : 'text-slate-600 active:bg-slate-50'
                    }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${isActive('/servicios') ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    <FiBriefcase size={18} />
                  </div>
                  Servicios (Krea)
                </Link>

                <Link
                  to="/productos"
                  onClick={closeMenu}
                  className={`flex items-center gap-4 text-lg font-medium transition-all duration-300 py-3 px-4 rounded-2xl ${isActive('/productos') ? 'bg-green-50 text-green-800 shadow-sm' : 'text-slate-600 active:bg-slate-50'
                    }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${isActive('/productos') ? 'bg-green-700 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    <FiPackage size={18} />
                  </div>
                  Productos (Terra)
                </Link>

                <Link
                  to="/portafolio"
                  onClick={closeMenu}
                  className={`flex items-center gap-4 text-lg font-medium transition-all duration-300 py-3 px-4 rounded-2xl ${isActive('/portafolio') ? 'bg-blue-50 text-blue-900 shadow-sm' : 'text-slate-600 active:bg-slate-50'
                    }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${isActive('/portafolio') ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    <FiBriefcase size={18} />
                  </div>
                  Portafolio
                </Link>

                <Link
                  to="/blog"
                  onClick={closeMenu}
                  className={`flex items-center gap-4 text-lg font-medium transition-all duration-300 py-3 px-4 rounded-2xl ${isActive('/blog') ? 'bg-blue-50 text-blue-900 shadow-sm' : 'text-slate-600 active:bg-slate-50'
                    }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${isActive('/blog') ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    <FiBriefcase size={18} />
                  </div>
                  Blog
                </Link>

                <Link
                  to="/contacto"
                  onClick={closeMenu}
                  className={`flex items-center gap-4 text-lg font-medium transition-all duration-300 py-3 px-4 rounded-2xl ${isActive('/contacto') ? 'bg-blue-50 text-blue-900 shadow-sm' : 'text-slate-600 active:bg-slate-50'
                    }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${isActive('/contacto') ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    <FiMail size={18} />
                  </div>
                  Contacto
                </Link>
              </div>

              <div className="mt-auto pt-10 border-t border-slate-100">
                <div className="flex flex-col gap-6">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 block px-2">Atención Directa</span>
                    <div className="flex flex-col gap-3">
                      <a href="tel:+516802256956" className="flex items-center gap-3 text-slate-700 font-medium px-2">
                        <FiPhone className="text-blue-900" size={18} />
                        (680) 225-6956
                      </a>
                      <a href="mailto:krea@terrahub.com" className="flex items-center gap-3 text-slate-700 font-medium px-2">
                        <FiMail className="text-blue-900" size={18} />
                        krea@terrahub.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 px-2">
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600"><FaFacebookF size={16} /></a>
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600"><FaInstagram size={16} /></a>
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600"><FaYoutube size={16} /></a>
                  </div>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
