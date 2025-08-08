'use client'
import Image from "next/image";
import { useEffect, useRef } from "react";
import Blogs from "@/components/Blogs";

export default function Post() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll(".fade-up, .card-fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const index = parseInt(el.dataset.index || "0");
            const delay = el.classList.contains("card-fade-up") ? index * 200 : 0;
            setTimeout(() => {
              el.classList.add("in-view");
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
    <>
      <section className="relative mx-2 min-h-[300px] sm:min-h-[400px] lg:h-[500px] overflow-hidden rounded-2xl">
        <Image
          src="/Images/footer.webp"
          alt="hero"
          fill
          priority
          quality={85}
          className="z-0 object-cover object-left"
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4 text-center">
          <h1 className="package-fade text-white text-3xl sm:text-[5rem] font-bold drop-shadow-lg leading-tight">
            Why Booking Through A <br /> Travel Agency Makes Sense
          </h1>
        </div>
      </section>

      <div
        ref={containerRef}
        className="flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8 py-12 space-y-12 max-w-[90rem] mx-auto"
      >
        <p className="fade-up text-lg text-gray-700 max-w-5xl leading-relaxed">
          Planning a trip can be overwhelming, with countless choices for flights, hotels, and activities. Our travel agency simplifies this process by curating options that match your needs and budget perfectly. We leverage our industry expertise and exclusive partnerships to secure the best deals, so you can focus on enjoying your journey instead of stressing over logistics.
        </p>
        <p className="fade-up text-lg text-gray-700 max-w-5xl leading-relaxed">
          Beyond just bookings, we provide personalized recommendations, insider tips, and 24/7 support during your trip. Whether you encounter unexpected weather changes, need last-minute reservations, or want to discover hidden gems, we’re here to make your travel experience seamless and unforgettable.
        </p>

        <div className="fade-up relative w-full max-w-7xl aspect-[4/3] rounded-2xl overflow-hidden">
          <Image src="/Images/dest1.webp" alt="Full Page Travel" fill quality={90} className="object-cover" />
        </div>

        <h2 className="fade-up text-4xl w-full max-w-5xl font-bold text-gray-900">
          Expert Planning for Worry-Free Adventures
        </h2>
        <p className="fade-up text-lg text-gray-700 max-w-5xl leading-relaxed whitespace-pre-line">
          Planning a trip can be overwhelming, with countless choices for flights, hotels, and activities. Our travel agency simplifies this process by curating options that match your needs and budget perfectly. We leverage our industry expertise and exclusive partnerships to secure the best deals, so you can focus on enjoying your journey instead of stressing over logistics.

          {"\n\n"}

          Beyond just bookings, we provide personalized recommendations, insider tips, and 24/7 support during your trip. Whether you encounter unexpected weather changes, need last-minute reservations, or want to discover hidden gems, we’re here to make your travel experience seamless and unforgettable.
        </p>

        <div className="fade-up flex flex-col md:flex-row justify-center items-center gap-6 w-full max-w-7xl">
          <div className="relative flex-1 w-full h-[50rem] rounded-2xl overflow-hidden">
            <Image src="/Images/destination.webp" alt="Adventure Planning" fill quality={90} className="object-cover" />
          </div>
          <div className="relative flex-1 w-full h-[50rem] rounded-2xl overflow-hidden">
            <Image src="/Images/hero2.webp" alt="Adventure Experience" fill quality={90} className="object-cover" />
          </div>
        </div>

        <h2 className="fade-up text-3xl w-full max-w-5xl font-bold text-gray-900">
          We Handle Everything, Big or Small
        </h2>
        <p className="fade-up text-lg text-gray-700 max-w-5xl leading-relaxed">
          Planning a trip can be overwhelming, with countless choices for flights, hotels, and activities. Our travel agency simplifies this process by curating options that match your needs and budget perfectly. We leverage our industry expertise and exclusive partnerships to secure the best deals, so you can focus on enjoying your journey instead of stressing over logistics.
        </p>
      </div>

      <Blogs />

      <style jsx>{`
        .fade-up,
        .card-fade-up {
          opacity: 0;
          transform: translateY(150px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .in-view {
          opacity: 1;
          transform: translateY(0);
        }
        .package-fade {
          opacity: 0;
          transform: translateY(40px);
          animation: fadeUp 0.8s ease-out forwards;
        }
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
