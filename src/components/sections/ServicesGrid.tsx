"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface ServicesGridProps {
  onOpenAppointment: () => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenAppointment }) => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#2A9D8F] font-bold">
            Our Specialized Services
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#102A43] mt-2">
            Therapy That Helps Children Feel Better & Grow Better
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((srv, idx) => (
            <motion.div
              key={srv.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <Card className="flex flex-col h-full overflow-hidden p-0 group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={srv.image}
                    alt={srv.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#102A43] mb-2">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {srv.shortDesc}
                    </p>
                  </div>
                  <Link
                    href={`/services/${srv.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2A9D8F] group-hover:translate-x-1 transition-transform"
                  >
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center space-y-4">
          <Button variant="primary" size="lg" onClick={onOpenAppointment}>
            Book an Appointment for Therapy
          </Button>
        </div>
      </div>
    </section>
  );
};
