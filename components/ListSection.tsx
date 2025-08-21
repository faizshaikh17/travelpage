'use client'
import Image from "next/image";
import { CalendarDays, Star, Umbrella } from "lucide-react";
import { useEffect, useRef } from "react";
import Link from "next/link";

const destinations = [
  {
    country: "🇰🇿 Kazakhstan",
    title: "Caspian Sea Beach, Aktau",
    description: "A Unique Seaside Escape in Central Asia",
    date: "12 Jun – 20 Jun",
    rating: "5.0 Rating",
    type: "Beach",
    price: "$1580",
    duration: "9 day package",
    image: "/Images/listImage1.webp",
  },
  {
    country: "🇮🇩 Indonesia",
    title: "Pink Beach, Komodo Island",
    description: "A Rare Natural Wonder with Blush-Toned Sand",
    date: "12 Jun – 20 Jun",
    rating: "5.0 Rating",
    type: "Beach",
    price: "$2550",
    duration: "7 day package",
    image: "/Images/listImage2.webp",
  },
  {
    country: "🇮🇩 Indonesia",
    title: "Tanjung Bira, South Sulawesi",
    description: "White Sands and Turquoise Waters Away from the Crowds",
    date: "12 Jun – 20 Jun",
    rating: "5.0 Rating",
    type: "Beach",
    price: "$3750",
    duration: "5 day package",
    image: "/Images/listImage3.webp",
  },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll('.fade-up, .card-fade-up');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const index = parseInt(el.dataset.index || "0");
            const delay = el.classList.contains('card-fade-up') ? index * 200 : 0;
            setTimeout(() => {
              el.classList.add('in-view');
            }, delay);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements?.forEach((el) => observer.observe(el));
    return () => elements?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[700px] space-y-8 sm:space-y-12 lg:space-y-16 sm:min-h-[800px] lg:h-[900px] overflow-hidden px-4 sm:px-8 lg:px-28 py-16 sm:py-24 lg:py-36 rounded-2xl"
    >
      {/* Heading */}
      <div className="flex flex-col sm:flex-row w-full justify-between items-start sm:items-center gap-4 sm:gap-0">
        <p className="text-2xl sm:text-3xl lg:text-[3.5rem] font-semibold leading-tight lg:leading-[100%] fade-up">
          Fuel Your Wanderlust
        </p>
        <button className="py-3 px-6 text-sm sm:text-base font-medium border border-neutral-200 rounded-lg hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all duration-200 whitespace-nowrap fade-up">
          View more
        </button>
      </div>

      {/* Cards */}
      <div className="flex flex-col sm:flex-col lg:flex-row gap-6 lg:gap-10 overflow-x-auto lg:overflow-x-visible">
        {destinations.map((item, idx) => (
          <div
            key={idx}
            data-index={idx}
            className="card-fade-up relative w-full sm:w-full lg:w-full lg:max-w-sm rounded-2xl p-4 sm:p-5 border border-neutral-300 overflow-hidden shadow-md bg-white flex-shrink-0"
          >
            <div className="relative h-48 sm:h-52 lg:h-56 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-2xl"
                priority
                quality={85}
              />
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white text-xs sm:text-sm font-medium text-black px-2 sm:px-3 py-1 rounded-md shadow-sm">
                {item.country}
              </div>
            </div>
            <div className="flex flex-col justify-between py-3 sm:py-4 space-y-3 sm:space-y-4">
              <div className="space-y-3 sm:space-y-4">
                <p className="text-xl sm:text-2xl font-semibold text-neutral-800 leading-tight">
                  {item.title}
                </p>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
                <div className="text-xs flex flex-wrap items-center justify-start gap-1 sm:gap-2 text-neutral-600">
                  <span className="flex items-center gap-1">
                    <CalendarDays size={14} className="sm:w-4 sm:h-4 text-black" />
                    <span className="text-xs">{item.date}</span>
                  </span>
                  <span className="text-neutral-400">|</span>
                  <span className="flex items-center gap-1">
                    <Star size={14} className="sm:w-4 sm:h-4 text-black" />
                    <span className="text-xs">{item.rating}</span>
                  </span>
                  <span className="text-neutral-400">|</span>
                  <span className="flex items-center gap-1">
                    <Umbrella size={14} className="sm:w-4 sm:h-4 text-black" />
                    <span className="text-xs">{item.type}</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row border-t border-neutral-100 mt-4 pt-6 items-start sm:items-center justify-between gap-3 sm:gap-0">
                <div className="text-neutral-900 font-semibold text-sm sm:text-base leading-tight">
                  {item.price}
                  <br />
                  <span className="text-xs sm:text-sm text-neutral-500 font-normal">
                    {item.duration}
                  </span>
                </div>
                <Link href={'/single-destination'} className="w-full sm:w-auto py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base font-medium border border-neutral-200 rounded-lg hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all duration-200">
                  Book now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .fade-up,
        .card-fade-up {
          opacity: 0.5;
          transform: translateY(150px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .in-view {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
