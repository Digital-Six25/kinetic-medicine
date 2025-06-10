"use client";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { BackgroundShapes } from "@/components/background-shapes";
import { FloatingElements } from "@/components/floating-elements";
import { FadeIn, StaggeredFadeIn } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  MapPin,
  Clock,
  ArrowLeft,
  Send,
  Calendar,
  Briefcase,
} from "lucide-react";
import { useCareersPageData } from "@/hooks/useCareersPageData";

export default function JobDetailPage() {
  const { data, error, isLoading } = useCareersPageData();
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
  if (!data?.careers.vacancy?.length) return <div>No data available</div>;

  const vacancy = data.careers.vacancy.find(
    (s) => formatSlug(s.title || "") === slug
  );
  if (!vacancy) return <div>Service not found</div>;
  console.log("vacancy", vacancy);
  return (
    <main className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white pt-24 pb-16 md:pt-32 md:pb-24">
        <BackgroundShapes className="absolute inset-0" />
        <div className="container relative z-10">
          <FadeIn>
            <Link
              href="/careers"
              className="inline-flex items-center text-primary hover:text-primary/80 mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to all vacancies
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900 mr-3">
                {vacancy.title}
              </h1>
              <Badge
                variant="outline"
                className="bg-primary/10 text-primary border-primary/20"
              >
                {vacancy.type}
              </Badge>
            </div>
            <div className="flex flex-wrap gap-4 text-gray-600 mb-8">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-1 text-primary" />{" "}
                {vacancy.location}
              </div>
              <div className="flex items-center">
                <Briefcase className="h-5 w-5 mr-1 text-primary" />{" "}
                {vacancy.salary}
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-1 text-primary" /> Posted:{" "}
                {vacancy.posted}
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-1 text-primary" /> Closing:{" "}
                {vacancy.closing}
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">Apply Now</Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#job-details">View Details</a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Job Details Section */}
      <section id="job-details" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <StaggeredFadeIn>
                <FadeIn>
                  <div className="prose max-w-none mb-12">
                    <h2 className="text-2xl font-bold mb-4">Overview</h2>
                    <p className="text-gray-600">{vacancy.overview}</p>
                  </div>
                </FadeIn>
                <FadeIn>
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">
                      Key Responsibilities
                    </h2>
                    <ul className="space-y-3">
                      {vacancy.responsibilities.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                          <span className="text-gray-600">
                            {item.responsibility}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
                <FadeIn>
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Requirements</h2>
                    <ul className="space-y-3">
                      {vacancy.requirements.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                          <span className="text-gray-600">
                            {item.requirement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
                <FadeIn>
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Benefits</h2>
                    <ul className="space-y-3">
                      {vacancy.benefits.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                          <span className="text-gray-600">{item.benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              </StaggeredFadeIn>
            </div>

            {/* Sidebar */}
            <div>
              <FadeIn>
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6">
                      Application Process
                    </h3>
                    <div className="space-y-6 mb-8">
                      {[
                        "Submit Application",
                        "Initial Screening",
                        "Interview",
                        "Offer & Onboarding",
                      ].map((step, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold shrink-0">
                            {i + 1}
                          </div>
                          <div>
                            <p className="font-medium">{step}</p>
                            <p className="text-sm text-gray-600">
                              {
                                [
                                  "Complete the online application form with your details",
                                  "Our team will review your application",
                                  "Selected candidates will be invited for an interview",
                                  "Successful candidates will receive an offer",
                                ][i]
                              }
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-4">
                      <Button className="w-full">Apply Now</Button>
                      <Button variant="outline" className="w-full" asChild>
                        <a href="mailto:careers@kineticmedicine.com.au">
                          <Send className="mr-2 h-4 w-4" /> Email Your Resume
                        </a>
                      </Button>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-sm text-gray-600 mb-2">
                        Application closes on:
                      </p>
                      <p className="font-medium">{vacancy.closing}</p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
