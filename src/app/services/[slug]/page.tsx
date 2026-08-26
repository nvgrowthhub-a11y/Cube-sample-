"use client";

import React, { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/Button";
import { AppointmentModal } from "@/components/modals/AppointmentModal";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const service = siteConfig.services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="py-40 text-center">
        <h1 className="text-2xl font-bold">Service Not Found</h1>
        <Link href="/services" className="text-[#2A9D8F] underline mt-4 inline-block">
          Return to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#2A9D8F] mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Services
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#2A9D8F] font-bold">
              Therapy Program
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#102A43]">
              {service.title}
            </h1>
            <p className="text-slate-600 text-base leading-relaxed">
              {service.fullDesc}
            </p>
            <div className="pt-4">
              <Button variant="primary" size="lg" onClick={() => setIsModalOpen(true)}>
                Book Session for {service.title}
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <Image src={service.image} alt={service.title} fill className="object-cover" />
          </div>
        </div>

        {/* Benefits & Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#EAF6FA]/50 rounded-2xl p-6 sm:p-8 border border-[#2A9D8F]/20">
            <h3 className="font-serif text-xl font-bold text-[#102A43] mb-4">
              Key Benefits & Outcomes
            </h3>
            <ul className="space-y-3">
              {service.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#2A9D8F] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#FFF9F2] rounded-2xl p-6 sm:p-8 border border-[#F7B7A3]/40">
            <h3 className="font-serif text-xl font-bold text-[#102A43] mb-4">
              Common Challenges Addressed
            </h3>
            <ul className="space-y-3">
              {service.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-[#F7B7A3] shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Approach Detail */}
        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 mb-16">
          <h3 className="font-serif text-2xl font-bold text-[#102A43] mb-3">
            Our Therapeutic Approach
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">{service.approach}</p>
        </div>
      </div>
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
