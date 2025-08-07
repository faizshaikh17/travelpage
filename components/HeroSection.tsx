'use client'
import Image from "next/image";
import { Mouse } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[600px] sm:min-h-[700px] lg:h-[800px] overflow-hidden rounded-2xl">
      <Image
        src="/Images/hero.png"
        alt="hero"
        layout="fill"
        objectFit="cover"
        priority
        quality={85}
        className="z-0 bg-left"
      />
      <div className="absolute inset-0 bg-black/20 z-0" />

      <div className="relative z-10 flex flex-col lg:hidden items-center justify-center text-center text-white px-4 py-12 sm:py-16 space-y-8 sm:space-y-10 min-h-[600px] sm:min-h-[700px]">
        <div className="space-y-2">
          <p className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.9] tracking-tight animate-great-slide-up [animation-delay:150ms] opacity-0">Find Your</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.9] tracking-tight animate-great-slide-up [animation-delay:300ms] opacity-0">Perfect</h1>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.9] tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-great-slide-up [animation-delay:450ms] opacity-0">Destination</h1>
        </div>
        <p className="text-lg sm:text-xl max-w-sm sm:max-w-lg px-2 font-light leading-relaxed text-gray-100 animate-great-slide-up [animation-delay:600ms] opacity-0">
          Discover breathtaking destinations, plan your perfect itinerary,
          and book your trip with ease all in one place.
        </p>

        <div className="w-full max-w-sm sm:max-w-md bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-white/20 flex flex-col sm:flex-row">
          <div className="relative sm:w-36 aspect-video sm:aspect-auto sm:h-42 m-2 rounded-2xl overflow-hidden">
            <Image
              src="/Images/hero2.webp"
              alt="hero"
              layout="fill"
              objectFit="cover"
              priority
              quality={85}
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="relative flex h-12 w-12 sm:h-12 sm:w-12 items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-60 animate-ping" />
                <span className="relative">
                  <span className="block w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent drop-shadow-lg" />
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center px-4 py-4 text-black">
            <p className="font-semibold text-center text-sm sm:text-base leading-tight animate-great-slide-up [animation-delay:750ms] opacity-0">
              12K+ Membership <br />
              <span className="text-gray-600 font-medium animate-great-slide-up [animation-delay:900ms] opacity-0">enjoy our facility</span>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 cursor-pointer text-white">
          <Mouse size={20} className="sm:w-[22px] sm:h-[22px]" />
          <span className="text-base sm:text-lg font-medium animate-great-slide-up [animation-delay:1050ms] opacity-0">Get Started</span>
        </div>
      </div>

      <div className="hidden lg:flex relative z-10 flex-col items-end justify-start h-full text-white text-left mt-40 mr-34">
        <div>
          <div className="font-semibold">
            <p className="text-[6.5rem] leading-[100%] animate-great-slide-up [animation-delay:150ms] opacity-0">Find Your</p>
            <h1 className="text-[6.5rem] leading-[100%] animate-great-slide-up [animation-delay:300ms] opacity-0">Perfect</h1>
            <h1 className="text-[6.5rem] leading-[100%] animate-great-slide-up [animation-delay:450ms] opacity-0">Destination</h1>
          </div>
          <div className="leading-[100%] mt-6">
            <p className="text-lg animate-great-slide-up [animation-delay:600ms] opacity-0">
              Discover breathtaking destinations, plan your perfect <br />
              itinerary, and book your trip with ease all in one place.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex absolute bottom-14 left-28 z-10 w-86 h-42 bg-white rounded-3xl overflow-hidden shadow-md">
        <div className="relative w-36 m-2 rounded-4xl overflow-hidden group">
          <Image
            src="/Images/hero2.webp"
            alt="hero"
            layout="fill"
            objectFit="cover"
            priority
            quality={85}
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="relative flex h-12 w-12 items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-40 animate-ping" />
              <span className="relative">
                <span className="block w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent" />
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center pl-3 text-black">
          <p className="font-medium leading-tight animate-great-slide-up [animation-delay:750ms] opacity-0">
            12K+ Membership <br />
            enjoy our facility
          </p>
        </div>
      </div>

      <div className="hidden lg:flex absolute bottom-14 right-28 z-10 items-center gap-2 cursor-pointer text-white">
        <Mouse size={22} />
        <span className="text-lg animate-great-slide-up [animation-delay:900ms] opacity-0">Get Started</span>
      </div>

      <style jsx>{`
        @keyframes great-slide-up {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-great-slide-up {
          animation: great-slide-up 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
        }
      `}</style>
    </section>
  );
}