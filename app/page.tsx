import { AboutSection } from "@/components/about-section";
import { CarouselSection } from "@/components/carousel-section";
import { ContactSection } from "@/components/contact-section";
import { ForWhoSection } from "@/components/for-who-section";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { SiteHeader } from "@/components/site-header";
import { EventPopup } from "@/components/event-popup";


const EVENT_POPUP_ENABLED = true;

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <ForWhoSection />
        <AboutSection />
        <CarouselSection />
        <ContactSection />
      </main>

      <EventPopup
        enabled={EVENT_POPUP_ENABLED}
        storageKey="event-popup-marina-1maja-2026"
        delayMs={800}
        logo="/logomarina.svg"
        logoAlt="Marina Kleczków Beach Bar"
        title="1 MAJA"
        subtitle="Marina Kleczków Beach Bar · 15:00"
        description={`Świętuj z nami otwarcie drugiego BARBERBUSA we Wrocławiu! 🔥\n\nZapraszamy na grilla, dobrą muzykę i świetną zabawę w luźnej, męskiej atmosferze. To idealna okazja, żeby wpaść, poznać nas bliżej i spędzić czas w dobrym stylu.\n\nNie może Cię zabraknąć – widzimy się przy BARBERBUSIE! 🍔🎶`}
        locationUrl="https://share.google/4ClQDcGgt6kIdlGWM"
        locationButtonText="Zobacz lokalizację"
      />
    </div>
  );
}

