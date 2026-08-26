"use client";

import React, { useState } from "react";
import { notFound, useParams } from "next/navigation";
import { siteConfig } from "@/config/siteConfig";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingSocials } from "@/components/layout/FloatingSocials";
import { AppointmentModal } from "@/components/modals/AppointmentModal";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const service = siteConfig.services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Header onOpenBooking={() => setIsModalOpen(true)} />

      {/* Hero Header */}
      <section className="pt-36 pb-20 bg-cream/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-teal bg-teal/10 px-3.5 py-1.5 rounded-full">
            {service.targetAge}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-navy mt-4 mb-6">
            {service.title}
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* Detail Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-soft">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">Clinical Approach</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Our clinical protocol for {service.title.toLowerCase()} blends evidence-based interventions with play and interactive activities. We prioritize psychological safety while building durable coping mechanisms.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Personalized initial evaluation",
                "Cognitive-behavioral techniques",
                "Structured emotional regulation tools",
                "Regular parent guidance sessions",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs font-semibold text-navy">
                  <CheckCircle2 className="w-5 h-5 text-teal shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-lightBlue/30 p-8 rounded-3xl border border-lightBlue flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-xl font-bold text-navy">Ready to get started?</h3>
              <p className="text-slate-600 text-xs mt-1">Schedule an initial consultation for your child.</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 bg-teal text-white rounded-full font-medium text-xs hover:bg-teal-dark shadow-sm transition whitespace-nowrap"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingSocials />
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
