"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Download,
  FileText,
  Send,
  Users,
  Heart,
  Shield,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Import our components
import { FloatingElements } from "@/components/floating-elements";
import { BackgroundShapes } from "@/components/background-shapes";
import { FadeIn, StaggeredFadeIn } from "@/components/animations";
import { useReferralPageData } from "@/hooks/useReferralPageData";
import ReferralsLoading from "./loading";

export default function ReferralsPage() {
  const [showReferralForm, setShowReferralForm] = useState(false);

  const { data, error, isLoading } = useReferralPageData();

  if (isLoading) {
    return <ReferralsLoading />;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const handleReferralSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert("Referral submitted successfully!");
    setShowReferralForm(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 relative overflow-hidden">
        <BackgroundShapes />
        <FloatingElements count={6} />
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-orange-primary/10 text-orange-primary">
                {data.hero.pill}
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                {data.hero.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {data.hero.subtitle}
              </p>
              <Button
                size="lg"
                onClick={() => setShowReferralForm(true)}
                className="text-lg px-8 animate-pulse"
              >
                <Send className="mr-2 h-5 w-5" />
                {data.hero.cta}
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {data.benefits.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {data.benefits.subtitle}
              </p>
            </div>
          </FadeIn>

          <StaggeredFadeIn
            direction="up"
            staggerDelay={0.1}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {data.benefits.cards.map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="bg-orange-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-primary">
                    <Image
                      src={benefit.icon}
                      width={28}
                      height={28}
                      alt="icon"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </StaggeredFadeIn>
        </div>
      </section>

      {/* Referral Forms Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <BackgroundShapes className="opacity-50" />
        <FloatingElements color="text-orange-secondary" count={4} />
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-orange-primary/10 text-orange-primary">
                {data.form.pill}
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {data.form.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {data.form.subtitle}
              </p>
            </div>
          </FadeIn>

          <StaggeredFadeIn
            direction="up"
            staggerDelay={0.1}
            className="grid md:grid-cols-2 gap-8"
          >
            {data.form.cards.map((form, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={form.img || "/placeholder.svg"}
                    alt={`${form.title} referral form`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge
                      className={`${
                        form.tag === "Medicare"
                          ? "bg-green-100 text-green-800"
                          : form.tag === "DVA"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {form.tag}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-orange-primary/10 p-3 rounded-full w-fit mb-3 text-orange-primary">
                      <Image
                        src={form.icon}
                        height={28}
                        width={28}
                        alt="icon"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {form.title}
                    </h3>
                  </div>
                </div>

                <CardContent className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {form.subtitle}
                  </p>

                  <div className="flex space-x-4">
                    <Button asChild className="flex-1">
                      <a href={form.title} download>
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </a>
                    </Button>
                    <Button variant="outline" asChild className="flex-1">
                      <a
                        href={form.title}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText className="mr-2 h-4 w-4" />
                        Preview
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggeredFadeIn>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {data.information.title}
                </h2>
                <div className="space-y-6">
                  {data.information.processes.map((item, i) => (
                    <div key={i} className="flex space-x-4">
                      <div className="bg-orange-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {item.num}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {item.title}{" "}
                        </h3>
                        <p className="text-gray-600">{item.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="relative">
                <Image
                  src={
                    data.information.img ||
                    "/placeholder.svg?height=500&width=600"
                  }
                  alt="Healthcare professional making referral"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {data.contact.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {data.contact.subtitle}
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {data.contact.cards.map((item, i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.subtitle} </p>
                  <p className="text-orange-primary font-semibold">
                    {item.contact_info}{" "}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Form Modal */}
      {showReferralForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  Make a Referral
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowReferralForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </Button>
              </div>

              <form onSubmit={handleReferralSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" required className="mt-2" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" required className="mt-2" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="practice">Practice/Organization</Label>
                  <Input id="practice" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="patientName">Patient Name</Label>
                  <Input id="patientName" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="referralType">Referral Type</Label>
                  <select
                    id="referralType"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                  >
                    <option value="">Select referral type</option>
                    <option value="chronic-disease">
                      Chronic Disease Management
                    </option>
                    <option value="diabetes-group">
                      Type 2 Diabetes Group
                    </option>
                    <option value="private">Private Referral</option>
                    <option value="dva">DVA Referral</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">
                    Message/Clinical Information *
                  </Label>
                  <Textarea
                    id="message"
                    required
                    className="mt-2 min-h-[120px]"
                    placeholder="Please provide relevant clinical information, patient condition, and any specific requirements..."
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1"
                    required
                  />
                  <Label htmlFor="consent" className="text-sm text-gray-600">
                    I consent to Kinetic Medicine contacting me regarding this
                    referral and understand that patient information will be
                    handled according to privacy regulations.
                  </Label>
                </div>

                <div className="flex space-x-4">
                  <Button type="submit" className="flex-1">
                    <Send className="mr-2 h-4 w-4" />
                    Submit Referral
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    // onClick={() => setShowReferralForm(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
