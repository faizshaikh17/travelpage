'use client';

import Image from "next/image";
import { CalendarDays, Star, Umbrella, Quote } from "lucide-react";
import BookNow from "@/components/BookNow";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const destinations = [
  { country: "🇰🇿 Kazakhstan", title: "Caspian Sea Beach, Aktau", description: "A Unique Seaside Escape in Central Asia", date: "12 Jun – 20 Jun", rating: "5.0 Rating", type: "Beach", price: "$1,580", duration: "9 day package", image: "/Images/listImage1.webp" },
  { country: "🇮🇩 Indonesia", title: "Pink Beach, Komodo Island", description: "A Rare Natural Wonder with Blush-Toned Sand", date: "12 Jun – 20 Jun", rating: "5.0 Rating", type: "Beach", price: "$2,550", duration: "7 day package", image: "/Images/listImage2.webp" },
  { country: "🇮🇩 Indonesia", title: "Tanjung Bira, South Sulawesi", description: "White Sands and Turquoise Waters Away from the Crowds", date: "12 Jun – 20 Jun", rating: "5.0 Rating", type: "Beach", price: "$3,750", duration: "5 day package", image: "/Images/listImage3.webp" },
  { country: "🇮🇩 Indonesia", title: "Kelingking Beach, Bali", description: "Iconic cliffs, blue waters, panoramic beauty.", date: "12 Jun – 20 Jun", rating: "5.0 Rating", type: "Beach", price: "$3,420", duration: "5 day package", image: "/Images/listImage3.webp" },
  { country: "🇹🇭 Thailand", title: "Haad Yuan, Surat Thani", description: "Quiet beach with relaxed atmosphere, gentle waves.", date: "12 Jun – 20 Jun", rating: "5.0 Rating", type: "Beach", price: "$2,950", duration: "5 day package", image: "/Images/listImage2.webp" },
  { country: "🇦🇺 Australia", title: "Whiteheaven, Queensland", description: "Famous for its white sand and turquoise sea.", date: "12 Jun – 20 Jun", rating: "5.0 Rating", type: "Beach", price: "$4,750", duration: "5 day package", image: "/Images/listImage1.webp" },
  { country: "🇵🇭 Philippines", title: "Puka Beach, Aklan", description: "Natural charm and fewer crowds, local appeal.", date: "12 Jun – 20 Jun", rating: "5.0 Rating", type: "Beach", price: "$4,890", duration: "5 day package", image: "/Images/listImage1.webp" },
  { country: "🇵🇭 Philippines", title: "Corong Corong, Palawan", description: "Quiet spot for sunset views, peaceful vibe.", date: "12 Jun – 20 Jun", rating: "5.0 Rating", type: "Beach", price: "$5,120", duration: "5 day package", image: "/Images/listImage2.webp" },
  { country: "🇮🇩 Indonesia", title: "Padar Beach, Nusa Tenggara", description: "Stunning hilltop beach panoramas, perfect hike.", date: "12 Jun – 20 Jun", rating: "5.0 Rating", type: "Beach", price: "$5,550", duration: "5 day package", image: "/Images/listImage3.webp" }
];

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

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll(".fade-up, .card-fade-up");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const index = parseInt(el.dataset.index || "0");
          const delay = el.classList.contains("card-fade-up") ? index * 200 : 0;
          setTimeout(() => el.classList.add("in-view"), delay);
        }
      });
    }, { threshold: 0.2 });
    elements?.forEach((el) => observer.observe(el));
    return () => elements?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <>
      <section className="relative mx-2 min-h-[300px] sm:min-h-[400px] lg:h-[500px] overflow-hidden rounded-2xl">
        <Image src="/Images/dest4.webp" alt="hero" fill priority quality={85} className="z-0 object-cover object-left" />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h1 className="package-fade text-white text-3xl sm:text-[6.5rem] font-bold drop-shadow-lg">Destination</h1>
        </div>
      </section>

      <section ref={containerRef} className="relative w-full space-y-8 sm:space-y-12 lg:space-y-16 px-4 sm:px-8 lg:px-28 py-16 sm:py-24 lg:py-36 rounded-2xl">
        <div className="flex flex-col sm:flex-row w-full justify-between items-start sm:items-center gap-6">
          <p className="text-2xl sm:text-3xl lg:text-[3.5rem] font-semibold leading-tight lg:leading-[100%] fade-up">Where Will Your <br /> next Beach be?</p>
          <p className="text-sm sm:text-base lg:text-lg max-w-full sm:max-w-sm lg:max-w-lg font-light leading-relaxed text-neutral-500 fade-up">With Nomad, choosing your next coastal escape is easy. We curate destinations that mix beauty, relaxation, and culture in one trip.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {destinations.map((item, idx) => (
            <div key={idx} data-index={idx} className="card-fade-up relative w-full rounded-2xl p-4 sm:p-5 border border-neutral-300 overflow-hidden shadow-md bg-white">
              <div className="relative h-48 sm:h-52 lg:h-56 w-full">
                <Image src={item.image} alt={item.title} fill className="object-cover rounded-2xl" priority quality={85} />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white text-xs sm:text-sm font-medium text-black px-2 sm:px-3 py-1 rounded-md shadow-sm">{item.country}</div>
              </div>
              <div className="flex flex-col justify-between py-3 sm:py-4 space-y-3 sm:space-y-4">
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-xl sm:text-2xl font-semibold text-neutral-800 leading-tight">{item.title}</p>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">{item.description}</p>
                  <div className="text-xs flex flex-wrap items-center gap-1 sm:gap-2 text-neutral-600">
                    <span className="flex items-center gap-1"><CalendarDays size={14} className="sm:w-4 sm:h-4 text-black" /><span>{item.date}</span></span>
                    <span className="text-neutral-400">|</span>
                    <span className="flex items-center gap-1"><Star size={14} className="sm:w-4 sm:h-4 text-black" /><span>{item.rating}</span></span>
                    <span className="text-neutral-400">|</span>
                    <span className="flex items-center gap-1"><Umbrella size={14} className="sm:w-4 sm:h-4 text-black" /><span>{item.type}</span></span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
                  <div className="text-neutral-900 font-semibold text-sm sm:text-base leading-tight">{item.price}<br /><span className="text-xs sm:text-sm text-neutral-500 font-normal">{item.duration}</span></div>
                  <Link href={'/home'} className="w-full sm:w-auto py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base font-medium border border-neutral-200 rounded-lg hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all duration-200">Book now</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BookNow />

      <section ref={containerRef} className="relative w-full space-y-12 sm:space-y-16 lg:space-y-24 overflow-hidden px-4 sm:px-6 lg:px-28 py-16 sm:py-24 lg:py-32 bg-[#FAFAFA] rounded-2xl">
        <div className="flex flex-col text-center items-center fade-up">
          <p className="text-2xl sm:text-3xl lg:text-[3.5rem] font-semibold leading-tight">Uncover The Beauty Of Your</p>
          <p className="text-2xl sm:text-3xl lg:text-[3.5rem] font-semibold leading-tight">Next Destination</p>
        </div>
        <div className="relative">
          <div className="flex flex-col sm:flex-row gap-6 overflow-hidden">
            {reviews.slice(currentIndex, currentIndex + 3).map((review) => (
              <div key={review.id} className="flex flex-col border border-neutral-200 justify-between bg-white rounded-2xl p-6 w-full sm:w-1/3 min-w-[260px]">
                <div className="flex text-yellow-500 mb-4">{[...Array(review.rating)].map((_, i) => (<Star key={i} size={18} fill="currentColor" />))}</div>
                <p className="text-neutral-600 text-base sm:text-lg mb-6 leading-relaxed">{review.text}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image src={review.img} alt={review.name} width={40} height={40} unoptimized className="rounded-full h-16 w-16" />
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
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, idx) => (
              <button key={idx} onClick={() => setCurrentIndex(idx * 3)} className={`w-3 h-3 rounded-full transition-colors ${currentIndex / 3 === idx ? "bg-orange-500" : "bg-neutral-300"}`} />
            ))}
          </div>
        </div>
      </section>
      <style jsx global>{`
  .package-fade {
    opacity: 0;
    transform: translateY(60px);
    animation: fadeUp 1s ease-out forwards;
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
