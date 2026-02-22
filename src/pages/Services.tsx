import { FaBolt, FaBuilding, FaTint, FaTools } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FiHome, FiChevronRight } from 'react-icons/fi';
import FadeIn from '../components/FadeIn';

const services = [
  {
    id: 1,
    slug: 'drywall-estructuras',
    title: 'Drywall & Estructuras',
    description:
      'Construcción y diseño de estructuras en drywall para espacios modernos y funcionales con acabados de primera calidad.',
    icon: FaBuilding,
    image: 'https://images.pexels.com/photos/5767925/pexels-photo-5767925.jpeg?auto=compress&cs=tinysrgb&w=600&fm=webp',
  },
  {
    id: 2,
    slug: 'melamina-muebles',
    title: 'Melamina y Muebles',
    description:
      'Diseño y fabricación de muebles personalizados en melamina, adaptados a tus necesidades y espacios específicos.',
    icon: FaTools,
    image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=600&fm=webp',
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
    image: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=600&fm=webp',
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
          <div className="mb-6 flex justify-center w-full">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-white/90 bg-white/10 border border-white/20 rounded-full px-5 py-2 backdrop-blur-md shadow-sm">
              <Link to="/" className="flex items-center gap-2 hover:text-white transition-colors">
                <FiHome size={14} />
                Inicio
              </Link>
              <FiChevronRight className="text-white/50" size={14} />
              <span className="text-white">Servicios</span>
            </div>
          </div>

          <FadeIn direction="up" delay={0.2} className="text-center px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
              SOLUCIONES <span className="text-blue-400 italic font-light">CONSTRUCTIVAS</span>
              <br className="hidden sm:block" /> Y MANTENIMIENTO
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <FadeIn
                key={service.id}
                direction="up"
                delay={index * 0.1}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-900 opacity-20 group-hover:opacity-10 transition-opacity" />
                </div>
                <div className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center">
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
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn direction="up">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Calidad Garantizada</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Contamos con un equipo de profesionales especializados y años de experiencia en el sector
                construcción. Utilizamos materiales de primera calidad y tecnología moderna para garantizar
                resultados excepcionales en cada proyecto.
              </p>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <FadeIn direction="up" delay={0.1} className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">500+</div>
                <div className="text-gray-600">Proyectos Completados</div>
              </FadeIn>
              <FadeIn direction="up" delay={0.2} className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">15+</div>
                <div className="text-gray-600">Años de Experiencia</div>
              </FadeIn>
              <FadeIn direction="up" delay={0.3} className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">100%</div>
                <div className="text-gray-600">Clientes Satisfechos</div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
