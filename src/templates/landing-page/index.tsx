import {
  BenefitsSection,
  CtaSection,
  CustomerStorySection,
  FeatureSection,
  HeroSection,
} from "./sections";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <BenefitsSection />
      <CustomerStorySection />
      <CtaSection />
    </>
  );
}
