'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function FullPageFooter() {
    return (
        <div className="relative w-full min-h-[1000px] pb-6 text-white overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Images/dest1.webp"
                    alt="Full Background"
                    fill
                    className="object-cover object-top"
                    quality={95}
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent" />
            </div>

            <div className="relative z-10 flex flex-col justify-between h-full">
                <h1 className="text-[20vw] sm:text-[26vw] text-center font-extrabold leading-none tracking-wide">
                    TRAVEL
                </h1>

                <footer className="bg-[#1B1917] mt-40 mx-4 sm:mx-6 rounded-2xl relative z-10">
                    <div className="mx-auto px-4 sm:px-6 lg:px-10 py-10 flex flex-col gap-10">
                        <div className="flex flex-col lg:flex-row justify-between gap-10 text-sm">
                            <div className="flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-16 w-full lg:w-auto">
                                <div className="flex flex-col gap-2 min-w-[120px]">
                                    <h3 className="text-lg text-neutral-500 uppercase mb-2">General</h3>
                                    <ul className="space-y-3 sm:space-y-4 text-base">
                                        <li><Link href="/home" className="hover:text-orange-500 transition-colors duration-300">Home</Link></li>
                                        <li><Link href="/home" className="hover:text-orange-500 transition-colors duration-300">About Us</Link></li>
                                        <li><Link href="/home" className="hover:text-orange-500 transition-colors duration-300">How it Works</Link></li>
                                        <li><Link href="/home" className="hover:text-orange-500 transition-colors duration-300">Testimonials</Link></li>
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-2 min-w-[120px]">
                                    <h3 className="text-lg text-neutral-500 uppercase mb-2">About</h3>
                                    <ul className="space-y-3 sm:space-y-4 text-base">
                                        <li><Link href="/home" className="hover:text-orange-500 transition-colors duration-300">Blog</Link></li>
                                        <li><Link href="/home" className="hover:text-orange-500 transition-colors duration-300">Shop</Link></li>
                                        <li><Link href="/home" className="hover:text-orange-500 transition-colors duration-300">Culture</Link></li>
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-2 min-w-[120px]">
                                    <h3 className="text-lg text-neutral-500 uppercase mb-2">Resource</h3>
                                    <ul className="space-y-3 sm:space-y-4 text-base">
                                        <li><Link href="/home" className="hover:text-orange-500 transition-colors duration-300">Free Content</Link></li>
                                        <li><Link href="/home" className="hover:text-orange-500 transition-colors duration-300">Glossary</Link></li>
                                        <li><Link href="/home" className="hover:text-orange-500 transition-colors duration-300">Tutorials</Link></li>
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-2 min-w-[120px]">
                                    <h3 className="text-lg text-neutral-500 uppercase mb-2">Contact</h3>
                                    <ul className="space-y-3 sm:space-y-4 text-base">
                                        <li><Link href="/home" className="hover:text-orange-500 transition-colors duration-300">3891 Ranchview Dr.</Link></li>
                                        <li><Link href="/home" className="hover:text-orange-500 transition-colors duration-300">Richardson, California 62639</Link></li>
                                        <li><Link href="/home" className="hover:text-orange-500 transition-colors duration-300">+1 283 3492 1209</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex flex-col items-center lg:items-end space-y-4 w-full lg:w-auto">
                                <h4 className="text-neutral-500 uppercase text-lg">Follow Us</h4>
                                <div className="flex space-x-3">
                                    {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                                        <span
                                            key={i}
                                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer"
                                        >
                                            <Icon size={18} />
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-white/20 pt-10 mt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-white/60 gap-4 sm:gap-0">
                            <p>Powered by SocioLib</p>
                            <div className="flex space-x-4">
                                <Link href="/home" className="hover:text-orange-500 transition-colors duration-300">Privacy</Link>
                                <Link href="/home" className="hover:text-orange-500 transition-colors duration-300">Terms & Condition</Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
