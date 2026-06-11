import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface SubService {
  name: string;
  slug: string;
  desc: string;
  benefits: string[];
}

const subServices: SubService[] = [
  {
    name: "LASIK Eye Surgery",
    slug: "lasik",
    desc: "Laser-assisted in situ keratomileusis to reshape the cornea and correct nearsightedness, farsightedness, or astigmatism for clear vision.",
    benefits: ["Rapid Recovery", "High Precision", "Glasses Free"],
  },
  {
    name: "PRK (Photorefractive Keratectomy)",
    slug: "prk",
    desc: "A custom surface laser eye surgery that serves as a highly successful alternative to LASIK, ideal for patients with thinner corneas.",
    benefits: ["Thin Cornea Safe", "No Flap Complications", "Long-term Stability"],
  },
  {
    name: "SMILE Eye Surgery",
    slug: "smile-eye-surgery",
    desc: "Small Incision Lenticule Extraction is a minimally invasive laser vision correction technique offering rapid healing and fewer dry-eye issues.",
    benefits: ["Newest Tech", "Minimally Invasive", "Fast Dry-Eye Recovery"],
  },
  {
    name: "Implantable Contact Lenses (ICL)",
    slug: "implantable-contact-lenses",
    desc: "A permanent lens implant inserted behind the iris, offering a superb vision correction solution for patients who are not suitable for LASIK/PRK.",
    benefits: ["High Prescription Support", "Reversible Option", "Excellent Night Vision"],
  },
  {
    name: "Refractive Lens Exchange (RLE)",
    slug: "refractive-lens-exchange",
    desc: "Replacing the eye's natural lens with a clear artificial multifocal lens, ideal for patients aged 40+ dealing with presbyopia.",
    benefits: ["Presbyopia Correction", "Prevents Cataracts", "Multifocal Focus"],
  },
  {
    name: "Standard Cataract Surgery",
    slug: "standard-cataract-surgery",
    desc: "A widely performed, safe procedure where the eye's cloudy lens is removed and replaced with a high-quality monofocal artificial lens.",
    benefits: ["Clear Vision Restore", "Monofocal Focus", "Safe & Routine"],
  },
  {
    name: "Premium Cataract Surgery",
    slug: "premium-cataract-surgery",
    desc: "Advanced cataract surgery utilizing premium multifocal or trifocal IOLs, dramatically reducing or eliminating the need for reading glasses.",
    benefits: ["Near & Far Focus", "Glasses Independence", "Premium IOL Lenses"],
  },
  {
    name: "Femtosecond Laser Cataract Surgery",
    slug: "femtosecond-laser-cataract-surgery",
    desc: "A computer-controlled laser cataract surgery option that automates key surgical steps, offering unparalleled precision and consistency.",
    benefits: ["Laser Assisted", "Micro-Precision", "Faster Healing"],
  },
];

export default function EyeServicesPage() {
  return (
    <div className="min-h-screen bg-[#fafdfc] text-[#1c2e2c] flex flex-col font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-brand-mint to-[#fafdfc] pt-32 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 text-brand-teal text-xs font-bold tracking-[0.2em] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
            Services Category
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1c2e2c] mb-6 font-sans">
            Eye & Vision <span className="font-serif italic font-normal text-brand-teal">Procedures</span>
          </h1>
          <p className="text-base sm:text-lg text-brand-teal/80 leading-relaxed font-light max-w-2xl mx-auto">
            Restore clear, sharp vision with leading ophthalmologists. We coordinate with cutting-edge eye clinics abroad that use advanced lasers and premium artificial lenses, providing safe treatments and complete travel support.
          </p>
        </div>
      </section>

      {/* Sub-services Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {subServices.map((service) => (
            <div
              key={service.slug}
              className="bg-white border border-brand-teal/5 rounded-[2rem] p-8 shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_45px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs bg-[#f4faf9] text-brand-teal font-semibold px-3 py-1 rounded-md">
                    Eye & Vision
                  </span>
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-[#1c2e2c] mb-3 leading-snug">{service.name}</h3>
                <p className="text-brand-teal/75 text-[14px] leading-relaxed mb-6 font-light">
                  {service.desc}
                </p>

                {/* Benefits */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="text-[11px] bg-[#f4faf9] text-brand-teal/80 border border-brand-teal/10 px-3 py-1 rounded-full font-medium"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <Link
                href={`/services/eye-vision/${service.slug}`}
                className="w-full bg-brand-mint text-brand-teal font-semibold text-sm py-3.5 rounded-full hover:bg-brand-teal hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group shadow-sm"
              >
                Learn More
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="bg-[#f6faf9] py-16 border-t border-b border-brand-teal/5 w-full">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1c2e2c] mb-4">Start Your Vision Correction Inquiry</h2>
          <p className="text-base text-brand-teal/75 font-light mb-8 max-w-xl mx-auto">
            Connect with leading eye care coordinators to discuss vision surgery options, lens types, and travel arrangements.
          </p>
          <Link
            href="/#book"
            className="inline-flex bg-brand-teal hover:bg-brand-teal-light text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg items-center justify-center gap-2"
          >
            Discuss Your Options &rarr;
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
