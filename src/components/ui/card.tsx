"use client";

import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hoverEffect = true,
}) => {
  return (
    <div
      className={`bg-white rounded-2xl p-6 sm:p-8 border border-[#102A43]/5 shadow-sm ${
        hoverEffect
          ? "transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#102A43]/5 hover:border-[#2A9D8F]/20"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};
