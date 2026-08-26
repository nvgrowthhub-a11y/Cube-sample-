"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, HeartHandshake, Sparkles, ShieldCheck, BrainCircuit, Smile, Users } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const iconMap: Record<string, React.ElementType> = {
  HeartHandshake,
  Sparkles,
  ShieldCheck,
  BrainCircuit,
  Smile,
  Users,
};

interface ServicesGridProps {
  onOpenBooking: () => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenBooking }) => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal">Clinical Services</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-2 leading-tight">
              Therapy That Helps Children Feel Better & Grow Better.
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-teal-dark transition"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service, idx) => {
            const Icon = iconMap[service.iconName] || HeartHandshake;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-soft hover:shadow-cardHover hover:-translate-y-1.5 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-teal/10 text-teal flex items-center justify-center group-hover:bg-teal group-hover:text-white transition duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-3 py-1 rounded-full">
                      {service.targetAge}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-navy mb-3 group-hover:text-teal transition">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy group-hover:text-teal transition pt-4 border-t border-slate-100"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={onOpenBooking}
            className="px-8 py-4 rounded-full bg-teal text-white font-semibold text-sm hover:bg-teal-dark shadow-md hover:shadow-lg transition active:scale-95"
          >
            Book an Appointment
          </button>
        </div>

      </div>
    </section>
  );
};
