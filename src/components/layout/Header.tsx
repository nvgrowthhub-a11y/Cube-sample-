"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Heart } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-2xl bg-teal text-white flex items-center justify-center shadow-md group-hover:scale-105 transition">
            <Heart className="w-5 h-5 fill-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl tracking-tight text-navy">
              Mindful Beginnings
            </span>
            <span className="text-[10px] uppercase tracking-wider font-semibold text-teal -mt-1">
              Children's Psychology Clinic
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-navy/90">
          <Link href="/" className="hover:text-teal transition">Home</Link>
          <Link href="/about" className="hover:text-teal transition">About Us</Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <button className="flex items-center gap-1 hover:text-teal transition py-2">
              Services <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>

            {servicesDropdown && (
              <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-cardHover border border-cream p-3 grid gap-1">
                {siteConfig.services.map((item) => (
                  <Link
                    key={item.id}
                    href={`/services#${item.slug}`}
                    className="p-2.5 rounded-xl hover:bg-lightBlue text-navy text-xs font-semibold transition"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/parent-resources" className="hover:text-teal transition">Parent Resources</Link>
          <Link href="/blogs" className="hover:text-teal transition">Blogs</Link>
          <Link href="/contact" className="hover:text-teal transition">Contact Us</Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 rounded-full bg-teal text-white font-medium text-sm hover:bg-teal-dark shadow-sm hover:shadow-md transition active:scale-95"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-navy hover:text-teal focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-cream px-6 py-6 space-y-4 shadow-lg">
          <Link href="/" className="block text-navy font-medium text-base">Home</Link>
          <Link href="/about" className="block text-navy font-medium text-base">About Us</Link>
          <Link href="/services" className="block text-navy font-medium text-base">Services</Link>
          <Link href="/parent-resources" className="block text-navy font-medium text-base">Parent Resources</Link>
          <Link href="/blogs" className="block text-navy font-medium text-base">Blogs</Link>
          <Link href="/contact" className="block text-navy font-medium text-base">Contact Us</Link>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full py-3 bg-teal text-white rounded-full font-medium text-sm text-center"
          >
            Book Appointment
          </button>
        </div>
      )}
    </header>
  );
};
