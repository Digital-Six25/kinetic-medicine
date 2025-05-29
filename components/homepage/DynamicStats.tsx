"use client";

import { Activity } from "lucide-react";
import { StatItem } from "@/types/homepage";
import Image from "next/image";

type DynamicStatsProps = {
  stats: StatItem[];
};

const DynamicStats = ({ stats }: DynamicStatsProps) => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-gray-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F26920] to-[#F8A21F] rounded-t-2xl"></div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F26920] to-[#F8A21F] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {/* Placeholder icon */}
                    <div className="text-white text-xl font-bold">
                      <img
                        src={stat.stats_icon}
                        alt="Stat Icon"
                        className="w-6 h-6 filter invert"
                      />
                    </div>
                  </div>
                  <Activity className="w-5 h-5 text-gray-400 group-hover:text-[#F26920] transition-colors" />
                </div>
                <div className="text-3xl font-bold text-[#323739] mb-1">
                  {stat.stats_number}
                </div>
                <div className="text-sm text-gray-600">{stat.stats_text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicStats;
