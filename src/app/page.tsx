import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import IsThisYou from "@/components/sections/IsThisYou";
import ServicesOverview from "@/components/sections/ServicesOverview";
import AboutPreview from "@/components/sections/AboutPreview";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import BookingSection from "@/components/sections/BookingSection";
import CTA from "@/components/sections/CTA";
import ScrollAnimations from "@/components/ScrollAnimations";

export const metadata: Metadata = {
  title: "Bookkeeper Alpharetta GA | Rockstar Bookkeeping",
  description:
    "Expert bookkeeping in Alpharetta, GA. Rockstar Bookkeeping handles your numbers so you can focus on growing your business. Get accurate financials today!",
  alternates: { canonical: "https://www.rockstar-bookkeeping.com" },
  openGraph: {
    title: "Bookkeeper Alpharetta GA | Rockstar Bookkeeping",
    description: "Expert bookkeeping in Alpharetta, GA. We handle your numbers so you can focus on your business.",
    url: "https://www.rockstar-bookkeeping.com",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <ScrollAnimations />
      {/* LocalBusiness JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Rockstar Bookkeeping",
            url: "https://www.rockstar-bookkeeping.com",
            telephone: "(770) 580-9908",
            email: "RockstarBookkeeping@outlook.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Alpharetta",
              addressRegion: "GA",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 34.0754,
              longitude: -84.2941,
            },
            openingHours: "Mo-Fr 09:00-17:00",
            priceRange: "$$",
            serviceArea: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 34.0754,
                longitude: -84.2941,
              },
              geoRadius: "30000",
            },
          }),
        }}
      />
      <Hero />
      <SocialProof />
      <IsThisYou />
      <ServicesOverview />
      <AboutPreview />
      <HowItWorks />
      <Testimonials />
      <BookingSection />
      <CTA />
    </>
  );
}
