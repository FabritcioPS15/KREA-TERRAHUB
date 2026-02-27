import { FaBolt, FaBuilding, FaTint, FaTools, FaProjectDiagram, FaDraftingCompass, FaCampground, FaPaintRoller } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FiHome, FiChevronRight } from 'react-icons/fi';
import FadeIn from '../components/FadeIn';
import Counter from '../components/Counter';

const services = [
  {
    id: 1,
    slug: 'drywall-estructuras',
    title: 'Drywall & Estructuras',
    description:
      'Construcción y diseño de estructuras en drywall para espacios modernos y funcionales con acabados de primera calidad.',
    icon: FaBuilding,
    image: '/assets/images/Drywall y estructuras.jpeg',
  },
  {
    id: 2,
    slug: 'melamina-muebles',
    title: 'Melamina y Muebles',
    description:
      'Diseño y fabricación de muebles personalizados en melamina, adaptados a tus necesidades y espacios específicos.',
    icon: FaTools,
    image: '/assets/images/Melamine y muebles.jpeg',
  },
  {
    id: 3,
    slug: 'instalaciones-electricas',
    title: 'Instalaciones Eléctricas',
    description:
      'Servicios completos de instalaciones eléctricas residenciales y comerciales con estándares de seguridad certificados.',
    icon: FaBolt,
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600&fm=webp',
  },
  {
    id: 4,
    slug: 'gasfiteria-saneamiento',
    title: 'Gasfitería y Saneamiento',
    description:
      'Instalación y mantenimiento de sistemas de gasfitería, agua y saneamiento con garantía y profesionalismo.',
    icon: FaTint,
    image: '/assets/images/Gasfiteria y saneamiento.jpeg',
  },
  {
    id: 5,
    slug: 'proyectos-civiles-electromecanicos',
    title: 'Proyectos Civiles y Electromecánicos',
    description:
      'Proyectos civiles y electromecánicos con ingeniería especializada y calidad garantizada.',
    icon: FaProjectDiagram,
    image: '/assets/images/Proyectos Civiles.jpeg',
    imagePosition: 'center 30%',
  },
  {
    id: 6,
    slug: 'acabados-arquitectura-interior',
    title: 'Acabados & Arquitectura Interior',
    description:
      'Diseño y desarrollo de espacios interiores, incorporando acabados de calidad y soluciones creativas. ',
    icon: FaDraftingCompass,
    image: '/assets/images/Acabados y arquitectura.jpeg',
    imagePosition: 'center 20%',

  },
  {
    id: 7,
    slug: 'campamentos-minerales-industriales',
    title: 'Campamentos Mineros e Industriales',
    description:
      'Soluciones modulares para campamentos mineros e industriales, enfocadas en seguridad y eficiencia.',
    icon: FaCampground,
    image: '/assets/images/Campamentos Minerales.jpeg',
  },
  {
    id: 8,
    slug: 'pintura-revestimiento',
    title: 'Pintura & Revestimiento',
    description:
      'Pintura y recubrimientos de alto desempeño con durabilidad y acabados de precisión.',
    icon: FaPaintRoller,
    image: '/assets/images/pintura y recubrimiento.webp',
  },
];

export default function Services() {
  return (
    <div className="min-h-screen pt-12">
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        }}
      >
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
        <div className="relative z-10 container mx-auto px-6 text-white">
          {/* Breadcrumb — móvil: botón back compacto */}
          <div className="mb-6 w-full">
            {/* Mobile: back button */}
            <Link
              to="/"
              className="sm:hidden inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-white bg-white/10 border border-white/15 rounded-lg px-3 py-1.5 backdrop-blur-md transition-all duration-200 hover:bg-white/15"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Inicio
            </Link>

            {/* Desktop: pill breadcrumb centrado */}
            <div className="hidden sm:flex justify-center">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-white/90 bg-white/10 border border-white/20 rounded-full px-5 py-2 backdrop-blur-md shadow-sm">
                <Link to="/" className="flex items-center gap-2 hover:text-white transition-colors">
                  <FiHome size={14} />
                  Inicio
                </Link>
                <FiChevronRight className="text-white/50" size={14} />
                <span className="text-white">Servicios</span>
              </div>
            </div>
          </div>

          <FadeIn direction="up" delay={0.2} className="text-center px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
              INFRAESTRUCTURA Y <span className="text-blue-400 italic font-light">ACABADOS</span>
              <br className="hidden sm:block" /> DE EXCELENCIA
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              // usar un azul más oscuro para las cards
              const colorClass = 'bg-blue-900';
               return (
                <FadeIn
                  key={service.id}
                  direction="up"
                  delay={index * 0.1}
                  className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* diagonal accent overlay (aparece al hover de la card) */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className={`${colorClass} absolute -top-8 -left-6 w-[70%] h-[50%] opacity-0 -rotate-12 transform transition-all duration-500 group-hover:opacity-[0.35] pointer-events-none`} />
                  </div>

                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      style={service.imagePosition ? { objectPosition: service.imagePosition } : undefined}
                    />
                    <div className="absolute inset-0 bg-blue-900 opacity-20 group-hover:opacity-10 transition-opacity" />
                  </div>
                  <div className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className={`w-16 h-16 ${colorClass} rounded-full flex items-center justify-center`}>
                        <service.icon className="text-white" size={32} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">{service.description}</p>
                    <div className="flex flex-col gap-3">
                      <Link
                        to={`/servicios/${service.slug}`}
                        className="w-full px-6 py-3 bg-white border border-slate-900 text-slate-900 rounded-md hover:bg-slate-50 transition-all duration-300 font-medium text-sm tracking-wide flex items-center justify-center gap-1 group/btn"
                      >
                        Conoce más
                        <FiChevronRight className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                      <button className="w-full px-6 py-3 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-all duration-300 font-medium text-sm tracking-wide">
                        Solicitar Cotización
                      </button>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn direction="up">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Calidad Garantizada</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Contamos con profesionales especializados que emplean materiales de alta calidad y tecnología moderna para garantizar resultados excepcionales en cada proyecto.
              </p>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <FadeIn direction="up" delay={0.1} className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">
                  <Counter value={500} suffix="+" />
                </div>
                <div className="text-gray-600">Proyectos Completados</div>
              </FadeIn>
              <FadeIn direction="up" delay={0.2} className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">
                  <Counter value={10} suffix="+" />
                </div>
                <div className="text-gray-600">Años de Experiencia</div>
              </FadeIn>
              <FadeIn direction="up" delay={0.3} className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">
                  <Counter value={100} suffix="%" />
                </div>
                <div className="text-gray-600">Clientes Satisfechos</div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
