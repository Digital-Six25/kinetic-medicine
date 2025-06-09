import { Skeleton } from "@/components/ui/skeleton";

export default function CareersLoading() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section Skeleton */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <Skeleton className="h-14 w-3/4 rounded-lg" />
              <Skeleton className="h-24 w-full rounded-lg" />
              <div className="flex gap-4">
                <Skeleton className="h-12 w-36 rounded-md" />
                <Skeleton className="h-12 w-36 rounded-md" />
              </div>
            </div>
            <Skeleton className="h-[300px] md:h-[400px] rounded-lg" />
          </div>
        </div>
      </section>

      {/* Why Join Us Section Skeleton */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Skeleton className="h-10 w-2/3 mx-auto rounded-lg mb-4" />
            <Skeleton className="h-16 w-full rounded-lg" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-full">
                <Skeleton className="h-48 w-full rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Vacancies Section Skeleton */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Skeleton className="h-10 w-2/3 mx-auto rounded-lg mb-4" />
            <Skeleton className="h-16 w-full rounded-lg" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-full">
                <Skeleton className="h-80 w-full rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Skeleton */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <Skeleton className="h-[400px] rounded-lg" />
            <div className="space-y-6">
              <Skeleton className="h-10 w-3/4 rounded-lg" />
              <div className="space-y-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex gap-4">
                    <Skeleton className="w-10 h-10 rounded-full shrink-0" />
                    <div className="w-full">
                      <Skeleton className="h-8 w-1/3 rounded-lg mb-2" />
                      <Skeleton className="h-16 w-full rounded-lg" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section Skeleton */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Skeleton className="h-10 w-2/3 mx-auto rounded-lg mb-4" />
            <Skeleton className="h-16 w-full rounded-lg mb-6" />
            <Skeleton className="h-12 w-64 mx-auto rounded-md" />
          </div>
        </div>
      </section>

      {/* Testimonials Skeleton */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Skeleton className="h-10 w-2/3 mx-auto rounded-lg mb-4" />
            <Skeleton className="h-16 w-full rounded-lg" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-full">
                <Skeleton className="h-64 w-full rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Skeleton */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Skeleton className="h-10 w-2/3 mx-auto rounded-lg mb-4 bg-white/20" />
            <Skeleton className="h-16 w-full rounded-lg mb-6 bg-white/20" />
            <div className="flex flex-wrap justify-center gap-4">
              <Skeleton className="h-12 w-48 rounded-md bg-white/20" />
              <Skeleton className="h-12 w-36 rounded-md bg-white/20" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
