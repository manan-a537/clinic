export interface Doctor {
  id: number;
  name: string;
  credentials: string;
  specialty: string;
  subSpecialty?: string;
  experience: string;
  languages: string[];
  rating: number;
  reviews: number;
  consultPrice: number;
  consultCurrency: string;
  consultType: ('chat' | 'voice' | 'video')[];
  imageUrl: string;
  gender: 'male' | 'female';
}

export const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Nizar Souayah',
    credentials: 'MD, NEUROLOGIST, FELLOWSHIP TRAINED',
    specialty: 'Neurology',
    experience: 'Experience: 30+ Yrs',
    languages: ['English'],
    rating: 4.9,
    reviews: 1245,
    consultPrice: 25,
    consultCurrency: '₹',
    consultType: ['chat', 'voice', 'video'],
    imageUrl: 'https://ext.same-assets.com/1662803420/853724661.png',
    gender: 'male',
  },
  {
    id: 2,
    name: 'Dr. Mahmoud Abdullah',
    credentials: 'FAMILY PHYSICIAN, MD',
    specialty: 'Family Medicine',
    experience: 'Experience: 8+ Yrs',
    languages: ['English', 'Arabic'],
    rating: 4.7,
    reviews: 567,
    consultPrice: 20,
    consultCurrency: '₹',
    consultType: ['chat', 'voice', 'video'],
    imageUrl: 'https://ext.same-assets.com/1662803420/4021059258.png',
    gender: 'male',
  },
  {
    id: 3,
    name: 'Dr. Ashwini V Swamy',
    credentials: 'OBSTETRICIAN AND GYNECOLOGIST',
    specialty: 'Gynecology',
    subSpecialty: 'Obstetrics',
    experience: 'Experience: 12+ Yrs',
    languages: ['English', 'Hindi', 'Kannada'],
    rating: 4.8,
    reviews: 923,
    consultPrice: 22,
    consultCurrency: '₹',
    consultType: ['chat', 'voice', 'video'],
    imageUrl: 'https://ext.same-assets.com/1662803420/1468335124.png',
    gender: 'female',
  },
  {
    id: 4,
    name: 'Dr. Sayed Amer',
    credentials: 'MD, INTERNAL MEDICINE',
    specialty: 'Internal Medicine',
    experience: 'Experience: 15+ Yrs',
    languages: ['English', 'Arabic'],
    rating: 4.6,
    reviews: 482,
    consultPrice: 25,
    consultCurrency: '₹',
    consultType: ['chat', 'voice'],
    imageUrl: 'https://ext.same-assets.com/1662803420/2960813631.png',
    gender: 'male',
  },
  {
    id: 5,
    name: 'Dr. Keith Sacco',
    credentials: 'MD, FACP',
    specialty: 'Nephrology',
    experience: 'Experience: 10+ Yrs',
    languages: ['English', 'Maltese'],
    rating: 5.0,
    reviews: 325,
    consultPrice: 30,
    consultCurrency: '₹',
    consultType: ['chat', 'voice', 'video'],
    imageUrl: 'https://ext.same-assets.com/1662803420/4021059258.png',
    gender: 'male',
  },
  {
    id: 6,
    name: 'Dr. Shazli Naseer',
    credentials: 'PSYCHIATRIST',
    specialty: 'Psychiatry',
    experience: 'Experience: 9+ Yrs',
    languages: ['English', 'Hindi', 'Urdu'],
    rating: 4.8,
    reviews: 713,
    consultPrice: 25,
    consultCurrency: '₹',
    consultType: ['chat', 'voice', 'video'],
    imageUrl: 'https://ext.same-assets.com/1662803420/4283453935.png',
    gender: 'male',
  },
  {
    id: 7,
    name: 'Dr. Joshua Stadler',
    credentials: 'DERMATOLOGIST',
    specialty: 'Dermatology',
    experience: 'Experience: 11+ Yrs',
    languages: ['English'],
    rating: 4.9,
    reviews: 842,
    consultPrice: 28,
    consultCurrency: '₹',
    consultType: ['chat', 'voice', 'video'],
    imageUrl: 'https://ext.same-assets.com/1662803420/2290614675.png',
    gender: 'male',
  },
  {
    id: 8,
    name: 'Dr. Sarah Miller',
    credentials: 'MD, CARDIOLOGIST',
    specialty: 'Cardiology',
    experience: 'Experience: 14+ Yrs',
    languages: ['English', 'Spanish'],
    rating: 4.7,
    reviews: 654,
    consultPrice: 30,
    consultCurrency: '₹',
    consultType: ['chat', 'voice', 'video'],
    imageUrl: 'https://ext.same-assets.com/1662803420/1468335124.png',
    gender: 'female',
  },
  {
    id: 9,
    name: 'Dr. John Rodriguez',
    credentials: 'MD, GASTROENTEROLOGIST',
    specialty: 'Gastroenterology',
    experience: 'Experience: 13+ Yrs',
    languages: ['English', 'Spanish'],
    rating: 4.8,
    reviews: 512,
    consultPrice: 27,
    consultCurrency: '₹',
    consultType: ['chat', 'voice', 'video'],
    imageUrl: 'https://ext.same-assets.com/1662803420/2290614675.png',
    gender: 'male',
  },
  {
    id: 10,
    name: 'Dr. Emily Watson',
    credentials: 'MD, ENDOCRINOLOGIST',
    specialty: 'Endocrinology',
    experience: 'Experience: 10+ Yrs',
    languages: ['English'],
    rating: 4.9,
    reviews: 426,
    consultPrice: 26,
    consultCurrency: '₹',
    consultType: ['chat', 'voice'],
    imageUrl: 'https://ext.same-assets.com/1662803420/1468335124.png',
    gender: 'female',
  },
];

export const specialties = [
  "All Specialties",
  "Cardiology",
  "Dermatology",
  "Endocrinology",
  "Family Medicine",
  "Gastroenterology",
  "Gynecology",
  "Internal Medicine",
  "Nephrology",
  "Neurology",
  "Obstetrics",
  "Psychiatry",
];

export const locations = [
  "All Locations",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "India",
  "UAE",
  "Saudi Arabia",
  "Singapore",
  "Malaysia",
  "Philippines",
];
