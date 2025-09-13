
import React, { useState, useCallback } from 'react';
import { View } from './types';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Doctors from './components/Doctors';
import Services from './components/Services';
import Appointments from './components/Appointments';
import ContactUs from './components/ContactUs';
import PatientPortal from './components/PatientPortal';

const App: React.FC = () => {
    const [activeView, setActiveView] = useState<View>(View.Home);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const handleLogin = useCallback(() => {
        setIsLoggedIn(true);
        setActiveView(View.PatientPortal);
    }, []);

    const handleLogout = useCallback(() => {
        setIsLoggedIn(false);
        setActiveView(View.Home);
    }, []);

    const renderView = () => {
        switch (activeView) {
            case View.Home:
                return <Home setActiveView={setActiveView} />;
            case View.AboutUs:
                return <AboutUs />;
            case View.Doctors:
                return <Doctors />;
            case View.Services:
                return <Services />;
            case View.Appointments:
                return <Appointments />;
            case View.ContactUs:
                return <ContactUs />;
            case View.PatientPortal:
                return <PatientPortal isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />;
            default:
                return <Home setActiveView={setActiveView} />;
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Navbar activeView={activeView} setActiveView={setActiveView} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            <main className="flex-grow">
                {renderView()}
            </main>
            <Footer />
        </div>
    );
};

export default App;
