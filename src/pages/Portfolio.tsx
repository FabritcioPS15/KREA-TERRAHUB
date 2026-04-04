import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
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
                    {/* Mobile: Compact Glass Breadcrumb */}
                    <div className="sm:hidden flex justify-center mb-6">
                        <nav className="flex items-center p-0.5 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-lg">
                            <Link 
                                to="/" 
                                className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-[0.2em] text-white/50"
                            >
                                <div className="w-5 h-5 rounded-md bg-blue-500/10 flex items-center justify-center text-blue-400">
                                    <FiHome size={11} />
                                </div>
                                Inicio
                            </Link>
                            <div className="h-3 w-[1px] bg-white/10 mx-0.5" />
                            <div className="px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.25em] text-white/90 cursor-default">
                                Portafolio
                            </div>
                        </nav>
                    </div>

                    {/* Desktop: Refined Compact Breadcrumb */}
                    <div className="hidden sm:flex justify-start mb-8">
                        <nav className="flex items-center p-0.5 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-lg group transition-all duration-500 hover:bg-white/10">
                            <Link 
                                to="/" 
                                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300 group/item"
                            >
                                <div className="w-5 h-5 rounded-md bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover/item:bg-blue-500 group-hover/item:text-white transition-all duration-300">
                                    <FiHome size={11} />
                                </div>
                                Inicio
                            </Link>
                            <div className="h-3 w-[1px] bg-white/10 mx-0.5" />
                            <div className="px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.25em] text-white/90 cursor-default">
                                Portafolio
                            </div>
                        </nav>
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
