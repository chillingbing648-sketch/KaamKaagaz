import { HomeHero } from "@/components/HomeHero";
import { HomeSearch } from "@/components/HomeSearch";
import { HowItWorks } from "@/components/HowItWorks";
import { ContextRail } from "@/components/ContextRail";
import { processes } from "@/data/processes";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
      {/* Main Working Area */}
      <div className="min-w-0 flex-1 lg:max-w-3xl">
        {/* 1. Hero with category discovery */}
        <HomeHero />

        {/* Discovery & Search Flow: Popular Kaam -> How It Works -> Search & Services */}
        <section id="services" aria-label="Services exploration and search" className="scroll-mt-24">
          <HomeSearch items={processes} midSection={<HowItWorks />} />
        </section>
      </div>

      {/* Contextual Side Rail */}
      <div className="mt-12 lg:mt-0 w-full lg:w-80 shrink-0 lg:sticky lg:top-24">
        <ContextRail mode="home" />
      </div>
    </div>
  );
}
