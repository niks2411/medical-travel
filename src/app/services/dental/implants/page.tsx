"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DentalImplantsPage() {
  const [activeFaq, setActiveFaq] = useState<number>(0);
  const [heroVideoLoaded, setHeroVideoLoaded] = useState(false);
  const [ctaVideoLoaded, setCtaVideoLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: ["implant"],
    timeframe: "1_month",
    message: "",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<"eligibility" | "why" | "stages">("eligibility");
  const [isTabTransitioning, setIsTabTransitioning] = useState(false);

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

  const changeTab = (tab: "eligibility" | "why" | "stages") => {
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
      question: "How much time is needed for a dental implant and its recovery?",
      answer: "The procedure for placing an implant is quick. However, the whole process takes usually few months including the healing time before the permanent crown is placed. The exact timeline will depend on individual healing and will be confirmed by the treating clinic."
    },
    {
      question: "How painful is getting a dental implant?",
      answer: "Most patients report that the discomfort is much less than expected, often comparable to an ordinary tooth extraction. Local anaesthetic is used so you don't feel any pain during the procedure, and post-operative soreness is usually manageable with standard pain relief."
    },
    {
      question: "Are dental implants right for every missing tooth?",
      answer: "Whether you’re a good candidate for a dental implant to replace your missing tooth depends on the condition of your bone, your oral health and your overall medical."
    },
    {
      question: "What are the key stages of the dental implant journey?",
      answer: "The process starts with evaluation and planning, followed by implant placement surgery. After healing time for osseointegration (fusion of the implant with the bone), the abutment is attached and the final custom-made crown is placed."
    },
    {
      question: "Can implant treatment happen in one stage or multiple stages?",
      answer: "Depending on your oral health, bone quality, and overall treatment plan, the dental implant procedure is done either in one stage or multiple stages."
    }
  ];

  const journeySteps = [
    {
      num: "01",
      title: "Improved stability",
      desc: "They are implanted very stably so that you will feel them like a natural tooth."
    },
    {
      num: "02",
      title: "Improvement in actions",
      desc: "Daily work related to the mouth becomes more comfortable as you have a good set of teeth. Now the gap of a missing tooth won't be a problem for you."
    },
    {
      num: "03",
      title: "Natural Appearance",
      desc: "Having a complete set of teeth makes your smile look more natural and beautiful."
    },
    {
      num: "04",
      title: "Jaw Support",
      desc: "Dental implants assist in preserving jawbone structure and maintaining facial shape."
    },
    {
      num: "05",
      title: "Long-term Options",
      desc: "If an implant is kept with proper care, then you can get long-term results from it."
    }
  ];

  const testimonials = [
    {
      text: "My confidence was very low after I lost two teeth in a bike accident. They were clearly visible and affected my smile very much. At first I was broken due to this but with HPT company I got a perfect dental implant which looks completely natural. I didn't expect it to be this better thank you HPT company.",
      author: "Brandon John",
      title: "Bike Accident Patient",
      avatar: "/mindera_testimonial_1.png"
    },
    {
      text: "I don't get much pain during the surgery, but in the beginning, I feel very weak after it. Thanks to HPT company's coordinator who helped us to manage everything and choose the perfect place for this treatment. Now my good health is only because of them.",
      author: "Julia Tandra",
      title: "International Traveler",
      avatar: "/mindera_testimonial_2.png"
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.services.length === 0) {
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
              Dental Implants Care
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-6">
              Dental Implants - <br />
              <span className="font-serif italic font-normal text-brand-teal block mt-2">
                Completing Your Smile
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-brand-teal/70 leading-relaxed mb-10 max-w-lg font-light">
              Missing teeth not only affect the appearance but also cause multiple problems, and a gap in your smile can result in losing confidence, which impacts your daily life. You can get your missing tooth replaced with a stronger and more beautiful artificial tooth with the help of a dental implant. 
            </p>

            {/* Hero Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="bg-brand-teal hover:bg-brand-teal-light text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
              >
                Discuss Your Case
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="#process"
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
                    alt="Happy Client"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <Image
                    src="/mindera_therapist_2.png"
                    alt="Happy Client"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <Image
                    src="/mindera_therapist_3.png"
                    alt="Happy Client"
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
                <span className="text-brand-teal/80 text-[13px] sm:text-sm mt-1">Trusted by 1,200+ Clients</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Hero Video/Image Panel */}
        <div className="w-full lg:w-[45%] relative h-[500px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-full bg-brand-mint-dark overflow-hidden">
          <Image
            src="/implant_hero.png"
            alt="Warm and welcoming smile"
            fill
            priority
            className={`object-cover object-center transition-opacity duration-700 ${
              heroVideoLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            sizes="(max-w-1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/15 pointer-events-none" />
        </div>
      </section>

      {/* 2. CTA-1: DISCUSS OPTIONS BANNER */}
      <section className="w-full bg-[#f6faf9] py-20 lg:py-28 border-b border-brand-teal/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-6">
            Discuss Your Dental Implant <br />
            <span className="font-serif italic font-normal text-brand-teal block mt-2">
              Treatment Options With Us
            </span>
          </h2>
          <p className="text-base sm:text-lg text-brand-teal/70 leading-relaxed font-light mb-10 max-w-2xl mx-auto">
            Do you have any questions in your mind about missing teeth, implants, or available treatment options? Start with having a simple discussion with us.
          </p>
          <a
            href="#contact"
            className="bg-brand-teal hover:bg-brand-teal-light text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 w-fit mx-auto cursor-pointer"
          >
            Start A Conversation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </section>      {/* INTERACTIVE TABS SECTION */}
      <section className="w-full bg-[#f6faf9] py-20 lg:py-32 border-b border-brand-teal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
          
          {/* Tab Capsule Buttons (Matches styling of the reference image) */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12 bg-white/60 p-3 rounded-full border border-brand-teal/10 shadow-[0_8px_30px_rgba(8,72,67,0.03)]">
            <button
              onMouseEnter={() => changeTab("eligibility")}
              onClick={() => changeTab("eligibility")}
              className={`px-8 md:px-11 py-4 md:py-[18px] rounded-full font-bold text-base md:text-lg transition-all duration-300 cursor-pointer ${
                activeTab === "eligibility"
                  ? "bg-brand-teal text-white shadow-[0_10px_25px_-5px_rgba(8,72,67,0.35)] scale-[1.05]"
                  : "text-brand-teal/80 hover:bg-brand-mint/50 hover:text-brand-teal font-semibold"
              }`}
            >
              Who May Need It? (Eligibility)
            </button>
            <button
              onMouseEnter={() => changeTab("why")}
              onClick={() => changeTab("why")}
              className={`px-8 md:px-11 py-4 md:py-[18px] rounded-full font-bold text-base md:text-lg transition-all duration-300 cursor-pointer ${
                activeTab === "why"
                  ? "bg-brand-teal text-white shadow-[0_10px_25px_-5px_rgba(8,72,67,0.35)] scale-[1.05]"
                  : "text-brand-teal/80 hover:bg-brand-mint/50 hover:text-brand-teal font-semibold"
              }`}
            >
              Why Implants?
            </button>
            <button
              onMouseEnter={() => changeTab("stages")}
              onClick={() => changeTab("stages")}
              className={`px-8 md:px-11 py-4 md:py-[18px] rounded-full font-bold text-base md:text-lg transition-all duration-300 cursor-pointer ${
                activeTab === "stages"
                  ? "bg-brand-teal text-white shadow-[0_10px_25px_-5px_rgba(8,72,67,0.35)] scale-[1.05]"
                  : "text-brand-teal/80 hover:bg-brand-mint/50 hover:text-brand-teal font-semibold"
              }`}
            >
              Treatment Stages
            </button>
          </div>

          {/* Content Wrapper with animation transitions */}
          <div className={`w-full bg-white border border-brand-teal/5 rounded-[2.5rem] p-8 sm:p-12 shadow-[0_10px_45px_rgba(0,0,0,0.02)] transition-all duration-300 ease-in-out ${isTabTransitioning ? "opacity-0 translate-y-1.5" : "opacity-100 translate-y-0"}`}>
            {activeTab === "eligibility" && (
              <div className="flex flex-col gap-10">
                <div className="text-left w-full">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1c2e2c] mb-4">
                    Who May Need Dental Implants?
                  </h3>
                  <p className="text-brand-teal/70 text-base font-light leading-relaxed">
                    Dental implants are the most suitable option for individuals seeking a close-to-natural replacement for missing teeth. If you experience any of the following conditions, you may be an appropriate candidate:
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 3" d="M12 2C6.5 2 5.5 6.5 5.5 8c0 4.5 4 4.5 4 8c0 2-2 3.5-2 3.5C7.5 19.5 11 20 12 17c1 3 4.5 2.5 4.5 2.5s-2-1.5-2-3.5c0-3.5 4-3.5 4-8c0-1.5-1-6-6.5-6z" />
                          </svg>
                        </div>
                        <span className="text-xl font-serif italic text-brand-teal/50">01</span>
                      </div>
                      <h4 className="text-lg font-bold text-[#1c2e2c] mb-2">Missing one or more teeth</h4>
                      <p className="text-[#556966] text-sm leading-relaxed font-light mb-4">
                        Whether due to an accident, wear, or extraction, replacing missing teeth is crucial to restore full oral function and support your facial appearance.
                      </p>
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <span className="text-[10px] bg-white text-brand-teal/80 border border-brand-teal/10 px-3 py-1 rounded-full font-medium">Tooth Replacement</span>
                      <span className="text-[10px] bg-white text-brand-teal/80 border border-brand-teal/10 px-3 py-1 rounded-full font-medium">Restored Smile</span>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-[#f4faf9] border border-brand-teal/5 rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 rounded-xl bg-brand-mint flex items-center justify-center shrink-0">
                          <svg className="w-6 h-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.528V3a1 1 0 0 1 1-1h0" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21" />
                          </svg>
                        </div>
                        <span className="text-xl font-serif italic text-brand-teal/50">02</span>
                      </div>
                      <h4 className="text-lg font-bold text-[#1c2e2c] mb-2">Difficulty in chewing food or speaking clearly</h4>
                      <p className="text-[#556966] text-sm leading-relaxed font-light mb-4">
                        Gaps can make it challenging to chew foods comfortably or pronounce words cleanly. Implants function like natural teeth to restore chewing stability.
                      </p>
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <span className="text-[10px] bg-white text-brand-teal/80 border border-brand-teal/10 px-3 py-1 rounded-full font-medium">Speech Support</span>
                      <span className="text-[10px] bg-white text-brand-teal/80 border border-brand-teal/10 px-3 py-1 rounded-full font-medium">Chewing Comfort</span>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-[#f4faf9] border border-brand-teal/5 rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 rounded-xl bg-brand-mint flex items-center justify-center shrink-0">
                          <svg className="w-6 h-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z" />
                          </svg>
                        </div>
                        <span className="text-xl font-serif italic text-brand-teal/50">03</span>
                      </div>
                      <h4 className="text-lg font-bold text-[#1c2e2c] mb-2">Desire for a durable & long-term solution</h4>
                      <p className="text-[#556966] text-sm leading-relaxed font-light mb-4">
                        Unlike temporary or loose bridges/dentures, dental implants offer a long-term, highly stable replacement designed to function and look like your natural teeth.
                      </p>
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <span className="text-[10px] bg-white text-brand-teal/80 border border-brand-teal/10 px-3 py-1 rounded-full font-medium">Long-lasting</span>
                      <span className="text-[10px] bg-white text-brand-teal/80 border border-brand-teal/10 px-3 py-1 rounded-full font-medium">Fixed Support</span>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-[#f4faf9] border border-brand-teal/5 rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 rounded-xl bg-brand-mint flex items-center justify-center shrink-0">
                          <svg className="w-6 h-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-xl font-serif italic text-[#0f766e]/50">04</span>
                      </div>
                      <h4 className="text-lg font-bold text-[#1c2e2c] mb-2">Several missing teeth or require full mouth restoration</h4>
                      <p className="text-[#556966] text-sm leading-relaxed font-light mb-4">
                        For extensive cases, dental implants can support full arches (all-on-4 or all-on-6) or multiple restorations to completely rehabilitate your mouth.
                      </p>
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <span className="text-[10px] bg-white text-brand-teal/80 border border-brand-teal/10 px-3 py-1 rounded-full font-medium">Complete Rehab</span>
                      <span className="text-[10px] bg-white text-brand-teal/80 border border-brand-teal/10 px-3 py-1 rounded-full font-medium">Total Restoration</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "why" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
                {/* Left Side: Text and Timeline */}
                <div className="lg:col-span-7">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1c2e2c] mb-4">
                    Why Patients Consider Dental Implants
                  </h3>
                  <p className="text-brand-teal/70 text-base font-light leading-relaxed mb-8">
                    Implants offer a wide range of benefits that traditional restorations simply cannot provide, securing your smile for decades.
                  </p>

                  <div className="relative pl-6 border-l-2 border-[#d1dcd9] flex flex-col gap-6">
                    {journeySteps.map((step, idx) => (
                      <div key={idx} className="flex gap-6 items-start relative group">
                        <div className="absolute -left-[35px] w-6 h-6 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold text-xs shadow-sm border-2 border-white">
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-base font-bold text-[#1c2e2c] mb-0.5">
                            {step.title}
                          </h4>
                          <p className="text-[#1c2e2c]/75 text-xs sm:text-sm leading-relaxed font-light">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side: Image */}
                <div className="lg:col-span-5 w-full">
                  <div className="w-full relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg border border-white bg-white">
                    <Image
                      src="/mindera_process.png"
                      alt="Why Implants process visual"
                      fill
                      className="object-cover"
                      sizes="(max-w-1024px) 100vw, 400px"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "stages" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
                
                {/* Left Column - Headline + Tag + Button */}
                <div className="lg:col-span-3 flex flex-col items-start text-left">
                  <div className="flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                    Our Process
                  </div>

                  <h3 className="text-3xl sm:text-4xl lg:text-[38px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-8">
                    Your Dental <br />
                    Implant <br />
                    Journey <br />
                    <span className="font-serif italic font-normal text-brand-teal block mt-1">With HPT</span>
                  </h3>

                  <a
                    href="#contact"
                    className="bg-brand-teal hover:bg-brand-teal-light text-white text-[13px] font-bold px-6 py-3.5 rounded-full transition-all duration-300 shadow-md flex items-center gap-2 w-fit mb-10 lg:mb-0 cursor-pointer"
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
                      alt="Specialist explaining implant process"
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
                          Initial Report Review
                        </h4>
                        <p className="text-[#1c2e2c]/70 text-[13px] leading-relaxed font-light">
                          When you share your dental reports, X-rays, or clear pictures with us, our partner clinic specialists will review your case and provide preliminary feedback on your suitability for implant treatment.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex gap-6 items-start relative group">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#e2ece9] text-[#084843] flex items-center justify-center font-bold text-lg shrink-0 shadow-sm z-10 border-4 border-white transition-transform duration-300 group-hover:scale-105">
                        02
                      </div>
                      <div className="flex-1 text-left pt-1 sm:pt-2">
                        <h4 className="text-lg font-bold text-[#1c2e2c] mb-1">
                          Consultation & Suitability Confirmation Before Travel
                        </h4>
                        <p className="text-[#1c2e2c]/70 text-[13px] leading-relaxed font-light">
                          Once you decide to continue your treatment journey with us, a consultation will be arranged with the treating specialist online for a detailed review of your case. Based on this, the specialist will confirm your suitability and prepare a treatment plan specifying expected stages, duration, and procedure before your travel.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex gap-6 items-start relative group">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#e2ece9] text-[#084843] flex items-center justify-center font-bold text-lg shrink-0 shadow-sm z-10 border-4 border-white transition-transform duration-300 group-hover:scale-105">
                        03
                      </div>
                      <div className="flex-1 text-left pt-1 sm:pt-2">
                        <h4 className="text-lg font-bold text-[#1c2e2c] mb-1">
                          Implant Placement
                        </h4>
                        <p className="text-[#1c2e2c]/70 text-[13px] leading-relaxed font-light">
                          The titanium implant post is surgically placed by your treating specialist. The procedure itself is usually simple; however, time and approach may vary depending on your case.
                        </p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex gap-6 items-start relative group">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#e2ece9] text-[#084843] flex items-center justify-center font-bold text-lg shrink-0 shadow-sm z-10 border-4 border-white transition-transform duration-300 group-hover:scale-105">
                        04
                      </div>
                      <div className="flex-1 text-left pt-1 sm:pt-2">
                        <h4 className="text-lg font-bold text-[#1c2e2c] mb-1">
                          Healing Period
                        </h4>
                        <p className="text-[#1c2e2c]/70 text-[13px] leading-relaxed font-light">
                          After placement, the implant requires time to heal during which it naturally integrates with the jawbone. This process is known as osseointegration. This phase is generally spent at home and varies in time from person to person.
                        </p>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="flex gap-6 items-start relative group">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#e2ece9] text-[#084843] flex items-center justify-center font-bold text-lg shrink-0 shadow-sm z-10 border-4 border-white transition-transform duration-300 group-hover:scale-105">
                        05
                      </div>
                      <div className="flex-1 text-left pt-1 sm:pt-2">
                        <h4 className="text-lg font-bold text-[#1c2e2c] mb-1">
                          Abutment & Crown Placement
                        </h4>
                        <p className="text-[#1c2e2c]/70 text-[13px] leading-relaxed font-light">
                          Once it is healed, the abutment connector and custom-made crown will be fitted. At this stage, your implant is ready to function and look just like a natural tooth.
                        </p>
                      </div>
                    </div>

                    {/* Step 6 */}
                    <div className="flex gap-6 items-start relative group">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#e2ece9] text-[#084843] flex items-center justify-center font-bold text-lg shrink-0 shadow-sm z-10 border-4 border-white transition-transform duration-300 group-hover:scale-105">
                        06
                      </div>
                      <div className="flex-1 text-left pt-1 sm:pt-2">
                        <h4 className="text-lg font-bold text-[#1c2e2c] mb-1">
                          Follow-Up & Aftercare Support
                        </h4>
                        <p className="text-[#1c2e2c]/70 text-[13px] leading-relaxed font-light">
                          HPT will be available up to six months after your treatment to assist with communication and coordination with your treating clinic.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            )}
          </div>
        </div>
      </section>



      {/* 7.5. GET AN INITIAL IMPLANT ASSESSMENT (CTA Video Banner Layout - Positioned Exactly Above Testimonials) */}
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
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white mb-6 leading-[1.15] max-w-3xl font-sans">
            Discuss Your Dental Implant <br />
            <span className="font-serif italic font-normal text-white block mt-2">
              Treatment Options With Us
            </span>
          </h2>
          
          {/* Paragraph */}
          <p className="text-base sm:text-lg text-white/95 leading-relaxed font-light mb-10 max-w-2xl mx-auto">
            Do you have any questions in your mind about missing teeth, implants, or available treatment options? Start with having a simple discussion with us.
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

      {/* 8. TESTIMONIALS SECTION */}
      <section id="testimonials" className="w-full bg-white py-20 lg:py-32 border-b border-brand-teal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left column info panel */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 text-left">
              <div className="inline-flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                CLIENT STORIES
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-8">
                HPT Company <br />
                Reason Behind <br />
                <span className="font-serif italic font-normal text-brand-teal block mt-1">Thousands of Smiles</span>
              </h2>

              <a
                href="#contact"
                className="bg-[#1c2e2c] hover:bg-[#283e3c] text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-300 shadow-md flex items-center justify-center gap-2 w-fit mb-16 lg:mb-24 cursor-pointer"
              >
                Request Free Review &rarr;
              </a>

              {/* Trust Stack Indicator */}
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
                  780K<span className="text-[#56b0a4] font-light ml-0.5">+</span>
                  <span className="text-base font-normal text-[#1c2e2c]/85 ml-2">Customer</span>
                </div>
                <p className="text-[13px] text-brand-teal/70 font-light mt-2">Satisfied with our medical services</p>
              </div>
            </div>

            {/* Right column reviews list */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Testimonial Card 1 */}
              <div className="bg-[#f4faf9] border border-brand-teal/5 rounded-[2rem] p-6 sm:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-stretch relative overflow-hidden text-left">
                <div className="w-full md:w-[38%] relative aspect-[4/5] md:aspect-auto rounded-2xl overflow-hidden shrink-0">
                  <Image
                    src="/mindera_testimonial_1.png"
                    alt={testimonials[0].author}
                    fill
                    className="object-cover"
                    sizes="(max-w-768px) 100vw, 220px"
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/75 backdrop-blur-sm shadow-sm px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-[11px] text-[#1c2e2c] font-semibold hover:bg-white transition-colors cursor-pointer z-10 whitespace-nowrap">
                    <svg className="w-3.5 h-3.5 fill-[#1c2e2c] stroke-none" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Play Video
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-between pt-1">
                  <div>
                    <div className="flex text-[#0f766e] mb-3 text-sm">★★★★★</div>
                    <blockquote className="text-brand-teal/85 text-[14px] sm:text-[15px] leading-relaxed font-light mb-6">
                      &ldquo;{testimonials[0].text}&rdquo;
                    </blockquote>
                  </div>

                  <div className="flex items-end justify-between border-t border-brand-teal/5 pt-4">
                    <div>
                      <h4 className="font-bold text-[#1c2e2c] text-base">{testimonials[0].author}</h4>
                      <p className="text-xs text-brand-teal/70 font-semibold mt-1">{testimonials[0].title}</p>
                    </div>
                    <span className="text-6xl font-serif text-[#0f766e]/30 leading-none select-none">”</span>
                  </div>
                </div>
              </div>

              {/* Testimonial Card 2 */}
              <div className="bg-[#f4faf9] border border-brand-teal/5 rounded-[2rem] p-6 sm:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-stretch relative overflow-hidden text-left">
                <div className="w-full md:w-[38%] relative aspect-[4/5] md:aspect-auto rounded-2xl overflow-hidden shrink-0">
                  <Image
                    src="/mindera_testimonial_2.png"
                    alt={testimonials[1].author}
                    fill
                    className="object-cover"
                    sizes="(max-w-768px) 100vw, 220px"
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/75 backdrop-blur-sm shadow-sm px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-[11px] text-[#1c2e2c] font-semibold hover:bg-white transition-colors cursor-pointer z-10 whitespace-nowrap">
                    <svg className="w-3.5 h-3.5 fill-[#1c2e2c] stroke-none" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Play Video
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-between pt-1">
                  <div>
                    <div className="flex text-[#0f766e] mb-3 text-sm">★★★★★</div>
                    <blockquote className="text-brand-teal/85 text-[14px] sm:text-[15px] leading-relaxed font-light mb-6">
                      &ldquo;{testimonials[1].text}&rdquo;
                    </blockquote>
                  </div>

                  <div className="flex items-end justify-between border-t border-brand-teal/5 pt-4">
                    <div>
                      <h4 className="font-bold text-[#1c2e2c] text-base">{testimonials[1].author}</h4>
                      <p className="text-xs text-brand-teal/70 font-semibold mt-1">{testimonials[1].title}</p>
                    </div>
                    <span className="text-6xl font-serif text-[#0f766e]/30 leading-none select-none">”</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 9. CTA-2 (Booking Form - Matching Reference Book Section exactly) */}
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
                Get an Initial Implant <br />
                <span className="font-serif italic font-normal text-brand-teal block mt-2">
                  Assessment With HPT
                </span>
              </h2>

              {/* Paragraph */}
              <p className="text-base sm:text-lg text-brand-teal/70 leading-relaxed font-light mb-10 max-w-md">
                Share all your available dental reports, scans, or any concerns related to your implant treatment to have a better understanding of possible treatment options along with their suitability.
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
                    alt="Process consultation"
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
                    <label htmlFor="timeframe" className="text-xs font-bold text-[#1c2e2c] uppercase tracking-wide">When are you considering treatment abroad?</label>
                    <div className="relative">
                      <select
                        id="timeframe"
                        value={formData.timeframe}
                        onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                        className="w-full bg-[#fafcfc] border border-[#e5ebe9] rounded-xl px-4 py-3.5 text-sm text-[#1c2e2c] focus:outline-none focus:border-brand-teal/40 transition-colors appearance-none cursor-pointer"
                      >
                        <option value="1_month">Within 1 Month</option>
                        <option value="3_months">Within 3 Months</option>
                        <option value="6_months">Within 6 Months</option>
                        <option value="exploring">Exploring Options Only</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#1c2e2c]/70">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="message" className="text-xs font-bold text-[#1c2e2c] uppercase tracking-wide">Tell us about your dental needs</label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Detail which teeth are missing or your medical background..."
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

      {/* 9.5. FAQ SECTION (Matching reference page exactly) */}
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
                  Know More About <span className="font-serif italic font-normal text-brand-teal">HPT & Dental Implants</span>
                </h3>
                <p className="text-[13px] text-brand-teal/75 leading-relaxed font-light mt-3">
                  Thinking about dental implants often raises a lot of questions. Here are direct, simple answers to the questions people ask most often—with more detail throughout this page.
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
                About <span className="font-serif italic font-normal text-brand-teal">Dental Implants</span>
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

      <Footer />
    </div>
  );
}
