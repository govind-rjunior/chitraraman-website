import {
  SeriesHero,
  IconCardGrid,
  VideoGrid,
} from "@/components/SeriesComponents";
import { videos } from "@/data/videos";

const festivalVideos = videos.filter((v) => v.category === "Festivals & Golu");

const festivalTypes = [
  { icon: "🎂", title: "Janmashtami", desc: "Krishna birth celebrations" },
  { icon: "🪔", title: "Navaratri Golu", desc: "Nine nights of devotion" },
  { icon: "📖", title: "Ramayana", desc: "Epic storytelling displays" },
  { icon: "🎊", title: "Annual Events", desc: "Year-round celebrations" },
];

export default function FestivalsPage() {
  return (
    <>
      <SeriesHero
        title="Festivals & Golu"
        description="Festival depictions that bring bhakti into the home—Janmashtami setups, Navaratri Golu themes, Ramayana storytelling, and annual celebrations. Each entry includes the theme, year, and video embed."
        gradientColor="from-saffron-400 to-saffron-500"
      />

      <section className="py-12 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <IconCardGrid items={festivalTypes} />
        </div>
      </section>

      <VideoGrid videos={festivalVideos} title="Festival Depictions" />
    </>
  );
}
