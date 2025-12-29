import {
  SeriesHero,
  FeaturedVideo,
  ItemCard,
} from "@/components/SeriesComponents";
import {
  varanamAyiramPasurams,
  varanamAyiramIntro,
} from "@/data/varanam-ayiram";

export default function VaranamAyiramPage() {
  return (
    <>
      <SeriesHero
        title={varanamAyiramIntro.title}
        subtitle={varanamAyiramIntro.subtitle}
        description={varanamAyiramIntro.description}
        gradientColor="from-maroon-500 to-maroon-600"
      />

      <FeaturedVideo
        videoId={varanamAyiramIntro.videoId}
        title="Watch the Series"
      />

      <section className="py-16 bg-cream-50 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(120 53 15) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="font-display text-2xl md:text-3xl text-cream-950 mb-8">
            All 11 Pasurams
          </h2>
          <div className="space-y-6">
            {varanamAyiramPasurams.map((pasuram, idx) => (
              <ItemCard key={pasuram.number} delay={idx * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-cream-200">
                  <div className="flex items-start gap-4">
                    <span className="w-10 h-10 rounded-full bg-maroon-100 text-maroon-700 flex items-center justify-center font-display text-lg flex-shrink-0">
                      {pasuram.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-xl text-cream-950 mb-2">
                        {pasuram.tamilTitle}
                      </h3>
                      <p className="text-cream-700 mb-4">
                        {pasuram.englishTranslation}
                      </p>
                      <div className="bg-cream-50 rounded-lg p-4 mb-4">
                        <h4 className="font-medium text-cream-800 mb-2">
                          Meaning:
                        </h4>
                        <ul className="space-y-1">
                          {pasuram.meaning.map((m, idx) => (
                            <li
                              key={idx}
                              className="text-cream-600 text-sm flex items-start gap-2"
                            >
                              <span className="text-temple-gold">•</span> {m}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-maroon-50 rounded-lg p-4">
                        <h4 className="font-medium text-cream-800 mb-2">
                          Scene Description:
                        </h4>
                        <p className="text-cream-600 text-sm">
                          {pasuram.sceneDescription}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {pasuram.keywords.map((kw) => (
                          <span
                            key={kw}
                            className="text-xs px-2 py-1 bg-cream-100 text-cream-600 rounded-full"
                          >
                            #{kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ItemCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
