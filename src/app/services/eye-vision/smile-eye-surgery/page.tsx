"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SMILEEyeSurgeryPage() {
  const [activeFaq, setActiveFaq] = useState<number>(0);
  const [ctaVideoLoaded, setCtaVideoLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: ["smile"],
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
      question: "What makes SMILE different from LASIK?",
      answer: "In SMILE eye surgery, a microscopic incision (2-4 mm) is made without creating a large corneal flap. In contrast, LASIK requires creating a full corneal flap."
    },
    {
      question: "Is a SMILE treatment perfect for people with an active lifestyle?",
      answer: "Yes! Whether you have an active lifestyle, participate in sports, or work in physically demanding roles, SMILE is perfect because it does not create a corneal flap that could be dislodged by physical trauma."
    },
    {
      question: "How to prevent dry eyes during laser eye Treatment?",
      answer: "SMILE treatment is specially designed to preserve a higher number of corneal nerves, significantly reducing the risk of post-op dry eyes compared to traditional flap-based methods."
    },
    {
      question: "How much time does a SMILE treatment take?",
      answer: "The laser procedure itself is completed in just a few minutes per eye. When traveling abroad for treatment with HPT, the full consultation, procedure, and initial check-ups typically take up to a week."
    },
    {
      question: "Will the surgery be painful?",
      answer: "You don't have to worry about pain during surgery because numbing eye drops are used. Most patients feel only slight pressure during the procedure, but no actual pain."
    }
  ];

  const testimonials = [
    {
      text: "I was not comfortable with traditional LASIK treatment, so I chose HPT company, which explained to me the correct difference and arranged everything before my departure. The improvement was clearly visible from the first day, and it was a really quick surgery. I am majorly impressed by this kind of work and support.",
      author: "Alexander Wright",
      title: "LASIK Alternative Patient",
      avatar: "/mindera_therapist_1.png"
    },
    {
      text: "My healthcare experts suggested a SMILE treatment instead of LASIK because of my sports involvement. 2 days after the surgery, my vision was clear enough to start working again, thanks to HPT company for providing modern hitech and perfect solutions. My life has just changed.",
      author: "Marcus Vance",
      title: "Sports Professional Patient",
      avatar: "/mindera_therapist_2.png"
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
              Eye & Vision Care • SMILE Surgery
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-6">
              What Is SMILE <br />
              <span className="font-serif italic font-normal text-brand-teal block mt-2">
                (Small Incision Lenticule Extraction)
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-brand-teal/70 leading-relaxed mb-6 max-w-lg font-light">
              SMILE is a modern and flap-free laser procedure that provides patients with a secure, highly accurate vision correction solution for myopia (nearsightedness) and astigmatism without causing major disruption to the corneal tissue.
            </p>
            
            <p className="text-sm sm:text-base text-brand-teal/70 leading-relaxed mb-10 max-w-lg font-light">
              Designed as a gentle alternative to traditional flap surgeries, SMILE preserves corneal nerve density, reduces dry eye risks, and delivers rapid visual recovery.
            </p>

            {/* Hero Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="bg-brand-teal hover:bg-brand-teal-light text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
              >
                Discuss Your SMILE Case
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
                    src="/mindera_therapist_1.png"
                    alt="Happy Patient"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <Image
                    src="/mindera_therapist_2.png"
                    alt="Happy Patient"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <Image
                    src="/mindera_therapist_3.png"
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
                <span className="text-brand-teal/80 text-[13px] sm:text-sm mt-1">Trusted by 1,100+ SMILE Patients</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Hero Image Panel */}
        <div className="w-full lg:w-[45%] relative h-[500px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-full bg-brand-mint-dark overflow-hidden">
          <Image
            src="/smile_hero.png"
            alt="Clear vision after SMILE procedure"
            fill
            priority
            className="object-cover object-center transition-opacity duration-700 opacity-100"
            sizes="(max-w-1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/15 pointer-events-none" />
        </div>
      </section>

      {/* 2. SMILE STEPS VISUALIZATION SECTION (Matches Dental Implants Section 2.5 Layout) */}
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
                SMILE Procedure <br />
                <span className="font-serif italic font-normal text-brand-teal block mt-2">
                  Treatment Steps
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#1c2e2c]/75 leading-relaxed font-light mb-6">
                SMILE is an advanced eye laser treatment that corrects vision through a microscopic keyhole incision (2-4 mm). Unlike traditional procedures, it eliminates the need for creating a large corneal flap.
              </p>

              <p className="text-base sm:text-lg text-[#1c2e2c]/75 leading-relaxed font-light">
                Using a precise femtosecond laser, a thin lenticule is created within the intact cornea and extracted through the small opening. This reshapes the corneal curvature, providing long-term vision correction with fast visual recovery.
              </p>
            </div>

            {/* Right Column: Square Image */}
            <div className="lg:col-span-5 w-full">
              <div className="w-full relative aspect-square rounded-[2rem] overflow-hidden shadow-lg border border-brand-teal/5 bg-[#f6faf9] flex items-center justify-center">
                <Image
                  src="/smile_square.png"
                  alt="SMILE procedure square step diagram"
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
                src="/smile_rectangle.png"
                alt="SMILE procedure rectangle visualization"
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
              Do You Really Need SMILE
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
              How Does SMILE Work
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
                    Do You Really Need SMILE Eye Surgery?
                  </h3>
                  <p className="text-brand-teal/70 text-base font-light leading-relaxed">
                    SMILE is tailored for individuals seeking a flap-free, gentle laser procedure to achieve clear sight without lens dependence. If you fit any of these conditions, SMILE may be your ideal solution:
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
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <span className="text-xl font-serif italic text-brand-teal/50">01</span>
                      </div>
                      <h4 className="text-lg font-bold text-[#1c2e2c] mb-2">Myopia & Astigmatism</h4>
                      <p className="text-[#556966] text-sm leading-relaxed font-light mb-4">
                        If you are someone with nearsightedness (myopia), with or without astigmatism, SMILE is a highly effective, accurate laser correction option.
                      </p>
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <span className="text-[10px] bg-white text-brand-teal/80 border border-brand-teal/10 px-3 py-1 rounded-full font-medium">Nearsightedness</span>
                      <span className="text-[10px] bg-white text-brand-teal/80 border border-brand-teal/10 px-3 py-1 rounded-full font-medium">Astigmatism</span>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-[#f4faf9] border border-brand-teal/5 rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 rounded-xl bg-brand-mint flex items-center justify-center shrink-0">
                          <svg className="w-6 h-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <span className="text-xl font-serif italic text-brand-teal/50">02</span>
                      </div>
                      <h4 className="text-lg font-bold text-[#1c2e2c] mb-2">Gentle Alternative to LASIK</h4>
                      <p className="text-[#556966] text-sm leading-relaxed font-light mb-4">
                        If traditional LASIK flap creation raises concerns or you seek a more gentle flap-free alternative, SMILE is the solution.
                      </p>
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <span className="text-[10px] bg-white text-brand-teal/80 border border-brand-teal/10 px-3 py-1 rounded-full font-medium">Flap-Free</span>
                      <span className="text-[10px] bg-white text-brand-teal/80 border border-brand-teal/10 px-3 py-1 rounded-full font-medium">Gentle Alternative</span>
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
                      <h4 className="text-lg font-bold text-[#1c2e2c] mb-2">Quick Visual Recovery</h4>
                      <p className="text-[#556966] text-sm leading-relaxed font-light mb-4">
                        If you desire rapid recovery without extended downtime, SMILE offers a fast turnaround to get rid of glasses or contact lenses.
                      </p>
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <span className="text-[10px] bg-white text-brand-teal/80 border border-brand-teal/10 px-3 py-1 rounded-full font-medium">Fast Recovery</span>
                      <span className="text-[10px] bg-white text-brand-teal/80 border border-brand-teal/10 px-3 py-1 rounded-full font-medium">Rapid Sight</span>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-[#f4faf9] border border-brand-teal/5 rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 rounded-xl bg-brand-mint flex items-center justify-center shrink-0">
                          <svg className="w-6 h-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        <span className="text-xl font-serif italic text-[#0f766e]/50">04</span>
                      </div>
                      <h4 className="text-lg font-bold text-[#1c2e2c] mb-2">Active Lifestyles & Low Dry Eye Risk</h4>
                      <p className="text-[#556966] text-sm leading-relaxed font-light mb-4">
                        SMILE preserves corneal nerve density, drastically minimizing dry eye symptoms and flap dislocation risks for active and sports enthusiasts.
                      </p>
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <span className="text-[10px] bg-white text-brand-teal/80 border border-brand-teal/10 px-3 py-1 rounded-full font-medium">Nerve Preservation</span>
                      <span className="text-[10px] bg-white text-brand-teal/80 border border-brand-teal/10 px-3 py-1 rounded-full font-medium">Low Dry Eye</span>
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
                    Micro-Incision Technique
                  </div>

                  <h3 className="text-3xl sm:text-4xl lg:text-[38px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-8">
                    How Does The <span className="font-serif italic font-normal text-brand-teal">SMILE Procedure Work?</span>
                  </h3>

                  {/* Image Container */}
                  <div className="w-full max-w-[340px] relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl border border-white bg-white mb-6">
                    <Image
                      src="/smile_process.png"
                      alt="Ophthalmologist conducting SMILE eye consultation"
                      fill
                      className="object-cover"
                      sizes="(max-w-1024px) 100vw, 340px"
                    />
                  </div>

                  <p className="text-base sm:text-lg text-[#1c2e2c]/75 leading-relaxed font-light mb-8 max-w-[450px]">
                    HPT assists patients in connecting with internationally accredited eye care centers for SMILE surgery with short wait times and affordable options.
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
                        <h4 className="text-lg font-bold text-[#1c2e2c] mb-1">Lenticule Creation</h4>
                        <p className="text-[#1c2e2c]/70 text-[13px] leading-relaxed font-light">
                          A thin disc-shaped lenticule is created using an ultra-precise femtosecond laser inside the intact corneal tissue.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-6 items-start relative group">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#e2ece9] text-[#084843] flex items-center justify-center font-bold text-lg shrink-0 shadow-sm z-10 border-4 border-white">
                        02
                      </div>
                      <div className="flex-1 text-left pt-1 sm:pt-2">
                        <h4 className="text-lg font-bold text-[#1c2e2c] mb-1">Small Keyhole Incision</h4>
                        <p className="text-[#1c2e2c]/70 text-[13px] leading-relaxed font-light">
                          A microscopic keyhole incision of only 2-4 mm is made on the outer corneal surface, preserving maximum structural stability.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-6 items-start relative group">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#e2ece9] text-[#084843] flex items-center justify-center font-bold text-lg shrink-0 shadow-sm z-10 border-4 border-white">
                        03
                      </div>
                      <div className="flex-1 text-left pt-1 sm:pt-2">
                        <h4 className="text-lg font-bold text-[#1c2e2c] mb-1">Lenticule Removal</h4>
                        <p className="text-[#1c2e2c]/70 text-[13px] leading-relaxed font-light">
                          The surgeon gently extracts the lenticule through the tiny opening, reshaping the corneal curvature for clear vision.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-6 items-start relative group">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#e2ece9] text-[#084843] flex items-center justify-center font-bold text-lg shrink-0 shadow-sm z-10 border-4 border-white">
                        04
                      </div>
                      <div className="flex-1 text-left pt-1 sm:pt-2">
                        <h4 className="text-lg font-bold text-[#1c2e2c] mb-1">Rapid Recovery & Healing</h4>
                        <p className="text-[#1c2e2c]/70 text-[13px] leading-relaxed font-light">
                          The micro-incision seals naturally without stitches, enabling fast healing and stable, long-term visual clarity.
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
                    Recovery and Early Precautions After SMILE
                  </h3>
                  <p className="text-brand-teal/70 text-base font-light leading-relaxed">
                    SMILE offers one of the fastest recovery timelines in vision correction. Follow these post-op guidelines to ensure seamless healing:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Post-Op Expectations */}
                  <div className="bg-[#f4faf9] border border-brand-teal/5 rounded-2xl p-6 sm:p-8">
                    <h4 className="text-lg font-bold text-[#1c2e2c] mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
                      What Patients May Expect After SMILE
                    </h4>
                    <p className="text-[#556966] text-sm leading-relaxed font-light">
                      Watering, mild irritation, or slight initial blurred vision (improves within 24-48 hours), mild sensitivity to light or glare, and a foreign body sensation for a few hours. Vision stabilizes gradually over a few weeks.
                    </p>
                  </div>

                  {/* Instant Care (First 24 Hours) */}
                  <div className="bg-[#f4faf9] border border-brand-teal/5 rounded-2xl p-6 sm:p-8">
                    <h4 className="text-lg font-bold text-[#1c2e2c] mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
                      Instant Care for First 24 Hours
                    </h4>
                    <p className="text-[#556966] text-sm leading-relaxed font-light">
                      Serve your eyes with adequate rest and avoid strain, touching, or rubbing your eyes. Regularly use prescribed eye drops and wear protective eye shields while sleeping if recommended.
                    </p>
                  </div>

                  {/* Early Precautions for First Few Days to Weeks */}
                  <div className="bg-[#f4faf9] border border-brand-teal/5 rounded-2xl p-6 sm:p-8">
                    <h4 className="text-lg font-bold text-[#1c2e2c] mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
                      Early Precautions for First Few Days to Weeks
                    </h4>
                    <p className="text-[#556966] text-sm leading-relaxed font-light">
                      Do not rub eyes, avoid shampoo, soap, eye makeup, dust, smoke, or water entering the eyes. Use screens for a limited time and wear sunglasses outdoors to protect eyes from dust and sunlight.
                    </p>
                  </div>

                  {/* Activities to Avoid & Timeline */}
                  <div className="bg-[#f4faf9] border border-brand-teal/5 rounded-2xl p-6 sm:p-8">
                    <h4 className="text-lg font-bold text-[#1c2e2c] mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
                      Recovery Timeline & Activities to Avoid
                    </h4>
                    <p className="text-[#556966] text-sm leading-relaxed font-light">
                      Avoid heavy workouts, contact sports, hot tubs, and swimming for 2-3 weeks, and avoid night driving until vision stabilizes. Vision improves in 1-2 days, comfortable for daily tasks in 3-5 days, and stabilizes in 2-3 weeks.
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
                ✦ HPT SUPPORT
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6 leading-tight">
                How HPT Supports Patients Exploring SMILE Treatment
              </h2>
              <p className="text-white/90 text-base sm:text-lg leading-relaxed font-light mb-8">
                Many patients explore SMILE Treatment abroad to access trusted clinics, organized treatment planning, and specialist support altogether, and HPT supports them throughout their treatment journey. We help connect patients with trusted clinics offering shorter waiting periods and affordable options.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/20">
                <div>
                  <div className="text-2xl font-bold text-white mb-1">Trusted Clinics</div>
                  <div className="text-xs text-white/80 font-light">Accredited SMILE Centers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">Short Wait Times</div>
                  <div className="text-xs text-white/80 font-light">Rapid Appointment Setup</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">Affordable Packages</div>
                  <div className="text-xs text-white/80 font-light">Full Coordination & Care</div>
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
            START YOUR SMILE JOURNEY
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white mb-6 leading-[1.15] max-w-3xl font-sans">
            Discuss Your SMILE Eye Treatment <br />
            <span className="font-serif italic font-normal text-white block mt-2">
              Options With Us Today
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-white/95 leading-relaxed font-light mb-10 max-w-2xl mx-auto">
            Ready to experience gentle, flap-free SMILE vision correction? Connect with our dedicated care coordinators today.
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
                Changing Thousands of Lives <br />
                <span className="font-serif italic font-normal text-brand-teal block mt-1">With SMILE Treatment</span>
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
                    <Image src="/mindera_therapist_1.png" alt="Avatar" fill className="object-cover" sizes="36px" />
                  </div>
                  <div className="relative w-9 h-9 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <Image src="/mindera_therapist_2.png" alt="Avatar" fill className="object-cover" sizes="36px" />
                  </div>
                  <div className="relative w-9 h-9 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <Image src="/mindera_therapist_3.png" alt="Avatar" fill className="object-cover" sizes="36px" />
                  </div>
                </div>
                
                <div className="text-[22px] font-bold text-[#1c2e2c] flex items-center leading-none">
                  1,100<span className="text-[#56b0a4] font-light ml-0.5">+</span>
                  <span className="text-base font-normal text-[#1c2e2c]/85 ml-2">Patients</span>
                </div>
                <p className="text-[13px] text-brand-teal/70 font-light mt-2">Satisfied with SMILE procedure</p>
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
                Start Your SMILE Vision Journey
              </h2>
              <p className="text-brand-teal/70 text-sm font-light">
                Fill out the form below to receive expert advice and treatment options for SMILE abroad.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-brand-mint/40 border border-brand-teal/20 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-brand-teal text-white flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-[#1c2e2c] mb-2">Thank You!</h3>
                <p className="text-brand-teal/80 text-sm">
                  Your SMILE inquiry has been received. Our care coordinator will contact you shortly.
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
                    Message / Vision Details
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your current prescription, glasses/contact lens use, or specific questions..."
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
                  Know More About <span className="font-serif italic font-normal text-brand-teal">HPT & SMILE</span>
                </h3>
                <p className="text-[13px] text-brand-teal/75 leading-relaxed font-light mt-3">
                  Thinking about SMILE keyhole eye surgery often raises questions. Here are direct, simple answers to the questions people ask most often.
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
                About <span className="font-serif italic font-normal text-brand-teal">SMILE Treatment</span>
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
