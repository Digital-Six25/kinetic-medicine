import { Button } from "@/components/ui/button";
import { HowItWorksData } from "@/types/homepage";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "../animations";
import { Badge } from "../ui/badge";

interface HowItWorks {
  howItWorks: HowItWorksData;
}

const HowItWorks = ({ howItWorks }: HowItWorks) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800">
                {howItWorks.pill}
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {howItWorks.title}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {howItWorks.subtitle}
              </p>

              <div className="space-y-6">
                {howItWorks?.bullets?.map((bullet, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="bg-orange-primary/10 p-3 rounded-full flex-shrink-0">
                      <Image
                        src={bullet.icon}
                        width={18}
                        height={18}
                        alt="icon"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {bullet.title}
                      </h3>
                      <p className="text-gray-600">{bullet.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/services/ndis-disability-support">
                    {howItWorks.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="relative">
              <Image
                src={howItWorks.img || "/placeholder.svg?height=600&width=500"}
                alt="NDIS support and disability services"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-primary/10 p-3 rounded-full">
                    <Star className="h-6 w-6 text-orange-primary" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(Number(howItWorks.rating))].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">
                      {Number(howItWorks.rating)}/5 {howItWorks.rating_name}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
