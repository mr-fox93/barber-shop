import { AboutSection } from "@/components/about-section";
import { CarouselSection } from "@/components/carousel-section";
import { ContactSection } from "@/components/contact-section";
import { ForWhoSection } from "@/components/for-who-section";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { SiteHeader } from "@/components/site-header";
import { EventPopup } from "@/components/event-popup";
import { GoogleReviewPopup } from "@/components/google-review-popup";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

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
        storageKey="event-popup-otwarcie-bus2-relacja-2026"
        delayMs={800}
        logoNode={
          <InstagramIcon className="h-16 w-16 text-white/80 sm:h-20 sm:w-20" />
        }
        title="Drugi BARBERBUS już działa! 🔥"
        subtitle="Obejrzyj relację z otwarcia"
        description={`Byliście z nami 1 maja – dziękujemy! To był niesamowity dzień.\n\nJeśli przegapiłeś otwarcie drugiego BARBERBUSA we Wrocławiu, koniecznie obejrzyj relację na naszym Instagramie.\n\nŚledź nas, żeby być na bieżąco z nowościami, akcjami i eventami! 💈`}
        locationUrl="https://www.instagram.com/reels/DX4ypEYMQna/"
        locationButtonText="Zobacz relację na Instagramie"
        buttonIcon={<InstagramIcon className="h-4 w-4" />}
      />

      <GoogleReviewPopup />
    </div>
  );
}

