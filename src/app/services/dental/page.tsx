"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import AnimatedCounter from "@/components/AnimatedCounter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DentalServicesPage() {
  const [activeFaq, setActiveFaq] = useState<number>(0);
  const [heroVideoLoaded, setHeroVideoLoaded] = useState(false);
  const [ctaVideoLoaded, setCtaVideoLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: ["implant"],
    message: "",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".custom-select-container")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.services.length === 0) {
      return;
    }
    setFormSubmitted(true);
  };

  const faqItems = [
    {
      question: "Which dental treatment will be appropriate to improve my oral health?",
      answer: "The treatment that you need and will be appropriate for your oral health is dependent on your dental condition. A detailed discussion with specialists, with our assistance, will help you in deciding whether you require veneers, implants, crowns, or a combination of treatments."
    },
    {
      question: "Will these dental treatments have a long-term effect?",
      answer: "You can enjoy long-term results in most dental treatments when supported by proper care, maintenance, and regular follow-up."
    },
    {
      question: "Is dental treatment painful?",
      answer: "Most of the dental procedures are performed under appropriate anaesthesia or pain management to improve your comfort during treatment."
    },
    {
      question: "How long does a full mouth restoration take?",
      answer: "The time duration of the treatment is dependent on the complexity of your case and the number of procedures involved. In some of the cases, there may be a need for multiple stages over several weeks or months."
    },
    {
      question: "Is it safe to opt for the dental treatment abroad?",
      answer: "Dental treatment abroad can be a good option when careful planning is done while selecting trusted clinics, experienced dentists, and clear guidance and support before travel."
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafdfc] text-[#1c2e2c] flex flex-col font-sans">
      
      {/* Sticky Navigation Navbar */}
      <Navbar />

      {/* 1. HERO SECTION (Split-screen) */}
      <section className="relative w-full flex flex-col lg:flex-row min-h-[calc(100vh-92px)]">
        
        {/* Left Side Hero Panel */}
        <div className="w-full lg:w-[55%] bg-white flex flex-col justify-center p-6 sm:p-10 lg:p-12 xl:p-16 py-16 lg:py-20">
          
          {/* Core Content */}
          <div className="my-auto py-12 lg:py-0 max-w-2xl">
            {/* Tag */}
            <div className="flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
              Dental Care & Treatment Travel
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-6">
              Complete Dental <br />
              Treatment Abroad <br />
              <span className="font-serif italic font-normal text-brand-teal block mt-2">
                For A Healthy Smile
              </span>
              <span className="font-serif italic font-normal text-brand-teal block">
                & Gained Confidence
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-brand-teal/70 leading-relaxed mb-10 max-w-lg font-light">
              Your smile plays an important role in confidence, appearance, and overall oral health. 
              Through HTP, patients can get advanced dental treatment options with trusted international 
              clinics for damaged teeth, missing teeth, multiple dental issues, discoloration, or other restorative concerns.
            </p>

            {/* Hero Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#book"
                className="bg-brand-teal hover:bg-brand-teal-light text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
              >
                Discuss Your Options
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="#services"
                className="border border-brand-teal/20 hover:border-brand-teal/40 text-brand-teal font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 hover:bg-brand-mint/40 flex items-center justify-center gap-2"
              >
                Explore Services
                <svg className="w-4 h-4 text-brand-teal/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Trust Badge */}
            <div className="flex flex-row items-center gap-4 mt-10">
              {/* Overlapping Avatars */}
              <div className="flex -space-x-3">
                <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <Image
                    src="/mindera_therapist_1.png"
                    alt="Trusted Client"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <Image
                    src="/mindera_therapist_2.png"
                    alt="Trusted Client"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <Image
                    src="/mindera_therapist_3.png"
                    alt="Trusted Client"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <Image
                    src="/mindera_therapist_4.png"
                    alt="Trusted Client"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Rating and Info */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-1.5 text-brand-teal">
                  <svg className="w-4 h-4 fill-current text-brand-teal" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-semibold text-sm sm:text-[15px] leading-none">4.9/5 Rating clients</span>
                </div>
                <span className="text-brand-teal/80 text-[13px] sm:text-sm mt-1">Trusted by 1,200+ Clients</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block text-xs text-brand-teal/40">
            &copy; 2026 Mindera. All rights reserved.
          </div>
        </div>

        {/* Right Side Hero Video/Image Panel */}
        <div className="w-full lg:w-[45%] relative h-[500px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-full bg-brand-mint-dark overflow-hidden">
          {/* Fallback image shown during load */}
          <Image
            src="/mindera_hero.png"
            alt="Warm and welcoming Mindera client"
            fill
            priority
            className={`object-cover object-center transition-opacity duration-700 ${
              heroVideoLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            sizes="(max-w-1024px) 100vw, 50vw"
          />

          {/* Background Video Player */}
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
            <video
              src="/videoplayback.mp4"
              autoPlay
              loop
              muted
              playsInline
              onPlay={() => setHeroVideoLoaded(true)}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Transparent cover to block user interaction and hide native controls */}
          <div className="absolute inset-0 w-full h-full z-10 bg-transparent" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/15 pointer-events-none z-0" />
        </div>
      </section>

      <section id="about" className="w-full bg-white py-20 lg:py-28 border-b border-brand-teal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
            About HPT
          </div>

          <p className="text-base sm:text-lg text-brand-teal/95 font-light leading-relaxed max-w-4xl mx-auto">
            At HPT, we are well aware that it is very important to opt for a treatment abroad, 
            and most often, individuals have multiple questions in their minds associated with this process. 
            We strive to make this process clearer by assisting patients in exploring appropriate treatment options, 
            providing them with detailed guidance at each step, and supporting them throughout their treatment journey.
          </p>

          {/* About Section Asymmetric Layout */}
          <div className="flex flex-col md:flex-row gap-8 mt-16 w-full items-stretch relative">
            {/* Left Column (Tall portrait image, stretches to match right column height) */}
            <div className="relative w-full md:w-[35%] rounded-[2rem] overflow-hidden shadow-md min-h-[350px] md:min-h-full">
              <Image
                src="/mindera_consultation.png"
                alt="Consultation Room"
                fill
                className="object-cover"
                sizes="(max-w-768px) 100vw, 35vw"
              />
            </div>

            {/* Right Column (Stacked Image + Stats) */}
            <div className="w-full md:w-[65%] flex flex-col justify-between gap-8 text-left">
              {/* Right Image Container */}
              <div className="relative w-full h-[300px] md:h-[380px]">
                <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-md">
                  <Image
                    src="/mindera_team.png"
                    alt="Medical Team"
                    fill
                    className="object-cover"
                    sizes="(max-w-768px) 100vw, 65vw"
                  />
                </div>
                
                {/* Floating Quote Card */}
                <div className="absolute md:-top-6 md:-right-6 top-4 right-4 max-w-[260px] sm:max-w-[320px] bg-[#e6f2f0] border border-brand-teal/10 rounded-2xl p-5 sm:p-6 shadow-xl z-10 text-left">
                  <p className="text-brand-teal text-xs sm:text-[14px] font-medium leading-relaxed font-sans">
                    &ldquo;Patients are not only looking for treatment abroad, but also for guidance, coordination, and support at every step, allowing them to focus on treatment and recovery with less stress.&rdquo;
                  </p>
                  <p className="text-brand-teal/80 text-[10px] sm:text-xs font-semibold mt-3 font-sans">
                    – Health Plus Travel
                  </p>
                </div>
              </div>

              {/* Stats Row (Directly under the right image) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                {/* Stat 1 */}
                <div className="flex items-center gap-3 justify-start md:pl-2">
                  <span className="text-5xl sm:text-[52px] font-serif text-[#1c2e2c] flex items-center leading-none">
                    <AnimatedCounter target={25} suffix="+" />
                  </span>
                  <div className="text-xs text-brand-teal/85 font-medium uppercase tracking-wider leading-tight text-left">
                    <div>Years</div>
                    <div>Experience</div>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-center gap-3 justify-start sm:justify-center">
                  <span className="text-5xl sm:text-[52px] font-serif text-[#1c2e2c] flex items-center leading-none">
                    <AnimatedCounter target={20} suffix="+" />
                  </span>
                  <div className="text-xs text-brand-teal/85 font-medium uppercase tracking-wider leading-tight text-left">
                    <div>Professional</div>
                    <div>Therapist</div>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex items-center gap-3 justify-start sm:justify-end md:pr-4">
                  <span className="text-5xl sm:text-[52px] font-serif text-[#1c2e2c] flex items-center leading-none">
                    <AnimatedCounter target={98} suffix="%" />
                  </span>
                  <div className="text-xs text-brand-teal/85 font-medium uppercase tracking-wider leading-tight text-left">
                    <div>Clients</div>
                    <div>Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR SERVICES SECTION */}
      <section id="services" className="w-full py-20 lg:py-32 bg-[#f6faf9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column (Sticky info panel) */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 h-fit text-left">
              <div className="inline-flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                OUR SERVICES
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-6">
                Dental Treatments <br />
                We Assist
              </h2>

              <p className="text-base sm:text-lg text-brand-teal/70 leading-relaxed font-light mb-8 max-w-md">
                We are indulged in offering our assistance for several dental solutions to correct 
                the functioning of your teeth, improve appearance, and support long-term dental health.
              </p>

              <a
                href="#all-services"
                className="bg-brand-teal hover:bg-brand-teal-light text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 w-fit"
              >
                View All Services
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Right Column (Stack of service cards with scroll-stacking effect) */}
            <div className="lg:col-span-7 flex flex-col gap-12 relative pb-20">
              
              {/* Service Card 1: Dental Implants */}
              <div className="sticky top-[100px] z-10 bg-white border border-brand-teal/5 rounded-[2rem] p-8 sm:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col gap-6 text-left">
                {/* Top Header Row */}
                <div className="flex justify-between items-start w-full">
                  <div className="w-16 h-16 rounded-2xl bg-brand-mint flex items-center justify-center shrink-0">
                    <svg className="w-9 h-9 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      {/* Dental Implant icon */}
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 6c0-1 2-2 5-2s5 1 5 2v3c0 2-2 3-5 3S7 11 7 9V6z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v6M10 14h4M10 16h4M11 18h2" />
                    </svg>
                  </div>
                  
                  {/* Price Stack */}
                  <div className="text-right leading-none flex flex-col items-end">
                    <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-teal/50 uppercase">START</span>
                    <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-teal/50 uppercase mt-0.5">FROM</span>
                    <span className="text-2xl sm:text-3xl font-bold text-brand-teal mt-1.5">$950</span>
                    <span className="text-[10px] sm:text-xs italic text-brand-teal/60 mt-1">/ Implant</span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-[#1c2e2c] mb-3">
                    Dental <span className="font-serif italic font-normal text-brand-teal">Implants</span>
                  </h3>
                  <p className="text-brand-teal/75 text-[15px] leading-relaxed mb-6 font-light">
                    Dental implants are a long-term solution for missing teeth, performed by replacing both the root and crown to serve patients with stability and a natural appearance.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Durable Solution</span>
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Stable Support</span>
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Natural Smile</span>
                  </div>
                </div>
              </div>

              {/* Service Card 2: Dental Bridges */}
              <div className="sticky top-[130px] z-20 bg-white border border-brand-teal/5 rounded-[2rem] p-8 sm:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col gap-6 text-left">
                {/* Top Header Row */}
                <div className="flex justify-between items-start w-full">
                  <div className="w-16 h-16 rounded-2xl bg-brand-mint flex items-center justify-center shrink-0">
                    <svg className="w-9 h-9 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      {/* Dental Bridge icon */}
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 10c0-1.5 1-2 2-2s2 .5 2 2v3c0 1-1 1.5-2 1.5S5 14 5 13v-3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10c0-1.5 1-2 2-2s2 .5 2 2v3c0 1-1 1.5-2 1.5s-2-.5-2-1.5v-3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 11h6M9 13h6" />
                    </svg>
                  </div>
                  
                  {/* Price Stack */}
                  <div className="text-right leading-none flex flex-col items-end">
                    <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-teal/50 uppercase">START</span>
                    <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-teal/50 uppercase mt-0.5">FROM</span>
                    <span className="text-2xl sm:text-3xl font-bold text-brand-teal mt-1.5">$450</span>
                    <span className="text-[10px] sm:text-xs italic text-brand-teal/60 mt-1">/ Unit</span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-[#1c2e2c] mb-3">
                    Dental <span className="font-serif italic font-normal text-brand-teal">Bridges</span>
                  </h3>
                  <p className="text-brand-teal/75 text-[15px] leading-relaxed mb-6 font-light">
                    Dental bridges replace one or more of your missing teeth by bridging the gap, making use of adjacent teeth <span className="text-brand-teal font-medium">for support</span>.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Gap Closure</span>
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Restored Function</span>
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Natural Appearance</span>
                  </div>
                </div>
              </div>

              {/* Service Card 3: Dental Veneers */}
              <div className="sticky top-[160px] z-30 bg-white border border-brand-teal/5 rounded-[2rem] p-8 sm:p-10 shadow-[0_4px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_45px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col gap-6 text-left">
                {/* Top Header Row */}
                <div className="flex justify-between items-start w-full">
                  <div className="w-16 h-16 rounded-2xl bg-brand-mint flex items-center justify-center shrink-0">
                    <svg className="w-9 h-9 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      {/* Dental Veneer icon */}
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 8c0-2.2 2.7-3 6-3s6 .8 6 3v4c0 3-2.7 4-6 4s-6-1-6-4V8z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 5l1.5 1.5L21 5l-1.5-1.5L18 5zM3 12l1 1 1-1-1-1-1 1z" />
                    </svg>
                  </div>
                  
                  {/* Price Stack */}
                  <div className="text-right leading-none flex flex-col items-end">
                    <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-teal/50 uppercase">START</span>
                    <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-teal/50 uppercase mt-0.5">FROM</span>
                    <span className="text-2xl sm:text-3xl font-bold text-brand-teal mt-1.5">$299</span>
                    <span className="text-[10px] sm:text-xs italic text-brand-teal/60 mt-1">/ Tooth</span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-[#1c2e2c] mb-3">
                    Dental <span className="font-serif italic font-normal text-brand-teal">Veneers</span>
                  </h3>
                  <p className="text-brand-teal/75 text-[15px] leading-relaxed mb-6 font-light">
                    Thin custom-made shells are set on the front surface of teeth to improve the shape, color, and overall appearance.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Smile Makeover</span>
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Shape Correction</span>
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Stain Resistant</span>
                  </div>
                </div>
              </div>

              {/* Service Card 4: Dental Crowns */}
              <div className="sticky top-[190px] z-40 bg-white border border-brand-teal/5 rounded-[2rem] p-8 sm:p-10 shadow-[0_4px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_45px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col gap-6 text-left">
                {/* Top Header Row */}
                <div className="flex justify-between items-start w-full">
                  <div className="w-16 h-16 rounded-2xl bg-brand-mint flex items-center justify-center shrink-0">
                    <svg className="w-9 h-9 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      {/* Dental Crown icon */}
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12v3c0 3 2.7 4 6 4s6-1 6-4v-3" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 8l3 3 4-4 4 4 3-3V7H5v1z" />
                    </svg>
                  </div>
                  
                  {/* Price Stack */}
                  <div className="text-right leading-none flex flex-col items-end">
                    <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-teal/50 uppercase">START</span>
                    <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-teal/50 uppercase mt-0.5">FROM</span>
                    <span className="text-2xl sm:text-3xl font-bold text-brand-teal mt-1.5">$350</span>
                    <span className="text-[10px] sm:text-xs italic text-brand-teal/60 mt-1">/ Crown</span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-[#1c2e2c] mb-3">
                    Dental <span className="font-serif italic font-normal text-brand-teal">Crowns</span>
                  </h3>
                  <p className="text-brand-teal/75 text-[15px] leading-relaxed mb-6 font-light">
                    Dental crowns are protective caps placed over damaged or weakened teeth to restore durability and daily functioning.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Full Protection</span>
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Restored Strength</span>
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Daily Functioning</span>
                  </div>
                </div>
              </div>

              {/* Service Card 5: Full Mouth Restoration */}
              <div className="sticky top-[220px] z-50 bg-white border border-brand-teal/5 rounded-[2rem] p-8 sm:p-10 shadow-[0_4px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_45px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col gap-6 text-left">
                {/* Top Header Row */}
                <div className="flex justify-between items-start w-full">
                  <div className="w-16 h-16 rounded-2xl bg-brand-mint flex items-center justify-center shrink-0">
                    <svg className="w-9 h-9 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      {/* Complete mouth/shield icon */}
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  
                  {/* Price Stack */}
                  <div className="text-right leading-none flex flex-col items-end">
                    <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-teal/50 uppercase">START</span>
                    <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-teal/50 uppercase mt-0.5">FROM</span>
                    <span className="text-2xl sm:text-3xl font-bold text-brand-teal mt-1.5">$2,999</span>
                    <span className="text-[10px] sm:text-xs italic text-brand-teal/60 mt-1">/ Treatment</span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-[#1c2e2c] mb-3">
                    Full Mouth <span className="font-serif italic font-normal text-brand-teal">Restoration</span>
                  </h3>
                  <p className="text-brand-teal/75 text-[15px] leading-relaxed mb-6 font-light">
                    Full mouth restoration is a combination of dental treatments in which several procedures are conducted altogether to correct all the issues across the mouth.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Complete Smile Rehab</span>
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Total Oral Function</span>
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Enhanced Confidence</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>      {/* 4. WHY CHOOSE US SECTION */}
      <section id="why-choose-us" className="w-full bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
            Why Choose Us
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-16 text-center">
            Why Choose  
            HPT
            <br></br>
            Medical Tourism Services for Dental Treatments?
          </h2>

          <div className="w-full max-w-5xl relative pb-12 md:pb-28">
            {/* Group Therapy Image */}
            <div className="w-full aspect-[16/9] relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-brand-teal/5">
              <Image
                src="/mindera_support_group_clean.png"
                alt="Therapy support group holding hands"
                fill
                className="object-cover"
                sizes="(max-w-1200px) 100vw, 1000px"
              />
              <div className="absolute inset-0 bg-black/15 pointer-events-none" />

            </div>

            {/* Overlapping Cards Container */}
            <div className="relative md:absolute md:left-6 md:right-6 md:bottom-0 md:translate-y-1/2 mt-8 md:mt-0 bg-[#f4faf9] border border-brand-teal/5 rounded-[2rem] p-4 sm:p-5 shadow-lg z-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                
                {/* Card 1 */}
                <div className="bg-white border border-[#e5ebe9] rounded-[1.25rem] p-5 sm:p-6 flex flex-col justify-between text-left">
                  <div>
                    <h4 className="text-[15px] font-bold text-[#1c2e2c] mb-2.5 leading-snug">
                      <span className="text-brand-teal">Trusted</span> Clinics and Specialist Support
                    </h4>
                    <p className="text-[#556966] text-[12px] sm:text-[12.5px] leading-relaxed font-light">
                      We have a well-maintained collaboration with selected dental clinics and experienced specialists across India and other destinations. These clinics have a team of professionals involved in implant and other restorative dental care using modern technologies.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white border border-[#e5ebe9] rounded-[1.25rem] p-5 sm:p-6 flex flex-col justify-between text-left">
                  <div>
                    <h4 className="text-[15px] font-bold text-[#1c2e2c] mb-2.5 leading-snug">
                      Transparent Communication
                    </h4>
                    <p className="text-[#556966] text-[12px] sm:text-[12.5px] leading-relaxed font-light">
                      We are highly committed to maintaining clear communication throughout the treatment process, including treatment planning, estimated costs, and practical guidance before they begin their medical tourism journey.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white border border-[#e5ebe9] rounded-[1.25rem] p-5 sm:p-6 flex flex-col justify-between text-left">
                  <div>
                    <h4 className="text-[15px] font-bold text-[#1c2e2c] mb-2.5 leading-snug">
                      End-to-End International Support
                    </h4>
                    <p className="text-[#556966] text-[12px] sm:text-[12.5px] leading-relaxed font-light">
                      We support patients with the most suitable treatment options, accommodation planning for their treatment abroad, treatment coordination, and recovery monitoring after completion of the treatment.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GUIDED STEPS / PROCESS SECTION (How It Works) */}
      <section id="process" className="w-full bg-white py-20 lg:py-32 border-t border-b border-brand-teal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Headline + Tag + Button */}
            <div className="lg:col-span-3 flex flex-col items-start text-left">
              <div className="flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                Our Process
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-8">
                Your Dental <br />
                Treatment <br />
                Process <br />
                <span className="font-serif italic font-normal text-brand-teal block mt-1">With HPT</span>
              </h2>

              <a
                href="#consultation"
                className="bg-brand-teal hover:bg-brand-teal-light text-white text-[13px] font-bold px-6 py-3.5 rounded-full transition-all duration-300 shadow-md flex items-center gap-2 w-fit mb-10 lg:mb-0"
              >
                Request Consultation
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Middle Column - Portrait Image */}
            <div className="lg:col-span-4 w-full">
              <div className="w-full relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl border border-white bg-white">
                <Image
                  src="/mindera_process.png"
                  alt="Counseling therapist explaining steps"
                  fill
                  className="object-cover"
                  sizes="(max-w-1024px) 40vw, 30vw"
                />
              </div>
            </div>

            {/* Right Column - Steps timeline */}
            <div className="lg:col-span-5 relative pl-4 sm:pl-8 w-full">
              
              {/* vertical connecting line */}
              <div className="absolute left-10 sm:left-14 top-8 bottom-8 w-[2px] bg-[#d1dcd9] pointer-events-none" />

              <div className="flex flex-col gap-8">
                
                {/* Step 1 */}
                <div className="flex gap-6 items-start relative group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-md z-10 border-4 border-white transition-transform duration-300 group-hover:scale-105">
                    01
                  </div>
                  <div className="flex-1 text-left pt-1 sm:pt-2">
                    <h4 className="text-lg font-bold text-[#1c2e2c] mb-1">
                      First Consultation And Specialist <span className="font-serif italic font-normal text-brand-teal">Review</span>
                    </h4>
                    <p className="text-[#1c2e2c]/70 text-[13px] leading-relaxed font-light">
                      Review your dental records with specialists to recommend the best treatment options.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-6 items-start relative group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#d1dcd9] text-[#1c2e2c]/70 flex items-center justify-center font-bold text-lg shrink-0 shadow-sm z-10 border-4 border-white transition-transform duration-300 group-hover:scale-105">
                    02
                  </div>
                  <div className="flex-1 text-left pt-1 sm:pt-2">
                    <h4 className="text-lg font-bold text-[#1c2e2c] mb-1">
                      Personalized Treatment Planning <span className="font-serif italic font-normal text-brand-teal">Before Travel</span>
                    </h4>
                    <p className="text-[#1c2e2c]/70 text-[13px] leading-relaxed font-light">
                      Get a customized plan covering estimated costs, stay duration, and travel guidance.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-6 items-start relative group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#d1dcd9] text-[#1c2e2c]/70 flex items-center justify-center font-bold text-lg shrink-0 shadow-sm z-10 border-4 border-white transition-transform duration-300 group-hover:scale-105">
                    03
                  </div>
                  <div className="flex-1 text-left pt-1 sm:pt-2">
                    <h4 className="text-lg font-bold text-[#1c2e2c] mb-1">
                      Travel And Stay <span className="font-serif italic font-normal text-brand-teal">Arrangements</span>
                    </h4>
                    <p className="text-[#1c2e2c]/70 text-[13px] leading-relaxed font-light">
                      We manage all your travel, accommodation, and stay arrangements for a smooth journey.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-6 items-start relative group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#d1dcd9] text-[#1c2e2c]/70 flex items-center justify-center font-bold text-lg shrink-0 shadow-sm z-10 border-4 border-white transition-transform duration-300 group-hover:scale-105">
                    04
                  </div>
                  <div className="flex-1 text-left pt-1 sm:pt-2">
                    <h4 className="text-lg font-bold text-[#1c2e2c] mb-1">
                      Treatment through Trusted Partner <span className="font-serif italic font-normal text-brand-teal">Clinics</span>
                    </h4>
                    <p className="text-[#1c2e2c]/70 text-[13px] leading-relaxed font-light">
                      Undergo your dental treatment with experienced specialists using advanced techniques.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex gap-6 items-start relative group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#d1dcd9] text-[#1c2e2c]/70 flex items-center justify-center font-bold text-lg shrink-0 shadow-sm z-10 border-4 border-white transition-transform duration-300 group-hover:scale-105">
                    05
                  </div>
                  <div className="flex-1 text-left pt-1 sm:pt-2">
                    <h4 className="text-lg font-bold text-[#1c2e2c] mb-1">
                      Post-Treatment <span className="font-serif italic font-normal text-brand-teal">Support</span>
                    </h4>
                    <p className="text-[#1c2e2c]/70 text-[13px] leading-relaxed font-light">
                      Receive comprehensive guidance and follow-up support to monitor your recovery.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER (CTA) */}
      <section className="w-full text-white py-24 sm:py-32 relative overflow-hidden flex items-center justify-center min-h-[500px]">
        {/* Background Image / Video Container */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Fallback image shown during load */}
          <Image
            src="/mindera_support_group_clean.png"
            alt="Support group session"
            fill
            className={`object-cover object-center transition-opacity duration-700 ${
              ctaVideoLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            priority
          />
          
          {/* Background Video Player */}
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            <video
              src="/Group%20Counseling%20Helping%20And%20People%20For%20Support%20-%20NXCR3WK.mp4"
              autoPlay
              loop
              muted
              playsInline
              onPlay={() => setCtaVideoLoaded(true)}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Dark overlay to match mockup design */}
          <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          {/* Tag */}
          <div className="flex items-center gap-2 text-white/90 text-xs font-bold tracking-[0.2em] uppercase mb-6">
            <span className="text-white text-xs">✦</span>
            START TODAY
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white mb-6 leading-[1.15] max-w-2xl font-sans">
            Start With a <br />
            <span className="font-serif italic font-normal text-white block mt-2">
              Case Review
            </span>
          </h2>
          
          {/* Paragraph */}
          <p className="text-base sm:text-lg text-white/95 leading-relaxed font-light mb-10 max-w-xl mx-auto">
            Share your details and treatment information. We will coordinate with selected clinics for specialist review and treatment recommendations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
            <a
              href="#book"
              className="w-full sm:w-auto bg-white hover:bg-zinc-150 text-[#1c2e2c] font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              Submit Your Case→
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto border border-white/40 hover:bg-white/10 text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
            >
              Contact Us →
            </a>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS SECTION */}
      <section id="testimonials" className="w-full bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left column info panel */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                CLIENT STORIES
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-8">
                What Our <br />
                Clients <br />
                <span className="font-serif italic font-normal text-brand-teal block mt-1">Say About Us</span>
              </h2>

              <a
                href="#reviews"
                className="bg-[#1c2e2c] hover:bg-[#283e3c] text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300 shadow-md flex items-center justify-center gap-2 w-fit mb-16 lg:mb-24"
              >
                View All Testimonials &rarr;
              </a>

              {/* Trust Stack Indicator */}
              <div className="flex flex-col items-start pt-8 border-t border-brand-teal/10 max-w-xs">
                {/* Overlapping customer avatars */}
                <div className="flex -space-x-2.5 mb-4">
                  <div className="relative w-9 h-9 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <Image
                      src="/mindera_therapist_1.png"
                      alt="Customer Avatar"
                      fill
                      className="object-cover"
                      sizes="36px"
                    />
                  </div>
                  <div className="relative w-9 h-9 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <Image
                      src="/mindera_therapist_2.png"
                      alt="Customer Avatar"
                      fill
                      className="object-cover"
                      sizes="36px"
                    />
                  </div>
                  <div className="relative w-9 h-9 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <Image
                      src="/mindera_therapist_3.png"
                      alt="Customer Avatar"
                      fill
                      className="object-cover"
                      sizes="36px"
                    />
                  </div>
                  <div className="relative w-9 h-9 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <Image
                      src="/mindera_therapist_4.png"
                      alt="Customer Avatar"
                      fill
                      className="object-cover"
                      sizes="36px"
                    />
                  </div>
                </div>
                
                {/* Heading details */}
                <div className="text-[22px] font-bold text-[#1c2e2c] flex items-center leading-none">
                  780K<span className="text-[#56b0a4] font-light ml-0.5">+</span>
                  <span className="text-base font-normal text-[#1c2e2c]/85 ml-2">Customer</span>
                </div>
                <p className="text-[13px] text-brand-teal/70 font-light mt-2">
                  Satisfied with our services
                </p>
              </div>
            </div>

            {/* Right column reviews list */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Testimonial Card 1 */}
              <div className="bg-[#f4faf9] border border-brand-teal/5 rounded-[2rem] p-6 sm:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-stretch relative overflow-hidden">
                {/* Left Card: Image with rounded corners and play button overlay */}
                <div className="w-full md:w-[38%] relative aspect-[4/5] md:aspect-auto rounded-2xl overflow-hidden shrink-0">
                  <Image
                    src="/mindera_testimonial_1.png"
                    alt="Brandon John"
                    fill
                    className="object-cover"
                    sizes="(max-w-768px) 100vw, 220px"
                  />
                  {/* Floating Play Video Badge */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/75 backdrop-blur-sm shadow-sm px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-[11px] text-[#1c2e2c] font-semibold hover:bg-white transition-colors cursor-pointer z-10 whitespace-nowrap">
                    <svg className="w-3.5 h-3.5 fill-[#1c2e2c] stroke-none" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Play Video
                  </div>
                </div>

                {/* Right Card: Content */}
                <div className="flex-1 flex flex-col justify-between pt-1">
                  <div>
                    {/* Stars */}
                    <div className="flex text-[#0f766e] mb-3 text-sm">
                      ★★★★★
                    </div>
                    {/* Quote */}
                    <blockquote className="text-brand-teal/85 text-[14px] sm:text-[15px] leading-relaxed font-light mb-6 text-left">
                      &ldquo;I was suffering from a wide range of dental problems, and my life has changed completely just because of the full mouth restoration treatment that I received with the help of HPT Medical Tourism Company. Now I am again able to eat comfortably and smile confidently.&rdquo;
                    </blockquote>
                  </div>

                  {/* Author / Quote Symbol Stack */}
                  <div className="flex items-end justify-between border-t border-brand-teal/5 pt-4">
                    <div>
                      <h4 className="font-bold text-[#1c2e2c] text-base">Brandon John</h4>
                      <p className="text-xs text-brand-teal/70 font-semibold mt-1">CEO, TeamTalk</p>
                    </div>
                    {/* Large quote symbol */}
                    <span className="text-6xl font-serif text-[#0f766e]/30 leading-none select-none">
                      ”
                    </span>
                  </div>
                </div>
              </div>

              {/* Testimonial Card 2 */}
              <div className="bg-[#f4faf9] border border-brand-teal/5 rounded-[2rem] p-6 sm:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-stretch relative overflow-hidden">
                {/* Left Card: Image with rounded corners and play button overlay */}
                <div className="w-full md:w-[38%] relative aspect-[4/5] md:aspect-auto rounded-2xl overflow-hidden shrink-0">
                  <Image
                    src="/mindera_testimonial_2.png"
                    alt="Julia Tandra"
                    fill
                    className="object-cover"
                    sizes="(max-w-768px) 100vw, 220px"
                  />
                  {/* Floating Play Video Badge */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/75 backdrop-blur-sm shadow-sm px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-[11px] text-[#1c2e2c] font-semibold hover:bg-white transition-colors cursor-pointer z-10 whitespace-nowrap">
                    <svg className="w-3.5 h-3.5 fill-[#1c2e2c] stroke-none" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Play Video
                  </div>
                </div>

                {/* Right Card: Content */}
                <div className="flex-1 flex flex-col justify-between pt-1">
                  <div>
                    {/* Stars */}
                    <div className="flex text-[#0f766e] mb-3 text-sm">
                      ★★★★★
                    </div>
                    {/* Quote */}
                    <blockquote className="text-brand-teal/85 text-[14px] sm:text-[15px] leading-relaxed font-light mb-6 text-left">
                      &ldquo;The team of HPT handled everything very perfectly from consultation to treatment. My crowns and veneers are appearing so natural.&rdquo;
                    </blockquote>
                  </div>

                  {/* Author / Quote Symbol Stack */}
                  <div className="flex items-end justify-between border-t border-brand-teal/5 pt-4">
                    <div>
                      <h4 className="font-bold text-[#1c2e2c] text-base">Julia Tandra</h4>
                      <p className="text-xs text-brand-teal/70 font-semibold mt-1">CEO, Artico.Co</p>
                    </div>
                    {/* Large quote symbol */}
                    <span className="text-6xl font-serif text-[#0f766e]/30 leading-none select-none">
                      ”
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 8. PARTNER / LOGO ROW */}
      <section className="w-full bg-white pt-2 sm:pt-4 pb-16 sm:pb-20 border-b border-brand-teal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
          {/* Centered Tag */}
          <div className="inline-flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
            TRUSTED GLOBAL PARTNER
          </div>

          {/* 6 Grid Boxes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
            
            {/* Box 1 */}
            <div className="bg-[#fafcfc] border border-[#e5ebe9] rounded-2xl p-3.5 flex items-center justify-center h-[76px] sm:h-[92px] hover:border-brand-teal/20 transition-all duration-300">
              <div className="relative w-full h-full max-h-[42px] sm:max-h-[50px]">
                <Image
                  src="/1.webp"
                  alt="HOOKS"
                  fill
                  className="object-contain grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-[#fafcfc] border border-[#e5ebe9] rounded-2xl p-3.5 flex items-center justify-center h-[76px] sm:h-[92px] hover:border-brand-teal/20 transition-all duration-300">
              <div className="relative w-full h-full max-h-[42px] sm:max-h-[50px]">
                <Image
                  src="/2.webp"
                  alt="FOX HUB"
                  fill
                  className="object-contain grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-[#fafcfc] border border-[#e5ebe9] rounded-2xl p-3.5 flex items-center justify-center h-[76px] sm:h-[92px] hover:border-brand-teal/20 transition-all duration-300">
              <div className="relative w-full h-full max-h-[42px] sm:max-h-[50px]">
                <Image
                  src="/3.webp"
                  alt="HEX LAB"
                  fill
                  className="object-contain grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>

            {/* Box 4 */}
            <div className="bg-[#fafcfc] border border-[#e5ebe9] rounded-2xl p-3.5 flex items-center justify-center h-[76px] sm:h-[92px] hover:border-brand-teal/20 transition-all duration-300">
              <div className="relative w-full h-full max-h-[42px] sm:max-h-[50px]">
                <Image
                  src="/4.webp"
                  alt="MUZICA"
                  fill
                  className="object-contain grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>

            {/* Box 5 */}
            <div className="bg-[#fafcfc] border border-[#e5ebe9] rounded-2xl p-3.5 flex items-center justify-center h-[76px] sm:h-[92px] hover:border-brand-teal/20 transition-all duration-300">
              <div className="relative w-full h-full max-h-[42px] sm:max-h-[50px]">
                <Image
                  src="/5.webp"
                  alt="Radiyal"
                  fill
                  className="object-contain grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>

            {/* Box 6 */}
            <div className="bg-[#fafcfc] border border-[#e5ebe9] rounded-2xl p-3.5 flex items-center justify-center h-[76px] sm:h-[92px] hover:border-brand-teal/20 transition-all duration-300">
              <div className="relative w-full h-full max-h-[42px] sm:max-h-[50px]">
                <Image
                  src="/6.webp"
                  alt="kanba"
                  fill
                  className="object-contain grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 9.5. FAQ SECTION */}
      <section id="faq" className="w-full bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column - Mint Card */}
            <div className="lg:col-span-5 bg-[#e8f1ef] rounded-[2rem] p-6 sm:p-8 flex flex-col gap-6 text-left">
              {/* Image */}
              <div className="relative w-full aspect-[1.2/1] rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/mindera_support_group_clean.png"
                  alt="Support group session"
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 100vw, 400px"
                />
              </div>

              {/* Title & Info */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1c2e2c] leading-snug">
                  Do You Have <span className="font-serif italic font-normal text-brand-teal">Any Other Questions?</span>
                </h3>
                <p className="text-[13px] text-brand-teal/75 leading-relaxed font-light mt-3">
                  Here you can find answers to some frequently asked questions about dental treatments.
                </p>
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                className="bg-[#1c2e2c] hover:bg-[#283e3c] text-white font-semibold text-xs px-6 py-3.5 rounded-full transition-all duration-300 shadow-md flex items-center justify-center gap-2 w-fit"
              >
                Free Consultation &rarr;
              </a>
            </div>

            {/* Right Column - Accordion */}
            <div className="lg:col-span-7 flex flex-col text-left">
              {/* Tag */}
              <div className="inline-flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                NEED HELP
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-10">
                Frequently Asked Questions <br />
                About <span className="font-serif italic font-normal text-brand-teal">Dental Treatments</span>
              </h2>

              {/* Accordion Wrapper */}
              <div className="flex flex-col gap-4">
                {faqItems.map((item, idx) => {
                  const isActive = activeFaq === idx;
                  return (
                    <div
                      key={idx}
                      className={`rounded-2xl transition-all duration-300 ${
                        isActive
                          ? "bg-brand-teal text-white p-6 shadow-md border-none"
                          : "bg-[#fafcfc] border border-[#e5ebe9] text-[#1c2e2c] p-6 hover:border-brand-teal hover:text-brand-teal cursor-pointer"
                      }`}
                      onClick={() => setActiveFaq(idx)}
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between gap-4 select-none">
                        <span className="font-bold text-sm sm:text-base leading-snug">
                          {item.question}
                        </span>
                        <span className="text-base font-semibold shrink-0">
                          {isActive ? "↑" : "↓"}
                        </span>
                      </div>

                      {/* Content panel */}
                      {isActive && (
                        <p className="text-[13px] text-white/85 leading-relaxed font-light mt-3 animate-fadeIn">
                          {item.answer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </div>
      </section>

      <section id="book" className="w-full bg-[#f6faf9] py-20 lg:py-32 border-b border-brand-teal/5 relative">
        <div id="contact" className="absolute top-0 left-0" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column - Text and Info */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              {/* Tag */}
              <div className="inline-flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                START HERE
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-6">
                Start Your Treatment Inquiry <br />
                <span className="font-serif italic font-normal text-brand-teal block mt-2">
                  With Confidence and Support
                </span>
              </h2>

              {/* Paragraph */}
              <p className="text-base sm:text-lg text-brand-teal/70 leading-relaxed font-light mb-10 max-w-md">
                Complete the form and our team will help coordinate the next steps for clinic review and treatment planning.
              </p>

              {/* Contact Info Row */}
              <div className="flex flex-col sm:flex-row gap-8 mb-12 w-full">
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1c2e2c] text-white flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <span className="block text-[11px] font-bold tracking-wider text-brand-teal/50 uppercase">CALL US</span>
                    <span className="text-base font-bold text-[#1c2e2c]">+1 (555) 123-4567</span>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1c2e2c] text-white flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <span className="block text-[11px] font-bold tracking-wider text-brand-teal/50 uppercase">EMAIL US</span>
                    <span className="text-base font-bold text-[#1c2e2c]">hello@mindera.com</span>
                  </div>
                </div>
              </div>

              {/* Side-by-Side Images */}
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-brand-teal/5">
                  <Image
                    src="/mindera_consultation.png"
                    alt="Consultation room"
                    fill
                    className="object-cover"
                    sizes="(max-w-768px) 50vw, 250px"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-brand-teal/5">
                  <Image
                    src="/mindera_process.png"
                    alt="Counseling session"
                    fill
                    className="object-cover"
                    sizes="(max-w-768px) 50vw, 250px"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Booking Form */}
            <div className="lg:col-span-6 w-full">
              {formSubmitted ? (
                <div className="bg-white border border-[#e5ebe9] rounded-[2rem] p-6 sm:p-10 shadow-[0_10px_45px_rgba(0,0,0,0.02)] py-20 text-center">
                  <div className="w-16 h-16 bg-brand-mint rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-brand-teal/70 text-sm font-light max-w-sm mx-auto">
                    We have received your dental scan details and will get back to you with clinic review suggestions within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="bg-white border border-[#e5ebe9] rounded-[2rem] p-6 sm:p-10 shadow-[0_10px_45px_rgba(0,0,0,0.02)] flex flex-col gap-6 text-left">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-xs font-bold text-[#1c2e2c] uppercase tracking-wide">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#fafcfc] border border-[#e5ebe9] rounded-xl px-4 py-3.5 text-sm text-[#1c2e2c] placeholder-[#1c2e2c]/45 focus:outline-none focus:border-brand-teal/40 transition-colors"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-xs font-bold text-[#1c2e2c] uppercase tracking-wide">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#fafcfc] border border-[#e5ebe9] rounded-xl px-4 py-3.5 text-sm text-[#1c2e2c] placeholder-[#1c2e2c]/45 focus:outline-none focus:border-brand-teal/40 transition-colors"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="phone" className="text-xs font-bold text-[#1c2e2c] uppercase tracking-wide">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#fafcfc] border border-[#e5ebe9] rounded-xl px-4 py-3.5 text-sm text-[#1c2e2c] placeholder-[#1c2e2c]/45 focus:outline-none focus:border-brand-teal/40 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1 custom-select-container relative">
                    <label className="text-xs font-bold text-[#1c2e2c] uppercase tracking-wide">Select Treatment / Service</label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full bg-[#fafcfc] border border-[#e5ebe9] rounded-xl px-4 py-3.5 text-sm text-[#1c2e2c] focus:outline-none focus:border-brand-teal/40 transition-colors flex justify-between items-center cursor-pointer text-left"
                      >
                        <span className="truncate">
                          {formData.services.length > 0
                            ? formData.services
                                .map((s) => {
                                  const opt = [
                                    { value: "implant", label: "Dental Implants" },
                                    { value: "bridge", label: "Dental Bridges" },
                                    { value: "veneer", label: "Dental Veneers" },
                                    { value: "crown", label: "Dental Crowns" },
                                    { value: "restoration", label: "Full Mouth Restoration" },
                                    { value: "consultation", label: "General Consultation" },
                                  ].find((o) => o.value === s);
                                  return opt ? opt.label : s;
                                })
                                .join(", ")
                            : "Select Treatment(s)"}
                        </span>
                        <svg className={`fill-current h-4 w-4 text-[#1c2e2c]/70 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </button>

                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 z-50 w-full mt-1.5 bg-white border border-[#e5ebe9] rounded-xl shadow-lg py-1.5 max-h-60 overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-150">
                          {[
                            { value: "implant", label: "Dental Implants" },
                            { value: "bridge", label: "Dental Bridges" },
                            { value: "veneer", label: "Dental Veneers" },
                            { value: "crown", label: "Dental Crowns" },
                            { value: "restoration", label: "Full Mouth Restoration" },
                            { value: "consultation", label: "General Consultation" },
                          ].map((option) => {
                            const isChecked = formData.services.includes(option.value);
                            return (
                              <div
                                key={option.value}
                                onClick={() => {
                                  const nextServices = isChecked
                                    ? formData.services.filter((v) => v !== option.value)
                                    : [...formData.services, option.value];
                                  setFormData({ ...formData, services: nextServices });
                                }}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-brand-mint/30 cursor-pointer text-sm text-[#1c2e2c] transition-colors"
                              >
                                <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${isChecked ? "bg-brand-teal border-brand-teal text-white" : "border-[#cbd5e1] bg-white"}`}>
                                  {isChecked && (
                                    <svg className="w-3.5 h-3.5 stroke-current stroke-[3] fill-none" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                  )}
                                </div>
                                <span className={isChecked ? "font-semibold text-brand-teal" : "font-normal"}>{option.label}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    {formData.services.length === 0 && (
                      <span className="text-[11px] text-red-500 mt-0.5">Please select at least one treatment.</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="message" className="text-xs font-bold text-[#1c2e2c] uppercase tracking-wide">Additional Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your dental needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#fafcfc] border border-[#e5ebe9] rounded-xl px-4 py-3.5 text-sm text-[#1c2e2c] placeholder-[#1c2e2c]/45 focus:outline-none focus:border-brand-teal/40 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-[#1c2e2c] hover:bg-[#283e3c] text-white font-semibold text-sm py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 w-full mt-2 cursor-pointer"
                  >
                    Submit your Inquiry &rarr;
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
