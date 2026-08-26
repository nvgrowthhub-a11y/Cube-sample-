export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  image: string;
  benefits: string[];
  challenges: string[];
  approach: string;
}

export interface Therapist {
  name: string;
  role: string;
  qualification: string;
  experience: string;
  image: string;
  bio: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Resource {
  id: string;
  title: string;
  category: string;
  description: string;
  readTime: string;
  downloadUrl?: string;
  image: string;
}

export const siteConfig = {
  name: "Mindful Beginnings",
  tagline: "Nurturing Young Minds. Building Brighter Futures.",
  description: "Compassionate, evidence-based child therapy and psychological support designed to help children feel understood, confident, and emotionally resilient.",
  url: "https://mindfulbeginnings.com",
  contact: {
    phone: "+91 98765 43210",
    email: "care@mindfulbeginnings.com",
    address: "123 Wellness Street, Vasant Vihar, New Delhi, Delhi 110057",
    hours: "Mon - Sat: 9:00 AM - 7:00 PM | Sun: By Appointment",
    whatsapp: "https://wa.me/919876543210",
    instagram: "https://instagram.com/mindfulbeginnings_clinic",
    facebook: "https://facebook.com/mindfulbeginningsclinic",
  },
  map: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.674994246473!2d77.1542!3d28.5562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dbe72654321%3A0x6b8f101111111111!2sVasant%20Vihar%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    lat: 28.5562,
    lng: 77.1542,
  },
  services: [
    {
      slug: "child-therapy",
      title: "Child Therapy & Counseling",
      shortDesc: "One-on-one compassionate therapeutic sessions focused on emotional expression and coping tools.",
      fullDesc: "Our core child therapy framework offers a safe, engaging space where children can explore their feelings, resolve internal conflicts, and develop adaptive strategies for life's challenges.",
      icon: "HeartHandshake",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
      benefits: ["Improved emotional awareness", "Enhanced resilience", "Better self-expression", "Reduced internalized distress"],
      challenges: ["Mood shifts", "Grief & loss", "Life transitions", "Social withdrawal"],
      approach: "We utilize integrative play-based and cognitive-behavioral techniques tailored to your child's developmental age.",
    },
    {
      slug: "behavioral-therapy",
      title: "Behavioral Therapy",
      shortDesc: "Targeted strategies to replace impulsive or disruptive actions with positive behavioral habits.",
      fullDesc: "Behavioral therapy helps children understand the link between feelings, thoughts, and actions, offering actionable frameworks to improve emotional self-control.",
      icon: "Brain",
      image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1200&q=80",
      benefits: ["Better impulse control", "Clear boundary recognition", "Reduced oppositional behavior", "Improved family routines"],
      challenges: ["Tantrums", "Aggression", "Defiance", "Routine disruption"],
      approach: "Through positive reinforcement and functional behavioral assessment, we build sustainable home routines.",
    },
    {
      slug: "anxiety-stress-support",
      title: "Anxiety & Stress Management",
      shortDesc: "Empowering children with somatic and cognitive tools to conquer excessive worries.",
      fullDesc: "Anxiety can manifest as physical symptoms or refusal behaviors. We provide child-friendly tools to demystify worry and restore confidence.",
      icon: "Smile",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
      benefits: ["Somatic calming techniques", "Cognitive reframing", "Increased school attendance", "Reduced panic episodes"],
      challenges: ["Separation anxiety", "Social anxiety", "School phobia", "Panic responses"],
      approach: "Gradual exposure therapy combined with mindfulness exercises empowers children to face fear safely.",
    },
    {
      slug: "adhd-support",
      title: "ADHD & Executive Functioning",
      shortDesc: "Structured guidance to build focus, time management, and organizational abilities.",
      fullDesc: "ADHD requires specialized strategies that build upon a child's strengths while supporting areas of difficulty like executive function and task initiation.",
      icon: "Zap",
      image: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=1200&q=80",
      benefits: ["Enhanced task completion", "Improved working memory habits", "Better time management", "Strengthened focus"],
      challenges: ["Inattention", "Hyperactivity", "Disorganization", "Frustration intolerance"],
      approach: "Multi-sensory organizational training and behavioral modeling built specifically for neurodivergent minds.",
    },
    {
      slug: "emotional-regulation",
      title: "Emotional Regulation Training",
      shortDesc: "Helping children understand, process, and navigate intense feelings without meltdowns.",
      fullDesc: "Emotional regulation is the foundation of mental health. We teach children to identify bodily cues before emotions spiral out of control.",
      icon: "ShieldCheck",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80",
      benefits: ["Fewer emotional meltdowns", "Greater distress tolerance", "Enhanced self-soothing skills", "Clearer communication"],
      challenges: ["Intense anger", "Overwhelming sadness", "Low frustration threshold", "Sensory overload"],
      approach: "Visual emotion meters, breathing exercises, and emotional literacy toolkits.",
    },
    {
      slug: "parent-counseling",
      title: "Parent Counseling & Guidance",
      shortDesc: "Partnering with parents to create cohesive, supportive home environments.",
      fullDesc: "Parenting a child experiencing emotional difficulties can feel exhausting. We support you with actionable strategies and empathetic counsel.",
      icon: "Users",
      image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=1200&q=80",
      benefits: ["Reduced parenting stress", "Consistent home boundaries", "Strengthened parent-child bond", "Clear communication strategies"],
      challenges: ["Parental burnout", "Conflicting parenting styles", "Crisis communication", "Home chaos"],
      approach: "Collaborative bi-weekly coaching sessions aligned directly with your child's therapy plan.",
    },
  ] as Service[],
  therapists: [
    {
      name: "Dr. Sarah Williams",
      role: "Lead Child Psychologist",
      qualification: "Ph.D. in Clinical Child Psychology",
      experience: "12+ Years Experience",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      bio: "Specializes in anxiety disorders, trauma recovery, and neurodevelopmental assessments with a gentle, child-first philosophy.",
    },
    {
      name: "Emily Carter, M.S.",
      role: "Pediatric Behavioral Therapist",
      qualification: "M.S. in Applied Behavior Analysis",
      experience: "8+ Years Experience",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80",
      bio: "Focuses on executive functioning coaching, ADHD strategies, and behavioral regulation through play-based frameworks.",
    },
    {
      name: "Rajesh Kumar, M.Phil",
      role: "Family & Adolescent Counselor",
      qualification: "M.Phil in Medical & Social Psychology",
      experience: "10+ Years Experience",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
      bio: "Passionate about empowering parents, resolving adolescent conflicts, and fostering resilient family dynamics.",
    },
  ] as Therapist[],
  faqs: [
    {
      question: "When should I consider therapy for my child?",
      answer: "Consider therapy when behavioral or emotional changes persist for more than 2-3 weeks, interfere with school or family life, or cause visible distress to your child.",
    },
    {
      question: "How does child therapy actually work?",
      answer: "Child therapy uses age-appropriate methods such as structured play, expressive art, story work, and cognitive-behavioral tools. Sessions feel engaging and safe while targeting root emotional needs.",
    },
    {
      question: "How long is a typical therapy session?",
      answer: "Standard child sessions run for 45 to 50 minutes. Parent consultations and intake sessions usually last 60 minutes.",
    },
    {
      question: "Will parents be involved in the therapy process?",
      answer: "Yes, parent partnership is core to our model. We conduct periodic parent update sessions and provide actionable guidance for home reinforcement.",
    },
    {
      question: "Is therapy confidential for my child?",
      answer: "Yes. We maintain strict professional confidentiality while keeping parents informed of overarching therapeutic goals, progress, and any safety considerations.",
    },
    {
      question: "How do I book an initial consultation?",
      answer: "Click any 'Book Appointment' button on the website, submit the brief consultation form, and our intake team will phone you within 24 hours.",
    },
  ] as FAQ[],
  resources: [
    {
      id: "guide-1",
      title: "5 Signs Your Child May Need Emotional Support",
      category: "Parenting Guide",
      description: "Learn how to spot subtle behavioral shifts, mood changes, and somatic signs of hidden anxiety.",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1476700184586-f0302b1c67d7?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "guide-2",
      title: "De-escalating Meltdowns: A Parent's Practical Toolkit",
      category: "Emotional Regulation",
      description: "Step-by-step calming techniques to use when your child is overwhelmed by sensory or emotional stress.",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "guide-3",
      title: "Navigating ADHD at School & Home",
      category: "ADHD Support",
      description: "Actionable adjustments to create structured routines that reduce executive functioning friction.",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=800&q=80",
    },
  ] as Resource[],
};
