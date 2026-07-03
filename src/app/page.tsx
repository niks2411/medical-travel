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
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const supportStages = [
    {
      num: "01",
      title: "Treatment Coordination Before Travel",
      desc: "A successful medical journey starts with rigorous preparation. HPT coordinates the transfer, organization, and clinical review of your medical documents, dental scans, or diagnostic records. We ensure that partner clinics receive a complete case profile so they can outline precise treatment options, estimated timelines, and pricing details before you book any travel. Our coordinators assist you with pre-travel requirements, online consultations, and initial planning steps.",
      image: "/mindera_consultation.png",
      list: [
        "Pre-travel clinical review of dental scans, medical records, and reports",
        "Scheduling online preliminary consultations with specialized doctors",
        "Detailed treatment plan preparation including cost estimates and options",
        "Comprehensive flight booking coordination and travel timing planning",
        "Assistance with visa document preparation if required by destination"
      ]
    },
    {
      num: "02",
      title: "During Travel and Stay Support",
      desc: "Arriving in a new country for medical treatment should feel seamless and secure. HPT handles the logistics of your arrival, local transit, and accommodation bookings. We partner with selected hotels located near treatment centers to guarantee comfort and convenience. A dedicated coordinator monitors your arrival times and handles airport pickups, hotel transfers, and scheduling updates so you can focus entirely on your health.",
      image: "/travel_stay_support.png",
      list: [
        "Accommodation bookings at selected hotels close to the treatment facility",
        "Dedicated airport reception, private transfers, and hotel check-in support",
        "Coordinated local daily transit between hotel and clinical center",
        "Professional translator support for smooth communication at all times",
        "24/7 on-ground emergency contact and coordination team availability"
      ]
    },
    {
      num: "03",
      title: "Coordination During Treatment",
      desc: "During your clinic visits, clear coordination is vital to maintain a stress-free experience. HPT works directly with the clinic’s medical team to align appointment times, recovery intervals, and treatment steps. We adjust transit schedules dynamically based on your daily session duration. If companion travel support is needed, we arrange suitable accommodations and coordinate daily schedules to ensure comfort for you and your companion.",
      image: "/mindera_team.png",
      list: [
        "Direct coordination with the clinic's administrative and medical staff",
        "Daily schedule updates, timing adjustments, and appointment tracking",
        "Companion travel arrangements, accommodation, and transport coordination",
        "Immediate assistance with post-session prescriptions and pharmacy visits",
        "Ensuring step-by-step transparency over clinical stages and next steps"
      ]
    },
    {
      num: "04",
      title: "Post-Treatment Follow-up Support",
      desc: "Your recovery journey continues long after you leave the clinic. HPT coordinates the retrieval and translation of your final medical reports, care recommendations, and prescription guidelines. Once you return home, we facilitate scheduled follow-up channels with clinical specialists to review your recovery progress. We remain your ongoing point of contact, ensuring continuous communication with the clinic.",
      image: "/mindera_support_group_clean.png",
      list: [
        "Retrieval, translation, and secure shipping of final medical files",
        "Scheduling structured follow-up reviews and virtual consultations",
        "Establishing ongoing communication channels with your treating specialist",
        "Assistance with local GP coordination and medical report sharing",
        "Continuous recovery progress tracking and guidance support"
      ]
    }
  ];

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
            <div className="inline-flex items-center gap-2 bg-[#f0f7f6] border border-brand-teal/10 px-4 py-1.5 rounded-full text-brand-teal text-[11px] font-bold tracking-[0.2em] uppercase mb-8 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
              Global Medical Travel Coordinator
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[45px] xl:text-[50px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-8">
              When Treatment Delays, <br />
              Costs, Or Limited Options <br />
              <span className="font-serif italic font-normal text-brand-teal block mt-3">
                Push Patients to Explore Further
              </span>
            </h1>

            {/* Paragraphs */}
            <div className="text-base sm:text-[17px] text-[#425451] leading-relaxed mb-10 max-w-xl font-light space-y-6">
              <p>
                Exploring treatment abroad often starts with questions around suitability, timing, and planning. Health Plus Travel supports patients by helping them navigate verified international clinics, clear treatment options, and practical travel logistics before decisions are made.
              </p>
              <p>
                Each case is approached with dedicated care, ensuring professional coordination, transparent details, and continuous support at every stage of the journey.
              </p>
            </div>

            {/* Hero Button */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#book"
                className="bg-brand-teal hover:bg-brand-teal-light text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2 group w-fit"
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
              <div className="bg-white border border-[#e5ebe9] p-8 sm:p-10 rounded-[2.5rem] shadow-xs flex flex-col gap-8">
                <div>
                  <h4 className="font-bold text-lg text-[#1c2e2c] mb-2 leading-snug">
                    Treatment Abroad Requires More Than Choosing A Clinic
                  </h4>
                  <p className="text-xs text-[#1c2e2c]/60 font-light leading-relaxed">
                    A successful medical journey involves navigating multiple coordination layers. HPT consolidates these elements into a single structured path.
                  </p>
                </div>

                {/* Coordination Delivery Photo */}
                <div className="w-full relative h-[180px] rounded-2xl overflow-hidden border border-[#e5ebe9] bg-[#fafdfc]">
                  <Image
                    src="/delivering_coordination.png"
                    alt="Comprehensive clinical travel coordination delivery"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                    sizes="(max-w-1024px) 100vw, 450px"
                  />
                </div>

                {/* 4 Custom SVG Dual-Tone Icons */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  
                  {/* Reports */}
                  <div className="bg-[#fafdfc] border border-brand-teal/10 p-4 rounded-2xl text-center flex flex-col items-center group hover:bg-white hover:shadow-xs transition-all duration-300">
                    <svg className="w-6 h-6 text-brand-teal mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-xs font-bold text-[#1c2e2c]/80">Case Reports</span>
                  </div>

                  {/* Clinics */}
                  <div className="bg-[#fafdfc] border border-brand-teal/10 p-4 rounded-2xl text-center flex flex-col items-center group hover:bg-white hover:shadow-xs transition-all duration-300">
                    <svg className="w-6 h-6 text-brand-teal mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-xs font-bold text-[#1c2e2c]/80">Accredited Clinics</span>
                  </div>

                  {/* Timing */}
                  <div className="bg-[#fafdfc] border border-brand-teal/10 p-4 rounded-2xl text-center flex flex-col items-center group hover:bg-white hover:shadow-xs transition-all duration-300">
                    <svg className="w-6 h-6 text-brand-teal mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs font-bold text-[#1c2e2c]/80">Care Timing</span>
                  </div>

                  {/* Travel */}
                  <div className="bg-[#fafdfc] border border-brand-teal/10 p-4 rounded-2xl text-center flex flex-col items-center group hover:bg-white hover:shadow-xs transition-all duration-300">
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
            {supportStages.map((stage, idx) => (
              <div
                key={idx}
                onClick={() => setActiveModal(idx)}
                className="group relative h-[380px] rounded-3xl overflow-hidden cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 border border-[#e5ebe9]"
              >
                {/* Background Image */}
                <Image
                  src={stage.image}
                  alt={stage.title}
                  fill
                  className="object-cover transition-transform duration-750 group-hover:scale-103"
                  sizes="(max-w-1024px) 100vw, 250px"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

                {/* Floating Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-left z-10">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center font-bold text-xs border border-white/10">
                    {stage.num}
                  </div>
                  
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                      {stage.title}
                    </h3>
                    <span className="text-xs text-white/70 font-light flex items-center gap-1.5 group-hover:text-white transition-colors">
                      Learn details 
                      <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Support Stage Modal Popup */}
          {activeModal !== null && (
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto"
              onClick={() => setActiveModal(null)}
            >
              <div 
                className="bg-white rounded-[2rem] max-w-4xl w-full p-8 md:p-12 shadow-2xl relative text-left animate-in fade-in zoom-in-95 duration-200 my-8"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveModal(null)}
                  className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start mt-4">
                  {/* Left Column: Stage Header & Description */}
                  <div className="md:col-span-7">
                    <div className="flex items-center gap-2.5 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                      STAGE {supportStages[activeModal].num}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1c2e2c] mb-6 leading-tight pr-8">
                      {supportStages[activeModal].title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#556966] font-light leading-relaxed">
                      {supportStages[activeModal].desc}
                    </p>
                  </div>

                  {/* Right Column: Coordination Checklist */}
                  <div className="md:col-span-5 md:border-l border-[#e5ebe9] md:pl-8">
                    <h4 className="text-xs sm:text-sm font-bold text-[#1c2e2c] uppercase tracking-wider mb-5">What HPT Coordinates:</h4>
                    <ul className="space-y-4 text-xs sm:text-[15px] text-[#1c2e2c]/85">
                      {supportStages[activeModal].list.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          )}

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
            <div className="group bg-white rounded-3xl overflow-hidden border border-[#e5ebe9] flex flex-col justify-between h-full hover:shadow-md transition-all duration-300">
              <div>
                <div className="relative h-[240px] w-full overflow-hidden bg-[#fafdfc]">
                  <Image src="/services_dental.png" alt="Dental Care Services" fill className="object-cover group-hover:scale-102 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/5 group-hover:opacity-0 transition-opacity pointer-events-none" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#1c2e2c] mb-3">Dental Care</h3>
                  <p className="text-xs sm:text-sm text-[#556966] font-light leading-relaxed">
                    Support for implants, crowns, veneers, bridges, and full-mouth restoration through accredited clinical networks.
                  </p>
                </div>
              </div>
              <div className="p-8 pt-0">
                <Link
                  href="/services/dental"
                  className="w-full bg-[#fafdfc] hover:bg-brand-teal hover:text-white border border-brand-teal/20 text-brand-teal font-bold text-[11px] py-3.5 px-6 rounded-full flex items-center justify-center gap-2 transition-all duration-300 uppercase tracking-wider"
                >
                  View Dental Services
                </Link>
              </div>
            </div>

            {/* Fertility Treatments */}
            <div className="group bg-white rounded-3xl overflow-hidden border border-[#e5ebe9] flex flex-col justify-between h-full hover:shadow-md transition-all duration-300">
              <div>
                <div className="relative h-[240px] w-full overflow-hidden bg-[#fafdfc]">
                  <Image src="/services_fertility.png" alt="Fertility Treatments" fill className="object-cover group-hover:scale-102 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/5 group-hover:opacity-0 transition-opacity pointer-events-none" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#1c2e2c] mb-3">Fertility Treatments</h3>
                  <p className="text-xs sm:text-sm text-[#556966] font-light leading-relaxed">
                    Structured support for IVF-based fertility treatments and related specialist diagnostic care.
                  </p>
                </div>
              </div>
              <div className="p-8 pt-0">
                <Link
                  href="/services/fertility-ivf"
                  className="w-full bg-[#fafdfc] hover:bg-brand-teal hover:text-white border border-brand-teal/20 text-brand-teal font-bold text-[11px] py-3.5 px-6 rounded-full flex items-center justify-center gap-2 transition-all duration-300 uppercase tracking-wider"
                >
                  View Fertility Services
                </Link>
              </div>
            </div>

            {/* Eye Treatments */}
            <div className="group bg-white rounded-3xl overflow-hidden border border-[#e5ebe9] flex flex-col justify-between h-full hover:shadow-md transition-all duration-300">
              <div>
                <div className="relative h-[240px] w-full overflow-hidden bg-[#fafdfc]">
                  <Image src="/services_eyevision.png" alt="Eye Treatments" fill className="object-cover group-hover:scale-102 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/5 group-hover:opacity-0 transition-opacity pointer-events-none" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#1c2e2c] mb-3">Eye Treatments</h3>
                  <p className="text-xs sm:text-sm text-[#556966] font-light leading-relaxed">
                    Support for refractive procedures (LASIK/PRK) and cataract treatment through selected centers.
                  </p>
                </div>
              </div>
              <div className="p-8 pt-0">
                <Link
                  href="/services/eye-vision"
                  className="w-full bg-[#fafdfc] hover:bg-brand-teal hover:text-white border border-brand-teal/20 text-brand-teal font-bold text-[11px] py-3.5 px-6 rounded-full flex items-center justify-center gap-2 transition-all duration-300 uppercase tracking-wider"
                >
                  View Eye Services
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

          <div className="max-w-4xl mx-auto flex flex-col gap-10 relative">
            
            {/* Step 1 */}
            <div className="sticky top-[100px] z-10 bg-white border border-[#e5ebe9] rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-300 flex flex-col md:flex-row h-fit md:h-[340px]">
              <div className="w-full md:w-[340px] shrink-0 relative h-[200px] md:h-full">
                <Image
                  src="/journey_discussion.png"
                  alt="Initial Case Review and Discussion"
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 100vw, 340px"
                />
              </div>
              <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center text-left flex-1 bg-white">
                <div className="flex items-center gap-3.5 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#eef6f5] border border-brand-teal/20 text-brand-teal text-sm font-bold flex items-center justify-center shrink-0">1</span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1c2e2c]">Initial Discussion & Case Review</h3>
                </div>
                <p className="text-xs sm:text-[13px] text-[#556966] font-semibold mb-3">
                  Our process begins with an in-depth clinical case evaluation:
                </p>
                <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#556966] font-light">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Gathering and organizing diagnostic reports, dental scans, or clinical files.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-3.5 h-3.5 text-brand-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Sharing profiles with accredited specialists to evaluate suitable treatment choices.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-3.5 h-3.5 text-brand-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Preparing structured assessments detailing clinic profiles, treatments, and costs.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="sticky top-[130px] z-20 bg-white border border-[#e5ebe9] rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300 flex flex-col md:flex-row h-fit md:h-[340px]">
              <div className="w-full md:w-[340px] shrink-0 relative h-[200px] md:h-full">
                <Image
                  src="/journey_travel.png"
                  alt="Arrangement of Travel and Accommodations"
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 100vw, 340px"
                />
              </div>
              <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center text-left flex-1 bg-white">
                <div className="flex items-center gap-3.5 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#eef6f5] border border-brand-teal/20 text-brand-teal text-sm font-bold flex items-center justify-center shrink-0">2</span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1c2e2c]">Arrangement of Travel & Stay</h3>
                </div>
                <p className="text-xs sm:text-[13px] text-[#556966] font-semibold mb-3">
                  Once your choice is finalized, HPT coordinates complete travel logs:
                </p>
                <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#556966] font-light">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-3.5 h-3.5 text-brand-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Booking hotel accommodations close to your selected clinical facility.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-3.5 h-3.5 text-brand-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Aligning specific travel dates and durations with your medical schedule.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-3.5 h-3.5 text-brand-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Organizing private airport arrival reception, transfers, and hotel check-in.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="sticky top-[160px] z-30 bg-white border border-[#e5ebe9] rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-300 flex flex-col md:flex-row h-fit md:h-[340px]">
              <div className="w-full md:w-[340px] shrink-0 relative h-[200px] md:h-full">
                <Image
                  src="/journey_treatment.png"
                  alt="On-ground Treatment and Clinical Support"
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 100vw, 340px"
                />
              </div>
              <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center text-left flex-1 bg-white">
                <div className="flex items-center gap-3.5 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#eef6f5] border border-brand-teal/20 text-brand-teal text-sm font-bold flex items-center justify-center shrink-0">3</span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1c2e2c]">On-Ground Treatment Support</h3>
                </div>
                <p className="text-xs sm:text-[13px] text-[#556966] font-semibold mb-3">
                  During your stay at the destination, our team provides continuous support:
                </p>
                <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#556966] font-light">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-3.5 h-3.5 text-brand-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Managing appointment timings and schedule adjustments directly with the clinic.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-3.5 h-3.5 text-brand-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Arranging private daily transit between your hotel and the medical facility.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-3.5 h-3.5 text-brand-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Assisting with companion accommodation, pharmacy visits, and translations.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div className="sticky top-[190px] z-40 bg-white border border-[#e5ebe9] rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-md transition-all duration-300 flex flex-col md:flex-row h-fit md:h-[340px]">
              <div className="w-full md:w-[340px] shrink-0 relative h-[200px] md:h-full">
                <Image
                  src="/journey_recovery.png"
                  alt="Post-Treatment Guidance and Recovery Follow-Ups"
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 100vw, 340px"
                />
              </div>
              <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center text-left flex-1 bg-white">
                <div className="flex items-center gap-3.5 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#eef6f5] border border-brand-teal/20 text-brand-teal text-sm font-bold flex items-center justify-center shrink-0">4</span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1c2e2c]">Guidance & Recovery Follow-Ups</h3>
                </div>
                <p className="text-xs sm:text-[13px] text-[#556966] font-semibold mb-3">
                  We remain your point of contact even after you return home:
                </p>
                <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#556966] font-light">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-3.5 h-3.5 text-brand-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Retrieval and translation of complete medical reports and discharge instructions.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-3.5 h-3.5 text-brand-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Establishing virtual consultation channels with your clinical specialists.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-3.5 h-3.5 text-brand-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Monitoring your long-term progress and coordinating care details with your GP.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <div className="text-center mt-20 relative z-50">
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
          <div id="book" className="w-full bg-[#084843] rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-md">
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
              <div className="lg:col-span-5 w-full bg-white rounded-3xl p-6 sm:p-8 text-[#1c2e2c] border border-[#e5ebe9] shadow-md">
                {formSubmitted ? (
                  <div className="text-center py-10">
                    <div className="w-14 h-14 bg-[#eef6f5] rounded-full flex items-center justify-center mx-auto mb-6">
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
                        className="w-full text-xs px-4 py-3.5 rounded-xl border border-[#e5ebe9] focus:outline-none focus:border-brand-teal bg-[#fafdfc] focus:ring-1 focus:ring-brand-teal/20"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs px-4 py-3.5 rounded-xl border border-[#e5ebe9] focus:outline-none focus:border-brand-teal bg-[#fafdfc] focus:ring-1 focus:ring-brand-teal/20"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-xs px-4 py-3.5 rounded-xl border border-[#e5ebe9] focus:outline-none focus:border-brand-teal bg-[#fafdfc] focus:ring-1 focus:ring-brand-teal/20"
                      />
                    </div>
                    <div>
                      <select
                        value={formData.treatment}
                        onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                        className="w-full text-xs px-4 py-3.5 rounded-xl border border-[#e5ebe9] focus:outline-none focus:border-brand-teal bg-[#fafdfc] focus:ring-1 focus:ring-brand-teal/20 text-[#1c2e2c]/80"
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
                        className="w-full text-xs px-4 py-3.5 rounded-xl border border-[#e5ebe9] focus:outline-none focus:border-brand-teal bg-[#fafdfc] focus:ring-1 focus:ring-brand-teal/20 resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-brand-teal hover:bg-brand-teal-light text-white font-bold text-xs py-4 rounded-xl tracking-wider uppercase transition-all duration-300 shadow-xs hover:shadow-sm"
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
      <section className="w-full bg-white py-20 lg:py-28 border-b border-[#e5ebe9]">
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
              
              <div className="w-full relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border border-[#e5ebe9]">
                <Image src="/mindera_support_group_clean.png" alt="FAQ support group" fill className="object-cover" sizes="(max-w-768px) 100vw, 400px" />
              </div>
            </div>

            {/* Right Column - Accordion */}
            <div className="lg:col-span-7 flex flex-col justify-start">
              <div className="space-y-4">
                {faqItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-[#e5ebe9] rounded-2xl p-6 text-left transition-all duration-300 hover:border-brand-teal/20"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between text-base font-bold text-[#1c2e2c] focus:outline-none"
                    >
                      <span className="pr-4 text-[#1c2e2c]">{item.question}</span>
                      <span className="text-brand-teal text-xl font-light leading-none">
                        {activeFaq === idx ? "−" : "+"}
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        activeFaq === idx ? "max-h-[300px] mt-4 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-[#556966] text-sm sm:text-[15px] leading-relaxed font-light border-t border-[#e5ebe9] pt-4">
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
