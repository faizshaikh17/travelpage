'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

const reviews = [
    { id: 1, rating: 5, text: "This was the best travel experience I’ve ever had. The beaches were stunning, the water crystal clear, and the tour was perfectly organized.", img: "/Images/person1.webp", name: "Sophia Miller", role: "Tour Guide" },
    { id: 2, rating: 5, text: "Nomad made it so easy to plan my beach getaway. Everything was taken care of, I just showed up and enjoyed paradise.", img: "/Images/person2.webp", name: "Liam Johnson", role: "Event Planner" },
    { id: 3, rating: 5, text: "From booking to the last day, everything was smooth. The team was friendly, and the location exceeded my expectations.", img: "/Images/person3.webp", name: "Olivia Brown", role: "Traveller" },
    { id: 4, rating: 5, text: "The itinerary was well-balanced between relaxation and exploration. Highly recommend Nomad to anyone looking for a stress-free holiday.", img: "/Images/person1.webp", name: "Ethan Davis", role: "Event Planner" },
    { id: 5, rating: 5, text: "Every detail was thought of, and the guide was incredibly knowledgeable about the local culture.", img: "/Images/person2.webp", name: "Ava Wilson", role: "Tour Guide" },
    { id: 6, rating: 5, text: "I can’t believe how much I got to see in just a week. Definitely booking my next trip with Nomad.", img: "/Images/person3.webp", name: "Noah Smith", role: "Traveller" },
    { id: 7, rating: 5, text: "A perfect escape from the city. The sunsets were magical, and the beach was pristine.", img: "/Images/person1.webp", name: "Isabella Jones", role: "Event Planner" },
    { id: 8, rating: 5, text: "The accommodations were fantastic, and the food was fresh and delicious every day.", img: "/Images/person2.webp", name: "Mason Taylor", role: "Tour Guide" },
    { id: 9, rating: 5, text: "Every moment felt like a dream. Nomad really knows how to make a beach vacation special.", img: "/Images/person3.webp", name: "Mia Anderson", role: "Traveller" }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const elements = document.querySelectorAll('.fade-up, .card-fade-up');

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

        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section className="relative mx-2 min-h-[300px] sm:min-h-[400px] lg:h-[500px] overflow-hidden rounded-2xl">
                <Image src="/Images/listImage3.webp" alt="hero" fill priority quality={85} className="z-0 object-cover object-left" />
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <h1 className="package-fade text-white text-3xl text-center sm:text-[5rem] font-bold drop-shadow-lg">
                        Testimonials
                    </h1>
                </div>
            </section>

            {/* Combined Journey & Stories Section */}
            <section className="relative w-full bg-[#FAFAFA] min-h-[800px] sm:min-h-[900px] lg:min-h-[1000px] overflow-hidden px-4 sm:px-8 lg:px-28 py-12 sm:py-16 lg:py-28 rounded-2xl space-y-16">
                {/* Header */}
                <div className="flex flex-col sm:flex-row w-full justify-between items-start sm:items-center gap-6 sm:gap-4 lg:gap-0">
                    <div className="flex flex-col gap-2 fade-up">
                        <p className="text-2xl sm:text-3xl lg:text-[3.5rem] font-semibold leading-tight lg:leading-[100%]">
                            Journey Shared by
                        </p>
                        <p className="text-2xl sm:text-3xl lg:text-[3.5rem] font-semibold leading-tight lg:leading-[100%]">
                            Real Explorers
                        </p>
                    </div>
                    <p className="text-sm sm:text-base lg:text-lg max-w-full sm:max-w-sm lg:max-w-lg px-0 sm:px-2 font-light leading-relaxed text-neutral-500 fade-up">
                        Their words reflect the heart of what <br />
                        we do turning travel dreams into <br />
                        memorable experiences worth <br />
                        sharing.
                    </p>
                </div>

                {/* Journey Content */}
                <div className="relative w-full px-4 sm:px-6 lg:px-28 py-16 sm:py-24 lg:py-32 flex flex-col lg:flex-row items-start gap-12">
                    <div className="relative w-full h-[25rem] aspect-square max-w-[35rem] rounded-2xl overflow-hidden">
                        <Image
                            src="/Images/surfer.webp"
                            alt="video thumbnail"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 rounded-full bg-orange-500 opacity-40 animate-ping"></div>
                                <div className="relative bg-orange-500 rounded-full p-6 cursor-pointer hover:scale-105 transition-transform">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="white"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quote */}
                    <div className="w-full lg:w-1/2 space-y-4 fade-up">
                        <p className="text-2xl sm:text-3xl lg:text-4xl text-neutral-500 leading-snug">
                            `This journey was more than a vacation it was a life changing experience This journey was more than a vacation it was a life changing experience`
                        </p>
                        <p className="text-2xl font-semibold">Emily Carter</p>
                        <p className="text-lg text-neutral-600">Solo Traveller</p>
                    </div>
                </div>

                {/* Stories Header */}
                <div className="flex flex-col text-center items-center fade-up">
                    <p className="text-2xl sm:text-3xl lg:text-[3.5rem] font-semibold leading-tight">
                        Stories That Inspire Every
                    </p>
                    <p className="text-2xl sm:text-3xl lg:text-[3.5rem] font-semibold leading-tight">
                        New Journey
                    </p>
                </div>

                {/* Stories Cards */}
                <div className="relative">
                    <div className="flex flex-col sm:flex-row gap-6 overflow-hidden">
                        {reviews.slice(currentIndex, currentIndex + 3).map((review, idx) => (
                            <div
                                key={review.id}
                                data-index={idx}
                                className="flex flex-col border border-neutral-200 justify-between bg-white rounded-2xl p-6 w-full sm:w-1/3 min-w-[260px] card-fade-up"
                            >
                                <div className="flex text-yellow-500 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} size={18} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="text-neutral-600 text-base sm:text-lg mb-6 leading-relaxed">
                                    {review.text}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={review.img}
                                            alt={review.name}
                                            width={40}
                                            height={40}
                                            unoptimized
                                            className="rounded-full h-16 w-16"
                                        />
                                        <div className="space-y-1">
                                            <p className="text-lg sm:text-xl font-medium">{review.name}</p>
                                            <p className="text-neutral-500">{review.role}</p>
                                        </div>
                                    </div>
                                    <Quote size={28} className="text-neutral-300" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx * 3)}
                                className={`w-3 h-3 rounded-full transition-colors ${currentIndex / 3 === idx ? "bg-orange-500" : "bg-neutral-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

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
