import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-800 text-white">
            <div className="container mx-auto py-12 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Mirpur Doctors Care Diagnostic Center</h3>
                        <p className="text-slate-300">Your trusted partner in health. Providing accurate diagnostics with compassionate care.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-slate-300">
                            <li className="flex items-start space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 text-primary-light flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                <span>Mirpur-11, Pallabi, Kalshi 11/E, Dhaka 1216.</span>
                            </li>
                             <li className="flex items-center space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-light" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.759a11.024 11.024 0 005.176 5.176l.759-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                                <a href="tel:01972809693" className="hover:text-primary-light transition-colors" aria-label="Call Mirpur Doctors Care Diagnostic Center">01972-809693</a>
                            </li>
                             <li className="flex items-center space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-light" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 2.006l7.997 3.878A2 2 0 0118 7.616V16a2 2 0 01-2 2H4a2 2 0 01-2-2V7.616a2 2 0 01.003-1.732zM10 12.586l-7-3.418V16h14V9.168l-7 3.418z" /></svg>
                                <a href="mailto:doctorscaremirpur@gmail.com" className="hover:text-primary-light transition-colors" aria-label="Email Mirpur Doctors Care Diagnostic Center">doctorscaremirpur@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-300 hover:text-primary-light transition-colors">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="#" className="text-slate-300 hover:text-primary-light transition-colors">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.795 2.013 10.148 2 12.315 2zm-1.161 4.573a.75.75 0 01.75.75v1.518a3.97 3.97 0 013.97 3.97v1.518a.75.75 0 01-1.5 0v-1.518a2.47 2.47 0 00-2.47-2.47H9.81a.75.75 0 01-.75-.75V7.323a.75.75 0 01.75-.75h1.518zM12 10.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" clipRule="evenodd" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-slate-700 text-center text-slate-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Mirpur Doctors Care Diagnostic Center. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;