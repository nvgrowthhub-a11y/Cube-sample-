"use client";

import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, Compass, HeartHandshake, TrendingUp } from "lucide-react";

export const TimelineSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Initial Assessment",
      desc: "Comprehensive initial intake with parents to understand challenges, history, and goals.",
      icon: ClipboardList,
    },
    {
      num: "02",
      title: "Personalized Plan",
      desc: "Designing an individualized therapeutic roadmap tailored to your child's age and needs.",
      icon: Compass,
    },
    {
      num: "03",
      title: "Therapy & Guidance",
      desc: "Engaging 1-on-1 sessions paired with ongoing parent strategy consultations.",
      icon: HeartHandshake,
    },
    {
      num: "04",
      title: "Progress & Support",
      desc: "Continuous evaluation, celebrating milestones, and fostering sustainable resilience.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-20 bg-[#EAF6FA]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#2A9D8F] font-bold">
            How Therapy Works
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#102A43] mt-2">
            A Structured, Gentle Journey to Growth
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 relative"
              >
                <div className="text-4xl font-serif font-bold text-[#F7B7A3]/50 mb-2">
                  {step.num}
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#2A9D8F] text-white flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#102A43] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
