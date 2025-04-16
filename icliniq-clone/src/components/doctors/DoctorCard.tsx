'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaStar, FaStarHalfAlt, FaRegStar, FaVideo, FaPhoneAlt, FaComments } from 'react-icons/fa';
import type { Doctor } from '@/lib/data/doctors';

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  // Generate star rating display
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-icliniq-yellow" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-icliniq-yellow" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-icliniq-yellow" />);
      }
    }

    return stars;
  };

  return (
    <div className="doctor-card">
      {/* Doctor Image Section */}
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24">
          <Image
            src={doctor.imageUrl}
            alt={doctor.name}
            width={96}
            height={96}
            className="rounded-full object-cover border-2 border-gray-200"
          />
        </div>
        <div className="mt-2 flex flex-col items-center">
          <div className="flex items-center">
            {renderStars(doctor.rating)}
          </div>
          <p className="text-xs text-gray-600">{doctor.rating} ({doctor.reviews})</p>
        </div>
      </div>

      {/* Doctor Info Section */}
      <div className="flex-1">
        <div className="mb-2">
          <h2 className="doctor-name">{doctor.name}</h2>
          <p className="text-xs text-gray-800 font-medium">{doctor.credentials}</p>
        </div>

        <div className="mb-3">
          <p className="text-sm text-icliniq-primary mb-1">
            <span className="font-semibold">{doctor.specialty}</span>
            {doctor.subSpecialty && `, ${doctor.subSpecialty}`}
          </p>
          <p className="text-xs text-gray-600">{doctor.experience}</p>
        </div>

        <div className="mb-3">
          <p className="text-xs text-gray-600">
            Currently practicing in <span className="font-medium">English</span>
            {doctor.languages.length > 1 && (
              <>
                , {doctor.languages.slice(1).join(', ')}
              </>
            )}
          </p>
        </div>
      </div>

      {/* Consultation Options Section */}
      <div className="md:w-48 flex flex-col items-start md:items-end gap-2 mt-4 md:mt-0">
        <div className="flex space-x-2 mb-2">
          {doctor.consultType.includes('chat') && (
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
              <FaComments className="text-icliniq-primary mr-1" size={14} />
              <span className="text-xs">Chat</span>
            </div>
          )}

          {doctor.consultType.includes('voice') && (
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
              <FaPhoneAlt className="text-icliniq-primary mr-1" size={14} />
              <span className="text-xs">Voice</span>
            </div>
          )}

          {doctor.consultType.includes('video') && (
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
              <FaVideo className="text-icliniq-primary mr-1" size={14} />
              <span className="text-xs">Video</span>
            </div>
          )}
        </div>

        <div className="text-xs text-gray-600 mb-2">
          <div>Consultation Fees:</div>
          <div className="font-bold">{doctor.consultCurrency}{doctor.consultPrice}</div>
        </div>

        <Button className="consult-button w-full md:w-auto">
          Consult Now
        </Button>
      </div>
    </div>
  );
}
