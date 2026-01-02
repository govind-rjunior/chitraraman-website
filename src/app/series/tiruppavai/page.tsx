"use client";
import { useState } from "react";
import {
  SeriesHero,
  FeaturedVideo,
  InfoBox,
  ItemCard,
} from "@/components/SeriesComponents";
import { tiruppavaiPasurams, type Pasuram } from "@/data/tiruppavai";
import { X, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Pasuram Video Modal Component
function PasuramVideoModal({
  pasuram,
  onClose,
}: {
  pasuram: Pasuram;
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState<"tamil" | "english">(
    pasuram.tamilVideoId ? "tamil" : "english"
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-cream-50 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-saffron-500 to-saffron-600 p-6 rounded-t-2xl">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur text-white flex items-center justify-center font-bold">
                  {pasuram.number}
                </span>
                <h2 className="font-display text-2xl md:text-3xl text-white">
                  {pasuram.tamilTitle}
                </h2>
              </div>
              <p className="text-saffron-50 text-sm">
                {pasuram.sceneDescription}
              </p>
            </div>
            <button
              onClick={onClose}
              className="ml-4 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Video Tabs */}
        <div className="bg-cream-100 px-6 py-4 flex gap-2 border-b border-cream-200">
          {pasuram.tamilVideoId && (
            <button
              onClick={() => setActiveTab("tamil")}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                activeTab === "tamil"
                  ? "bg-gradient-to-r from-saffron-500 to-saffron-600 text-white shadow-lg"
                  : "bg-cream-200 text-cream-700 hover:bg-cream-300"
              }`}
            >
              தமிழ் Tamil
            </button>
          )}
          {pasuram.englishVideoId && (
            <button
              onClick={() => setActiveTab("english")}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                activeTab === "english"
                  ? "bg-gradient-to-r from-temple-gold to-temple-copper text-white shadow-lg"
                  : "bg-cream-200 text-cream-700 hover:bg-cream-300"
              }`}
            >
              English
            </button>
          )}
        </div>

        {/* Video Player */}
        <div className="p-6 bg-cream-50">
          <div className="aspect-video rounded-xl overflow-hidden shadow-xl mb-6 bg-black">
            {activeTab === "tamil" && pasuram.tamilVideoId && (
              <iframe
                src={`https://www.youtube.com/embed/${pasuram.tamilVideoId}?autoplay=1`}
                title={`${pasuram.tamilTitle} - Tamil`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            )}
            {activeTab === "english" && pasuram.englishVideoId && (
              <iframe
                src={`https://www.youtube.com/embed/${pasuram.englishVideoId}?autoplay=1`}
                title={`${pasuram.tamilTitle} - English`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            )}
          </div>

          {/* Pasuram Details */}
          <div className="space-y-6">
            {/* Tamil Text */}
            {pasuram.tamilText !== "[Tamil text to be added]" && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-cream-200">
                <h3 className="font-display text-lg text-saffron-600 mb-3">
                  பாசுரம் (Tamil Text)
                </h3>
                <p className="text-cream-950 leading-relaxed whitespace-pre-line font-tamil text-lg">
                  {pasuram.tamilText}
                </p>
              </div>
            )}

            {/* English Translation */}
            {pasuram.englishTranslation !== "[Translation to be added]" && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-cream-200">
                <h3 className="font-display text-lg text-temple-gold mb-3">
                  English Translation
                </h3>
                <p className="text-cream-700 leading-relaxed">
                  {pasuram.englishTranslation}
                </p>
              </div>
            )}

            {/* Meaning Points */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-cream-200">
              <h3 className="font-display text-lg text-cream-950 mb-3">
                Key Meanings
              </h3>
              <ul className="space-y-2">
                {pasuram.meaning.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-saffron-100 text-saffron-600 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-cream-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Keywords */}
            <div className="flex flex-wrap gap-2">
              {pasuram.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="px-3 py-1.5 bg-cream-200 text-cream-700 rounded-full text-sm"
                >
                  #{keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function TiruppavaiPage() {
  const [selectedPasuram, setSelectedPasuram] = useState<Pasuram | null>(null);

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
                <span className="text-temple-gold">•</span> Interactive video
                player for each pasuram in Tamil and English
              </li>
              <li className="flex items-start gap-2">
                <span className="text-temple-gold">•</span> Tamil text with
                English translations and meanings
              </li>
              <li className="flex items-start gap-2">
                <span className="text-temple-gold">•</span> Beautiful soft-toy
                scene depictions by Chitra Raman
              </li>
              <li className="flex items-start gap-2">
                <span className="text-temple-gold">•</span> Thematic
                categorization of all 30 pasurams
              </li>
            </ul>
          </InfoBox>
        </div>
      </section>

      <FeaturedVideo
        videoId="hRhW-eO3WfQ"
        title="Featured: Complete Tiruppavai Compilation"
        subtitle="Presentation at Fine Arts Society, Mumbai by Chitra Raman"
      />

      <section className="py-16 bg-cream-50 relative overflow-hidden">
        {/* Decorative floating elements */}
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
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-cream-950 mb-4">
              All 30 Pasurams
            </h2>
            <p className="text-cream-600 max-w-2xl mx-auto">
              Click on any pasuram card to watch the video and read the full
              text with meanings
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiruppavaiPasurams.map((pasuram, idx) => (
              <ItemCard key={pasuram.number} delay={idx * 0.05}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setSelectedPasuram(pasuram)}
                  className="bg-white rounded-xl p-5 shadow-sm border border-cream-200 h-full cursor-pointer group hover:shadow-xl hover:border-saffron-200 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron-100 to-saffron-200 text-saffron-700 flex items-center justify-center font-bold text-sm shadow-sm">
                      {pasuram.number}
                    </span>
                    <div className="flex gap-1">
                      <span className="text-xs px-2 py-1 bg-cream-100 text-cream-600 rounded-full capitalize">
                        {pasuram.theme.replace("-", " ")}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display text-xl text-cream-950 mb-2 group-hover:text-saffron-600 transition-colors">
                    {pasuram.tamilTitle}
                  </h3>

                  <p className="text-cream-600 text-sm line-clamp-2 mb-4">
                    {pasuram.sceneDescription}
                  </p>

                  {/* Video availability badges */}
                  <div className="flex gap-2 mb-3">
                    {pasuram.tamilVideoId && (
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-saffron-50 rounded-lg text-xs font-medium text-saffron-700">
                        <Play size={12} fill="currentColor" />
                        <span>Tamil</span>
                      </div>
                    )}
                    {pasuram.englishVideoId && (
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-temple-gold/10 rounded-lg text-xs font-medium text-temple-gold">
                        <Play size={12} fill="currentColor" />
                        <span>English</span>
                      </div>
                    )}
                  </div>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-1">
                    {pasuram.keywords.slice(0, 3).map((kw) => (
                      <span
                        key={kw}
                        className="text-xs text-cream-500 bg-cream-50 px-2 py-0.5 rounded"
                      >
                        #{kw}
                      </span>
                    ))}
                  </div>

                  {/* Hover indicator */}
                  <div className="mt-4 pt-4 border-t border-cream-100 flex items-center justify-between text-xs text-cream-500 group-hover:text-saffron-600 transition-colors">
                    <span>Click to watch & read</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </motion.div>
              </ItemCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-cream-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-cream-600 text-sm leading-relaxed">
            <strong className="text-cream-800">Note:</strong> Full Tamil text
            and detailed English translations for each pasuram are being
            prepared. Some pasurams currently show placeholder text. Please
            contact Chitra Raman if you would like to contribute authoritative
            translations or scene descriptions.
          </p>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedPasuram && (
          <PasuramVideoModal
            pasuram={selectedPasuram}
            onClose={() => setSelectedPasuram(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
