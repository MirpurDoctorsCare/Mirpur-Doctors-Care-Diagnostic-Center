import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">{children}</h2>
);

const ContactInfoCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode }> = ({ title, children, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <div className="flex justify-center mb-4 text-primary text-4xl">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="text-slate-600">{children}</div>
    </div>
);

const ContactUs: React.FC = () => {
    return (
        <div className="py-20 bg-base-100">
            <div className="container mx-auto px-4">
                <SectionTitle>Get In Touch</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <ContactInfoCard title="Our Address" icon={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    }>
                        <p>Mirpur-11, Pallabi, Kalshi 11/E</p>
                        <p>Dhaka 1216.</p>
                    </ContactInfoCard>
                    <ContactInfoCard title="Phone & Email" icon={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    }>
                        <a href="tel:01972809693" className="block hover:text-primary transition-colors" aria-label="Call us at 01972-809693">01972-809693</a>
                        <a href="mailto:doctorscaremirpur@gmail.com" className="block hover:text-primary transition-colors" aria-label="Email us at doctorscaremirpur@gmail.com">doctorscaremirpur@gmail.com</a>
                    </ContactInfoCard>
                    <ContactInfoCard title="Opening Hours" icon={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    }>
                        <p>Saturday - Thursday</p>
                        <p>8:00 AM - 10:00 PM</p>
                    </ContactInfoCard>
                </div>
                
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="h-96 bg-gray-200 flex items-center justify-center">
                        <p className="text-gray-500">Google Map Placeholder</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;