"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Loader2, Calendar } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "Morning (9 AM - 12 PM)",
    primaryConcern: siteConfig.services[0].title,
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-[#102A43]/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl z-10 overflow-hidden my-8"
          >
            {/* Header Banner */}
            <div className="bg-[#102A43] text-white p-6 sm:p-8 relative">
              <button
                onClick={resetAndClose}
                className="absolute top-5 right-5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <span className="text-xs uppercase tracking-widest text-[#2A9D8F] font-bold">
                Private Consultation
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-1 text-[#FFF9F2]">
                Let's Take the First Step Together
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Tell us a little about your child and our intake team will reach out to confirm your session.
              </p>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#2A9D8F]/10 text-[#2A9D8F] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#102A43]">
                    Thank You!
                  </h4>
                  <p className="text-slate-600 mt-2 max-w-md mx-auto text-sm sm:text-base">
                    Your appointment request has been received. Our clinical coordinator will contact you shortly via phone/email.
                  </p>
                  <button
                    onClick={resetAndClose}
                    className="mt-6 bg-[#102A43] text-white px-8 py-3 rounded-full font-medium hover:bg-[#0c2136] transition-colors text-sm"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#102A43] uppercase mb-1">
                        Parent / Guardian Name *
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        required
                        value={formData.parentName}
                        onChange={handleChange}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#2A9D8F] focus:ring-2 focus:ring-[#2A9D8F]/20 outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#102A43] uppercase mb-1">
                        Child's Name *
                      </label>
                      <input
                        type="text"
                        name="childName"
                        required
                        value={formData.childName}
                        onChange={handleChange}
                        placeholder="e.g. Leo Vance"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#2A9D8F] focus:ring-2 focus:ring-[#2A9D8F]/20 outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#102A43] uppercase mb-1">
                        Child's Age *
                      </label>
                      <input
                        type="number"
                        name="childAge"
                        required
                        min="2"
                        max="18"
                        value={formData.childAge}
                        onChange={handleChange}
                        placeholder="Age (2-18)"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#2A9D8F] focus:ring-2 focus:ring-[#2A9D8F]/20 outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#102A43] uppercase mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#2A9D8F] focus:ring-2 focus:ring-[#2A9D8F]/20 outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#102A43] uppercase mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="parent@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#2A9D8F] focus:ring-2 focus:ring-[#2A9D8F]/20 outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#102A43] uppercase mb-1">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        required
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#2A9D8F] focus:ring-2 focus:ring-[#2A9D8F]/20 outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#102A43] uppercase mb-1">
                        Preferred Time Slot
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#2A9D8F] focus:ring-2 focus:ring-[#2A9D8F]/20 outline-none text-sm bg-white"
                      >
                        <option>Morning (9 AM - 12 PM)</option>
                        <option>Afternoon (12 PM - 4 PM)</option>
                        <option>Evening (4 PM - 7 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#102A43] uppercase mb-1">
                      Primary Concern
                    </label>
                    <select
                      name="primaryConcern"
                      value={formData.primaryConcern}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#2A9D8F] focus:ring-2 focus:ring-[#2A9D8F]/20 outline-none text-sm bg-white"
                    >
                      {siteConfig.services.map((srv) => (
                        <option key={srv.slug} value={srv.title}>
                          {srv.title}
                        </option>
                      ))}
                      <option value="General Consultation">General Consultation / Unsure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#102A43] uppercase mb-1">
                      Additional Details
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share any background details or specific concerns..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#2A9D8F] focus:ring-2 focus:ring-[#2A9D8F]/20 outline-none text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-2 bg-[#2A9D8F] hover:bg-[#238377] text-white py-3.5 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#2A9D8F]/25 text-sm"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Submitting Request...
                      </>
                    ) : (
                      <>
                        <Calendar className="w-4 h-4" /> Request Appointment
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
