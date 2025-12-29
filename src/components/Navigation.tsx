"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/creations", label: "Creations" },
  { href: "/series", label: "Series" },
  { href: "/videos", label: "Videos" },
  { href: "/felicitation", label: "Felicitation" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-cream-50 border-b border-cream-200 sticky top-0 z-50">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-saffron-500 via-temple-gold to-maroon-600" />

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Site Name */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
              <Image
                src="/profile-image.jpg"
                alt="Chitra Raman"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-2xl text-cream-950 tracking-wide">
                Chitra Raman
              </h1>
              <p className="text-xs text-cream-700 -mt-1">
                Devotional Storytelling in Handmade Dolls
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 font-medium transition-colors relative group ${
                  isActive(link.href)
                    ? "text-temple-gold"
                    : "text-cream-800 hover:text-temple-gold"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 h-0.5 bg-temple-gold transition-all duration-300 ${
                    isActive(link.href)
                      ? "w-3/4 left-[12.5%]"
                      : "w-0 group-hover:w-3/4 group-hover:left-[12.5%]"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-cream-800 hover:text-temple-gold transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in-up">
            <div className="flex flex-col space-y-1 bg-cream-100 rounded-lg p-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-md font-medium transition-all ${
                    isActive(link.href)
                      ? "text-temple-gold bg-cream-200"
                      : "text-cream-800 hover:text-temple-gold hover:bg-cream-200"
                  }`}
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
