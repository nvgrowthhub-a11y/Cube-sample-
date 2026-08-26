"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface HeroSectionProps {
  onOpenAppointment: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAppointment }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-[#FFF9F2] via-white to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF6FA] text-[#2A9D8F] text-xs font-bold tracking-wider uppercase border border-[#2A9D8F]/20">
              <ShieldCheck className="w-4 h-4" /> Compassionate Child Therapy
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#102A43] leading-[1.15]">
              Helping Little Minds{" "}
              <span className="text-[#2A9D8F] underline decoration-wavy decoration-[#F7B7A3]/60 underline-offset-8">
                Grow, Heal & Thrive.
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Warm, compassionate child psychology and professional therapy designed to help children feel understood, confident, and emotionally resilient.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button variant="primary" size="lg" onClick={onOpenAppointment}>
                Book an Appointment
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const el = document.getElementById("services");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Services
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 border-t border-slate-200/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#2A9D8F]" />
                <span className="text-xs font-semibold text-[#102A43]">Child-Centered</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#2A9D8F]" />
                <span className="text-xs font-semibold text-[#102A43]">Qualified Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2A9D8F]" />
                <span className="text-xs font-semibold text-[#102A43]">Safe & Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#2A9D8F]" />
                <span className="text-xs font-semibold text-[#102A43]">4.9 Parent Rating</span>
              </div>
            </div>
          </motion.div>

          {/* Right Image Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
                alt="Child psychologist interacting warmly with a child"
                fill
                priority
                className="object-cover"
              />

              {/* Floating Badge 1 */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#EAF6FA] text-[#2A9D8F] flex items-center justify-center font-bold text-xs">
                  10+
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wide">Experience</p>
                  <p className="text-xs font-bold text-[#102A43]">Years of Clinical Care</p>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#102A43]">4.9/5 Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
