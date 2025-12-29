"use client";
import { useState, useRef, ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Play, MapPin } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

// Shared Hero with Back Button
export function SeriesHero({
  title,
  subtitle,
  description,
  gradientColor,
  backLink = "/series",
}: {
  title: string;
  subtitle?: string;
  description: string;
  gradientColor: string;
  backLink?: string;
}) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <section className="relative py-20 bg-cream-100 overflow-hidden">
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientColor}`}
      />

      {/* Floating patterns */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{
            rotate: { duration: 50, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity },
          }}
          className="absolute -top-20 -right-20 w-80 h-80 opacity-[0.04]"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full text-temple-gold">
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
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
              />
            ))}
          </svg>
        </motion.div>
      </div>

      <motion.div
        style={{ y }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href={backLink}
            className="inline-flex items-center gap-2 text-cream-600 hover:text-temple-gold mb-6 transition-colors"
          >
            <ArrowLeft size={20} /> Back to Series
          </Link>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl text-cream-950 mb-4 leading-tight"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-temple-gold mb-4"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-1 w-24 bg-gradient-to-r from-temple-gold to-saffron-500 mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl text-cream-700 max-w-3xl leading-relaxed"
        >
          {description}
        </motion.p>
      </motion.div>
    </section>
  );
}

// Featured Video Section
export function FeaturedVideo({
  videoId,
  title,
  subtitle,
}: {
  videoId: string;
  title: string;
  subtitle?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16 bg-cream-950 relative overflow-hidden">
      <motion.div
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="font-display text-2xl md:text-3xl text-cream-100 mb-6 text-center"
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-video rounded-xl overflow-hidden shadow-2xl"
        >
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </motion.div>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
            className="text-cream-400 text-center mt-4 text-sm"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}

// Video Grid for Series Pages
export function VideoGrid({ videos, title }: { videos: any[]; title: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16 bg-cream-100 relative overflow-hidden">
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
          {title}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-cream-200 group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={`https://i.ytimg.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (
                      e.target as HTMLImageElement
                    ).src = `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`;
                  }}
                />
                <a
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-temple-gold/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                  </div>
                </a>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg text-cream-950 mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-cream-600 text-sm mb-3 line-clamp-2">
                  {video.brief}
                </p>
                {(video.year || video.venue) && (
                  <div className="text-xs text-cream-500">
                    {video.year && <span>📅 {video.year}</span>}
                    {video.year && video.venue && <span> • </span>}
                    {video.venue && <span>📍 {video.venue}</span>}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Info Box Component
export function InfoBox({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      className="bg-white rounded-xl p-6 shadow-sm border border-cream-200 max-w-2xl"
    >
      <h3 className="font-display text-lg text-cream-950 mb-3">{title}</h3>
      {children}
    </motion.div>
  );
}

// Pasuram/Item Card
export function ItemCard({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

// Grid of Icon Cards
export function IconCardGrid({
  items,
}: {
  items: { icon: string; title: string; desc: string }[];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item, idx) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.4, delay: idx * 0.1 }}
          className="bg-white rounded-xl p-5 shadow-sm border border-cream-200 text-center"
        >
          <div className="text-3xl mb-2">{item.icon}</div>
          <h3 className="font-display text-lg text-cream-950 mb-1">
            {item.title}
          </h3>
          <p className="text-cream-600 text-sm">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

// Filter Buttons
export function FilterButtons({
  items,
  active,
  onSelect,
}: {
  items: { id: string; name: string; count?: number }[];
  active: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, idx) => (
        <motion.button
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.05 }}
          onClick={() => onSelect(item.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            active === item.id
              ? "bg-gradient-to-r from-temple-gold to-temple-copper text-white shadow-lg scale-105"
              : "bg-cream-100 text-cream-700 hover:bg-cream-200"
          }`}
        >
          {item.name} {item.count !== undefined && `(${item.count})`}
        </motion.button>
      ))}
    </div>
  );
}
