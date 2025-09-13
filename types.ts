
export enum View {
    Home = 'Home',
    AboutUs = 'About Us',
    Doctors = 'Doctors',
    Services = 'Services',
    Appointments = 'Appointments',
    ContactUs = 'Contact Us',
    PatientPortal = 'Patient Portal',
}

export interface Doctor {
    name: string;
    specialization: string;
    bio: string;
    imageUrl: string;
}

export interface Service {
    title: string;
    icon: React.ReactNode;
    description: string;
    details: string[];
    imageUrl?: string;
}

export interface PatientReport {
    id: string;
    testName: string;
    date: string;
    url: string;
}

export interface PatientAppointment {
    id: string;
    doctor: string;
    service: string;
    date: string;
    time: string;
    status: 'Completed' | 'Upcoming' | 'Cancelled';
}