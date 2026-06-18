"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import AnimatedCounter from "@/components/AnimatedCounter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FertilityServicesPage() {
  const [activeFaq, setActiveFaq] = useState<number>(0);
  const [heroVideoLoaded, setHeroVideoLoaded] = useState(false);
  const [ctaVideoLoaded, setCtaVideoLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: ["ivf"],
    timeframe: "1_month",
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
      question: "Which reports are generally required for review by specialists before planning fertility treatment?",
      answer: "Some of the reports that are generally required to be reviewed by specialists before planning their fertility treatment are hormone tests, ultrasound findings, semen analysis, and previous fertility reports."
    },
    {
      question: "Is IVF the only fertility treatment option?",
      answer: "No. Patients may also consider opting for other options such as FET (Frozen Embryo Transfer), ICSI, mild IVF, or donor treatment based on their medical conditions and recommendations from specialists."
    },
    {
      question: "Can treatment still be explored by patients after several failed IVF cycles?",
      answer: "Yes. Most often, previous treatment reports assist specialists in reviewing what they may consider doing next to improve success chances."
    },
    {
      question: "How do specialists decide the right fertility treatment?",
      answer: "The fertility specialist generally recommends treatment to patients after reviewing their age, medical reports, and overall health history."
    },
    {
      question: "Can donor options also be discussed while consultation with specialists?",
      answer: "Yes, specialists may consider and recommend patients with donor treatment (such as donor eggs or donor sperm) when it is medically appropriate."
    },
    {
      question: "Is one visit enough for fertility treatment abroad?",
      answer: "This depends entirely on the type of treatment, cycle timing, and treatment plan created for you as an individual."
    }
  ];

  const testimonials = [
    {
      text: "After experiencing two unsuccessful IVF cycles, my partner and I felt completely lost. The team at HPT stepped in, reviewed our reports, and connected us with an amazing clinic abroad. Their coordinators handled the coordination seamlessly. Today, we are expecting our first child.",
      author: "Brandon John",
      title: "IVF Success Patient",
      avatar: "/mindera_testimonial_1.png"
    },
    {
      text: "HPT made our fertility journey incredibly stress-free. The coordinator managed our travel timelines, doctor appointments, and hotel stays perfectly. They made sure we had a direct connection with our treating fertility specialist online even before we boarded the flight.",
      author: "Julia Tandra",
      title: "International Fertility Patient",
      avatar: "/mindera_testimonial_2.png"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafdfc] text-[#1c2e2c] flex flex-col font-sans">
      <Navbar />

      {/* 1. HERO SECTION (Split-screen) */}
      <section className="relative w-full flex flex-col lg:flex-row min-h-[calc(100vh-92px)]">
        {/* Left Side Hero Panel */}
        <div className="w-full lg:w-[55%] bg-white flex flex-col justify-center p-6 sm:p-10 lg:p-12 xl:p-16 py-16 lg:py-20">
          <div className="my-auto py-12 lg:py-0 max-w-2xl text-left flex flex-col items-start">
            {/* Tag */}
            <div className="flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
              Fertility Care & Treatment Travel
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-6">
              Top-Notch Fertility <br />
              Treatment Support <br />
              <span className="font-serif italic font-normal text-brand-teal block mt-2">
                With HPT-Associated Clinics
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-brand-teal/70 leading-relaxed mb-10 max-w-lg font-light">
              Patients can explore appropriate fertility treatment options, trusted fertility clinics, and our associated fertility specialists abroad with our unparalleled assistance, clear guidance, and coordinated care.
            </p>

            {/* Hero Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#book"
                className="bg-brand-teal hover:bg-brand-teal-light text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
              >
                Discuss Your Options
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="#services"
                className="border border-brand-teal/20 hover:border-brand-teal/40 text-brand-teal font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 hover:bg-brand-mint/40 flex items-center justify-center gap-2 cursor-pointer"
              >
                Explore Services
                <svg className="w-4 h-4 text-brand-teal/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Trust Badge */}
            <div className="flex flex-row items-center gap-4 mt-10">
              <div className="flex -space-x-3">
                <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <Image src="/mindera_therapist_1.png" alt="Trusted Client" fill sizes="40px" className="object-cover" />
                </div>
                <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <Image src="/mindera_therapist_2.png" alt="Trusted Client" fill sizes="40px" className="object-cover" />
                </div>
                <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <Image src="/mindera_therapist_3.png" alt="Trusted Client" fill sizes="40px" className="object-cover" />
                </div>
                <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <Image src="/mindera_therapist_4.png" alt="Trusted Client" fill sizes="40px" className="object-cover" />
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
            src="/fertility_hero.png"
            alt="Empathetic consultation at fertility clinic"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-w-1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/15 pointer-events-none" />
        </div>
      </section>

      {/* 2. ABOUT HPT SECTION */}
      <section id="about" className="w-full bg-white py-20 lg:py-28 border-b border-brand-teal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
            About HPT
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-8">
            What Is Meant By <span className="font-serif italic font-normal text-brand-teal">Fertility Treatment?</span>
          </h2>

          <div className="flex flex-col gap-6 text-base sm:text-lg text-brand-teal/95 font-light leading-relaxed max-w-4xl mx-auto text-left mb-16">
            <p>
              Fertility treatment refers to when different types of medical techniques are used when it is not possible for the patient, or they are facing complications in conceiving naturally, or there is a need for support and guidance from specialists, due to underlying medical complications.
            </p>
            <p>
              Both men and women may be affected because of fertility challenges they are experiencing, and there may be different reasons for this complication, such as low ovarian reserve, hormonal imbalance, age-related fertility decline, sperm-related factors, or unexplained infertility.
            </p>
            <p>
              As each fertility case is not the same, the treatment planning for these issues begins with a careful review of medical reports before deciding which treatment option may prove to be most appropriate for the patient.
            </p>
          </div>

          {/* About Section Asymmetric Layout */}
          <div className="flex flex-col md:flex-row gap-8 mt-16 w-full items-stretch relative">
            {/* Left Column (Tall portrait image) */}
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

              {/* Stats Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                <div className="flex items-center gap-3 justify-start md:pl-2">
                  <span className="text-5xl sm:text-[52px] font-serif text-[#1c2e2c] flex items-center leading-none">
                    <AnimatedCounter target={25} suffix="+" />
                  </span>
                  <div className="text-xs text-brand-teal/85 font-medium uppercase tracking-wider leading-tight text-left">
                    <div>Years</div>
                    <div>Experience</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 justify-start sm:justify-center">
                  <span className="text-5xl sm:text-[52px] font-serif text-[#1c2e2c] flex items-center leading-none">
                    <AnimatedCounter target={20} suffix="+" />
                  </span>
                  <div className="text-xs text-brand-teal/85 font-medium uppercase tracking-wider leading-tight text-left">
                    <div>Professional</div>
                    <div>Clinic Partners</div>
                  </div>
                </div>

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
            
            {/* Left Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 h-fit text-left">
              <div className="inline-flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                OUR SERVICES
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-6">
                Fertility Treatments <br />
                <span className="font-serif italic font-normal text-brand-teal">We Assist</span>
              </h2>

              <p className="text-base sm:text-lg text-brand-teal/70 leading-relaxed font-light mb-8 max-w-md">
                We are indulged in offering our assistance for several fertility solutions to correct complications, support conception, and guide you through IVF and donor cycles.
              </p>

              <a
                href="#book"
                className="bg-brand-teal hover:bg-brand-teal-light text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 w-fit cursor-pointer"
              >
                Discuss Options
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Right Column (Scroll-stacking service cards) */}
            <div className="lg:col-span-7 flex flex-col gap-12 relative pb-20">
              
              {/* Card 1: When Patients Generally Seek Fertility Support for Themselves */}
              <div className="sticky top-[100px] z-10 bg-white border border-brand-teal/5 rounded-[2rem] p-8 sm:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col gap-6 text-left">
                <div className="flex justify-between items-start w-full">
                  <div className="w-16 h-16 rounded-2xl bg-brand-mint flex items-center justify-center shrink-0">
                    <svg className="w-9 h-9 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#1c2e2c] mb-4">
                    When Patients Generally Seek <span className="font-serif italic font-normal text-brand-teal">Fertility Support</span>
                  </h3>
                  <p className="text-[#1c2e2c]/80 text-[14px] sm:text-[15px] leading-relaxed mb-4 font-light">
                    Patients may consider fertility treatment support for themselves when:
                  </p>
                  <ul className="space-y-2.5 text-[#1c2e2c]/75 text-[13px] sm:text-sm font-light text-left pl-1">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-teal mt-1">✦</span>
                      <span>Pregnancy is not happening even after several repeated natural attempts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-teal mt-1">✦</span>
                      <span>Previous fertility treatments of patient have been unsuccessful</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-teal mt-1">✦</span>
                      <span>Conception is getting affected because of age-related fertility changes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-teal mt-1">✦</span>
                      <span>Medical conditions of patients are affecting their pregnancy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-teal mt-1">✦</span>
                      <span>There may be a necessity for donor support or any other specialised treatment options</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 2: Initial Fertility Assessment */}
              <div className="sticky top-[130px] z-20 bg-white border border-brand-teal/5 rounded-[2rem] p-8 sm:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col gap-6 text-left">
                <div className="flex justify-between items-start w-full">
                  <div className="w-16 h-16 rounded-2xl bg-brand-mint flex items-center justify-center shrink-0">
                    <svg className="w-9 h-9 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M12 9v6m-7 3a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5z" />
                    </svg>
                  </div>
                  
                  <div className="text-right leading-none flex flex-col items-end">
                    <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-teal/50 uppercase">START</span>
                    <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-teal/50 uppercase mt-0.5">FROM</span>
                    <span className="text-2xl sm:text-3xl font-bold text-brand-teal mt-1.5">$150</span>
                    <span className="text-[10px] sm:text-xs italic text-brand-teal/60 mt-1">/ Assessment</span>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] sm:text-xs font-bold tracking-widest text-brand-teal/60 uppercase block mb-1">
                    Fertility Care Begins With Detailed Assessment
                  </span>
                  <h3 className="text-2xl font-bold text-[#1c2e2c] mb-3">
                    Initial Fertility <span className="font-serif italic font-normal text-brand-teal">Assessment</span>
                  </h3>
                  <p className="text-brand-teal/75 text-[15px] leading-relaxed mb-6 font-light">
                    Specialists generally review the available reports of the patient, hormone levels, menstrual and medical history of the patient, semen analysis, and ultrasound findings, wherever required. This assists them in having a better understanding of the possible factors that are affecting the conception of the patient and provides them with relevant guidance on which treatment they require and which treatment option may be most appropriate for them.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-[#f4faf9] text-[#1c2e2c]/75 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Hormone levels & history</span>
                    <span className="text-xs bg-[#f4faf9] text-[#1c2e2c]/75 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Semen analysis</span>
                    <span className="text-xs bg-[#f4faf9] text-[#1c2e2c]/75 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Ultrasound findings</span>
                  </div>
                </div>
              </div>

              {/* Card 3: IVF-Based Fertility Treatments */}
              <div className="sticky top-[160px] z-30 bg-white border border-brand-teal/5 rounded-[2rem] p-8 sm:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col gap-6 text-left">
                <div className="flex justify-between items-start w-full">
                  <div className="w-16 h-16 rounded-2xl bg-brand-mint flex items-center justify-center shrink-0">
                    <svg className="w-9 h-9 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6a6 6 0 100 12 6 6 0 000-12z" />
                    </svg>
                  </div>
                  
                  <div className="text-right leading-none flex flex-col items-end">
                    <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-teal/50 uppercase">START</span>
                    <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-teal/50 uppercase mt-0.5">FROM</span>
                    <span className="text-2xl sm:text-3xl font-bold text-brand-teal mt-1.5">$3,500</span>
                    <span className="text-[10px] sm:text-xs italic text-[#1c2e2c]/60 mt-1">/ Cycle</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#1c2e2c] mb-3">
                    IVF-Based <span className="font-serif italic font-normal text-brand-teal">Fertility Treatments</span>
                  </h3>
                  <p className="text-brand-teal/75 text-[15px] leading-relaxed mb-6 font-light">
                    Specialists may recommend patients with different IVF treatment options based on their medical conditions and treatment planning, such as conventional IVF, mild stimulation protocols, or frozen embryo transfer.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-[#f4faf9] text-[#1c2e2c]/75 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Conventional IVF</span>
                    <span className="text-xs bg-[#f4faf9] text-[#1c2e2c]/75 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Mild Stimulation</span>
                    <span className="text-xs bg-[#f4faf9] text-[#1c2e2c]/75 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Frozen Embryo Transfer</span>
                  </div>
                </div>
              </div>

              {/* Card 4: Donor-Based Fertility Support */}
              <div className="sticky top-[190px] z-40 bg-white border border-brand-teal/5 rounded-[2rem] p-8 sm:p-10 shadow-[0_4px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_45px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col gap-6 text-left">
                <div className="flex justify-between items-start w-full">
                  <div className="w-16 h-16 rounded-2xl bg-brand-mint flex items-center justify-center shrink-0">
                    <svg className="w-9 h-9 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  
                  <div className="text-right leading-none flex flex-col items-end">
                    <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-teal/50 uppercase">START</span>
                    <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-teal/50 uppercase mt-0.5">FROM</span>
                    <span className="text-2xl sm:text-3xl font-bold text-brand-teal mt-1.5">$4,500</span>
                    <span className="text-[10px] sm:text-xs italic text-[#1c2e2c]/60 mt-1">/ Program</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#1c2e2c] mb-3">
                    Donor-Based <span className="font-serif italic font-normal text-brand-teal">Fertility Support</span>
                  </h3>
                  <p className="text-brand-teal/75 text-[15px] leading-relaxed mb-6 font-light">
                    Patients may consider opting for donor egg IVF or donor sperm IVF in some selected cases based on their medical condition and treatment planning when their specialist recommends them to opt for that treatment option.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-[#f4faf9] text-[#1c2e2c]/75 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Donor Egg IVF</span>
                    <span className="text-xs bg-[#f4faf9] text-[#1c2e2c]/75 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Donor Sperm IVF</span>
                    <span className="text-xs bg-[#f4faf9] text-[#1c2e2c]/75 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Screened Donors</span>
                  </div>
                </div>
              </div>

              {/* Card 5: Additional IVF Techniques */}
              <div className="sticky top-[220px] z-50 bg-white border border-brand-teal/5 rounded-[2rem] p-8 sm:p-10 shadow-[0_4px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_45px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col gap-6 text-left">
                <div className="flex justify-between items-start w-full">
                  <div className="w-16 h-16 rounded-2xl bg-brand-mint flex items-center justify-center shrink-0">
                    <svg className="w-9 h-9 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.22a2 2 0 00-1.806.547M8 4h8l-1 1H9L8 4z" />
                    </svg>
                  </div>
                  
                  <div className="text-right leading-none flex flex-col items-end">
                    <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-teal/50 uppercase">START</span>
                    <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-teal/50 uppercase mt-0.5">FROM</span>
                    <span className="text-2xl sm:text-3xl font-bold text-brand-teal mt-1.5">$1,000</span>
                    <span className="text-[10px] sm:text-xs italic text-[#1c2e2c]/60 mt-1">/ Procedure</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#1c2e2c] mb-3">
                    Additional <span className="font-serif italic font-normal text-brand-teal">IVF Techniques</span>
                  </h3>
                  <p className="text-brand-teal/75 text-[15px] leading-relaxed mb-6 font-light">
                    You may consider opting for some additional IVF techniques that may incorporate ICSI, blastocyst culture, or embryo genetic testing when recommended by their specialists based on their medical condition.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-[#f4faf9] text-[#1c2e2c]/75 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Blastocyst culture</span>
                    <span className="text-xs bg-[#f4faf9] text-[#1c2e2c]/75 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Genetic testing</span>
                  </div>
                </div>
              </div>

              {/* Card 6: ICSI (Intracytoplasmic Sperm Injection) */}
              <div className="sticky top-[250px] z-[60] bg-white border border-brand-teal/5 rounded-[2rem] p-8 sm:p-10 shadow-[0_4px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_45px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col gap-6 text-left">
                <div className="flex justify-between items-start w-full">
                  <div className="w-16 h-16 rounded-2xl bg-brand-mint flex items-center justify-center shrink-0">
                    <svg className="w-9 h-9 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7C4.547 9.547 4.5 10.768 4.5 12s.047 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.092-1.209.138-2.43.138-3.662z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12a3 3 0 116 0 3 3 0 01-6 0z" />
                    </svg>
                  </div>
                  
                  <div className="text-right leading-none flex flex-col items-end">
                    <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-teal/50 uppercase">START</span>
                    <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-teal/50 uppercase mt-0.5">FROM</span>
                    <span className="text-2xl sm:text-3xl font-bold text-brand-teal mt-1.5">$800</span>
                    <span className="text-[10px] sm:text-xs italic text-[#1c2e2c]/60 mt-1">/ Procedure</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#1c2e2c] mb-3">
                    ICSI <span className="font-serif italic font-normal text-brand-teal">(Intracytoplasmic Sperm Injection)</span>
                  </h3>
                  <p className="text-[#1c2e2c]/85 text-[15px] leading-relaxed mb-6 font-light">
                    ICSI or Intracytoplasmic Sperm Injection, which is a majorly renowned advanced laboratory technique, is basically not a separate treatment, but it is taken into use by specialists as part of the IVF or In Vitro Fertilization process. This technique is designed in such a way that it can enhance fertilization in those patients who are going through sperm-related challenges.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-[#f4faf9] text-[#1c2e2c]/75 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Advanced lab technique</span>
                    <span className="text-xs bg-[#f4faf9] text-[#1c2e2c]/75 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Fertilization enhancement</span>
                    <span className="text-xs bg-[#f4faf9] text-[#1c2e2c]/75 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Sperm challenge support</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE HPT FOR FERTILITY SECTION */}
      <section id="why-choose-us" className="w-full bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
            Why Choose Us
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans text-center">
            Why Some Patients Explore <br />
            <span className="font-serif italic font-normal text-brand-teal block mt-2">
              Fertility Treatment Abroad?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-brand-teal/70 leading-relaxed font-light mt-6 mb-16 text-center max-w-3xl">
            Patients may consider fertility treatment abroad to access experienced fertility centres, fertility specialists, shorter waiting periods, a large number of treatment options, and more affordable treatment options, depending on the country and clinic they select.
          </p>

          <div className="w-full max-w-6xl relative pb-12 md:pb-36">
            {/* Group Counseling Image */}
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {/* Card 1 */}
                <div className="bg-white border border-[#e5ebe9] rounded-[1.25rem] p-5 sm:p-6 flex flex-col justify-between text-left">
                  <div>
                    <h4 className="text-[15px] font-bold text-[#1c2e2c] mb-2.5 leading-snug">
                      Access to <span className="text-brand-teal">Experienced</span> Fertility Centres
                    </h4>
                    <p className="text-[#556966] text-[12px] sm:text-[12.5px] leading-relaxed font-light">
                      Patients may easily access experienced fertility centres that are well-versed in specialized expertise and advanced technology.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white border border-[#e5ebe9] rounded-[1.25rem] p-5 sm:p-6 flex flex-col justify-between text-left">
                  <div>
                    <h4 className="text-[15px] font-bold text-[#1c2e2c] mb-2.5 leading-snug">
                      A <span className="text-brand-teal">Massive Range</span> of Treatment Options
                    </h4>
                    <p className="text-[#556966] text-[12px] sm:text-[12.5px] leading-relaxed font-light">
                      They can explore a massive array of treatment options incorporating IVF techniques and donor programs.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white border border-[#e5ebe9] rounded-[1.25rem] p-5 sm:p-6 flex flex-col justify-between text-left">
                  <div>
                    <h4 className="text-[15px] font-bold text-[#1c2e2c] mb-2.5 leading-snug">
                      Shorter <span className="text-brand-teal">Waiting</span> Periods
                    </h4>
                    <p className="text-[#556966] text-[12px] sm:text-[12.5px] leading-relaxed font-light">
                      Patients don’t have to wait for a longer period, as our associated fertility clinics abroad offer shorter waiting periods for consultation and procedures.
                    </p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="bg-white border border-[#e5ebe9] rounded-[1.25rem] p-5 sm:p-6 flex flex-col justify-between text-left">
                  <div>
                    <h4 className="text-[15px] font-bold text-[#1c2e2c] mb-2.5 leading-snug">
                      More <span className="text-brand-teal">Affordable</span> Costs of Treatment
                    </h4>
                    <p className="text-[#556966] text-[12px] sm:text-[12.5px] leading-relaxed font-light">
                      Patients may get more affordable treatment costs depending on the country and clinic they select in comparison to those in some countries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GUIDED PROCESS SECTION */}
      <section id="process" className="w-full bg-white py-20 lg:py-32 border-t border-b border-brand-teal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-3 flex flex-col items-start text-left">
              <div className="flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                Our Process
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-8">
                Your Fertility <br />
                Treatment <br />
                Process <br />
                <span className="font-serif italic font-normal text-brand-teal block mt-1">With HPT</span>
              </h2>

              <a
                href="#book"
                className="bg-brand-teal hover:bg-brand-teal-light text-white text-[13px] font-bold px-6 py-3.5 rounded-full transition-all duration-300 shadow-md flex items-center gap-2 w-fit mb-10 lg:mb-0 cursor-pointer"
              >
                Request Consultation
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Middle Column */}
            <div className="lg:col-span-4 w-full">
              <div className="w-full relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl border border-white bg-white">
                <Image
                  src="/mindera_process.png"
                  alt="Specialist explaining process"
                  fill
                  className="object-cover"
                  sizes="(max-w-1024px) 40vw, 30vw"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 relative pl-4 sm:pl-8 w-full">
              <div className="absolute left-10 sm:left-14 top-8 bottom-8 w-[2px] bg-[#d1dcd9] pointer-events-none" />

              <div className="flex flex-col gap-8">
                {/* Step 1 */}
                <div className="flex gap-6 items-start relative group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-md z-10 border-4 border-white transition-transform duration-300 group-hover:scale-105">
                    01
                  </div>
                  <div className="flex-1 text-left pt-1 sm:pt-2">
                    <h4 className="text-lg font-bold text-[#1c2e2c] mb-1">
                      Initial Medical <span className="font-serif italic font-normal text-brand-teal">Review</span>
                    </h4>
                    <p className="text-[#1c2e2c]/70 text-[13px] leading-relaxed font-light">
                      Generally begins with reviewing available reports, hormone tests, semen analysis, or previous history.
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
                      Guidance & Treatment <span className="font-serif italic font-normal text-brand-teal">Planning</span>
                    </h4>
                    <p className="text-[#1c2e2c]/70 text-[13px] leading-relaxed font-light">
                      Depending on age, reports, and previous cycles, specialists recommend the most appropriate approach.
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
                      Treatment <span className="font-serif italic font-normal text-brand-teal">Coordination</span>
                    </h4>
                    <p className="text-[#1c2e2c]/70 text-[13px] leading-relaxed font-light">
                      HPT coordinates clinic appointments, cycle timelines, travel planning, and hotel stays smoothly.
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
                      Clinic <span className="font-serif italic font-normal text-brand-teal">Treatment</span>
                    </h4>
                    <p className="text-[#1c2e2c]/70 text-[13px] leading-relaxed font-light">
                      Your treatment is carried out under the direct supervision of the treating specialist and medical team.
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
                      Follow-Up <span className="font-serif italic font-normal text-brand-teal">Guidance</span>
                    </h4>
                    <p className="text-[#1c2e2c]/70 text-[13px] leading-relaxed font-light">
                      Regular follow-up checks and communication are provided based on your recommended medical plan.
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
            START TODAY
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white mb-6 leading-[1.15] max-w-3xl lg:max-w-4xl font-sans">
            Discuss Your Fertility Treatment Options
            <span className="font-serif italic font-normal text-white block mt-2">
              With More Clear Guidance
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-white/95 leading-relaxed font-light mb-10 max-w-xl mx-auto">
            Share all your available reports and treatment history to have a better understanding of appropriate fertility options with trusted international clinics.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
            <a
              href="#book"
              className="bg-white hover:bg-zinc-100 text-[#1c2e2c] font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-lg flex items-center justify-center gap-2 cursor-pointer w-fit"
            >
              Start A Conversation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS SECTION */}
      <section id="testimonials" className="w-full bg-white py-20 lg:py-32 border-b border-brand-teal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-5 lg:sticky lg:top-28 text-left">
              <div className="inline-flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                REVIEWS
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] mb-6 font-sans">
                What Our Happy <br />
                <span className="font-serif italic font-normal text-brand-teal block mt-2">
                  Patients Say About Us
                </span>
              </h2>

              <p className="text-base text-brand-teal/70 leading-relaxed font-light mb-8 max-w-md">
                We take pride in assisting couples and individuals through their medical travel and treatment stages abroad with full coordinator care.
              </p>

              <div className="flex items-center gap-4 border-t border-brand-teal/5 pt-8">
                <div className="flex -space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-brand-mint overflow-hidden relative border border-white">
                    <Image src="/mindera_testimonial_1.png" alt="Patient avatar" fill className="object-cover" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-brand-mint overflow-hidden relative border border-white">
                    <Image src="/mindera_testimonial_2.png" alt="Patient avatar" fill className="object-cover" />
                  </div>
                </div>
                <div className="text-left">
                  <span className="block text-xs font-semibold text-brand-teal">Over 500+ couples supported</span>
                  <span className="text-[11px] text-brand-teal/60 font-medium mt-0.5 block">Trusted medical travel assistance</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-8">
              {/* Testimonial Card 1 */}
              <div className="bg-[#fafcfc] border border-[#e5ebe9] rounded-[2rem] p-6 sm:p-8 flex flex-col sm:flex-row gap-6 hover:shadow-md transition-shadow duration-300">
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-full overflow-hidden relative bg-brand-mint border border-brand-teal/5">
                    <Image src={testimonials[0].avatar} alt={testimonials[0].author} fill className="object-cover" />
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
              <div className="bg-[#fafcfc] border border-[#e5ebe9] rounded-[2rem] p-6 sm:p-8 flex flex-col sm:flex-row gap-6 hover:shadow-md transition-shadow duration-300">
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-full overflow-hidden relative bg-brand-mint border border-brand-teal/5">
                    <Image src={testimonials[1].avatar} alt={testimonials[1].author} fill className="object-cover" />
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

      {/* 8. CTA-2 (Booking Inquiry Form) */}
      <section id="book" className="w-full bg-[#f6faf9] py-20 lg:py-32 border-b border-brand-teal/5 relative">
        <div id="contact" className="absolute top-0 left-0" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                START HERE
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-6">
                Get an Initial Fertility <br />
                <span className="font-serif italic font-normal text-brand-teal block mt-2">
                  Review With HPT
                </span>
              </h2>

              <p className="text-base sm:text-lg text-brand-teal/70 leading-relaxed font-light mb-10 max-w-md">
                Share all your available medical reports, hormone tests, ultrasound findings, or previous fertility cycles to have a better understanding of possible treatment options along with their suitability.
              </p>

              <div className="flex flex-col sm:flex-row gap-8 mb-12 w-full">
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

              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-brand-teal/5">
                  <Image src="/mindera_consultation.png" alt="Consultation room" fill className="object-cover" sizes="(max-w-768px) 50vw, 250px" />
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-brand-teal/5">
                  <Image src="/mindera_process.png" alt="Process consultation" fill className="object-cover" sizes="(max-w-768px) 50vw, 250px" />
                </div>
              </div>
            </div>

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
                    We have received your fertility review details and will get back to you with clinic review suggestions within 24 hours.
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
                                    { value: "ivf", label: "In Vitro Fertilization (IVF)" },
                                    { value: "fet", label: "Frozen Embryo Transfer (FET)" },
                                    { value: "egg_donor", label: "Donor Egg IVF" },
                                    { value: "sperm_donor", label: "Donor Sperm IVF" },
                                    { value: "icsi", label: "Intracytoplasmic Sperm Injection" },
                                    { value: "mild_ivf", label: "Mild / Natural IVF" },
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
                            { value: "ivf", label: "In Vitro Fertilization (IVF)" },
                            { value: "fet", label: "Frozen Embryo Transfer (FET)" },
                            { value: "egg_donor", label: "Donor Egg IVF" },
                            { value: "sperm_donor", label: "Donor Sperm IVF" },
                            { value: "icsi", label: "Intracytoplasmic Sperm Injection" },
                            { value: "mild_ivf", label: "Mild / Natural IVF" },
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
                    <label htmlFor="message" className="text-xs font-bold text-[#1c2e2c] uppercase tracking-wide">Tell us about your fertility needs</label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Detail any previous fertility cycles or your medical background..."
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

      {/* 9. FAQ SECTION */}
      <section id="faq" className="w-full bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-5 bg-[#e8f1ef] rounded-[2rem] p-6 sm:p-8 flex flex-col gap-6 text-left">
              <div className="relative w-full aspect-[1.2/1] rounded-2xl overflow-hidden shadow-sm">
                <Image src="/mindera_support_group_clean.png" alt="Support group session" fill className="object-cover" sizes="(max-w-768px) 100vw, 400px" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1c2e2c] leading-snug">
                  Want to get answers to <span className="font-serif italic font-normal text-brand-teal">some more questions?</span>
                </h3>
                <p className="text-[13px] text-brand-teal/75 leading-relaxed font-light mt-3">
                  Here, you can find answers to some of the most frequently asked questions about your IVF treatment.
                </p>
              </div>

              <a
                href="#book"
                className="bg-[#1c2e2c] hover:bg-[#283e3c] text-white font-semibold text-xs px-6 py-3.5 rounded-full transition-all duration-300 shadow-md flex items-center justify-center gap-2 w-fit cursor-pointer"
              >
                Get a Preliminary Review &rarr;
              </a>
            </div>

            <div className="lg:col-span-7 flex flex-col text-left">
              <div className="inline-flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                NEED HELP
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-10">
                Frequently Asked Questions <br />
                About <span className="font-serif italic font-normal text-brand-teal">IVF & Fertility</span>
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
