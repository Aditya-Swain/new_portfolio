"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import { FaCode } from "react-icons/fa";
import logo from "../../public/images/logo.png";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-gray-700/50"
          : "bg-gray-900/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo / Brand */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => router.push("/")}
          >
            <div className="relative">
              <Image
                src={logo}
                alt="Logo"
                width={36}
                height={36}
                className="rounded-xl group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute -inset-0.5 bg-green-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
            <span className="text-base font-bold text-white hidden sm:block tracking-tight">
              Aditya<span className="text-green-400">.</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                    isActive
                      ? "text-green-400 bg-green-500/10"
                      : "text-gray-300 hover:text-white hover:bg-gray-700/60"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-green-400 rounded-full" />
                  )}
                </Link>
              );
            })}

            {/* CTA Button */}
            <Link
              href="/contact"
              className="ml-4 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gray-900/98 border-t border-gray-700/50 px-4 py-4 space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-green-400 bg-green-500/10 border border-green-500/20"
                    : "text-gray-300 hover:text-white hover:bg-gray-700/60"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
                {isActive && <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />}
              </Link>
            );
          })}

          <div className="pt-2">
            <Link
              href="/contact"
              className="block text-center bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-4 py-3 rounded-xl transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;