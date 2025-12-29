import { Metadata } from "next";
import {
  VideosHero,
  VideosGrid,
  YouTubeCTA,
} from "@/components/VideosComponents";
import { videos, categories } from "@/data/videos";

export const metadata: Metadata = {
  title: "Video Gallery - Chitra Raman",
  description:
    "Watch handmade doll depictions, festival presentations, divya desam stories, and rangoli work.",
};

export default function VideosPage() {
  return (
    <>
      <VideosHero />
      <VideosGrid videos={videos} categories={categories} />
      <YouTubeCTA />
    </>
  );
}
