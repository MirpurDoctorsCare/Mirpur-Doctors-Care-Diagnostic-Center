
import React, { useState } from 'react';
import { PATIENT_REPORTS, PATIENT_APPOINTMENTS } from '../constants';
import { PatientReport, PatientAppointment } from '../types';

interface PatientPortalProps {
    isLoggedIn: boolean;
    onLogin: () => void;
    onLogout: () => void;
}

type DashboardTab = 'Reports' | 'Appointments' | 'Profile';
type AuthMode = 'login' | 'signup';

const AuthPage: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
     const [authMode, setAuthMode] = useState<AuthMode>('login');
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');
     const [fullName, setFullName] = useState('');
     const [confirmPassword, setConfirmPassword] = useState('');
     const [isLoading, setIsLoading] = useState(false);
     const [error, setError] = useState<string | null>(null);

     const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        // Simulate a network request
        await new Promise(resolve => setTimeout(resolve, 1500));

        try {
            if (authMode === 'signup' && password !== confirmPassword) {
                throw new Error('Passwords do not match. Please try again.');
            }
            // Simple validation to demo error state
            if (password.toLowerCase() === 'fail' || username.toLowerCase() === 'fail') {
                 throw new Error('Invalid credentials. Please check your details and try again.');
            }

            // On successful login/signup
            onLogin();

        } catch (err: any) {
            setError(err.message || 'An unexpected error occurred.');
            setIsLoading(false);
        }
    };

    const handleModeToggle = () => {
        setAuthMode(authMode === 'login' ? 'signup' : 'login');
        setError(null);
        // Clear form fields on mode switch for better UX
        setUsername('');
        setPassword('');
        setFullName('');
        setConfirmPassword('');
    }

    return (
        <div className="min-h-[60vh] flex items-center justify-center bg-base-200 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl transition-all duration-300">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900">
                        {authMode === 'login' ? 'Patient Portal Login' : 'Create Your Account'}
                    </h2>
                </div>
                {error && (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
                        <p>{error}</p>
                    </div>
                )}
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        {authMode === 'signup' && (
                            <div>
                                <label htmlFor="fullName" className="sr-only">Full Name</label>
                                <input id="fullName" name="fullName" type="text" autoComplete="name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                            </div>
                        )}
                        <div>
                            <label htmlFor="username" className="sr-only">Email or Phone</label>
                            <input id="username" name="username" type="text" autoComplete="username" required className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 ${authMode === 'login' ? 'rounded-t-md' : ''} focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm`} placeholder="Email or Phone" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="password-auth" className="sr-only">Password</label>
                            <input id="password-auth" name="password" type="password" autoComplete={authMode === 'login' ? 'current-password' : 'new-password'} required className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 ${authMode === 'login' ? 'rounded-b-md' : ''} focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm`} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                         {authMode === 'signup' && (
                            <div>
                                <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                                <input id="confirm-password" name="confirm-password" type="password" autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            </div>
                        )}
                    </div>
                    <div>
                        <button type="submit" disabled={isLoading} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors disabled:bg-sky-300 disabled:cursor-not-allowed">
                             {isLoading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing...
                                </>
                             ) : (
                                authMode === 'login' ? 'Sign in' : 'Create Account'
                             )}
                        </button>
                    </div>
                </form>
                <div className="text-sm text-center">
                    <button onClick={handleModeToggle} disabled={isLoading} className="font-medium text-primary hover:text-primary-dark hover:underline focus:outline-none disabled:text-slate-400 disabled:no-underline disabled:cursor-not-allowed">
                        {authMode === 'login' ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
                    </button>
                </div>
            </div>
        </div>
    );
};

const ReportsTable: React.FC<{ reports: PatientReport[] }> = ({ reports }) => (
    <div className="overflow-x-auto">
        <table className="min-w-full bg-white divide-y divide-gray-200 rounded-lg shadow">
            <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th scope="col" className="relative px-6 py-3"><span className="sr-only">Download</span></th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                {reports.map((report) => (
                    <tr key={report.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{report.testName}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href={report.url} className="text-primary hover:text-primary-dark" aria-label={`Download report for ${report.testName}`}>Download</a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const AppointmentsTable: React.FC<{ appointments: PatientAppointment[] }> = ({ appointments }) => {
    const statusColor = (status: PatientAppointment['status']) => {
        switch (status) {
            case 'Upcoming': return 'bg-blue-100 text-blue-800';
            case 'Completed': return 'bg-green-100 text-green-800';
            case 'Cancelled': return 'bg-red-100 text-red-800';
        }
    };
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white divide-y divide-gray-200 rounded-lg shadow">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {appointments.map((app) => (
                        <tr key={app.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{app.date} at {app.time}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.doctor}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.service}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor(app.status)}`}>
                                    {app.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const ProfileSection: React.FC = () => (
    <div className="bg-white p-8 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-6">Personal Information</h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label htmlFor="profile-full-name" className="block text-sm font-medium text-slate-700">Full Name</label>
                <input type="text" id="profile-full-name" defaultValue="John Doe" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>
            <div>
                <label htmlFor="profile-email" className="block text-sm font-medium text-slate-700">Email Address</label>
                <input type="email" id="profile-email" defaultValue="john.doe@example.com" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>
             <div>
                <label htmlFor="profile-phone" className="block text-sm font-medium text-slate-700">Phone Number</label>
                <input type="tel" id="profile-phone" defaultValue="+8801234567890" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>
             <div>
                <label htmlFor="profile-dob" className="block text-sm font-medium text-slate-700">Date of Birth</label>
                <input type="date" id="profile-dob" defaultValue="1985-05-20" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>
            <div className="md:col-span-2">
                <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors">Update Profile</button>
            </div>
        </form>
    </div>
);


const Dashboard: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
    const [activeTab, setActiveTab] = useState<DashboardTab>('Reports');

    return (
        <div className="py-20 bg-base-100">
            <div className="container mx-auto px-4">
                 <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Patient Dashboard</h2>
                     <button onClick={onLogout} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-colors">
                        Logout
                    </button>
                </div>
                <div className="mb-6 border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs" role="tablist">
                        {(['Reports', 'Appointments', 'Profile'] as DashboardTab[]).map(tab => (
                            <button
                                key={tab}
                                id={`tab-${tab}`}
                                onClick={() => setActiveTab(tab)}
                                className={`${
                                    activeTab === tab
                                        ? 'border-primary text-primary'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                                role="tab"
                                aria-selected={activeTab === tab}
                                aria-controls={`tabpanel-${tab}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </nav>
                </div>
                <div>
                    <div id="tabpanel-Reports" role="tabpanel" aria-labelledby="tab-Reports" hidden={activeTab !== 'Reports'}>
                         <ReportsTable reports={PATIENT_REPORTS} />
                    </div>
                     <div id="tabpanel-Appointments" role="tabpanel" aria-labelledby="tab-Appointments" hidden={activeTab !== 'Appointments'}>
                        <AppointmentsTable appointments={PATIENT_APPOINTMENTS} />
                    </div>
                     <div id="tabpanel-Profile" role="tabpanel" aria-labelledby="tab-Profile" hidden={activeTab !== 'Profile'}>
                        <ProfileSection />
                    </div>
                </div>
            </div>
        </div>
    );
};

const PatientPortal: React.FC<PatientPortalProps> = ({ isLoggedIn, onLogin, onLogout }) => {
    if (!isLoggedIn) {
        return <AuthPage onLogin={onLogin} />;
    }
    return <Dashboard onLogout={onLogout} />;
};

export default PatientPortal;