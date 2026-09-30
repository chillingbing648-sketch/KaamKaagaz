import { HomeHero } from "@/components/HomeHero";
import { HomeSearch } from "@/components/HomeSearch";
import { HowItWorks } from "@/components/HowItWorks";
import { processes } from "@/data/processes";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <div id="services">
        <HomeSearch items={processes} />
      </div>
      <HowItWorks />
    </div>
  );
}
