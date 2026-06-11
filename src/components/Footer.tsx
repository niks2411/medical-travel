"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const getHref = (href: string) => {
    if (href.startsWith("#") && !isHomePage) {
      return `/${href}`;
    }
    return href;
  };

  return (
    <footer className="bg-[#111816] text-white py-16 mt-auto w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-start gap-12 w-full">
        
        {/* Logo & Description */}
        <div className="flex flex-col items-start text-left max-w-sm">
          <div className="text-white text-3xl font-bold font-sans">
            Health Plus<span className="font-serif italic font-normal text-[#00c2cb]"> Travel</span>
          </div>
          <p className="text-[14px] text-white/60 leading-relaxed font-light mt-4">
            At Health Plus Travel, we bridge the gap between patients and top accredited international medical centers, offering comprehensive support for travel, lodging, appointments, and recovery.
          </p>
        </div>

        {/* 5 columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 border-t border-white/10 pt-16 w-full text-left">
          
          {/* Col 1 */}
          <div>
            <span className="text-white font-bold text-xs uppercase tracking-[0.15em] mb-6 block">COMPANY</span>
            <div className="flex flex-col gap-3.5 text-sm text-white/60 font-light">
              <Link href={getHref("#about")} className="hover:text-white transition-colors">About Us</Link>
              <Link href={getHref("#testimonials")} className="hover:text-white transition-colors">Testimonials</Link>
              <a href="#career" className="hover:text-white transition-colors flex items-center">
                Careers
                <span className="bg-[#00c2cb] text-[#1c2e2c] font-bold text-[9px] px-2 py-0.5 rounded-full ml-2">
                  Hiring!
                </span>
              </a>
              <Link href={getHref("#faq")} className="hover:text-white transition-colors">FAQs</Link>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <span className="text-white font-bold text-xs uppercase tracking-[0.15em] mb-6 block">SERVICES</span>
            <div className="flex flex-col gap-3.5 text-sm text-white/60 font-light">
              <Link href="/services/dental" className="hover:text-white transition-colors">Dental Care</Link>
              <Link href="/services/fertility-ivf" className="hover:text-white transition-colors">Fertility & IVF</Link>
              <Link href="/services/eye-vision" className="hover:text-white transition-colors">Eye & Vision</Link>
              <Link href={getHref("#book")} className="hover:text-white transition-colors">Case Review</Link>
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <span className="text-white font-bold text-xs uppercase tracking-[0.15em] mb-6 block">RESOURCES</span>
            <div className="flex flex-col gap-3.5 text-sm text-white/60 font-light">
              <a href="#blog" className="hover:text-white transition-colors">Our Blog</a>
              <a href="#guides" className="hover:text-white transition-colors">Patient Guides</a>
              <a href="#destinations" className="hover:text-white transition-colors">Destinations</a>
              <a href="#compliance" className="hover:text-white transition-colors">Compliance</a>
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
              <a href="mailto:contact@healthplustravel.com" className="hover:text-white transition-colors">contact@healthplustravel.com</a>
              <p>123 Wellness Way, San Francisco, CA</p>
              <a href="tel:+15551234567" className="hover:text-white transition-colors">+1 (555) 123-4567</a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Terms Row */}
        <div className="border-t border-white/10 pt-8 mt-6 w-full flex flex-col sm:flex-row justify-between items-center gap-6">
          
          {/* Copyright */}
          <p className="text-[13px] text-white/70">
            &copy; 2026 <span className="text-[#00c2cb] font-semibold">Health Plus Travel</span>. All rights reserved.
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
  );
}
