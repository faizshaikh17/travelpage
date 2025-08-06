'use client'
import { ChevronDown, CompassIcon, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPagesOpen, setIsPagesOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const togglePages = () => setIsPagesOpen(!isPagesOpen);

    return (
        <>
            <header className="flex px-4 sm:px-8 lg:px-28 h-16 lg:h-18 py-2.5 items-center justify-between relative">
                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                        <Menu size={24} />
                    </button>
                </div>

                <div className="hidden lg:block">
                    <ul className="flex text-base font-medium tracking-wide gap-8">
                        <li className="hover:text-orange-500 cursor-pointer transition-colors duration-200 animate-great-slide-up [animation-delay:150ms] opacity-0">
                            Home
                        </li>

                        <li className="relative group cursor-pointer animate-great-slide-up [animation-delay:300ms] opacity-0">
                            <div className="flex items-center justify-center gap-2 transition-colors duration-200 group-hover:text-orange-500">
                                <p className="animate-great-slide-up [animation-delay:300ms] opacity-0">Pages</p>
                                <ChevronDown
                                    size={18}
                                    className="transition-transform duration-300 group-hover:rotate-180"
                                />
                            </div>

                            <ul className="absolute text-base opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transition-all duration-300 top-full mt-2 w-48 bg-white shadow-md rounded-md z-10">
                                {[
                                    "About",
                                    "Services",
                                    "Single Destination",
                                    "Testimonials",
                                    "Contact",
                                    "Blog",
                                    "Post",
                                ].map((item, index) => (
                                    <li
                                        key={item}
                                        className="px-3 py-1 hover:text-orange-500 transition-colors duration-200 animate-great-slide-up"
                                        style={{ animationDelay: `${450 + index * 100}ms`, opacity: 0 }}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </li>

                        <li className="hover:text-orange-500 cursor-pointer transition-colors duration-200 animate-great-slide-up [animation-delay:450ms] opacity-0">
                            Packages
                        </li>
                        <li className="hover:text-orange-500 cursor-pointer transition-colors duration-200 animate-great-slide-up [animation-delay:600ms] opacity-0">
                            Destination
                        </li>
                    </ul>
                </div>

                <div className="flex items-center justify-center gap-1.5 absolute left-1/2 transform -translate-x-1/2 lg:relative lg:left-auto lg:transform-none">
                    <CompassIcon
                        size={24}
                        className="transition-transform duration-300 hover:rotate-180"
                    />
                    <p className="text-xl lg:text-2xl font-medium animate-great-slide-up [animation-delay:750ms] opacity-0">Nomad</p>
                </div>

                <div className="hidden lg:flex justify-center items-center h-full text-[1.1rem] gap-2.5">
                    <span className="border border-neutral-200 h-full flex items-center w-32 justify-center rounded-lg hover:bg-orange-600 hover:text-white transition-all duration-200 cursor-pointer animate-great-slide-up [animation-delay:900ms] opacity-0">
                        Blog
                    </span>
                    <span className="border border-neutral-200 h-full flex items-center w-32 justify-center rounded-lg bg-orange-500 hover:bg-orange-600 text-white transition-all duration-200 cursor-pointer animate-great-slide-up [animation-delay:1050ms] opacity-0">
                        Contact
                    </span>
                </div>
            </header>

            <div className={`fixed inset-y-0 left-0 w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 lg:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex items-center justify-between p-6 border-b">
                    <div className="flex items-center gap-2">
                        <CompassIcon size={24} />
                        <span className="text-xl font-medium animate-great-slide-up [animation-delay:150ms] opacity-0">Nomad</span>
                    </div>
                    <button
                        onClick={toggleMenu}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                        <X size={24} />
                    </button>
                </div>

                <nav className="flex flex-col p-6 space-y-1">
                    <a href="#" className="py-3 px-4 text-base font-medium hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200 animate-great-slide-up [animation-delay:300ms] opacity-0">
                        Home
                    </a>

                    <div className="py-3">
                        <button
                            onClick={togglePages}
                            className="flex items-center justify-between w-full px-4 py-0 text-base font-medium hover:text-orange-500 transition-colors duration-200 animate-great-slide-up [animation-delay:450ms] opacity-0"
                        >
                            <span>Pages</span>
                            <ChevronDown
                                size={18}
                                className={`transition-transform duration-300 ${isPagesOpen ? 'rotate-180' : ''}`}
                            />
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${isPagesOpen ? 'max-h-96 mt-2' : 'max-h-0'}`}>
                            <div className="ml-4 space-y-1">
                                {[
                                    "About",
                                    "Services",
                                    "Single Destination",
                                    "Testimonials",
                                    "Contact",
                                    "Blog",
                                    "Post",
                                ].map((item, index) => (
                                    <a
                                        key={item}
                                        href="#"
                                        className="block py-2 px-4 text-sm text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-md transition-all duration-200 animate-great-slide-up"
                                        style={{ animationDelay: `${600 + index * 100}ms`, opacity: 0 }}
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <a href="#" className="py-3 px-4 text-base font-medium hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200 animate-great-slide-up [animation-delay:1350ms] opacity-0">
                        Packages
                    </a>
                    <a href="#" className="py-3 px-4 text-base font-medium hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200 animate-great-slide-up [animation-delay:1500ms] opacity-0">
                        Destination
                    </a>
                </nav>

                <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3">
                    <button className="py-3 px-6 text-base font-medium border border-neutral-200 rounded-lg hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all duration-200 animate-great-slide-up [animation-delay:1650ms] opacity-0">
                        Blog
                    </button>
                    <button className="py-3 px-6 text-base font-medium bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-200 animate-great-slide-up [animation-delay:1800ms] opacity-0">
                        Contact
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={toggleMenu}
                />
            )}

            <style jsx>{`
                @keyframes great-slide-up {
                    0% {
                        opacity: 0;
                        transform: translateY(30px) scale(0.95);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
                .animate-great-slide-up {
                    animation: great-slide-up 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
                }
            `}</style>
        </>
    );
}