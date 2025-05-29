"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import {
  ChevronDown,
  Calendar,
  Users,
  FileText,
  Phone,
  Mail,
  MapPin,
  Award,
  Heart,
  Zap,
  Target,
  Clock,
} from "lucide-react"
import Link from "next/link"

interface DropdownItem {
  title: string
  description: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

interface DropdownMenuProps {
  trigger: string
  items: DropdownItem[]
  className?: string
}

export function DropdownMenu({ trigger, items, className = "" }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
      setActiveIndex(-1)
    }, 150)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!isOpen) return

    switch (event.key) {
      case "Escape":
        setIsOpen(false)
        setActiveIndex(-1)
        break
      case "ArrowDown":
        event.preventDefault()
        setActiveIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0))
        break
      case "ArrowUp":
        event.preventDefault()
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1))
        break
      case "Enter":
        if (activeIndex >= 0) {
          // Navigate to the selected item
          window.location.href = items[activeIndex].href
        }
        break
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      ref={dropdownRef}
    >
      <button
        className="flex items-center space-x-1 text-[#323739] hover:text-[#F26920] transition-all duration-300 font-medium relative group focus:outline-none focus:ring-2 focus:ring-[#F26920] focus:ring-offset-2 rounded-md px-2 py-1"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{trigger}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F26920] transition-all duration-300 group-hover:w-full"></span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 animate-in fade-in-0 zoom-in-95 duration-200">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-semibold text-[#323739] text-sm">{trigger}</h3>
            <p className="text-xs text-gray-500 mt-1">Explore our comprehensive services</p>
          </div>

          <div className="py-2">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex items-start space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200 group ${
                  activeIndex === index ? "bg-gray-50" : ""
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#F26920] to-[#F8A21F] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-[#323739] text-sm group-hover:text-[#F26920] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="px-4 py-3 border-t border-gray-100 bg-gray-50/50">
            <Link
              href="/services"
              className="flex items-center justify-between text-sm font-medium text-[#F26920] hover:text-[#F8A21F] transition-colors group"
            >
              <span>View all services</span>
              <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

// Services dropdown data
export const servicesDropdownItems: DropdownItem[] = [
  {
    title: "Individual Exercise Programs",
    description: "Personalized one-on-one sessions tailored to your goals",
    href: "/services#individual",
    icon: Users,
  },
  {
    title: "Chronic Pain Management",
    description: "Evidence-based programs to reduce pain and improve quality of life",
    href: "/services#pain-management",
    icon: Heart,
  },
  {
    title: "Functional Capacity Building",
    description: "Improve daily living skills and independence",
    href: "/services#functional",
    icon: Zap,
  },
  {
    title: "Strength & Balance Training",
    description: "Specialized programs to improve stability and reduce fall risk",
    href: "/services#strength-balance",
    icon: Target,
  },
  {
    title: "Psychosocial Support",
    description: "Mental health support through structured exercise",
    href: "/services#psychosocial",
    icon: Clock,
  },
]

// NDIS Support dropdown data
export const ndisDropdownItems: DropdownItem[] = [
  {
    title: "Eligibility Check",
    description: "Find out if you're eligible for NDIS exercise physiology",
    href: "/ndis-support#eligibility",
    icon: FileText,
  },
  {
    title: "Plan Review",
    description: "Understanding your NDIS plan and funding options",
    href: "/ndis-support#plan-review",
    icon: Users,
  },
  {
    title: "Getting Started",
    description: "Simple steps to access our services through NDIS",
    href: "/ndis-support#getting-started",
    icon: Award,
  },
  {
    title: "Resources & Guides",
    description: "Helpful resources for your NDIS journey",
    href: "/ndis-support#resources",
    icon: FileText,
  },
]

// About dropdown data
export const aboutDropdownItems: DropdownItem[] = [
  {
    title: "Our Story",
    description: "Learn about our mission and values",
    href: "/about#story",
    icon: Heart,
  },
  {
    title: "Our Team",
    description: "Meet our qualified exercise physiologists",
    href: "/about#team",
    icon: Users,
  },
  {
    title: "Qualifications",
    description: "Our accreditations and professional standards",
    href: "/about#qualifications",
    icon: Award,
  },
  {
    title: "Why Choose Us",
    description: "What sets us apart in NDIS exercise physiology",
    href: "/about#why-choose",
    icon: Target,
  },
]

// Contact dropdown data
export const contactDropdownItems: DropdownItem[] = [
  {
    title: "Phone Consultation",
    description: "Speak directly with our team",
    href: "tel:+61212345678",
    icon: Phone,
  },
  {
    title: "Email Enquiry",
    description: "Send us your questions via email",
    href: "mailto:info@kineticmedicine.com.au",
    icon: Mail,
  },
  {
    title: "Visit Our Clinic",
    description: "Find our location and opening hours",
    href: "/contact#location",
    icon: MapPin,
  },
  {
    title: "Book Assessment",
    description: "Schedule your free initial consultation",
    href: "/contact#booking",
    icon: Calendar,
  },
]
