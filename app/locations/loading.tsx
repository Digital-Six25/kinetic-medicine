import {
  HeroSkeleton,
  LocationCardSkeleton,
  SectionHeaderSkeleton,
} from "@/components/page-skeleton";

export default function LocationsLoading() {
  return (
    <div className="min-h-screen">
      <HeroSkeleton />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <LocationCardSkeleton />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeaderSkeleton />
          <div className="h-96 bg-gray-200 rounded-xl animate-pulse mb-8" />
          <div className="grid md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center space-y-4"
              >
                <div className="h-12 w-12 bg-gray-200 rounded-full mx-auto animate-pulse" />
                <div className="h-5 w-24 bg-gray-200 rounded mx-auto animate-pulse" />
                <div className="h-12 w-full bg-gray-200 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
