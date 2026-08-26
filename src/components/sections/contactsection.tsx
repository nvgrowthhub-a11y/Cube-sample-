"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-[#FFF9F2]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#2A9D8F] font-bold">
              Get In Touch
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#102A43]">
              Let's Talk About Your Child's Wellbeing
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Have questions regarding initial consultation, session structures, or clinic policies? Reach out today.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2A9D8F]/10 text-[#2A9D8F] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-slate-400">Clinic Location</h4>
                  <p className="text-xs sm:text-sm font-semibold text-[#102A43]">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2A9D8F]/10 text-[#2A9D8F] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-slate-400">Phone</h4>
                  <p className="text-xs sm:text-sm font-semibold text-[#102A43]">
                    {siteConfig.contact.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2A9D8F]/10 text-[#2A9D8F] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-slate-400">Email</h4>
                  <p className="text-xs sm:text-sm font-semibold text-[#102A43]">
                    {siteConfig.contact.email}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2A9D8F]/10 text-[#2A9D8F] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-slate-400">Working Hours</h4>
                  <p className="text-xs sm:text-sm font-semibold text-[#102A43]">
                    {siteConfig.contact.hours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-12 h-12 text-[#2A9D8F] mx-auto mb-3" />
                <h3 className="font-serif text-2xl font-bold text-[#102A43]">Message Received</h3>
                <p className="text-slate-600 text-sm mt-2">
                  Thank you for reaching out. A team member will reply shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-[#102A43] mb-4">
                  Send Us a Direct Message
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#102A43] uppercase mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Full Name"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-[#2A9D8F] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#102A43] uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-[#2A9D8F] text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#102A43] uppercase mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-[#2A9D8F] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#102A43] uppercase mb-1">
                    How Can We Help? *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us a little bit about what you are looking for..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-[#2A9D8F] text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#102A43] hover:bg-[#0c2136] text-white py-3.5 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="mt-16">
          <div className="text-center mb-6">
            <h3 className="font-serif text-2xl font-bold text-[#102A43]">
              Find Our Clinic Location
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Easily accessible with dedicated parking facilities.
            </p>
          </div>
          <div className="w-full h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg border border-slate-200">
            <iframe
              title="Clinic Map Location"
              src={siteConfig.map.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
