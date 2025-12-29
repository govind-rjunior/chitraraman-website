import {
  HeroSection,
  QuickHighlights,
  FeaturedSeries,
  FeaturedVideos,
  AboutPreview,
  CTASection,
} from "@/components/HomeComponents";

export default function Home() {
  return (
    <>
      <HeroSection />
      <QuickHighlights />
      <FeaturedSeries />
      <FeaturedVideos />
      <AboutPreview />
      <CTASection />
    </>
  );
}
