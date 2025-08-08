'use client';

import Image from "next/image";
import { Check, Sun, UserRound, Star, Camera, Umbrella, ThumbsUp } from "lucide-react";
import Questions from "@/components/Questions";
import { useEffect, useRef } from "react";

const features = [
  { id: "01", title: "Diving and Snorkeling", description: "The travel package includes lending services for diving and snorkeling equipment.", icon: <Sun size={20} className="text-orange-500" /> },
  { id: "02", title: "Professional Tour Guide", description: "A professional tour guide is someone who can make your travel experience more enjoyable.", icon: <UserRound size={20} className="text-orange-500" /> },
  { id: "03", title: "Memorable", description: "Every moment of yours is captured by professional photography staff provided by travel.", icon: <Camera size={20} className="text-orange-500" /> },
  { id: "04", title: "Easy and Comfort", description: "Travel agency provides complete and reliable travel packages lorem ipsum slopedia margin large.", icon: <Star size={20} className="text-orange-500" /> },
  { id: "05", title: "Reliable Service", description: "We respond fast, stay clear, and support you before, during, and after your trip.", icon: <ThumbsUp size={20} className="text-orange-500" /> },
  { id: "06", title: "Local Expertise", description: "We partner with trusted locals to offer you authentic experiences and hidden gems.", icon: <Umbrella size={20} className="text-orange-500" /> },
];

const packages = [
  { title: "Solo Journey", summary: "Ideal for solo travelers seeking cultural, mindful escapes.", price: "$899", per: "/ Person", includes: ["3-night stay – Boutique local hotel", "Guided tours – Cultural city exploration", "Daily breakfast – Every morning", "Airport pickup – Private transfer", "Support line – 24/7 traveler assistance"], image: "/Images/dest1.webp" },
  { title: "Couple Retreat", summary: "Great for couples needing romantic, peaceful getaways.", price: "$1,750", per: "/ 2 Persons", includes: ["4-night resort stay – With ocean view", "Couples massage – relaxing session", "Private dinner – Sunset dining", "Airport transfers – Round-trip included", "Guided day trip – Nature or heritage"], image: "/Images/dest2.webp", recommended: true },
  { title: "Family Adventure", summary: "Best for families seeking safe, exciting holidays.", price: "$2,999", per: "/ 4 Persons", includes: ["5-night villa stay – With pool & garden", "Kid-friendly tours – Interactive learning", "Daily meals – Breakfast and dinner", "Airport transfers – Large vehicle service", "Travel insurance – Full family coverage"], image: "/Images/dest3.webp" },
];

