import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";
import Image from "next/image";

const CallToAction = ({ contact }) => {
  const words = contact.title.split(" ");
  const firstTwoWords = words.slice(0, 3).join(" ");
  const restWords = words.slice(3).join(" ");
  return (
    <div>
      {" "}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#323739] via-[#F26920] to-[#323739]"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full animate-pulse delay-500"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              {firstTwoWords}
              {restWords && (
                <>
                  <br />
                  <span className="text-orange-500">{restWords}</span>
                </>
              )}
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              {contact.subtitle}
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              {contact.card.map((item, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Image
                        src={item.icon}
                        height={24}
                        width={24}
                        alt="icon"
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm">
                      {item.contact_subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#F26920] hover:bg-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 group"
              >
                <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Call (02) 1234 5678
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-[#F26920] hover:bg-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 group"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Enquiry
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default CallToAction;
