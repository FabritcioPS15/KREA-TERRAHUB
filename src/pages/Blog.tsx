import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiBookOpen, FiCalendar, FiChevronRight, FiClock, FiHome, FiSearch, FiTag } from 'react-icons/fi';
import FadeIn from '../components/FadeIn';

export default function Blog() {
    const [query, setQuery] = useState('');

    const posts = useMemo(
        () => [
            {
                id: 'drywall-estructuras-guia',
                title: 'Drywall y estructuras: guía para diseño, instalación y mantenimiento',
                excerpt:
                    'Recomendaciones prácticas para planificar tabiques, cielos rasos y soluciones en drywall con acabados limpios y durables.',
                category: 'Drywall & Estructuras',
                date: '2026-03-01',
                readTime: '6 min',
                image:
                    'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                featured: true,
            },
            {
                id: 'acabados-interiores-checklist',
                title: 'Acabados y arquitectura interior: checklist para un resultado profesional',
                excerpt:
                    'Puntos clave para controlar calidad en pintura, revestimientos, nivelación, terminaciones y entrega final del espacio.',
                category: 'Acabados & Arquitectura Interior',
                date: '2026-02-12',
                readTime: '5 min',
                image:
                    'https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            },
            {
                id: 'instalaciones-electricas-seguridad',
                title: 'Instalaciones eléctricas seguras: buenas prácticas en obras y remodelaciones',
                excerpt:
                    'Criterios técnicos y de seguridad para instalaciones residenciales y comerciales: protecciones, canalización y pruebas.',
                category: 'Instalaciones Eléctricas',
                date: '2026-01-28',
                readTime: '4 min',
                image:
                    'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            },
            {
                id: 'gasfiteria-saneamiento-mantenimiento',
                title: 'Gasfitería y saneamiento: mantenimiento preventivo para evitar emergencias',
                excerpt:
                    'Cómo detectar fugas, prevenir obstrucciones y planificar revisiones para redes de agua y saneamiento con criterio técnico.',
                category: 'Gasfitería y Saneamiento',
                date: '2025-12-18',
                readTime: '7 min',
                image:
                    'https://images.pexels.com/photos/3815585/pexels-photo-3815585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            },
            {
                id: 'proyectos-civiles-electromecanicos',
                title: 'Proyectos civiles y electromecánicos: cómo ordenar alcance, tiempos y control',
                excerpt:
                    'Una guía para estructurar el proyecto desde el alcance hasta la entrega: hitos, control de calidad y coordinación en obra.',
                category: 'Proyectos Civiles y Electromecánicos',
                date: '2025-11-20',
                readTime: '6 min',
                image:
                    'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            },
            {
                id: 'agroindustria-calidad-trazabilidad',
                title: 'Agroindustria: calidad, trazabilidad y selección en productos de origen',
                excerpt:
                    'Criterios de selección, procesos y control para cacao de origen, café verde, maca y frutas deshidratadas.',
                category: 'Productos Agroindustriales',
                date: '2025-10-09',
                readTime: '5 min',
                image:
                    'https://images.pexels.com/photos/6474296/pexels-photo-6474296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            },
        ],
        []
    );

    const categories = useMemo(() => {
        const set = new Set<string>();
        posts.forEach((p) => set.add(p.category));
        return Array.from(set);
    }, [posts]);

    const filteredPosts = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return posts;
        return posts.filter((p) => {
            return (
                p.title.toLowerCase().includes(q) ||
                p.excerpt.toLowerCase().includes(q) ||
                p.category.toLowerCase().includes(q)
            );
        });
    }, [posts, query]);

    const featured = useMemo(() => posts.find((p) => p.featured) ?? posts[0], [posts]);

    useEffect(() => {
        const title = 'Blog | Krea & TerraHub';
        const description =
            'Artículos y guías de Krea & TerraHub sobre drywall, melamina y muebles, instalaciones eléctricas, gasfitería, proyectos civiles/electromecánicos, acabados, pintura y productos agroindustriales (cacao, café verde, maca, frutas deshidratadas).';
        const canonical = `${window.location.origin}/blog`;
        const ogImage =
            'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

        document.title = title;

        const ensureMeta = (selector: string, attrs: Record<string, string>) => {
            let el = document.head.querySelector(selector) as HTMLMetaElement | null;
            if (!el) {
                el = document.createElement('meta');
                Object.entries(attrs).forEach(([k, v]) => {
                    el?.setAttribute(k, v);
                });
                document.head.appendChild(el);
            }
            return el;
        };

        const ensureLink = (selector: string, attrs: Record<string, string>) => {
            let el = document.head.querySelector(selector) as HTMLLinkElement | null;
            if (!el) {
                el = document.createElement('link');
                Object.entries(attrs).forEach(([k, v]) => {
                    el?.setAttribute(k, v);
                });
                document.head.appendChild(el);
            }
            return el;
        };

        const metaDescription = ensureMeta('meta[name="description"]', { name: 'description', content: description });
        metaDescription.setAttribute('content', description);

        const canonicalLink = ensureLink('link[rel="canonical"]', { rel: 'canonical', href: canonical });
        canonicalLink.setAttribute('href', canonical);

        ensureMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' }).setAttribute(
            'content',
            'website'
        );
        ensureMeta('meta[property="og:title"]', { property: 'og:title', content: title }).setAttribute('content', title);
        ensureMeta('meta[property="og:description"]', {
            property: 'og:description',
            content: description,
        }).setAttribute('content', description);
        ensureMeta('meta[property="og:url"]', { property: 'og:url', content: canonical }).setAttribute('content', canonical);
        ensureMeta('meta[property="og:image"]', { property: 'og:image', content: ogImage }).setAttribute('content', ogImage);

        ensureMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' }).setAttribute(
            'content',
            'summary_large_image'
        );
        ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title }).setAttribute('content', title);
        ensureMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description }).setAttribute(
            'content',
            description
        );
        ensureMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: ogImage }).setAttribute(
            'content',
            ogImage
        );

        const jsonLdId = 'blog-jsonld';
        const existing = document.getElementById(jsonLdId);
        if (!existing) {
            const script = document.createElement('script');
            script.id = jsonLdId;
            script.type = 'application/ld+json';
            script.text = JSON.stringify(
                {
                    '@context': 'https://schema.org',
                    '@type': 'Blog',
                    name: 'Blog | Krea & TerraHub',
                    url: canonical,
                },
                null,
                0
            );
            document.head.appendChild(script);
        }
    }, []);

    return (
        <div className="min-h-screen pt-12 bg-gray-50">
            <section
                className="relative py-20 bg-cover bg-center"
                style={{
                    backgroundImage:
                        'url(https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
                }}
            >
                <div className="absolute inset-0 bg-slate-950/60" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
                <div className="relative z-10 container mx-auto px-6 text-white text-center">
                    <FadeIn direction="up" delay={0.1}>
                        <div className="mb-6 flex justify-center w-full">
                            <div className="inline-flex items-center gap-2 text-sm font-medium text-white/90 bg-white/10 border border-white/20 rounded-full px-5 py-2 backdrop-blur-md shadow-sm">
                                <Link to="/" className="flex items-center gap-2 hover:text-white transition-colors">
                                    <FiHome size={14} />
                                    Inicio
                                </Link>
                                <FiChevronRight className="text-white/50" size={14} />
                                <span className="text-white">Blog</span>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.2}>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight leading-tight">
                            Blog
                        </h1>
                        <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                            Guías y novedades alineadas a nuestros servicios de infraestructura y acabados, y a nuestros productos agroindustriales.
                        </p>
                    </FadeIn>
                </div>
            </section>

            <section className="py-14">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-10 items-start">
                        <div className="lg:col-span-8">
                            <FadeIn direction="up">
                                <div className="rounded-3xl border border-gray-200 overflow-hidden bg-white">
                                    <div className="relative">
                                        <img
                                            src={featured.image}
                                            alt={featured.title}
                                            className="w-full h-72 sm:h-80 object-cover"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                                            <div className="inline-flex items-center gap-2 text-xs font-semibold bg-white/10 border border-white/20 rounded-full px-4 py-2 backdrop-blur">
                                                <FiTag size={14} />
                                                {featured.category}
                                            </div>
                                            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
                                                {featured.title}
                                            </h2>
                                            <p className="mt-3 text-white/85 max-w-2xl leading-relaxed">{featured.excerpt}</p>
                                            <div className="mt-5 flex items-center justify-between flex-wrap gap-3">
                                                <div className="inline-flex items-center gap-3 text-sm text-white/80">
                                                    <span className="inline-flex items-center gap-2">
                                                        <FiCalendar size={16} />
                                                        {new Date(featured.date).toLocaleDateString('es-PE', {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric',
                                                        })}
                                                    </span>
                                                    <span className="text-white/45">•</span>
                                                    <span className="inline-flex items-center gap-2">
                                                        <FiClock size={16} />
                                                        {featured.readTime}
                                                    </span>
                                                </div>
                                                <Link
                                                    to="/contact"
                                                    className="inline-flex items-center gap-2 font-semibold bg-white text-slate-950 rounded-full px-5 py-2.5 hover:bg-white/90 transition-colors"
                                                >
                                                    Leer
                                                    <FiArrowRight size={18} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>

                            <div className="mt-10">
                                <div className="flex items-center justify-between gap-4 flex-wrap">
                                    <FadeIn direction="up">
                                        <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">Artículos</h3>
                                    </FadeIn>
                                    <FadeIn direction="up" delay={0.05}>
                                        <div className="relative">
                                            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                            <input
                                                value={query}
                                                onChange={(e) => setQuery(e.target.value)}
                                                placeholder="Buscar por tema, categoría..."
                                                className="w-full sm:w-[340px] pl-11 pr-4 py-3 rounded-full border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-200"
                                                aria-label="Buscar artículos"
                                            />
                                        </div>
                                    </FadeIn>
                                </div>

                                <div className="mt-8 grid sm:grid-cols-2 gap-6">
                                    {filteredPosts
                                        .filter((p) => p.id !== featured.id)
                                        .map((post, idx) => (
                                            <FadeIn key={post.id} direction="up" delay={0.05 * (idx + 1)}>
                                                <article className="group rounded-2xl border border-gray-200 overflow-hidden bg-white hover:border-gray-300 transition-colors">
                                                    <div className="relative">
                                                        <img
                                                            src={post.image}
                                                            alt={post.title}
                                                            className="w-full h-44 object-cover"
                                                            loading="lazy"
                                                        />
                                                        <div className="absolute top-4 left-4 inline-flex items-center gap-2 text-xs font-semibold bg-white/90 text-slate-900 rounded-full px-3 py-1.5 border border-black/5">
                                                            <FiTag size={14} />
                                                            {post.category}
                                                        </div>
                                                    </div>

                                                    <div className="p-6">
                                                        <div className="flex items-center gap-3 text-sm text-gray-500">
                                                            <span className="inline-flex items-center gap-2">
                                                                <FiCalendar size={16} />
                                                                {new Date(post.date).toLocaleDateString('es-PE', {
                                                                    year: 'numeric',
                                                                    month: 'short',
                                                                    day: 'numeric',
                                                                })}
                                                            </span>
                                                            <span className="text-gray-300">•</span>
                                                            <span className="inline-flex items-center gap-2">
                                                                <FiClock size={16} />
                                                                {post.readTime}
                                                            </span>
                                                        </div>

                                                        <h4 className="mt-3 text-lg font-extrabold text-gray-900 leading-snug group-hover:text-blue-900 transition-colors">
                                                            {post.title}
                                                        </h4>
                                                        <p className="mt-2 text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>

                                                        <div className="mt-5">
                                                            <Link
                                                                to="/contact"
                                                                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-900 hover:text-blue-800 transition-colors"
                                                            >
                                                                Leer
                                                                <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </article>
                                            </FadeIn>
                                        ))}
                                </div>
                            </div>

                            <div className="mt-12">
                                <FadeIn direction="up">
                                    <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
                                        <div className="flex items-center justify-between gap-4 flex-wrap">
                                            <div>
                                                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">Guías y recursos</h3>
                                                <p className="mt-2 text-gray-600 text-sm leading-relaxed max-w-2xl">
                                                    Plantillas y checklists alineados a nuestros servicios (Krea) y a nuestros productos agroindustriales (TerraHub).
                                                </p>
                                            </div>
                                            <Link
                                                to="/contact"
                                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-950 text-white font-semibold hover:bg-slate-900 transition-colors"
                                            >
                                                Solicitar asesoría
                                                <FiArrowRight size={18} />
                                            </Link>
                                        </div>

                                        <div className="mt-6 grid sm:grid-cols-2 gap-4">
                                            <FadeIn direction="up" delay={0.05}>
                                                <div className="rounded-xl border border-gray-200 p-5">
                                                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Plantilla</div>
                                                    <div className="mt-2 text-base font-extrabold text-gray-900">Checklist de acabados y entrega</div>
                                                    <div className="mt-2 text-sm text-gray-600 leading-relaxed">
                                                        Control de pintura, revestimientos, nivelación y puntos críticos antes de la entrega del espacio.
                                                    </div>
                                                </div>
                                            </FadeIn>
                                            <FadeIn direction="up" delay={0.1}>
                                                <div className="rounded-xl border border-gray-200 p-5">
                                                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Guía</div>
                                                    <div className="mt-2 text-base font-extrabold text-gray-900">Guía rápida: mantenimiento preventivo</div>
                                                    <div className="mt-2 text-sm text-gray-600 leading-relaxed">
                                                        Recomendaciones para gasfitería y redes eléctricas: inspecciones, señales de alerta y frecuencia.
                                                    </div>
                                                </div>
                                            </FadeIn>
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>

                        <aside className="lg:col-span-4 lg:sticky lg:top-28">
                            <FadeIn direction="up">
                                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                                    <div className="flex items-center gap-2 text-slate-950">
                                        <FiBookOpen size={18} />
                                        <h3 className="text-lg font-extrabold tracking-tight">Categorías</h3>
                                    </div>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {categories.map((c) => (
                                            <button
                                                key={c}
                                                type="button"
                                                onClick={() => setQuery(c)}
                                                className="px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
                                            >
                                                {c}
                                            </button>
                                        ))}
                                        <button
                                            type="button"
                                            onClick={() => setQuery('')}
                                            className="px-4 py-2 rounded-full text-sm font-semibold bg-slate-950 text-white hover:bg-slate-900 transition-colors"
                                        >
                                            Ver todo
                                        </button>
                                    </div>
                                </div>
                            </FadeIn>

                            <FadeIn direction="up" delay={0.08}>
                                <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
                                    <h3 className="text-lg font-extrabold tracking-tight text-gray-900">Recibe novedades</h3>
                                    <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                                        Suscríbete para recibir ideas y guías prácticas.
                                    </p>
                                    <form
                                        className="mt-5 flex gap-2"
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                        }}
                                    >
                                        <input
                                            type="email"
                                            required
                                            placeholder="Tu correo"
                                            className="flex-1 min-w-0 px-4 py-3 rounded-xl bg-white border border-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-200"
                                            aria-label="Correo para suscripción"
                                        />
                                        <button
                                            type="submit"
                                            className="px-4 py-3 rounded-xl bg-slate-950 text-white font-semibold hover:bg-slate-900 transition-colors"
                                        >
                                            Enviar
                                        </button>
                                    </form>
                                    <div className="mt-5">
                                        <Link
                                            to="/contact"
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-900 hover:text-blue-800 transition-colors"
                                        >
                                            ¿Tienes un proyecto? Hablemos
                                            <FiArrowRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </FadeIn>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
}
