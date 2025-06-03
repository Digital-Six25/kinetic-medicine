import Image from "next/image";

interface ImageGridProps {
  images: {
    src: string;
    alt: string;
  }[];
  className?: string;
}

export function ImageGrid({ images, className = "" }: ImageGridProps) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 ${className}`}>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-square overflow-hidden rounded-lg shadow-md"
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
}
