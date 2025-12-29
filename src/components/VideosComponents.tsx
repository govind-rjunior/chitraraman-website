"use client";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import VideoCard from "@/components/VideoCard";
import { Video } from "@/data/videos";

export function VideosHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative py-20 bg-cream-100 overflow-hidden">
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-temple-gold via-saffron-500 to-maroon-500"
      />

      {/* Floating video play icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <svg
              className="w-16 h-16 text-temple-gold"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </motion.div>
        ))}
      </div>

      <motion.div
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl text-cream-950 mb-6 leading-tight"
        >
          Video Gallery
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
          Watch Chitra Raman's handmade doll depictions, festival presentations,
          divya desam stories, and rangoli work. Use the filters to find videos
          by category.
        </motion.p>
      </motion.div>
    </section>
  );
}

export function VideosGrid({
  videos,
  categories,
}: {
  videos: Video[];
  categories: string[];
}) {
  const [activeCategory, setActiveCategory] = useState("All");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const filteredVideos =
    activeCategory === "All"
      ? videos
      : videos.filter((video) => video.category === activeCategory);

  return (
    <section
      ref={containerRef}
      className="py-20 bg-cream-50 relative overflow-hidden"
    >
      {/* Flowing particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-temple-gold/20 rounded-full"
            initial={{ x: `${Math.random() * 100}%`, y: -20 }}
            animate={{ y: "120vh" }}
            transition={{
              duration: 10 + Math.random() * 15,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
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

        {/* Video count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          className="text-cream-600 mb-6"
        >
          Showing {filteredVideos.length} video
          {filteredVideos.length !== 1 ? "s" : ""}
        </motion.p>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <VideoCard
                video={video}
                showCategory={activeCategory === "All"}
              />
            </motion.div>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-16">
            <p className="text-cream-600">No videos found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export function YouTubeCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-cream-950 relative overflow-hidden">
      <motion.div
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* YouTube icon decoration */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-10 right-10 w-64 h-64"
      >
        <svg
          className="w-full h-full text-red-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="font-display text-3xl md:text-4xl text-cream-100 mb-4"
        >
          Subscribe for More Content
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2 }}
          className="text-cream-400 mb-8 text-lg"
        >
          Visit the YouTube channel for the complete collection of devotional
          storytelling, including new uploads and full-length presentations.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://www.youtube.com/@chitraraman2008"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all hover:shadow-xl hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Subscribe on YouTube
          </a>
        </motion.div>
      </div>
    </section>
  );
}
