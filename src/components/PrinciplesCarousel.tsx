import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FiCheckCircle, FiZap, FiLink, FiGlobe, FiTrendingUp, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import FadeIn from './FadeIn';

const principles = [
  { icon: FiCheckCircle, title: "Integridad", desc: "Actuamos con honestidad y transparencia en cada proyecto.", color: "text-blue-600", bg: "bg-blue-50", accent: "from-blue-500 to-blue-600" },
  { icon: FiZap, title: "Excelencia Operativa", desc: "Buscamos altos estándares en cada negocio, asegurando eficiencia, precisión y resultados confiables.", color: "text-green-600", bg: "bg-green-50", accent: "from-green-500 to-green-600" },
  { icon: FiLink, title: "Integración Estratégica", desc: "Conectamos y articulamos negocios para generar sinergias, optimizar recursos y potenciar resultados.", color: "text-blue-900", bg: "bg-slate-100", accent: "from-blue-800 to-blue-900" },
  { icon: FiGlobe, title: "Sostenibilidad", desc: "Protegemos el futuro a través de prácticas responsables.", color: "text-emerald-700", bg: "bg-emerald-50", accent: "from-emerald-500 to-emerald-600" },
  { icon: FiTrendingUp, title: "Innovación y Crecimiento", desc: "Impulsamos el desarrollo continuo de nuevos negocios y soluciones con enfoque en crecimiento sostenible.", color: "text-teal-700", bg: "bg-teal-50", accent: "from-teal-500 to-teal-600" },
];

export default function PrinciplesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full">
      {/* Desktop Grid */}
      <div className="hidden lg:grid grid-cols-5 gap-6">
        {principles.map((principio, idx) => (
          <FadeIn key={idx} direction="up" delay={idx * 0.1}>
            <div className="group relative p-8 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all duration-500 text-center hover:shadow-xl hover:-translate-y-1 bg-white">
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl ${principio.accent}" />
              <div className={`w-14 h-14 rounded-xl ${principio.bg} ${principio.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <principio.icon size={24} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{principio.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{principio.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="lg:hidden relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {principles.map((principio, idx) => (
              <div key={idx} className="flex-[0_0_100%] pl-4 min-w-0">
                <FadeIn direction="up" delay={0.1}>
                  <div className={`relative p-8 rounded-3xl border transition-all duration-500 text-center mx-2 ${
                    selectedIndex === idx 
                      ? 'border-blue-200 bg-white shadow-xl scale-100' 
                      : 'border-slate-100 bg-white/50 scale-95 opacity-60'
                  }`}>
                    <div className={`absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r ${principio.accent} rounded-b-3xl transition-opacity duration-500 ${
                      selectedIndex === idx ? 'opacity-100' : 'opacity-0'
                    }`} />
                    <div className={`w-16 h-16 rounded-2xl ${principio.bg} ${principio.color} flex items-center justify-center mx-auto mb-6 ${
                      selectedIndex === idx ? 'scale-110' : 'scale-100'
                    } transition-transform duration-300`}>
                      <principio.icon size={28} />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">{principio.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{principio.desc}</p>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all duration-300 z-10"
          aria-label="Anterior"
        >
          <FiChevronLeft size={20} />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all duration-300 z-10"
          aria-label="Siguiente"
        >
          <FiChevronRight size={20} />
        </button>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {principles.map((_, idx) => (
            <button
              key={idx}
              onClick={() => emblaApi?.scrollTo(idx)}
              className={`transition-all duration-300 rounded-full ${
                selectedIndex === idx 
                  ? 'w-8 h-2 bg-blue-600' 
                  : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Ir al principio ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}