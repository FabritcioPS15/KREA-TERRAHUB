import { FiBriefcase } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { Link, NavLink, useLocation } from 'react-router-dom';
import FadeIn from './FadeIn';

export default function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const currentYearValue = new Date().getFullYear();

  const underlineClass = (active: boolean, color: string = 'bg-blue-500') => 
    `absolute bottom-0 left-0 h-0.5 ${color} transition-all duration-500 ease-in-out origin-left ${active ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100'}`;

  return (
    <footer className="relative text-white bg-black pt-16 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className={`flex flex-col items-center text-center ${isHomePage ? 'max-w-4xl mx-auto' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12'}`}>
          {/* Logo & Description Column */}
          <div className={`${isHomePage ? 'w-full flex flex-col items-center' : 'lg:col-span-5 flex flex-col items-start text-left'}`}>
            <FadeIn direction="up" delay={0.1}>
              <Link to="/" className={`inline-flex flex-col items-center gap-4 mb-6 group ${isHomePage ? 'items-center' : 'items-start'}`}>
                <img
                  src="/assets/logo.png"
                  alt="KREA & TERRA HUB"
                  className="h-20 w-auto object-contain brightness-0 invert transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="flex flex-col">
                  <span className="font-black text-3xl tracking-tighter text-white uppercase leading-none">K&T HUB</span>
                  <span className="text-[9px] text-white/30 font-bold tracking-[0.4em] uppercase mt-1.5">Excellence Strategic Hub</span>
                </div>
              </Link>
              <p className={`text-white/40 text-sm leading-relaxed text-pretty font-medium mb-8 ${isHomePage ? 'max-w-2xl mx-auto' : 'max-w-sm'}`}>
                Somos una empresa estratégicamente integrada que fusiona la excelencia técnica en infraestructura de <span className="text-blue-400 font-bold">KREA</span> con la pureza agroindustrial de <span className="text-green-400 font-bold">TERRA</span>.
              </p>
              <div className={`flex items-center gap-5 ${isHomePage ? 'justify-center' : ''}`}>
                {[
                  { icon: FaFacebookF, href: "#", hover: "hover:text-blue-500" },
                  { icon: FaInstagram, href: "#", hover: "hover:text-pink-500" },
                  { icon: FaYoutube, href: "#", hover: "hover:text-red-500" },
                  { icon: FaLinkedinIn, href: "#", hover: "hover:text-blue-400" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className={`text-white/20 transition-all duration-300 hover:scale-110 ${social.hover}`}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Navigation Column */}
          {!isHomePage && (
            <div className="lg:col-span-3">
              <FadeIn direction="up" delay={0.2}>
                <h4 className="text-lg font-bold text-white mb-6">Acerca de K&T</h4>
                <ul className="space-y-3">
                  {[
                    { name: "Inicio", to: "/" },
                    { name: "Nosotros", to: "/nosotros" },
                    { name: "Servicios", to: "/servicios" },
                    { name: "Productos", to: "/productos" },
                    { name: "Blog", to: "/blog" },
                    { name: "Contacto", to: "/contacto" },
                  ].map((link, i) => (
                    <li key={i}>
                      <NavLink 
                        to={link.to} 
                        className={({ isActive }) => `text-white/50 hover:text-white transition-all text-sm font-medium flex items-center relative group py-0.5 ${isActive ? 'text-white' : ''}`}
                      >
                        {({ isActive }) => (
                          <>
                            {link.name}
                            <span className={underlineClass(isActive, 'bg-gradient-to-r from-blue-500 to-green-500')} />
                          </>
                        )}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          )}

          {/* Contact Column */}
          {!isHomePage && (
            <div className="lg:col-span-4">
              <FadeIn direction="up" delay={0.3}>
                <h4 className="text-lg font-bold text-white mb-6">Contacto</h4>
                <div className="space-y-5">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[9px] text-blue-400/40 uppercase font-black tracking-widest">Escríbenos</span>
                    <a href="mailto:proyectos@kt-hub.com" className="text-sm font-bold text-white/70 hover:text-white transition-colors">proyectos@kt-hub.com</a>
                  </div>
                  
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[9px] text-green-400/40 uppercase font-black tracking-widest">Llámanos</span>
                    <a href="tel:+51921820630" className="text-sm font-bold text-white/70 hover:text-white transition-colors">+51 921 820 630</a>
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <span className="text-[9px] text-white/20 uppercase font-black tracking-widest">Oficina</span>
                    <p className="text-sm font-medium text-white/50 leading-snug">
                      Lima, Perú<br />
                      Sectores Estratégicos K&T
                    </p>
                  </div>

                  <div className="pt-6 mt-4">
                    <Link
                      to="/contacto"
                      className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-blue-500/50"
                    >
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
                      <div className="relative z-10 w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                        <FiBriefcase size={20} />
                      </div>
                      <div className="relative z-10 flex flex-col items-start translate-y-0.5">
                        <span className="text-[10px] text-white/30 uppercase font-black tracking-[0.2em] leading-none mb-1">Únete ahora</span>
                        <span className="text-sm font-black text-white uppercase tracking-widest leading-none">Trabaja con nosotros</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-16 pt-6 pb-2 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-[10px] font-medium text-white/20 uppercase tracking-widest">
              <Link to="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
              <Link to="/terminos" className="hover:text-white transition-colors">Términos</Link>
            </div>
            <div className="text-[9px] font-bold text-white/10 uppercase tracking-[0.3em]">
              © {currentYearValue} K&T HUB S.A.C.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
