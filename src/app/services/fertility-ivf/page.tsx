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
    name: "Initial Fertility Assessment",
    slug: "initial-fertility-assessment",
    desc: "Comprehensive diagnostic testing for both partners, including hormone analysis, semen evaluation, and pelvic ultrasounds.",
    benefits: ["Full Assessment", "Hormone Profiling", "Semen Evaluation"],
  },
  {
    name: "IVF (In Vitro Fertilization)",
    slug: "ivf",
    desc: "A widely performed procedure where eggs and sperm are fertilized outside the body in a laboratory before the embryo is placed in the womb.",
    benefits: ["High Success Rate", "Advanced Lab Tech", "Embryo Selection"],
  },
  {
    name: "ICSI (Intracytoplasmic Sperm Injection)",
    slug: "icsi",
    desc: "A highly specialized form of IVF where a single selected sperm is directly injected into an egg, assisting with male infertility.",
    benefits: ["Direct Injection", "Male Factor Solution", "Enhanced Fertilization"],
  },
  {
    name: "Frozen Embryo Transfer (FET)",
    slug: "frozen-embryo-transfer",
    desc: "A process where previously frozen embryos from a prior IVF cycle are thawed and carefully transferred into the uterus.",
    benefits: ["Flexible Timing", "Thaw Survival Rate", "Gentler Prep"],
  },
  {
    name: "Donor Egg IVF",
    slug: "donor-egg-ivf",
    desc: "For women with low egg reserve or quality, using highly screened, healthy donor eggs fertilized with partner or donor sperm.",
    benefits: ["Screened Donors", "High Success Rate", "Complete Discretion"],
  },
  {
    name: "Donor Sperm IVF",
    slug: "donor-sperm-ivf",
    desc: "IVF utilizing highly screened donor sperm, ideal for single women, female couples, or cases of severe male factor infertility.",
    benefits: ["Quality Screened", "Inclusive Options", "Safe Storage"],
  },
  {
    name: "IVF with PGD/PGS (Genetic Testing)",
    slug: "ivf-pgd-pgs",
    desc: "Screening embryos for chromosomal abnormalities and specific genetic diseases prior to embryo transfer for a healthy pregnancy.",
    benefits: ["Chromosomal Screen", "Disease Prevention", "Gender Option (if legal)"],
  },
  {
    name: "Blastocyst Transfer",
    slug: "blastocyst-transfer",
    desc: "Transferring embryos at the Day 5 blastocyst stage, allowing for natural selection of the strongest embryos.",
    benefits: ["Day 5 Transfer", "Natural Selection", "Single Embryo Focus"],
  },
  {
    name: "IVF with Surrogacy",
    slug: "ivf-surrogacy",
    desc: "For women unable to carry a pregnancy, utilizing a gestational surrogate. Note: Surrogacy regulations vary globally.",
    benefits: ["Gestational Surrogate", "Legal Coordination", "Comprehensive Support"],
  },
  {
    name: "Mild / Natural IVF",
    slug: "mild-natural-ivf",
    desc: "A low-dose hormone stimulation IVF cycle, offering a gentler, more natural, and lower-cost alternative to standard IVF.",
    benefits: ["Gentle Stimulation", "Lower Treatment Cost", "Reduced Medication"],
  },
];

export default function FertilityServicesPage() {
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
            Fertility & <span className="font-serif italic font-normal text-brand-teal">IVF Treatments</span>
          </h1>
          <p className="text-base sm:text-lg text-brand-teal/80 leading-relaxed font-light max-w-2xl mx-auto">
            Embark on your parenthood journey with confidence. We connect you with top international fertility clinics, leading embryologists, and state-of-the-art laboratory technology, supported by comprehensive travel coordination.
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
                    Fertility & IVF
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
                href={`/services/fertility-ivf/${service.slug}`}
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
          <h2 className="text-3xl font-bold text-[#1c2e2c] mb-4">Start Your Fertility Assessment Abroad</h2>
          <p className="text-base text-brand-teal/75 font-light mb-8 max-w-xl mx-auto">
            Discuss your case details with specialized fertility coordinators to understand options, success rates, and coordinate next steps.
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
