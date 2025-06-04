"use client";

import { Accessibility, Brain, ArrowRight } from "lucide-react";
import { ServiceLayout } from "@/components/service-layout";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations";
import { useServicePageData } from "@/hooks/useServicePageData";
import { useParams } from "next/navigation";

export default function ServiceDetailsPage() {
  const { data, error, isLoading } = useServicePageData();
  const params = useParams();
  const slug = params?.slug as string;

  const formatSlug = (title: string) =>
    title
      .toLowerCase()
      .replace(/&/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;
  if (!data?.services_details?.length) return <div>No data available</div>;

  const service = data.services_details.find(
    (s) => formatSlug(s.hero?.title || "") === slug
  );
  if (!service) return <div>Service not found</div>;

  return (
    <ServiceLayout
      title={service.hero.title || ""}
      description={service.hero.subtitle || ""}
      icon={<Accessibility className="h-6 w-6 text-orange-primary" />}
      heroImage={service.hero.image || "/placeholder.svg"}
      features={service.features || ""}
      faqs={service.faqs || ""}
      content={
        <div className="space-y-8">
          <FadeIn direction="up" delay={1 * 0.1}>
            {service.info_title && (
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {service.info_title}
              </h2>
            )}
            {service.info_text && (
              <p className="text-gray-600 mb-6">{service.info_text}</p>
            )}
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.services.title}
                </h3>

                {service.services && (
                  <ul className="space-y-4">
                    {service.services.types.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="bg-orange-primary/10 p-2 rounded-full mr-3 mt-1">
                          {item.icon === "brain" ? (
                            <Brain className="h-5 w-5 text-orange-primary" />
                          ) : (
                            <Accessibility className="h-5 w-5 text-orange-primary" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {item.subtitle}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div>
                <Image
                  src={
                    service.services.img ||
                    "/placeholder.svg?height=400&width=500"
                  }
                  alt="NDIS support session"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </FadeIn>

          {service.benefits && service.benefits.cards && (
            <FadeIn direction="up" delay={0.3}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.benefits.title}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {service.benefits.cards.map((benefit, i) => (
                  <div key={i} className="bg-gray-50 p-6 rounded-xl">
                    <div className="text-xl font-bold text-orange-primary mb-2">
                      {benefit.title}
                    </div>
                    <p className="text-gray-600 text-sm">{benefit.title}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          )}

          {service.specialists && service.specialists.specialist && (
            <FadeIn direction="up" delay={0.4}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.specialists.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {service.specialists.specialist.map((spec, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-center space-x-4 mb-4">
                      <Image
                        src={spec.profile_picture || "/placeholder.svg"}
                        alt={spec.name}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900">{spec.name}</h4>
                        <p className="text-orange-primary">
                          {spec.designation}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{spec.description}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          )}

          {service.cta && (
            <FadeIn direction="up" delay={0.5}>
              <div className="bg-orange-primary/5 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.cta.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.cta.subtitle}</p>
                <Button asChild size="lg">
                  <Link href="/book-appointment">
                    {service.cta.btn}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          )}
        </div>
      }
    />
  );
}
