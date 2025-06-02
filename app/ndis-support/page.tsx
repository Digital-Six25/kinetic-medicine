"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEligibilityPageData } from "@/hooks/useEligibilityPageData";
import { Download, Phone } from "lucide-react";
import Image from "next/image";

export default function NDISSupport() {
  const { data, error, isLoading } = useEligibilityPageData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F26920] to-[#F8A21F] text-white py-16 pt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4">
                {data.eligibility_hero_pill}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {data.eligibility_hero_title}
              </h1>
              <p className="text-xl mb-8 text-white/90">
                {data.eligibility_hero_subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-[#F26920] hover:bg-gray-100 font-semibold"
                >
                  {data.eligibility_hero_btn1}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white  hover:bg-white text-[#F26920]"
                >
                  {data.eligibility_hero_btn2}
                </Button>
              </div>
            </div>

            <div>
              <Image
                src={
                  data.eligibility_hero_img ||
                  "/placeholder.svg?height=400&width=500&query=NDIS participant reviewing plan with exercise physiologist"
                }
                alt="NDIS plan consultation"
                width={500}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NDIS Eligibility Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#323739] mb-4">
              {data.eligibility_eligible_title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {data.eligibility_eligible_subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-[#323739] mb-6">
                {data.eligibility_criteria_title}
              </h3>

              <div className="space-y-4">
                {data?.eligibility_criteria?.map((criteria, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <Image
                      src={criteria.icon || "n/a"}
                      height={24}
                      width={24}
                      alt="icon"
                    />
                    <div>
                      <h4 className="font-semibold text-[#323739]">
                        {criteria.title}
                      </h4>
                      <p className="text-gray-600">{criteria.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="mt-8 bg-[#F26920] hover:bg-[#F8A21F]">
                {data.eligibility_criteria_btn}
              </Button>
            </div>

            <Card className="border-2 border-[#F26920]/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#323739] mb-4">
                  {data.eeligibility_goal_title}
                </h3>
                <ul className="space-y-3">
                  {data.eligibility_goals.map((goal, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Image
                        src={goal.icon || "n/a"}
                        height={18}
                        width={18}
                        alt="icon"
                      />
                      <span>{goal.title}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* NDIS Funding Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#323739] mb-4">
              {data.eligibility_works_title}
            </h2>
            <p className="text-xl text-gray-600">
              {data.eligibility_works_subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {data.eligibility_works.map((work, i) => (
              <Card key={i}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#F26920] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Image
                      src={work.icon || "n/a"}
                      height={32}
                      width={32}
                      className="filter invert"
                      alt="icon"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[#323739] mb-3">
                    {work.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{work.subtitle}</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {work.eligibility_work.map((eligibility, i) => (
                      <li key={i}>• {eligibility.ttitle}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#323739] mb-4">
              {data.eligibility_started_title}
            </h2>
            <p className="text-xl text-gray-600">
              {data.eligibility_started_subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {data.eligibility_started.map((start, i) => (
                <div key={i} className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-[#F26920] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#323739] mb-2">
                      {start.title}
                    </h3>
                    <p className="text-gray-600">{start.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#323739] mb-4">
              {data.eligibility_support_title}
            </h2>
            <p className="text-xl text-gray-600">
              {data.eligibility_support_subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data?.eligibility_support?.map((support, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Image
                    src={support.icon || "n/a"}
                    height={32}
                    width={32}
                    className="filter invert"
                    alt="icon"
                  />
                  <h3 className="font-semibold text-[#323739] mb-2">
                    {support.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {support.subtitle}
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-[#F26920] text-[#F26920]"
                  >
                    {support.btn}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For Referrers Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#323739] mb-4">
              {data.eligibility_referrers_title}
            </h2>
            <p className="text-xl text-gray-600">
              {data.eligibility_referrers_subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-[#323739] mb-6">
                {data.eligibility_why_refer_title}
              </h3>

              <div className="space-y-4">
                {data.eligibility_why_refer.map((refer, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <Image
                      src={refer.icon || "n/a"}
                      height={18}
                      width={18}
                      alt="icon"
                    />
                    <div>
                      <h4 className="font-semibold text-[#323739]">
                        {refer.title}
                      </h4>
                      <p className="text-gray-600">{refer.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button className="bg-[#F26920] hover:bg-[#F8A21F]">
                  {data.eligibility_refer_btn1}
                </Button>
                <Button
                  variant="outline"
                  className="border-[#F26920] text-[#F26920]"
                >
                  {data.eligibility_refer_btn2}
                </Button>
              </div>
            </div>

            <Card className="border-2 border-[#F26920]/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#323739] mb-4">
                  {data.eligibility_referral_info_title}
                </h3>
                <ul className="space-y-3 text-gray-600">
                  {data.eligibility_referral_info.map((info, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 bg-[#F26920] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{info.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Quick Referral:</strong>{" "}
                    {data.eligibility_quick_referral}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F26920] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {data.eligibility_cta1_title}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {data.eligibility_cta1_subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#F26920] hover:bg-gray-100 font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              {data.eligibility_cta1_btn1}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white  hover:bg-white text-[#F26920]"
            >
              <Download className="w-5 h-5 mr-2" />
              {data.eligibility_cta1_btn2}
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-[#F26920] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            {data.eligibility_cta2_title}
          </h2>
          <p className="text-lg mb-6">{data.eligibility_cta2_subtitle}</p>
          <Button
            size="lg"
            className="bg-white text-[#F26920] hover:bg-gray-100 font-semibold"
          >
            <Phone className="w-5 h-5 mr-2" />
            {data.eligibility_cta2_btn}
          </Button>
        </div>
      </section>
    </div>
  );
}
