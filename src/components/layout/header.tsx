"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, HeartHandshake } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/Button";

interface HeaderProps {
  onOpenAppointment: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAppointment }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-[#2A9D8F] flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <span className="font-serif text-xl font-bold text-[#102A43] block leading-none">
                {siteConfig.name}
              </span>
              <span className="text-[10px] tracking-wider uppercase text-[#2A9D8F] font-semibold mt-1 block">
                Child & Family Therapy
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                isActive("/") ? "text-[#2A9D8F] font-semibold" : "text-[#102A43] hover:text-[#2A9D8F]"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link
                href="/services"
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  pathname.startsWith("/services") ? "text-[#2A9D8F] font-semibold" : "text-[#102A43] hover:text-[#2A9D8F]"
                }`}
              >
                Services <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </Link>
              {servicesDropdown && (
                <div className="absolute top-full -left-4 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 py-3 mt-1 space-y-1">
                  {siteConfig.services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="block px-3 py-2 rounded-xl text-xs font-medium text-slate-700 hover:bg-[#EAF6FA] hover:text-[#2A9D8F] transition-colors"
                    >
                      {s.title}
                    </Link>
                  ))}
                  <div className="border-t border-slate-100 pt-2 mt-2">
                    <Link
                      href="/services"
                      className="block px-3 py-1.5 rounded-lg text-xs font-semibold text-[#2A9D8F] hover:underline"
                    >
                      View All Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/parent-resources"
              className={`text-sm font-medium transition-colors ${
                isActive("/parent-resources") ? "text-[#2A9D8F] font-semibold" : "text-[#102A43] hover:text-[#2A9D8F]"
              }`}
            >
              Parent Resources
            </Link>

            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive("/contact") ? "text-[#2A9D8F] font-semibold" : "text-[#102A43] hover:text-[#2A9D8F]"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="primary" size="md" onClick={onOpenAppointment}>
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#102A43] hover:bg-slate-100 rounded-xl transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 px-6 py-6 space-y-4 shadow-xl">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#102A43]"
          >
            Home
          </Link>
          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#102A43]"
          >
            Services & Programs
          </Link>
          <Link
            href="/parent-resources"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#102A43]"
          >
            Parent Resources
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#102A43]"
          >
            Contact Us
          </Link>
          <div className="pt-2">
            <Button
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
            >
              Book Appointment
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
