
import React from 'react';
import { View } from '../types';
import { DOCTORS, SERVICES } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode, subtitle?: string }> = ({ children, subtitle }) => (
    <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">{children}</h2>
        {subtitle && <p className="mt-2 text-lg text-slate-500">{subtitle}</p>}
    </div>
);

const Home: React.FC<{ setActiveView: (view: View) => void }> = ({ setActiveView }) => {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-sky-50 to-teal-50 pt-20 pb-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-primary-dark mb-4">
                        Compassionate Care, Accurate Diagnostics
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                        Welcome to Mirpur Doctors Care Diagnostic Center, where your health is our priority. We combine state-of-the-art technology with a dedicated team of experts to provide you with the highest quality diagnostic services.
                    </p>
                    <div className="space-x-4">
                        <button onClick={() => setActiveView(View.Appointments)} className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg">
                            Book Appointment
                        </button>
                        <button onClick={() => setActiveView(View.Services)} className="bg-white text-secondary font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg border border-secondary hover:bg-secondary/10">
                            Our Services
                        </button>
                    </div>
                </div>
            </section>

            {/* About Us Preview */}
            <section className="py-20">
                 <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=800&h=600&fit=crop&q=80" alt="Scientists working in a modern diagnostic center laboratory." className="rounded-lg shadow-2xl" />
                    </div>
                    <div className="text-center md:text-left">
                         <h2 className="text-3xl font-bold text-slate-800 mb-4">Your Trusted Partner in Health</h2>
                         <p className="text-slate-600 mb-6 leading-relaxed">
                            Mirpur Doctors Care Diagnostic Center is dedicated to providing exceptional diagnostic services with a focus on accuracy, efficiency, and patient comfort. Our mission is to support your health journey with reliable results and a caring environment.
                         </p>
                         <button onClick={() => setActiveView(View.AboutUs)} className="text-primary font-semibold hover:text-primary-dark transition-colors">
                            Learn More About Us &rarr;
                         </button>
                    </div>
                </div>
            </section>
            
            {/* Services Preview */}
            <section className="py-20 bg-base-200">
                <div className="container mx-auto px-4">
                    <SectionTitle subtitle="Comprehensive diagnostic solutions for your needs">Our Core Services</SectionTitle>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SERVICES.slice(0, 3).map((service) => (
                            <div key={service.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
                                <div className="flex justify-center mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold text-slate-800 mb-2">{service.title}</h3>
                                <p className="text-slate-500">{service.description}</p>
                            </div>
                        ))}
                    </div>
                     <div className="text-center mt-12">
                         <button onClick={() => setActiveView(View.Services)} className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-6 rounded-full transition-transform transform hover:scale-105 shadow-lg">
                            Explore All Services
                        </button>
                    </div>
                </div>
            </section>

            {/* Doctors Preview */}
             <section className="py-20">
                <div className="container mx-auto px-4">
                    <SectionTitle subtitle="Meet our dedicated team of healthcare professionals">Expert Medical Team</SectionTitle>
                    <div className="flex flex-wrap justify-center gap-8">
                       {DOCTORS.slice(0, 3).map((doctor) => (
                           <div key={doctor.name} className="text-center">
                               <img src={doctor.imageUrl} alt={doctor.name} className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-white"/>
                               <h3 className="text-lg font-semibold">{doctor.name}</h3>
                               <p className="text-primary">{doctor.specialization}</p>
                           </div>
                       ))}
                    </div>
                    <div className="text-center mt-12">
                         <button onClick={() => setActiveView(View.Doctors)} className="text-secondary font-semibold hover:text-secondary-dark transition-colors">
                            Meet All Doctors &rarr;
                         </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;