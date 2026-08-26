"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-[#2A9D8F] text-white hover:bg-[#238377] shadow-lg shadow-[#2A9D8F]/25 hover:shadow-xl hover:shadow-[#2A9D8F]/35 focus:ring-[#2A9D8F]",
    secondary:
      "bg-[#102A43] text-white hover:bg-[#0c2136] shadow-md hover:shadow-lg focus:ring-[#102A43]",
    outline:
      "border-2 border-[#102A43] text-[#102A43] hover:bg-[#102A43] hover:text-white focus:ring-[#102A43]",
    ghost:
      "text-[#102A43] hover:bg-[#EAF6FA] hover:text-[#2A9D8F] focus:ring-[#2A9D8F]",
  };

  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-6 py-3",
    lg: "text-base px-8 py-4 font-semibold",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
