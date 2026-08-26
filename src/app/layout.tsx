"use client";

import React, { useState } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import "@/app/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingSocials } from "@/components/layout/FloatingSocials";
import { AppointmentModal } from "@/components/modals/AppointmentModal";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <title>Mindful Beginnings | Child & Family Therapy Clinic</title>
        <meta
          name="description"
          content="Compassionate, evidence-based child psychology and therapy services designed to help children heal, grow, and thrive."
        />
      </head>
      <body className="font-sans antialiased bg-white text-[#102A43] selection:bg-[#2A9D8F]/20">
        <Header onOpenAppointment={() => setIsModalOpen(true)} />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingSocials />
        <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </body>
    </html>
  );
}
