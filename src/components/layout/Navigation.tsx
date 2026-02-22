"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MobileNav } from "./MobileNav";
import { Menu, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On non-home pages, always show the solid nav
  const showSolid = isScrolled || !isHome;

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          showSolid
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src={showSolid ? "/logo-dark.png" : "/logo.png"}
              alt="Forest Resources Inc."
              width={48}
              height={48}
              className="object-contain transition-all duration-300"
              priority
            />
            <div className="flex flex-col">
              <span
                className={`font-serif font-bold text-lg tracking-tight transition-colors duration-300 ${
                  showSolid
                    ? "text-stone-900"
                    : "text-white drop-shadow-md"
                }`}
              >
                FOREST RESOURCES INC
              </span>
              <span
                className={`text-[11px] font-medium tracking-widest uppercase transition-colors duration-300 ${
                  showSolid
                    ? "text-forest-600"
                    : "text-gray-200 drop-shadow-sm"
                }`}
              >
                Timber & Land Management
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold uppercase tracking-wider transition-colors relative ${
                    showSolid
                      ? isActive
                        ? "text-forest-700"
                        : "text-stone-600 hover:text-forest-700"
                      : isActive
                        ? "text-white"
                        : "text-white/80 hover:text-white drop-shadow-sm"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-forest-500 rounded-full" />
                  )}
                </Link>
              );
            })}

            {/* CTA */}
            <Link
              href="/contact"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                showSolid
                  ? "bg-forest-700 text-white hover:bg-forest-800 shadow-sm"
                  : "bg-white/15 text-white border border-white/30 hover:bg-white/25 backdrop-blur-sm"
              }`}
            >
              <Phone size={14} />
              Free Consultation
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu
              size={24}
              className={showSolid ? "text-stone-800" : "text-white"}
            />
          </button>
        </div>
      </header>

      <MobileNav
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        links={navLinks}
        pathname={pathname}
      />
    </>
  );
}
