"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafdfc] text-[#1c2e2c] flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center bg-white py-32 px-6">
        <div className="max-w-md text-center">
          <h1 className="text-3xl font-bold tracking-tight text-[#1c2e2c] mb-4">
            Health Plus Travel
          </h1>
          <p className="text-brand-teal/70 font-light text-base">
            Our homepage is currently undergoing updates. Please use the navigation menu above to browse our services.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
