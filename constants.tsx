import React from 'react';
import type { Doctor, Service, PatientReport, PatientAppointment } from './types';

// Icons
const StethoscopeIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0021.5 5.5V3.935m-18 0A2.25 2.25 0 015.25 2h13.5A2.25 2.25 0 0121 4.25v2.286c0 .482.178.941.488 1.298a2.25 2.25 0 01-.488 3.542A2.25 2.25 0 0118.75 12H18a2.25 2.25 0 00-2.25 2.25v.894m-6.75-5.228A2.25 2.25 0 015.25 6H6a2.25 2.25 0 002.25-2.25V3.197M5.25 6h13.5" />
    </svg>
);
const UltrasoundIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
    </svg>
);
const EcgIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.172 16.172l3.428-3.428 1.414 1.414 2.122-2.121 2.12 2.12 1.415-1.414 3.429 3.428" />
    </svg>
);
const XrayIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" />
    </svg>
);
const LabIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h18M16.5 3L21 7.5m0 0L16.5 12M21 7.5H3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.03 21H10a2 2 0 110-4h.03M13.97 3H14a2 2 0 100 4h-.03" />
    </svg>
);
const CtScanIcon: React.FC<{className?: string}> = ({ className }) => (
     <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6H6a6 6 0 006 6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5.25a6 6 0 00-6 6h12a6 6 0 00-6-6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.25a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
    </svg>
);

export const DOCTORS: Doctor[] = [
    {
        name: 'Dr. Md. Mozammel Haque Bhuiyan',
        specialization: 'Medicine, Gastroenterology & Cardiology Specialist',
        bio: 'Dr. Md. Mozammel Haque Bhuiyan is a seasoned physician with extensive qualifications including an M.Sc in Gastroenterology from the UK. He has specialized training in Diabetology from BIRDEM and Cardiology from BSMMU. As a Member of the American College of Physicians, he brings a wealth of experience in internal medicine, heart disease, and digestive health.',
        imageUrl: 'https://picsum.photos/seed/doc_mozammel/400/400'
    },
    {
        name: 'Dr. Arzina Tamim',
        specialization: 'Gynaecologist & Obstetrician',
        bio: 'Dr. Arzina Tamim is a dedicated physician with an M.B.B.S from Dhaka University. She has extensive post-graduate training in Medicine, Pediatrics, and Gynaecology & Obstetrics. She specializes in women\'s health, maternal care, and provides experienced treatment for infertile couples.',
        imageUrl: 'https://picsum.photos/seed/doc_arzina/400/400'
    },
    {
        name: 'Dr. Md. Abdullah',
        specialization: 'General Practitioner (Medicine, Mother & Child Health)',
        bio: 'Dr. Md. Abdullah holds an M.B.B.S and has specialized training in Ultrasonography and Thyroid (DMU). He is part of the BCS (Health) cadre and is an experienced General Practitioner with a focus on Internal Medicine and Mother & Child Health.',
        imageUrl: 'https://picsum.photos/seed/doc_abdullah/400/400'
    },
    {
        name: 'Dr. Fatema Begum',
        specialization: 'Pediatrician & Child Health Specialist',
        bio: 'Dr. Fatema Begum is a compassionate pediatrician with over 10 years of experience in child health. She completed her M.B.B.S. and holds a Diploma in Child Health (DCH). Her expertise includes neonatal care, vaccination, and common childhood illnesses. She is dedicated to providing a friendly and comfortable environment for her young patients.',
        imageUrl: 'https://picsum.photos/seed/doc_fatema/400/400'
    },
    {
        name: 'Dr. Ahmed Sharif',
        specialization: 'Orthopedic Surgeon',
        bio: 'Dr. Ahmed Sharif is a skilled orthopedic surgeon specializing in trauma, joint replacement, and sports injuries. He holds an M.S. in Orthopedics and has completed fellowships in arthroscopy. Dr. Sharif is committed to restoring mobility and improving the quality of life for his patients through both surgical and non-surgical treatments.',
        imageUrl: 'https://picsum.photos/seed/doc_ahmed/400/400'
    },
    {
        name: 'Dr. Naznin Sultana',
        specialization: 'Dermatologist & Venereologist',
        bio: 'Dr. Naznin Sultana specializes in clinical and cosmetic dermatology. With an M.D. in Dermatology, she treats a wide range of skin conditions including acne, eczema, and psoriasis. She also offers cosmetic procedures for skin rejuvenation. Dr. Sultana is known for her patient-centric approach and tailored treatment plans.',
        imageUrl: 'https://picsum.photos/seed/doc_naznin/400/400'
    },
    {
        name: 'Dr. Kamrul Hasan',
        specialization: 'Neurologist & Brain Specialist',
        bio: 'Dr. Kamrul Hasan is an expert neurologist with a focus on stroke, epilepsy, and movement disorders. After his M.B.B.S., he pursued an M.D. in Neurology and has been actively involved in research and clinical practice. He is dedicated to diagnosing and managing complex neurological conditions with the latest medical advancements.',
        imageUrl: 'https://picsum.photos/seed/doc_kamrul/400/400'
    }
];

