"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { FloatingSocials } from "@/components/layout/FloatingSocials";
import { AppointmentModal } from "@/components/modals/AppointmentModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen relative">
      <Header onOpenBooking={() => setIsModalOpen(true)} />
      <HeroSection onOpenBooking={() => setIsModalOpen(true)} />
      <WhyChooseUs />
      <ServicesGrid onOpenBooking={() => setIsModalOpen(true)} />
      <TimelineSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingSocials />
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
