'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { CalendarDays, Star, Umbrella } from 'lucide-react';

const destinations = [
  {
    country: "🇪🇨 Ecuador",
    title: "Cavendish Beach",
    description: "A scenic paradise with soft sands and gentle surf",
    date: "12 Jun – 20 Jun",
    rating: "5.0 Rating",
    type: "Beach",
    price: "$1580",
    duration: "9 day package",
    image: "/Images/dest1.webp",
  },
  {
    country: "🇰🇿 Kazakhstan",
    title: "Altai Mountains",
    description: "Explore breathtaking peaks and hidden alpine trails",
    date: "12 Jun – 20 Jun",
    rating: "5.0 Rating",
    type: "Beach",
    price: "$1580",
    duration: "9 day package",
    image: "/Images/dest2.webp",
  },
  {
    country: "🇮🇩 Indonesia",
    title: "Senggigi Beach",
    description: "A perfect blend of crystal waters and vibrant local life",
    date: "12 Jun – 20 Jun",
    rating: "5.0 Rating",
    type: "Beach",
    price: "$1580",
    duration: "9 day package",
    image: "/Images/dest3.webp",
  },
  {
    country: "🇨🇦 Canada",
    title: "Singing Sands Beach",
    description: "Famous for sand that sings with every step you take",
    date: "12 Jun – 20 Jun",
    rating: "5.0 Rating",
    type: "Beach",
    price: "$1580",
    duration: "9 day package",
    image: "/Images/dest4.webp",
  },
];

export default function Destination() {
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
      className="relative w-full space-y-12 sm:space-y-16 lg:space-y-24 overflow-hidden px-4 sm:px-6 lg:px-28 py-16 sm:py-24 lg:py-32 bg-[#FAFAFA] rounded-2xl"
    >
      <div className="flex flex-col text-center items-center fade-up">
        <p className="text-2xl sm:text-3xl lg:text-[3.5rem] font-semibold leading-tight lg:leading-[100%]">
          Uncover The Beauty Of Your
        </p>
        <p className="text-2xl sm:text-3xl lg:text-[3.5rem] font-semibold leading-tight lg:leading-[100%]">
          Next Destination
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-stretch justify-center gap-8 w-full">
        <div className="relative w-full lg:w-[35rem] aspect-[4/3] sm:aspect-[5/4] lg:h-[56rem] card-fade-up" data-index={destinations.length}>
          <Image
            src="/Images/destination.webp"
            alt="Itinerary"
            fill
            className="object-cover rounded-2xl"
            priority
            quality={85}
          />
          <div className="absolute top-4 left-4 font-semibold flex flex-col gap-1 text-white text-base sm:text-lg lg:text-[2.5rem] px-4 py-2 rounded-lg">
            <span>Enjoy The Stunning</span>
            <span>Natural Beauty That</span>
            <span>Awaits At Every</span>
            <span>Destination.</span>
          </div>
          <button className="absolute bottom-6 left-6 py-3 px-6 text-sm sm:text-base font-medium bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition fade-up">
            View More Destinations
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-[42rem]">
          {destinations.map((item, idx) => (
            <div
              key={idx}
              data-index={idx}
              className="card-fade-up relative rounded-2xl p-4 sm:p-5 border border-neutral-300 overflow-hidden shadow-md bg-white"
            >
              <div className="relative h-44 sm:h-52 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-2xl"
                  priority
                  quality={85}
                />
                <div className="absolute top-3 left-3 bg-white text-xs sm:text-sm font-medium text-black px-3 py-1 rounded-md shadow-sm">
                  {item.country}
                </div>
              </div>
              <div className="flex flex-col justify-between py-3 space-y-3">
                <div className="space-y-2">
                  <p className="text-lg sm:text-xl font-semibold text-neutral-800 leading-tight">{item.title}</p>
                  <p className="text-xs text-neutral-600 leading-relaxed">{item.description}</p>
                  <div className="text-xs flex flex-wrap items-center gap-2 text-neutral-600">
                    <span className="flex items-center gap-1">
                      <CalendarDays size={14} className="text-black" />
                      {item.date}
                    </span>
                    <span className="text-neutral-400">|</span>
                    <span className="flex items-center gap-1">
                      <Star size={14} className="text-black" />
                      {item.rating}
                    </span>
                    <span className="text-neutral-400">|</span>
                    <span className="flex items-center gap-1">
                      <Umbrella size={14} className="text-black" />
                      {item.type}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
                  <div className="text-neutral-900 font-semibold text-sm leading-tight">
                    {item.price}
                    <br />
                    <span className="text-xs text-neutral-500 font-normal">{item.duration}</span>
                  </div>
                  <button className="w-full sm:w-auto py-2 px-4 text-sm font-medium border border-neutral-200 rounded-lg hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all duration-200">
                    Book now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
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
