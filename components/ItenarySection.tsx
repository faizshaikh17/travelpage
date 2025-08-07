'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Leaf, Umbrella, Map, ThumbsUp } from 'lucide-react';

const features = [
  {
    id: "01",
    title: "Explore the Nature",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    icon: <Leaf size={20} className="text-orange-500" />,
  },
  {
    id: "02",
    title: "Tour Guide",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    icon: <Umbrella size={20} className="text-orange-500" />,
  },
  {
    id: "03",
    title: "Hidden Gems",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    icon: <Map size={20} className="text-orange-500" />,
  },
  {
    id: "04",
    title: "Simple Booking",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    icon: <ThumbsUp size={20} className="text-orange-500" />,
  },
];

export default function ItenarySection() {
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
      className="relative w-full bg-[#FAFAFA] min-h-[800px] space-y-6 sm:space-y-8 lg:space-y-16 sm:min-h-[900px] lg:h-[1000px] overflow-hidden px-4 sm:px-8 lg:px-28 py-12 sm:py-16 lg:py-28 rounded-2xl"
    >
      <div className="flex flex-col sm:flex-row w-full justify-between items-start sm:items-center gap-6 sm:gap-4 lg:gap-0">
        <div className="flex flex-col gap-2 fade-up">
          <p className="text-2xl sm:text-3xl lg:text-[3.5rem] font-semibold leading-tight lg:leading-[100%]">Adventure is Just</p>
          <p className="text-2xl sm:text-3xl lg:text-[3.5rem] font-semibold leading-tight lg:leading-[100%]">One Click Away</p>
        </div>
        <p className="text-sm sm:text-base lg:text-lg max-w-full sm:max-w-sm lg:max-w-lg px-0 sm:px-2 font-light leading-relaxed text-neutral-500 fade-up">
          Curated luxury escapes designed to recharge your soul. From serene beaches to five-star retreats, we&apos;ll get you there in style.
        </p>
      </div>

      <div className="h-[0.01rem] my-8 sm:my-12 lg:my-16 w-full bg-neutral-300 fade-up"></div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-20">
        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full lg:max-w-xl">
          {features.map((feature, idx) => (
            <div
              key={feature.id}
              data-index={idx}
              className="card-fade-up bg-white border border-neutral-200 rounded-2xl p-4 sm:p-5 w-full shadow-xs h-full flex flex-col gap-3 sm:gap-4"
            >
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center w-full justify-between">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center border border-neutral-200 rounded-full bg-neutral-100">
                    {feature.icon}
                  </div>
                  <p className="text-base sm:text-lg font-medium text-black">{feature.id}</p>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold">{feature.title}</h3>
              <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="relative w-full max-w-md sm:max-w-lg lg:w-[35rem] aspect-[35/33] lg:h-[33rem] card-fade-up" data-index={features.length}>
          <Image
            src="/Images/itenary.webp"
            alt="Itinerary Image"
            fill
            className="object-cover rounded-2xl"
            priority
            quality={85}
          />
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
