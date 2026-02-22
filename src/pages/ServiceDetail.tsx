import { useParams, Link } from 'react-router-dom';
import { FiHome, FiChevronRight, FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { FaBuilding, FaTools, FaBolt, FaTint } from 'react-icons/fa';
import FadeIn from '../components/FadeIn';

const serviceData: Record<string, any> = {
    'drywall-estructuras': {
        title: 'Drywall & Estructuras',
        icon: FaBuilding,
        image: 'https://images.pexels.com/photos/5767925/pexels-photo-5767925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: 'Nuestra especialidad en Drywall y estructuras metálicas ofrece soluciones rápidas, limpias y altamente resistentes para la creación de espacios modernos.',
        fullDescription: 'En KREA & TERRA HUB, entendemos que la eficiencia y el acabado son fundamentales en la construcción moderna. Por ello, empleamos los mejores materiales y técnicas de vanguardia en la instalación de sistemas de construcción en seco (drywall). Ya sea para divisiones de oficinas, techos suspendidos o decoraciones arquitectónicas complejas, nuestro equipo garantiza una ejecución impecable.',
        benefits: [
            'Instalación rápida y eficiente reduciendo tiempos de obra.',
            'Excelente aislamiento acústico y térmico.',
            'Versatilidad para diseños arquitectónicos modernos.',
            'Acabados lisos y listos para pintar o decorar.',
            'Materiales resistentes al fuego y a la humedad.'
        ],
        features: [
            { title: 'Tabiquería', desc: 'Divisiones interiores con perfiles de acero galvanizado.' },
            { title: 'Falsos Techos', desc: 'Diseños de cielos rasos acústicos y decorativos.' },
            { title: 'Detalles Arquitectónicos', desc: 'Hornacinas, repisas y diseños curvos personalizados.' }
        ]
    },
    'melamina-muebles': {
        title: 'Melamina y Muebles',
        icon: FaTools,
        image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: 'Creamos mobiliario a medida que combina funcionalidad, estética y durabilidad, adaptado perfectamente a tu estilo de vida.',
        fullDescription: 'El diseño de interiores cobra vida con nuestros muebles de melamina. Nos especializamos en la fabricación de cocinas integrales, clósets, centros de entretenimiento y mobiliario de oficina. Utilizamos herrajes de alta calidad y una amplia gama de texturas y colores para que cada pieza sea única y funcional.',
        benefits: [
            'Optimización máxima de tus espacios disponibles.',
            'Variedad infinita de acabados, colores y texturas.',
            'Fácil mantenimiento y alta resistencia al uso diario.',
            'Diseños exclusivos adaptados a tus requerimientos.',
            'Asesoría en diseño y funcionalidad por expertos.'
        ],
        features: [
            { title: 'Cocinas Premium', desc: 'Diseños ergonómicos y modernos con acabados de lujo.' },
            { title: 'Clósets y Walk-in', desc: 'Organización inteligente para tu ropa y accesorios.' },
            { title: 'Muebles de Oficina', desc: 'Escritorios y libreros que fomentan la productividad.' }
        ]
    },
    'instalaciones-electricas': {
        title: 'Instalaciones Eléctricas',
        icon: FaBolt,
        image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: 'Garantizamos la seguridad y eficiencia energética de tus espacios con sistemas eléctricos diseñados bajo los más altos estándares.',
        fullDescription: 'La seguridad eléctrica no es negociable. Nuestro equipo de técnicos certificados realiza instalaciones completas, desde el cableado principal hasta la iluminación inteligente. Nos enfocamos en la prevención de riesgos y la optimización del consumo energético, asegurando que tu infraestructura sea segura y moderna.',
        benefits: [
            'Cumplimiento estricto de las normas técnicas nacionales.',
            'Uso de materiales certificados de marcas líderes.',
            'Diagnóstico y mantenimiento preventivo eficaz.',
            'Soluciones de iluminación LED de alto ahorro.',
            'Protección contra sobrecargas y cortocircuitos.'
        ],
        features: [
            { title: 'Cableado Estructural', desc: 'Redes eléctricas robustas y escalables.' },
            { title: 'Tableros Eléctricos', desc: 'Instalación y ordenamiento de llaves termomagnéticas.' },
            { title: 'Iluminación Inteligente', desc: 'Sistemas de control y automatización de luces.' }
        ]
    },
    'gasfiteria-saneamiento': {
        title: 'Gasfitería y Saneamiento',
        icon: FaTint,
        image: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: 'Soluciones integrales en fontanería y saneamiento que aseguran el correcto funcionamiento del agua y drenaje en tu edificio.',
        fullDescription: 'Ofrecemos un servicio de gasfitería profesional que abarca desde reparaciones menores hasta instalaciones sanitarias complejas en proyectos nuevos. Nos especializamos en tuberías de agua fría y caliente, sistemas de desagüe, y la instalación de grifería y sanitarios de alta gama, garantizando hermeticidad y durabilidad.',
        benefits: [
            'Eliminación de fugas y ahorro real de agua.',
            'Mantenimiento correctivo y preventivo garantizado.',
            'Instalaciones limpias con acabados perfectos.',
            'Soluciones rápidas para emergencias sanitarias.',
            'Uso de tuberías de alta resistencia y durabilidad.'
        ],
        features: [
            { title: 'Redes de Agua', desc: 'Instalación de tuberías termofusionadas y de PVC.' },
            { title: 'Sistemas de Desagüe', desc: 'Diseño eficiente para evitar atoros y malos olores.' },
            { title: 'Equipamiento Sanitario', desc: 'Montaje de termas, loza sanitaria y griferías modernas.' }
        ]
    }
};

export default function ServiceDetail() {
    const { slug } = useParams();
    const service = slug ? serviceData[slug] : null;

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Servicio no encontrado</h1>
                    <p className="text-gray-600 mb-8">El servicio que buscas no existe o ha sido movido.</p>
                    <Link to="/servicios" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-md hover:bg-blue-900 transition-colors">
                        Volver a servicios
                    </Link>
                </div>
            </div>
        );
    }

    const IconSource = service.icon;

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
                    style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-slate-950/70" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                <div className="relative z-10 container mx-auto px-6 text-white pt-20">
                    <FadeIn direction="up">
                        <div className="inline-flex items-center gap-2 text-sm font-medium mb-8 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-md">
                            <Link to="/" className="hover:text-blue-300 transition-colors flex items-center gap-1">
                                <FiHome size={14} /> Inicio
                            </Link>
                            <FiChevronRight className="opacity-50" size={14} />
                            <Link to="/servicios" className="hover:text-blue-300 transition-colors">Servicios</Link>
                            <FiChevronRight className="opacity-50" size={14} />
                            <span className="text-blue-300 underline underline-offset-4 decoration-1">{service.title}</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-bold mb-6 tracking-tight leading-none max-w-4xl drop-shadow-2xl">
                            {service.title.split(' ').map((word: string, i: number) =>
                                word.toLowerCase() === '&' || word.toLowerCase() === 'y' ?
                                    <span key={i} className="text-blue-400 font-light italic">{word} </span> :
                                    word + ' '
                            )}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 max-w-2xl font-light leading-relaxed">
                            {service.description}
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 relative overflow-hidden">
                {/* Background Accents */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 skew-x-[-12deg] translate-x-1/2" />

                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-7">
                            <FadeIn direction="up">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-1 bg-blue-900" />
                                    <span className="uppercase tracking-[0.3em] text-xs font-bold text-blue-900">Excelencia en Detalle</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                                    Elevando los estándares de <span className="text-blue-900 italic">calidad industrial</span>
                                </h2>
                                <div className="prose prose-lg text-slate-600 max-w-none mb-12">
                                    <p className="leading-relaxed mb-6 font-light">
                                        {service.fullDescription}
                                    </p>
                                    <p className="leading-relaxed font-light">
                                        Cada proyecto es abordado con una planificación meticulosa, asegurando que los tiempos se cumplan sin sacrificar la calidad. Nuestro compromiso con el cliente va más allá de la entrega inicial, brindando soporte y asesoría constante.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    {service.features.map((feature: any, i: number) => (
                                        <div key={i} className="group p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                                            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2 group-hover:text-blue-900 transition-colors">
                                                <div className="w-2 h-2 rounded-full bg-blue-900" />
                                                {feature.title}
                                            </h4>
                                            <p className="text-sm text-slate-500 font-light leading-relaxed">
                                                {feature.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </FadeIn>
                        </div>

                        <div className="lg:col-span-5">
                            <FadeIn direction="up" delay={0.2} className="h-full">
                                <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative h-full overflow-hidden flex flex-col justify-between">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />
                                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-600/10 blur-[80px] rounded-full" />

                                    <div className="relative z-10">
                                        <div className="w-16 h-16 bg-white/10 rounded-2xl border border-white/10 flex items-center justify-center mb-8 backdrop-blur-sm">
                                            <IconSource size={32} className="text-blue-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-8">Beneficios Principales</h3>
                                        <ul className="space-y-6">
                                            {service.benefits.map((benefit: string, i: number) => (
                                                <li key={i} className="flex gap-4 group">
                                                    <FiCheckCircle size={24} className="text-blue-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                                    <span className="text-white/80 font-light leading-snug">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="relative z-10 mt-16">
                                        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                                            <p className="text-sm text-white/60 mb-4 font-light">¿Listo para comenzar tu proyecto hoy mismo?</p>
                                            <Link
                                                to="/contacto"
                                                className="flex items-center justify-center gap-3 w-full py-4 bg-white text-slate-900 rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-blue-400 hover:text-white transition-all duration-300"
                                            >
                                                Solicitar Presupuesto
                                                <FiArrowRight />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-20 bg-slate-50 border-y border-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <FadeIn direction="up">
                        <span className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 mb-4 block underline decoration-blue-900 decoration-2 underline-offset-8">Garantía KREA</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Calidad asegurada en cada centímetro de su obra</h3>
                        <p className="text-slate-500 max-w-2xl mx-auto font-light leading-relaxed mb-12">
                            Utilizamos exclusivamente materiales certificados y seguimos protocolos de seguridad rigurosos para que su inversión esté protegida y el resultado sea superior.
                        </p>
                        <div className="flex flex-wrap justify-center gap-12 items-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                            {/* Placeholder for certificates/logos */}
                            <div className="text-xl font-black text-slate-400 tracking-tighter italic">ISO 9001</div>
                            <div className="text-xl font-black text-slate-400 tracking-tighter italic">ASTM</div>
                            <div className="text-xl font-black text-slate-400 tracking-tighter italic">NTP</div>
                            <div className="text-xl font-black text-slate-400 tracking-tighter italic">SENCICO</div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
