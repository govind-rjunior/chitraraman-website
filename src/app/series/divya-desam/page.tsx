"use client";
import { useRef } from "react";
import { Play, MapPin } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { SeriesHero, ItemCard } from "@/components/SeriesComponents";
import { divyaDesams, divyaDesamIntro } from "@/data/divya-desam";

export default function DivyaDesamPage() {
  const featuredDesams = divyaDesams.filter((d) => d.featured);
  const otherDesams = divyaDesams.filter((d) => !d.featured);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <SeriesHero
        title={divyaDesamIntro.title}
        description={divyaDesamIntro.description}
        gradientColor="from-temple-copper to-temple-bronze"
      />

      <section ref={ref} className="py-16 bg-cream-50 relative overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-temple-gold/20 rounded-full"
            initial={{ x: `${Math.random() * 100}%`, y: -20 }}
            animate={{ y: "120vh" }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="font-display text-2xl md:text-3xl text-cream-950 mb-8"
          >
            Featured Depictions
          </motion.h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredDesams.map((desam, idx) => (
              <ItemCard key={desam.id} delay={idx * 0.15}>
                <div className="bg-white rounded-xl overflow-hidden shadow-md border border-cream-200 h-full flex flex-col">
                  {desam.videoId && (
                    <div className="relative aspect-video">
                      <img
                        src={`https://i.ytimg.com/vi/${desam.videoId}/maxresdefault.jpg`}
                        alt={desam.name}
                        className="w-full h-full object-cover"
                      />
                      <a
                        href={`https://www.youtube.com/watch?v=${desam.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
                      >
                        <div className="w-14 h-14 rounded-full bg-temple-gold/90 flex items-center justify-center">
                          <Play
                            className="w-7 h-7 text-white ml-1"
                            fill="white"
                          />
                        </div>
                      </a>
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-display text-xl text-cream-950">
                        {desam.name}
                      </h3>
                      <span className="text-sm text-temple-gold">
                        {desam.tamilName}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-cream-600 mb-3">
                      <MapPin size={14} /> {desam.location}, {desam.state}
                    </div>
                    <p className="text-sm text-cream-600 mb-3">
                      <strong>Deity:</strong> {desam.deity}
                    </p>
                    <p className="text-cream-700 text-sm mb-4">{desam.brief}</p>
                    <div className="bg-temple-gold/10 rounded-lg p-4 mt-auto">
                      <h4 className="font-medium text-cream-800 mb-2 text-sm">
                        Legend:
                      </h4>
                      <p className="text-cream-600 text-sm">{desam.legend}</p>
                    </div>
                  </div>
                </div>
              </ItemCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl text-cream-950 mb-8">
            More Divya Desams
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherDesams.map((desam, idx) => (
              <ItemCard key={desam.id} delay={idx * 0.05}>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-cream-200 h-full">
                  <h3 className="font-display text-lg text-cream-950 mb-1">
                    {desam.name}
                  </h3>
                  <p className="text-sm text-temple-gold mb-2">
                    {desam.tamilName}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-cream-600 mb-3">
                    <MapPin size={14} /> {desam.location}, {desam.state}
                  </div>
                  <p className="text-cream-600 text-sm">{desam.brief}</p>
                </div>
              </ItemCard>
            ))}
          </div>
          <p className="text-center text-cream-600 mt-8 text-sm">
            More Divya Desam depictions coming soon. The 108 Divya Desams span
            across India and Nepal.
          </p>
        </div>
      </section>
    </>
  );
}
