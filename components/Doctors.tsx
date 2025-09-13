
import React from 'react';
import { DOCTORS } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">{children}</h2>
);

const DoctorCard: React.FC<{ doctor: typeof DOCTORS[0] }> = ({ doctor }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row items-center transform transition-transform hover:scale-105 hover:shadow-2xl">
        <img src={doctor.imageUrl} alt={doctor.name} className="w-full h-48 md:w-48 md:h-full object-cover"/>
        <div className="p-6">
            <h3 className="text-2xl font-bold text-primary-dark">{doctor.name}</h3>
            <p className="text-md font-semibold text-secondary mb-3">{doctor.specialization}</p>
            <p className="text-slate-600 leading-relaxed">{doctor.bio}</p>
        </div>
    </div>
);

const Doctors: React.FC = () => {
    return (
        <div className="py-20 bg-base-200">
            <div className="container mx-auto px-4">
                <SectionTitle>Our Expert Doctors</SectionTitle>
                <div className="space-y-12">
                    {DOCTORS.map((doctor, index) => (
                        <DoctorCard key={index} doctor={doctor} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Doctors;
