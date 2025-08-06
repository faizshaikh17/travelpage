import Image from "next/image";
import { Mouse } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[800px] overflow-hidden rounded-2xl">
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

      <div className="relative z-10 flex flex-col items-end justify-start sm:mt-40 sm:mr-34 h-full text-white text-left">
        <div>
          <div className="font-semibold">
            <p className="text-[6.5rem] leading-[100%]">Find Your</p>
            <h1 className="text-[6.5rem] leading-[100%]">Perfect</h1>
            <h1 className="text-[6.5rem] leading-[100%]">Destination</h1>
          </div>
          <div className="leading-[100%]">
            <p className="text-lg">
              Discover breathtaking destinations, plan your perfect <br />
              itinerary, and book your trip with ease all in one place.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-14 left-28 z-10 w-86 h-42 bg-white rounded-3xl overflow-hidden shadow-md flex">
        <div className="relative w-36 m-2 rounded-4xl overflow-hidden">
          <Image
            src="/Images/hero.png"
            alt="hero"
            layout="fill"
            objectFit="cover"
            priority
            quality={85}
            className="object-cover"
          />
        </div>

        <div className="flex items-center pl-3 text-black">
          <p className="font-medium leading-tight">
            12K+ Membership <br />
            enjoy our facility
          </p>
        </div>
      </div>

      <div className="absolute bottom-14 flex justify-center cursor-pointer gap-2 items-center right-28 z-10">
        <Mouse className="text-white" size={22}/>
        <span className="text-white text-lg">
          Get Started
        </span>
      </div>
    </section>
  );
}
