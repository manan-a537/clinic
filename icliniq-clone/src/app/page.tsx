'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SearchFilters } from '@/components/doctors/SearchFilters';
import { DoctorsList } from '@/components/doctors/DoctorsList';
import { Sidebar } from '@/components/sidebar/Sidebar';

export default function Home() {
  const [searchFilters, setSearchFilters] = useState({
    specialty: '',
    location: '',
    name: '',
  });

  const handleSearch = (filters: { specialty: string; location: string; name: string }) => {
    setSearchFilters(filters);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-[#f9f9f9] py-6">
        <div className="icliniq-container">
          {/* Search section */}
          <section className="mb-6">
            <SearchFilters onSearch={handleSearch} />
          </section>

          {/* Content section with sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main content */}
            <div className="lg:col-span-3">
              <DoctorsList filters={searchFilters} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
