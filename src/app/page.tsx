"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: "general",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const faqItems = [
    {
      question: "What information helps during the first discussion?",
      answer: "Available medical reports, current treatment concerns, preferred treatment type, and practical travel preferences may help early discussion. Basic information can also be shared if reports are not yet available."
    },
    {
      question: "How are clinics selected?",
      answer: "Clinic options are considered according to treatment type, practical suitability, and patient confidence before any decision is made."
    },
    {
      question: "Can reports be reviewed before deciding?",
      answer: "Available reports and treatment details may help early discussion, although basic information can also be shared initially."
    },
    {
      question: "Are treatment costs discussed before travel?",
      answer: "Estimated treatment costs are generally discussed after initial review and clinic input so patients can understand likely planning requirements."
    },
    {
      question: "What support is included during travel?",
      answer: "Support may include appointment coordination, travel assistance, accommodation guidance, and communication support, depending on planning needs."
    },
    {
      question: "Is follow-up support available after treatment?",
      answer: "Further communication may continue for reports, review planning, and treatment-related coordination where needed."
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafdfc] text-[#1c2e2c] flex flex-col font-sans selection:bg-brand-mint selection:text-brand-teal">
      <Navbar />

      {/* 1. HERO SECTION (Split-screen) */}
      <section className="relative w-full flex flex-col lg:flex-row min-h-[calc(100vh-92px)] overflow-hidden">
        
        {/* Left Side Hero Panel */}
        <div className="w-full lg:w-[55%] bg-white flex flex-col justify-center p-6 sm:p-10 lg:p-16 xl:p-20 py-20 lg:py-24 relative z-10">
          <div className="absolute inset-0 opacity-[0.01] bg-[radial-gradient(#084843_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
          
          <div className="my-auto py-8 lg:py-0 max-w-2xl">
            {/* Tag */}
            <div className="inline-flex items-center gap-2.5 bg-brand-mint/30 border border-brand-teal/5 px-4 py-1.5 rounded-full text-brand-teal text-[11px] font-bold tracking-[0.2em] uppercase mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
              Global Medical Travel Coordinator
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[45px] xl:text-[50px] font-bold tracking-tight text-[#1c2e2c] leading-[1.12] font-sans mb-8">
              When Treatment Delays, <br />
              Costs, Or Limited Options <br />
              <span className="font-serif italic font-normal text-brand-teal block mt-3 relative w-fit">
                Push Patients to Explore Further
                <span className="absolute left-0 bottom-1 w-full h-[3px] bg-brand-mint/60 -z-10 rounded-full"></span>
              </span>
            </h1>

            {/* Paragraphs */}
            <div className="space-y-6 text-base sm:text-lg text-brand-teal/70 leading-relaxed mb-10 max-w-xl font-light">
              <p>
                Exploring treatment abroad often starts with questions around options, timing, and planning. 
              </p>
              
              <div className="border-l-2 border-brand-teal/20 pl-4 py-1">
                <p className="font-semibold text-brand-teal text-xs tracking-wider uppercase mb-1">
                  Medical Travel Support Designed Around Careful Planning
                </p>
                <p className="text-sm sm:text-base text-[#1c2e2c]/80">
                  HPT supports patients who are exploring treatment abroad by helping them understand suitable options, selected clinics, and practical travel arrangements before treatment decisions are made. 
                </p>
              </div>

              <p className="text-xs sm:text-sm">
                Each case is approached carefully, with attention to treatment requirements, communication, and coordination at every stage of the journey.
              </p>
            </div>

            {/* Hero Button */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#book"
                className="bg-brand-teal hover:bg-brand-teal-light text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-[0_8px_25px_rgba(8,72,67,0.25)] flex items-center justify-center gap-2 group w-fit"
              >
                Discuss Your Treatment Options
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side Hero Image Panel */}
        <div className="w-full lg:w-[45%] relative h-[450px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-full bg-brand-mint-dark overflow-hidden">
          <Image
            src="/home_hero.png"
            alt="Family exploring travel options with Health Plus Travel support"
            fill
            priority
            className="object-cover object-center scale-100 hover:scale-105 transition-transform duration-[4000ms]"
            sizes="(max-w-1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[#084843]/5 mix-blend-overlay pointer-events-none" />
        </div>
      </section>

      {/* 2. WHY EXPLORE TREATMENT ABROAD SECTION */}
      <section className="w-full bg-[#f6faf9] py-20 lg:py-28 border-b border-brand-teal/5 relative">
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#084843_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Why Bullets */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              <div className="flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                Patient Drivers
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1c2e2c] mb-10">
                Why Patients Explore <br />
                <span className="font-serif italic font-normal text-brand-teal">Treatment Abroad</span>
              </h2>

              <div className="space-y-6 max-w-xl">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-mint border border-brand-teal/10 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <span className="text-brand-teal font-bold text-xs">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-[#1c2e2c] mb-1">Specialist-Focused Care</h4>
                    <p className="text-sm text-[#1c2e2c]/70 font-light leading-relaxed">
                      Access to selected clinics known for focused treatment care, modern infrastructure, and international medical accreditations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-mint border border-brand-teal/10 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <span className="text-brand-teal font-bold text-xs">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-[#1c2e2c] mb-1">Better Planning Timelines</h4>
                    <p className="text-sm text-[#1c2e2c]/70 font-light leading-relaxed">
                      Earlier treatment planning options, helping patients bypass long waiting lists and local retail scheduling delays.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-mint border border-brand-teal/10 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <span className="text-brand-teal font-bold text-xs">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-[#1c2e2c] mb-1">Broader Options</h4>
                    <p className="text-sm text-[#1c2e2c]/70 font-light leading-relaxed">
                      Diverse clinical treatment approaches across multiple locations, opening up broader treatment pathways and specialized therapy options.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-mint border border-brand-teal/10 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <span className="text-brand-teal font-bold text-xs">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-[#1c2e2c] mb-1">Cost Considerations</h4>
                    <p className="text-sm text-[#1c2e2c]/70 font-light leading-relaxed">
                      Clear cost differences across medical destinations, making high-end clinical restorations and treatments financially viable.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Complexity Dashboard Panel */}
            <div className="lg:col-span-6 w-full">
              <div className="bg-white border border-[#e5ebe9] p-8 sm:p-10 rounded-[2.5rem] shadow-[0_15px_40px_rgba(8,72,67,0.02)] flex flex-col gap-8">
                <div>
                  <h4 className="font-bold text-lg text-[#1c2e2c] mb-2 leading-snug">
                    Treatment Abroad Requires More Than Choosing A Clinic
                  </h4>
                  <p className="text-xs text-[#1c2e2c]/60 font-light leading-relaxed">
                    A successful medical journey involves navigating multiple coordination layers. HPT consolidates these elements into a single structured path.
                  </p>
                </div>

                {/* Dashboard-Style Untangling Visual */}
                <div className="w-full bg-[#1c2e2c] rounded-2xl p-6 border border-brand-teal/10 flex flex-col items-center justify-center relative overflow-hidden h-[180px]">
                  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(167,215,208,0.15)_0%,transparent_70%)]"></div>
                  
                  {/* Premium Dashboard visual SVG */}
                  <svg className="w-11/12 h-16 relative z-10" viewBox="0 0 320 60" fill="none">
                    {/* messy curves on left */}
                    <path d="M10 30 Q 30 10, 45 40 T 80 20 T 115 30 T 145 25" stroke="rgba(167,215,208,0.25)" strokeWidth="1.5" strokeDasharray="3 3" />
                    <path d="M10 30 Q 20 45, 50 15 T 90 35 T 130 15 T 145 25" stroke="rgba(86,176,164,0.3)" strokeWidth="1.5" />
                    
                    {/* Transformation node in center */}
                    <circle cx="160" cy="25" r="14" fill="rgba(86,176,164,0.1)" stroke="rgba(86,176,164,0.4)" strokeWidth="1" />
                    <circle cx="160" cy="25" r="8" fill="#56b0a4" className="animate-pulse" />
                    <path d="M145 25 L 152 25" stroke="#56b0a4" strokeWidth="1.5" />
                    <path d="M168 25 L 180 25" stroke="#56b0a4" strokeWidth="1.5" />
                    
                    {/* clean linear steps on right */}
                    <path d="M180 25 L 310 25" stroke="#56b0a4" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="210" cy="25" r="4.5" fill="#56b0a4" stroke="#1c2e2c" strokeWidth="1.5" />
                    <circle cx="260" cy="25" r="4.5" fill="#56b0a4" stroke="#1c2e2c" strokeWidth="1.5" />
                    <circle cx="310" cy="25" r="4.5" fill="#56b0a4" stroke="#1c2e2c" strokeWidth="1.5" />
                    
                    {/* Floating messy nodes */}
                    <circle cx="25" cy="15" r="3" fill="#a7d7d0" opacity="0.6" />
                    <circle cx="65" cy="45" r="3" fill="#a7d7d0" opacity="0.4" />
                    <circle cx="105" cy="15" r="3.5" fill="#a7d7d0" opacity="0.5" />
                  </svg>

                  <div className="flex justify-between w-full px-1 mt-4 text-[9px] uppercase tracking-widest font-semibold text-white/50 relative z-10">
                    <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> Fragmented Variables</span>
                    <span className="text-[#56b0a4] flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#56b0a4]"></span> Unified HPT Pathway</span>
                  </div>
                </div>

                {/* 4 Custom SVG Dual-Tone Icons */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  
                  {/* Reports */}
                  <div className="bg-[#fafdfc] border border-brand-teal/5 p-4 rounded-2xl text-center flex flex-col items-center group hover:bg-white hover:shadow-sm transition-all duration-300">
                    <svg className="w-6 h-6 text-brand-teal mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-xs font-bold text-[#1c2e2c]/80">Case Reports</span>
                  </div>

                  {/* Clinics */}
                  <div className="bg-[#fafdfc] border border-brand-teal/5 p-4 rounded-2xl text-center flex flex-col items-center group hover:bg-white hover:shadow-sm transition-all duration-300">
                    <svg className="w-6 h-6 text-brand-teal mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-xs font-bold text-[#1c2e2c]/80">Accredited Clinics</span>
                  </div>

                  {/* Timing */}
                  <div className="bg-[#fafdfc] border border-brand-teal/5 p-4 rounded-2xl text-center flex flex-col items-center group hover:bg-white hover:shadow-sm transition-all duration-300">
                    <svg className="w-6 h-6 text-brand-teal mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs font-bold text-[#1c2e2c]/80">Care Timing</span>
                  </div>

                  {/* Travel */}
                  <div className="bg-[#fafdfc] border border-brand-teal/5 p-4 rounded-2xl text-center flex flex-col items-center group hover:bg-white hover:shadow-sm transition-all duration-300">
                    <svg className="w-6 h-6 text-brand-teal mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span className="text-xs font-bold text-[#1c2e2c]/80">Stay & Flights</span>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. SUPPORT THROUGHOUT YOUR TREATMENT JOURNEY (4 Cards Grid) */}
      <section className="w-full bg-white py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-teal text-xs font-bold tracking-[0.2em] uppercase block mb-4 font-sans">Full-Service Framework</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1c2e2c]">
              HPT Solution Included Support <br />
              <span className="font-serif italic font-normal text-brand-teal">Throughout Your Treatment Journey</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 1 */}
            <div className="bg-[#fafdfc] hover:bg-[#f6faf9] p-8 rounded-[2rem] border border-brand-teal/5 flex flex-col justify-between hover:shadow-[0_15px_40px_rgba(8,72,67,0.04)] hover:-translate-y-1 transition-all duration-500 group relative">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-teal rounded-t-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-teal text-white flex items-center justify-center font-bold text-xs mb-8 shadow-sm">01</div>
                <h3 className="text-lg font-bold text-[#1c2e2c] mb-3 leading-snug">Treatment Coordination Before Travel</h3>
                <p className="text-xs text-[#1c2e2c]/70 font-light leading-relaxed mb-6">
                  Organising initial case details and files, preparing documentation for review by selected clinics before departure.
                </p>
                <ul className="space-y-3 text-xs text-[#1c2e2c]/85 border-t border-brand-teal/10 pt-5">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span> Consultation coordination
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span> Medical reports & appointments
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span> Treatment planning support
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span> Flight booking assistance
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#fafdfc] hover:bg-[#f6faf9] p-8 rounded-[2rem] border border-brand-teal/5 flex flex-col justify-between hover:shadow-[0_15px_40px_rgba(8,72,67,0.04)] hover:-translate-y-1 transition-all duration-500 group relative">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-teal rounded-t-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-teal text-white flex items-center justify-center font-bold text-xs mb-8 shadow-sm">02</div>
                <h3 className="text-lg font-bold text-[#1c2e2c] mb-3 leading-snug">During Travel and Stay Support</h3>
                <p className="text-xs text-[#1c2e2c]/70 font-light leading-relaxed mb-6">
                  Supporting communication, stay bookings, and medical appointments scheduling with selected international clinics.
                </p>
                <ul className="space-y-3 text-xs text-[#1c2e2c]/85 border-t border-brand-teal/10 pt-5">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span> Accommodation assistance
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span> Airport pickup & transfers
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span> Local transport coordination
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span> Translator & communication support
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#fafdfc] hover:bg-[#f6faf9] p-8 rounded-[2rem] border border-brand-teal/5 flex flex-col justify-between hover:shadow-[0_15px_40px_rgba(8,72,67,0.04)] hover:-translate-y-1 transition-all duration-500 group relative">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-teal rounded-t-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-teal text-white flex items-center justify-center font-bold text-xs mb-8 shadow-sm">03</div>
                <h3 className="text-lg font-bold text-[#1c2e2c] mb-3 leading-snug">Coordination During Treatment</h3>
                <p className="text-xs text-[#1c2e2c]/70 font-light leading-relaxed mb-6">
                  Assisting with clinical session timings, on-ground accommodation needs, and immediate scheduling adjustments.
                </p>
                <ul className="space-y-3 text-xs text-[#1c2e2c]/85 border-t border-brand-teal/10 pt-5">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span> Clinic & hospital coordination
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span> Daily schedule support
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span> Companion travel assistance
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span> Recovery follow-up planning
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#fafdfc] hover:bg-[#f6faf9] p-8 rounded-[2rem] border border-brand-teal/5 flex flex-col justify-between hover:shadow-[0_15px_40px_rgba(8,72,67,0.04)] hover:-translate-y-1 transition-all duration-500 group relative">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-teal rounded-t-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-teal text-white flex items-center justify-center font-bold text-xs mb-8 shadow-sm">04</div>
                <h3 className="text-lg font-bold text-[#1c2e2c] mb-3 leading-snug">Post-Treatment Follow-up Support</h3>
                <p className="text-xs text-[#1c2e2c]/70 font-light leading-relaxed mb-6">
                  Coordinating recovery clinical files, follow-up scheduling, and ongoing communication with clinical specialists.
                </p>
                <ul className="space-y-3 text-xs text-[#1c2e2c]/85 border-t border-brand-teal/10 pt-5 mb-8">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span> Follow-up review channels
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span> Report translation & shipping
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span> Ongoing clinic communication
                  </li>
                </ul>
              </div>
              <Link
                href="#services"
                className="text-xs font-bold text-brand-teal flex items-center gap-1.5 group-hover:text-brand-teal-light transition-colors"
              >
                Detailed List of Services 
                <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 4. CORE TREATMENTS SECTION */}
      <section id="services" className="w-full bg-[#f6faf9] py-20 lg:py-28 border-y border-brand-teal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-teal text-xs font-bold tracking-[0.2em] uppercase block mb-4">Assistance Categories</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1c2e2c]">
              Core Treatments We Assist With
            </h2>
            <p className="text-xs text-brand-teal/70 font-light mt-4">
              Select a category to view individual pathways, clinic coordination, and destination details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Dental Care */}
            <div className="group bg-white rounded-[2rem] overflow-hidden border border-[#e5ebe9] flex flex-col justify-between h-full shadow-[0_10px_35px_rgba(8,72,67,0.01)] hover:shadow-md transition-all duration-300">
              <div>
                <div className="relative h-[240px] w-full overflow-hidden">
                  <Image src="/services_dental.png" alt="Dental Care Services" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-[#084843]/5 group-hover:bg-[#084843]/0 transition-colors pointer-events-none" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#1c2e2c] mb-3">Dental Care</h3>
                  <p className="text-xs sm:text-sm text-brand-teal/75 font-light leading-relaxed mb-4">
                    Support for implants, crowns, veneers, bridges, and full-mouth restoration through accredited clinical networks.
                  </p>
                </div>
              </div>
              <div className="p-8 pt-0">
                <Link
                  href="/services/dental"
                  className="w-full bg-[#fafdfc] hover:bg-brand-teal hover:text-white border border-brand-teal/15 text-brand-teal font-semibold text-xs py-3.5 px-6 rounded-full flex items-center justify-center gap-2 transition-all duration-300 uppercase tracking-wider"
                >
                  Click to View Dental Services
                </Link>
              </div>
            </div>

            {/* Fertility Treatments */}
            <div className="group bg-white rounded-[2rem] overflow-hidden border border-[#e5ebe9] flex flex-col justify-between h-full shadow-[0_10px_35px_rgba(8,72,67,0.01)] hover:shadow-md transition-all duration-300">
              <div>
                <div className="relative h-[240px] w-full overflow-hidden">
                  <Image src="/services_fertility.png" alt="Fertility Treatments" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-[#084843]/5 group-hover:bg-[#084843]/0 transition-colors pointer-events-none" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#1c2e2c] mb-3">Fertility Treatments</h3>
                  <p className="text-xs sm:text-sm text-brand-teal/75 font-light leading-relaxed mb-4">
                    Structured support for IVF-based fertility treatments and related specialist diagnostic care.
                  </p>
                </div>
              </div>
              <div className="p-8 pt-0">
                <Link
                  href="/services/fertility-ivf"
                  className="w-full bg-[#fafdfc] hover:bg-brand-teal hover:text-white border border-brand-teal/15 text-brand-teal font-semibold text-xs py-3.5 px-6 rounded-full flex items-center justify-center gap-2 transition-all duration-300 uppercase tracking-wider"
                >
                  Click to View Fertility Services
                </Link>
              </div>
            </div>

            {/* Eye Treatments */}
            <div className="group bg-white rounded-[2rem] overflow-hidden border border-[#e5ebe9] flex flex-col justify-between h-full shadow-[0_10px_35px_rgba(8,72,67,0.01)] hover:shadow-md transition-all duration-300">
              <div>
                <div className="relative h-[240px] w-full overflow-hidden">
                  <Image src="/services_eyevision.png" alt="Eye Treatments" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-[#084843]/5 group-hover:bg-[#084843]/0 transition-colors pointer-events-none" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#1c2e2c] mb-3">Eye Treatments</h3>
                  <p className="text-xs sm:text-sm text-brand-teal/75 font-light leading-relaxed mb-4">
                    Support for refractive procedures (LASIK/PRK) and cataract treatment through selected centers.
                  </p>
                </div>
              </div>
              <div className="p-8 pt-0">
                <Link
                  href="/services/eye-vision"
                  className="w-full bg-[#fafdfc] hover:bg-brand-teal hover:text-white border border-brand-teal/15 text-brand-teal font-semibold text-xs py-3.5 px-6 rounded-full flex items-center justify-center gap-2 transition-all duration-300 uppercase tracking-wider"
                >
                  Click to View Eye Services
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. YOUR COMPLETE TREATMENT JOURNEY WITH HPT */}
      <section id="journey" className="w-full bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-teal text-xs font-bold tracking-[0.2em] uppercase block mb-4">Step-By-Step Coordination</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1c2e2c]">
              Your Complete Treatment Journey With HPT
            </h2>
            <p className="text-xs text-brand-teal/70 font-light mt-4">
              Complete Assistance At Each Step From Inquiry to Recovery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
            {/* Connecting Timeline Line */}
            <div className="hidden md:block absolute top-[28px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-brand-mint via-brand-teal/30 to-brand-mint z-0" />

            {/* Step 1 */}
            <div className="flex flex-col items-center text-center relative z-10 group">
              <div className="w-14 h-14 rounded-full bg-brand-mint text-brand-teal font-bold flex items-center justify-center border-2 border-white shadow-md mb-6 group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">1</div>
              <h4 className="font-bold text-[#1c2e2c] mb-2 text-sm sm:text-base">Initial Discussion</h4>
              <p className="text-xs text-[#1c2e2c]/75 font-light leading-relaxed px-4">
                Medical reports and treatment requirements are reviewed to understand suitable next steps.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center relative z-10 group">
              <div className="w-14 h-14 rounded-full bg-brand-mint text-brand-teal font-bold flex items-center justify-center border-2 border-white shadow-md mb-6 group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">2</div>
              <h4 className="font-bold text-[#1c2e2c] mb-2 text-sm sm:text-base">Arrangement Of Travel</h4>
              <p className="text-xs text-[#1c2e2c]/75 font-light leading-relaxed px-4">
                Appointments, travel arrangements, and treatment schedules are coordinated carefully.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center relative z-10 group">
              <div className="w-14 h-14 rounded-full bg-brand-mint text-brand-teal font-bold flex items-center justify-center border-2 border-white shadow-md mb-6 group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">3</div>
              <h4 className="font-bold text-[#1c2e2c] mb-2 text-sm sm:text-base">Treatment Support</h4>
              <p className="text-xs text-[#1c2e2c]/75 font-light leading-relaxed px-4">
                Practical support is provided during consultations and treatment visits.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center relative z-10 group">
              <div className="w-14 h-14 rounded-full bg-brand-mint text-brand-teal font-bold flex items-center justify-center border-2 border-white shadow-md mb-6 group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">4</div>
              <h4 className="font-bold text-[#1c2e2c] mb-2 text-sm sm:text-base">Guidance & Follow-Ups</h4>
              <p className="text-xs text-[#1c2e2c]/75 font-light leading-relaxed px-4">
                With the help of regular recommendations and follow-up reviews, HPT coordinates your recovery pathway even after returning home.
              </p>
            </div>

          </div>

          <div className="text-center mt-16">
            <Link
              href="/services/dental/implants"
              className="text-xs font-bold text-brand-teal border-b border-brand-teal/30 hover:border-brand-teal pb-0.5 tracking-wider uppercase inline-block transition-all"
            >
              Learn More About the Complete Step-by-Step Process &rarr;
            </Link>
          </div>

        </div>
      </section>

      {/* 6. WHY CAREFUL PLANNING MATTERS */}
      <section className="w-full bg-[#f6faf9] py-20 lg:py-28 border-t border-brand-teal/5 relative">
        <div className="absolute inset-0 opacity-[0.01] bg-[radial-gradient(#084843_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
            <div className="lg:col-span-6">
              <span className="text-brand-teal text-xs font-bold tracking-[0.2em] uppercase block mb-4">Patient Values</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1c2e2c] leading-tight">
                Why Careful Planning Matters <br />
                <span className="font-serif italic font-normal text-brand-teal">with HPT for Treatment Abroad?</span>
              </h2>
            </div>
            
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-brand-teal/5 shadow-sm flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-teal shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-bold text-[#1c2e2c]">Early Clarity</span>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-brand-teal/5 shadow-sm flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-teal shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-bold text-[#1c2e2c]">Structured Information</span>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-brand-teal/5 shadow-sm flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-teal shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-bold text-[#1c2e2c]">Transparent Planning</span>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-brand-teal/5 shadow-sm flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-teal shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-bold text-[#1c2e2c]">Coordinated Support</span>
              </div>
            </div>
          </div>

          {/* Full-width dark teal banner CTA with Booking Form */}
          <div id="book" className="w-full bg-[#084843] rounded-[2.5rem] p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
              <div className="lg:col-span-7 text-left">
                <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-bold mb-6 font-sans leading-tight">
                  Start With A Clearer <br className="hidden sm:inline" />
                  Treatment Discussion
                </h3>
                <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed max-w-xl">
                  Treatment abroad often involves more than selecting a clinic or comparing treatment costs. Understanding treatment suitability, practical planning, travel timing, and follow-up considerations helps patients move forward with greater clarity before decisions are made.
                </p>
              </div>

              {/* Booking Form Integration */}
              <div className="lg:col-span-5 w-full bg-white rounded-3xl p-6 sm:p-8 text-[#1c2e2c] border border-[#e5ebe9] shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                {formSubmitted ? (
                  <div className="text-center py-10">
                    <div className="w-14 h-14 bg-brand-mint rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-7 h-7 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-[#084843]">Request Received</h4>
                    <p className="text-xs text-[#1c2e2c]/75 font-light leading-relaxed px-4">
                      Thank you. An HPT clinical coordinator will review your request and get in touch within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <h4 className="font-bold text-base border-b border-[#e5ebe9] pb-3 mb-2 text-left">Request Treatment Case Review</h4>
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full text-xs px-4 py-3.5 rounded-xl border border-[#e5ebe9] focus:outline-none focus:border-brand-teal bg-[#fafdfc] focus:ring-1 focus:ring-brand-teal"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs px-4 py-3.5 rounded-xl border border-[#e5ebe9] focus:outline-none focus:border-brand-teal bg-[#fafdfc] focus:ring-1 focus:ring-brand-teal"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-xs px-4 py-3.5 rounded-xl border border-[#e5ebe9] focus:outline-none focus:border-brand-teal bg-[#fafdfc] focus:ring-1 focus:ring-brand-teal"
                      />
                    </div>
                    <div>
                      <select
                        value={formData.treatment}
                        onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                        className="w-full text-xs px-4 py-3.5 rounded-xl border border-[#e5ebe9] focus:outline-none focus:border-brand-teal bg-[#fafdfc] focus:ring-1 focus:ring-brand-teal text-[#1c2e2c]/80"
                      >
                        <option value="general">General Case Review</option>
                        <option value="dental">Dental Care Assistance</option>
                        <option value="fertility">Fertility treatments</option>
                        <option value="eye">Eye treatments</option>
                      </select>
                    </div>
                    <div>
                      <textarea
                        placeholder="Share any specific reports or treatment concerns..."
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full text-xs px-4 py-3.5 rounded-xl border border-[#e5ebe9] focus:outline-none focus:border-brand-teal bg-[#fafdfc] focus:ring-1 focus:ring-brand-teal resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#084843] hover:bg-[#0c5953] text-white font-bold text-xs py-4 rounded-xl tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Discuss My Options
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. FAQ ACCORDION SECTION */}
      <section className="w-full bg-white py-20 lg:py-28 border-b border-brand-teal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column - FAQ Intro */}
            <div className="lg:col-span-5 text-left">
              <div className="inline-flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                COMMON QUESTIONS
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-6">
                Frequently Asked <br />
                <span className="font-serif italic font-normal text-brand-teal block mt-1">Information</span>
              </h2>
              <p className="text-brand-teal/70 font-light text-sm leading-relaxed mb-8 max-w-sm">
                Find answers regarding case reviews, travel scheduling, and medical records review before planning treatment.
              </p>
              
              <div className="w-full relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border border-brand-teal/5">
                <Image src="/mindera_support_group_clean.png" alt="FAQ support group" fill className="object-cover" sizes="(max-w-768px) 100vw, 400px" />
              </div>
            </div>

            {/* Right Column - Accordion */}
            <div className="lg:col-span-7 flex flex-col justify-start">
              <div className="space-y-4">
                {faqItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#f6faf9] border border-brand-teal/5 rounded-[1.5rem] p-6 text-left transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between text-base font-bold text-[#1c2e2c] focus:outline-none"
                    >
                      <span className="pr-4">{item.question}</span>
                      <span className="text-brand-teal text-xl font-light leading-none">
                        {activeFaq === idx ? "−" : "+"}
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        activeFaq === idx ? "max-h-[300px] mt-4 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-[#1c2e2c]/75 text-sm sm:text-[15px] leading-relaxed font-light border-t border-brand-teal/5 pt-4">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
