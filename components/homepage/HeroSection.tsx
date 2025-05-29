import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { HeroSectionData, NumberedItem } from "@/types/homepage";

interface HeroSectionProps {
  hero: HeroSectionData;
  numberedItems: NumberedItem[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ hero, numberedItems }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gray-50">
      {/* Decorative Plus Signs */}
      <div className="absolute top-32 left-1/4 text-[#F26920]/20 text-2xl">
        +
      </div>
      <div className="absolute top-1/2 left-1/6 text-[#F26920]/20 text-xl">
        +
      </div>
      <div className="absolute bottom-1/3 left-1/3 text-[#F26920]/20 text-2xl">
        +
      </div>
      <div className="absolute top-1/4 right-1/4 text-[#F26920]/20 text-xl">
        +
      </div>
      <div className="absolute bottom-1/4 right-1/6 text-[#F26920]/20 text-2xl">
        +
      </div>
      <div className="absolute top-2/3 right-1/3 text-[#F26920]/20 text-xl">
        +
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-light leading-tight text-[#323739]">
                {hero.hero_title.split(" ").map((word, index) => {
                  const space = index > 0 ? " " : "";
                  if (index === 5) {
                    return (
                      <span key={index}>
                        {space}
                        <span className="text-[#F26920]">{word}</span>
                      </span>
                    );
                  }
                  return space + word;
                })}
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                {hero.hero_subtitle}
              </p>

              <div className="flex items-center space-x-3 group cursor-pointer">
                <span className="text-[#323739] font-medium group-hover:text-[#F26920] transition-colors">
                  {hero.hero_cta}
                </span>
                <ArrowRight className="w-5 h-5 text-[#323739] group-hover:text-[#F26920] group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </div>

          {/* Right Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 h-[500px]">
              {/* Top Left - Large Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={
                    hero.hero_image_1 ||
                    "/placeholder.svg?height=500&width=280&query=NDIS participant doing strength exercises in modern clinic"
                  }
                  alt="Exercise physiologist with NDIS participant"
                  width={280}
                  height={240}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top Right - Tall Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg row-span-2">
                <Image
                  src={
                    hero.hero_image_2 ||
                    "/placeholder.svg?height=500&width=280&query=NDIS participant doing strength exercises in modern clinic"
                  }
                  alt="NDIS participant exercising"
                  width={280}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Left - Wide Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={
                    hero.hero_image_3 ||
                    "/placeholder.svg?height=500&width=280&query=NDIS participant doing strength exercises in modern clinic"
                  }
                  alt="Supportive care during therapy"
                  width={280}
                  height={240}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                <ArrowRight className="w-5 h-5 text-gray-600 rotate-180" />
              </button>
              <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                <ArrowRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section with Numbered Items */}
        <div className="grid lg:grid-cols-3 gap-8 mt-20 pb-16">
          {numberedItems.map((item, index) => (
            <div className="space-y-4" key={index}>
              <div className="text-sm text-gray-400 font-medium">
                {item.number}
              </div>
              <h3 className="text-xl font-medium text-[#323739] leading-tight">
                {item.text}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
