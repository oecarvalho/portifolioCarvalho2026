import { About } from "@/components/about-section/about-section";
import { CtaFinal } from "@/components/cta-final/cta-final";
import { Footer } from "@/components/footer/footer";
import { HeroSection } from "@/components/hero-section/hero-section";
import { JourneySection } from "@/components/journey-section/journey-section";
import { ProjectsSection } from "@/components/projects-section/projects-section";
import { PublicationsSection } from "@/components/publications-section/publications-section";
import { TechSwiper } from "@/components/techSwipper-section/techSwipper-section";
import { WorkSection } from "@/components/work-section/work-section";

export default function Home() {
  return (
    <article className="flex flex-col">
      <HeroSection/>
      <WorkSection/>
      <ProjectsSection/>
      <TechSwiper/>
      <About/>
      <JourneySection/>
      <PublicationsSection/>
      <CtaFinal/>
    </article>
  );
}
