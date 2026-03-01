import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiHome, FiUsers, FiBriefcase, FiPackage, FiMail, FiPhone, FiFileText } from 'react-icons/fi';
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

  const desktopLinkClass = (accent: 'blue' | 'green', active: boolean) => {
    const base =
      'relative text-sm font-semibold px-4 py-2 rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

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

  // Cerrar menú automáticamente cuando cambie la ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

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
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${isHomePage && !isScrolled
          ? 'bg-white/0 backdrop-blur-0 shadow-none border-transparent'
          : !isScrolled
            ? 'bg-white shadow-sm border-gray-200'
            : 'bg-white/80 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-gray-200/50'
          }`}
        style={{ willChange: 'background-color, backdrop-filter, box-shadow' }}
      >
        <div className="container mx-auto px-6 py-3 flex items-center">
          {/* Lado Izquierdo: Logo */}
          <div className="flex-1 flex justify-start">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <div
                className={`flex items-center px-3 py-1.5 lg:px-4 lg:py-2 rounded-xl transition-all duration-500 ${isHomePage && !isScrolled ? 'bg-white/90 shadow-lg backdrop-blur-sm' : 'bg-transparent shadow-none'
                  }`}
              >
                <div className="relative flex items-center h-8 lg:h-10">
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
          <div className="hidden lg:flex flex-none items-center">
            <div ref={navRef} className="relative flex items-center">
              <div
                className={`absolute top-1/2 -translate-y-1/2 h-9 rounded-md transition-[left,width,opacity] duration-300 ease-out ${markerColorClass} ${marker.visible ? 'opacity-100' : 'opacity-0'
                  }`}
                style={{ left: marker.left, width: marker.width }}
                aria-hidden="true"
              />

              <nav className="relative flex items-center gap-1 lg:gap-2">
                <NavLink
                  to="/"
                  ref={(el) => {
                    linkRefs.current['/'] = el;
                  }}
                  className={({ isActive }) => desktopLinkClass('blue', isActive)}
                >
                  Inicio
                </NavLink>
                <NavLink
                  to="/nosotros"
                  ref={(el) => {
                    linkRefs.current['/nosotros'] = el;
                  }}
                  className={({ isActive }) => desktopLinkClass('blue', isActive)}
                >
                  Nosotros
                </NavLink>
                <NavLink
                  to="/servicios"
                  ref={(el) => {
                    linkRefs.current['/servicios'] = el;
                  }}
                  className={({ isActive }) => desktopLinkClass('blue', isActive)}
                >
                  Servicios (Krea)
                </NavLink>
                <NavLink
                  to="/productos"
                  ref={(el) => {
                    linkRefs.current['/productos'] = el;
                  }}
                  className={({ isActive }) => desktopLinkClass('green', isActive)}
                >
                  Producto (Terra)
                </NavLink>
                <NavLink
                  to="/blog"
                  ref={(el) => {
                    linkRefs.current['/blog'] = el;
                  }}
                  className={({ isActive }) => desktopLinkClass('blue', isActive)}
                >
                  Blog
                </NavLink>
              </nav>
            </div>
          </div>

          {/* Lado Derecho: Botón de Contacto y Menú Móvil */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <Link
              to="/contacto"
              className={`hidden lg:inline-flex px-5 py-2 rounded-md font-bold text-xs uppercase tracking-widest transition-all duration-300 ${isHomePage && !isScrolled
                ? 'bg-white text-blue-950 hover:bg-gray-100 shadow-sm'
                : 'bg-blue-900 text-white hover:bg-blue-800 shadow-md'
                }`}
            >
              Contacto
            </Link>

            <button
              className={`lg:hidden transition-colors ${isHomePage && !isScrolled
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

      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-slate-950/95 backdrop-blur-2xl lg:hidden overflow-y-auto"
          >
            {/* Fondo Decorativo para el Menú */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
              <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[50%] bg-blue-900/60 blur-[120px] rounded-full" />
              <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[50%] bg-green-900/40 blur-[120px] rounded-full" />
            </div>

            <nav className="relative min-h-screen flex flex-col p-6 pt-8">
              {/* Logo y Botón de Cierre */}
              <div className="flex items-center justify-between mb-8">
                <Link to="/" className="flex items-center" onClick={closeMenu}>
                  <div className="flex items-center px-4 py-2 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                    <img src="/assets/logo.png" alt="Logo" className="h-8 w-auto object-contain" />
                    <span className="ml-2 font-bold text-xs bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent uppercase tracking-tight">KREA & TERRA HUB</span>
                  </div>
                </Link>
                <button
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <FiX size={24} />
                </button>
              </div>

              <div className="container mx-auto max-w-lg">
                <div className="space-y-0.5 mb-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <span className="text-[9px] font-bold text-blue-400 uppercase tracking-[0.3em] mb-3 block px-4 opacity-70">
                      Navegación
                    </span>
                  </motion.div>

                  {[
                    { to: "/", label: "Inicio", icon: FiHome, color: "blue" },
                    { to: "/nosotros", label: "Nosotros", icon: FiUsers, color: "blue" },
                    { to: "/servicios", label: "Servicios (Krea)", icon: FiBriefcase, color: "blue" },
                    { to: "/productos", label: "Producto (Terra)", icon: FiPackage, color: "green" },
                    { to: "/blog", label: "Blog", icon: FiFileText, color: "blue" },
                    { to: "/contacto", label: "Contacto", icon: FiMail, color: "blue" },
                  ].map((item, idx) => (
                    <motion.div
                      key={item.to}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + idx * 0.05, ease: "easeOut" }}
                    >
                      <Link
                        to={item.to}
                        onClick={closeMenu}
                        className={`group relative flex items-center justify-between py-2 px-4 rounded-xl transition-all duration-300 ${isActive(item.to)
                          ? 'bg-white/10 border border-white/10 shadow-lg'
                          : 'hover:bg-white/5 border border-transparent hover:border-white/5'
                          }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${isActive(item.to)
                            ? item.color === 'green' ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'
                            : 'bg-white/5 text-white/40 group-hover:text-white/70 group-hover:bg-white/10'
                            }`}>
                            <item.icon size={16} />
                          </div>
                          <span className={`text-base font-medium tracking-tight transition-all duration-300 ${isActive(item.to) ? 'text-white' : 'text-white/60 group-hover:text-white'
                            }`}>
                            {item.label}
                          </span>
                        </div>
                        {isActive(item.to) && (
                          <div
                            className={`w-2 h-2 rounded-full ${item.color === 'green' ? 'bg-green-400' : 'bg-blue-400'}`}
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                  className="pt-4 border-t border-white/10 mt-2"
                >
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] mb-2 block px-4">Conexión</span>
                      <div className="flex flex-col gap-2">
                        <a href="tel:+51987654321" className="flex items-center gap-4 text-white/70 hover:text-white font-medium p-2.5 bg-white/5 rounded-xl border border-transparent hover:border-white/10 transition-all duration-300">
                          <div className="w-8 h-8 rounded-lg bg-blue-900/40 flex items-center justify-center text-blue-300">
                            <FiPhone size={16} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[7px] uppercase tracking-widest text-white/30 font-bold">Central</span>
                            <span className="text-xs">+51 987 654 321</span>
                          </div>
                        </a>
                        <a href="mailto:krea@terrahub.com" className="flex items-center gap-4 text-white/70 hover:text-white font-medium p-2.5 bg-white/5 rounded-xl border border-transparent hover:border-white/10 transition-all duration-300">
                          <div className="w-8 h-8 rounded-lg bg-blue-900/40 flex items-center justify-center text-blue-300">
                            <FiMail size={16} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[7px] uppercase tracking-widest text-white/30 font-bold">Email</span>
                            <span className="text-xs">krea@terrahub.com</span>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-5 py-1">
                      <a href="#" className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/30 transition-all duration-300"><FaFacebookF size={16} /></a>
                      <a href="#" className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-pink-600/20 hover:border-pink-500/30 transition-all duration-300"><FaInstagram size={16} /></a>
                      <a href="#" className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-red-600/20 hover:border-red-500/30 transition-all duration-300"><FaYoutube size={16} /></a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
