'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  FaStar,
  FaStethoscope,
  FaGlobe,
  FaMicrophone,
  FaHospital,
  FaUserMd,
  FaCalendarAlt,
  FaCheckCircle,
  FaVideo
} from 'react-icons/fa';

// Fixed stars components to avoid array mapping with index keys
const FiveStars = () => (
  <div className="flex items-center">
    <FaStar className="text-icliniq-yellow mr-0.5" size={14} />
    <FaStar className="text-icliniq-yellow mr-0.5" size={14} />
    <FaStar className="text-icliniq-yellow mr-0.5" size={14} />
    <FaStar className="text-icliniq-yellow mr-0.5" size={14} />
    <FaStar className="text-icliniq-yellow mr-0.5" size={14} />
    <span className="ml-1">& Up</span>
  </div>
);

const FourStars = () => (
  <div className="flex items-center">
    <FaStar className="text-icliniq-yellow mr-0.5" size={14} />
    <FaStar className="text-icliniq-yellow mr-0.5" size={14} />
    <FaStar className="text-icliniq-yellow mr-0.5" size={14} />
    <FaStar className="text-icliniq-yellow mr-0.5" size={14} />
    <FaStar className="text-gray-300 mr-0.5" size={14} />
    <span className="ml-1">& Up</span>
  </div>
);

const ThreeStars = () => (
  <div className="flex items-center">
    <FaStar className="text-icliniq-yellow mr-0.5" size={14} />
    <FaStar className="text-icliniq-yellow mr-0.5" size={14} />
    <FaStar className="text-icliniq-yellow mr-0.5" size={14} />
    <FaStar className="text-gray-300 mr-0.5" size={14} />
    <FaStar className="text-gray-300 mr-0.5" size={14} />
    <span className="ml-1">& Up</span>
  </div>
);

const TwoStars = () => (
  <div className="flex items-center">
    <FaStar className="text-icliniq-yellow mr-0.5" size={14} />
    <FaStar className="text-icliniq-yellow mr-0.5" size={14} />
    <FaStar className="text-gray-300 mr-0.5" size={14} />
    <FaStar className="text-gray-300 mr-0.5" size={14} />
    <FaStar className="text-gray-300 mr-0.5" size={14} />
    <span className="ml-1">& Up</span>
  </div>
);

const OneStar = () => (
  <div className="flex items-center">
    <FaStar className="text-icliniq-yellow mr-0.5" size={14} />
    <FaStar className="text-gray-300 mr-0.5" size={14} />
    <FaStar className="text-gray-300 mr-0.5" size={14} />
    <FaStar className="text-gray-300 mr-0.5" size={14} />
    <FaStar className="text-gray-300 mr-0.5" size={14} />
    <span className="ml-1">& Up</span>
  </div>
);

