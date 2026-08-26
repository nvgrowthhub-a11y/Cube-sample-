
// src/config/siteConfig.ts

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  iconName: string;
  targetAge: string;
  fullDesc?: string;
}

export interface Therapist {
  name: string;
  title: string;
  qualification: string;
  experience: string;
  imageSrc: string;
  specialties: string[];
}

export const siteConfig = {
  name: "Mindful Beginnings",
  tagline: "Nurturing Young Minds. Building Brighter Futures.",
  contact: {
    phone: "+91 98765 43210",
    phoneUnformatted: "+919876543210",
    email: "care@mindfulbeginnings.com",
    whatsappNumber: "919876543210",
    address: {
      street: "123 Wellness Street, Defense Colony",
      city: "New Delhi",
      state: "Delhi",
      zip: "110024",
      country: "India",
    },
    hours: "Mon - Sat: 9:00 AM - 6:30 PM",
  },
  socials: {
    whatsapp: "https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20child%20therapy%20sessions.",
    instagram: "https://instagram.com/mindfulbeginnings_clinic",
    facebook: "https://facebook.com/mindfulbeginningsclinic",
  },
  googleMaps: {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.423188582962!2d77.22894377626456!3d28.556942975707018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2697818e61b%3A0xe5a3f338dca5a620!2sDefense%20Colony%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    latitude: 28.556943,
    longitude: 77.228944,
  },
  theme: {
    colors: {
      navy: "#102A43",
      teal: "#2A9D8F",
      cream: "#FFF9F2",
      lightBlue: "#EAF6FA",
      softPeach: "#F7B7A3",
      white: "#FFFFFF",
    },
  },
  services: [
    {
      id: "child-therapy",
      slug: "child-therapy",
      title: "Child Psychotherapy",
      shortDesc: "Play-based and cognitive-behavioral techniques tailored for young emotional development.",
      iconName: "HeartHandshake",
      targetAge: "Ages 4-12",
    },
    {
      id: "behavioral-therapy",
      slug: "behavioral-therapy",
      title: "Behavioral Support",
      shortDesc: "Constructive strategies to help children navigate impulsivity, routines, and emotional output.",
      iconName: "Sparkles",
      targetAge: "Ages 3-16",
    },
    {
      id: "anxiety-stress",
      slug: "anxiety-stress",
      title: "Anxiety & Stress Management",
      shortDesc: "Gentle coping mechanisms to help children process fear, social anxiety, and school pressure.",
      iconName: "ShieldCheck",
      targetAge: "Ages 6-17",
    },
    {
      id: "adhd-support",
      slug: "adhd-support",
      title: "ADHD & Attention Guidance",
      shortDesc: "Structured executive functioning coaching to improve focus and everyday task execution.",
      iconName: "BrainCircuit",
      targetAge: "Ages 5-16",
    },
    {
      id: "emotional-regulation",
      slug: "emotional-regulation",
      title: "Emotional Regulation",
      shortDesc: "Interactive frameworks helping children identify feelings and express frustration safely.",
      iconName: "Smile",
      targetAge: "Ages 4-14",
    },
    {
      id: "parent-counseling",
      slug: "parent-counseling",
      title: "Parent Consultation & Support",
      shortDesc: "Empowering parents with actionable home strategies and harmonious communication practices.",
      iconName: "Users",
      targetAge: "Parents & Caregivers",
    },
  ] as ServiceItem[],
  team: [
    {
      name: "Dr. Sarah Williams",
      title: "Lead Child Psychologist",
      qualification: "Ph.D. in Clinical Child Psychology",
      experience: "12+ Years Experience",
      imageSrc: "/images/therapists/sarah-williams.jpg",
      specialties: ["Child Anxiety", "ADHD Evaluation", "Parent Coaching"],
    },
    {
      name: "Emily Carter, LMFT",
      title: "Pediatric Family Therapist",
      qualification: "M.S. in Marriage & Family Therapy",
      experience: "8+ Years Experience",
      imageSrc: "/images/therapists/emily-carter.jpg",
      specialties: ["Play Therapy", "Emotional Regulation", "Social Skills"],
    },
  ] as Therapist[],
  faqs: [
    {
      question: "When should I consider professional therapy for my child?",
      answer: "Consider scheduling a consultation if your child experiences persistent changes in mood, extreme anxiety that disrupts school routines, prolonged behavioral difficulties, difficulty adjusting to major life changes, or trouble regulating intense emotions."
    },
    {
      question: "How long is a standard child therapy session?",
      answer: "Individual therapy sessions typically run for 45 to 50 minutes. Initial diagnostic assessments and parent feedback consultations are allocated 60 minutes."
    },
    {
      question: "How are parents involved in the therapy process?",
      answer: "Parents are active partners in care. While children require a private, safe space during individual sessions, we hold periodic parent feedback meetings and provide practical strategies to implement home environments that support growth."
    },
    {
      question: "Is therapy confidential?",
      answer: "Yes, confidentiality is strictly protected by ethical guidelines and privacy laws. We discuss the boundaries of confidentiality during the initial assessment so parents and children feel secure."
    }
  ]
};
