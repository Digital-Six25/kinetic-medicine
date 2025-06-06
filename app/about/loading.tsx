import { CardGridSkeleton } from "@/components/page-skeleton";
import { SectionHeaderSkeleton } from "@/components/page-skeleton";
import { HeroSkeleton } from "@/components/page-skeleton";

export default function AboutLoading() {
  return (
    <div className="min-h-screen">
      <HeroSkeleton />

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
              <div className="space-y-4">
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="h-10 w-32 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="h-96 w-full bg-gray-200 rounded-2xl animate-pulse" />
          </div>
        </div>
      </section>
    </div>
  );
}
