'use client'

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const sliderImages = [
  "/Images/smilingMan.webp",
  "/Images/diver.webp",
  "/Images/surfer.webp",
  "/Images/smilingMan.webp",
  "/Images/diver.webp",
  "/Images/surfer.webp",
]

const groupSize = 3

export default function BookNow() {
  const [currentGroup, setCurrentGroup] = useState(0)
  const totalGroups = Math.ceil(sliderImages.length / groupSize)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroup((prev) => (prev + 1) % totalGroups)
    }, 3000)
    return () => clearInterval(interval)
  }, [totalGroups])

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll('.fade-up')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.2 }
    )
    elements?.forEach((el) => observer.observe(el))
    return () => elements?.forEach((el) => observer.unobserve(el))
  }, [])

  const startIndex = currentGroup * groupSize
  let currentImages = sliderImages.slice(startIndex, startIndex + groupSize)

  if (currentImages.length < groupSize) {
    currentImages = [...currentImages, ...sliderImages.slice(0, groupSize - currentImages.length)]
  }

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[800px] sm:min-h-[900px] lg:h-[1000px] bg-gradient-to-l from-1 to-transparent overflow-hidden px-4 sm:px-8 lg:px-28 py-12 sm:py-16 lg:py-28 flex flex-col items-center text-center"
    >
      <Image
        src="/Images/listImage1.webp"
        alt="hero"
        fill
        className="z-0 object-cover"
        priority
        quality={85}
      />
      <div className="absolute inset-0 bg-white/10 z-0" />

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center space-y-10">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white fade-up leading-tight">
          Find Your Perfect <br /> Destination in Minutes
        </h2>

        <button className="py-3 px-6 text-base font-medium bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition fade-up">
          Book now
        </button>

        <div className="w-full mt-40 fade-up">
          <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-4 gap-4">
            {currentImages.map((src, index) => (
              <div
                key={index}
                className="relative w-full sm:w-1/3 h-[250px] sm:h-[300px] rounded-xl overflow-hidden border border-white/20"
              >
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: totalGroups }).map((_, index) => (
              <span
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentGroup ? 'bg-white' : 'bg-white/40'}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .fade-up {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-up.in-view {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  )
}
