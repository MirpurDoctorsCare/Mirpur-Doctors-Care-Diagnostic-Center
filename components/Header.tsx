import React from 'react';

const Logo: React.FC = () => (
    <div className="flex items-center space-x-2">
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span className="text-2xl md:text-3xl font-bold text-primary-dark">Mirpur Doctors Care Diagnostic Center</span>
    </div>
);

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-sm p-4 border-b-2 border-primary">
            <div className="container mx-auto flex justify-between items-center flex-wrap">
                <Logo />
                <div className="flex items-center space-x-6 mt-4 sm:mt-0 text-sm">
                    <div className="flex items-center space-x-2 text-slate-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.759a11.024 11.024 0 005.176 5.176l.759-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <a href="tel:01972809693" className="font-semibold hover:text-primary-dark transition-colors" aria-label="Call Mirpur Doctors Care Diagnostic Center at 01972-809693">01972-809693</a>
                    </div>
                    <div className="hidden md:flex items-center space-x-2 text-slate-600">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-semibold" aria-label="Our address: Mirpur-11, Pallabi, Kalshi 11/E, Dhaka 1216.">Mirpur-11, Pallabi, Kalshi 11/E, Dhaka 1216.</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;