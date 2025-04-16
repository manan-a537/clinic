'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-icliniq-primary text-white">
      <div className="icliniq-container">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center">
                <Image
                  src="https://ext.same-assets.com/1662803420/273957951.svg"
                  alt="iCliniq Logo"
                  width={120}
                  height={30}
                  className="cursor-pointer"
                />
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-gray-200 text-sm">
              Home
            </Link>
            <Link href="/doctors" className="text-white hover:text-gray-200 text-sm">
              Doctors
            </Link>
            <Link href="/specialties" className="text-white hover:text-gray-200 text-sm">
              Specialties
            </Link>
            <Link href="/articles" className="text-white hover:text-gray-200 text-sm">
              Articles
            </Link>
            <Link href="/about-us" className="text-white hover:text-gray-200 text-sm">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-200 text-sm">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="hidden md:inline-block text-white hover:text-gray-200 text-sm">
              Login
            </Link>
            <Link
              href="/signup"
              className="hidden md:inline-block bg-white text-icliniq-primary px-4 py-2 rounded text-sm font-bold hover:bg-gray-200 transition-colors"
            >
              Sign Up
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, conditionally rendered */}
      {isMenuOpen && (
        <div className="md:hidden bg-icliniq-primary text-white py-2 px-4">
          <nav className="flex flex-col space-y-3">
            <Link href="/" className="text-white hover:text-gray-200 text-sm py-1">
              Home
            </Link>
            <Link href="/doctors" className="text-white hover:text-gray-200 text-sm py-1">
              Doctors
            </Link>
            <Link href="/specialties" className="text-white hover:text-gray-200 text-sm py-1">
              Specialties
            </Link>
            <Link href="/articles" className="text-white hover:text-gray-200 text-sm py-1">
              Articles
            </Link>
            <Link href="/about-us" className="text-white hover:text-gray-200 text-sm py-1">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-200 text-sm py-1">
              Contact
            </Link>
            <Link href="/login" className="text-white hover:text-gray-200 text-sm py-1">
              Login
            </Link>
            <Link href="/signup" className="text-white hover:text-gray-200 text-sm py-1">
              Sign Up
            </Link>
          </nav>
        </div>
      )}

      {/* Physician directory title bar */}
      <div className="bg-icliniq-primary text-white py-2 text-center border-t border-blue-800">
        <h1 className="text-2xl font-bold">PHYSICIAN DIRECTORY</h1>
      </div>
    </header>
  );
}
