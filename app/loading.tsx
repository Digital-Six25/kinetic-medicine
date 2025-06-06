import {
  HeroSkeleton,
  CardGridSkeleton,
  SectionHeaderSkeleton,
  TrustIndicatorsSkeleton,
  LocationCardSkeleton,
} from "@/components/page-skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero Section Skeleton */}
      <HeroSkeleton />

      {/* Trust Indicators Skeleton */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <TrustIndicatorsSkeleton />
        </div>
      </section>

      {/* Services Section Skeleton */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeaderSkeleton />
          <CardGridSkeleton count={6} />
        </div>
      </section>

      {/* NDIS Section Skeleton */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
              <div className="h-12 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-24 w-full bg-gray-200 rounded animate-pulse" />
              <div className="space-y-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="h-12 w-12 bg-gray-200 rounded-full animate-pulse" />
                    <div className="space-y-2 flex-1">
                      <div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse" />
                      <div className="h-8 w-full bg-gray-200 rounded animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="h-96 w-full bg-gray-200 rounded-2xl animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section Skeleton */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeaderSkeleton />
          <LocationCardSkeleton />
        </div>
      </section>
    </div>
  );
}
