"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, UserCheck, Sparkles, Lock, Users } from "lucide-react";
import { Card } from "@/components/ui/Card";

export const WhyChooseUs: React.FC = () => {
  const cards = [
    {
      icon: Heart,
      title: "Child-Centered Care",
      desc: "Every therapy plan is individualized around your child's personality, interests, and sensory needs.",
    },
    {
      icon: UserCheck,
      title: "Experienced Therapists",
      desc: "Licensed psychologists and therapists with deep specialization in early child development.",
    },
    {
      icon: Sparkles,
      title: "Personalized Approach",
      desc: "Evidence-based play, cognitive, and somatic techniques designed for sustainable growth.",
    },
    {
      icon: Lock,
      title: "Confidential & Safe",
      desc: "A warm, judgment-free clinical setting built to make children feel completely secure.",
    },
    {
      icon: Users,
      title: "Parent Partnership",
      desc: "Continuous parental guidance ensures positive behavioral habits translate seamlessly to home.",
    },
  ];

  return (
    <section className="py-20 bg-[#FFF9F2]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#2A9D8F] font-bold">
            Why Choose Mindful Beginnings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#102A43] mt-2">
            A Safe Space for Every Child to Grow
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className="h-full text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF6FA] text-[#2A9D8F] flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#102A43] mb-2">
                    {c.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
