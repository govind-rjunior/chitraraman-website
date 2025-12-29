"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import VideoCard from "@/components/VideoCard";
import { featuredVideos } from "@/data/videos";

const highlights = [
  {
    label: "Tiruppavai",
    desc: "30 pasurams (Tamil + English) depicted in handmade dolls",
  },
  { label: "Varanam Ayiram", desc: "11 pasurams depicted in handmade dolls" },
  { label: "Alwar Stories", desc: "Life histories on YouTube series" },
  {
    label: "Festival Depictions",
    desc: "Janmashtami, Navaratri Golu and more",
  },
  { label: "Rangoli & Poo Kolam", desc: "Temple festivals and events" },
];

const seriesCards = [
  {
    title: "Tiruppavai (30 Pasurams)",
    desc: "A devotional Margazhi journey with Andal's verses depicted through soft-toy scenes.",
    color: "from-saffron-500 to-saffron-600",
    href: "/series/tiruppavai",
  },
  {
    title: "Varanam Ayiram (11 Pasurams)",
    desc: "Andal's dream wedding sequence told through handmade doll tableaux.",
    color: "from-maroon-500 to-maroon-600",
    href: "/series/varanam-ayiram",
  },
  {
    title: "Divya Desam Depictions",
    desc: "Stories of sacred temples and legends brought alive with dolls and narration.",
    color: "from-temple-copper to-temple-bronze",
    href: "/series/divya-desam",
  },
  {
    title: "Festivals & Golu",
    desc: "Annual festival setups, themes, and storytelling presentations.",
    color: "from-temple-gold to-saffron-500",
    href: "/series/festivals",
  },
];

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-[85vh] flex items-center bg-cream-50 overflow-hidden">
      {/* Floating mandala patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{
            rotate: { duration: 60, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity },
          }}
          className="absolute top-10 right-20 w-96 h-96 opacity-[0.03]"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full text-temple-gold">
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <circle
              cx="100"
              cy="100"
              r="70"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <circle
              cx="100"
              cy="100"
              r="50"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            {[...Array(16)].map((_, i) => (
              <line
                key={i}
                x1="100"
                y1="100"
                x2={100 + 90 * Math.cos((i * 22.5 * Math.PI) / 180)}
                y2={100 + 90 * Math.sin((i * 22.5 * Math.PI) / 180)}
                stroke="currentColor"
                strokeWidth="0.5"
              />
            ))}
          </svg>
        </motion.div>

        <motion.div
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{
            rotate: { duration: 80, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity },
          }}
          className="absolute bottom-20 left-10 w-80 h-80 opacity-[0.03]"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full text-maroon-500">
            <circle
              cx="100"
              cy="100"
              r="85"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <circle
              cx="100"
              cy="100"
              r="60"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </svg>
        </motion.div>
      </div>

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-temple-gold/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-saffron-500/10 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div style={{ y, opacity }} className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-saffron-100 rounded-full text-saffron-700 text-sm"
            >
              <Sparkles size={16} />
              <span>Devotional Storytelling Through Art</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-cream-950 leading-tight"
            >
              Handmade Dolls that Bring{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-temple-gold to-temple-copper">
                Vaishnavite Stories
              </span>{" "}
              to Life
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-cream-700 leading-relaxed max-w-xl"
            >
              Chitra Raman creates handmade doll depictions of Vaishnavite
              culture—Tiruppavai, Varanam Ayiram, Divya Desam stories, and
              festival scenes—along with rangoli and cultural presentations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/creations"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-temple-gold to-temple-copper text-white font-medium rounded-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Explore Creations <ArrowRight size={20} />
              </Link>
              <Link
                href="/videos"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-cream-300 text-cream-800 font-medium rounded-lg hover:border-temple-gold hover:text-temple-gold transition-all"
              >
                <Play size={20} /> Watch Videos
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://i.ytimg.com/vi/hRhW-eO3WfQ/maxresdefault.jpg"
                alt="Tiruppavai soft toy depiction"
                width={800}
                height={600}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-display text-xl">
                  Tiruppavai Pasuram Depiction
                </p>
                <p className="text-cream-200 text-sm">
                  Fine Arts Society, Mumbai
                </p>
              </div>
            </div>

            <motion.div
              animate={{ rotate: [6, 12, 6], y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-temple-gold to-saffron-500 rounded-xl shadow-lg flex items-center justify-center"
            >
              <span className="text-3xl">🪔</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function QuickHighlights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 bg-cream-100 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(120 53 15) 1px, transparent 0)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="bg-white rounded-xl p-5 shadow-sm border border-cream-200 h-full">
                <h3 className="font-display text-lg text-cream-950 mb-1">
                  {item.label}
                </h3>
                <p className="text-cream-600 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedSeries() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-cream-50 relative overflow-hidden">
      {/* Flowing particles */}
      <div className="absolute inset-0 pointer-events-none">
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
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            Featured Series
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cream-600"
          >
            Explore devotional storytelling through handmade doll depictions
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {seriesCards.map((series, idx) => (
            <motion.div
              key={series.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link
                href={series.href}
                className="group block bg-white rounded-xl overflow-hidden shadow-md border border-cream-200 h-full"
              >
                <motion.div
                  className={`h-2 bg-gradient-to-r ${series.color}`}
                  whileHover={{ height: 8 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="p-6">
                  <h3 className="font-display text-xl text-cream-950 mb-3 group-hover:text-temple-gold transition-colors">
                    {series.title}
                  </h3>
                  <p className="text-cream-600 text-sm leading-relaxed">
                    {series.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedVideos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              className="font-display text-3xl md:text-4xl text-cream-950 mb-2"
            >
              Featured Videos
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="text-cream-600"
            >
              Watch devotional stories come alive
            </motion.p>
          </div>
          <Link
            href="/videos"
            className="inline-flex items-center gap-2 text-temple-gold hover:text-temple-copper font-medium transition-colors mt-4 sm:mt-0"
          >
            View all videos <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVideos.slice(0, 6).map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <VideoCard video={video} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="py-20 bg-cream-950 text-cream-100 relative overflow-hidden"
    >
      <motion.div
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-4xl mb-3">
              About Chitra Raman
            </h2>
            <p className="text-temple-gold mb-6">
              Creating devotional art that makes spiritual stories accessible to
              all
            </p>

            <div className="space-y-4 text-cream-300">
              <p>
                With a strong grounding in traditional arts and storytelling,
                Chitra's creative practice includes rangoli in colors and
                flowers, handmade doll depictions, and curated festival
                displays.
              </p>
              <p>
                Her depictions have been presented in cultural venues and homes,
                and shared widely through her YouTube channel, making
                Vaishnavite stories accessible to children, families, and
                audiences across generations.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 border-2 border-temple-gold text-temple-gold font-medium rounded-lg hover:bg-temple-gold hover:text-cream-950 transition-all"
            >
              Learn More <ArrowRight size={20} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <Image
              src="https://i.ytimg.com/vi/v0KX_ePuSgo/maxresdefault.jpg"
              alt="Navaratri Golu"
              width={400}
              height={400}
              className="rounded-xl aspect-square object-cover"
            />
            <Image
              src="https://i.ytimg.com/vi/KkapuxPIDHQ/maxresdefault.jpg"
              alt="Rangoli"
              width={400}
              height={400}
              className="rounded-xl aspect-square object-cover mt-8"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-saffron-500 via-temple-gold to-temple-copper text-white relative overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl mb-4"
        >
          Interested in a Custom Depiction or Workshop?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
        >
          Whether it's for a festival celebration, wedding, school program, or
          temple event, let's create something meaningful together.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-temple-copper font-medium rounded-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Get in Touch <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
