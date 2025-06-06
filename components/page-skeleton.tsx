import { Skeleton } from "./skeleton";

// Hero Section Skeleton
export function HeroSkeleton() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Skeleton className="h-6 w-32" /> {/* Badge */}
            <Skeleton className="h-16 w-full" /> {/* Title */}
            <Skeleton className="h-24 w-full" /> {/* Description */}
            <div className="flex space-x-4">
              <Skeleton className="h-12 w-40" /> {/* Button 1 */}
              <Skeleton className="h-12 w-40" /> {/* Button 2 */}
            </div>
            <div className="flex space-x-6">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-6 w-24" />
            </div>
          </div>
          <div className="relative">
            <Skeleton className="h-96 w-full rounded-2xl" /> {/* Hero Image */}
            <div className="absolute -bottom-6 -left-6">
              <Skeleton className="h-24 w-48 rounded-xl" /> {/* Stats Card */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Card Grid Skeleton
export function CardGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-lg p-8 space-y-4"
        >
          <Skeleton className="h-16 w-16 rounded-xl" /> {/* Icon */}
          <Skeleton className="h-6 w-3/4" /> {/* Title */}
          <Skeleton className="h-20 w-full" /> {/* Description */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <Skeleton className="h-10 w-full" /> {/* Button */}
        </div>
      ))}
    </div>
  );
}

// Section Header Skeleton
export function SectionHeaderSkeleton() {
  return (
    <div className="text-center mb-16 space-y-4">
      <Skeleton className="h-6 w-32 mx-auto" /> {/* Badge */}
      <Skeleton className="h-12 w-96 mx-auto" /> {/* Title */}
      <Skeleton className="h-16 w-full max-w-3xl mx-auto" /> {/* Description */}
    </div>
  );
}

// Trust Indicators Skeleton
export function TrustIndicatorsSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="text-center space-y-2">
          <Skeleton className="h-8 w-16 mx-auto" /> {/* Number */}
          <Skeleton className="h-4 w-24 mx-auto" /> {/* Label */}
        </div>
      ))}
    </div>
  );
}

// Location Card Skeleton
export function LocationCardSkeleton({ count = 7 }: { count?: number }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <Skeleton className="h-48 w-full" /> {/* Image */}
          <div className="p-4">
            <Skeleton className="h-10 w-full" /> {/* Button */}
          </div>
        </div>
      ))}
    </div>
  );
}

// Blog Post Skeleton
export function BlogPostSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <Skeleton className="h-48 w-full" /> {/* Image */}
          <div className="p-6 space-y-4">
            <div className="flex space-x-4">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
            </div>
            <Skeleton className="h-6 w-full" /> {/* Title */}
            <Skeleton className="h-16 w-full" /> {/* Excerpt */}
            <div className="flex justify-between items-center">
              <Skeleton className="h-4 w-24" /> {/* Author */}
              <Skeleton className="h-8 w-20" /> {/* Button */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Team Member Skeleton
export function TeamMemberSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <Skeleton className="h-64 w-full" /> {/* Image */}
          <div className="p-6 space-y-4">
            <Skeleton className="h-4 w-20" /> {/* Badge */}
            <Skeleton className="h-6 w-3/4" /> {/* Name */}
            <Skeleton className="h-16 w-full" /> {/* Bio */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <div className="flex flex-wrap gap-2">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-6 w-14" />
              </div>
            </div>
            <div className="flex space-x-2">
              <Skeleton className="h-8 w-20" />
              <Skeleton className="h-8 w-16" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Form Skeleton
export function FormSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
      <Skeleton className="h-8 w-64" /> {/* Form Title */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Skeleton className="h-4 w-20" /> {/* Label */}
          <Skeleton className="h-10 w-full" /> {/* Input */}
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-32 w-full" /> {/* Textarea */}
      </div>
      <Skeleton className="h-12 w-full" /> {/* Submit Button */}
    </div>
  );
}

// Service Detail Skeleton
export function ServiceDetailSkeleton() {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <Skeleton className="h-8 w-96" /> {/* Title */}
        <Skeleton className="h-24 w-full" /> {/* Description */}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <Skeleton className="h-6 w-48" /> {/* Section Title */}
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="flex space-x-4">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-8 w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <Skeleton className="h-96 w-full rounded-xl" /> {/* Image */}
      </div>
    </div>
  );
}
