"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  DropdownMenu,
  servicesDropdownItems,
  ndisDropdownItems,
  aboutDropdownItems,
  contactDropdownItems,
} from "./navigation-menu";

export function MainNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}

      <nav className="hidden lg:flex items-center space-x-8">
        <DropdownMenu trigger="Services" items={servicesDropdownItems} />
        <DropdownMenu trigger="NDIS Support" items={ndisDropdownItems} />
        <DropdownMenu trigger="About" items={aboutDropdownItems} />
        <DropdownMenu trigger="Contact" items={contactDropdownItems} />
        <Button className="bg-gradient-to-r from-[#F26920] to-[#F8A21F] hover:from-[#F8A21F] hover:to-[#F26920] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <Calendar className="w-4 h-4 mr-2" />
          Book Assessment
        </Button>
      </nav>

      {/* Mobile Navigation Toggle */}
      <div className="lg:hidden flex items-center space-x-3">
        <Button size="sm" className="bg-[#F26920] text-white">
          <Calendar className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-4 h-4" />
          ) : (
            <Menu className="w-4 h-4" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-50">
          <div className="container mx-auto px-4 py-6">
            <div className="space-y-6">
              {/* Mobile Services */}
              <div>
                <h3 className="font-semibold text-[#323739] mb-3">Services</h3>
                <div className="space-y-2 pl-4">
                  {servicesDropdownItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block text-gray-600 hover:text-[#F26920] transition-colors py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile NDIS Support */}
              <div>
                <h3 className="font-semibold text-[#323739] mb-3">
                  NDIS Support
                </h3>
                <div className="space-y-2 pl-4">
                  {ndisDropdownItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block text-gray-600 hover:text-[#F26920] transition-colors py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile About */}
              <div>
                <h3 className="font-semibold text-[#323739] mb-3">About</h3>
                <div className="space-y-2 pl-4">
                  {aboutDropdownItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block text-gray-600 hover:text-[#F26920] transition-colors py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Contact */}
              <div>
                <h3 className="font-semibold text-[#323739] mb-3">Contact</h3>
                <div className="space-y-2 pl-4">
                  {contactDropdownItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block text-gray-600 hover:text-[#F26920] transition-colors py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200">
                <Button
                  className="w-full bg-gradient-to-r from-[#F26920] to-[#F8A21F] hover:from-[#F8A21F] hover:to-[#F26920] text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Assessment
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
