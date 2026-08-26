"use client";

import React from "react";
import Link from "next/link";
import { Heart, Instagram, Facebook, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-20 pb-10 border-t border-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-navy-light/50">
          
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-teal text-white flex items-center justify-center">
                <Heart className="w-5 h-5 fill-white" />
              </div>
              <span className="font-serif font-bold text-2xl tracking-tight text-white">
                Mindful Beginnings
              </span>
            </Link>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Providing compassionate, evidence-based psychological support for children and guidance for parents.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-navy-light flex items-center justify-center text-slate-300 hover:text-white hover:bg-teal transition"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-navy-light flex items-center justify-center text-slate-300 hover:text-white hover:bg-teal transition"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-navy-light flex items-center justify-center text-slate-300 hover:text-white hover:bg-teal transition"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link href="/" className="hover:text-teal transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-teal transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-teal transition">Services</Link></li>
              <li><Link href="/parent-resources" className="hover:text-teal transition">Parent Resources</Link></li>
              <li><Link href="/blogs" className="hover:text-teal transition">Blogs</Link></li>
              <li><Link href="/contact" className="hover:text-teal transition">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {siteConfig.services.map((s) => (
                <li key={s.id}>
                  <Link href={`/services/${s.slug}`} className="hover:text-teal transition">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider mb-4">Contact Info</h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address.street}, {siteConfig.contact.address.city}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 {siteConfig.name}. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
