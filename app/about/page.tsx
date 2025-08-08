'use client'
import Image from "next/image";
import ItenarySection from "@/components/ItenarySection";
import Link from "next/link";
import { useEffect, useRef } from 'react';

export default function JourneySection() {
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
            setTimeout(() => el.classList.add('in-view'), delay);
          }
        });
      },
      { threshold: 0.2 }
    );
    elements?.forEach(el => observer.observe(el));
    return () => elements?.forEach(el => observer.unobserve(el));
  }, []);

  const awards = [
    { subheading: "Global Travel Awards", heading: "Best Customized Travel Experience", year: "2025" },
    { subheading: "Wanderlust Choice", heading: "Top Adventure Tour Agency", year: "2025" },
    { subheading: "Culture Connect Panel", heading: "Most Loved Local Tours", year: "2024" },
    { subheading: "Global Trotter Awards", heading: "Top-Rated Travel Agency 2024", year: "2024" },
  ];

  return (
    <>
      <section className="relative mx-2 min-h-[300px] sm:min-h-[400px] lg:h-[500px] overflow-hidden rounded-2xl">
        <Image
          src="/Images/about.webp"
          alt="hero"
          fill
          priority
          quality={85}
          className="z-0 object-cover object-left"
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4 text-center">
          <h1 className="package-fade text-white text-3xl sm:text-[5rem] font-bold drop-shadow-lg leading-tight">
            About
          </h1>
        </div>
      </section>

      <section
        className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-12 py-16 sm:py-30 rounded-2xl shadow-lg fade-up"
        data-index={0}
      >
        <div className="flex flex-col lg:flex-row gap-12 flex-wrap">
          <div
            style={{ height: "25rem", width: "35rem", position: "relative" }}
            className="rounded-lg overflow-hidden shadow-md flex-shrink-0 max-w-full lg:max-w-[35rem] mx-auto lg:mx-0"
          >
            <Image
              src="/Images/about.webp"
              alt="Travel Journey"
              fill
              sizes="(min-width: 1024px) 35rem, 100vw"
              style={{ objectFit: "cover" }}
              priority
              quality={85}
            />
          </div>

          <div className="flex flex-col justify-center max-w-xl flex-shrink min-w-0 mx-auto lg:mx-0 px-4 lg:px-0">
            <h2 className="text-4xl sm:text-6xl font-extrabold text-gray-900 mb-6 text-center lg:text-left">
              Your Journey Starts with Nomad
            </h2>
            <p className="text-gray-700 text-lg sm:text-lg leading-relaxed mb-6 text-center lg:text-left">
              Nomad is a modern travel agency dedicated to turning your dream trips into unforgettable memories.
              From solo adventures to family getaways, we craft journeys that inspire.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center lg:text-left">
              Our team is passionate about culture, nature, and new horizons. We aim to provide smooth and authentic experiences across the globe.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link href={"/about"} className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-6xl font-extrabold">532+</div>
            <div className="uppercase font-semibold text-sm text-gray-600 mt-2">Happy Travelers</div>
          </div>
          <div>
            <div className="text-6xl font-extrabold">99%</div>
            <div className="uppercase font-semibold text-sm tracking-wide text-gray-600 mt-2">Booking Success</div>
          </div>
          <div>
            <div className="text-6xl font-extrabold">14K+</div>
            <div className="uppercase font-semibold text-sm tracking-wide text-gray-600 mt-2">Miles Traveled</div>
          </div>
          <div>
            <div className="text-6xl font-extrabold">178+</div>
            <div className="uppercase font-semibold text-sm tracking-wide text-gray-600 mt-2">Global Partners</div>
          </div>
        </div>
      </section>

      <ItenarySection />

      <section
        ref={containerRef}
        className="max-w-7xl mx-auto bg-[#FAFAFA] rounded-2xl px-4 sm:px-6 lg:px-28 py-16 sm:py-24 lg:py-32 space-y-16"
      >
        <div className="flex flex-col text-center items-center fade-up" data-index={0}>
          <p className="text-2xl sm:text-3xl lg:text-[3.5rem] font-semibold leading-tight lg:leading-[100%]">
            Awards That Inspire Us to
          </p>
          <p className="text-2xl sm:text-3xl lg:text-[3.5rem] font-semibold leading-tight lg:leading-[100%]">
            Do More
          </p>
          <p className="text-gray-500 text-lg sm:text-lg mt-6 leading-relaxed max-w-2xl">
            We’re proud to be recognized by respected names in the travel industry. Every <br /> award tells a story of dedication, teamwork, and trust.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center fade-up" data-index={1}>
          <div className="relative w-[28rem] h-[38rem] flex-shrink-0 rounded-lg overflow-hidden shadow-md mx-auto lg:mx-0">
            <Image
              src="/Images/about2.webp"
              alt="Awards Image"
              fill
              sizes="(min-width: 1024px) 28rem, 100vw"
              style={{ objectFit: "cover" }}
              priority
              quality={85}
            />
          </div>

          <div className="flex flex-col gap-8 w-full max-w-7xl">
            {awards.map(({ subheading, heading, year }, i) => (
              <div
                key={i}
                className="card-fade-up w-full bg-white rounded-2xl p-7 border border-gray-200 flex flex-col sm:flex-row items-center justify-between"
                data-index={i}
                style={{ cursor: 'default' }}
              >
                <div className="flex flex-col gap-2 max-w-[70%] text-center sm:text-left">
                  <h3 className="text-md font-semibold text-gray-600 tracking-wide">{subheading}</h3>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{heading}</h2>
                </div>

                <div className="text-black font-extrabold text-4xl sm:text-xl flex-shrink-0 flex items-center justify-center pt-4 sm:pt-0 sm:pl-6">
                  {year}
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
    </>
  );
}
