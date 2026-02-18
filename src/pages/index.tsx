import { HeroSection } from "@/components/hero-section/hero-section";
import { WorkSection } from "@/components/work-section/work-section";

export default function Home() {
  return (
    <article className="flex flex-col">
      <HeroSection/>
      <WorkSection/>
    </article>
  );
}
