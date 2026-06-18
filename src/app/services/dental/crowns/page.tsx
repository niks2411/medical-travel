"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DentalCrownsPage() {
  const [activeFaq, setActiveFaq] = useState<number>(0);
  const [ctaVideoLoaded, setCtaVideoLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: ["crown"],
    timeframe: "1_month",
    message: "",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<"eligibility" | "benefits" | "stages">("eligibility");
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

  const changeTab = (tab: "eligibility" | "benefits" | "stages") => {
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
      question: "When is a dental crown usually recommended?",
      answer: "A dental crown is generally recommended to patients when a tooth is weak or damaged, and it is difficult to restore it with simple treatments. Usually, crowns are recommended in the conditions mentioned below: the cavity is too large; to restore the shape, function, and strength of cracked, broken, or worn-down teeth; after undergoing root canal treatment; for bringing improvement in the appearance of discolored, misshapen, or uneven teeth of the patient; or for the replacement of a missing tooth with dental implants."
    },
    {
      question: "How many sittings are generally needed for a dental crown treatment?",
      answer: "Generally, two sittings are required to place a dental crown, but this may vary depending on the case and the technology used."
    },
    {
      question: "How long does a dental crown last?",
      answer: "Crowns last from 10 to 15 years, but their durability still depends upon multiple factors. Dental crowns are made from different materials like porcelain, zirconia, ceramic, and metal-based crowns. The durability of the crown depends upon the material used and the care you provide to the crown."
    },
    {
      question: "Will my tooth be shaved?",
      answer: "Yes, to place a dental crown, a small amount of your natural tooth is generally reshaped or shaved."
    },
    {
      question: "Do crowns create a problem in Chewing?",
      answer: "Once the dental crown is placed properly, you can normally chew and speak. These crowns are specially designed to help you get perfection in daily work like chewing and speaking, and also help to enhance your appearance."
    },
    {
      question: "Is an Abroad Dental crown safe?",
      answer: "Yes, every step is done with an expert professional, so you don't have to worry about your safety. In countries like India, Bali, and Singapore, experts will provide you with world-class dental care with proper coordination. This makes a dental crown treatment in a foreign country with the HPT company completely safe."
    },
    {
      question: "How to take care of a dental crown?",
      answer: "You don't need something special to take care of a dental crown—it is very simple. You don't have to worry a lot; just normal, regular brushing, flossing, and dental checkups are sufficient to keep crowns in perfect condition."
    }
  ];

  const benefitsList = [
    {
      title: "Protection of Weakened Tooth Structure",
      desc: "Patients may get appropriate assistance in the protection of the weakened structure of the tooth."
    },
    {
      title: "Improved Chewing Comfort",
      desc: "Patients will experience improved comfort in chewing."
    },
    {
      title: "Restoration of the Shape & Appearance",
      desc: "Restoration of the visible shape and a close to natural appearance of the tooth will be experienced by patients with the help of this treatment."
    },
    {
      title: "Long-Term Tooth Use",
      desc: "This treatment assists and supports patients in the long-term use of the tooth when it is maintained properly."
    },
    {
      title: "Preserves Existing Teeth",
      desc: "If it is possible, you can also get assistance in the preservation of your existing teeth when these are maintained properly."
    },
    {
      title: "Damaged Teeth Get Strength",
      desc: "A crown assists in strengthening a damaged tooth of the patient while maintaining its appearance, along with its normal daily use."
    }
  ];

  const journeySteps = [
    {
      num: "01",
      title: "Consultation and Tooth Examination",
      desc: "Tooth condition and available reports of the patients are thoroughly reviewed by specialists to have a better understanding of whether crown treatment is appropriate for them."
    },
    {
      num: "02",
      title: "Tooth Preparation and Planning of Crown",
      desc: "The tooth of the patient is prepared with utmost care and precautions, along with doing the selection of the design and material to be used in the crown."
    },
    {
      num: "03",
      title: "Placement and Adjustment of Crowns",
      desc: "The crown is fitted and adjusted for serving patients with topmost comfort, improved bite, and a close to natural appearance."
    }
  ];

  const testimonials = [
    {
      text: "Thanks, HPT company, for making this crown treatment easy for us. I was worried about travelling to any other country for a crown treatment. It's been almost a year since I faced any problem related to my damaged teeth. The crown is so perfect that it doesn’t feel like it's in there.",
      author: "James T.",
      title: "Dental Crown Patient",
      avatar: "/mindera_testimonial_1.png"
    },
    {
      text: "Whenever I eat something, my teeth get a high sensation. A dentist told me that my teeth are badly damaged. To fix it, I must remove them or get a crown surgery. The complete process from consultation to dropping me back home was very comfortable. It almost feels like nothing happened, and I got a dental crown without any effort.",
      author: "Emily R.",
      title: "Restorative Dental Traveler",
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
              Restorative Dentistry
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-6">
              Dental Crowns - <br />
              <span className="font-serif italic font-normal text-brand-teal block mt-2">
                Restore & Protect Your Smile
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-brand-teal/70 leading-relaxed mb-6 font-light">
              Get Healthy, Close To Natural & More Beautiful Teeth With Dental Crowns.
            </p>
            <p className="text-base sm:text-lg text-[#1c2e2c]/75 leading-relaxed mb-10 font-light">
              When your teeth have become damaged or weak, they can't function properly or give you a beautiful smile. You will also face similar problems in conducting your daily tasks, such as eating, if there are cracks in your teeth or if they have become worn down. If you don't take the correct action at the right time, these problems may also increase. For these, dental crowns, which are basically custom-made caps for teeth, can restore and protect the strength, shape, and appearance of your natural teeth. A crown is that which may assist in preserving your natural tooth rather than removing it.
            </p>

            {/* Hero Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#book"
                className="bg-brand-teal hover:bg-brand-teal-light text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
              >
                Discuss Your Case
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="#tabs-section"
                className="border border-brand-teal/20 hover:border-brand-teal/40 text-brand-teal font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 hover:bg-brand-mint/40 flex items-center justify-center gap-2 cursor-pointer"
              >
                Explore Crowns
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

        {/* Right Side Hero Image Panel */}
        <div className="w-full lg:w-[45%] relative h-[500px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-full bg-brand-mint-dark overflow-hidden">
          <Image
            src="/crowns_hero_aesthetic.png"
            alt="Beautiful natural crown smile"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-w-1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/15 pointer-events-none" />
        </div>
      </section>

      {/* 2.5. WHAT IS A DENTAL CROWN VISUALIZATION SECTION */}
      <section className="w-full bg-white py-20 lg:py-28 border-b border-brand-teal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Top Row: Content on left, Square Image space on right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-12">
            
            {/* Left Column: Content */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <div className="flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                About Crowns
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] mb-6 font-sans">
                What Is A <br />
                <span className="font-serif italic font-normal text-brand-teal block mt-2">
                  Dental Crown
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#1c2e2c]/75 leading-relaxed font-light mb-6">
                A dental crown is a custom-made cap placed perfectly on the front/top surface of a damaged or weak tooth to restore and protect its strength, shape, and appearance.
              </p>

              <div className="border-t border-brand-teal/10 pt-6 mt-6">
                <h4 className="text-sm font-bold text-[#1c2e2c] uppercase tracking-wider mb-4">Why Patients Consider Crown Treatment Abroad</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-brand-teal">✦</span>
                    <span className="text-sm text-[#1c2e2c]/80 font-light">Modern materials & tech</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-brand-teal">✦</span>
                    <span className="text-sm text-[#1c2e2c]/80 font-light">Thorough planning & support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-brand-teal">✦</span>
                    <span className="text-sm text-[#1c2e2c]/80 font-light">Affordable crown costs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-brand-teal">✦</span>
                    <span className="text-sm text-[#1c2e2c]/80 font-light">Arranged travel coordination</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Square Image */}
            <div className="lg:col-span-5 w-full">
              <div className="w-full relative aspect-square rounded-[2rem] overflow-hidden shadow-lg border border-brand-teal/5 bg-[#f6faf9] flex items-center justify-center">
                <Image
                  src="/crowns_square.png"
                  alt="Dental crown step diagram"
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
                src="/crowns_rectangle.png"
                alt="Dental crown procedure visualization"
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.01]"
                sizes="100vw"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE TABS SECTION */}
      <section id="tabs-section" className="w-full bg-[#f6faf9] py-20 lg:py-32 border-b border-brand-teal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
          
          {/* Tab Capsule Buttons */}
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
              Who May Need a Crown? (Eligibility)
            </button>
            <button
              onMouseEnter={() => changeTab("benefits")}
              onClick={() => changeTab("benefits")}
              className={`px-8 md:px-11 py-4 md:py-[18px] rounded-full font-bold text-base md:text-lg transition-all duration-300 cursor-pointer ${
                activeTab === "benefits"
                  ? "bg-brand-teal text-white shadow-[0_10px_25px_-5px_rgba(8,72,67,0.35)] scale-[1.05]"
                  : "text-brand-teal/80 hover:bg-brand-mint/50 hover:text-brand-teal font-semibold"
              }`}
            >
              Benefits of Crowns
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
              Treatment Stages (Journey)
            </button>
          </div>

          {/* Content Wrapper with animation transitions */}
          <div className={`w-full bg-white border border-brand-teal/5 rounded-[2.5rem] p-8 sm:p-12 shadow-[0_10px_45px_rgba(0,0,0,0.02)] transition-all duration-300 ease-in-out ${isTabTransitioning ? "opacity-0 translate-y-1.5" : "opacity-100 translate-y-0"}`}>
            {activeTab === "eligibility" && (
              <div className="flex flex-col gap-10">
                <div className="text-left w-full">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1c2e2c] mb-4">
                    Which Patients May Require a Dental Crown Treatment?
                  </h3>
                  <p className="text-brand-teal/70 text-base font-light leading-relaxed">
                    A dental crown is recommended if your tooth has been severely cracked or worn out, or needs structural support. Here are the primary conditions when patients require crowns.
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
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                        <span className="text-xl font-serif italic text-brand-teal/50">01</span>
                      </div>
                      <h4 className="text-lg font-bold text-[#1c2e2c] mb-2">Cracked, weakened, or worn teeth</h4>
                      <p className="text-[#556966] text-sm leading-relaxed font-light mb-4">
                        Patients experiencing cracked, weakened, or heavily worn teeth need a crown to restore shape and strength.
                      </p>
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <span className="text-[10px] bg-white text-brand-teal/80 border border-brand-teal/10 px-3 py-1 rounded-full font-medium">Wear fix</span>
                      <span className="text-[10px] bg-white text-brand-teal/80 border border-brand-teal/10 px-3 py-1 rounded-full font-medium">Fracture protection</span>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-[#f4faf9] border border-brand-teal/5 rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 rounded-xl bg-brand-mint flex items-center justify-center shrink-0">
                          <svg className="w-6 h-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                          </svg>
                        </div>
                        <span className="text-xl font-serif italic text-brand-teal/50">02</span>
                      </div>
                      <h4 className="text-lg font-bold text-[#1c2e2c] mb-2">Large fillings requiring protection</h4>
                      <p className="text-[#556966] text-sm leading-relaxed font-light mb-4">
                        When a tooth has large fillings that compromise the remaining structure, a crown helps protect and reinforce it.
                      </p>
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <span className="text-[10px] bg-white text-brand-teal/80 border border-brand-teal/10 px-3 py-1 rounded-full font-medium">Large cavities</span>
                      <span className="text-[10px] bg-white text-brand-teal/80 border border-brand-teal/10 px-3 py-1 rounded-full font-medium">Filling support</span>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-[#f4faf9] border border-brand-teal/5 rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 rounded-xl bg-brand-mint flex items-center justify-center shrink-0">
                          <svg className="w-6 h-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7C4.547 9.547 4.5 10.768 4.5 12s.047 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.092-1.209.138-2.43.138-3.662z" />
                          </svg>
                        </div>
                        <span className="text-xl font-serif italic text-brand-teal/50">03</span>
                      </div>
                      <h4 className="text-lg font-bold text-[#1c2e2c] mb-2">Root canal treated teeth support</h4>
                      <p className="text-[#556966] text-sm leading-relaxed font-light mb-4">
                        Teeth treated with root canal therapy become brittle and dry. They require the structural reinforcement of a dental crown.
                      </p>
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <span className="text-[10px] bg-white text-brand-teal/80 border border-brand-teal/10 px-3 py-1 rounded-full font-medium">Post-Root Canal</span>
                      <span className="text-[10px] bg-white text-brand-teal/80 border border-brand-teal/10 px-3 py-1 rounded-full font-medium">Tooth preservation</span>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-[#f4faf9] border border-brand-teal/5 rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 rounded-xl bg-brand-mint flex items-center justify-center shrink-0">
                          <svg className="w-6 h-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.617 3.062a3.75 3.75 0 01-3.234 0L12 13.5l-4.15 1.562a3.75 3.75 0 01-3.234 0V9a3.75 3.75 0 013.234 0L12 10.5l4.15-1.562a3.75 3.75 0 013.234 0V12z" />
                          </svg>
                        </div>
                        <span className="text-xl font-serif italic text-[#0f766e]/50">04</span>
                      </div>
                      <h4 className="text-lg font-bold text-[#1c2e2c] mb-2">Bite comfort or replacing existing crown</h4>
                      <p className="text-[#556966] text-sm leading-relaxed font-light mb-4">
                        When chew comfort is affected by shape or strength, or there is a need to replace an old, failing crown, a new custom crown is recommended.
                      </p>
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <span className="text-[10px] bg-white text-brand-teal/80 border border-brand-teal/10 px-3 py-1 rounded-full font-medium">Bite alignment</span>
                      <span className="text-[10px] bg-white text-brand-teal/80 border border-brand-teal/10 px-3 py-1 rounded-full font-medium">Crown replacement</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "benefits" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
                {/* Left Side: Text and Timeline */}
                <div className="lg:col-span-7">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1c2e2c] mb-4">
                    Benefits of Undergoing a Dental Crown Treatment
                  </h3>
                  <p className="text-brand-teal/70 text-base font-light leading-relaxed mb-8">
                    Crowns assist in strengthening a damaged tooth while maintaining its appearance, restoring daily functions, and protecting teeth.
                  </p>

                  <div className="relative pl-6 border-l-2 border-[#d1dcd9] flex flex-col gap-6">
                    {benefitsList.map((step, idx) => (
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
                      src="/crowns_process.png"
                      alt="Dental crown benefits overview"
                      fill
                      className="object-cover"
                      sizes="(max-w-1024px) 100vw, 400px"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "stages" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full">
                
                {/* Left Column - Headline + Image */}
                <div className="lg:col-span-6 flex flex-col items-start text-left">
                  <div className="flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                    Our Process
                  </div>

                  <h3 className="text-3xl sm:text-4xl lg:text-[38px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-8">
                    Your Dental Crown Journey <span className="font-serif italic font-normal text-brand-teal">With HPT</span>
                  </h3>

                  {/* Portrait Image Container */}
                  <div className="w-full max-w-[340px] relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl border border-white bg-white">
                    <Image
                      src="/crowns_process.png"
                      alt="Specialist planning crown treatment"
                      fill
                      className="object-cover"
                      sizes="(max-w-1024px) 100vw, 340px"
                    />
                  </div>
                </div>

                {/* Right Column - Steps timeline & CTAs */}
                <div className="lg:col-span-6 w-full flex flex-col items-start">
                  
                  {/* Timeline steps list */}
                  <div className="relative pl-4 sm:pl-8 w-full">
                    {/* vertical connecting line */}
                    <div className="absolute left-10 sm:left-14 top-8 bottom-8 w-[2px] bg-[#d1dcd9] pointer-events-none" />

                    <div className="flex flex-col gap-8">
                      {journeySteps.map((step, idx) => (
                        <div key={idx} className="flex gap-6 items-start relative group">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-md z-10 border-4 border-white transition-transform duration-300 group-hover:scale-105">
                            {step.num}
                          </div>
                          <div className="flex-1 text-left pt-1 sm:pt-2">
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

                  {/* Description & Button below steps (Aligned with the step content text) */}
                  <div className="mt-8 pl-4 sm:pl-8 w-full">
                    <div className="pl-[72px] sm:pl-[80px] text-left">
                      <p className="text-sm sm:text-base text-[#1c2e2c]/75 leading-relaxed font-light mb-4 max-w-[450px]">
                        The 3-step treatment sequence above outlines the general process we coordinate for you. Note that there may be a need for more than one visit in some cases, depending on the type of crown used.
                      </p>

                      <a
                        href="#book"
                        className="bg-brand-teal hover:bg-brand-teal-light text-white text-[13px] font-bold px-6 py-3.5 rounded-full transition-all duration-300 shadow-md flex items-center gap-2 w-fit cursor-pointer"
                      >
                        Request Consultation
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. WHY PARTNERS ARE PERFECT FOR DENTAL CROWN ABROAD */}
      <section id="why-choose-us" className="w-full bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
            Why Choose Us
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans text-center">
            What Makes HPT Company Perfect <br />
            <span className="font-serif italic font-normal text-brand-teal block mt-2">
              For Dental Crown Treatment?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-brand-teal/70 leading-relaxed font-light mt-6 mb-16 text-center max-w-3xl">
            We partner with selected clinics and experienced specialists internationally to ensure you receive transparency, structured coordination, and premium restorative care.
          </p>

          <div className="w-full max-w-6xl relative pb-12 md:pb-36">
            {/* Group Counseling Image */}
            <div className="w-full aspect-[16/9] relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-brand-teal/5">
              <Image
                src="/mindera_support_group_clean.png"
                alt="Support group counseling session"
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
                      Specialist <span className="text-brand-teal">Consultation</span>
                    </h4>
                    <p className="text-[#556966] text-[12px] sm:text-[12.5px] leading-relaxed font-light">
                      Initial review and consultation with our trusted specialists on the basis of visible concerns or reports.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white border border-[#e5ebe9] rounded-[1.25rem] p-5 sm:p-6 flex flex-col justify-between text-left">
                  <div>
                    <h4 className="text-[15px] font-bold text-[#1c2e2c] mb-2.5 leading-snug">
                      Selected <span className="text-brand-teal">Partners Only</span>
                    </h4>
                    <p className="text-[#556966] text-[12px] sm:text-[12.5px] leading-relaxed font-light">
                      We share your case files only with our selected, certified, and highly trusted dental treatment partners.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white border border-[#e5ebe9] rounded-[1.25rem] p-5 sm:p-6 flex flex-col justify-between text-left">
                  <div>
                    <h4 className="text-[15px] font-bold text-[#1c2e2c] mb-2.5 leading-snug">
                      Clarity & <span className="text-brand-teal">Transparency</span>
                    </h4>
                    <p className="text-[#556966] text-[12px] sm:text-[12.5px] leading-relaxed font-light">
                      Before travelling, you get full transparency on likely stages and material used, keeping expectations practical.
                    </p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="bg-white border border-[#e5ebe9] rounded-[1.25rem] p-5 sm:p-6 flex flex-col justify-between text-left">
                  <div>
                    <h4 className="text-[15px] font-bold text-[#1c2e2c] mb-2.5 leading-snug">
                      End-to-End <span className="text-brand-teal">Coordination</span>
                    </h4>
                    <p className="text-[#556966] text-[12px] sm:text-[12.5px] leading-relaxed font-light">
                      We coordinate appointments and stay duration, providing support before, during, and after your trip.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER (CTA 1) */}
      <section className="w-full text-white py-24 sm:py-32 relative overflow-hidden flex items-center justify-center min-h-[500px]">
        {/* Background Image / Video Container */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#084843]/90 pointer-events-none" />
          
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden opacity-30">
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

          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          {/* Tag */}
          <div className="flex items-center gap-2 text-white/90 text-xs font-bold tracking-[0.2em] uppercase mb-6">
            <span className="text-white text-xs">✦</span>
            RESTORATIVE ASSESSMENT
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-bold tracking-tight text-white mb-6 leading-[1.25] max-w-3xl font-sans">
            Are You Experiencing Problems Due To A Cracked or Weak Tooth, or is it Already Treated?
          </h2>
          
          {/* Paragraph */}
          <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light mb-10 max-w-2xl mx-auto">
            Ask your dental specialists with our assistance whether a dental crown may help you in protecting and restoring your tooth.
          </p>

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
      </section>

      {/* 6. TESTIMONIALS SECTION */}
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
                href="#book"
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
              {testimonials.map((item, idx) => (
                <div key={idx} className="bg-[#f4faf9] border border-brand-teal/5 rounded-[2rem] p-6 sm:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-stretch relative overflow-hidden text-left">
                  <div className="w-full md:w-[38%] relative aspect-[4/5] md:aspect-auto rounded-2xl overflow-hidden shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.author}
                      fill
                      className="object-cover"
                      sizes="(max-w-768px) 100vw, 220px"
                    />

                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between pt-1">
                    <div>
                      <div className="flex text-[#0f766e] mb-3 text-sm">★★★★★</div>
                      <blockquote className="text-brand-teal/85 text-[14px] sm:text-[15px] leading-relaxed font-light mb-6">
                        &ldquo;{item.text}&rdquo;
                      </blockquote>
                    </div>

                    <div className="flex items-end justify-between border-t border-brand-teal/5 pt-4">
                      <div>
                        <h4 className="font-bold text-[#1c2e2c] text-base">{item.author}</h4>
                        <p className="text-xs text-brand-teal/70 font-semibold mt-1">{item.title}</p>
                      </div>
                      <span className="text-6xl font-serif text-[#0f766e]/30 leading-none select-none">”</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 7. CTA-2 (Booking Form - Preselected with Crowns) */}
      <section id="book" className="w-full bg-[#f6faf9] py-20 lg:py-32 border-b border-brand-teal/5 relative">
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
                Get An Initial <br />
                <span className="font-serif italic font-normal text-brand-teal block mt-2">
                  Crown Assessment
                </span>
              </h2>

              {/* Paragraph */}
              <p className="text-base sm:text-lg text-brand-teal/70 leading-relaxed font-light mb-10 max-w-md">
                Share all your available dental reports, scans, or any other concerns related to the crown to have a proper understanding of possible treatment options and their suitability.
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" />
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
                    src="/crowns_process.png"
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
                    We have received your request and will get back to you with clinic review suggestions within 24 hours.
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
                            : "Select Service(s)"}
                        </span>
                        <svg className={`fill-current h-4 w-4 text-[#1c2e2c]/70 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </button>

                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 z-50 w-full mt-1.5 bg-white border border-[#e5ebe9] rounded-xl shadow-lg py-1.5 max-h-60 overflow-y-auto">
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
                                  const nextSelected = isChecked
                                    ? formData.services.filter((v) => v !== option.value)
                                    : [...formData.services, option.value];
                                  setFormData({ ...formData, services: nextSelected });
                                }}
                                className="flex items-center gap-3 px-4 py-2.5 hover:bg-brand-mint/30 cursor-pointer transition-colors text-sm text-[#1c2e2c]"
                              >
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  readOnly
                                  className="accent-brand-teal h-4 w-4 rounded border-[#e5ebe9]"
                                />
                                <span>{option.label}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="message" className="text-xs font-bold text-[#1c2e2c] uppercase tracking-wide">Tell us about your dental history / needs</label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Describe your cracked/weak teeth, root canal history, or material preferences..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#fafcfc] border border-[#e5ebe9] rounded-xl px-4 py-3.5 text-sm text-[#1c2e2c] placeholder-[#1c2e2c]/45 focus:outline-none focus:border-brand-teal/40 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-[#1c2e2c] hover:bg-[#283e3c] text-white font-semibold text-sm py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 w-full mt-2 cursor-pointer"
                  >
                    Submit Inquiry &rarr;
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION SECTION */}
      <section id="faq" className="w-full bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-5 bg-[#e8f1ef] rounded-[2rem] p-6 sm:p-8 flex flex-col gap-6 text-left">
              <div className="relative w-full aspect-[1.2/1] rounded-2xl overflow-hidden shadow-sm">
                <Image src="/mindera_support_group_clean.png" alt="Dental crowns support and FAQ information" fill className="object-cover" sizes="(max-w-768px) 100vw, 400px" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1c2e2c] leading-snug">
                  Looking For <span className="font-serif italic font-normal text-brand-teal">Something More?</span>
                </h3>
                <p className="text-[13px] text-brand-teal/75 leading-relaxed font-light mt-3">
                  Contact our team now to get to know more about our features and book your foreign crown treatment to protect your natural teeth.
                </p>
              </div>

              <a
                href="#book"
                className="bg-[#1c2e2c] hover:bg-[#283e3c] text-white font-semibold text-xs px-6 py-3.5 rounded-full transition-all duration-300 shadow-md flex items-center justify-center gap-2 w-fit cursor-pointer"
              >
                Discuss Your Case &rarr;
              </a>
            </div>

            <div className="lg:col-span-7 flex flex-col text-left">
              <div className="inline-flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                NEED HELP
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#1c2e2c] leading-[1.15] font-sans mb-10">
                Frequently Asked Questions <br />
                About <span className="font-serif italic font-normal text-brand-teal">Dental Crowns</span>
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
