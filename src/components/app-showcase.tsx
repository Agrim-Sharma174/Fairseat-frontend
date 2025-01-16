import Image from "next/image"; // Import Image from Next.js
import iphone1 from "../../public/iphone 16 _ portrait (1) 1.png";
import iphone2 from "../../public/iphone 16 _ portrait (2) 1.png";
import iphone3 from "../../public/iphone 16 _ portrait 1.png";

export function AppShowcase() {
  return (
    <section className="py-16 pt-0 sm:py-32 sm:pt-0">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-20">
          Be Prepared To Have Fun
        </h2>

        <div className="relative max-w-5xl mx-auto h-[600px]">
          {/* Left Phone */}
          <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-[280px] h-full transform ">
            <div className="w-full h-full rounded-[3rem] border-8 border-gray-800 overflow-hidden">
              <Image
                src={iphone1}
                alt="Mobile app event details screen"
                className="w-full h-full object-cover"
                layout="fill" // This ensures the image covers the container
                objectFit="cover" // Ensures the image covers the space properly
              />
            </div>
          </div>

          {/* Center Phone */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:-translate-y-1/3 w-[280px] h-full z-10">
            <div className="w-full h-full rounded-[3rem] border-8 border-gray-800 overflow-hidden shadow-2xl shadow-teal-500/20">
              <Image
                src={iphone2}
                alt="Mobile app events list screen"
                className="w-full h-full object-cover"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          {/* Right Phone */}
          <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-[280px] h-full transform">
            <div className="w-full h-full rounded-[3rem] border-8 border-gray-800 overflow-hidden">
              <Image
                src={iphone3}
                alt="Mobile app ticket confirmation screen"
                className="w-full h-full object-cover"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
