'use client';
import { ChevronDown, CompassIcon, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const togglePages = () => setIsPagesOpen(!isPagesOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsPagesOpen(false);
  };

  const navItems = [
    { name: "Home", href: "/home" },
    { name: "Packages", href: "/packages" },
    { name: "Destination", href: "/destination" },
  ];

  const pageLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Single Destination", href: "/single-destination" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Post", href: "/post" },
  ];

  return (
    <>
      <header className="flex z-50 px-4 sm:px-8 lg:px-28 h-16 lg:h-18 py-2.5 items-center justify-between relative">
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>

        <div className="hidden lg:block">
          <ul className="flex text-base font-medium tracking-wide gap-8">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`hover:text-orange-500 cursor-pointer transition-colors duration-200 ${
                  pathname === item.href ? "text-orange-500" : ""
                }`}
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
            <li className="relative group cursor-pointer">
              <div className="flex items-center justify-center gap-2 transition-colors duration-200 group-hover:text-orange-500">
                <p>Pages</p>
                <ChevronDown
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              </div>
              <ul className="absolute text-base opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transition-all duration-300 top-full mt-2 w-56 py-6 px-3 bg-white shadow-md rounded-md z-10">
                {pageLinks.map((item) => (
                  <li
                    key={item.name}
                    className={`px-3 py-1 hover:text-orange-500 transition-colors duration-200 ${
                      pathname === item.href ? "text-orange-500" : ""
                    }`}
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>

        <Link href={'/home'} className="flex cursor-pointer items-center justify-center gap-1.5 absolute left-1/2 transform -translate-x-1/2 lg:relative lg:left-auto lg:transform-none">
          <CompassIcon
            size={24}
            className="transition-transform duration-300 hover:rotate-180"
          />
          <p className="text-xl lg:text-2xl font-medium">Nomad</p>
        </Link>

        <div className="hidden lg:flex justify-center items-center h-full text-[1.1rem] gap-2.5">
          <Link href={'/blog'} className="border border-neutral-200 h-full flex items-center w-32 justify-center rounded-lg hover:bg-orange-600 hover:text-white transition-all duration-200 cursor-pointer">
            Blog
          </Link>
          <Link href={'/contact'} className="border border-neutral-200 h-full flex items-center w-32 justify-center rounded-lg bg-orange-500 hover:bg-orange-600 text-white transition-all duration-200 cursor-pointer">
            Contact
          </Link>
        </div>
      </header>

      <div
        className={`fixed inset-y-0 left-0 w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <Link href={'/home'} className="flex cursor-pointer items-center gap-2">
            <CompassIcon size={24} />
            <span className="text-xl font-medium">Nomad</span>
          </Link>
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className={`py-3 px-4 text-base font-medium hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200 ${
                pathname === item.href ? "text-orange-500" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="py-3">
            <button
              onClick={togglePages}
              className="flex items-center justify-between w-full px-4 text-base font-medium hover:text-orange-500 transition-colors duration-200"
              aria-expanded={isPagesOpen}
              aria-controls="submenu-pages"
            >
              <span>Pages</span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  isPagesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              id="submenu-pages"
              className={`overflow-hidden transition-all duration-300 ${
                isPagesOpen ? "max-h-96 mt-2" : "max-h-0"
              }`}
            >
              <div className="ml-4 space-y-1">
                {pageLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className={`block py-2 px-4 text-sm text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-md transition-all duration-200 ${
                      pathname === item.href ? "text-orange-500" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3">
          <Link href={'/blog'} className="py-3 px-6 text-base font-medium border border-neutral-200 rounded-lg hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all duration-200">
            Blog
          </Link>
          <Link href={'/contact'} className="py-3 px-6 text-base font-medium bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-200">
            Contact
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMenu}
          role="button"
          tabIndex={0}
          aria-label="Close menu overlay"
          onKeyDown={(e) => {
            if (e.key === 'Escape') closeMenu();
          }}
        />
      )}
    </>
  );
}
