import { HomeHero } from "@/components/HomeHero";
import { HomeSearch } from "@/components/HomeSearch";
import { processes } from "@/data/processes";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeSearch items={processes} />
    </div>
  );
}
