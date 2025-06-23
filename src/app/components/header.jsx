"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper for closing menu on mobile navigation
  const handleMobileNav = () => setIsMenuOpen(false);

  return (
    <header className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <div className="max-w-7xl mx-auto">
        <div
          className={`relative transition-all duration-500 ease-out transform ${
            isScrolled
              ? "backdrop-blur-xl bg-white/20 shadow-2xl shadow-blue-500/10 border border-white/30"
              : "backdrop-blur-md bg-white/10 shadow-xl shadow-black/5 border border-white/20"
          } rounded-2xl px-6 py-4`}
          style={{
            background: isScrolled
              ? "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)"
              : "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%)",
          }}
        >
          {/* Glass reflection effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>

          <div className="relative flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="Panache Industries Logo"
                  className={`transition-all duration-300 group-hover:scale-110 ${
                    isScrolled ? "h-10" : "h-11"
                  } w-auto drop-shadow-lg`}
                />
                <div className="absolute inset-0 bg-white/20 rounded-lg blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {[
                { path: "/", label: "Home" },
                { path: "/product-catalogue", label: "Products" },
                { path: "/Contact", label: "Contact Us" },
              ].map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 group ${
                    isActive(item.path)
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div
                    className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                      isActive(item.path)
                        ? "bg-blue-500/20 backdrop-blur-sm shadow-lg"
                        : "bg-transparent group-hover:bg-white/30 group-hover:backdrop-blur-sm group-hover:shadow-md"
                    }`}
                  ></div>
                </Link>
              ))}

              {/* About Us Dropdown */}
              <div className="relative group">
                <Link
                  href="/about-us"
                  className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    isActive("/about-us")
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  <span className="relative z-10">About Us</span>
                  <div
                    className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                      isActive("/about-us")
                        ? "bg-blue-500/20 backdrop-blur-sm shadow-lg"
                        : "bg-transparent group-hover:bg-white/30 group-hover:backdrop-blur-sm group-hover:shadow-md"
                    }`}
                  ></div>
                </Link>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="backdrop-blur-xl bg-white/25 border border-white/30 rounded-2xl shadow-2xl shadow-blue-500/20 p-2">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none"></div>
                    {[
                      {
                        path: "/quality-control",
                        label: "Quality Control",
                      },
                      {
                        path: "/about-us/infrastructure",
                        label: "Infrastructure",
                      },
                      { path: "/about-us/industries", label: "Industries" },
                    ].map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        className="relative block px-4 py-3 text-gray-700 hover:text-blue-600 rounded-xl transition-all duration-200 hover:bg-white/40 hover:backdrop-blur-sm group/item"
                      >
                        <span className="relative z-10 text-sm font-medium">
                          {item.label}
                        </span>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"></div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden relative p-3 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-white/30 hover:backdrop-blur-sm transition-all duration-300 group"
            >
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 mx-4">
          <div className="backdrop-blur-xl bg-white/25 border border-white/30 rounded-2xl shadow-2xl shadow-blue-500/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none"></div>
            <nav className="relative flex flex-col p-4 space-y-2">
              {[
                { path: "/", label: "Home" },
                { path: "/products", label: "Products" },
                { path: "/about-us", label: "About Us" },
                { path: "/Contact", label: "Contact Us" },
              ].map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={handleMobileNav}
                  className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-white/40 hover:backdrop-blur-sm ${
                    isActive(item.path)
                      ? "text-blue-600 bg-blue-500/20"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Submenu */}
              <div className="pl-4 space-y-2 border-l-2 border-white/20 ml-4">
                {[
                  {
                    path: "/quality-control",
                    label: "Quality Control",
                  },
                  {
                    path: "/about-us/infrastructure",
                    label: "Infrastructure",
                  },
                  { path: "/about-us/industries", label: "Industries" },
                ].map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={handleMobileNav}
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 rounded-lg hover:bg-white/30 transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
