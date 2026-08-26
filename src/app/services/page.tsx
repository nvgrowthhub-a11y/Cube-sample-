"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AppointmentModal } from "@/components/modals/AppointmentModal";

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="pt-28 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#2A9D8F] font-bold">
            Therapeutic Services
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#102A43] mt-2">
            Support Designed Around Your Child
          </h1>
          <p className="text-slate-600 text-base mt-4">
            Explore our specialized evidence-based therapy offerings tailored to distinct emotional and behavioral milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((srv) => (
            <Card key={srv.slug} className="flex flex-col h-full overflow-hidden p-0">
              <div className="relative h-52 w-full">
                <Image src={srv.image} alt={srv.title} fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#102A43] mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {srv.fullDesc}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {srv.benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2A9D8F] shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/services/${srv.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2A9D8F] hover:underline"
                  >
                    View Program Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-[#102A43] text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3 text-[#FFF9F2]">
            Not Sure Which Program Fits Best?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6">
            Book an initial exploratory intake. Our clinical directors will help identify the exact therapeutic framework for your child.
          </p>
          <Button variant="primary" size="lg" onClick={() => setIsModalOpen(true)}>
            Schedule Initial Consultation
          </Button>
        </div>
      </div>
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
