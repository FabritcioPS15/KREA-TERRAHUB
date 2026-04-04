import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiHome, FiUsers, FiBriefcase, FiPackage, FiMail, FiPhone, FiFileText, FiChevronDown } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'servicios' | 'productos' | null>(null);
  const [expandedItem, setExpandedItem] = useState<'servicios' | 'productos' | null>(null);

  const serviciosRef = useRef<HTMLDivElement>(null);
  const productosRef = useRef<HTMLDivElement>(null);

  const isHomePage = location.pathname === '/';

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleExpanded = (item: 'servicios' | 'productos') => {
    setExpandedItem(expandedItem === item ? null : item);
  };

  const desktopLinkClass = (accent: 'blue' | 'green', active: boolean) => {
    const base = 'relative text-sm font-semibold px-1 py-2 transition-colors duration-200 focus:outline-none group';

    if (isHomePage && !isScrolled) {
      return `${base} ${active ? 'text-white' : 'text-white/80 hover:text-white'}`;
    }

    if (active) {
      return `${base} ${accent === 'green' ? 'text-green-700' : 'text-blue-900'}`;
    }

    return `${base} text-gray-700 hover:text-gray-900`;
  };

  const underlineClass = (accent: 'blue' | 'green', active: boolean) => {
    const base = 'absolute bottom-0 left-0 h-0.5 transition-all duration-500 ease-in-out origin-left';
    const color = isHomePage && !isScrolled ? 'bg-white' : accent === 'green' ? 'bg-green-600' : 'bg-blue-900';
    return `${base} ${color} ${active ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100'}`;
  };

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    setExpandedItem(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (serviciosRef.current && !serviciosRef.current.contains(event.target as Node) &&
          productosRef.current && !productosRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
                className={`flex items-center px-3 py-1.5 lg:px-4 lg:py-2 transition-all duration-500 bg-transparent shadow-none`}
              >
                <div className="relative flex items-center h-8 lg:h-10">
                  <img
                    src="/assets/logo.png"
                    alt="KREA & TERRA HUB S.A.C."
                    className={`h-full object-contain transition-all duration-300 transform hover:scale-105 ${isHomePage ? 'brightness-0 invert' : ''}`}
                  />
                </div>
                <div className="flex items-baseline ml-2 sm:ml-4">
                  <span className={`font-bold text-[13px] sm:text-base leading-none uppercase tracking-tight ${isHomePage ? 'text-white' : 'bg-gradient-to-r from-blue-900 to-green-600 bg-clip-text text-transparent'}`}>
                    KREA & TERRA HUB
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {!isHomePage && (
            <div className="hidden lg:flex flex-none items-center">
              <div className="relative flex items-center">
                <nav className="relative flex items-center gap-6 lg:gap-8">
                  <NavLink to="/" className={({ isActive }) => desktopLinkClass('blue', isActive)}>
                    {({ isActive }) => (
                      <>
                        Inicio
                        <span className={underlineClass('blue', isActive)} />
                      </>
                    )}
                  </NavLink>
                  <NavLink to="/nosotros" className={({ isActive }) => desktopLinkClass('blue', isActive)}>
                    {({ isActive }) => (
                      <>
                        Nosotros
                        <span className={underlineClass('blue', isActive)} />
                      </>
                    )}
                  </NavLink>
                  <div
                    ref={serviciosRef}
                    className="relative h-full flex items-center"
                  >
                    <div className="flex items-center">
                      <NavLink to="/servicios" className={({ isActive }) => desktopLinkClass('blue', isActive || activeDropdown === 'servicios')}>
                        {({ isActive }) => (
                          <>
                            <div className="flex items-center gap-1.5 pr-6">
                              Servicios (Krea)
                            </div>
                            <span className={underlineClass('blue', isActive || activeDropdown === 'servicios')} />
                          </>
                        )}
                      </NavLink>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setActiveDropdown(activeDropdown === 'servicios' ? null : 'servicios');
                        }}
                        className="absolute right-0 p-2 rounded-lg transition-colors z-20"
                        aria-label="Toggle servicios dropdown"
                      >
                        <motion.div
                          animate={{ rotate: activeDropdown === 'servicios' ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                                                  <FiChevronDown 
                            size={14} 
                            className={isHomePage && !isScrolled 
                              ? 'text-white' 
                              : activeDropdown === 'servicios' || location.pathname.startsWith('/servicios') 
                                ? 'text-blue-900' 
                                : 'text-gray-500'
                            } 
                          />
                        </motion.div>
                      </button>
                    </div>
                    
                    <AnimatePresence>
                      {activeDropdown === 'servicios' && (
                         <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 p-2"
                        >
                          {[
                            { name: "Drywall & Estructuras", to: "/servicios/drywall-estructuras" },
                            { name: "Melamina y Muebles", to: "/servicios/melamina-muebles" },
                            { name: "Instalaciones Eléctricas", to: "/servicios/instalaciones-electricas" },
                            { name: "Gasfitería y Saneamiento", to: "/servicios/gasfiteria-saneamiento" },
                            { name: "Proyectos Civiles", to: "/servicios/proyectos-civiles-electromecanicos" },
                            { name: "Acabados & Arquitectura", to: "/servicios/acabados-arquitectura-interior" },
                          ].map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 text-gray-700 hover:text-blue-900 transition-all group"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:scale-125 transition-transform" />
                              <span className="text-xs font-semibold uppercase tracking-wider">{item.name}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div
                    ref={productosRef}
                    className="relative h-full flex items-center"
                  >
                    <div className="flex items-center">
                      <NavLink to="/productos" className={({ isActive }) => desktopLinkClass('green', isActive || activeDropdown === 'productos')}>
                        {({ isActive }) => (
                          <>
                            <div className="flex items-center gap-1.5 pr-6">
                              Producto (Terra)
                            </div>
                            <span className={underlineClass('green', isActive || activeDropdown === 'productos')} />
                          </>
                        )}
                      </NavLink>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setActiveDropdown(activeDropdown === 'productos' ? null : 'productos');
                        }}
                        className="absolute right-0 p-2 rounded-lg transition-colors z-20"
                        aria-label="Toggle productos dropdown"
                      >
                        <motion.div
                          animate={{ rotate: activeDropdown === 'productos' ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                                                                          <FiChevronDown 
                            size={14} 
                            className={isHomePage && !isScrolled 
                              ? 'text-white' 
                              : activeDropdown === 'productos' || location.pathname.startsWith('/productos') 
                                ? 'text-green-700' 
                                : 'text-gray-500'
                            } 
                          />
                        </motion.div>
                      </button>
                    </div>

                    <AnimatePresence>
                      {activeDropdown === 'productos' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 p-2"
                        >
                          {[
                            { name: "Cacao Orgánico", to: "/productos" },
                            { name: "Chocolate Premium", to: "/productos" },
                            { name: "Café de Altura", to: "/productos" },
                            { name: "Aceites Naturales", to: "/productos" },
                          ].map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-green-50 text-gray-700 hover:text-green-700 transition-all group"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 group-hover:scale-125 transition-transform" />
                              <span className="text-xs font-semibold uppercase tracking-wider">{item.name}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <NavLink to="/blog" className={({ isActive }) => desktopLinkClass('blue', isActive)}>
                    {({ isActive }) => (
                      <>
                        Blog
                        <span className={underlineClass('blue', isActive)} />
                      </>
                    )}
                  </NavLink>
                </nav>
              </div>
            </div>
          )}

          {/* Lado Derecho: Botón de Contacto y Menú Móvil */}
          <div className="flex-1 flex justify-end items-center gap-4">
            {!isHomePage && (
              <Link
                to="/contacto"
                className={`hidden lg:inline-flex px-5 py-2 rounded-md font-bold text-xs uppercase tracking-widest transition-all duration-300 ${isHomePage && !isScrolled
                  ? 'bg-white text-blue-950 hover:bg-gray-100 shadow-sm'
                  : 'bg-blue-900 text-white hover:bg-blue-800 shadow-md'
                  }`}
              >
                Contacto
              </Link>
            )}

            {!isHomePage && (
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
            )}
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
            className="fixed inset-0 z-[60] bg-white lg:hidden overflow-y-auto"
          >
            {/* Fondo Decorativo para el Menú - Suavizado para fondo blanco */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
              <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[50%] bg-blue-900/40 blur-[120px] rounded-full" />
              <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[50%] bg-green-900/30 blur-[120px] rounded-full" />
            </div>

            <nav className="relative min-h-screen flex flex-col p-6 pt-8">
              {/* Logo y Botón de Cierre */}
              <div className="flex items-center justify-between mb-8">
                <Link to="/" className="flex items-center" onClick={closeMenu}>
                  <div className="flex items-center px-4 py-2 bg-slate-50 rounded-xl border border-slate-100 shadow-sm">
                    <img src="/assets/logo.png" alt="Logo" className="h-8 w-auto object-contain" />
                    <span className="ml-2 font-bold text-xs bg-gradient-to-r from-blue-900 to-green-600 bg-clip-text text-transparent uppercase tracking-tight">KREA & TERRA HUB</span>
                  </div>
                </Link>
                <button
                  className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-all duration-300"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <FiX size={24} />
                </button>
              </div>

              <div className="container mx-auto max-w-lg">
                <div className="space-y-1.5 mb-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-4 block px-4">
                      Menú Principal
                    </span>
                  </motion.div>

                  {[
                    { to: "/", label: "Inicio", icon: FiHome, color: "blue" },
                    { to: "/nosotros", label: "Nosotros", icon: FiUsers, color: "blue" },
                    { 
                      label: "Servicios (Krea)", 
                      icon: FiBriefcase, 
                      color: "blue",
                      isAccordion: true,
                      type: 'servicios',
                      items: [
                        { name: "Drywall & Estructuras", to: "/servicios/drywall-estructuras" },
                        { name: "Melamina y Muebles", to: "/servicios/melamina-muebles" },
                        { name: "Instalaciones Eléctricas", to: "/servicios/instalaciones-electricas" },
                        { name: "Gasfitería y Saneamiento", to: "/servicios/gasfiteria-saneamiento" },
                        { name: "Proyectos Civiles", to: "/servicios/proyectos-civiles-electromecanicos" },
                        { name: "Acabados & Arquitectura", to: "/servicios/acabados-arquitectura-interior" },
                      ]
                    },
                    { 
                      label: "Producto (Terra)", 
                      icon: FiPackage, 
                      color: "green",
                      isAccordion: true,
                      type: 'productos',
                      items: [
                        { name: "Cacao Orgánico", to: "/productos" },
                        { name: "Chocolate Premium", to: "/productos" },
                        { name: "Café de Altura", to: "/productos" },
                        { name: "Aceites Naturales", to: "/productos" },
                      ]
                    },
                    { to: "/blog", label: "Blog", icon: FiFileText, color: "blue" },
                    { to: "/contacto", label: "Contacto", icon: FiMail, color: "blue" },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + idx * 0.05, ease: "easeOut" }}
                    >
                      {item.isAccordion ? (
                        <div className="mb-1">
                          <button
                            onClick={() => toggleExpanded(item.type as 'servicios' | 'productos')}
                            className={`w-full group relative flex items-center justify-between py-3 px-4 rounded-xl transition-all duration-300 ${expandedItem === item.type
                              ? 'bg-slate-50 border border-slate-100 shadow-sm'
                              : 'hover:bg-slate-50 border border-transparent'
                              }`}
                          >
                            <div className="flex items-center gap-4">
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${expandedItem === item.type
                                ? item.color === 'green' ? 'bg-green-600 text-white' : 'bg-blue-800 text-white'
                                : 'bg-slate-100 text-slate-400 group-hover:text-slate-600 group-hover:bg-slate-200'
                                }`}>
                                <item.icon size={18} />
                              </div>
                              <span className={`text-[15px] font-bold tracking-tight transition-all duration-300 ${expandedItem === item.type ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-900'
                                }`}>
                                {item.label}
                              </span>
                            </div>
                            <FiChevronDown 
                              className={`transition-transform duration-300 ${expandedItem === item.type ? 'rotate-180 text-slate-900' : 'text-slate-400'}`} 
                              size={18} 
                            />
                          </button>
                          
                          <AnimatePresence>
                            {expandedItem === item.type && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden bg-slate-50/50 rounded-b-xl px-4"
                              >
                                <div className="py-2 space-y-1 border-l-2 border-slate-100 ml-5 my-2">
                                  {item.items?.map((subItem) => (
                                    <Link
                                      key={subItem.to}
                                      to={subItem.to}
                                      onClick={closeMenu}
                                      className="flex items-center gap-3 py-2.5 px-4 text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-wider"
                                    >
                                      <span className={`w-1.5 h-1.5 rounded-full ${item.color === 'green' ? 'bg-green-500' : 'bg-blue-600'} opacity-40`} />
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={item.to as string}
                          onClick={closeMenu}
                          className={`group relative flex items-center justify-between py-3 px-4 rounded-xl transition-all duration-300 ${isActive(item.to as string)
                            ? 'bg-slate-50 border border-slate-100 shadow-sm'
                            : 'hover:bg-slate-50 border border-transparent'
                            }`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${isActive(item.to as string)
                              ? item.color === 'green' ? 'bg-green-600 text-white' : 'bg-blue-800 text-white'
                              : 'bg-slate-100 text-slate-400 group-hover:text-slate-600 group-hover:bg-slate-200'
                              }`}>
                              <item.icon size={18} />
                            </div>
                            <span className={`text-[15px] font-bold tracking-tight transition-all duration-300 ${isActive(item.to as string) ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-900'
                              }`}>
                              {item.label}
                            </span>
                          </div>
                          {isActive(item.to as string) && (
                            <div
                              className={`w-2 h-2 rounded-full ${item.color === 'green' ? 'bg-green-500' : 'bg-blue-600'}`}
                            />
                          )}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                  className="pt-6 border-t border-slate-100 mt-2"
                >
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 block px-4">Información de Contacto</span>
                      <div className="flex flex-col gap-2.5">
                        <a href="tel:+51921820630" className="flex items-center gap-4 text-slate-600 hover:text-slate-900 font-medium p-3 bg-slate-50 rounded-xl border border-transparent hover:border-slate-200 transition-all duration-300">
                          <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
                            <FiPhone size={18} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[8px] uppercase tracking-widest text-slate-400 font-black mb-0.5">Central Hub</span>
                            <span className="text-sm font-bold text-slate-800">+51 921 820 630</span>
                          </div>
                        </a>
                        <a href="mailto:proyectos@kt-hub.com" className="flex items-center gap-4 text-slate-600 hover:text-slate-900 font-medium p-3 bg-slate-50 rounded-xl border border-transparent hover:border-slate-200 transition-all duration-300">
                          <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
                            <FiMail size={18} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[8px] uppercase tracking-widest text-slate-400 font-black mb-0.5">Ventas y Proyectos</span>
                            <span className="text-sm font-bold text-slate-800 underline underline-offset-4">proyectos@kt-hub.com</span>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-6 py-2">
                      <a href="#" className="w-11 h-11 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-white hover:shadow-lg transition-all duration-300 shadow-sm"><FaFacebookF size={18} /></a>
                      <a href="#" className="w-11 h-11 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-pink-600 hover:bg-white hover:shadow-lg transition-all duration-300 shadow-sm"><FaInstagram size={18} /></a>
                      <a href="#" className="w-11 h-11 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-red-600 hover:bg-white hover:shadow-lg transition-all duration-300 shadow-sm"><FaYoutube size={18} /></a>
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
