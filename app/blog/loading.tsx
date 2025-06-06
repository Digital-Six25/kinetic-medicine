import {
  HeroSkeleton,
  BlogPostSkeleton,
  SectionHeaderSkeleton,
} from "@/components/page-skeleton";

export default function BlogLoading() {
  return (
    <div className="min-h-screen">
      <HeroSkeleton />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeaderSkeleton />
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {Array.from({ length: 2 }).map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="h-64 bg-gray-200 animate-pulse" />
                <div className="p-8 space-y-4">
                  <div className="flex space-x-4">
                    <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                    <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                  </div>
                  <div className="h-8 w-full bg-gray-200 rounded animate-pulse" />
                  <div className="h-16 w-full bg-gray-200 rounded animate-pulse" />
                  <div className="flex justify-between items-center">
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                    <div className="h-8 w-20 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <div className="mb-8">
                <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mb-4" />
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      className="h-8 w-20 bg-gray-200 rounded animate-pulse"
                    />
                  ))}
                </div>
              </div>
              <BlogPostSkeleton />
            </div>
            <div className="space-y-8">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 space-y-4"
                >
                  <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
                  <div className="space-y-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-4 w-full bg-gray-200 rounded animate-pulse"
                      />
                    ))}
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
