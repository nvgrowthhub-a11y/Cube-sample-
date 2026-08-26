"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Loader2, Calendar, Clock, User, Phone, Mail, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "Morning",
    primaryConcern: siteConfig.services[0].title,
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone || !formData.childName) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }
    
    setErrorMessage("");
    setStatus("submitting");

    // Simulate server response delay
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus("success");
  };

  const resetAndClose = () => {
    setStatus("idle");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Dark Translucent Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-navy/60 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-cardHover overflow-hidden z-10 my-8 border border-cream"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-navy to-navy-light text-white p-6 sm:p-8 pr-12 relative">
              <button
                onClick={resetAndClose}
                className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold leading-snug">
                Let's Take the First Step Together
              </h3>
              <p className="text-lightBlue text-sm sm:text-base mt-2">
                Tell us a little about your child and our clinical team will contact you directly.
              </p>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
              {status === "success" ? (
                <div className="text-center py-10 space-y-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 bg-teal/10 text-teal rounded-full flex items-center justify-center mx-auto"
                  >
                    <CheckCircle2 className="w-10 h-10" />
                  </motion.div>
                  <h4 className="font-serif text-2xl font-bold text-navy">Thank You!</h4>
                  <p className="text-slate-600 max-w-md mx-auto">
                    Your appointment request has been received. Our team will contact you shortly to confirm session scheduling.
                  </p>
                  <button
                    onClick={resetAndClose}
                    className="mt-6 px-8 py-3 bg-teal text-white rounded-full font-medium hover:bg-teal-dark transition shadow-md"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 bg-red-50 text-red-700 text-sm rounded-xl">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1">
                        Parent / Guardian Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          name="parentName"
                          required
                          value={formData.parentName}
                          onChange={handleChange}
                          placeholder="Jane Doe"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal/50 text-navy text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1">
                        Child's Name *
                      </label>
                      <input
                        type="text"
                        name="childName"
                        required
                        value={formData.childName}
                        onChange={handleChange}
                        placeholder="Leo"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal/50 text-navy text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1">
                        Child's Age
                      </label>
                      <input
                        type="number"
                        name="childAge"
                        min="2"
                        max="18"
                        value={formData.childAge}
                        onChange={handleChange}
                        placeholder="7"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal/50 text-navy text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal/50 text-navy text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="parent@example.com"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal/50 text-navy text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal/50 text-navy text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1">
                        Primary Concern
                      </label>
                      <select
                        name="primaryConcern"
                        value={formData.primaryConcern}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal/50 text-navy text-sm bg-white"
                      >
                        {siteConfig.services.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1">
                      Additional Message or Notes
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share any specific observations or preferences..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal/50 text-navy text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3.5 bg-teal text-white rounded-xl font-semibold hover:bg-teal-dark transition duration-200 shadow-md flex items-center justify-center gap-2 mt-4"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing Request...
                      </>
                    ) : (
                      "Request Appointment"
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
