"use client";

import Image from "next/image";
import { useState } from "react";
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
    service: "implant",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const faqItems = [
    {
      question: "What do you mean by dental implant?",
      answer: "A dental implant is a treatment in which a titanium-plated artificial tooth is placed in the jawbone in the place of a missing tooth. It helps your teeth to look and work perfectly and naturally."
    },
    {
      question: "How much time is needed for a dental implant and its recovery?",
      answer: "A dental implant is a short process that takes only a few weeks and can sometimes take up to a few months. Implanting the artificial teeth is quick, but the time depends on the healing process."
    },
    {
      question: "Is a dental implant treatment appropriate for every missing tooth?",
      answer: "The suitability of dental implant treatment for your missing tooth is dependent on your bone condition, oral health, and overall medical status."
    },
    {
      question: "Can implant treatment happen in one stage or multiple stages?",
      answer: "Depending on your oral health, bone quality, and entire treatment plan, your dental implant treatment can be done either one stage or multiple stages."
    },
    {
      question: "What if my jawbone is not sufficient for an implant?",
      answer: "In the case that you don't have enough space for the dental implant process, like bone grafting, it can be recommended to you by our experts. This allows you to get a stable base for the implant."
    },
    {
      question: "Is it safe to travel to a foreign country for a dental implant?",
      answer: "Our connection with top-notch dental specialists in countries like India, Singapore, Bali, and many more makes it completely safe and secure for our patients. Whether it's about travelling or the treatment abroad, we have our strong commitments to never compromise on the quality. You will get top-notch perfection and perfect value for your money with HPT company."
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
              Missing teeth not only affect the appearance but also cause multiple problems, and a gap in your smile can result in losing confidence, which impacts your daily life. You can get your missing tooth replaced with a stronger and more beautiful artificial tooth with the help of a dental implant. Most often specialists recommend you with the implants when a fixed long-term replacement is appropriate for you. These artificial teeth are designed in such a way that they can function very similarly to your natural teeth, assist in the improvement of your chewing stability, and support your appearance.
            </p>

            {/* Hero Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="bg-brand-teal hover:bg-brand-teal-light text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
              >
                Discuss Your Options
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
      </section>

      {/* 3. WHO MAY NEED IT */}
      <section className="w-full bg-[#f6faf9] py-20 lg:py-32 border-b border-brand-teal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column (Sticky info panel) */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 h-fit text-left">
              <div className="inline-flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                Candidacy Criteria
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-6">
                Who May <br />
                Need It?
              </h2>

              <p className="text-base sm:text-lg text-brand-teal/70 leading-relaxed font-light mb-8 max-w-md">
                Dental implants are the most suitable option for those individuals who are seeking a close to natural replacement for their missing teeth. If you are experiencing any of the following conditions, you may be an appropriate candidate for this treatment:
              </p>

              <a
                href="#contact"
                className="bg-brand-teal hover:bg-brand-teal-light text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 w-fit"
              >
                Discuss Your Options
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Right Column (Stack of candidacy cards with scroll-stacking effect) */}
            <div className="lg:col-span-7 flex flex-col gap-12 relative pb-20">
              
              {/* Card 1 */}
              <div className="sticky top-[100px] z-10 bg-white border border-brand-teal/5 rounded-[2rem] p-8 sm:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col gap-6 text-left">
                <div className="flex justify-between items-start w-full">
                  <div className="w-16 h-16 rounded-2xl bg-brand-mint flex items-center justify-center shrink-0">
                    <svg className="w-9 h-9 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <div className="text-right leading-none flex flex-col items-end">
                    <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-teal/50 uppercase">CONDITION</span>
                    <span className="text-2xl sm:text-3xl font-serif italic text-brand-teal mt-1">01</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1c2e2c] mb-3">
                    Missing one or more teeth
                  </h3>
                  <p className="text-brand-teal/75 text-[15px] leading-relaxed mb-6 font-light">
                    Whether due to an accident, wear, or extraction, replacing missing teeth is crucial to restore full oral function and support your facial appearance.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Tooth Replacement</span>
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Restored Smile</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="sticky top-[130px] z-20 bg-white border border-brand-teal/5 rounded-[2rem] p-8 sm:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col gap-6 text-left">
                <div className="flex justify-between items-start w-full">
                  <div className="w-16 h-16 rounded-2xl bg-brand-mint flex items-center justify-center shrink-0">
                    <svg className="w-9 h-9 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div className="text-right leading-none flex flex-col items-end">
                    <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-teal/50 uppercase">CONDITION</span>
                    <span className="text-2xl sm:text-3xl font-serif italic text-brand-teal mt-1">02</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1c2e2c] mb-3">
                    Bone loss in the Jaw or weak bone structure
                  </h3>
                  <p className="text-brand-teal/75 text-[15px] leading-relaxed mb-6 font-light">
                    Implants integrate with your bone to help stimulate natural growth, preventing jawbone resorption that occurs when teeth are left missing.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Bone Support</span>
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Jaw Preservation</span>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="sticky top-[160px] z-30 bg-white border border-brand-teal/5 rounded-[2rem] p-8 sm:p-10 shadow-[0_4px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_45px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col gap-6 text-left">
                <div className="flex justify-between items-start w-full">
                  <div className="w-16 h-16 rounded-2xl bg-brand-mint flex items-center justify-center shrink-0">
                    <svg className="w-9 h-9 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div className="text-right leading-none flex flex-col items-end">
                    <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-teal/50 uppercase">CONDITION</span>
                    <span className="text-2xl sm:text-3xl font-serif italic text-brand-teal mt-1">03</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1c2e2c] mb-3">
                    Difficulty in chewing food or speaking clearly
                  </h3>
                  <p className="text-brand-teal/75 text-[15px] leading-relaxed mb-6 font-light">
                    Gaps can make it challenging to chew foods comfortably or pronounce words cleanly. Implants function like natural teeth to restore chewing stability.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Speech Support</span>
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Chewing Comfort</span>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="sticky top-[190px] z-40 bg-white border border-brand-teal/5 rounded-[2rem] p-8 sm:p-10 shadow-[0_4px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_45px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col gap-6 text-left">
                <div className="flex justify-between items-start w-full">
                  <div className="w-16 h-16 rounded-2xl bg-brand-mint flex items-center justify-center shrink-0">
                    <svg className="w-9 h-9 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="text-right leading-none flex flex-col items-end">
                    <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-brand-teal/50 uppercase">CONDITION</span>
                    <span className="text-2xl sm:text-3xl font-serif italic text-brand-teal mt-1">04</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1c2e2c] mb-3">
                    Desire for a durable & long-term solution
                  </h3>
                  <p className="text-brand-teal/75 text-[15px] leading-relaxed mb-6 font-light">
                    Unlike temporary or loose bridges/dentures, dental implants offer a long-term, highly stable replacement designed to function and look like your natural teeth.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Long-lasting</span>
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Fixed Support</span>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="sticky top-[220px] z-50 bg-white border border-brand-teal/5 rounded-[2rem] p-8 sm:p-10 shadow-[0_4px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_45px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col gap-6 text-left">
                <div className="flex justify-between items-start w-full">
                  <div className="w-16 h-16 rounded-2xl bg-brand-mint flex items-center justify-center shrink-0">
                    <svg className="w-9 h-9 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-right leading-none flex flex-col items-end">
                    <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#0f766e]/50 uppercase">CONDITION</span>
                    <span className="text-2xl sm:text-3xl font-serif italic text-[#0f766e] mt-1">05</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1c2e2c] mb-3">
                    Several missing teeth or require full mouth restoration
                  </h3>
                  <p className="text-brand-teal/75 text-[15px] leading-relaxed mb-6 font-light">
                    For extensive cases, dental implants can support full arches (all-on-4 or all-on-6) or multiple restorations to completely rehabilitate your mouth.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Complete Rehab</span>
                    <span className="text-xs bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-4 py-1.5 rounded-full font-medium">Total Restoration</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT HPT */}
      <section className="w-full bg-white py-20 lg:py-28 border-b border-brand-teal/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Tag */}
          <div className="flex items-center justify-center gap-2 text-[#0f766e] text-xs font-bold tracking-[0.2em] uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0f766e]"></span>
            ABOUT HPT
          </div>

          {/* Centered Paragraph */}
          <p className="text-brand-teal/80 text-[15px] sm:text-lg font-light leading-relaxed max-w-4xl mx-auto">
            At HPT, we are well aware that it is very important to opt for a treatment abroad, and most often, individuals have multiple questions in their minds associated with this process. We strive to make this process clearer by assisting patients in exploring appropriate treatment options, providing them with detailed guidance at each step, and supporting them throughout their treatment journey.
          </p>
        </div>
      </section>

      {/* 4.2. DENTAL IMPLANT JOURNEY STEPS */}
      <section className="w-full bg-[#f6faf9] py-20 lg:py-32 border-b border-brand-teal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 text-[#0f766e] text-xs font-bold tracking-[0.2em] uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0f766e]"></span>
            TREATMENT STAGES
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-16 text-center max-w-4xl">
            Your Dental Implant Journey
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
            
            {/* Step 1 */}
            <div className="bg-white border border-[#e5ebe9] rounded-[2rem] p-8 shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_35px_rgba(0,0,0,0.05)] transition-all duration-300 text-left flex flex-col justify-between group">
              <div>
                <span className="text-[#0f766e] font-serif italic text-4xl font-normal block mb-4">01</span>
                <h3 className="text-lg sm:text-xl font-bold text-[#1c2e2c] mb-3 group-hover:text-[#0f766e] transition-colors">
                  Consultation and Report Review
                </h3>
                <p className="text-brand-teal/75 text-sm leading-relaxed font-light">
                  You can get a digital consultation. We have dental specialists who will recommend the best based on your condition. They will check your eligibility for the foreign treatment.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-[#e5ebe9] rounded-[2rem] p-8 shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_35px_rgba(0,0,0,0.05)] transition-all duration-300 text-left flex flex-col justify-between group">
              <div>
                <span className="text-[#0f766e] font-serif italic text-4xl font-normal block mb-4">02</span>
                <h3 className="text-lg sm:text-xl font-bold text-[#1c2e2c] mb-3 group-hover:text-[#0f766e] transition-colors">
                  Bone and Gum Assessment
                </h3>
                <p className="text-brand-teal/75 text-sm leading-relaxed font-light">
                  The condition of your bone and gum will be assessed by specialists properly to serve you with long-term outcomes with the treatment.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-[#e5ebe9] rounded-[2rem] p-8 shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_35px_rgba(0,0,0,0.05)] transition-all duration-300 text-left flex flex-col justify-between group">
              <div>
                <span className="text-[#0f766e] font-serif italic text-4xl font-normal block mb-4">03</span>
                <h3 className="text-lg sm:text-xl font-bold text-[#1c2e2c] mb-3 group-hover:text-[#0f766e] transition-colors">
                  Treatment Planning Before Travel
                </h3>
                <p className="text-brand-teal/75 text-sm leading-relaxed font-light">
                  Specialists formulate a customized dental implant treatment plan for you based on the conditions of your teeth. This plan incorporates estimated procedural stages, expected duration of your stay, and other practical guidance before you opt for travelling.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white border border-[#e5ebe9] rounded-[2rem] p-8 shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_35px_rgba(0,0,0,0.05)] transition-all duration-300 text-left flex flex-col justify-between group">
              <div>
                <span className="text-[#0f766e] font-serif italic text-4xl font-normal block mb-4">04</span>
                <h3 className="text-lg sm:text-xl font-bold text-[#1c2e2c] mb-3 group-hover:text-[#0f766e] transition-colors">
                  Implant Procedure
                </h3>
                <p className="text-brand-teal/75 text-sm leading-relaxed font-light">
                  You will get everything arranged from us; you just have to travel to the country you select, whether it's Singapore, Bali, or India. Our partner dental specialists will provide proper care and guidance for a healing face.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white border border-[#e5ebe9] rounded-[2rem] p-8 shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_35px_rgba(0,0,0,0.05)] transition-all duration-300 text-left flex flex-col justify-between group">
              <div>
                <span className="text-[#0f766e] font-serif italic text-4xl font-normal block mb-4">05</span>
                <h3 className="text-lg sm:text-xl font-bold text-[#1c2e2c] mb-3 group-hover:text-[#0f766e] transition-colors">
                  Healing & Crown Replacement
                </h3>
                <p className="text-brand-teal/75 text-sm leading-relaxed font-light">
                  The final step of a dental implant treatment is the healing and crown replacement. In this step, your implant becomes completely functional, and it appears like a natural tooth.
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="bg-white border border-[#e5ebe9] rounded-[2rem] p-8 shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_35px_rgba(0,0,0,0.05)] transition-all duration-300 text-left flex flex-col justify-between group">
              <div>
                <span className="text-[#0f766e] font-serif italic text-4xl font-normal block mb-4">06</span>
                <h3 className="text-lg sm:text-xl font-bold text-[#1c2e2c] mb-3 group-hover:text-[#0f766e] transition-colors">
                  Follow Up
                </h3>
                <p className="text-brand-teal/75 text-sm leading-relaxed font-light">
                  After the treatment, the healing of the implant is very important. You will get a natural finish, and if you face any problem, we will always be in touch and ready to help you.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. PROCESS / TIMELINE SECTION */}
      <section id="process" className="w-full bg-white py-20 lg:py-32 border-b border-brand-teal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-3 flex flex-col items-start text-left">
              <div className="flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                Why Implants
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-8">
                Why Many Patients <br />
                Consider <br />
                <span className="font-serif italic font-normal text-brand-teal block mt-1">Dental Implants</span>
              </h2>

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

            <div className="lg:col-span-5 relative pl-4 sm:pl-8 w-full text-left">
              <div className="absolute left-10 sm:left-14 top-8 bottom-8 w-[2px] bg-[#d1dcd9] pointer-events-none" />

              <div className="flex flex-col gap-8">
                {journeySteps.map((step, idx) => (
                  <div key={idx} className="flex gap-6 items-start relative group">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#d1dcd9] text-[#1c2e2c]/70 flex items-center justify-center font-bold text-lg shrink-0 shadow-sm z-10 border-4 border-white transition-transform duration-300 group-hover:scale-105 group-hover:bg-brand-teal group-hover:text-white">
                      {step.num}
                    </div>
                    <div className="flex-1 pt-1 sm:pt-2">
                      <h4 className="text-lg font-bold text-[#1c2e2c] mb-1">
                        {step.title}
                      </h4>
                      <p className="text-[#1c2e2c]/70 text-[13px] leading-relaxed font-light">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* 7. WHY TREATMENT ABROAD */}
      <section className="w-full bg-white py-12 lg:py-16 border-b border-brand-teal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
            Global Health Options
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-6 text-center max-w-4xl">
            Why treatment abroad?
          </h2>

          <p className="text-base sm:text-lg text-brand-teal/95 font-light leading-relaxed max-w-3xl text-center">
            Many patients explore dental implant treatment abroad to access trusted clinics, specialist support, and organised treatment planning altogether. For major dental procedures, these trusted clinics abroad may also offer patients shorter waiting periods with several cost benefits depending on the treatment and destination.
          </p>

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
            Get an Initial <br />
            <span className="font-serif italic font-normal text-white block mt-2">
              Implant Assessment With Our Assistance
            </span>
          </h2>
          
          {/* Paragraph */}
          <p className="text-base sm:text-lg text-white/95 leading-relaxed font-light mb-10 max-w-xl mx-auto">
            Share all your available dental reports, scans, or any concerns related to your implant treatment to have a better understanding of possible treatment options along with their suitability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-white hover:bg-zinc-150 text-[#1c2e2c] font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              Submit Your Case &rarr;
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto border border-white/40 hover:bg-white/10 text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              Contact Us &rarr;
            </a>
          </div>
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

                  <div className="flex flex-col gap-1">
                    <label htmlFor="service" className="text-xs font-bold text-[#1c2e2c] uppercase tracking-wide">Select Treatment / Service</label>
                    <div className="relative">
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#fafcfc] border border-[#e5ebe9] rounded-xl px-4 py-3.5 text-sm text-[#1c2e2c] focus:outline-none focus:border-brand-teal/40 transition-colors appearance-none cursor-pointer"
                      >
                        <option value="implant">Dental Implants</option>
                        <option value="bridge">Dental Bridges</option>
                        <option value="veneer">Dental Veneers</option>
                        <option value="crown">Dental Crowns</option>
                        <option value="restoration">Full Mouth Restoration</option>
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
                  Here you can find answers to some frequently asked questions about dental implants and our medical travel coordination.
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
