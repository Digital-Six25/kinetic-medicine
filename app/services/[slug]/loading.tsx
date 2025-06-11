import { Skeleton } from "@/components/ui/skeleton";

export default function ServiceDetailsLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Skeleton */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Skeleton className="h-6 w-6 rounded" />
                <Skeleton className="h-8 w-48" />
              </div>
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-24 w-full" />

              {/* Features List Skeleton */}
              <div className="space-y-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Skeleton className="h-5 w-5 rounded-full" />
                    <Skeleton className="h-5 w-40" />
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                <Skeleton className="h-12 w-40" />
                <Skeleton className="h-12 w-32" />
              </div>
            </div>
            <div className="relative">
              <Skeleton className="h-96 w-full rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Skeleton */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Introduction Section */}
          <div className="space-y-6">
            <Skeleton className="h-10 w-96" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-3/4" />
          </div>

          {/* Services Grid Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Skeleton className="h-8 w-80" />
              <div className="space-y-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-orange-primary/10 p-2 rounded-full">
                      <Skeleton className="h-5 w-5" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-5 w-48" />
                      <Skeleton className="h-12 w-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Skeleton className="h-96 w-full rounded-xl" />
          </div>

          {/* Benefits Section */}
          <div className="space-y-8">
            <Skeleton className="h-8 w-96" />
            <div className="grid md:grid-cols-3 gap-6">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl space-y-4"
                >
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-16 w-full" />
                </div>
              ))}
            </div>
          </div>

          {/* Specialists Section */}
          <div className="space-y-8">
            <Skeleton className="h-8 w-80" />
            <div className="grid md:grid-cols-2 gap-8">
              {Array.from({ length: 2 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md space-y-4"
                >
                  <div className="flex items-center space-x-4">
                    <Skeleton className="h-20 w-20 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-5 w-32" />
                      <Skeleton className="h-4 w-48" />
                    </div>
                  </div>
                  <Skeleton className="h-16 w-full" />
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-orange-primary/5 p-8 rounded-xl space-y-6">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-12 w-48" />
          </div>

          {/* FAQ Section */}
          <div className="space-y-8">
            <Skeleton className="h-8 w-64" />
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 space-y-4"
                >
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-6 w-96" />
                    <Skeleton className="h-6 w-6" />
                  </div>
                  <Skeleton className="h-16 w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
