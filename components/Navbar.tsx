import React, { useState } from 'react';
import { View } from '../types';

interface NavbarProps {
    activeView: View;
    setActiveView: (view: View) => void;
    isLoggedIn: boolean;
    onLogout: () => void;
}

const NavLink: React.FC<{
    view: View;
    activeView: View;
    onClick: (view: View) => void;
    children: React.ReactNode;
}> = ({ view, activeView, onClick, children }) => (
    <button
        onClick={() => onClick(view)}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
            activeView === view
                ? 'bg-primary text-white shadow'
                : 'text-slate-700 hover:bg-primary-light/20 hover:text-primary-dark'
        }`}
    >
        {children}
    </button>
);

const Navbar: React.FC<NavbarProps> = ({ activeView, setActiveView, isLoggedIn, onLogout }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = [View.Home, View.AboutUs, View.Doctors, View.Services, View.Appointments, View.ContactUs];

    const handleNavClick = (view: View) => {
        setActiveView(view);
        setIsOpen(false);
    };

    return (
        <nav className="bg-base-200/50 backdrop-blur-sm sticky top-0 z-50 shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="hidden md:flex items-center space-x-2">
                        {navItems.map((item) => (
                            <NavLink key={item} view={item} activeView={activeView} onClick={handleNavClick}>
                                {item}
                            </NavLink>
                        ))}
                    </div>
                    <div className="hidden md:flex items-center space-x-2">
                         {isLoggedIn ? (
                            <>
                                <NavLink view={View.PatientPortal} activeView={activeView} onClick={handleNavClick}>Dashboard</NavLink>
                                <button onClick={onLogout} className="px-4 py-2 rounded-md text-sm font-medium bg-red-500 text-white hover:bg-red-600 transition-colors">Logout</button>
                            </>
                         ) : (
                            <NavLink view={View.PatientPortal} activeView={activeView} onClick={handleNavClick}>Patient Login</NavLink>
                         )}
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-primary-dark hover:bg-base-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary" aria-controls="mobile-menu" aria-expanded={isOpen}>
                            <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
                            {isOpen ? (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                         {navItems.map((item) => (
                            <a key={item} onClick={() => handleNavClick(item)} href="#" className={`block px-3 py-2 rounded-md text-base font-medium ${activeView === item ? 'bg-primary text-white' : 'text-slate-700 hover:bg-base-300'}`}>{item}</a>
                        ))}
                        {isLoggedIn ? (
                            <>
                                <a onClick={() => handleNavClick(View.PatientPortal)} href="#" className={`block px-3 py-2 rounded-md text-base font-medium ${activeView === View.PatientPortal ? 'bg-primary text-white' : 'text-slate-700 hover:bg-base-300'}`}>Dashboard</a>
                                <a onClick={onLogout} href="#" className="block px-3 py-2 rounded-md text-base font-medium text-red-500 hover:bg-red-100">Logout</a>
                            </>
                         ) : (
                            <a onClick={() => handleNavClick(View.PatientPortal)} href="#" className={`block px-3 py-2 rounded-md text-base font-medium ${activeView === View.PatientPortal ? 'bg-primary text-white' : 'text-slate-700 hover:bg-base-300'}`}>Patient Login</a>
                         )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;