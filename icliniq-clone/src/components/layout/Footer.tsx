'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-icliniq-primary text-white pt-10 pb-6">
      <div className="icliniq-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-bold mb-4">For a Better Health</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">Ask a Doctor Online</Link></li>
              <li><Link href="#" className="hover:underline">Chat with a Doctor</Link></li>
              <li><Link href="#" className="hover:underline">Phone a Doctor</Link></li>
              <li><Link href="#" className="hover:underline">Video Consult a Doctor</Link></li>
              <li><Link href="#" className="hover:underline">Book a Lab Test</Link></li>
              <li><Link href="#" className="hover:underline">Upload Health Records</Link></li>
              <li><Link href="#" className="hover:underline">Articles</Link></li>
              <li><Link href="#" className="hover:underline">Health Feed</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Find a Doctor by</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">Specialty</Link></li>
              <li><Link href="#" className="hover:underline">Location</Link></li>
              <li><Link href="#" className="hover:underline">Language</Link></li>
              <li><Link href="#" className="hover:underline">Symptom</Link></li>
              <li><Link href="#" className="hover:underline">Health Condition</Link></li>
              <li><Link href="#" className="hover:underline">Cancer</Link></li>
              <li><Link href="#" className="hover:underline">Heart Disease</Link></li>
              <li><Link href="#" className="hover:underline">Diabetes</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Medical Specialties</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link href="#" className="hover:underline">Allergy</Link>
              <Link href="#" className="hover:underline">Cardiology</Link>
              <Link href="#" className="hover:underline">Dermatology</Link>
              <Link href="#" className="hover:underline">ENT</Link>
              <Link href="#" className="hover:underline">Gastroenterology</Link>
              <Link href="#" className="hover:underline">Gynecology</Link>
              <Link href="#" className="hover:underline">Neurology</Link>
              <Link href="#" className="hover:underline">Oncology</Link>
              <Link href="#" className="hover:underline">Pediatrics</Link>
              <Link href="#" className="hover:underline">Psychiatry</Link>
              <Link href="#" className="hover:underline">Urology</Link>
              <Link href="#" className="hover:underline">All Specialties</Link>
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-bold mb-4">iCliniq</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">About Us</Link></li>
              <li><Link href="#" className="hover:underline">For Patients</Link></li>
              <li><Link href="#" className="hover:underline">For Doctors</Link></li>
              <li><Link href="#" className="hover:underline">For Hospitals</Link></li>
              <li><Link href="#" className="hover:underline">For Enterprises</Link></li>
              <li><Link href="#" className="hover:underline">Blogs</Link></li>
              <li><Link href="#" className="hover:underline">Contact Us</Link></li>
              <li><Link href="#" className="hover:underline">Careers</Link></li>
            </ul>
          </div>
        </div>

        {/* Doctor profiles carousel section */}
        <div className="mb-8 rounded-lg p-5 border border-blue-800 bg-blue-900/40">
          <h3 className="text-lg font-bold mb-4">DOCTORS WE WORK WITH</h3>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex-shrink-0 w-16 h-16 relative">
                <Image
                  src={`https://ext.same-assets.com/1662803420/${i === 2 ? '4021059258' : i === 3 ? '1468335124' : '853724661'}.png`}
                  alt={`Doctor ${i}`}
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-blue-800 pt-6 pb-2">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div className="mb-4 md:mb-0">
              <Image
                src="https://ext.same-assets.com/1662803420/273957951.svg"
                alt="iCliniq Logo"
                width={120}
                height={30}
              />
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-blue-300">
                <FaFacebook size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-blue-300">
                <FaTwitter size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-blue-300">
                <FaInstagram size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-blue-300">
                <FaLinkedin size={20} />
              </Link>
              <Link href="#" className="text-white hover:text-blue-300">
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>

          <div className="text-center text-xs mt-6">
            <p>Copyright © 2023 iCliniq. All Rights Reserved.</p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link href="#" className="hover:underline">Privacy Policy</Link>
              <Link href="#" className="hover:underline">Terms of Use</Link>
              <Link href="#" className="hover:underline">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
