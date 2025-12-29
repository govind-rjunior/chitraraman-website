import {
  SeriesHero,
  FeaturedVideo,
  InfoBox,
  ItemCard,
} from "@/components/SeriesComponents";
import { tiruppavaiPasurams } from "@/data/tiruppavai";

export default function TiruppavaiPage() {
  return (
    <>
      <SeriesHero
        title="Tiruppavai"
        description="Tiruppavai is a set of 30 devotional pasurams composed by Andal, traditionally recited during Margazhi. Chitra Raman's depiction presents each pasuram through handmade doll scenes, making the experience visual, memorable, and family-friendly. The series is presented in both Tamil and English."
        gradientColor="from-saffron-500 to-saffron-600"
      />

      <section className="py-12 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InfoBox title="What you will find here:">
            <ul className="space-y-2 text-cream-700">
              <li className="flex items-start gap-2">
                <span className="text-temple-gold">•</span> Pasuram-by-pasuram
                pages with Tamil and English text
              </li>
              <li className="flex items-start gap-2">
                <span className="text-temple-gold">•</span> Simple explanation
                of meaning and key ideas
              </li>
              <li className="flex items-start gap-2">
                <span className="text-temple-gold">•</span> Soft-toy scene
                description (characters, props, symbolism)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-temple-gold">•</span> Video embeds from
                the YouTube channel
              </li>
            </ul>
          </InfoBox>
        </div>
      </section>

      <FeaturedVideo
        videoId="hRhW-eO3WfQ"
        title="Featured: Tiruppavai Compilation"
        subtitle="Presentation at Fine Arts Society, Mumbai by Chitra Raman"
      />

      <section className="py-16 bg-cream-50 relative overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-temple-gold/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="font-display text-2xl md:text-3xl text-cream-950 mb-8">
            All 30 Pasurams
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tiruppavaiPasurams.map((pasuram, idx) => (
              <ItemCard key={pasuram.number} delay={idx * 0.05}>
                <div className="bg-white rounded-xl p-5 shadow-sm border border-cream-200 h-full">
                  <div className="flex items-start justify-between mb-3">
                    <span className="w-8 h-8 rounded-full bg-saffron-100 text-saffron-700 flex items-center justify-center font-medium text-sm">
                      {pasuram.number}
                    </span>
                    <span className="text-xs px-2 py-1 bg-cream-100 text-cream-600 rounded-full capitalize">
                      {pasuram.theme.replace("-", " ")}
                    </span>
                  </div>
                  <h3 className="font-display text-lg text-cream-950 mb-2">
                    {pasuram.tamilTitle}
                  </h3>
                  <p className="text-cream-600 text-sm line-clamp-2 mb-3">
                    {pasuram.sceneDescription}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {pasuram.keywords.slice(0, 3).map((kw) => (
                      <span key={kw} className="text-xs text-cream-500">
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>
              </ItemCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-cream-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-cream-600 text-sm">
            <strong>Note:</strong> Full Tamil text and detailed English
            translations for each pasuram are being prepared. Please contact
            Chitra Raman if you would like to contribute authoritative
            translations or scene descriptions.
          </p>
        </div>
      </section>
    </>
  );
}
