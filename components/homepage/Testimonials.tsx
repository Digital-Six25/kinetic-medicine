import Image from "next/image";

const Testimonials = ({ successStories }) => {
  const words = successStories.title.split(" ");
  const firstTwoWords = words.slice(0, 2).join(" ");
  const rest = words.slice(2).join(" ");
  return (
    <div>
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-50"></div>
        <div
          className="absolute top-0 left-0 right-0 h-20 bg-white"
          style={{ clipPath: "ellipse(100% 100% at 50% 0%)" }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#323739] mb-6">
              <span>{firstTwoWords}</span>
              <br />
              <span className="text-orange-500">{rest}</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.card.map(
              (
                testimonial: {
                  icon: string;
                  review: string;
                  name: string;
                  designation: string;
                },
                index: number
              ) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#F26920]/10 to-[#F8A21F]/10 rounded-full transform translate-x-10 -translate-y-10"></div>

                    <div className="relative z-10">
                      <div className="flex text-[#F8A21F] mb-4">
                        <Image
                          src={testimonial.icon}
                          height={24}
                          width={24}
                          alt="icon"
                        />
                      </div>

                      <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                        "{testimonial.review}"
                      </blockquote>

                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#F26920] to-[#F8A21F] rounded-full mr-4 flex items-center justify-center">
                          <span className="text-white font-bold text-lg">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="font-bold text-[#323739]">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {testimonial.designation}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Testimonials;
