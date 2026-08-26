"use client";

import React from "react";
import Link from "next/link";
import { HeartHandshake, Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#102A43] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#2A9D8F] flex items-center justify-center text-white">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <span className="font-serif text-xl font-bold text-[#FFF9F2]">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-[#FFF9F2] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/" className="hover:text-[#2A9D8F] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#2A9D8F] transition-colors">
                  Therapy Services
                </Link>
              </li>
              <li>
                <Link href="/parent-resources" className="hover:text-[#2A9D8F] transition-colors">
                  Parent Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#2A9D8F] transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Services */}
          <div>
            <h4 className="font-serif text-base font-semibold text-[#FFF9F2] mb-4">
              Therapeutic Areas
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {siteConfig.services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-[#2A9D8F] transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-base font-semibold text-[#FFF9F2] mb-4">
              Clinic Contact
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#2A9D8F] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#2A9D8F] shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:underline">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#2A9D8F] shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:underline">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#2A9D8F] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 {siteConfig.name}. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Medical Disclaimer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