export default function Page() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const nodes = Array.from(root.querySelectorAll<HTMLElement>(".fade-up, .card-fade-up, .package-fade-up"));
    if (!nodes.length) return;
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        const idx = Number(el.dataset.index ?? 0);
        const baseDelay = el.classList.contains("card-fade-up") || el.classList.contains("package-fade-up") ? 140 : 0;
        const delay = baseDelay ? idx * baseDelay : 0;
        setTimeout(() => el.classList.add("in-view"), delay);
        obs.unobserve(el);
      });
    }, { threshold: 0.18, root: null });
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      <section className="relative mx-2 min-h-[300px] sm:min-h-[400px] lg:h-[500px] overflow-hidden rounded-2xl">
        <Image src="/Images/hero.png" alt="hero" fill priority quality={85} className="z-0 object-cover object-left" />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h1 className="package-fade text-white text-3xl sm:text-[6.5rem] font-bold drop-shadow-lg">Package</h1>
        </div>
      </section>

      <section className="mx-auto px-4 sm:px-6 lg:px-30 py-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex py-14 flex-col text-center items-center fade-up sm:col-span-2 lg:col-span-3" data-index={0}>
          <p className="text-2xl sm:text-3xl lg:text-[3.5rem] font-semibold leading-tight lg:leading-[100%]">Plan Your Escape Today</p>
        </div>

        {packages.map((pkg, idx) => (
          <div key={idx} data-index={idx} className="group package-fade-up relative w-full rounded-2xl border border-neutral-300 overflow-hidden shadow-md bg-white">
            <div className="relative h-56 w-full overflow-hidden">
              <Image src={pkg.image} alt={pkg.title} fill className="object-cover rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-1" priority quality={85} />
              {pkg.recommended && <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-xl shadow-md z-20">Recommended</span>}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 flex flex-col justify-between p-4 sm:p-6">
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-white text-2xl sm:text-3xl font-semibold">{pkg.title}</p>
                  <p className="text-white text-sm sm:text-base">{pkg.summary}</p>
                </div>
                <div className="flex items-end">
                  <span className="text-white text-3xl sm:text-5xl font-bold">{pkg.price}</span>
                  <span className="ml-1 text-xs sm:text-sm text-white/80 font-normal">{pkg.per}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between py-6 px-4 sm:px-6 space-y-6 sm:space-y-10">
              <div>
                <h4 className="text-lg sm:text-2xl font-semibold text-black">What’s Include?</h4>
                <ul className="text-neutral-600 list-none space-y-2 sm:space-y-3 mt-2">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 sm:gap-3">
                      <Check className="text-orange-500" size={18} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-auto bg-orange-500 text-white font-semibold rounded-lg py-2 sm:py-3 px-3 sm:px-4 hover:bg-orange-600 transition">Choose Package</button>
            </div>
          </div>
        ))}
      </section>

      <section className="w-full space-y-6 mx-auto px-4 sm:px-6 lg:px-30 py-16">
        <div className="flex flex-col sm:flex-row py-10 w-full justify-between items-start sm:items-center gap-6 sm:gap-4 lg:gap-0">
          <div className="flex flex-col gap-2 fade-up" data-index={100}>
            <p className="text-2xl sm:text-3xl lg:text-[3.5rem] font-semibold leading-tight lg:leading-[100%]">Your Journey, Our</p>
            <p className="text-2xl sm:text-3xl lg:text-[3.5rem] font-semibold leading-tight lg:leading-[100%]">Priority Always</p>
          </div>
          <p className="text-sm sm:text-base lg:text-lg max-w-full sm:max-w-sm lg:max-w-lg font-light leading-relaxed text-neutral-500 fade-up" data-index={101}>
            Nomad is built on a passion for <br className="hidden sm:block" /> exploration and a commitment to <br className="hidden sm:block" /> delivering unforgettable experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          {features.slice(0, 4).map((feature, idx) => (
            <div key={feature.id} data-index={idx} className="card-fade-up w-full bg-white border border-neutral-200 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col gap-3 sm:gap-4">
              <div className="flex w-full items-center justify-between">
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center border border-neutral-200 rounded-full bg-neutral-100">{feature.icon}</div>
                <p className="text-base sm:text-lg font-medium text-black">{feature.id}</p>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl w-full font-semibold">{feature.title}</h3>
              <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}

          <div data-index={4} className="card-fade-up bg-white border border-neutral-200 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col gap-3 sm:gap-4">
            <div className="flex w-full items-center justify-between">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center border border-neutral-200 rounded-full bg-neutral-100">{features[4].icon}</div>
              <p className="text-base sm:text-lg font-medium text-black">{features[4].id}</p>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{features[4].title}</h3>
            <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">{features[4].description}</p>
          </div>

          <div className="relative card-fade-up rounded-2xl overflow-hidden col-span-1 sm:col-span-2" data-index={5}>
            <Image src="/Images/itenary.webp" alt="Itinerary" fill className="object-cover rounded-2xl" quality={85} priority />
          </div>

          <div data-index={6} className="card-fade-up bg-white border border-neutral-200 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col gap-3 sm:gap-4">
            <div className="flex w-full items-center justify-between">
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center border border-neutral-200 rounded-full bg-neutral-100">{features[5].icon}</div>
              <p className="text-base sm:text-lg font-medium text-black">{features[5].id}</p>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{features[5].title}</h3>
            <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">{features[5].description}</p>
          </div>
        </div>
      </section>

      <Questions />

      <style jsx global>{`
        .fade-up, .card-fade-up, .package-fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 700ms cubic-bezier(.16,.84,.3,1), transform 700ms cubic-bezier(.16,.84,.3,1);
          will-change: opacity, transform;
        }
        .fade-up.in-view, .card-fade-up.in-view, .package-fade-up.in-view {
          opacity: 1;
          transform: translateY(0);
        }
        @media (max-width: 640px) {
          :root {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        }

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
    </div>

  );
}
