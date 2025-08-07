'use client';

import { useEffect, useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What services does your travel agency offer?',
    answer: 'We offer a wide range of travel services, including flight bookings, hotel reservations, holiday packages, customized itineraries, visa assistance, travel insurance, and tour arrangements for both domestic and international destinations.'
  },
  {
    question: 'Can I customize my travel package?',
    answer: 'Yes, we specialize in creating personalized travel experiences tailored to your preferences and budget.'
  },
  {
    question: 'Do you offer travel insurance?',
    answer: 'Absolutely. We provide comprehensive travel insurance plans to ensure your peace of mind during your journey.'
  },
  {
    question: 'What happens if my flight is delayed or canceled?',
    answer: 'We assist with alternative arrangements and support you through the process to minimize any disruption to your trip.'
  },
  {
    question: 'How do I make a booking?',
    answer: 'Bookings can be made online, over the phone, or by visiting our office. We’ll guide you every step of the way.'
  },
  {
    question: 'Do I need to pay in full at the time of booking?',
    answer: 'Not always. We offer flexible payment options depending on the package and the time left before departure.'
  },
  {
    question: 'Can I cancel or reschedule my trip?',
    answer: 'Yes. Cancellation and rescheduling policies vary by package, but we’ll always help you with the process.'
  }
];

export default function Questions() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            elements?.forEach((el) => el.classList.add('in-view'));
          }
        });
      },
      { threshold: 0.2 }
    );

    elements?.forEach((el) => observer.observe(el));
    return () => elements?.forEach((el) => observer.unobserve(el));
  }, []);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <>
      <section
        ref={containerRef}
        className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-28 py-16 sm:py-24 lg:py-32 bg-[#FAFAFA] rounded-2xl"
      >
        <div className="flex flex-col text-center items-center fade-up space-y-8">
          <p className="text-2xl sm:text-3xl lg:text-[3.5rem] font-semibold leading-tight lg:leading-[100%]">
            Frequently Asked Questions
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 max-w-2xl">
            From quick answers to in-depth guidance, we’re committed to making sure you feel confident
          </p>
        </div>

        <div className="fade-up max-w-5xl mx-auto mt-12 sm:mt-16 lg:mt-24 divide-y divide-neutral-300">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="py-6">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left text-sm sm:text-base lg:text-2xl font-semibold text-black"
                >
                  <span className="flex-1 pr-4">{item.question}</span>
                  {isOpen ? (
                    <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-black shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-black shrink-0" />
                  )}
                </button>

                <div
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: isOpen ? '300px' : '0px',
                    opacity: isOpen ? 1 : 0,
                    marginTop: isOpen ? '0.5rem' : '0rem'
                  }}
                >
                  <div className="text-sm sm:text-base lg:text-lg text-neutral-600">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

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
      `}</style>
      </section>
    </>
  );
}
