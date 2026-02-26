import { Link } from 'react-router-dom';
import { FiBriefcase, FiHome, FiChevronRight } from 'react-icons/fi';
import FadeIn from '../components/FadeIn';

export default function Terms() {
    return (
        <div className="min-h-screen pt-12">
            <section
                className="relative py-20 bg-cover bg-center"
                style={{
                    backgroundImage:
                        'url(https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
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
                            <span className="text-white">Términos</span>
                        </div>
                    </div>

                    <FadeIn direction="up" delay={0.2}>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
                            TÉRMINOS Y <span className="text-green-400 italic font-light">CONDICIONES</span>
                        </h1>
                    </FadeIn>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
                        <FadeIn direction="up">
                            <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
                                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-8">
                                    <FiBriefcase className="text-green-900" size={32} />
                                </div>

                                <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Aceptación de Términos</h2>
                                <p className="text-gray-600 mb-8">
                                    Al acceder y utilizar el sitio web de KREA & TERRA HUB S.A.C., usted acepta cumplir con estos términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro sitio web.
                                </p>

                                <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Uso de Servicios</h2>
                                <p className="text-gray-600 mb-8">
                                    Nuestros servicios de construcción y productos agroindustriales están sujetos a contratos específicos y disponibilidad. La información en este sitio es informativa y no constituye una oferta contractual vinculante sin una cotización formal previa.
                                </p>

                                <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Propiedad Intelectual</h2>
                                <p className="text-gray-600 mb-8">
                                    Todo el contenido en este sitio, incluyendo logotipos, diseños y textos, es propiedad de KREA & TERRA HUB S.A.C. y está protegido por las leyes de propiedad intelectual de Perú e internacionales.
                                </p>

                                <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Limitación de Responsabilidad</h2>
                                <p className="text-gray-600 mb-8">
                                    KREA & TERRA HUB S.A.C. no será responsable de ningún daño directo o indirecto resultante del uso o la imposibilidad de usar nuestro sitio web o servicios mencionados en él.
                                </p>

                                <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Modificaciones</h2>
                                <p className="text-gray-600">
                                    Nos reservamos el derecho de modificar estos términos en cualquier momento sin previo aviso. Es su responsabilidad revisar periódicamente estos términos para conocer cualquier cambio.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </div>
    );
}
