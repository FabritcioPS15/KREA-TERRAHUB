import { useState } from 'react';
import { FiMail, FiMapPin, FiPhone, FiSend, FiHome, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import FAQAccordion from '../components/FAQAccordion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consultType: 'servicios',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        consultType: 'servicios',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-12">
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
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
              <span className="text-white">Contacto</span>
            </div>
          </div>

          <FadeIn direction="up" delay={0.2} className="text-center px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
              CONTÁCTANOS <span className="text-blue-400 italic font-light">E INFÓRMATE</span>
            </h1>
            <p className="text-lg sm:text-xl opacity-90 font-light max-w-2xl mx-auto px-2">
              Estamos aquí para asesorarte en tus proyectos de construcción y necesidades agroindustriales.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10">
              <FadeIn direction="right" delay={0.2} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <div className="flex items-start justify-between gap-6 mb-8">
                  <div>
                    <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Envíanos un Mensaje</h2>
                    <p className="mt-2 text-gray-600">
                      Cuéntanos qué necesitas y te respondemos lo antes posible.
                    </p>
                  </div>
                </div>

                {submitted && (
                  <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
                    Tu mensaje fue enviado. Nos pondremos en contacto contigo.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 outline-none transition"
                        placeholder="Tu nombre completo"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 outline-none transition"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 outline-none transition"
                        placeholder="Tu número de teléfono"
                      />
                    </div>

                    <div>
                      <label htmlFor="consultType" className="block text-sm font-semibold text-gray-800 mb-2">
                        Tipo de Consulta
                      </label>
                      <select
                        id="consultType"
                        name="consultType"
                        value={formData.consultType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 outline-none transition"
                      >
                        <option value="servicios">Servicios de Construcción</option>
                        <option value="productos">Productos Agroindustriales</option>
                        <option value="general">Consulta General</option>
                        <option value="alianzas">Alianzas Empresariales</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 outline-none transition resize-none"
                      placeholder="Cuéntanos sobre tu proyecto o consulta..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitted}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-slate-950 text-white rounded-md hover:bg-blue-900 transition-all duration-300 font-medium text-base shadow-xl disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider text-sm sm:text-base"
                  >
                    {submitted ? (
                      'Mensaje Enviado'
                    ) : (
                      <>
                        <FiSend size={18} />
                        Enviar mensaje
                      </>
                    )}
                  </button>
                </form>
              </FadeIn>

              <div className="space-y-6">
                <FadeIn direction="left" delay={0.4} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                  <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Información de Contacto</h2>
                  <p className="mt-2 text-gray-600">Canales directos para resolver tu consulta.</p>

                  <div className="mt-8 grid gap-5">
                    <div className="flex items-start gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FiMapPin className="text-blue-900" size={24} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-1">Dirección</div>
                        <div className="text-sm text-slate-700 font-medium">Av. Principal 123, Distrito Empresarial</div>
                        <div className="text-sm text-slate-500">Lima, Perú</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                      <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FiPhone className="text-green-700" size={24} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-green-700 uppercase tracking-widest mb-1">Teléfono</div>
                        <div className="text-sm text-slate-700 font-medium">(680) 225-6956</div>
                        <div className="text-sm text-slate-500">Lun - Vie: 8:00 AM - 6:00 PM</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FiMail className="text-blue-900" size={24} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-1">Email</div>
                        <div className="text-sm text-slate-700 font-medium underline">krea@terrahub.com</div>
                        <div className="text-sm text-slate-500 underline">servicios@kreatera.com</div>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn direction="up" delay={0.6} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="h-80">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62412.16838146523!2d-77.08141135!3d-12.046374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b5d35662c7%3A0x14206cb9cc452e4a!2sLima%2C%20Peru!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación Krea & Terra Hub"
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <FadeIn direction="up" delay={0.1} className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Horario de Atención</h2>
              <p className="mt-2 text-gray-600">Estamos disponibles en los siguientes horarios.</p>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6">
              <FadeIn direction="up" delay={0.2} className="p-7 rounded-2xl border border-gray-100 bg-gray-50">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Oficina Principal</h3>
                <div className="space-y-2 text-gray-700">
                  <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                  <p>Sábados: 9:00 AM - 1:00 PM</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.3} className="p-7 rounded-2xl border border-gray-100 bg-gray-50">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Atención al Cliente</h3>
                <div className="space-y-2 text-gray-700">
                  <p>Lunes a Viernes: 7:00 AM - 8:00 PM</p>
                  <p>Sábados: 8:00 AM - 2:00 PM</p>
                  <p>Emergencias: 24/7</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Seccion FAQ */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <FAQAccordion />
        </div>
      </section>
    </div>
  );
}

