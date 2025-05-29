import { Button } from "@/components/ui/button";
import { HowItWorksData } from "@/types/homepage";
import {
  ArrowRight,
  Download,
  FileText,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

interface HowItWorks {
  howItWorks: HowItWorksData;
}

const HowItWorks = ({ howItWorks }: HowItWorks) => {
  return (
    <div>
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F26920] to-[#F8A21F] transform -skew-y-2 origin-top-left"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {howItWorks?.title}
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {howItWorks?.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {howItWorks.cards.map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                      <img
                        src={item.how_it_works_icons}
                        alt={item.title + " icon"}
                        className="w-8 h-8"
                      />
                    </div>
                    <div className="text-6xl font-bold text-white/20 group-hover:text-white/30 transition-colors">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/80">{item.subtitle}</p>

                  {index < howItWorks.cards.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-white/40" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-white text-[#F26920] hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              {howItWorks.cta}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HowItWorks;
