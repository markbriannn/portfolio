import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProofSection } from "@/components/sections/proof-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { WhyHireMeSection } from "@/components/sections/why-hire-me-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <WhyHireMeSection />
      <TechStackSection />
      <FeaturedProjectsSection />
      <ExperienceSection />
      <ServicesSection />
      <ProofSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
