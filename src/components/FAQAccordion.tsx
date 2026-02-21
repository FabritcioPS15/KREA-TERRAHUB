import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from '@/components/animate-ui/components/radix/accordion';
import FadeIn from './FadeIn';

const ITEMS = [
    {
        title: '¿Qué es el hub empresarial KREA & TERRA?',
        content:
            'Somos un hub innovador que conecta el sector de la construcción estructurada con acabados de primera (KREA) y la agroindustria enfocada en productos sostenibles de origen (TERRA), brindando soluciones de alta calidad en ambos rubros.',
    },
    {
        title: '¿Ofrecen servicios de construcción a nivel corporativo?',
        content:
            'Sí, en KREA nos especializamos en diseño, estructuración en drywall, acabados arquitectónicos y mantenimiento general tanto para proyectos corporativos, locales comerciales como para residencias modernas.',
    },
    {
        title: '¿De dónde provienen sus productos agroindustriales?',
        content:
            'En TERRA trabajamos de la mano con productores locales. Nuestro cacao orgánico, chocolate artesanal, y demás productos provienen de cultivos certificados, garantizando sostenibilidad, comercio justo y el mejor sabor de origen.',
    },
    {
        title: '¿Cómo puedo solicitar una cotización o asesoría?',
        content:
            'Puedes enviarnos un mensaje a través del formulario de contacto en esta página o llamarnos directamente. Nuestro equipo de asesores, tanto técnicos como agroindustriales, se pondrá en contacto contigo a la brevedad posible.',
    },
];

type FAQAccordionProps = {
    multiple?: boolean;
    collapsible?: boolean;
    keepRendered?: boolean;
    showArrow?: boolean;
};

export default function FAQAccordion({
    multiple = false,
    collapsible = true,
    keepRendered = false,
    showArrow = true,
}: FAQAccordionProps) {
    return (
        <div className="w-full max-w-3xl mx-auto mt-16 p-8 bg-white rounded-3xl shadow-xl shadow-gray-200">
            <FadeIn direction="up">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center text-balance">
                    Preguntas Frecuentes
                </h2>
                <Accordion
                    type={multiple ? 'multiple' : 'single'}
                    collapsible={collapsible}
                    className="w-full space-y-4"
                >
                    {ITEMS.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index + 1}`} className="border-b border-gray-100 last:border-0 pb-4">
                            <AccordionTrigger showArrow={showArrow} className="text-xl font-medium text-gray-800 hover:text-blue-600 transition-colors py-2 text-left">
                                {item.title}
                            </AccordionTrigger>
                            <AccordionContent keepRendered={keepRendered} className="text-gray-600 leading-relaxed mt-2 text-justify">
                                {item.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </FadeIn>
        </div>
    );
}
