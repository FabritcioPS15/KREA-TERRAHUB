import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // El botón aparece después de desplazar 400px (aproximadamente después del hero)
            if (window.pageYOffset > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const handleClick = () => {
        // Reemplaza con tu número de WhatsApp real y mensaje predeterminado
        const phoneNumber = '51987654321'; // Ejemplo para Perú
        const message = encodeURIComponent('Hola, me gustaría solicitar una cotización para sus servicios.');
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 50 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleClick}
                    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
                    aria-label="Contactar por WhatsApp"
                >
                    <div className="absolute -top-12 right-0 bg-white text-slate-900 text-xs font-bold py-2 px-4 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none mb-2 border border-slate-100">
                        ¿En qué podemos ayudarte?
                        <div className="absolute top-full right-5 w-2 h-2 bg-white rotate-45 border-r border-b border-slate-100"></div>
                    </div>
                    <FaWhatsapp size={28} />
                    <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default WhatsAppButton;
