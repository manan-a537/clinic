'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { specialties, locations } from '@/lib/data/doctors';

interface SearchFiltersProps {
  onSearch: (filters: { specialty: string; location: string; name: string }) => void;
}

export function SearchFilters({ onSearch }: SearchFiltersProps) {
  const [specialty, setSpecialty] = useState('');
  const [location, setLocation] = useState('');
  const [name, setName] = useState('');

  const handleSearch = () => {
    onSearch({ specialty, location, name });
  };

  return (
    <div className="search-box">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <div>
          <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-1">Specialty</label>
          <select
            id="specialty"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Specialties</option>
            {specialties.filter(s => s !== "All Specialties").map((spec) => (
              <option key={spec} value={spec}>
                {spec}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <select
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Locations</option>
            {locations.filter(loc => loc !== "All Locations").map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Doctor Name</label>
          <Input
            id="name"
            placeholder="Search by name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex justify-center md:justify-end mt-4 md:mt-0">
        <Button
          onClick={handleSearch}
          className="search-btn"
        >
          SEARCH
        </Button>
      </div>
    </div>
  );
}
