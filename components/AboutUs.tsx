import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">{children}</h2>
);

const ValueCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode }> = ({ title, children, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <div className="flex justify-center mb-4 text-primary text-4xl">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-600">{children}</p>
    </div>
);

const AboutUs: React.FC = () => {
    return (
        <div className="py-20 bg-base-100">
            <div className="container mx-auto px-4">
                <SectionTitle>About Mirpur Doctors Care Diagnostic Center</SectionTitle>
                
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <img src="https://picsum.photos/seed/team/800/600" alt="Our Team" className="rounded-lg shadow-xl w-full" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-primary-dark mb-4">Our Mission</h3>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Our mission is to provide accurate, timely, and comprehensive diagnostic services in a compassionate and patient-centered environment. We strive to be a reliable partner for both patients and referring physicians, contributing to better health outcomes for our community.
                        </p>
                        <h3 className="text-2xl font-semibold text-primary-dark mb-4">Our Commitment</h3>
                        <p className="text-slate-600 leading-relaxed">
                            We are committed to upholding the highest standards of quality and safety. By investing in advanced technology and continuous professional development for our staff, we ensure that every patient receives the best possible care. Your trust is our most valued asset, and we work tirelessly to earn it every day.
                        </p>
                    </div>
                </div>

                <div className="text-center mb-12">
                     <h3 className="text-2xl font-semibold text-primary-dark mb-2">Our Core Values</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ValueCard title="Patient First" icon={<span role="img" aria-label="heart">❤️</span>}>
                        We place the needs and comfort of our patients at the forefront of everything we do.
                    </ValueCard>
                    <ValueCard title="Accuracy & Reliability" icon={<span role="img" aria-label="target">🎯</span>}>
                        We are dedicated to providing precise and dependable diagnostic results to guide effective treatment.
                    </ValueCard>
                    <ValueCard title="Integrity & Compassion" icon={<span role="img" aria-label="handshake">🤝</span>}>
                        We treat all individuals with respect, empathy, and honesty, maintaining the highest ethical standards.
                    </ValueCard>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;