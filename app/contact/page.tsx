'use client'
import { useEffect, useRef } from "react";
import {
  MessageSquare,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";

export default function ContactSection() {
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

  const cards = [
    {
      icon: <MessageSquare size={18} className="text-orange-500" />,
      title: "Send Message",
      desc: "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      icon: <MapPin size={18} className="text-orange-500" />,
      title: "Our Office",
      desc: "HQ – 1234 Moving Lane, Suite 567, Cityville, ST 12345, United States.",
    },
    {
      icon: <Phone size={18} className="text-orange-500" />,
      title: "Let's Talk",
      desc: "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      icon: <MessageCircle size={18} className="text-orange-500" />,
      title: "Chat to Us",
      desc: "Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
  ];

  return (
    <>
      <section className="relative mx-2 min-h-[300px] sm:min-h-[400px] lg:h-[500px] overflow-hidden rounded-2xl">
        <Image
          src="/Images/contact.webp"
          alt="hero"
          fill
          priority
          quality={85}
          className="z-0 object-cover object-left"
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4 text-center">
          <h1 className="package-fade text-white text-3xl sm:text-[6.5rem] font-bold drop-shadow-lg leading-tight">
            Contact
          </h1>
        </div>
      </section>
      <section ref={containerRef} className="max-w-7xl mx-auto my-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 fade-up" data-index={0}>
            <h2 className="text-5xl sm:text-6xl font-bold mb-4">We’re here to make travel easier</h2>
            <p className="mb-10 text-base sm:text-lg text-gray-500">
              Connect with us via chat, email, or phone—we’ll respond promptly with options that fit your needs and budget.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="card-fade-up flex flex-col gap-3"
                  data-index={i + 1}
                >
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-neutral-100">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="text-base sm:text-lg text-gray-600">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 bg-neutral-50 p-6 sm:p-8 rounded-xl shadow-md">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  defaultValue="John Doe"
                  className="w-full px-4 py-3 rounded-md bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue="john@doe.com"
                  className="w-full px-4 py-3 rounded-md bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-1 font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  defaultValue="081 234 567 89"
                  className="w-full px-4 py-3 rounded-md bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Your message here"
                  className="w-full px-4 py-3 rounded-md bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-orange-500 text-white font-semibold py-3 rounded-md hover:bg-orange-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="rounded-xl m-8 sm:m-10 h-[40rem] overflow-hidden shadow-md mx-4 sm:mx-10 lg:mx-auto max-w-7xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086822481323!2d-122.41941508468104!3d37.7749297797594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c247a94b3%3A0x76f46c60a7f1f92d!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sin!4v1688905861834!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map Location"
        />
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
