"use client";

import { useState } from "react";
import { HomeHero } from "@/components/HomeHero";
import { HomeSearch } from "@/components/HomeSearch";
import { HowItWorks } from "@/components/HowItWorks";
import { ContextRail } from "@/components/ContextRail";
import { processes } from "@/data/processes";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    const servicesEl = document.getElementById("search-section") || document.getElementById("services");
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
      {/* Main Working Area */}
      <div className="min-w-0 flex-1 lg:max-w-3xl">
        {/* 1. Hero with connected category exploration */}
        <HomeHero
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* Discovery & Search Flow: Popular Kaam -> How It Works -> Category Filters -> Search & Services */}
        <section id="services" aria-label="Services exploration and search" className="scroll-mt-24">
          <HomeSearch
            items={processes}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            midSection={<HowItWorks />}
          />
        </section>
      </div>

      {/* Contextual Side Rail */}
      <div className="mt-12 lg:mt-0 w-full lg:w-80 shrink-0 lg:sticky lg:top-24">
        <ContextRail mode="home" />
      </div>
    </div>
  );
}
