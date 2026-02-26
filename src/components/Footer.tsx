import { FiMail, FiPhone, FiShield, FiBriefcase } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative text-white overflow-hidden">
      {/* Organic Top Divider (Wave) - Now relative to create space at the top */}
      <div className="relative overflow-hidden leading-[0] transform rotate-180 z-20">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[60px]"
        >
          <defs>
            <linearGradient id="footer-wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#020617" />
              <stop offset="100%" stopColor="#064e3b" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path
            d="M0,49.98c0,0,113.13,30.41,254.2,27.02c141.07-3.39,215.24-52.41,318.64-42.33c103.4,10.08,181.18,48.24,247.95,49.27c66.77,1.03,138.38-27.35,178.43-12.75V0H0V49.98z"
            fill="url(#footer-wave-gradient)"
            opacity="0.3"
          ></path>
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="url(#footer-wave-gradient)"
          ></path>
        </svg>
      </div>

      {/* Main Footer Background and Content Area */}
      <div className="bg-[#020617] relative -mt-[1px]">
        {/* Decorative Gradient Overlays (Mesh Gradient Effect) */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none ">
          <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[70%] bg-blue-900/40 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[60%] bg-green-900/30 blur-[120px] rounded-full" />
        </div>

        {/* Fusion Gradient Layer - Creates the 'melting' effect into the footer */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#020617] via-[#020617]/80 to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-900/20 via-green-900/10 to-transparent pointer-events-none z-0 opacity-50 blur-3xl animate-pulse" />

        <div className="relative z-10 container mx-auto px-6 pt-16 md:pt-24 pb-12">
          {/* Top CTA Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 mb-20">
            {/* Identity Column */}
            <div className="lg:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
              <FadeIn direction="up" delay={0.1}>
                <Link to="/" className="inline-block mb-8">
                  <div className="flex items-center gap-4 bg-white/5 p-3 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <img
                      src="/assets/logo.png"
                      alt="KREA & TERRA HUB"
                      className="h-12 w-auto object-contain"
                      loading="lazy"
                    />
                    <div className="flex flex-col text-left">
                      <span className="font-bold text-sm tracking-tight bg-gradient-to-r from-blue-200 to-green-200 bg-clip-text text-transparent uppercase">KREA & TERRA HUB</span>
                      <span className="text-[10px] text-white/50 font-medium tracking-widest">EXCELLENCE HUB S.A.C.</span>
                    </div>
                  </div>
                </Link>
                <p className="hidden md:block text-white/50 text-base leading-relaxed mb-6 max-w-sm">
                  Un HUB empresarial estratégico que fusiona la excelencia en infraestructura con la pureza agroindustrial de origen. Construimos futuro, cultivamos legado.
                </p>
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  {[
                    { icon: FaFacebookF, href: "#", label: "Facebook" },
                    { icon: FaInstagram, href: "#", label: "Instagram" },
                    { icon: FaYoutube, href: "#", label: "YouTube" },
                    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-blue-900/50 hover:border-blue-400/30 transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <social.icon size={16} className="group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Nav Columns */}
            <div className="hidden md:block lg:col-span-2">
              <FadeIn direction="up" delay={0.2}>
                <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white/90 mb-8 px-1">Navegación</h4>
                <ul className="space-y-4">
                  {[
                    { name: "Inicio", to: "/" },
                    { name: "Nosotros", to: "/nosotros" },
                    { name: "Servicios", to: "/servicios" },
                    { name: "Productos", to: "/productos" },
                    { name: "Portafolio", to: "/portafolio" },
                    { name: "Blog", to: "/blog" },
                    { name: "Contacto", to: "/contacto" },
                  ].map((link, i) => (
                    <li key={i}>
                      <Link to={link.to} className="text-white/50 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                        <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:w-2 transition-all" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>

            <div className="lg:col-span-2">
              <FadeIn direction="up" delay={0.3}>
                <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400 mb-8 px-1">KREA (Servicios)</h4>
                <ul className="space-y-4">
                  {[
                    { name: "Drywall & Estructuras", to: "/servicios/drywall-estructuras" },
                    { name: "Melamina y Muebles", to: "/servicios/melamina-muebles" },
                    { name: "Instalaciones Eléctricas", to: "/servicios/instalaciones-electricas" },
                    { name: "Gasfitería y Saneamiento", to: "/servicios/gasfiteria-saneamiento" },
                    { name: "Proyectos Civiles", to: "/servicios/proyectos-civiles-electromecanicos" },
                    { name: "Acabados & Arquitectura", to: "/servicios/acabados-arquitectura-interior" },
                  ].map((link, i) => (
                    <li key={i}>
                      <Link to={link.to} className="text-white/50 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                        <span className="w-1 h-1 bg-blue-900 rounded-full group-hover:w-2 transition-all" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
            <div className="hidden md:block lg:col-span-2">
              <FadeIn direction="up" delay={0.3}>
                <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-green-400 mb-8 px-1">TERRA (Origen)</h4>
                <ul className="space-y-4 mb-6">
                  {[
                    { name: "Cacao Orgánico", to: "/productos" },
                    { name: "Chocolate Premium", to: "/productos" },
                    { name: "Café de Altura", to: "/productos" },
                    { name: "Aceites Naturales", to: "/productos" },
                  ].map((link, i) => (
                    <li key={i}>
                      <Link to={link.to} className="text-white/50 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                        <span className="w-1 h-1 bg-green-700 rounded-full group-hover:w-2 transition-all" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>

            <div className="hidden md:block lg:col-span-2">
              <FadeIn direction="up" delay={0.35}>
                <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white/90 mb-8 px-1">Talento K&T</h4>
                <div className="flex flex-col gap-4">
                  <p className="text-[11px] text-white/40 leading-relaxed uppercase tracking-widest">¿Quieres ser parte de nuestro equipo?</p>
                  <Link
                    to="/contacto"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-semibold text-xs hover:bg-white/10 hover:border-white/20 transition-all duration-300 group whitespace-nowrap"
                  >
                    <FiBriefcase className="text-blue-400 group-hover:scale-110 transition-transform" />
                    Trabaja con nosotros
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Contact Column */}
            <div className="lg:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
              <FadeIn direction="up" delay={0.4}>
                <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white/90 mb-8 px-1">Atención HUB</h4>
                <div className="space-y-6 flex flex-col items-center md:items-start">
                  <a href="tel:+51987654321" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-blue-900/20 border border-blue-400/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-400 group-hover:text-white transition-all duration-300">
                      <FiPhone size={18} />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest mb-1">Central Telefónica</span>
                      <span className="text-white font-medium group-hover:text-blue-200 transition-colors">+51 987 654 321</span>
                    </div>
                  </a>

                  <a href="mailto:krea@terrahub.com" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-green-900/20 border border-green-400/20 flex items-center justify-center text-green-400 group-hover:bg-green-400 group-hover:text-white transition-all duration-300">
                      <FiMail size={18} />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest mb-1">Correo Corporativo</span>
                      <span className="text-white font-medium group-hover:text-green-200 transition-colors">krea@terrahub.com</span>
                    </div>
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 pb-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-8 text-[11px] font-medium text-white/30 uppercase tracking-[0.2em]">
                <Link to="/privacidad" className="flex items-center gap-2 hover:text-white transition-colors"><FiShield className="text-blue-500" /> Privacidad</Link>
                <Link to="/terminos" className="flex items-center gap-2 hover:text-white transition-colors"><FiBriefcase className="text-green-500" /> Términos</Link>
              </div>
              <div className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em] text-center md:text-right">
                © {currentYear} KREA & TERRA HUB S.A.C. — Lima, Perú
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
