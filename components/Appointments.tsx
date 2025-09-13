
import React, { useState } from 'react';
import { DOCTORS, SERVICES } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">{children}</h2>
);

const Appointments: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [appointmentDetails, setAppointmentDetails] = useState<{
        service: string;
        doctor: string;
        date: string;
        time: string;
    } | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);

        const formData = new FormData(e.currentTarget);
        const service = formData.get('service') as string;
        const doctor = (formData.get('doctor') as string) || 'Any available doctor';
        const date = formData.get('date') as string;
        const time = formData.get('time') as string;

        const selectedDate = new Date(date + 'T00:00:00');
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (!date || selectedDate < today) {
            setError('Please select a valid date in the future.');
            return;
        }
        
        if (!service || !time) {
            setError('Please fill out all required fields.');
            return;
        }

        setAppointmentDetails({ service, doctor, date, time });
        setShowConfirmation(true);
    };

    const handleConfirmBooking = async () => {
        setIsLoading(true);
        // In a real app, an API call would go here.
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsLoading(false);
        setShowConfirmation(false);
        setSubmitted(true);
    };

    const handleCancelBooking = () => {
        setShowConfirmation(false);
        setAppointmentDetails(null);
    };

    const handleResetForm = () => {
        setSubmitted(false);
        setError(null);
        setAppointmentDetails(null);
    };

    return (
        <div className="py-20 bg-base-200">
            <div className="container mx-auto px-4">
                <SectionTitle>Book an Appointment</SectionTitle>
                <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
                    {showConfirmation && appointmentDetails && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="confirmation-dialog-title"
                        >
                            <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 max-w-md w-full">
                                <h3 id="confirmation-dialog-title" className="text-2xl font-bold text-slate-800 mb-4">Confirm Your Appointment</h3>
                                <div className="space-y-3 text-slate-700">
                                    <p><strong>Service:</strong> {appointmentDetails.service}</p>
                                    <p><strong>Doctor:</strong> {appointmentDetails.doctor}</p>
                                    <p><strong>Date:</strong> {new Date(appointmentDetails.date + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                    <p><strong>Time:</strong> {appointmentDetails.time}</p>
                                </div>
                                <p className="mt-4 text-sm text-slate-500">Please review the details. Our team will contact you to confirm the final slot.</p>
                                <div className="mt-6 flex justify-end space-x-4">
                                    <button onClick={handleCancelBooking} disabled={isLoading} className="px-4 py-2 rounded-md text-sm font-medium bg-slate-200 text-slate-800 hover:bg-slate-300 transition-colors disabled:bg-slate-100 disabled:cursor-not-allowed">
                                        Go Back
                                    </button>
                                    <button onClick={handleConfirmBooking} disabled={isLoading} className="px-4 py-2 rounded-md text-sm font-medium bg-primary text-white hover:bg-primary-dark transition-colors flex items-center justify-center w-32 disabled:bg-sky-300 disabled:cursor-not-allowed">
                                        {isLoading ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                <span>Submitting...</span>
                                            </>
                                        ) : (
                                            'Confirm'
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    {submitted ? (
                        <div className="text-center">
                            <svg className="mx-auto h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 className="mt-4 text-2xl font-bold text-slate-800">Thank You!</h3>
                            <p className="mt-2 text-slate-600">Your appointment request has been received. Our team will contact you shortly to confirm the details.</p>
                            <button onClick={handleResetForm} className="mt-6 bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-full transition-colors">
                                Book Another Appointment
                            </button>
                        </div>
                    ) : (
                        <>
                            {error && (
                                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-md" role="alert">
                                    <p className="font-bold">Error</p>
                                    <p>{error}</p>
                                </div>
                            )}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-slate-700">Select Service</label>
                                    <select id="service" name="service" required className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md shadow-sm">
                                        <option value="">--Please choose a service--</option>
                                        {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="doctor" className="block text-sm font-medium text-slate-700">Preferred Doctor (Optional)</label>
                                    <select id="doctor" name="doctor" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md shadow-sm">
                                        <option value="">--Any available doctor--</option>
                                        {DOCTORS.map(d => <option key={d.name} value={d.name}>{d.name} - {d.specialization}</option>)}
                                    </select>
                                </div>
                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="date" className="block text-sm font-medium text-slate-700">Preferred Date</label>
                                        <input type="date" name="date" id="date" required className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" min={new Date().toISOString().split("T")[0]} />
                                    </div>
                                    <div>
                                        <label htmlFor="time" className="block text-sm font-medium text-slate-700">Preferred Time</label>
                                        <input type="time" name="time" id="time" required className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-lg text-sm font-bold text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all transform hover:scale-105">
                                        Request Appointment
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Appointments;
