'use client'
import Image from "next/image";
import { useEffect, useRef } from "react";
import { User, Leaf, ShieldCheck, Check } from "lucide-react";
import Link from "next/link";

const cards = [
    {
        title: "Trip Planning",
        desc: "We create personalized itineraries that fit your style, goals, and budget perfectly.",
        points: ["Custom Itinerary", "Local Insight", "Budget Friendly", "Expert Advice"],
        img: "/Images/services1.webp",
    },
    {
        title: "Flight Booking",
        desc: "Get the best routes and fares, handled fast and stress-free by our expert team.",
        points: ["Flexible Options", "Global Access", "Price Monitor", "Instant Booking"],
        img: "/Images/services22.webp",
    },
    {
        title: "Hotel Selection",
        desc: "Stay in handpicked accommodations that match your travel vibe and comfort needs.",
        points: ["Trusted Partners", "Special Rates", "Great Locations", "Easy Changes"],
        img: "/Images/services3.webp",
    },
    {
        title: "Tour Package",
        desc: "Explore curated group or solo experiences designed to immerse you fully.",
        points: ["Local Culture", "Guided Tours", "All Inclusive", "Hassle Free"],
        img: "/Images/services4.webp",
    },
    {
        title: "Travel Insurance",
        desc: "Travel safely with customizable insurance plans that suit every journey.",
        points: ["Health Coverage", "Trip Protection", "24/7 Support", "Easy Claims"],
        img: "/Images/services5.webp",
    },
    {
        title: "Visa Assistance",
        desc: "We simplify the visa process with reliable guidance and document support.",
        points: ["Timely Help", "Clear Steps", "Expert Review", "Secure Filling"],
        img: "/Images/services6.webp",
    },
];

export default function Services() {
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
                    src="/Images/services.webp"
                    alt="hero"
                    fill
                    priority
                    quality={85}
                    className="z-0 object-cover object-left"
                />
                <div className="absolute inset-0 z-10 flex items-center justify-center px-4 text-center">
                    <h1 className="package-fade text-white text-3xl sm:text-[6rem] font-bold drop-shadow-lg leading-tight">
                        Services
                    </h1>
                </div>
            </section>

            {/* Guided by Passion And Purpose Section */}
            <section
                ref={containerRef}
                className="mx-auto px-6 sm:px-30 py-16 flex flex-col lg:flex-row items-center gap-12"
            >
                {/* Left content */}
                <div className="flex-1">
                    <h2 className="text-6xl font-bold mb-4 fade-up" data-index={0}>
                        Guided by Passion And Purpose
                    </h2>
                    <p className="text-lg text-gray-700 mb-10 fade-up" data-index={1}>
                        At Nomad, we believe travel is more than a destination—it’s a journey to <br /> discover, connect, and grow. Our values reflect the heart of every trip <br /> we plan.
                    </p>

                    {/* Points */}
                    <div className="space-y-8">
                        <div className="flex items-start gap-6 fade-up" data-index={2}>
                            <div className="flex-shrink-0 w-16 h-16 rounded-full border border-neutral-200 bg-neutral-100 flex items-center justify-center text-white">
                                <User size={18} className=" text-orange-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-1">Human Connection</h3>
                                <p className="text-gray-600">
                                    We prioritize relationships—with clients, locals, and cultures—to <br /> create deeper travel experiences.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 fade-up" data-index={3}>
                            <div className="flex-shrink-0 w-16 h-16 rounded-full border border-neutral-200 bg-neutral-100  flex items-center justify-center text-white">
                                <Leaf size={18} className=" text-orange-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-1">Sustainable Travel</h3>
                                <p className="text-gray-600">
                                    We care about the planet and partner with eco-conscious providers <br /> to minimize our footprint.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 fade-up" data-index={4}>
                            <div className="flex-shrink-0 w-16 h-16 rounded-full border border-neutral-200 bg-neutral-100  flex items-center justify-center text-white">
                                <ShieldCheck size={18} className=" text-orange-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-1">Genuine Service</h3>
                                <p className="text-gray-600">
                                    We go above and beyond to ensure each trip is smooth, safe, <br /> memorable, exciting, well-planned, and personalized.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right image */}
                <div
                    className="flex-shrink-0 w-[36rem] h-[34rem] relative rounded-xl overflow-hidden shadow-lg fade-up"
                    data-index={5}
                >
                    <Image
                        src="/Images/services2.webp"
                        alt="Nomad Services"
                        fill
                        className="object-cover"
                        priority
                        quality={85}
                    />
                </div>
            </section>

            {/* Explore The World With Nomad + Cards */}
            <section
                ref={containerRef}
                className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-28 py-16 sm:py-24 lg:py-32 bg-[#FAFAFA] rounded-2xl"
            >
                <div className="flex flex-col text-center items-center fade-up space-y-8 mb-16">
                    <p className="text-2xl sm:text-3xl lg:text-[3.5rem] font-semibold leading-tight lg:leading-[100%]">
                        Explore The World With Nomad
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg text-neutral-600 max-w-2xl">
                        Nomad offers full-service travel solutions to simplify your journey. We <br /> handle the details so you can focus on the adventure ahead.
                    </p>
                </div>

                {/* 6 Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map(({ title, desc, points, img }, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl shadow-lg p-6 flex flex-col"
                        >
                            <div className="relative w-full h-72 rounded-2xl overflow-hidden mb-6">
                                <Image
                                    src={img}
                                    alt={title}
                                    fill
                                    className="object-cover"
                                    priority={i < 3}
                                    quality={80}
                                />
                            </div>

                            <h3 className="text-2xl font-semibold mb-3">{title}</h3>

                            <p className="text-gray-600  mb-6 flex-grow">{desc}</p>

                            <div className="grid grid-cols-2 gap-y-2 gap-x-6 mb-6">
                                {points.map((point, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <Check size={18} className="text-orange-500 flex-shrink-0" />
                                        <span className="text-gray-700">{point}</span>
                                    </div>
                                ))}
                            </div>
                            <Link
                                href="/services"
                                className="inline-block bg-orange-500 text-white text-center px-5 py-2.5 rounded-md hover:bg-orange-600 transition-colors duration-200"
                            >
                                Learn More
                            </Link>

                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
