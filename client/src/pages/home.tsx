import { Hero } from "@/components/home/Hero";
import { PremierSponsors } from "@/components/home/PremierSponsors";
import { FestivalAnnouncement } from "@/components/home/FestivalAnnouncement";
import { FeaturedEvents } from "@/components/home/FeaturedEvents";
import { BlossomMapTeaser } from "@/components/home/BlossomMapTeaser";
import { PartnerGrid } from "@/components/home/PartnerGrid";
import { GetInvolved } from "@/components/home/GetInvolved";
import { Newsletter } from "@/components/home/Newsletter";
import { Footer } from "@/components/home/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-pink-200 selection:text-pink-900 pb-16 md:pb-0">
      <Navbar />
      <main>
        <Hero />
        <PremierSponsors />
        <FestivalAnnouncement />
        <FeaturedEvents />
        <BlossomMapTeaser />
        <PartnerGrid />
        <GetInvolved />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
