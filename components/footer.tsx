import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, MessageCircle, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <>
      {/* Modern Footer */}
      <footer className="bg-[#323739] text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F26920] to-[#F8A21F]"></div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F26920] to-[#F8A21F] rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">KM</span>
                </div>
                <div>
                  <span className="font-bold text-xl">Kinetic Medicine</span>
                  <p className="text-gray-400 text-sm">NDIS Exercise Physiology</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Empowering NDIS participants to achieve their mobility and health goals through expert exercise
                physiology services.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Shield className="w-4 h-4" />
                <span>NDIS Registered Provider #4050012345</span>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { name: "Services", href: "/services" },
                  { name: "NDIS Support", href: "/ndis-support" },
                  { name: "About Us", href: "/about" },
                  { name: "Contact", href: "/contact" },
                  { name: "Referral Form", href: "/contact#referral" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-[#F26920] transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#F26920]/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#F26920]" />
                  </div>
                  <span className="text-gray-300">(02) 1234 5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#F26920]/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[#F26920]" />
                  </div>
                  <span className="text-gray-300">info@kineticmedicine.com.au</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#F26920]/20 rounded-lg flex items-center justify-center mt-1">
                    <MapPin className="w-4 h-4 text-[#F26920]" />
                  </div>
                  <span className="text-gray-300">
                    123 Health Street
                    <br />
                    Sydney NSW 2000
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2024 Kinetic Medicine. All rights reserved. |
              <Link href="/privacy" className="text-[#F26920] hover:text-[#F8A21F] ml-1">
                Privacy Policy
              </Link>{" "}
              |
              <Link href="/terms" className="text-[#F26920] hover:text-[#F8A21F] ml-1">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="w-16 h-16 rounded-full bg-gradient-to-r from-[#F26920] to-[#F8A21F] hover:from-[#F8A21F] hover:to-[#F26920] shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 group">
          <MessageCircle className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
        </Button>
      </div>
    </>
  )
}
