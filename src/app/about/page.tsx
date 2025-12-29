import { Metadata } from "next";
import {
  AboutHero,
  WhatSheCreates,
  WhyDolls,
  JourneyTimeline,
  Background,
  AboutCTA,
  TraditionalGreeting,
} from "@/components/AboutComponents";

export const metadata: Metadata = {
  title: "About Chitra Raman - Devotional Storytelling Artist",
  description:
    "Learn about Chitra Raman's journey in creating handmade doll depictions and cultural presentations.",
};

export default function AboutPage() {
  return (
    <>
      <TraditionalGreeting />
      <AboutHero />
      <WhatSheCreates />
      <WhyDolls />
      <JourneyTimeline />
      <Background />
      <AboutCTA />
    </>
  );
}
