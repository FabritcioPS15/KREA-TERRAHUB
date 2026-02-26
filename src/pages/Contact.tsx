import { useState } from 'react';
import { FiMail, FiMapPin, FiPhone, FiSend, FiHome, FiChevronRight, FiUsers } from 'react-icons/fi';
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
        className="relative py-28 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
        }}
      >
        <div className="absolute inset-0 bg-slate-950/80" />

        {/* Theme-consistent mesh gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[70%] bg-blue-600/30 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] bg-green-600/20 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-white text-center">
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-white/70 bg-white/5 border border-white/10 rounded-full px-6 py-2.5 backdrop-blur-md shadow-2xl">
              <Link to="/" className="flex items-center gap-2 hover:text-white transition-colors group">
                <FiHome size={12} className="group-hover:scale-110 transition-transform" />
                Inicio
              </Link>
              <FiChevronRight className="text-white/30" size={12} />
              <span className="text-blue-400">Contacto</span>
            </div>
          </div>

          <FadeIn direction="up" delay={0.2} className="max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
              ESTAMOS <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent italic font-light">CONECTADOS</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
              Tu visión es nuestro compromiso. Contáctanos para materializar tus proyectos con la excelencia que nos define.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-[#f8fafc] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/30 -skew-x-12 transform origin-top translate-x-24 -z-0" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <FadeIn direction="right" delay={0.2} className="bg-white rounded-3xl border border-blue-100/50 shadow-[0_20px_50px_rgba(30,58,138,0.05)] p-8 md:p-10">
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-3">Envíanos un <span className="text-blue-600">Mensaje</span></h2>
                  <p className="text-slate-500 font-medium">
                    Estamos listos para escuchar tu propuesta y brindarte una solución integral.
                  </p>
                </div>

                {submitted && (
                  <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
                    Tu mensaje fue enviado. Nos pondremos en contacto contigo.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/50 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 focus:bg-white outline-none transition-all duration-300"
                        placeholder="Juan Pérez"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">
                        Email Corporativo
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/50 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 focus:bg-white outline-none transition-all duration-300"
                        placeholder="correo@empresa.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/50 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 focus:bg-white outline-none transition-all duration-300"
                        placeholder="+51 000 000 000"
                      />
                    </div>

                    <div>
                      <label htmlFor="consultType" className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">
                        Área de Interés
                      </label>
                      <div className="relative">
                        <select
                          id="consultType"
                          name="consultType"
                          value={formData.consultType}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50/50 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 focus:bg-white outline-none transition-all duration-300 appearance-none cursor-pointer"
                        >
                          <option value="servicios">Construcción & Obras (KREA)</option>
                          <option value="productos">Agroindustria & Origen (TERRA)</option>
                          <option value="general">Consulta General HUB</option>
                          <option value="alianzas">Alianzas Estratégicas</option>
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                          <FiChevronRight className="rotate-90" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <label htmlFor="message" className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">
                      Mensaje o Requerimiento
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-5 py-4 rounded-3xl border border-slate-200 bg-slate-50/50 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 focus:bg-white outline-none transition-all duration-300 resize-none"
                      placeholder="Descríbenos brevemente tu necesidad..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitted}
                    className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-2xl hover:from-blue-800 hover:to-blue-700 transition-all duration-300 font-bold text-sm uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(30,58,138,0.25)] hover:shadow-[0_15px_40px_rgba(30,58,138,0.35)] hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                  >
                    {submitted ? (
                      'Mensaje Enviado con Éxito'
                    ) : (
                      <>
                        <FiSend size={18} className="animate-pulse" />
                        Enviar Ahora
                      </>
                    )}
                  </button>
                </form>
              </FadeIn>

              <div className="space-y-8">
                <FadeIn direction="left" delay={0.4} className="bg-slate-900 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full group-hover:bg-blue-500/20 transition-colors" />

                  <h2 className="text-3xl font-bold text-white tracking-tight mb-4">Información de <span className="text-blue-400">Canal Directo</span></h2>
                  <p className="text-white/50 mb-10 font-medium">Atención personalizada para el sector corporativo.</p>

                  <div className="grid gap-6">
                    <div className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group/item">
                      <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-500/30 group-hover/item:scale-110 transition-transform">
                        <FiMapPin className="text-blue-400" size={24} />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">Visítanos</div>
                        <div className="text-base text-white font-medium">Av. Principal 123, Distrito Empresarial</div>
                        <div className="text-sm text-white/40">Lima, Perú</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group/item">
                      <div className="w-14 h-14 bg-green-600/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-green-500/30 group-hover/item:scale-110 transition-transform">
                        <FiPhone className="text-green-400" size={24} />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-green-400 uppercase tracking-widest mb-1">Llámanos</div>
                        <div className="text-base text-white font-medium">+51 987 654 321</div>
                        <div className="text-sm text-white/40">Central Telefónica</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group/item">
                      <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-500/30 group-hover/item:scale-110 transition-transform">
                        <FiMail className="text-blue-400" size={24} />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">Escríbenos</div>
                        <div className="text-base text-white font-medium underline decoration-blue-500/50 underline-offset-4">krea@terrahub.com</div>
                        <div className="text-[10px] text-white/40 mt-1 uppercase font-bold tracking-tighter">Respuesta en menos de 24h</div>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn direction="up" delay={0.6} className="bg-white rounded-3xl border border-blue-100/50 shadow-xl overflow-hidden group">
                  <div className="h-80 relative">
                    <div className="absolute inset-0 bg-blue-900/5 pointer-events-none group-hover:bg-transparent transition-colors z-10" />
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62412.16838146523!2d-77.08141135!3d-12.046374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b5d35662c7%3A0x14206cb9cc452e4a!2sLima%2C%20Peru!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación Krea & Terra Hub"
                      className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <FadeIn direction="up" delay={0.1} className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4 uppercase">Horario de <span className="text-blue-600">Atención</span></h2>
              <p className="text-slate-500 font-medium">Comprometidos con tu tiempo y necesidades industriales.</p>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8">
              <FadeIn direction="up" delay={0.2} className="p-8 rounded-3xl border border-blue-50 bg-gradient-to-br from-white to-blue-50/30 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <FiHome size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">Oficina Principal</h3>
                </div>
                <div className="space-y-4 text-slate-600 font-medium">
                  <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                    <span>Lunes a Viernes</span>
                    <span className="text-slate-900 font-bold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                    <span>Sábados</span>
                    <span className="text-slate-900 font-bold">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Domingos</span>
                    <span className="text-blue-600 font-bold uppercase text-xs">Cerrado</span>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.3} className="p-8 rounded-3xl border border-green-50 bg-gradient-to-br from-white to-green-50/30 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                    <FiUsers size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">Atención al Cliente</h3>
                </div>
                <div className="space-y-4 text-slate-600 font-medium">
                  <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                    <span>Lunes a Viernes</span>
                    <span className="text-slate-900 font-bold">7:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                    <span>Sábados</span>
                    <span className="text-slate-900 font-bold">8:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Emergencias</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Atención 24/7</span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Seccion FAQ */}
      <section className="py-24 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border border-blue-900 rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border border-green-900 rounded-full" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <FAQAccordion />
        </div>
      </section>
    </div>
  );
}

