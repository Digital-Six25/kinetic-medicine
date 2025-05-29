"use client";
import { MainNavigation } from "./main-navigation";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const route = useRouter();
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F26920] to-[#F8A21F] rounded-xl flex items-center justify-center transform rotate-3">
                  <span className="text-white font-bold text-lg transform -rotate-3">
                    KM
                  </span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#323739] tracking-tight">
                  Kinetic Medicine
                </h1>
                <p className="text-sm text-gray-600">
                  NDIS Exercise Physiology
                </p>
              </div>
            </div>

            <MainNavigation />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
