"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, UserCheck, Sliders, ShieldCheck, Users } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Child-Centered Care",
    desc: "Every child receives individual focus and tailored therapeutic play strategies designed for their pace.",
  },
  {
    icon: UserCheck,
    title: "Experienced Therapists",
    desc: "Licensed pediatric specialists with extensive background in child psychology and behavioral support.",
  },
  {
    icon: Sliders,
    title: "Personalized Approach",
    desc: "Treatment blueprints built around your child’s unique personality, emotional needs, and goals.",
  },
  {
    icon: ShieldCheck,
    title: "Confidential & Supportive",
    desc: "A warm, judgment-free clinical setting ensuring physical safety and strict privacy protocols.",
  },
  {
    icon: Users,
    title: "Parent Partnership",
    desc: "Parents receive actionable feedback and coaching to foster continuous emotional growth at home.",
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-cream/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-teal">Why Choose Us</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mt-2">
            A Safe Space for Every Child
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-3xl shadow-soft border border-cream hover:shadow-cardHover hover:-translate-y-1 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-lightBlue text-teal flex items-center justify-center mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
