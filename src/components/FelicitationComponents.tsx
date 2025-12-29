"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Award, Play, ExternalLink } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";

// Animated Section Title
function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="text-center mb-12">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-px bg-gradient-to-r from-transparent via-temple-gold to-transparent mb-6"
      />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="font-display text-3xl md:text-4xl text-cream-950 mb-2"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-cream-600"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}

// Hero Section with Parallax
export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative py-20 md:py-32 bg-cream-100 overflow-hidden">
      {/* Animated gradient bar */}
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
            <circle
              cx="100"
              cy="100"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-saffron-500"
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

        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 60, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -bottom-32 -left-32 w-96 h-96 opacity-5"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-maroon-500"
            />
            <circle
              cx="100"
              cy="100"
              r="70"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-temple-gold"
            />
            <circle
              cx="100"
              cy="100"
              r="50"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-saffron-500"
            />
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
          <span className="inline-block">Felicitation</span>
          <span className="text-temple-gold"> & </span>
          <span className="inline-block">Awards</span>
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
          Recognition and felicitation received for cultural presentations,
          festival depictions, and storytelling work over the years.
        </motion.p>
      </motion.div>
    </section>
  );
}

// Awards Section with Staggered Reveal
export function AwardsSection({ awards }: { awards: any[] }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="py-20 bg-cream-50 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(120 53 15) 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionTitle
          title="Awards"
          subtitle="Competitive recognition for excellence"
        />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
              }
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-cream-200 group h-full flex flex-col">
                {/* Image Grid with Reveal */}
                <div className="grid grid-cols-2 gap-px bg-cream-100 relative">
                  <div className="relative overflow-hidden">
                    <motion.div
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={
                        isInView
                          ? { scale: 1, opacity: 1 }
                          : { scale: 1.2, opacity: 0 }
                      }
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                    >
                      <Image
                        src={award.photo}
                        alt={`${award.title} - Photo`}
                        width={600}
                        height={450}
                        className="w-full h-auto"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-br from-temple-gold/10 to-transparent" />
                  </div>
                  <div className="relative overflow-hidden">
                    <motion.div
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={
                        isInView
                          ? { scale: 1, opacity: 1 }
                          : { scale: 1.2, opacity: 0 }
                      }
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                    >
                      <Image
                        src={award.certificate}
                        alt={`${award.title} - Certificate`}
                        width={600}
                        height={450}
                        className="w-full h-auto"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-bl from-maroon-500/10 to-transparent" />
                  </div>

                  {/* Watch Video Button */}
                  {award.videoUrl && (
                    <a
                      href={award.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-temple-gold to-temple-copper text-white rounded-full font-medium transition-all hover:shadow-xl hover:scale-105 z-10"
                    >
                      <Play size={16} fill="currentColor" />
                      Watch Video
                    </a>
                  )}
                </div>

                {/* Content area */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative">
                      <motion.div
                        animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Award size={24} className="text-temple-gold" />
                      </motion.div>
                      <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-temple-gold/30 rounded-full blur-md"
                      />
                    </div>
                    <span className="text-temple-gold font-semibold text-lg">
                      {award.year}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl text-cream-950 mb-3 leading-tight">
                    {award.title}
                  </h3>
                  <p className="text-cream-600 mb-4 leading-relaxed">
                    {award.description}
                  </p>
                  <p className="text-sm text-cream-500">
                    Organized by:{" "}
                    <span className="font-medium text-cream-700">
                      {award.organizer}
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Felicitations Masonry Layout
export function FelicitationsSection({
  felicitations,
}: {
  felicitations: any[];
}) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <section
      ref={containerRef}
      className="py-20 bg-cream-100 relative overflow-hidden"
    >
      {/* Flowing particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-temple-gold/20 rounded-full"
            initial={{
              x: `${Math.random() * 100}%`,
              y: -20,
            }}
            animate={{
              y: "120vh",
            }}
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
        <SectionTitle
          title="Felicitations"
          subtitle="Blessings from revered personalities"
        />

        {/* CSS Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {felicitations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="break-inside-avoid mb-6"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-cream-200 group">
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-6">
                  <h3 className="font-display text-lg text-cream-950 mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-cream-600 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-4 border-t border-cream-100">
                    <p className="text-sm font-semibold text-temple-gold mb-1">
                      {item.felicitatedBy}
                    </p>
                    {item.venue && (
                      <p className="text-xs text-cream-500">{item.venue}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Media Section with Creative Cards
export function MediaSection({ features }: { features: any[] }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <section
      ref={containerRef}
      className="py-20 bg-cream-50 relative overflow-hidden"
    >
      {/* Radial gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-temple-gold/5 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionTitle
          title="Media Features"
          subtitle="Coverage in media channels"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.a
              key={feature.id}
              href={feature.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg border border-cream-200 overflow-hidden"
            >
              {/* Background gradient that moves on scroll */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-red-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </div>
                    {/* Pulsing ring */}
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 border-2 border-red-400 rounded-2xl"
                    />
                  </div>

                  <ExternalLink
                    size={20}
                    className="text-cream-400 group-hover:text-temple-gold transition-colors"
                  />
                </div>

                <h3 className="font-display text-2xl text-cream-950 mb-3 group-hover:text-temple-gold transition-colors">
                  {feature.title}
                </h3>
                <p className="text-cream-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative element */}
                <motion.div
                  className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-temple-gold/10 to-transparent rounded-tl-full"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
