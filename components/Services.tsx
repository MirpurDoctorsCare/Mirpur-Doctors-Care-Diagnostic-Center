import React, { useState } from 'react';
import { SERVICES } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">{children}</h2>
);

const AccordionItem: React.FC<{ service: typeof SERVICES[0], isOpen: boolean, onClick: () => void }> = ({ service, isOpen, onClick }) => {
    const serviceId = service.title.replace(/\s+/g, '-').toLowerCase();

    return (
        <div className="border border-base-300 rounded-lg shadow-sm overflow-hidden">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-base-100 transition-colors"
                aria-expanded={isOpen}
                aria-controls={`service-details-${serviceId}`}
            >
                <div className="flex items-center space-x-4">
                    {service.icon}
                    <div>
                        <h3 id={`service-title-${serviceId}`} className="text-lg font-semibold text-primary-dark">{service.title}</h3>
                        <p className="text-slate-500 hidden sm:block">{service.description}</p>
                    </div>
                </div>
                <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                id={`service-details-${serviceId}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[32rem]' : 'max-h-0'}`}
                role="region"
                aria-labelledby={`service-title-${serviceId}`}
            >
                <div className="p-5 border-t border-base-200 bg-base-100/50">
                     <div className="flex flex-col md:flex-row gap-8 items-start">
                        <ul className="space-y-3 text-slate-600 list-disc list-inside flex-1">
                            {service.details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>
                        {service.imageUrl && (
                            <div className="flex-1">
                                <img src={service.imageUrl} alt={`${service.title} illustration`} className="rounded-lg shadow-md w-full h-auto object-cover" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Services: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleAccordionClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <SectionTitle>Our Diagnostic Services</SectionTitle>
                <div className="max-w-4xl mx-auto space-y-4">
                    {SERVICES.map((service, index) => (
                        <AccordionItem
                            key={index}
                            service={service}
                            isOpen={openIndex === index}
                            onClick={() => handleAccordionClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;