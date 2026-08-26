"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, BookOpen, Download } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AppointmentModal } from "@/components/modals/AppointmentModal";

export default function ParentResourcesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="pt-28 pb-20 bg-[#FFF9F2]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#2A9D8F] font-bold">
            Parent Support Library
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#102A43] mt-2">
            Educational Guides & Resources
          </h1>
          <p className="text-slate-600 text-base mt-4">
            Empower your parenting journey with clinical insights, behavioral toolkits, and actionable guides written by our psychological team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {siteConfig.resources.map((res) => (
            <Card key={res.id} className="flex flex-col h-full overflow-hidden p-0">
              <div className="relative h-48 w-full">
                <Image src={res.image} alt={res.title} fill className="object-cover" />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#2A9D8F] uppercase">
                  {res.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{res.readTime}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#102A43] mb-2">
                    {res.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {res.description}
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#2A9D8F] hover:underline"
                >
                  <BookOpen className="w-4 h-4" /> Read Full Article
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Downloadable Banner */}
        <div className="bg-[#2A9D8F] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFF9F2]">
              Download the Parent Emotional Regulation Checklist
            </h3>
            <p className="text-white/80 text-xs sm:text-sm mt-2 max-w-xl">
              A printable daily tracking sheet to help identify sensory overload and emotional triggers before meltdowns occur.
            </p>
          </div>
          <Button variant="secondary" size="lg" className="shrink-0" onClick={() => setIsModalOpen(true)}>
            <Download className="w-4 h-4 mr-2" /> Download Free PDF
          </Button>
        </div>
      </div>
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
