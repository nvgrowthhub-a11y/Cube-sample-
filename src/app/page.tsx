"use client";

import React, { useState } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { AppointmentModal } from "@/components/modals/AppointmentModal";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <HeroSection onOpenAppointment={() => setIsModalOpen(true)} />
      <WhyChooseUs />
      <ServicesGrid onOpenAppointment={() => setIsModalOpen(true)} />
      <TimelineSection />
      <FAQSection />
      <ContactSection />
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
