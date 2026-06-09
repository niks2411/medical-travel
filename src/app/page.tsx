"use client";

import Image from "next/image";
import { useState } from "react";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number>(0);

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
      <header className="sticky top-0 z-[100] w-full bg-white/95 backdrop-blur-md py-6 px-6 sm:px-10 lg:px-16 flex items-center justify-between transition-all duration-300">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/Logo-Mindera-Light.webp"
            alt="Mindera Logo"
            width={140}
            height={38}
            className="h-9 w-auto object-contain"
            priority
          />
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-10 text-[15px] font-semibold text-[#1c2e2c]/75">
          <a href="#home" className="text-brand-teal relative after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-brand-teal">
            Home
          </a>
          <a href="#about" className="hover:text-brand-teal transition-colors">
            About Us
          </a>
          <a href="#services" className="hover:text-brand-teal transition-colors">
            Services
          </a>
          <div className="relative group cursor-pointer flex items-center gap-1 hover:text-brand-teal transition-colors">
            <span>Pages</span>
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <a href="#contact" className="hover:text-brand-teal transition-colors">
            Contact Us
          </a>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center">
          <a
            href="#contact"
            className="bg-brand-teal hover:bg-brand-teal-light text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Get In Touch
          </a>
        </div>
      </header>

      {/* 1. HERO SECTION (Split-screen) */}
      <section className="relative w-full flex flex-col lg:flex-row min-h-[calc(100vh-92px)]">
        
        {/* Left Side Hero Panel */}
        <div className="w-full lg:w-[55%] bg-white flex flex-col justify-center p-6 sm:p-10 lg:p-12 xl:p-16 py-16 lg:py-20">
          
          {/* Core Content */}
          <div className="my-auto py-12 lg:py-0 max-w-2xl">
            {/* Tag */}
            <div className="flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
              Dental Travel
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
                Book A Session
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
            className="object-cover object-center opacity-40 mix-blend-overlay"
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
              className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 object-cover"
            />
          </div>

          {/* Transparent cover to block user interaction and hide native controls */}
          <div className="absolute inset-0 w-full h-full z-10 bg-transparent" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/15 mix-blend-multiply pointer-events-none z-0" />





        </div>
      </section>

      <section id="about" className="w-full bg-white py-20 lg:py-28 border-b border-brand-teal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
            About Mindera
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
                    &ldquo;Mental health is not a destination, but a process. It's about how you drive, not where you're going.&rdquo;
                  </p>
                  <p className="text-brand-teal/80 text-[10px] sm:text-xs font-semibold mt-3 font-sans">
                    – Our Lead Therapist
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
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Permanent Implant</span>
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Titanium Post</span>
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Natural Aesthetics</span>
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
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Support Restorative</span>
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Durable Fit</span>
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
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Porcelain/Composite</span>
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
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Durability</span>
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Functional Repair</span>
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
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Multi-Procedural</span>
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Advanced Reconstruction</span>
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
                      <span className="text-[#d1358c]">Trusted</span> Clinics and Specialist Support
                    </h4>
                    <p className="text-[#d1358c] text-[12px] sm:text-[12.5px] leading-relaxed font-light">
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
                    <p className="text-[#d1358c] text-[12px] sm:text-[12.5px] leading-relaxed font-light">
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
                Free Consultation
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
            className="object-cover object-center"
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
              className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 object-cover"
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
            Take The First Step <br />
            <span className="font-serif italic font-normal text-white block mt-2">
              Toward Mental
            </span>
            <span className="font-serif italic font-normal text-white block">
              Wellness
            </span>
          </h2>
          
          {/* Paragraph */}
          <p className="text-base sm:text-lg text-white/95 leading-relaxed font-light mb-10 max-w-xl mx-auto">
            Before planning travel, share your dental reports for specialist review to get a better treatment plan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
            <a
              href="#book"
              className="w-full sm:w-auto bg-white hover:bg-zinc-150 text-[#1c2e2c] font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              Get Started →
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

      {/* 9. MEET OUR THERAPISTS SECTION */}
      <section id="team" className="w-full bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
            Our Team
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-16 text-center">
            Meet The Therapists <br />
            <span className="font-serif italic font-normal text-brand-teal">Behind Your Healing</span>
          </h2>

          {/* Grid of 4 therapist cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            
            {/* Therapist 1 */}
            <div className="bg-[#fbfcfa] border border-brand-teal/5 rounded-[2rem] overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-[3/4] w-full bg-brand-mint/20">
                <Image
                  src="/mindera_therapist_1.png"
                  alt="Dr. Sarah Jenkins"
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                  sizes="(max-w-768px) 50vw, 25vw"
                />
              </div>
              <div className="p-6 flex items-center justify-between gap-4 bg-white border-t border-brand-teal/5">
                <div>
                  <h4 className="font-serif italic font-bold text-brand-teal text-lg leading-snug">Dr. Sarah Jenkins</h4>
                  <p className="text-xs text-brand-teal/60 font-semibold mt-1">Clinical Psychologist</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-brand-mint flex items-center justify-center text-brand-teal shrink-0 group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300 shadow-sm">
                  <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Therapist 2 */}
            <div className="bg-[#fbfcfa] border border-brand-teal/5 rounded-[2rem] overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-[3/4] w-full bg-brand-mint/20">
                <Image
                  src="/mindera_therapist_2.png"
                  alt="Dr. David Miller"
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                  sizes="(max-w-768px) 50vw, 25vw"
                />
              </div>
              <div className="p-6 flex items-center justify-between gap-4 bg-white border-t border-brand-teal/5">
                <div>
                  <h4 className="font-serif italic font-bold text-brand-teal text-lg leading-snug">Dr. David Miller</h4>
                  <p className="text-xs text-brand-teal/60 font-semibold mt-1">Cognitive Behavioral Therapist</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-brand-mint flex items-center justify-center text-brand-teal shrink-0 group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300 shadow-sm">
                  <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Therapist 3 */}
            <div className="bg-[#fbfcfa] border border-brand-teal/5 rounded-[2rem] overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-[3/4] w-full bg-brand-mint/20">
                <Image
                  src="/mindera_therapist_3.png"
                  alt="Dr. Maria Lopez"
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                  sizes="(max-w-768px) 50vw, 25vw"
                />
              </div>
              <div className="p-6 flex items-center justify-between gap-4 bg-white border-t border-brand-teal/5">
                <div>
                  <h4 className="font-serif italic font-bold text-brand-teal text-lg leading-snug">Dr. Maria Lopez</h4>
                  <p className="text-xs text-brand-teal/60 font-semibold mt-1">Family Counselor</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-brand-mint flex items-center justify-center text-brand-teal shrink-0 group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300 shadow-sm">
                  <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Therapist 4 */}
            <div className="bg-[#fbfcfa] border border-brand-teal/5 rounded-[2rem] overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-[3/4] w-full bg-brand-mint/20">
                <Image
                  src="/mindera_therapist_4.png"
                  alt="Dr. James Wilson"
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                  sizes="(max-w-768px) 50vw, 25vw"
                />
              </div>
              <div className="p-6 flex items-center justify-between gap-4 bg-white border-t border-brand-teal/5">
                <div>
                  <h4 className="font-serif italic font-bold text-brand-teal text-lg leading-snug">Dr. James Wilson</h4>
                  <p className="text-xs text-brand-teal/60 font-semibold mt-1">Trauma & Anxiety Specialist</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-brand-mint flex items-center justify-center text-brand-teal shrink-0 group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300 shadow-sm">
                  <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
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

      {/* 9.6. BOOKING / SCHEDULE SECTION */}
      <section id="book" className="w-full bg-[#f6faf9] py-20 lg:py-32 border-b border-brand-teal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column - Text and Info */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              {/* Tag */}
              <div className="inline-flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                BOOK NOW
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-6">
                Schedule Your <br />
                Therapy <br />
                <span className="font-serif italic font-normal text-brand-teal block mt-1">In Minutes Easily</span>
                <span className="font-serif italic font-normal text-brand-teal block">Online</span>
              </h2>

              {/* Paragraph */}
              <p className="text-base sm:text-lg text-brand-teal/70 leading-relaxed font-light mb-10 max-w-md">
                Fill out the form below to get matched with a therapist and choose a time that fits your needs and schedule.
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
              <form className="bg-white border border-[#e5ebe9] rounded-[2rem] p-6 sm:p-10 shadow-[0_10px_45px_rgba(0,0,0,0.02)] flex flex-col gap-6 text-left">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-xs font-bold text-[#1c2e2c] uppercase tracking-wide">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
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
                    className="w-full bg-[#fafcfc] border border-[#e5ebe9] rounded-xl px-4 py-3.5 text-sm text-[#1c2e2c] placeholder-[#1c2e2c]/45 focus:outline-none focus:border-brand-teal/40 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="service" className="text-xs font-bold text-[#1c2e2c] uppercase tracking-wide">Select Treatment / Service</label>
                  <div className="relative">
                    <select
                      id="service"
                      className="w-full bg-[#fafcfc] border border-[#e5ebe9] rounded-xl px-4 py-3.5 text-sm text-[#1c2e2c] focus:outline-none focus:border-brand-teal/40 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="implant">Dental Implants</option>
                      <option value="bridge">Dental Bridges</option>
                      <option value="veneer">Dental Veneers</option>
                      <option value="crown">Dental Crowns</option>
                      <option value="restoration">Full Mouth Restoration</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#1c2e2c]/70">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="message" className="text-xs font-bold text-[#1c2e2c] uppercase tracking-wide">Additional Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your dental needs..."
                    className="w-full bg-[#fafcfc] border border-[#e5ebe9] rounded-xl px-4 py-3.5 text-sm text-[#1c2e2c] placeholder-[#1c2e2c]/45 focus:outline-none focus:border-brand-teal/40 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-[#1c2e2c] hover:bg-[#283e3c] text-white font-semibold text-sm py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 w-full mt-2 cursor-pointer"
                >
                  Book a Session &rarr;
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-[#111816] text-white py-16 mt-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-start gap-12 w-full">
          
          {/* Logo & Description */}
          <div className="flex flex-col items-start text-left max-w-sm">
            <div className="text-white text-3xl font-bold font-sans">
              Mind<span className="font-serif italic font-normal">era</span>
            </div>
            <p className="text-[14px] text-white/60 leading-relaxed font-light mt-4">
              At Mindora, we believe mental wellness is a vital part of a good fulfilling life. Our therapists provide personalized, empathetic.
            </p>
          </div>

          {/* 5 columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 border-t border-white/10 pt-16 w-full text-left">
            
            {/* Col 1 */}
            <div>
              <span className="text-white font-bold text-xs uppercase tracking-[0.15em] mb-6 block">COMPANY</span>
              <div className="flex flex-col gap-3.5 text-sm text-white/60 font-light">
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
                <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
                <a href="#career" className="hover:text-white transition-colors flex items-center">
                  Career
                  <span className="bg-[#00c2cb] text-[#1c2e2c] font-bold text-[9px] px-2 py-0.5 rounded-full ml-2">
                    Hiring!
                  </span>
                </a>
                <a href="#membership" className="hover:text-white transition-colors">Membership</a>
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <span className="text-white font-bold text-xs uppercase tracking-[0.15em] mb-6 block">SERVICES</span>
              <div className="flex flex-col gap-3.5 text-sm text-white/60 font-light">
                <a href="#services" className="hover:text-white transition-colors">Individual Therapy</a>
                <a href="#services" className="hover:text-white transition-colors flex items-center">
                  Couples Counseling
                  <span className="bg-[#00c2cb] text-[#1c2e2c] font-bold text-[9px] px-2 py-0.5 rounded-full ml-2">
                    New!
                  </span>
                </a>
                <a href="#services" className="hover:text-white transition-colors">Family Therapy</a>
                <a href="#services" className="hover:text-white transition-colors">Depression Treatment</a>
              </div>
            </div>

            {/* Col 3 */}
            <div>
              <span className="text-white font-bold text-xs uppercase tracking-[0.15em] mb-6 block">RESOURCES</span>
              <div className="flex flex-col gap-3.5 text-sm text-white/60 font-light">
                <a href="#blog" className="hover:text-white transition-colors">Our Blog</a>
                <a href="#guides" className="hover:text-white transition-colors">Therapy Guides</a>
                <a href="#ebook" className="hover:text-white transition-colors">E-book</a>
                <a href="#events" className="hover:text-white transition-colors">Events</a>
              </div>
            </div>

            {/* Col 4 */}
            <div>
              <span className="text-white font-bold text-xs uppercase tracking-[0.15em] mb-6 block">SOCIAL MEDIA</span>
              <div className="flex flex-col gap-3.5 text-sm text-white/60 font-light">
                <div className="flex gap-4 flex-wrap">
                  <a href="#instagram" className="flex items-center gap-1.5 hover:text-white transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    Instagram
                  </a>
                  <a href="#twitter" className="flex items-center gap-1.5 hover:text-white transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    Twitter
                  </a>
                  <a href="#tiktok" className="flex items-center gap-1.5 hover:text-white transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.01 1.61 4.18 1.22 1.25 2.89 1.86 4.58 2v3.96c-1.62-.05-3.2-.6-4.47-1.62-.16-.13-.31-.27-.45-.4v6.59c.02 2.44-.95 4.79-2.69 6.51-1.85 1.81-4.42 2.73-6.99 2.51-2.62-.19-5.07-1.64-6.52-3.86-1.57-2.37-1.92-5.45-.92-8.09 1-2.67 3.47-4.66 6.3-5.06v4.03c-1.39.2-2.61 1.09-3.21 2.37-.58 1.21-.52 2.7.17 3.84.73 1.18 2.09 1.87 3.48 1.76 1.48-.09 2.79-1.22 3.11-2.67.12-.48.15-.98.14-1.48V0h-.03z" />
                    </svg>
                    Tiktok
                  </a>
                </div>
                <div className="flex gap-4 flex-wrap">
                  <a href="#facebook" className="flex items-center gap-1.5 hover:text-white transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                    </svg>
                    Facebook
                  </a>
                  <a href="#linkedin" className="flex items-center gap-1.5 hover:text-white transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    Linkedin
                  </a>
                </div>
                <div>
                  <a href="#youtube" className="flex items-center gap-1.5 hover:text-white transition-colors">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.163c-.272-1.016-1.07-1.815-2.086-2.086C19.578 3.545 12 3.545 12 3.545s-7.578 0-9.412.532c-1.017.271-1.815 1.07-2.086 2.086C0 7.997 0 12 0 12s0 4.003.502 5.837c.271 1.016 1.07 1.815 2.086 2.086C4.422 20.455 12 20.455 12 20.455s7.578 0 9.412-.532c1.016-.271 1.815-1.07 2.086-2.086C24 16.003 24 12 24 12s0-4.003-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    Youtube
                  </a>
                </div>
              </div>
            </div>

            {/* Col 5 */}
            <div>
              <span className="text-white font-bold text-xs uppercase tracking-[0.15em] mb-6 block">CONTACT INFO</span>
              <div className="flex flex-col gap-3.5 text-sm text-white/60 font-light">
                <a href="mailto:hello@mindera.com" className="hover:text-white transition-colors">hello@mindera.com</a>
                <p>123 Growth Street, San Francisco, CA</p>
                <a href="tel:+18001234567" className="hover:text-white transition-colors">+1 (800) 123-4567</a>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Terms Row */}
          <div className="border-t border-white/10 pt-8 mt-6 w-full flex flex-col sm:flex-row justify-between items-center gap-6">
            
            {/* Copyright */}
            <p className="text-[13px] text-white/70">
              &copy; 2026 <span className="text-[#00c2cb] font-semibold">Mindera</span>. All rights reserved.
            </p>

            {/* Terms Links */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13px] text-white/60 font-medium">
              <a href="#terms" className="hover:text-white transition-colors">Terms & Conditions</a>
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#sitemap" className="hover:text-white transition-colors">Sitemap</a>
              <a href="#cookies" className="hover:text-white transition-colors">Cookies</a>
            </div>

            {/* Back To Top Button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 border border-white/20 hover:border-white/40 rounded-full px-4 py-1.5 text-xs text-white transition-all duration-300 hover:bg-white/5 cursor-pointer"
            >
              <span className="w-5 h-5 rounded-full bg-[#00c2cb] text-[#1c2e2c] flex items-center justify-center font-bold text-[10px]">
                ↑
              </span>
              Back To Top
            </button>

          </div>

        </div>
      </footer>

    </div>
  );
}