export function Sidebar() {
  // Helper function to get star rating component
  const getRatingComponent = (rating: number) => {
    switch (rating) {
      case 5:
        return <FiveStars />;
      case 4:
        return <FourStars />;
      case 3:
        return <ThreeStars />;
      case 2:
        return <TwoStars />;
      case 1:
        return <OneStar />;
      default:
        return <FiveStars />;
    }
  };

  return (
    <aside>
      {/* Ask a Doctor Online section */}
      <Card className="p-4 shadow mb-6 bg-gradient-to-br from-icliniq-primary to-blue-800 text-white">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Ask a Doctor Online</h3>
          <p className="text-sm mb-6">Get expert medical advice from experienced physicians</p>
          <Button className="bg-icliniq-accent hover:bg-icliniq-accent/90 text-white font-bold py-2 px-6 w-full">
            Ask Now
          </Button>
        </div>
      </Card>

      {/* Filter Options */}
      <Card className="p-4 shadow mb-6">
        <h3 className="text-lg font-bold mb-3 text-icliniq-primary">Filter By</h3>

        {/* Rating Filter */}
        <div className="mb-5">
          <h4 className="text-sm font-semibold mb-2">Rating</h4>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={`rating-filter-${rating}`} className="flex items-center">
                <input
                  type="checkbox"
                  id={`rating-${rating}`}
                  className="mr-2 h-4 w-4 rounded border-gray-300 text-icliniq-primary"
                />
                <label htmlFor={`rating-${rating}`} className="flex items-center text-sm">
                  {getRatingComponent(rating)}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Specialty Filter */}
        <div className="mb-5">
          <h4 className="text-sm font-semibold mb-2">Specialty</h4>
          <div className="space-y-2">
            {['Cardiology', 'Dermatology', 'Neurology', 'Pediatrics', 'Psychiatry'].map((specialty) => (
              <div key={specialty} className="flex items-center">
                <input
                  type="checkbox"
                  id={`specialty-${specialty.toLowerCase()}`}
                  className="mr-2 h-4 w-4 rounded border-gray-300 text-icliniq-primary"
                />
                <label htmlFor={`specialty-${specialty.toLowerCase()}`} className="text-sm">
                  {specialty}
                </label>
              </div>
            ))}
            <button className="text-icliniq-primary text-sm mt-1 hover:underline">
              View All Specialties
            </button>
          </div>
        </div>

        {/* Location Filter */}
        <div className="mb-5">
          <h4 className="text-sm font-semibold mb-2">Location</h4>
          <div className="space-y-2">
            {['United States', 'United Kingdom', 'India', 'Australia', 'Canada'].map((location) => (
              <div key={location} className="flex items-center">
                <input
                  type="checkbox"
                  id={`location-${location.toLowerCase().replace(/\s/g, '-')}`}
                  className="mr-2 h-4 w-4 rounded border-gray-300 text-icliniq-primary"
                />
                <label
                  htmlFor={`location-${location.toLowerCase().replace(/\s/g, '-')}`}
                  className="text-sm"
                >
                  {location}
                </label>
              </div>
            ))}
            <button className="text-icliniq-primary text-sm mt-1 hover:underline">
              View All Locations
            </button>
          </div>
        </div>

        {/* Language Filter */}
        <div className="mb-5">
          <h4 className="text-sm font-semibold mb-2">Language</h4>
          <div className="space-y-2">
            {['English', 'Spanish', 'Hindi', 'Arabic', 'French'].map((language) => (
              <div key={language} className="flex items-center">
                <input
                  type="checkbox"
                  id={`language-${language.toLowerCase()}`}
                  className="mr-2 h-4 w-4 rounded border-gray-300 text-icliniq-primary"
                />
                <label htmlFor={`language-${language.toLowerCase()}`} className="text-sm">
                  {language}
                </label>
              </div>
            ))}
            <button className="text-icliniq-primary text-sm mt-1 hover:underline">
              View All Languages
            </button>
          </div>
        </div>
      </Card>

      {/* Consultation options */}
      <Card className="p-4 shadow mb-6">
        <h3 className="text-lg font-bold mb-3 text-icliniq-primary">Consultation Types</h3>
        <div className="space-y-3">
          <div className="flex items-center text-gray-700">
            <FaVideo className="text-icliniq-primary mr-3" size={16} />
            <span className="text-sm">Video Consultation</span>
          </div>
          <div className="flex items-center text-gray-700">
            <FaMicrophone className="text-icliniq-primary mr-3" size={16} />
            <span className="text-sm">Voice Consultation</span>
          </div>
          <div className="flex items-center text-gray-700">
            <FaStethoscope className="text-icliniq-primary mr-3" size={16} />
            <span className="text-sm">Chat Consultation</span>
          </div>
          <div className="flex items-center text-gray-700">
            <FaHospital className="text-icliniq-primary mr-3" size={16} />
            <span className="text-sm">In-clinic Appointment</span>
          </div>
          <div className="flex items-center text-gray-700">
            <FaCalendarAlt className="text-icliniq-primary mr-3" size={16} />
            <span className="text-sm">Schedule for Later</span>
          </div>
        </div>
      </Card>

      {/* Benefits */}
      <Card className="p-4 shadow mb-6">
        <h3 className="text-lg font-bold mb-3 text-icliniq-primary">Benefits</h3>
        <div className="space-y-3">
          <div className="flex items-center text-gray-700">
            <FaCheckCircle className="text-icliniq-green mr-3" size={16} />
            <span className="text-sm">24/7 Availability</span>
          </div>
          <div className="flex items-center text-gray-700">
            <FaCheckCircle className="text-icliniq-green mr-3" size={16} />
            <span className="text-sm">Verified Doctors</span>
          </div>
          <div className="flex items-center text-gray-700">
            <FaCheckCircle className="text-icliniq-green mr-3" size={16} />
            <span className="text-sm">Secure & Private</span>
          </div>
          <div className="flex items-center text-gray-700">
            <FaCheckCircle className="text-icliniq-green mr-3" size={16} />
            <span className="text-sm">Money Back Guarantee</span>
          </div>
          <div className="flex items-center text-gray-700">
            <FaCheckCircle className="text-icliniq-green mr-3" size={16} />
            <span className="text-sm">Multiple Specialties</span>
          </div>
        </div>
      </Card>
    </aside>
  );
}
