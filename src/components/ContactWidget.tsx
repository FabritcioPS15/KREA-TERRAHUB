import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiPhone, 
  FiMail, 
  FiX, 
  FiChevronRight,
  FiBriefcase
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const ContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactOptions = [
    {
      id: 'whatsapp',
      label: 'WhatsApp Directo',
      value: 'Iniciar chat',
      icon: <FaWhatsapp className="text-green-400" />,
      href: "https://wa.me/51921820630?text=Hola!%20Deseo%20información%20sobre%20sus%20servicios%20y%20productos.",
      color: "hover:bg-green-500/20",
      accent: "bg-green-500"
    },
    {
      id: 'phone',
      label: 'Llamada Directa',
      value: '+51 921 820 630',
      icon: <FiPhone className="text-blue-400" />,
      href: "tel:+51921820630",
      color: "hover:bg-blue-500/20",
      accent: "bg-blue-500"
    },
    {
      id: 'email',
      label: 'Correo Electrónico',
      value: 'proyectos@kt-hub.com',
      icon: <FiMail className="text-purple-400" />,
      href: "mailto:proyectos@kt-hub.com",
      color: "hover:bg-purple-500/20",
      accent: "bg-purple-500"
    },
    {
      id: 'careers',
      label: 'Oportunidades',
      value: 'Trabaja con nosotros',
      icon: <FiBriefcase className="text-amber-400" />,
      href: "/contacto",
      color: "hover:bg-amber-500/20",
      accent: "bg-amber-500"
    }
  ];

  if (isHomePage) return null;

  return (
    <div className={`fixed bottom-8 right-8 z-[100] transition-all duration-500 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
      <div className="relative">
        {/* Contact Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.8, y: 20, filter: 'blur(10px)' }}
              className="absolute bottom-20 right-0 w-72 bg-[#020617]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] z-50 p-3"
            >
              <div className="flex flex-col gap-2">
                <div className="px-5 py-4 border-b border-white/5 mb-2">
                  <h3 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-1">Central de Atención</h3>
                  <p className="text-white/40 text-[10px] font-medium uppercase tracking-widest">¿Cómo podemos ayudarte hoy?</p>
                </div>

                <div className="flex flex-col gap-1">
                  {contactOptions.map((option) => (
                    <a
                      key={option.id}
                      href={option.href}
                      target={option.id === 'whatsapp' ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-4 p-3 rounded-[1.5rem] ${option.color} transition-all duration-500 border border-transparent hover:border-white/5 active:scale-95`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                        {React.cloneElement(option.icon as React.ReactElement, { size: 20 })}
                      </div>
                      <div className="flex-grow">
                        <p className="text-[9px] text-white/30 uppercase font-black tracking-widest mb-0.5">{option.label}</p>
                        <p className="text-[11px] text-white font-bold group-hover:text-white transition-colors capitalize">{option.value}</p>
                      </div>
                      <FiChevronRight className="text-white/10 group-hover:text-white group-hover:translate-x-1 transition-all" size={14} />
                    </a>
                  ))}
                </div>

                <div className="mt-2 p-4 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-[1.8rem] border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[9px] text-white font-black uppercase tracking-widest">Atención en línea</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Floating Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative group w-16 h-16 rounded-full flex items-center justify-center overflow-hidden shadow-2xl transition-all duration-500 ${isOpen ? 'bg-red-500' : 'bg-[#25D366]'}`}
        >
          {/* Animated Glow (Minimalist) */}
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <FiX size={28} className="text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative"
              >
                <FaWhatsapp size={32} className="text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
};

export default ContactWidget;
