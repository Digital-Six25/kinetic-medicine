"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useServicePageData } from "@/hooks/useServicePageData";
import {
  Award,
  CheckCircle,
  Clock,
  Heart,
  Target,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";

export default function ServicesPage() {
  const { data, error, isLoading } = useServicePageData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }
  const service = data.services;
  console.log("service", service);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F26920] to-[#F8A21F] text-white py-16 pt-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white mb-4">{service.pill}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {service.title}
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">{service.subtitle}</p>
          <Button
            size="lg"
            className="bg-white text-[#F26920] hover:bg-gray-100"
          >
            {service.cta}
          </Button>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Individual Exercise Programs */}
            {service.types.map((type, i: number) => (
              <Card
                key={i}
                className="border-2 hover:border-[#F26920] transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#F26920] rounded-lg flex items-center justify-center mb-4">
                    <Image
                      src={type.service_type_icon || "n/a"}
                      height={32}
                      width={32}
                      className="filter invert"
                      alt="icon"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#323739]">
                    {type.service_type_title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {type.service_type_subtitle}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    {type.service_type_bullet.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <Image
                          src={item.icon || "n/a"}
                          height={32}
                          width={32}
                          className="filter invert"
                          alt="icon"
                        />
                        {item.type}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-[#F26920] hover:bg-[#F8A21F]">
                    {type.service_type_cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#323739] mb-4">
              {service.workTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {service.workSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {service.workCards.map((work, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-[#F26920] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image
                    src={work.icons || "n/a"}
                    height={32}
                    width={32}
                    className="filter invert"
                    alt="icon"
                  />
                </div>
                <h3 className="font-semibold text-[#323739] mb-2">
                  {work.title}
                </h3>
                <p className="text-gray-600 text-sm">{work.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F26920] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {service.contact_title}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {service.contact_subTitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#F26920] hover:bg-gray-100 font-semibold"
            >
              {service.contact_book_button}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white  hover:bg-white text-[#F26920]"
            >
              {service.contact_download_button}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
