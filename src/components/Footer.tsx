import { FiMail, FiPhone } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-950 via-blue-900 to-green-900 text-white border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:gap-10 grid-cols-1 md:grid-cols-3">
          <FadeIn direction="up" delay={0.1}>
            <div className="flex items-center justify-center md:justify-start">
              <div className="relative flex items-center h-14 bg-white/10 rounded-xl p-2">
                <img
                  src="/assets/logo.png"
                  alt="KREA & TERRA HUB S.A.C."
                  loading="lazy"
                  className="h-full object-contain drop-shadow-sm"
                />
              </div>
            </div>

            <p className="mt-5 text-sm text-white/70 leading-relaxed max-w-sm hidden md:block">
              Hub empresarial que integra soluciones constructivas y productos agroindustriales, con enfoque en
              calidad, ejecución y origen.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} className="hidden md:block">
            <div className="text-sm font-semibold tracking-wide text-white/90">Enlaces</div>
            <div className="mt-4 grid gap-3 text-sm">
              <Link className="text-white/70 hover:text-white transition-colors" to="/">
                Inicio
              </Link>
              <Link className="text-white/70 hover:text-white transition-colors" to="/servicios">
                Servicios
              </Link>
              <Link className="text-white/70 hover:text-white transition-colors" to="/productos">
                Productos
              </Link>
              <Link className="text-white/70 hover:text-white transition-colors" to="/nosotros">
                Nosotros
              </Link>
              <Link className="text-white/70 hover:text-white transition-colors" to="/contacto">
                Contacto
              </Link>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3} className="text-center md:text-left">
            <div className="text-sm font-semibold tracking-wide text-white/90 mb-4 md:mb-0">Contacto Directo</div>
            <div className="flex flex-col items-center md:items-start gap-4">
              <a
                href="tel:+51680225-6956"
                className="inline-flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <FiPhone size={14} className="group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-medium">(680) 225-6956</span>
              </a>
              <a
                href="mailto:krea@terrahub.com"
                className="inline-flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <FiMail size={14} className="group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-medium text-xs sm:text-sm">krea@terrahub.com</span>
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center md:justify-start gap-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-xs text-white/50">© {new Date().getFullYear()} KREA & TERRA HUB S.A.C.</div>
          <div className="text-xs text-white/50">Todos los derechos reservados.</div>
        </div>
      </div>
    </footer>
  );
}
