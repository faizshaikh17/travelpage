'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
    MapPin,
    Check,
    X,
} from "lucide-react";
import ListSection from "@/components/ListSection";

export default function Post() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [animatedPrice, setAnimatedPrice] = useState(0);
    const priceRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const elements = containerRef.current?.querySelectorAll(".fade-up, .card-fade-up");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target as HTMLElement;
                        const index = parseInt(el.dataset.index || "0");
                        const delay = el.classList.contains("card-fade-up") ? index * 200 : 0;
                        setTimeout(() => el.classList.add("in-view"), delay);
                    }
                });
            },
            { threshold: 0.2 }
        );
        elements?.forEach(el => observer.observe(el));
        return () => elements?.forEach(el => observer.unobserve(el));
    }, []);

    useEffect(() => {
        const priceElement = priceRef.current;
        const priceObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const targetPrice = 3750;
                        const duration = 2000;
                        const startTime = Date.now();
                        
                        const animatePrice = () => {
                            const elapsed = Date.now() - startTime;
                            const progress = Math.min(elapsed / duration, 1);
                            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                            const currentPrice = Math.floor(targetPrice * easeOutQuart);
                            
                            setAnimatedPrice(currentPrice);
                            
                            if (progress < 1) {
                                requestAnimationFrame(animatePrice);
                            }
                        };
                        
                        animatePrice();
                        priceObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (priceElement) {
            priceObserver.observe(priceElement);
        }

        return () => {
            if (priceElement) {
                priceObserver.unobserve(priceElement);
            }
        };
    }, []);

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
                    <h1 className="package-fade text-white text-3xl sm:text-4xl md:text-5xl lg:text-[6.5rem] font-bold drop-shadow-lg leading-tight">
                        Komodo Island
                    </h1>
                </div>
            </section>

            <section
                ref={containerRef}
                className="max-w-7xl mx-auto py-8 sm:py-16 lg:py-32 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 lg:gap-12"
                data-index={0}
            >
                <div className="w-full lg:w-[70%] flex flex-col gap-6 lg:gap-8">
                    <div className="flex items-center gap-3 text-orange-500">
                        <MapPin size={20} />
                        <span className="font-semibold text-gray-500">Pink Beach, Komodo Island</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                        Experience Wild Nature on Komodo Island Adventure
                    </h2>
                    <div className="text-gray-700 space-y-4 text-base sm:text-lg leading-relaxed">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 text-gray-900">
                        <div>
                            <h3 className="font-semibold text-xl mb-4">Highlights</h3>
                            <ul className="space-y-3">
                                {["Dragon Sightings", "Ocean Views", "Jungle Trails"].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-gray-500 font-medium">
                                        <span className="w-2 h-2 rounded-full bg-orange-500 inline-block flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-xl mb-4">Included</h3>
                            <ul className="space-y-3 text-gray-500">
                                {["Private Boat Charter", "Guided Tours Experience", "Entry Permit Access", "Daily Meals Service", "Safety Briefing Session"].map((item) => (
                                    <li key={item} className="flex items-center gap-2">
                                        <Check size={18} className="text-orange-600 w-5 h-5 flex-shrink-0" />
                                        <span className="text-sm sm:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-xl mb-4">Not Included</h3>
                            <ul className="space-y-3 text-gray-500">
                                {["Domestic Flight", "Medical Kit", "Alcohol Purchases"].map((item) => (
                                    <li key={item} className="flex items-center gap-2">
                                        <X size={18} className="text-orange-600 flex-shrink-0" />
                                        <span className="text-sm sm:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <h3 className="font-semibold text-2xl text-gray-900">Photo Gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-lg overflow-hidden">
                        {[
                            "/Images/gallery1.webp",
                            "/Images/gallery2.webp",
                            "/Images/gallery3.webp",
                            "/Images/gallery4.webp",
                        ].map((src, i) => (
                            <div key={i} className="relative h-48 sm:h-64 md:h-72 lg:h-[18rem] w-full rounded-2xl overflow-hidden">
                                <Image
                                    src={src}
                                    alt={`Gallery photo ${i + 1}`}
                                    fill
                                    className="object-cover"
                                    priority={i < 2}
                                    sizes="(min-width: 640px) 50vw, 100vw"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full lg:w-[30%] flex flex-col gap-6 lg:gap-8">
                    <div ref={priceRef} className="bg-neutral-100 rounded-2xl border border-neutral-200 p-6 lg:p-8 flex flex-col items-center text-center">
                        <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
                            ${animatedPrice.toLocaleString()}
                        </div>
                        <div className="text-gray-700 mb-6">For 5 Days Package</div>
                        <button
                            type="button"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md py-3 transition"
                        >
                            Book Now
                        </button>
                    </div>

                    <div className="bg-neutral-100 rounded-2xl shadow-lg p-6 lg:p-8">
                        <h3 className="text-2xl font-semibold mb-6 text-gray-900 text-center">Contact Us</h3>
                        <form className="flex flex-col gap-5">
                            <label className="flex flex-col">
                                Your Name
                                <input
                                    type="text"
                                    defaultValue="John Doe"
                                    className="mt-1 border text-neutral-400 bg-white border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    placeholder="Your Name"
                                />
                            </label>

                            <label className="flex flex-col">
                                Email
                                <input
                                    type="email"
                                    defaultValue="john@doe.com"
                                    className="mt-1 border border-gray-300 bg-white text-neutral-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    placeholder="john@doe.com"
                                />
                            </label>

                            <label className="flex flex-col">
                                Phone
                                <input
                                    type="tel"
                                    defaultValue="081 234 567 89"
                                    className="mt-1 border border-gray-300 bg-white text-neutral-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    placeholder="081 234 567 89"
                                />
                            </label>

                            <label className="flex flex-col">
                                Your Message
                                <textarea
                                    rows={4}
                                    defaultValue="Your message here"
                                    className="mt-1 border border-gray-300 bg-white text-neutral-400 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    placeholder="Your message here"
                                />
                            </label>

                            <button
                                type="submit"
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md py-3 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <ListSection />

            <style jsx>{`
        .fade-up {
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