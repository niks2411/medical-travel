"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PRKPage() {
  const [activeFaq, setActiveFaq] = useState<number>(0);
  const [ctaVideoLoaded, setCtaVideoLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: ["prk"],
    timeframe: "1_month",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<"eligibility" | "procedure" | "recovery">("eligibility");
  const [isTabTransitioning, setIsTabTransitioning] = useState(false);

  const changeTab = (tab: "eligibility" | "procedure" | "recovery") => {
    if (tab !== activeTab) {
      setIsTabTransitioning(true);
      setTimeout(() => {
        setActiveTab(tab);
        setIsTabTransitioning(false);
      }, 150);
    }
  };

  const faqItems = [
    {
      question: "Who is the right candidate for PRK?",
      answer: "PRK is suitable for all adults looking to correct vision problems like nearsightedness (Myopia), farsightedness (Hyperopia), or astigmatism. This treatment is particularly recommended for people who have thin corneas and are ineligible for LASIK."
    },
    {
      question: "Is PRK treatment painful?",
      answer: "During PRK treatment, surgeons use numbing eye drops to prevent pain. For a few days during the surface healing phase, patients may experience gentle discomfort, but this improves gradually with prescribed medications and rest."
    },
    {
      question: "How much time is required for PRK recovery?",
      answer: "Initial surface healing takes 3-5 days, after which the protective contact lens is removed by your specialist. Over 1-2 weeks your vision improves steadily, and full stabilization occurs within 3-6 weeks."
    },
    {
      question: "Is PRK really a secure treatment option for me?",
      answer: "For several decades, PRK has been renowned as an extremely secure and trusted procedure for laser vision correction. Risks are minimal when conducted by experienced eye surgeons employing advanced laser technology."
    },
    {
      question: "How does HPT company arrange the most secure PRK treatment in several countries?",
      answer: "HPT company collaborates with internationally accredited hospitals and experienced eye surgeons who specialize in laser vision correction. Our team ensures a safe, comfortable, and successful treatment journey right from pre-travel consultation to scheduling and post-treatment care."
    }
  ];

  const testimonials = [
    {
      text: "I was told by local doctors that my corneas were too thin for LASIK. I thought I was stuck wearing thick glasses forever. HPT company connected me with an outstanding eye specialist abroad who performed PRK. Today I have 20/20 vision and zero regrets!",
      author: "David Miller",
      title: "Thin Cornea PRK Patient",
      avatar: "/mindera_therapist_3.png"
    },
    {
      text: "As someone involved in active outdoor sports, I wanted a vision procedure without corneal flap risks. HPT organized my entire PRK treatment journey smoothly in Thailand. The recovery guidance was top-notch.",
      author: "Elena Rostova",
      title: "Sports & Outdoor Enthusiast",
      avatar: "/mindera_therapist_4.png"
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#fafdfc] text-[#1c2e2c] flex flex-col font-sans">
      <Navbar />

      {/* 1. HERO SECTION (Split-screen) */}
      <section className="relative w-full flex flex-col lg:flex-row min-h-[calc(100vh-92px)]">
        {/* Left Side Hero Panel */}
        <div className="w-full lg:w-[55%] bg-white flex flex-col justify-center p-6 sm:p-10 lg:p-12 xl:p-16 py-16 lg:py-20 text-left">
          <div className="my-auto py-12 lg:py-0 max-w-2xl">
            {/* Tag */}
            <div className="flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
              Eye & Vision Care • PRK Treatment
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-6">
              PRK (Photorefractive Keratectomy) – <br />
              <span className="font-serif italic font-normal text-brand-teal block mt-2">
                The Most Trustworthy Solution To Get A Clear Vision
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-brand-teal/70 leading-relaxed mb-6 max-w-lg font-light">
              In this procedure, your cornea is gently reshaped and vision problems like Hyperopia (farsightedness), Myopia (nearsightedness), and Astigmatism are corrected using advanced, flap-free laser technology.
            </p>
            
            <p className="text-sm sm:text-base text-brand-teal/70 leading-relaxed mb-10 max-w-lg font-light">
              PRK is the ideal, time-tested alternative for individuals with thin corneas or active lifestyles who want permanent vision freedom without the need for a corneal flap.
            </p>

            {/* Hero Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="bg-brand-teal hover:bg-brand-teal-light text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
              >
                Discuss Your PRK Case
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="#tabs"
                className="border border-brand-teal/20 hover:border-brand-teal/40 text-brand-teal font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 hover:bg-brand-mint/40 flex items-center justify-center gap-2 cursor-pointer"
              >
                Explore Journey
                <svg className="w-4 h-4 text-brand-teal/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Trust Badge */}
            <div className="flex flex-row items-center gap-4 mt-10">
              <div className="flex -space-x-3">
                <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <Image
                    src="/mindera_therapist_3.png"
                    alt="Happy Patient"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <Image
                    src="/mindera_therapist_4.png"
                    alt="Happy Patient"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <Image
                    src="/mindera_therapist_1.png"
                    alt="Happy Patient"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-1.5 text-brand-teal">
                  <svg className="w-4 h-4 fill-current text-brand-teal" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-semibold text-sm sm:text-[15px] leading-none">4.9/5 Rating clients</span>
                </div>
                <span className="text-brand-teal/80 text-[13px] sm:text-sm mt-1">Trusted by 950+ PRK Patients</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Hero Image Panel */}
        <div className="w-full lg:w-[45%] relative h-[500px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-full bg-brand-mint-dark overflow-hidden">
          <Image
            src="/prk_hero.png"
            alt="Clear vision after PRK procedure"
            fill
            priority
            className="object-cover object-center transition-opacity duration-700 opacity-100"
            sizes="(max-w-1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/15 pointer-events-none" />
        </div>
      </section>

      {/* 2. PRK STEPS VISUALIZATION SECTION (Matches Dental Implants Section 2.5 Layout) */}
      <section className="w-full bg-white py-20 lg:py-28 border-b border-brand-teal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Top Row: Content on left, Square Image on right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-12">
            
            {/* Left Column: Content */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <div className="flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                Treatment Steps
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] mb-6 font-sans">
                PRK Procedure <br />
                <span className="font-serif italic font-normal text-brand-teal block mt-2">
                  Treatment Steps
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#1c2e2c]/75 leading-relaxed font-light mb-6">
                Photorefractive Keratectomy (PRK) is a time-tested, flap-free laser eye procedure performed by highly experienced eye surgeons in top accredited international clinics in India, Bali, Singapore, and beyond.
              </p>

              <p className="text-base sm:text-lg text-[#1c2e2c]/75 leading-relaxed font-light">
                First, the thin outer epithelial layer of the cornea is gently removed. Then, an excimer laser reshapes the underlying corneal tissue with extreme precision to correct refractive errors. Finally, a clear protective bandage contact lens is placed to support smooth, stitch-free surface healing.
              </p>
            </div>

            {/* Right Column: Square Image */}
            <div className="lg:col-span-5 w-full">
              <div className="w-full relative aspect-square rounded-[2rem] overflow-hidden shadow-lg border border-brand-teal/5 bg-[#f6faf9] flex items-center justify-center">
                <Image
                  src="/prk_square.png"
                  alt="PRK procedure square step diagram"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                  sizes="(max-w-1024px) 100vw, 400px"
                />
              </div>
            </div>

          </div>

          {/* Bottom Row: Rectangle Image */}
          <div className="w-full">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] md:aspect-[24/9] lg:aspect-[32/11] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-lg border border-brand-teal/5 bg-[#f6faf9] flex items-center justify-center">
              <Image
                src="/prk_rectangle.png"
                alt="PRK procedure rectangle visualization"
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.01]"
                sizes="100vw"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE TABS SECTION */}
      <section id="tabs" className="w-full bg-[#f6faf9] py-20 lg:py-32 border-b border-brand-teal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
          
          {/* Tab Capsule Buttons */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12 bg-white/60 p-3 rounded-full border border-brand-teal/10 shadow-[0_8px_30px_rgba(8,72,67,0.03)]">
            <button
              onMouseEnter={() => changeTab("eligibility")}
              onClick={() => changeTab("eligibility")}
              className={`px-8 md:px-10 py-4 md:py-[18px] rounded-full font-bold text-base md:text-lg transition-all duration-300 cursor-pointer ${
                activeTab === "eligibility"
                  ? "bg-brand-teal text-white shadow-[0_10px_25px_-5px_rgba(8,72,67,0.35)] scale-[1.05]"
                  : "text-brand-teal/80 hover:bg-brand-mint/50 hover:text-brand-teal font-semibold"
              }`}
            >
              Who Needs PRK Treatment
            </button>
            <button
              onMouseEnter={() => changeTab("procedure")}
              onClick={() => changeTab("procedure")}
              className={`px-8 md:px-10 py-4 md:py-[18px] rounded-full font-bold text-base md:text-lg transition-all duration-300 cursor-pointer ${
                activeTab === "procedure"
                  ? "bg-brand-teal text-white shadow-[0_10px_25px_-5px_rgba(8,72,67,0.35)] scale-[1.05]"
                  : "text-brand-teal/80 hover:bg-brand-mint/50 hover:text-brand-teal font-semibold"
              }`}
            >
              HPT PRK Treatment Pathway
            </button>
            <button
              onMouseEnter={() => changeTab("recovery")}
              onClick={() => changeTab("recovery")}
              className={`px-8 md:px-10 py-4 md:py-[18px] rounded-full font-bold text-base md:text-lg transition-all duration-300 cursor-pointer ${
                activeTab === "recovery"
                  ? "bg-brand-teal text-white shadow-[0_10px_25px_-5px_rgba(8,72,67,0.35)] scale-[1.05]"
                  : "text-brand-teal/80 hover:bg-brand-mint/50 hover:text-brand-teal font-semibold"
              }`}
            >
              Recovery & Precautions
            </button>
          </div>

          {/* Content Wrapper */}
          <div className={`w-full bg-white border border-brand-teal/5 rounded-[2.5rem] p-8 sm:p-12 shadow-[0_10px_45px_rgba(0,0,0,0.02)] transition-all duration-300 ease-in-out ${isTabTransitioning ? "opacity-0 translate-y-1.5" : "opacity-100 translate-y-0"}`}>
            
            {/* TAB 1: ELIGIBILITY */}
            {activeTab === "eligibility" && (
              <div className="flex flex-col gap-10">
                <div className="text-left w-full">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1c2e2c] mb-4">
                    Who Needs PRK Treatment?
                  </h3>
                  <p className="text-brand-teal/70 text-base font-light leading-relaxed">
                    Experts recommend PRK treatment for those eager to revamp their vision and decrease dependency on contact lenses or glasses, but who are not candidates for flap procedures like LASIK due to eye conditions or lifestyle factors.
                  </p>
                </div>
                
                {/* 2x2 Grid of candidacy criteria */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  {/* Card 1 */}
                  <div className="bg-[#f4faf9] border border-brand-teal/5 rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 rounded-xl bg-brand-mint flex items-center justify-center shrink-0">
                          <svg className="w-6 h-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <span className="text-xl font-serif italic text-brand-teal/50">01</span>
                      </div>
                      <h4 className="text-lg font-bold text-[#1c2e2c] mb-2">Individuals With Thin Corneas</h4>
                      <p className="text-[#556966] text-sm leading-relaxed font-light mb-4">
                        Those not eligible for LASIK because their corneas are excessively thin for safely creating a corneal flap find PRK a phenomenal, flap-free alternative.
                      </p>
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <span className="text-[10px] bg-white text-brand-teal/80 border border-brand-teal/10 px-3 py-1 rounded-full font-medium">Thin Cornea Safe</span>
                      <span className="text-[10px] bg-white text-brand-teal/80 border border-brand-teal/10 px-3 py-1 rounded-full font-medium">Flap-Free</span>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-[#f4faf9] border border-brand-teal/5 rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 rounded-xl bg-brand-mint flex items-center justify-center shrink-0">
                          <svg className="w-6 h-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <span className="text-xl font-serif italic text-brand-teal/50">02</span>
                      </div>
                      <h4 className="text-lg font-bold text-[#1c2e2c] mb-2">People With Hyperopia, Myopia, Or Astigmatism</h4>
                      <p className="text-[#556966] text-sm leading-relaxed font-light mb-4">
                        PRK easily treats common refractive errors by reshaping corneal tissue so light focuses correctly onto the retina for crisp vision.
                      </p>
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <span className="text-[10px] bg-white text-brand-teal/80 border border-brand-teal/10 px-3 py-1 rounded-full font-medium">Refractive Errors</span>
                      <span className="text-[10px] bg-white text-brand-teal/80 border border-brand-teal/10 px-3 py-1 rounded-full font-medium">Retina Focus</span>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-[#f4faf9] border border-brand-teal/5 rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 rounded-xl bg-brand-mint flex items-center justify-center shrink-0">
                          <svg className="w-6 h-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <span className="text-xl font-serif italic text-brand-teal/50">03</span>
                      </div>
                      <h4 className="text-lg font-bold text-[#1c2e2c] mb-2">Active Lifestyles & Contact Roles</h4>
                      <p className="text-[#556966] text-sm leading-relaxed font-light mb-4">
                        Individuals in military, sports, or physically demanding jobs prefer PRK because there is no flap to be displaced by physical trauma or high impact.
                      </p>
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <span className="text-[10px] bg-white text-brand-teal/80 border border-brand-teal/10 px-3 py-1 rounded-full font-medium">No Flap Risk</span>
                      <span className="text-[10px] bg-white text-brand-teal/80 border border-brand-teal/10 px-3 py-1 rounded-full font-medium">Sports & Defense</span>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-[#f4faf9] border border-brand-teal/5 rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 rounded-xl bg-brand-mint flex items-center justify-center shrink-0">
                          <svg className="w-6 h-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-xl font-serif italic text-[#0f766e]/50">04</span>
                      </div>
                      <h4 className="text-lg font-bold text-[#1c2e2c] mb-2">Stable Vision Prescription</h4>
                      <p className="text-[#556966] text-sm leading-relaxed font-light mb-4">
                        Recommended for adults whose vision prescription has remained constant for at least one year to guarantee long-term treatment stability.
                      </p>
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <span className="text-[10px] bg-white text-brand-teal/80 border border-brand-teal/10 px-3 py-1 rounded-full font-medium">Min 1 Year Stable</span>
                      <span className="text-[10px] bg-white text-brand-teal/80 border border-brand-teal/10 px-3 py-1 rounded-full font-medium">Long-Term</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: PROCEDURE & HPT JOURNEY */}
            {activeTab === "procedure" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full">
                
                {/* Left Column */}
                <div className="lg:col-span-6 flex flex-col items-start text-left">
                  <div className="flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                    International Care Pathway
                  </div>

                  <h3 className="text-3xl sm:text-4xl lg:text-[38px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-8">
                    Your PRK Journey <span className="font-serif italic font-normal text-brand-teal">With HPT</span>
                  </h3>

                  {/* Image Container */}
                  <div className="w-full max-w-[340px] relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl border border-white bg-white mb-6">
                    <Image
                      src="/prk_process.png"
                      alt="Eye specialist conducting PRK consultation"
                      fill
                      className="object-cover"
                      sizes="(max-w-1024px) 100vw, 340px"
                    />
                  </div>

                  <p className="text-base sm:text-lg text-[#1c2e2c]/75 leading-relaxed font-light mb-8 max-w-[450px]">
                    HPT connects you with accredited eye care centers in India, Bali, Singapore, and beyond, arranging quick scheduling and affordable care.
                  </p>

                  <a
                    href="#contact"
                    className="bg-brand-teal hover:bg-brand-teal-light text-white text-[13px] font-bold px-6 py-3.5 rounded-full transition-all duration-300 shadow-md flex items-center gap-2 w-fit cursor-pointer"
                  >
                    Request Free Consultation
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>

                {/* Right Column - Steps timeline */}
                <div className="lg:col-span-6 relative pl-4 sm:pl-8 w-full">
                  <div className="absolute left-10 sm:left-14 top-8 bottom-8 w-[2px] bg-[#d1dcd9] pointer-events-none" />

                  <div className="flex flex-col gap-8">
                    <div className="flex gap-6 items-start relative group">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-md z-10 border-4 border-white">
                        01
                      </div>
                      <div className="flex-1 text-left pt-1 sm:pt-2">
                        <h4 className="text-lg font-bold text-[#1c2e2c] mb-1">Detailed Eye Analysis</h4>
                        <p className="text-[#1c2e2c]/70 text-[13px] leading-relaxed font-light">
                          Top eye specialists thoroughly analyze corneal thickness and topography to confirm PRK as your optimal flap-free solution.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-6 items-start relative group">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#e2ece9] text-[#084843] flex items-center justify-center font-bold text-lg shrink-0 shadow-sm z-10 border-4 border-white">
                        02
                      </div>
                      <div className="flex-1 text-left pt-1 sm:pt-2">
                        <h4 className="text-lg font-bold text-[#1c2e2c] mb-1">Customized PRK Treatment Plan</h4>
                        <p className="text-[#1c2e2c]/70 text-[13px] leading-relaxed font-light">
                          Specialists design a precise laser treatment plan tailored to your corneal profile, visual goals, and travel itinerary.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-6 items-start relative group">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#e2ece9] text-[#084843] flex items-center justify-center font-bold text-lg shrink-0 shadow-sm z-10 border-4 border-white">
                        03
                      </div>
                      <div className="flex-1 text-left pt-1 sm:pt-2">
                        <h4 className="text-lg font-bold text-[#1c2e2c] mb-1">Excimer Laser Surgery & Lens Placement</h4>
                        <p className="text-[#1c2e2c]/70 text-[13px] leading-relaxed font-light">
                          Surgeons gently remove outer corneal cells, apply excimer laser reshaping, and place a protective bandage lens for healing.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-6 items-start relative group">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#e2ece9] text-[#084843] flex items-center justify-center font-bold text-lg shrink-0 shadow-sm z-10 border-4 border-white">
                        04
                      </div>
                      <div className="flex-1 text-left pt-1 sm:pt-2">
                        <h4 className="text-lg font-bold text-[#1c2e2c] mb-1">Guided Healing & Follow-Up Support</h4>
                        <p className="text-[#1c2e2c]/70 text-[13px] leading-relaxed font-light">
                          Specialists monitor your surface healing, remove the bandage lens after 3-5 days, and support your recovery up to full vision stabilization.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* TAB 3: RECOVERY & PRECAUTIONS */}
            {activeTab === "recovery" && (
              <div className="flex flex-col gap-10 text-left w-full">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1c2e2c] mb-4">
                    Recovery & Early Precautions After PRK
                  </h3>
                  <p className="text-brand-teal/70 text-base font-light leading-relaxed">
                    PRK requires a structured recovery as the corneal surface layer regenerates. Following these guidelines ensures smooth healing and optimal vision:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Post-Op Expectations */}
                  <div className="bg-[#f4faf9] border border-brand-teal/5 rounded-2xl p-6 sm:p-8">
                    <h4 className="text-lg font-bold text-[#1c2e2c] mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
                      What Patients May Expect
                    </h4>
                    <p className="text-[#556966] text-sm leading-relaxed font-light">
                      Little pain, irritation, or burning for 2-3 days, initial blurred vision with gradual improvement, watering eyes, and sensitivity to light or glare. A protective bandage contact lens is placed to assist healing.
                    </p>
                  </div>

                  {/* Instant Care (First 3-5 Days) */}
                  <div className="bg-[#f4faf9] border border-brand-teal/5 rounded-2xl p-6 sm:p-8">
                    <h4 className="text-lg font-bold text-[#1c2e2c] mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
                      Instant Care (First 3-5 Days)
                    </h4>
                    <p className="text-[#556966] text-sm leading-relaxed font-light">
                      Rest eyes, avoid strain, bright light, touching or removing the bandage contact lens. Use prescribed antibiotic, lubricating, and anti-inflammatory eye drops regularly, and wear sunglasses indoors if required.
                    </p>
                  </div>

                  {/* Precautions for First Few Weeks */}
                  <div className="bg-[#f4faf9] border border-brand-teal/5 rounded-2xl p-6 sm:p-8">
                    <h4 className="text-lg font-bold text-[#1c2e2c] mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
                      Precautions for First Few Weeks
                    </h4>
                    <p className="text-[#556966] text-sm leading-relaxed font-light">
                      Avoid eye rubbing, water, soap, shampoo, or eye makeup for 1-2 weeks. Avoid dust, pollution, and smoke. Wear UV-protective sunglasses outdoors and limit screen time to prevent strain.
                    </p>
                  </div>

                  {/* Activities to Avoid & Timeline */}
                  <div className="bg-[#f4faf9] border border-brand-teal/5 rounded-2xl p-6 sm:p-8">
                    <h4 className="text-lg font-bold text-[#1c2e2c] mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
                      Recovery Timeline & Activities to Avoid
                    </h4>
                    <p className="text-[#556966] text-sm leading-relaxed font-light">
                      Avoid swimming and hot tubs for 2-3 weeks, contact sports, heavy workouts, and night driving until vision stabilizes. Surface healing takes 3-5 days (lens removal), vision improves in 1-2 weeks, and stabilizes in 3-6 weeks.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. HOW HPT SUPPORTS PATIENTS SECTION */}
      <section className="w-full bg-white py-20 lg:py-28 border-b border-brand-teal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-brand-teal text-white rounded-[2.5rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
            <div className="relative z-10 max-w-3xl text-left">
              <div className="inline-flex items-center gap-2 text-white/80 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                ✦ HPT GUARANTEE
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6 leading-tight">
                How HPT Supports Patients Exploring PRK Treatment
              </h2>
              <p className="text-white/90 text-base sm:text-lg leading-relaxed font-light mb-8">
                HPT supports patients by connecting them with trusted eye care centers and skilled specialists, offering access to a wide range of vision correction procedures including PRK, and scheduling quick consultations with shorter waiting periods in India, Bali, Singapore, and more.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/20">
                <div>
                  <div className="text-2xl font-bold text-white mb-1">Skilled Specialists</div>
                  <div className="text-xs text-white/80 font-light">Accredited Eye Hospitals</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">Shorter Wait Times</div>
                  <div className="text-xs text-white/80 font-light">Fast Consultation Setup</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">Full Recovery Support</div>
                  <div className="text-xs text-white/80 font-light">End-to-End Post-Op Care</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA VIDEO BANNER SECTION */}
      <section className="w-full text-white py-24 sm:py-32 relative overflow-hidden flex items-center justify-center min-h-[500px]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/mindera_support_group_clean.png"
            alt="Support group session"
            fill
            className={`object-cover object-center transition-opacity duration-700 ${
              ctaVideoLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            priority
          />
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
          <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          <div className="flex items-center gap-2 text-white/90 text-xs font-bold tracking-[0.2em] uppercase mb-6">
            <span className="text-white text-xs">✦</span>
            START YOUR PRK JOURNEY
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white mb-6 leading-[1.15] max-w-3xl font-sans">
            Discuss Your PRK Treatment <br />
            <span className="font-serif italic font-normal text-white block mt-2">
              Options With Us Today
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-white/95 leading-relaxed font-light mb-10 max-w-2xl mx-auto">
            Want to learn if PRK is the right flap-free option for your corneas? Connect with our dedicated care coordinators today.
          </p>

          <a
            href="#contact"
            className="bg-white hover:bg-zinc-100 text-[#1c2e2c] font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-lg flex items-center justify-center gap-2 cursor-pointer w-fit"
          >
            Start A Conversation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section id="testimonials" className="w-full bg-white py-20 lg:py-32 border-b border-brand-teal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 text-left">
              <div className="inline-flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                PATIENT STORIES
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-8">
                What Our Clients Say <br />
                <span className="font-serif italic font-normal text-brand-teal block mt-1">About PRK With HPT</span>
              </h2>

              <a
                href="#contact"
                className="bg-[#1c2e2c] hover:bg-[#283e3c] text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300 shadow-md flex items-center justify-center gap-2 w-fit mb-16 lg:mb-24 cursor-pointer"
              >
                Request Free Case Review &rarr;
              </a>

              <div className="flex flex-col items-start pt-8 border-t border-brand-teal/10 max-w-xs">
                <div className="flex -space-x-2.5 mb-4">
                  <div className="relative w-9 h-9 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <Image src="/mindera_therapist_3.png" alt="Avatar" fill className="object-cover" sizes="36px" />
                  </div>
                  <div className="relative w-9 h-9 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <Image src="/mindera_therapist_4.png" alt="Avatar" fill className="object-cover" sizes="36px" />
                  </div>
                  <div className="relative w-9 h-9 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <Image src="/mindera_therapist_1.png" alt="Avatar" fill className="object-cover" sizes="36px" />
                  </div>
                </div>
                
                <div className="text-[22px] font-bold text-[#1c2e2c] flex items-center leading-none">
                  950<span className="text-[#56b0a4] font-light ml-0.5">+</span>
                  <span className="text-base font-normal text-[#1c2e2c]/85 ml-2">Patients</span>
                </div>
                <p className="text-[13px] text-brand-teal/70 font-light mt-2">Achieved clear vision via PRK</p>
              </div>
            </div>

            {/* Right Column Reviews List */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {testimonials.map((t, idx) => (
                <div key={idx} className="bg-[#f4faf9] border border-brand-teal/5 rounded-[2rem] p-6 sm:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-stretch relative overflow-hidden text-left">
                  <div className="w-full md:w-[38%] relative aspect-[4/5] md:aspect-auto rounded-2xl overflow-hidden shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.author}
                      fill
                      className="object-cover"
                      sizes="(max-w-768px) 100vw, 220px"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between pt-1">
                    <div>
                      <div className="flex text-[#0f766e] mb-3 text-sm">★★★★★</div>
                      <blockquote className="text-brand-teal/85 text-[14px] sm:text-[15px] leading-relaxed font-light mb-6">
                        &ldquo;{t.text}&rdquo;
                      </blockquote>
                    </div>

                    <div className="flex items-end justify-between border-t border-brand-teal/5 pt-4">
                      <div>
                        <h3 className="font-bold text-[#1c2e2c] text-base">{t.author}</h3>
                        <p className="text-xs text-brand-teal/70">{t.title}</p>
                      </div>
                      <span className="text-xs text-brand-teal font-medium">Verified Patient</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 7. CONTACT CONSULTATION FORM SECTION */}
      <section id="contact" className="w-full bg-white py-20 lg:py-28 border-b border-brand-teal/5">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[#f4faf9] border border-brand-teal/10 rounded-[2.5rem] p-8 sm:p-12 shadow-lg text-left">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                Book Consultation
              </div>
              <h2 className="text-3xl font-bold text-[#1c2e2c] mb-3">
                Start Your PRK Vision Journey
              </h2>
              <p className="text-brand-teal/70 text-sm font-light">
                Fill out the form below to receive expert advice and treatment options for PRK abroad.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-brand-mint/40 border border-brand-teal/20 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-brand-teal text-white flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-[#1c2e2c] mb-2">Thank You!</h3>
                <p className="text-brand-teal/80 text-sm">
                  Your PRK inquiry has been received. Our eye care coordinator will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#1c2e2c] uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3.5 rounded-xl border border-brand-teal/20 bg-white text-sm focus:outline-none focus:border-brand-teal transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#1c2e2c] uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3.5 rounded-xl border border-brand-teal/20 bg-white text-sm focus:outline-none focus:border-brand-teal transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#1c2e2c] uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter phone number"
                      className="w-full px-4 py-3.5 rounded-xl border border-brand-teal/20 bg-white text-sm focus:outline-none focus:border-brand-teal transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1c2e2c] uppercase tracking-wider mb-2">
                    Preferred Timeframe
                  </label>
                  <select
                    value={formData.timeframe}
                    onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-brand-teal/20 bg-white text-sm focus:outline-none focus:border-brand-teal transition-colors"
                  >
                    <option value="immediate">As soon as possible</option>
                    <option value="1_month">Within 1 month</option>
                    <option value="3_months">Within 3 months</option>
                    <option value="exploring">Just exploring options</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1c2e2c] uppercase tracking-wider mb-2">
                    Message / Vision & Corneal Details
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your current prescription, corneal thickness findings (if known), or specific questions..."
                    className="w-full px-4 py-3.5 rounded-xl border border-brand-teal/20 bg-white text-sm focus:outline-none focus:border-brand-teal transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-brand-teal hover:bg-brand-teal-light text-white font-bold text-sm px-8 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer mt-2"
                >
                  Submit Inquiry & Request Callback
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION (Positioned UNDER Booking Form, Matching Dental Implants Section 9.5 Layout) */}
      <section id="faq" className="w-full bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column - Mint Card */}
            <div className="lg:col-span-5 bg-[#e8f1ef] rounded-[2rem] p-6 sm:p-8 flex flex-col gap-6 text-left">
              <div className="relative w-full aspect-[1.2/1] rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/mindera_support_group_clean.png"
                  alt="Support group session"
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 100vw, 400px"
                />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1c2e2c] leading-snug">
                  Know More About <span className="font-serif italic font-normal text-brand-teal">HPT & PRK</span>
                </h3>
                <p className="text-[13px] text-brand-teal/75 leading-relaxed font-light mt-3">
                  Thinking about flap-free PRK eye surgery often raises questions about corneal thickness and recovery. Here are direct answers to the questions asked most often.
                </p>
              </div>

              <a
                href="#contact"
                className="bg-[#1c2e2c] hover:bg-[#283e3c] text-white font-semibold text-xs px-6 py-3.5 rounded-full transition-all duration-300 shadow-md flex items-center justify-center gap-2 w-fit"
              >
                Get a Preliminary Review &rarr;
              </a>
            </div>

            {/* Right Column - Accordion */}
            <div className="lg:col-span-7 flex flex-col text-left">
              <div className="inline-flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                NEED HELP
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-10">
                Frequently Asked Questions <br />
                About <span className="font-serif italic font-normal text-brand-teal">PRK Treatment</span>
              </h2>

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
                      <div className="flex items-center justify-between gap-4 select-none">
                        <span className="font-bold text-sm sm:text-base leading-snug">
                          {item.question}
                        </span>
                        <span className="text-base font-semibold shrink-0">
                          {isActive ? "↑" : "↓"}
                        </span>
                      </div>

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

      <Footer />
    </div>
  );
}
