import { Link } from 'react-router-dom';
import { FiShield, FiHome, FiChevronRight } from 'react-icons/fi';
import FadeIn from '../components/FadeIn';

export default function Privacy() {
    return (
        <div className="min-h-screen pt-12">
            <section
                className="relative py-20 bg-cover bg-center"
                style={{
                    backgroundImage:
                        'url(https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
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
                            <span className="text-white">Privacidad</span>
                        </div>
                    </div>

                    <FadeIn direction="up" delay={0.2}>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
                            POLÍTICA DE <span className="text-blue-400 italic font-light">PRIVACIDAD</span>
                        </h1>
                    </FadeIn>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
                        <FadeIn direction="up">
                            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
                                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-8">
                                    <FiShield className="text-blue-900" size={32} />
                                </div>

                                <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Introducción</h2>
                                <p className="text-gray-600 mb-8">
                                    En KREA & TERRA HUB S.A.C., valoramos su privacidad y estamos comprometidos con la protección de sus datos personales. Esta política de privacidad explica cómo recopilamos, usamos y protegemos su información cuando utiliza nuestro sitio web y servicios.
                                </p>

                                <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Información que Recopilamos</h2>
                                <p className="text-gray-600 mb-4">
                                    Podemos recopilar la siguiente información:
                                </p>
                                <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
                                    <li>Nombre completo y datos de contacto (correo electrónico, teléfono).</li>
                                    <li>Información demográfica.</li>
                                    <li>Datos técnicos relacionados con el uso de nuestro sitio web.</li>
                                </ul>

                                <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Uso de la Información</h2>
                                <p className="text-gray-600 mb-8">
                                    Utilizamos la información recopilada para entender sus necesidades y brindarle un mejor servicio, específicamente para: procesamiento de consultas, mejora de nuestros productos/servicios y envío de comunicaciones importantes relacionadas con sus solicitudes.
                                </p>

                                <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Seguridad de los Datos</h2>
                                <p className="text-gray-600 mb-8">
                                    Estamos comprometidos a asegurar que su información esté segura. Contamos con procedimientos físicos, electrónicos y administrativos para salvaguardar y asegurar la información que recopilamos en línea.
                                </p>

                                <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Contacto</h2>
                                <p className="text-gray-600">
                                    Si tiene alguna pregunta sobre nuestra Política de Privacidad, por favor contáctenos a través de nuestro correo corporativo: <span className="font-bold text-blue-900">krea@terrahub.com</span>
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </div>
    );
}
