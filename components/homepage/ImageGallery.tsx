import Link from "next/link";
import { FadeIn } from "../animations";
import { ImageGrid } from "../image-grid";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { ImgGalleryImage } from "@/types/homepage";

interface ImageGalleryProps {
  pill: string;
  title: string;
  subtitle: string;
  images: ImgGalleryImage[];
}

const ImageGallery = ({ pill, title, subtitle, images }: ImageGalleryProps) => {
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

        <FadeIn direction="up" delay={0.2}>
          <ImageGrid
            images={images.map((img: { img: any }, i: number) => ({
              src: img.img,
              alt: `Facility image ${i + 1}`,
            }))}
            className="mb-8"
          />
        </FadeIn>

        <div className="text-center">
          <Button variant="outline" asChild>
            <Link href="/about">
              Take a Virtual Tour
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default ImageGallery;
