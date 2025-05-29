import { Button } from "@/components/ui/button";
import { AreaOfExpertiseData } from "@/types/homepage";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
const Services = ({ services }: AreaOfExpertiseData) => {
  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#323739] mb-6">
              {services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {services.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Large Featured Service */}
            <div className="lg:col-span-2 lg:row-span-2">
              <div className="relative h-full bg-gradient-to-br from-[#F26920] to-[#F8A21F] rounded-3xl p-8 text-white overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    {/* <Zap className="w-8 h-8 text-white" /> */}
                    <Image
                      src={services.large_card.icon}
                      height={32}
                      width={32}
                      className="filter invert"
                      alt="icon"
                    />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">
                    {services.large_card.title}
                  </h3>
                  <p className="text-xl text-white/90 mb-6">
                    {services.large_card.subtitle}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {services.large_card.bullet.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <Image
                          src={item.areas_of_expertise_large_card_icon}
                          height={32}
                          width={32}
                          className="filter invert"
                          alt="icon"
                        />
                        <span className="text-white/90">
                          {item.areas_of_expertise_large_card_text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-white text-[#F26920] hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                    {services.large_card.cta}{" "}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Smaller Service Cards */}
            <div className="space-y-8">
              {services.side_cards.map((item, i) => (
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F26920] to-[#F8A21F] rounded-xl flex items-center justify-center mb-4">
                    <Image
                      src={item.side_card_icon}
                      height={32}
                      width={32}
                      className="filter invert"
                      alt="icon"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#323739] mb-3">
                    {item.side_card_title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.side_card_subtitle}
                  </p>
                  <Button
                    variant="outline"
                    className="border-[#F26920] text-[#F26920] hover:bg-[#F26920] hover:text-white"
                  >
                    {item.side_card_cta} <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Additional Services */}
            <div className="lg:col-span-3 grid md:grid-cols-3 gap-6">
              {services.bottom_card.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F26920] to-[#F8A21F] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Image
                      src={item.bottom_card_icon}
                      height={32}
                      width={32}
                      className="filter invert"
                      alt="icon"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#323739] mb-2">
                    {item.bottom_card_title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.bottom_card_subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Services;
