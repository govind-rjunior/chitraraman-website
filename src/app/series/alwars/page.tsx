"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SeriesHero,
  FilterButtons,
  ItemCard,
} from "@/components/SeriesComponents";
import { alwars, alwarEras } from "@/data/alwars";

export default function AlwarsPage() {
  const [activeEra, setActiveEra] = useState("all");
  const filteredAlwars =
    activeEra === "all" ? alwars : alwars.filter((a) => a.era === activeEra);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <SeriesHero
        title="Alwars Life Histories"
        description="Discover the Alwars—saints whose devotion and pasurams form a cornerstone of Sri Vaishnavite tradition. Each profile includes a brief life story, key contributions, and related videos."
        gradientColor="from-temple-gold to-temple-copper"
      />

      <section className="py-8 bg-cream-50 border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FilterButtons
            items={alwarEras}
            active={activeEra}
            onSelect={setActiveEra}
          />
        </div>
      </section>

      <section ref={ref} className="py-16 bg-cream-50 relative overflow-hidden">
        {[...Array(12)].map((_, i) => (
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAlwars.map((alwar, idx) => (
              <ItemCard key={alwar.id} delay={idx * 0.08}>
                <div className="bg-white rounded-xl overflow-hidden shadow-md border border-cream-200 h-full flex flex-col">
                  <div
                    className={`h-2 ${
                      alwar.era === "early"
                        ? "bg-gradient-to-r from-saffron-400 to-saffron-500"
                        : alwar.era === "middle"
                        ? "bg-gradient-to-r from-temple-gold to-temple-copper"
                        : "bg-gradient-to-r from-maroon-400 to-maroon-500"
                    }`}
                  />
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-display text-xl text-cream-950">
                          {alwar.name}
                        </h3>
                        <p className="text-temple-gold text-sm">
                          {alwar.tamilName}
                        </p>
                      </div>
                      <span className="text-xs px-2 py-1 bg-cream-100 text-cream-600 rounded-full capitalize">
                        {alwar.era}
                      </span>
                    </div>

                    <div className="text-sm text-cream-600 mb-3">
                      <p>
                        <strong>Period:</strong> {alwar.period}
                      </p>
                      <p>
                        <strong>Birthplace:</strong> {alwar.birthplace}
                      </p>
                    </div>

                    <p className="text-cream-700 text-sm mb-4 line-clamp-3 flex-1">
                      {alwar.shortBio}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-xs font-medium text-cream-800 mb-2">
                        Key Works:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {alwar.keyWorks.slice(0, 2).map((work) => (
                          <span
                            key={work}
                            className="text-xs px-2 py-1 bg-saffron-50 text-saffron-700 rounded"
                          >
                            {work.length > 30
                              ? work.substring(0, 30) + "..."
                              : work}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto">
                      <h4 className="text-xs font-medium text-cream-800 mb-2">
                        Key Stories:
                      </h4>
                      <ul className="text-xs text-cream-600">
                        {alwar.keyStories.slice(0, 2).map((story) => (
                          <li key={story} className="flex items-start gap-1">
                            <span className="text-temple-gold">•</span> {story}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ItemCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-950 text-cream-100 relative overflow-hidden">
        <motion.div
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 30, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="font-display text-2xl md:text-3xl mb-4">
            The Legacy of the Alwars
          </h2>
          <p className="text-cream-400 text-lg">
            The 12 Alwars composed over 4,000 verses collectively known as
            Nalayira Divya Prabandham, the Tamil Veda of Sri Vaishnavism. Their
            devotion continues to inspire millions today.
          </p>
        </div>
      </section>
    </>
  );
}
