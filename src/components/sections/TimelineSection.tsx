"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    step: "Step 01",
    title: "Assessment",
    desc: "Comprehensive evaluation to understand your child's emotional state, behavior pattern, and family context.",
  },
  {
    step: "Step 02",
    title: "Personalized Plan",
    desc: "Crafting an evidence-based therapy strategy customized to your child’s development goals.",
  },
  {
    step: "Step 03",
    title: "Therapy & Guidance",
    desc: "Regular therapeutic sessions incorporating therapeutic play, CBT techniques, and parent feedback.",
  },
  {
    step: "Step 04",
    title: "Growth & Support",
    desc: "Tracking behavioral changes, refining skills, and ensuring sustainable emotional resilience.",
  },
];

export const TimelineSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-lightBlue/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-teal">Our Process</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-2">
            How Therapy Works
          </h2>
          <p className="text-slate-600 text-sm mt-3">
            A structured, gentle journey built around your child's safety and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.12 }}
              className="bg-white rounded-3xl p-8 shadow-soft border border-slate-100 relative z-10 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-teal bg-teal/10 px-3 py-1 rounded-full inline-block mb-4">
                  {item.step}
                </span>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
