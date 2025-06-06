import { HeroSkeleton, FormSkeleton } from "@/components/page-skeleton";

export default function ContactLoading() {
  return (
    <div className="min-h-screen">
      <HeroSkeleton />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <FormSkeleton />
            <div className="space-y-8">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 bg-gray-200 rounded-full animate-pulse" />
                    <div className="space-y-2 flex-1">
                      <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
                      <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                      <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
