import {
  SeriesHero,
  IconCardGrid,
  VideoGrid,
} from "@/components/SeriesComponents";
import { videos } from "@/data/videos";

const rangoliVideos = videos.filter((v) => v.category === "Rangoli");

const rangoliTypes = [
  {
    icon: "🌸",
    title: "Poo Kolam",
    desc: "Floral rangoli designs using fresh flowers and petals",
  },
  {
    icon: "🎨",
    title: "Color Rangoli",
    desc: "Traditional patterns with colored powders",
  },
  {
    icon: "🛕",
    title: "Temple Rangoli",
    desc: "Large-scale designs for temple festivals",
  },
];

export default function RangoliPage() {
  return (
    <>
      <SeriesHero
        title="Rangoli"
        description="Traditional rangoli and poo kolam created for temple festivals and special occasions. This section highlights works created at Ahobila Mutt Brahmotsavam and other events."
        gradientColor="from-maroon-400 to-maroon-500"
      />

      <section className="py-12 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6">
            <IconCardGrid items={rangoliTypes} />
          </div>
        </div>
      </section>

      <VideoGrid videos={rangoliVideos} title="Rangoli Works" />

      <section className="py-16 bg-cream-950 text-cream-100 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="font-display text-2xl md:text-3xl mb-4">
            Ahobila Mutt Brahmotsavam
          </h2>
          <p className="text-cream-400 mb-6">
            Special rangoli and poo kolam are created annually for the
            Brahmotsavam celebrations at Ahobila Mutt Temple, Chembur. These
            10-day festival decorations feature traditional patterns honoring
            the temple deities.
          </p>
          <div className="flex justify-center gap-2">
            {[0, 0.2, 0.4].map((delay, i) => (
              <span key={i} className="w-2 h-2 rounded-full bg-temple-gold" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
