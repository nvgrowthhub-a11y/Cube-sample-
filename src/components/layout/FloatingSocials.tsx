"use client";

import React from "react";
import { MessageCircle, Instagram, Facebook } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const FloatingSocials: React.FC = () => {
  return (
    <div className="fixed right-3 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href={siteConfig.contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-end bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-semibold px-0 group-hover:px-2">
          Chat With Us
        </span>
        <MessageCircle className="w-5 h-5 shrink-0" />
      </a>

      {/* Instagram */}
      <a
        href={siteConfig.contact.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-end bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Follow on Instagram"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-semibold px-0 group-hover:px-2">
          Follow Us
        </span>
        <Instagram className="w-5 h-5 shrink-0" />
      </a>

      {/* Facebook */}
      <a
        href={siteConfig.contact.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-end bg-[#1877F2] text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Visit Facebook Page"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-semibold px-0 group-hover:px-2">
          Visit Us
        </span>
        <Facebook className="w-5 h-5 shrink-0" />
      </a>
    </div>
  );
};
