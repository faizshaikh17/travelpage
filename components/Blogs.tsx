'use client'
import Image from "next/image";
import { useEffect, useRef } from "react";
import { CalendarDays, MapPin } from "lucide-react";

const blogPosts = [
  {
    date: "July 9, 2025",
    category: "Travel",
    title: "Why Booking Through a Travel Agency Makes Sense",
    summary:
      "Planning a vacation may seem easy with so many online options available today.…",
    image: "/Images/listImage1.webp",
  },
  {
    date: "July 9, 2025",
    category: "Travel",
    title: "Let a Travel Agency Turn Your Dream Vacation Into Reality",
    summary:
      "That dream trip you’ve been imagining? A travel agency can help make it…",
    image: "/Images/listImage2.webp",
  },
  {
    date: "July 8, 2025",
    category: "Travel",
    title: "Why Travel Agencies Are Still Relevant in the Digital Age",
    summary:
      "In today’s digital world, you might wonder if travel agencies are still needed.…",
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
      className="relative w-full min-h-[800px] space-y-10 sm:space-y-16 lg:space-y-20 sm:min-h-[900px] lg:h-[1000px] overflow-hidden px-4 sm:px-8 lg:px-28 py-20 sm:py-28 lg:py-28 rounded-2xl"
    >
      {/* Heading */}
      <div className="flex flex-col sm:flex-row w-full justify-between items-start sm:items-center gap-6 sm:gap-10">
        <p className="text-2xl sm:text-3xl lg:text-[3.5rem] font-semibold leading-tight lg:leading-[100%] fade-up">
          From Our Blog
          <br />
          <span className="text-sm sm:text-base lg:text-lg max-w-full mt-4 block sm:max-w-sm lg:max-w-lg font-light leading-relaxed text-neutral-500">
            Inspiration, Tips & Stories to Help You Travel Better
          </span>
        </p>
        <button className="py-3 px-6 text-sm sm:text-base font-medium border border-neutral-200 rounded-lg hover:bg-orange-600 hover:text-white hover:border-orange-500 transition-all duration-200 whitespace-nowrap fade-up">
          View more
        </button>
      </div>

      {/* Blog Cards */}
      <div className="flex flex-col sm:flex-col lg:flex-row gap-10 overflow-x-auto lg:overflow-x-visible">
        {blogPosts.map((post, idx) => (
          <div
            key={idx}
            data-index={idx}
            className="group card-fade-up relative w-full sm:w-full lg:w-full lg:max-w-sm rounded-2xl border border-neutral-300 overflow-hidden shadow-md bg-white flex-shrink-0"
          >
            {/* Image */}
            <div className="relative h-96 w-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-1"
                priority
                quality={85}
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between py-6 px-6 space-y-5">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-neutral-500">
                  <span className="flex items-center gap-2">
                    <CalendarDays className="text-orange-500" size={16} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="text-orange-500" size={16} />
                    {post.category}
                  </span>
                </div>

                <p className="text-2xl font-semibold text-neutral-800 leading-tight group-hover:text-orange-600 transition-colors duration-200">
                  {post.title}
                </p>
                <p className="text-base text-neutral-600 leading-relaxed">
                  {post.summary}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Animation Style */}
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
