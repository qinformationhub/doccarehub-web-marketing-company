
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import TrustSection from "@/components/TrustSection";
import IntegrationSection from "@/components/IntegrationSection";
import StayAtHome from "@/components/StayAtHome";
import HowItWorks from "@/components/HowItWorks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <Navbar />
      <Hero />
      <FeatureSection />
      <TrustSection />
      <IntegrationSection />
      <StayAtHome />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
