import { ChevronDown, CompassIcon } from "lucide-react";

export default function Navbar() {
    return (
        <header className="flex px-28 h-18 py-2.5 items-center justify-between">
            <div>
                <ul className="flex text-base font-medium tracking-wide gap-8">
                    <li className="hover:text-orange-500 cursor-pointer transition-colors duration-200">
                        Home
                    </li>

                    <li className="relative group cursor-pointer">
                        <div className="flex items-center justify-center gap-2 transition-colors duration-200 group-hover:text-orange-500">
                            <p>Pages</p>
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
                            ].map((item) => (
                                <li
                                    key={item}
                                    className="px-3 py-1 hover:text-orange-500 transition-colors duration-200"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </li>

                    <li className="hover:text-orange-500 cursor-pointer transition-colors duration-200">
                        Packages
                    </li>
                    <li className="hover:text-orange-500 cursor-pointer transition-colors duration-200">
                        Destination
                    </li>
                </ul>
            </div>

            <div className="flex items-center justify-between gap-1.5">
                <CompassIcon
                    size={24}
                    className="transition-transform duration-300 group-hover:rotate-180"
                />
                <p className="text-2xl">Nomad</p>
            </div>

            <div className="flex justify-center items-center h-full text-[1.1rem] gap-2.5">
                <span className="border border-neutral-200 h-full flex items-center w-32 justify-center rounded-lg hover:bg-orange-600 hover:text-white transition-all duration-200 cursor-pointer">
                    Blog
                </span>
                <span className="border border-neutral-200 h-full flex items-center w-32 justify-center rounded-lg bg-orange-500 hover:bg-orange-600 text-white transition-all duration-200 cursor-pointer">
                    Contact
                </span>
            </div>
        </header>
    );
}
