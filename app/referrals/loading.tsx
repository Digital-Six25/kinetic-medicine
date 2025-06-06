import {
  HeroSkeleton,
  SectionHeaderSkeleton,
} from "@/components/page-skeleton";

export default function ReferralsLoading() {
  return (
    <div className="min-h-screen">
      <HeroSkeleton />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeaderSkeleton />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="h-16 w-16 bg-gray-200 rounded-full mx-auto animate-pulse" />
                <div className="h-6 w-24 bg-gray-200 rounded mx-auto animate-pulse" />
                <div className="h-16 w-full bg-gray-200 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeaderSkeleton />
          <div className="grid md:grid-cols-2 gap-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="h-48 bg-gray-200 animate-pulse" />
                <div className="p-8 space-y-4">
                  <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />
                  <div className="h-16 w-full bg-gray-200 rounded animate-pulse" />
                  <div className="flex space-x-4">
                    <div className="h-10 w-24 bg-gray-200 rounded animate-pulse" />
                    <div className="h-10 w-20 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
