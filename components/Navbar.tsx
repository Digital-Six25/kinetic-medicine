"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Activity,
  Phone,
  Menu,
  X,
  Heart,
  Brain,
  Users,
  Dumbbell,
  Shield,
  Target,
  ChevronDown,
  MapPin,
} from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const [isLocationsMenuOpen, setIsLocationsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 shadow-sm border-b"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Activity
              className={`h-8 w-8 text-orange-secondary transition-all ${
                isScrolled ? "scale-90" : ""
              }`}
            />
            <span className="text-xl font-bold text-gray-900">
              Kinetic Medicine
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <div
              className="relative"
              onMouseEnter={() => setIsServicesMenuOpen(true)}
              onMouseLeave={() => setIsServicesMenuOpen(false)}
            >
              <Link
                href="/services"
                className="flex items-center space-x-1 text-gray-700 hover:text-orange-primary font-medium"
              >
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </Link>

              {/* Services Megamenu */}
              {isServicesMenuOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-[800px] bg-white rounded-lg shadow-xl border z-50">
                  <div className="p-8">
                    <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <Link
                          href="/services/injury-rehabilitation"
                          className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                          onClick={() => setIsServicesMenuOpen(false)}
                        >
                          <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                            <Heart className="h-6 w-6 text-orange-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-orange-primary">
                              Injury Rehabilitation
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                              Comprehensive recovery programs for sports and
                              workplace injuries
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/services/neurological-rehabilitation"
                          className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                          onClick={() => setIsServicesMenuOpen(false)}
                        >
                          <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                            <Brain className="h-6 w-6 text-orange-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-orange-primary">
                              Neurological Rehabilitation
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                              Specialized programs for stroke, spinal cord, and
                              brain injuries
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/services/ndis-disability-support"
                          className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                          onClick={() => setIsServicesMenuOpen(false)}
                        >
                          <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                            <Shield className="h-6 w-6 text-orange-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-orange-primary">
                              NDIS Disability Support
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                              Funded exercise physiology services for NDIS
                              participants
                            </p>
                          </div>
                        </Link>
                      </div>

                      <div className="space-y-6">
                        <Link
                          href="/services/health-management"
                          className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                          onClick={() => setIsServicesMenuOpen(false)}
                        >
                          <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                            <Users className="h-6 w-6 text-orange-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-orange-primary">
                              Health Management
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                              Chronic disease management and preventive health
                              programs
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/services/kinetic-sessions"
                          className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                          onClick={() => setIsServicesMenuOpen(false)}
                        >
                          <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                            <Dumbbell className="h-6 w-6 text-orange-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-orange-primary">
                              Kinetic Sessions
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                              Group fitness classes and supervised exercise
                              programs
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/services/personalized-programs"
                          className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                          onClick={() => setIsServicesMenuOpen(false)}
                        >
                          <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                            <Target className="h-6 w-6 text-orange-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-orange-primary">
                              Personalized Programs
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                              Tailored exercise plans designed for your specific
                              goals
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            Need help choosing?
                          </h4>
                          <p className="text-sm text-gray-600">
                            Our team can help you find the right service for
                            your needs
                          </p>
                        </div>
                        <Button asChild>
                          <Link
                            href="/contact"
                            onClick={() => setIsServicesMenuOpen(false)}
                          >
                            Get Started
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => setIsAboutMenuOpen(true)}
              onMouseLeave={() => setIsAboutMenuOpen(false)}
            >
              <Link
                href="/about"
                className="flex items-center space-x-1 text-gray-700 hover:text-orange-primary font-medium"
              >
                <span>About</span>
                <ChevronDown className="h-4 w-4" />
              </Link>

              {/* About Megamenu */}
              {isAboutMenuOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-[600px] bg-white rounded-lg shadow-xl border z-50">
                  <div className="p-8">
                    <div className="grid grid-cols-1 gap-6">
                      <Link
                        href="/about"
                        className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                        onClick={() => setIsAboutMenuOpen(false)}
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                          <Activity className="h-6 w-6 text-orange-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-orange-primary">
                            About Kinetic Medicine
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            Learn about our mission, values, and commitment to
                            your health
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/team"
                        className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                        onClick={() => setIsAboutMenuOpen(false)}
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                          <Users className="h-6 w-6 text-orange-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-orange-primary">
                            Our Team
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            Meet our qualified exercise physiologists and
                            healthcare professionals
                          </p>
                        </div>
                      </Link>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            Ready to get started?
                          </h4>
                          <p className="text-sm text-gray-600">
                            Book a consultation with our experienced team today
                          </p>
                        </div>
                        <Button asChild>
                          <Link
                            href="/book-appointment"
                            onClick={() => setIsAboutMenuOpen(false)}
                          >
                            Book Now
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => setIsLocationsMenuOpen(true)}
              onMouseLeave={() => setIsLocationsMenuOpen(false)}
            >
              <Link
                href="/locations"
                className="flex items-center space-x-1 text-gray-700 hover:text-orange-primary font-medium"
              >
                <span>Locations</span>
                <ChevronDown className="h-4 w-4" />
              </Link>

              {/* Locations Megamenu */}
              {isLocationsMenuOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-[900px] bg-white rounded-lg shadow-xl border z-50">
                  <div className="p-8">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <Link
                          href="/locations/albury"
                          className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          onClick={() => setIsLocationsMenuOpen(false)}
                        >
                          <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                            <MapPin className="h-5 w-5 text-orange-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-orange-primary text-sm">
                              Albury
                            </h3>
                            <p className="text-xs text-gray-600 mt-1">
                              461B Dean Street, Albury NSW
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/locations/corowa"
                          className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          onClick={() => setIsLocationsMenuOpen(false)}
                        >
                          <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                            <MapPin className="h-5 w-5 text-orange-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-orange-primary text-sm">
                              Corowa
                            </h3>
                            <p className="text-xs text-gray-600 mt-1">
                              237 Honour Ave, Corowa NSW
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/locations/forster"
                          className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          onClick={() => setIsLocationsMenuOpen(false)}
                        >
                          <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                            <MapPin className="h-5 w-5 text-orange-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-orange-primary text-sm">
                              Forster
                            </h3>
                            <p className="text-xs text-gray-600 mt-1">
                              87 Macintosh Street, Forster NSW
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/locations/gloucester"
                          className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          onClick={() => setIsLocationsMenuOpen(false)}
                        >
                          <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                            <MapPin className="h-5 w-5 text-orange-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-orange-primary text-sm">
                              Gloucester
                            </h3>
                            <p className="text-xs text-gray-600 mt-1">
                              777-81 Dension Street, Gloucester NSW
                            </p>
                          </div>
                        </Link>
                      </div>

                      <div className="space-y-4">
                        <Link
                          href="/locations/salamander-bay"
                          className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          onClick={() => setIsLocationsMenuOpen(false)}
                        >
                          <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                            <MapPin className="h-5 w-5 text-orange-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-orange-primary text-sm">
                              Salamander Bay
                            </h3>
                            <p className="text-xs text-gray-600 mt-1">
                              3/263 Soldiers Point Rd, Salamander Bay NSW
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/locations/taree"
                          className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          onClick={() => setIsLocationsMenuOpen(false)}
                        >
                          <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                            <MapPin className="h-5 w-5 text-orange-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-orange-primary text-sm">
                              Taree
                            </h3>
                            <p className="text-xs text-gray-600 mt-1">
                              70 Wynter Street, Taree NSW
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/locations/wingham"
                          className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          onClick={() => setIsLocationsMenuOpen(false)}
                        >
                          <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                            <MapPin className="h-5 w-5 text-orange-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-orange-primary text-sm">
                              Wingham
                            </h3>
                            <p className="text-xs text-gray-600 mt-1">
                              2/18 Isabella Street, Wingham NSW
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            Find your nearest clinic
                          </h4>
                          <p className="text-sm text-gray-600">
                            Visit our locations page to see all facilities and
                            contact details
                          </p>
                        </div>
                        <Button asChild>
                          <Link
                            href="/locations"
                            onClick={() => setIsLocationsMenuOpen(false)}
                          >
                            View All
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/ndis"
              className="text-gray-700 hover:text-orange-primary font-medium"
            >
              NDIS
            </Link>
            <Link
              href="/referrals"
              className="text-gray-700 hover:text-orange-primary font-medium"
            >
              Referrals
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-orange-primary font-medium"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-orange-primary font-medium"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>(02) 9876 5432</span>
            </div>
            <Button asChild className="hidden md:flex">
              <Link href="/book-appointment">Book Appointment</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/services"
              className="block py-2 text-gray-700 hover:text-orange-primary font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-700 hover:text-orange-primary font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/locations"
              className="block py-2 text-gray-700 hover:text-orange-primary font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Locations
            </Link>
            <Link
              href="/ndis"
              className="block py-2 text-gray-700 hover:text-orange-primary font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              NDIS
            </Link>
            <Link
              href="/referrals"
              className="block py-2 text-gray-700 hover:text-orange-primary font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Referrals
            </Link>
            <Link
              href="/blog"
              className="block py-2 text-gray-700 hover:text-orange-primary font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-gray-700 hover:text-orange-primary font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full">
              <Link
                href="/book-appointment"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
