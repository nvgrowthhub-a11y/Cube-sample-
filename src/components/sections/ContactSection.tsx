"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Form Block */}
        <div className="bg-lightBlue/40 rounded-3xl p-8 sm:p-12 border border-lightBlue mb-16 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-teal">Contact Us</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy">
                Let's Talk About Your Child's Wellbeing
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Have questions regarding therapy options, scheduling, or assessment procedures? Connect with our care team directly.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-teal shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-semibold text-slate-500">Call Us directly</div>
                    <a href={`tel:${siteConfig.contact.phoneUnformatted}`} className="text-navy font-semibold hover:text-teal">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-teal shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-semibold text-slate-500">Email Inquiries</div>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-navy font-semibold hover:text-teal">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-teal shrink-0 mt-1" />
                  <div>
                    <div className="text-xs font-semibold text-slate-500">Clinic Hours</div>
                    <div className="text-navy font-medium text-sm">{siteConfig.contact.hours}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-12 space-y-3">
                  <div className="w-12 h-12 bg-teal/10 text-teal rounded-full flex items-center justify-center mx-auto">
                    <Send className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-navy">Message Sent</h3>
                  <p className="text-slate-600 text-sm">Thank you for reaching out. We will respond within 24 business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1">Parent Name</label>
                      <input required type="text" placeholder="Your Full Name" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-teal/50 outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1">Child's Age</label>
                      <input type="number" placeholder="Age (optional)" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-teal/50 outline-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1">Phone Number</label>
                      <input required type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-teal/50 outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1">Email Address</label>
                      <input required type="email" placeholder="email@domain.com" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-teal/50 outline-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1">Message</label>
                    <textarea required rows={4} placeholder="How can we assist you?" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-teal/50 outline-none" />
                  </div>

                  <button type="submit" className="w-full py-3.5 bg-navy text-white font-semibold rounded-xl hover:bg-navy-light transition shadow-md">
                    Send Message
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* Dynamic Google Maps Block */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-serif text-2xl font-bold text-navy">Find Our Clinic</h3>
              <p className="text-slate-600 text-sm">We're here when you need us.</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-navy bg-cream px-3 py-1.5 rounded-full w-fit">
              <MapPin className="w-4 h-4 text-teal" />
              {siteConfig.contact.address.street}, {siteConfig.contact.address.city}
            </div>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-3xl overflow-hidden shadow-soft border border-slate-200 relative">
            <iframe
              title="Mindful Beginnings Clinic Location"
              src={siteConfig.googleMaps.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
