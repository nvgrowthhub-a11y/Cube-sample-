"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Award, HeartHandshake, Lock } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-lightBlue/50 via-cream/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/10 text-teal-dark text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              Compassionate Child Therapy
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-[1.15]">
              Helping Little Minds <br />
              <span className="text-teal underline decoration-softPeach decoration-wavy decoration-2">
                Grow, Heal & Thrive.
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
              Compassionate therapy and evidence-based clinical support designed to help children feel understood, emotionally resilient, and confident in their everyday growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 rounded-full bg-teal text-white font-semibold text-base shadow-soft hover:bg-teal-dark hover:shadow-cardHover transition duration-200 active:scale-95"
              >
                Book an Appointment
              </button>
              <a
                href="#services"
                className="px-8 py-4 rounded-full bg-white text-navy font-semibold text-base border border-slate-200 hover:bg-slate-50 transition text-center"
              >
                Explore Our Services
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-200/60">
              {[
                { label: "Child-Centered Care", icon: HeartHandshake },
                { label: "Licensed Specialists", icon: Award },
                { label: "Safe & Warm Space", icon: ShieldCheck },
                { label: "Strict Confidentiality", icon: Lock },
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-navy">
                    <IconComponent className="w-4 h-4 text-teal shrink-0" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column Image Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Wrapper */}
              <div className="relative rounded-3xl overflow-hidden shadow-cardHover border-4 border-white aspect-[4/5]">
                <Image
                  src="https://psychicare.com/wp-content/uploads/2024/02/Why-Would-A-Child-Need-Occupational-Therapy-2.jpg"
                  alt="Child therapist engaging warmly with child"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>

              {/* Floating Badge 1 */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-cardHover border border-cream flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-softPeach/30 text-navy flex items-center justify-center font-bold font-serif text-lg">
                  4.9
                </div>
                <div>
                  <div className="text-xs font-bold text-navy">Parent Rating</div>
                  <div className="text-[10px] text-slate-500">★★★★★ (200+ Reviews)</div>
                </div>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 -right-6 bg-white p-3.5 rounded-2xl shadow-cardHover border border-cream hidden sm:flex items-center gap-2.5"
              >
                <Award className="w-5 h-5 text-teal" />
                <span className="text-xs font-bold text-navy">10+ Years Experience</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