export const SERVICES: Service[] = [
    {
        title: 'Ultrasonography',
        icon: <UltrasoundIcon className="w-8 h-8 text-primary" />,
        description: 'Advanced imaging using sound waves to visualize internal body structures.',
        details: [
            'Types: Abdominal, Pelvic, Obstetric (Pregnancy), Thyroid, Breast, and Musculoskeletal.',
            'Technology: We use high-resolution 4D ultrasound machines for detailed and accurate imaging.',
            'Preparation: For abdominal scans, fasting for 6-8 hours is required. For pelvic scans, a full bladder is necessary. Our staff will provide specific instructions when you book.'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1606092195730-e4a83353a4a4?w=800&h=600&fit=crop&q=80',
    },
    {
        title: 'ECG (Electrocardiogram)',
        icon: <EcgIcon className="w-8 h-8 text-primary" />,
        description: 'A simple, painless test that records the electrical activity of the heart.',
        details: [
            'Purpose: To detect heart problems like arrhythmias, blocked arteries, and heart damage.',
            'Procedure: Small electrode patches are attached to your chest, arms, and legs. The test takes only a few minutes, and you can resume normal activities immediately.',
            'Importance: Crucial for assessing heart health, especially for patients with risk factors or symptoms like chest pain or palpitations.'
        ],
        imageUrl: 'https://picsum.photos/seed/ecg_service/600/400',
    },
    {
        title: 'Digital X-ray',
        icon: <XrayIcon className="w-8 h-8 text-primary" />,
        description: 'Fast and effective imaging for bones, chests, and other internal structures.',
        details: [
            'Our digital X-ray system provides high-quality images with minimal radiation exposure. Results are available quickly, allowing for faster diagnosis and treatment.'
        ]
    },
    {
        title: 'Pathology/Lab Tests',
        icon: <LabIcon className="w-8 h-8 text-primary" />,
        description: 'Comprehensive blood, urine, and stool tests for accurate disease diagnosis.',
        details: [
            'We offer a wide range of tests including Complete Blood Count (CBC), Lipid Profile, Blood Sugar, Kidney and Liver function tests. Our automated lab ensures precision and quick turnaround times.'
        ]
    },
    {
        title: 'CT Scan',
        icon: <CtScanIcon className="w-8 h-8 text-primary" />,
        description: 'Detailed cross-sectional images for advanced diagnostic insights.',
        details: [
            'Our multi-slice CT scanner provides detailed images of organs, bones, and soft tissues, aiding in the diagnosis of complex medical conditions. Contrast studies are available for enhanced visualization.'
        ]
    }
];

export const PATIENT_REPORTS: PatientReport[] = [
    { id: 'RPT001', testName: 'Complete Blood Count (CBC)', date: '2023-10-15', url: '#' },
    { id: 'RPT002', testName: 'Lipid Profile', date: '2023-10-15', url: '#' },
    { id: 'RPT003', testName: 'Abdominal Ultrasound', date: '2023-08-22', url: '#' },
    { id: 'RPT004', testName: 'Chest X-ray', date: '2023-05-01', url: '#' },
];

export const PATIENT_APPOINTMENTS: PatientAppointment[] = [
    { id: 'APP001', doctor: 'Dr. Rezaul Karim', service: 'ECG', date: '2024-07-25', time: '10:00 AM', status: 'Upcoming' },
    { id: 'APP002', doctor: 'Dr. Amina Rahman', service: 'Abdominal Ultrasound', date: '2023-10-14', time: '02:30 PM', status: 'Completed' },
    { id: 'APP003', doctor: 'Dr. Shahidul Islam', service: 'Pathology/Lab Tests', date: '2023-08-21', time: '09:00 AM', status: 'Completed' },
    { id: 'APP004', doctor: 'Dr. Nusrat Jahan', service: 'General Check-up', date: '2023-04-30', time: '11:00 AM', status: 'Completed' },
];