'use client';

import { useState, useEffect } from 'react';
import { DoctorCard } from './DoctorCard';
import { Pagination } from '@/components/ui/Pagination';
import { type Doctor, doctors as allDoctors } from '@/lib/data/doctors';

interface DoctorsListProps {
  filters: {
    specialty: string;
    location: string;
    name: string;
  };
}

export function DoctorsList({ filters }: DoctorsListProps) {
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>(allDoctors);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const doctorsPerPage = 5;

  // Filter doctors based on search criteria
  useEffect(() => {
    let filtered = [...allDoctors];

    if (filters.specialty) {
      filtered = filtered.filter(
        doctor => doctor.specialty.toLowerCase().includes(filters.specialty.toLowerCase())
      );
    }

    if (filters.location) {
      // In a real app, we would filter by location
      // For this demo, we'll just simulate this filter
    }

    if (filters.name) {
      filtered = filtered.filter(
        doctor => doctor.name.toLowerCase().includes(filters.name.toLowerCase())
      );
    }

    setFilteredDoctors(filtered);
    setTotalPages(Math.ceil(filtered.length / doctorsPerPage));
    setCurrentPage(1); // Reset to first page when filters change
  }, [filters]);

  // Get current page doctors
  const getCurrentPageDoctors = () => {
    const indexOfLastDoctor = currentPage * doctorsPerPage;
    const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
    return filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);
  };

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Doctors count */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800">Doctors</h2>
        <p className="text-sm text-gray-600">
          {filteredDoctors.length} {filteredDoctors.length === 1 ? 'doctor' : 'doctors'} found
        </p>
      </div>

      {/* Doctor cards */}
      <div className="space-y-4">
        {getCurrentPageDoctors().length > 0 ? (
          getCurrentPageDoctors().map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))
        ) : (
          <div className="bg-white rounded shadow p-6 text-center">
            <p className="text-lg text-gray-700">No doctors found matching your criteria.</p>
            <p className="text-sm text-gray-500 mt-2">Try adjusting your filters to see more results.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {filteredDoctors.length > doctorsPerPage && (
        <div className="mt-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}
