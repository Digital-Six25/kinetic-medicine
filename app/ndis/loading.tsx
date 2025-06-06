import {
  HeroSkeleton,
  CardGridSkeleton,
  SectionHeaderSkeleton,
} from "@/components/page-skeleton";

export default function NDISLoading() {
  return (
    <div className="min-h-screen">
      <HeroSkeleton />

      {/* Scrolling Banner Skeleton */}
      <section className="py-8 bg-orange-primary">
        <div className="h-6 bg-orange-secondary/20 animate-pulse" />
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeaderSkeleton />
          <CardGridSkeleton count={4} />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
              <div className="h-12 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-24 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-32 w-full bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="h-96 w-full bg-gray-200 rounded-2xl animate-pulse" />
          </div>
        </div>
      </section>
    </div>
  );
}
