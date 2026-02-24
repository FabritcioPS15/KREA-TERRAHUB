import { Link } from 'react-router-dom';
import { FiHome, FiChevronRight } from 'react-icons/fi';
import FadeIn from '../components/FadeIn';

export default function Portfolio() {
    return (
        <div className="min-h-screen pt-12">
            <section
                className="relative py-20 bg-cover bg-center"
                style={{
                    backgroundImage:
                        'url(https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
                }}
            >
                <div className="absolute inset-0 bg-slate-950/60" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
                <div className="relative z-10 container mx-auto px-6 text-white text-center">
                    <div className="mb-6 flex justify-center w-full">
                        <div className="inline-flex items-center gap-2 text-sm font-medium text-white/90 bg-white/10 border border-white/20 rounded-full px-5 py-2 backdrop-blur-md shadow-sm">
                            <Link to="/" className="flex items-center gap-2 hover:text-white transition-colors">
                                <FiHome size={14} />
                                Inicio
                            </Link>
                            <FiChevronRight className="text-white/50" size={14} />
                            <span className="text-white">Portafolio</span>
                        </div>
                    </div>

                    <FadeIn direction="up">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
                            NUESTRO <span className="text-blue-400 italic font-light">PORTAFOLIO</span>
                        </h1>
                        <p className="text-lg text-white/80 max-w-2xl mx-auto">
                            Descubre la excelencia en cada uno de nuestros proyectos realizados.
                        </p>
                    </FadeIn>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center py-20">
                        <h2 className="text-2xl font-bold text-gray-400">Próximamente: Galería de Proyectos</h2>
                        <p className="text-gray-500 mt-2">Estamos preparando una selección de nuestros mejores trabajos para ti.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
