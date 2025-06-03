import Image from "next/image";
import { FadeIn, StaggeredFadeIn } from "../animations";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Star } from "lucide-react";
import { TestimonialsSection } from "@/types/homepage";

interface TestimonialsProps {
  successStories: TestimonialsSection;
}

const Testimonials = ({ successStories }: TestimonialsProps) => {
  const { pill, title, subtitle, cards } = successStories;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800">{pill}</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>
        </FadeIn>

        <StaggeredFadeIn
          direction="up"
          staggerDelay={0.1}
          className="grid md:grid-cols-3 gap-8"
        >
          {cards.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(Number(testimonial.rating))].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <Image
                    src={
                      testimonial.profile_photo ||
                      "/placeholder.svg?height=80&width=80"
                    }
                    alt={testimonial.patient_name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.patient_name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.patient_type}
                    </div>
                    <div className="text-xs text-orange-primary mt-1">
                      {testimonial.patient_injury_type}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </StaggeredFadeIn>
      </div>
    </section>
  );
};

export default Testimonials;
