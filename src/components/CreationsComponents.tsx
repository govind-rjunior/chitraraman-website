"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  year?: string;
  venue?: string;
}

// Hero Section
export function GalleryHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative py-20 md:py-32 bg-cream-100 overflow-hidden">
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-temple-gold via-saffron-500 to-maroon-500"
      />

      {/* Floating mandala patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 50, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -top-20 -right-20 w-80 h-80 opacity-5"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-temple-gold"
            />
            <circle
              cx="100"
              cy="100"
              r="60"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-maroon-500"
            />
            {[...Array(12)].map((_, i) => (
              <line
                key={i}
                x1="100"
                y1="100"
                x2={100 + 80 * Math.cos((i * 30 * Math.PI) / 180)}
                y2={100 + 80 * Math.sin((i * 30 * Math.PI) / 180)}
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-temple-gold"
              />
            ))}
          </svg>
        </motion.div>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl text-cream-950 mb-6 leading-tight"
        >
          Creations Gallery
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 w-24 bg-gradient-to-r from-temple-gold to-saffron-500 mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-cream-700 max-w-3xl leading-relaxed"
        >
          A visual gallery of handmade doll scenes, festival depictions, rangoli
          work, and cultural presentations. Each creation tells a story of
          devotion and tradition.
        </motion.p>
      </motion.div>
    </section>
  );
}

// Gallery Grid with Filters
export function GalleryGrid({
  items,
  categories,
}: {
  items: GalleryItem[];
  categories: string[];
}) {
  const [activeCategory, setActiveCategory] = useState("All");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <section
      ref={containerRef}
      className="py-20 bg-cream-50 relative overflow-hidden"
    >
      {/* Flowing particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-temple-gold/20 rounded-full"
            initial={{ x: `${Math.random() * 100}%`, y: -20 }}
            animate={{ y: "120vh" }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-temple-gold to-temple-copper text-white shadow-lg scale-105"
                  : "bg-white text-cream-700 border border-cream-200 hover:border-temple-gold hover:shadow-md"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="break-inside-avoid mb-6"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-cream-200 group">
                <div className="relative overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Title overlay on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-3 py-1 rounded-full bg-temple-gold/90 text-white font-medium">
                        {item.category}
                      </span>
                      {item.year && (
                        <span className="text-xs text-white/80">
                          {item.year}
                        </span>
                      )}
                    </div>
                    <p className="text-white font-display text-sm leading-tight">
                      {item.title}
                    </p>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-base text-cream-950 mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-cream-600 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {item.venue && (
                    <p className="text-xs text-cream-500 pt-3 border-t border-cream-100 mt-3">
                      📍 {item.venue}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-cream-600">No items found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}

// Category Description Cards
export function CategoryDescription() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const categories = [
    {
      emoji: "🙏",
      title: "Tiruppavai",
      desc: "30 pasurams of Andal depicted through handmade dolls, capturing the essence of each verse in visual form.",
      color: "bg-saffron-100",
    },
    {
      emoji: "💒",
      title: "Varanam Ayiram",
      desc: "Andal's dream wedding sequence told through 11 beautiful doll tableaux with traditional elements.",
      color: "bg-maroon-100",
    },
    {
      emoji: "🛕",
      title: "Divya Desam",
      desc: "Sacred temple legends from Srirangam, Tirupati, and other holy sites brought to life through storytelling.",
      color: "bg-temple-gold/20",
    },
    {
      emoji: "🪔",
      title: "Festivals & Golu",
      desc: "Annual celebrations including Janmashtami setups, Navaratri Golu themes, and traditional festival displays.",
      color: "bg-saffron-100",
    },
    {
      emoji: "🌸",
      title: "Rangoli",
      desc: "Traditional rangoli and poo kolam created for temple festivals and special occasions with floral artistry.",
      color: "bg-maroon-100",
    },
    {
      emoji: "🎊",
      title: "Events",
      desc: "Custom commissions for weddings, corporate events, and special occasions featuring themed depictions.",
      color: "bg-temple-gold/20",
    },
  ];

  return (
    <section ref={containerRef} className="py-20 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8 }}
            className="h-px bg-gradient-to-r from-transparent via-temple-gold to-transparent mb-6"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="font-display text-3xl md:text-4xl text-cream-950 mb-2"
          >
            Gallery Categories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cream-600"
          >
            Explore different aspects of devotional art
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-cream-200"
            >
              <div
                className={`w-12 h-12 rounded-full ${cat.color} flex items-center justify-center mb-4`}
              >
                <span className="text-2xl">{cat.emoji}</span>
              </div>
              <h3 className="font-display text-xl text-cream-950 mb-2">
                {cat.title}
              </h3>
              <p className="text-cream-600 text-sm leading-relaxed">
                {cat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
