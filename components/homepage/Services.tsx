import { Button } from "@/components/ui/button";
import { AreaOfExpertiseData } from "@/types/homepage";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import { FadeIn, StaggeredFadeIn } from "../animations";
import { BackgroundShapes } from "../background-shapes";
import { FloatingElements } from "../floating-elements";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
const Services = ({ services }: { services: AreaOfExpertiseData }) => {
  return (
    <div>
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <BackgroundShapes className="opacity-50" />
        <FloatingElements color="text-orange-secondary" count={5} />

        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              {services.pill && (
                <Badge className="mb-4 bg-orange-primary/10 text-orange-primary">
                  {services.pill}
                </Badge>
              )}
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {services.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {services.subtitle}
              </p>
            </div>
          </FadeIn>

          <StaggeredFadeIn
            direction="up"
            staggerDelay={0.1}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.card.map((data, i) => (
              <Card
                key={i}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
              >
                <CardContent className="p-8 ">
                  <div className="bg-orange-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-primary group-hover:text-white transition-colors">
                    <Image src={data.icon} height={32} width={32} alt="icon" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {data.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{data.subtitle}</p>
                  <ul className="space-y-2 mb-6">
                    {data.bullets.map(
                      (
                        item: {
                          text:
                            | string
                            | number
                            | bigint
                            | boolean
                            | ReactElement<
                                unknown,
                                string | JSXElementConstructor<any>
                              >
                            | Iterable<ReactNode>
                            | ReactPortal
                            | Promise<
                                | string
                                | number
                                | bigint
                                | boolean
                                | ReactPortal
                                | ReactElement<
                                    unknown,
                                    string | JSXElementConstructor<any>
                                  >
                                | Iterable<ReactNode>
                                | null
                                | undefined
                              >
                            | null
                            | undefined;
                        },
                        i: number
                      ) => (
                        <li
                          key={i}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{item.text}</span>
                        </li>
                      )
                    )}
                  </ul>
                  <Button
                    variant="outline"
                    asChild
                    className="w-full hover:bg-orange-primary hover:text-white hover:border-orange-primary"
                  >
                    <Link href={data.cta}>
                      {data.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </StaggeredFadeIn>
        </div>
      </section>
    </div>
  );
};
export default Services;
