import Link from "next/link";
import { Activity, MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Activity className="h-8 w-8 text-orange-secondary" />
              <span className="text-xl font-bold">Kinetic Medicine</span>
            </div>
            <p className="text-gray-400 mb-6">
              Leading sports medicine and exercise physiology clinic dedicated
              to helping individuals achieve optimal performance, recovery, and
              well-being.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin className="h-4 w-4" />
              <span>123 Sports Medicine Drive, Sydney NSW 2000</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  href="/services/injury-rehabilitation"
                  className="hover:text-white"
                >
                  Injury & Rehabilitation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ndis-disability-support"
                  className="hover:text-white"
                >
                  NDIS & Disability Support
                </Link>
              </li>
              <li>
                <Link
                  href="/services/health-management"
                  className="hover:text-white"
                >
                  Health Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/kinetic-sessions"
                  className="hover:text-white"
                >
                  Kinetic Sessions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(02) 9876 5432</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Mon-Fri: 7AM-7PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Sat: 8AM-4PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 Kinetic Medicine. All rights reserved. | Privacy Policy
            | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
