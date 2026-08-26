"use client";

import React from "react";
import { MessageCircle, Instagram, Facebook } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const FloatingSocials: React.FC = () => {
  const socials = [
    {
      name: "Chat With Us",
      url: siteConfig.socials.whatsapp,
      icon: MessageCircle,
      bgHover: "hover:bg-emerald-600",
      color: "bg-emerald-500",
    },
    {
      name: "Follow Us",
      url: siteConfig.socials.instagram,
      icon: Instagram,
      bgHover: "hover:bg-pink-600",
      color: "bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600",
    },
    {
      name: "Visit Us",
      url: siteConfig.socials.facebook,
      icon: Facebook,
      bgHover: "hover:bg-blue-700",
      color: "bg-blue-600",
    },
  ];

  return (
    <>
      {/* Desktop Floating Right-Side Bar */}
      <div className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col gap-3 pr-4">
        {socials.map((s, idx) => {
          const Icon = s.icon;
          return (
            <a
              key={idx}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-end"
            >
              <div className="flex items-center bg-navy text-white rounded-full p-1.5 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:px-3 text-xs font-medium transition-all duration-300 ease-in-out">
                  {s.name}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${s.color} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Mobile Floating Action Bar */}
      <div className="md:hidden fixed bottom-4 right-4 z-40 flex flex-col gap-2">
        <a
          href={siteConfig.socials.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-500 text-white shadow-xl flex items-center justify-center active:scale-95 transition"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </>
  );
};
