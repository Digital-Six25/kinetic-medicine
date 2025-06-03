import type React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BackgroundShapes } from "@/components/background-shapes";
import { FloatingElements } from "@/components/floating-elements";

interface ServiceLayoutProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  heroImage: string;
  content: React.ReactNode;
  features?: string[];
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

export function ServiceLayout({
  title,
  description,
  icon,
  heroImage,
  content,
  features,
  faqs,
}: ServiceLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-primary/5 to-indigo-100 py-20 relative overflow-hidden">
        <BackgroundShapes />
        <FloatingElements count={6} />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-primary/10 text-orange-primary">
                Kinetic Medicine Services
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                {title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {description}
              </p>
              <Button size="lg" asChild className="text-lg px-8">
                <Link href="/book-appointment">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Consultation
                </Link>
              </Button>
            </div>

            <div className="relative">
              <Image
                src={heroImage || "/placeholder.svg"}
                alt={title}
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-primary/10 p-3 rounded-full">
                    {icon}
                  </div>
                  <div className="text-xl font-bold text-gray-900">
                    Expert Care
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">{content}</div>

            <div className="space-y-8">
              {features && (
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-orange-primary/5 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-600 mb-6">
                  Book your consultation today and take the first step towards
                  better health and wellbeing.
                </p>
                <Button asChild className="w-full">
                  <Link href="/book-appointment">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Appointment
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full mt-3">
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (02) 9876 5432
                  </Link>
                </Button>
              </div>

              {faqs && (
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {faq.question}
                        </h4>
                        <p className="text-gray-600 text-sm">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
