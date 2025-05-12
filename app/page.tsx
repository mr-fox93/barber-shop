import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { ForWhoSection } from "@/components/for-who-section";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <ForWhoSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}

