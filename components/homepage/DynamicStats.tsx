"use client";

import { StatItem } from "@/types/homepage";
import { CountUp, StaggeredFadeIn } from "../animations";

type DynamicStatsProps = {
  stats: StatItem[];
};

const DynamicStats = ({ stats }: DynamicStatsProps) => {
  return (
    <section className="py-12 bg-white border-b">
      <div className="container mx-auto px-4">
        <StaggeredFadeIn
          direction="up"
          staggerDelay={0.1}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-orange-primary mb-2 whitespace-nowrap">
                {typeof stat.stats_number === "number" ? (
                  <>
                    <CountUp
                      end={stat.stats_number}
                      className="text-3xl font-bold text-orange-primary"
                    />
                    {stat.stats_number || ""}
                  </>
                ) : (
                  stat.stats_number
                )}
              </div>
              <div className="text-sm text-gray-600">{stat.stats_text}</div>
            </div>
          ))}
        </StaggeredFadeIn>
      </div>
    </section>
  );
};

export default DynamicStats;
