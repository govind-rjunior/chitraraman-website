"use client";
import { useState } from "react";
import {
  SeriesHero,
  FeaturedVideo,
  InfoBox,
  ItemCard,
} from "@/components/SeriesComponents";
import { varanamAyiramPasurams } from "@/data/varanam-ayiram";
import { X, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Pasuram Video Modal Component
function PasuramVideoModal({
  pasuram,
  onClose,
}: {
  pasuram: any;
  onClose: () => void;
}) {
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
        <div className="sticky top-0 bg-gradient-to-r from-maroon-500 to-maroon-600 p-6 rounded-t-2xl">
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
              <p className="text-maroon-50 text-sm">
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

        {/* Video Player */}
        <div className="p-6 bg-cream-50">
          <div className="aspect-video rounded-xl overflow-hidden shadow-xl mb-6 bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${pasuram.videoId}?autoplay=1`}
              title={pasuram.tamilTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          {/* Pasuram Details */}
          <div className="space-y-6">
            {/* Tamil Text */}
            {pasuram.tamilText &&
              pasuram.tamilText !== "[Tamil text to be added]" && (
                <div className="bg-white rounded-xl p-6 shadow-sm border border-cream-200">
                  <h3 className="font-display text-lg text-maroon-600 mb-3">
                    பாசுரம் (Tamil Text)
                  </h3>
                  <p className="text-cream-950 leading-relaxed whitespace-pre-line font-tamil text-lg">
                    {pasuram.tamilText}
                  </p>
                </div>
              )}

            {/* English Translation */}
            {pasuram.englishTranslation &&
              pasuram.englishTranslation !== "[Translation to be added]" && (
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
                {pasuram.meaning.map((point: any, idx: any) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-maroon-100 text-maroon-600 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-cream-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Keywords */}
            <div className="flex flex-wrap gap-2">
              {pasuram.keywords.map((keyword: any) => (
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

export default function VaranamAyiramPage() {
  const [selectedPasuram, setSelectedPasuram] =
    useState<any | null>(null);

  return (
    <>
      <SeriesHero
        title="Varanam Ayiram"
        subtitle="11 Pasurams - Andal's Dream Wedding"
        description="Varanam Ayiram is a sequence of 11 pasurams where Andal describes her divine dream of marrying Lord Krishna. Through handmade doll tableaux, Chitra Raman brings this beautiful narrative to life, depicting the sacred wedding preparations, rituals, and celebrations."
        gradientColor="from-maroon-500 to-maroon-600"
      />

      <section className="py-12 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InfoBox title="What you will find here:">
            <ul className="space-y-2 text-cream-700">
              <li className="flex items-start gap-2">
                <span className="text-temple-gold">•</span> All 11 pasurams
                depicting Andal's dream wedding sequence
              </li>
              <li className="flex items-start gap-2">
                <span className="text-temple-gold">•</span> Beautiful handmade
                doll tableaux by Chitra Raman
              </li>
              <li className="flex items-start gap-2">
                <span className="text-temple-gold">•</span> Video presentations
                of each pasuram
              </li>
              <li className="flex items-start gap-2">
                <span className="text-temple-gold">•</span> Tamil text with
                English translations (being prepared)
              </li>
            </ul>
          </InfoBox>
        </div>
      </section>

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
              All 11 Pasurams
            </h2>
            <p className="text-cream-600 max-w-2xl mx-auto">
              Click on any pasuram card to watch the video and read the details
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {varanamAyiramPasurams.map((pasuram, idx) => (
              <ItemCard key={pasuram.number} delay={idx * 0.05}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setSelectedPasuram(pasuram)}
                  className="bg-white rounded-xl p-5 shadow-sm border border-cream-200 h-full cursor-pointer group hover:shadow-xl hover:border-maroon-200 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="w-10 h-10 rounded-full bg-gradient-to-br from-maroon-100 to-maroon-200 text-maroon-700 flex items-center justify-center font-bold text-sm shadow-sm">
                      {pasuram.number}
                    </span>
                  </div>

                  <h3 className="font-display text-xl text-cream-950 mb-2 group-hover:text-maroon-600 transition-colors">
                    {pasuram.tamilTitle}
                  </h3>

                  <p className="text-cream-600 text-sm line-clamp-2 mb-4">
                    {pasuram.sceneDescription}
                  </p>

                  {/* Video availability badge */}
                  <div className="flex gap-2 mb-3">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-maroon-50 rounded-lg text-xs font-medium text-maroon-700">
                      <Play size={12} fill="currentColor" />
                      <span>Video Available</span>
                    </div>
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
                  <div className="mt-4 pt-4 border-t border-cream-100 flex items-center justify-between text-xs text-cream-500 group-hover:text-maroon-600 transition-colors">
                    <span>Click to watch</span>
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
            prepared. Please contact Chitra Raman if you would like to
            contribute authoritative translations or scene descriptions.
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
