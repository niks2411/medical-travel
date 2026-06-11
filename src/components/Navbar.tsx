"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

/* ─── Service data structure ─── */
interface SubService {
  name: string;
  desc?: string;
  href: string;
}

interface ServiceCategory {
  title: string;
  href: string;
  icon: React.ReactNode;
  color: string;
  subServices: SubService[];
}

const serviceCategories: ServiceCategory[] = [
  {
    title: "Dental",
    href: "/services/dental",
    color: "#0d9488",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 6c0-1 2-2 5-2s5 1 5 2v3c0 2-2 3-5 3S7 11 7 9V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v6M10 14h4M10 16h4M11 18h2" />
      </svg>
    ),
    subServices: [
      { name: "Implants", href: "/services/dental/implants" },
      { name: "Veneers", href: "/services/dental/veneers" },
      { name: "Crowns", href: "/services/dental/crowns" },
      { name: "Bridges", href: "/services/dental/bridges" },
      { name: "Full Mouth Restoration", href: "/services/dental/full-mouth-restoration" },
    ],
  },
  {
    title: "Fertility & IVF",
    href: "/services/fertility-ivf",
    color: "#c026d3",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="8" r="4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c-1 2-2 5-1.5 8M12 12c1 2 2 5 1.5 8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16h8" />
      </svg>
    ),
    subServices: [
      { name: "Initial Fertility Assessment", desc: "Basic tests for both partners – hormone levels, semen analysis, ultrasound", href: "/services/fertility-ivf/initial-fertility-assessment" },
      { name: "IVF (In Vitro Fertilization)", desc: "Egg + sperm are fertilized in a lab and embryo is placed in the womb", href: "/services/fertility-ivf/ivf" },
      { name: "ICSI (Intracytoplasmic Sperm Injection)", desc: "A single sperm is injected into the egg – helpful for male infertility", href: "/services/fertility-ivf/icsi" },
      { name: "Frozen Embryo Transfer (FET)", desc: "Previously frozen embryos are thawed and implanted later", href: "/services/fertility-ivf/frozen-embryo-transfer" },
      { name: "Donor Egg IVF", desc: "For women with low egg reserve or quality – uses a donor's egg", href: "/services/fertility-ivf/donor-egg-ivf" },
      { name: "Donor Sperm IVF", desc: "For single women or male fertility issues", href: "/services/fertility-ivf/donor-sperm-ivf" },
      { name: "IVF with PGD/PGS (Genetic Testing)", desc: "Screening embryos for genetic diseases or gender (if allowed)", href: "/services/fertility-ivf/ivf-pgd-pgs" },
      { name: "Blastocyst Transfer", desc: "Transferring embryos at day 5 stage – better success rate", href: "/services/fertility-ivf/blastocyst-transfer" },
      { name: "IVF with Surrogacy", desc: "For women unable to carry pregnancy – surrogacy laws vary by country", href: "/services/fertility-ivf/ivf-surrogacy" },
      { name: "Mild/Natural IVF", desc: "Low-dose hormone IVF cycle (gentler, lower cost, fewer eggs)", href: "/services/fertility-ivf/mild-natural-ivf" },
    ],
  },
  {
    title: "Eye & Vision Procedures",
    href: "/services/eye-vision",
    color: "#2563eb",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    subServices: [
      { name: "LASIK", desc: "Laser reshaping of the cornea to correct nearsightedness, farsightedness, or astigmatism", href: "/services/eye-vision/lasik" },
      { name: "PRK (Photorefractive Keratectomy)", desc: "Alternative to LASIK for thinner corneas", href: "/services/eye-vision/prk" },
      { name: "SMILE Eye Surgery", desc: "Minimally invasive laser eye correction (newer tech, quicker recovery)", href: "/services/eye-vision/smile-eye-surgery" },
      { name: "Implantable Contact Lenses (ICL)", desc: "Permanent lens implant for those not suitable for LASIK/PRK", href: "/services/eye-vision/implantable-contact-lenses" },
      { name: "Refractive Lens Exchange (RLE)", desc: "Natural lens is replaced — ideal for 40+ patients with presbyopia", href: "/services/eye-vision/refractive-lens-exchange" },
      { name: "Standard Cataract Surgery", desc: "Cloudy lens is removed and replaced with a clear artificial lens", href: "/services/eye-vision/standard-cataract-surgery" },
      { name: "Premium Cataract Surgery with Multifocal IOLs", desc: "Offers both near and far vision — reduces need for glasses", href: "/services/eye-vision/premium-cataract-surgery" },
      { name: "Femtosecond Laser-Assisted Cataract Surgery", desc: "More precise version of cataract surgery using advanced laser", href: "/services/eye-vision/femtosecond-laser-cataract-surgery" },
    ],
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "#services", hasDropdown: true },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const getHref = (href: string) => {
    if (href.startsWith("#") && !isHomePage) {
      return `/${href}`;
    }
    return href;
  };

  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMobileCategory, setActiveMobileCategory] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Track scroll for subtle navbar style changes */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close mega menu on outside click */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        megaRef.current &&
        !megaRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setIsMegaOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const handleMegaEnter = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setIsMegaOpen(true);
  };

  const handleMegaLeave = () => {
    closeTimerRef.current = setTimeout(() => setIsMegaOpen(false), 200);
  };

  const currentCategory = serviceCategories[activeCategory];

  return (
    <>
      <header
        className={`sticky top-0 z-[100] w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/98 backdrop-blur-xl shadow-[0_2px_24px_rgba(0,0,0,0.06)] py-3"
            : "bg-white/95 backdrop-blur-md py-5"
        } px-6 sm:px-10 lg:px-16 flex items-center justify-between`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 cursor-pointer">
          <Image
            src="/Logo-Mindera-Light.webp"
            alt="Mindera Logo"
            width={140}
            height={38}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[14px] font-semibold text-[#1c2e2c]/70">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.label}
                ref={triggerRef}
                className="relative"
                onMouseEnter={handleMegaEnter}
                onMouseLeave={handleMegaLeave}
              >
                <button
                  className={`flex items-center gap-1.5 transition-colors duration-200 cursor-pointer ${
                    isMegaOpen ? "text-brand-teal" : "hover:text-brand-teal"
                  }`}
                  onClick={() => setIsMegaOpen(!isMegaOpen)}
                  aria-expanded={isMegaOpen}
                  aria-haspopup="true"
                >
                  <span>{link.label}</span>
                  <svg
                    className={`w-3.5 h-3.5 fill-current transition-transform duration-300 ${
                      isMegaOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              <Link
                key={link.label}
                href={getHref(link.href)}
                className="hover:text-brand-teal transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-teal group-hover:w-full transition-all duration-300" />
              </Link>
            )
          )}
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden lg:flex items-center">
          <a
            href="#book"
            className="bg-brand-teal hover:bg-brand-teal-light text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col items-center justify-center w-10 h-10 rounded-xl hover:bg-brand-mint/50 transition-colors cursor-pointer"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[2px] bg-[#1c2e2c] rounded-full transition-all duration-300 ${
              isMobileOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-[#1c2e2c] rounded-full transition-all duration-300 mt-1 ${
              isMobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-[#1c2e2c] rounded-full transition-all duration-300 mt-1 ${
              isMobileOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </header>

      {/* ─── MEGA DROPDOWN (Desktop) ─── */}
      <div
        ref={megaRef}
        onMouseEnter={handleMegaEnter}
        onMouseLeave={handleMegaLeave}
        className={`fixed left-0 right-0 z-[99] transition-all duration-300 origin-top ${
          isMegaOpen
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-95 pointer-events-none"
        }`}
        style={{ top: scrolled ? "60px" : "68px" }}
      >
        {/* Subtle backdrop */}
        <div
          className={`fixed inset-0 bg-black/10 transition-opacity duration-300 ${
            isMegaOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ top: scrolled ? "60px" : "68px" }}
          onClick={() => setIsMegaOpen(false)}
        />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-[#e5ebe9] overflow-hidden">
            <div className="flex min-h-[420px]">

              {/* Left sidebar — Category tabs */}
              <div className="w-[260px] bg-[#f8fbfa] border-r border-[#e5ebe9] p-4 flex flex-col gap-1 shrink-0">
                <div className="px-3 pt-2 pb-4">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-brand-teal/50 uppercase">
                    Our Services
                  </span>
                </div>
                {serviceCategories.map((cat, idx) => (
                  <Link
                    key={cat.title}
                    href={cat.href}
                    className={`flex items-center gap-3 w-full text-left px-4 py-3.5 rounded-xl transition-all duration-200 cursor-pointer group ${
                      activeCategory === idx
                        ? "bg-brand-teal text-white shadow-md"
                        : "text-[#1c2e2c]/80 hover:bg-white hover:shadow-sm"
                    }`}
                    onMouseEnter={() => setActiveCategory(idx)}
                    onClick={() => setIsMegaOpen(false)}
                  >
                    <span
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        activeCategory === idx
                          ? "bg-white/20"
                          : "bg-brand-mint"
                      }`}
                    >
                      <span className={activeCategory === idx ? "text-white" : "text-brand-teal"}>
                        {cat.icon}
                      </span>
                    </span>
                    <div className="flex-1 min-w-0">
                      <span className="text-[13px] font-bold block truncate">{cat.title}</span>
                      <span
                        className={`text-[11px] font-medium ${
                          activeCategory === idx ? "text-white/70" : "text-[#1c2e2c]/40"
                        }`}
                      >
                        {cat.subServices.length} services
                      </span>
                    </div>
                    <svg
                      className={`w-4 h-4 shrink-0 transition-all ${
                        activeCategory === idx
                          ? "text-white/70 translate-x-0"
                          : "text-[#1c2e2c]/20 -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}

                {/* Bottom info in sidebar */}
                <div className="mt-auto px-3 pt-6 pb-2">
                  <div className="bg-brand-teal/5 rounded-xl p-4">
                    <p className="text-[11px] text-brand-teal/70 font-medium leading-relaxed">
                      Need help choosing? Our specialists will guide you to the right treatment.
                    </p>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold text-brand-teal mt-2 hover:underline"
                      onClick={() => setIsMegaOpen(false)}
                    >
                      Free Consultation
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right panel — Sub-services grid */}
              <div className="flex-1 p-6 overflow-y-auto">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#e5ebe9]">
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: currentCategory.color + "15" }}
                  >
                    <span style={{ color: currentCategory.color }}>{currentCategory.icon}</span>
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[#1c2e2c]">{currentCategory.title}</h3>
                    <p className="text-[11px] text-[#1c2e2c]/50 font-medium">
                      {currentCategory.subServices.length} specialized treatments
                    </p>
                  </div>
                </div>

                {/* Sub-services list */}
                <div className={`grid gap-2 ${currentCategory.subServices.length > 5 ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"}`}>
                  {currentCategory.subServices.map((sub) => (
                    <a
                      key={sub.name}
                      href={sub.href}
                      className="group flex items-start gap-3 p-3 rounded-xl hover:bg-[#f4faf9] transition-all duration-200"
                      onClick={() => setIsMegaOpen(false)}
                    >
                      <span
                        className="w-2 h-2 rounded-full mt-[7px] shrink-0 transition-transform duration-200 group-hover:scale-125"
                        style={{ backgroundColor: currentCategory.color }}
                      />
                      <div className="flex-1 min-w-0">
                        <span className="text-[13px] font-semibold text-[#1c2e2c] group-hover:text-brand-teal transition-colors block">
                          {sub.name}
                        </span>
                        {sub.desc && (
                          <span className="text-[11px] text-[#1c2e2c]/45 font-light leading-relaxed block mt-0.5">
                            {sub.desc}
                          </span>
                        )}
                      </div>
                      <svg
                        className="w-4 h-4 text-[#1c2e2c]/0 group-hover:text-brand-teal transition-all duration-200 shrink-0 mt-0.5 -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── MOBILE MENU ─── */}
      <div
        className={`fixed inset-0 z-[98] lg:hidden transition-all duration-300 ${
          isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        />

        {/* Side panel */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-full max-w-[380px] bg-white shadow-2xl transition-transform duration-300 flex flex-col ${
            isMobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile header */}
          <div className="flex items-center justify-between p-5 border-b border-[#e5ebe9]">
            <Image
              src="/Logo-Mindera-Light.webp"
              alt="Mindera Logo"
              width={120}
              height={32}
              className="h-8 w-auto object-contain"
            />
            <button
              className="w-9 h-9 rounded-lg bg-[#f4faf9] flex items-center justify-center hover:bg-brand-mint transition-colors cursor-pointer"
              onClick={() => setIsMobileOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-4 h-4 text-[#1c2e2c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <div className="flex-1 overflow-y-auto p-5">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label}>
                    <button
                      className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-[15px] font-semibold text-[#1c2e2c]/80 hover:bg-[#f4faf9] transition-colors cursor-pointer"
                      onClick={() =>
                        setActiveMobileCategory(activeMobileCategory !== null ? null : 0)
                      }
                    >
                      <span>{link.label}</span>
                      <svg
                        className={`w-4 h-4 fill-current transition-transform duration-300 ${
                          activeMobileCategory !== null ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {/* Mobile service categories */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeMobileCategory !== null ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pl-2 pt-1 flex flex-col gap-1">
                        {serviceCategories.map((cat, catIdx) => (
                          <div key={cat.title}>
                            <button
                              className={`flex items-center gap-3 w-full text-left px-3 py-3 rounded-xl transition-all duration-200 cursor-pointer ${
                                activeMobileCategory === catIdx
                                  ? "bg-brand-teal text-white"
                                  : "text-[#1c2e2c]/70 hover:bg-[#f4faf9]"
                              }`}
                              onClick={() =>
                                setActiveMobileCategory(activeMobileCategory === catIdx ? null : catIdx)
                              }
                            >
                              <span
                                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                                  activeMobileCategory === catIdx ? "bg-white/20" : "bg-brand-mint"
                                }`}
                              >
                                <span className={activeMobileCategory === catIdx ? "text-white" : "text-brand-teal"}>
                                  {cat.icon}
                                </span>
                              </span>
                              <span className="text-[13px] font-bold flex-1">{cat.title}</span>
                              <svg
                                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                  activeMobileCategory === catIdx ? "rotate-90 text-white/70" : "text-[#1c2e2c]/30"
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                              </svg>
                            </button>

                            {/* Sub-services for this category */}
                            <div
                              className={`overflow-hidden transition-all duration-300 ${
                                activeMobileCategory === catIdx
                                  ? "max-h-[1500px] opacity-100"
                                  : "max-h-0 opacity-0"
                              }`}
                            >
                              <div className="pl-6 py-2 flex flex-col gap-0.5">
                                <Link
                                  href={cat.href}
                                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[12px] font-bold text-brand-teal bg-brand-mint/20 hover:bg-brand-mint/50 transition-colors mb-1"
                                  onClick={() => setIsMobileOpen(false)}
                                >
                                  View All {cat.title} Services &rarr;
                                </Link>

                                {cat.subServices.map((sub) => (
                                  <a
                                    key={sub.name}
                                    href={sub.href}
                                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[12px] font-medium text-[#1c2e2c]/60 hover:text-brand-teal hover:bg-brand-mint/30 transition-colors"
                                    onClick={() => setIsMobileOpen(false)}
                                  >
                                    <span
                                      className="w-1.5 h-1.5 rounded-full shrink-0"
                                      style={{ backgroundColor: cat.color }}
                                    />
                                    {sub.name}
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={getHref(link.href)}
                    className="px-4 py-3.5 rounded-xl text-[15px] font-semibold text-[#1c2e2c]/80 hover:bg-[#f4faf9] hover:text-brand-teal transition-colors block"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="p-5 border-t border-[#e5ebe9]">
            <a
              href="#book"
              className="bg-brand-teal hover:bg-brand-teal-light text-white font-bold text-sm py-3.5 rounded-full transition-all duration-300 shadow-md flex items-center justify-center gap-2 w-full"
              onClick={() => setIsMobileOpen(false)}
            >
              Get In Touch
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
