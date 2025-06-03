import Image from "next/image";
import { FadeIn, StaggeredFadeIn } from "../animations";
import { BackgroundShapes } from "../background-shapes";
import { FloatingElements } from "../floating-elements";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type LocationCard = {
  img: string;
  name: string;
  address: string;
};

type LocationsProps = {
  locations: {
    pill: string;
    title: string;
    subtitle: string;
    cards: LocationCard[];
  };
};

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

const Locations = ({ locations }: LocationsProps) => {
  const { pill, title, subtitle, cards } = locations;

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <BackgroundShapes className="opacity-50" />
      <FloatingElements color="text-orange-secondary" count={4} />
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-primary/10 text-orange-primary">
              {pill}
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>
        </FadeIn>

        <StaggeredFadeIn
          direction="up"
          staggerDelay={0.1}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {cards.map((location, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={location.img}
                  alt={`Kinetic Medicine ${location.name} location`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{location.name}</h3>
                  <p className="text-sm text-white/90 mb-3">
                    {location.address}
                  </p>
                </div>
              </div>
              <CardContent className="p-4">
                <Button
                  asChild
                  className="w-full hover:bg-orange-primary hover:text-white"
                  variant="outline"
                >
                  <Link href={`/locations/${slugify(location.name)}`}>
                    View Location Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </StaggeredFadeIn>

        <FadeIn direction="up" delay={0.3}>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/locations">
                View All Locations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Locations;
