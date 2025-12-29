"use client";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

const series = [
  {
    id: "tiruppavai",
    title: "Tiruppavai",
    subtitle: "30 Pasurams by Andal",
    description:
      "A devotional Margazhi journey with Andal's verses depicted through soft-toy scenes.",
    color: "from-saffron-500 to-saffron-600",
    icon: "🙏",
    href: "/series/tiruppavai",
  },
  {
    id: "varanam-ayiram",
    title: "Varanam Ayiram",
    subtitle: "11 Pasurams - Andal's Dream Wedding",
    description:
      "Andal's dream wedding sequence to Krishna told through handmade doll tableaux.",
    color: "from-maroon-500 to-maroon-600",
    icon: "💒",
    href: "/series/varanam-ayiram",
  },
  {
    id: "alwars",
    title: "Alwars Life Histories",
    subtitle: "12 Saints of Sri Vaishnavism",
    description:
      "Discover the Alwars—saints whose devotion and pasurams form a cornerstone of tradition.",
    color: "from-temple-gold to-temple-copper",
    icon: "📜",
    href: "/series/alwars",
  },
  {
    id: "divya-desam",
    title: "Divya Desam Depictions",
    subtitle: "Sacred Temple Stories",
    description:
      "Stories of the 108 sacred temples brought alive with handmade dolls and narration.",
    color: "from-temple-copper to-temple-bronze",
    icon: "🛕",
    href: "/series/divya-desam",
  },
  {
    id: "festivals",
    title: "Festivals & Golu",
    subtitle: "Annual Celebrations",
    description:
      "Festival depictions—Janmashtami setups, Navaratri Golu themes, and celebrations.",
    color: "from-saffron-400 to-saffron-500",
    icon: "🪔",
    href: "/series/festivals",
  },
  {
    id: "rangoli",
    title: "Rangoli",
    subtitle: "Traditional Patterns & Poo Kolam",
    description:
      "Traditional rangoli created for temple festivals and special occasions.",
    color: "from-maroon-400 to-maroon-500",
    icon: "🌸",
    href: "/series/rangoli",
  },
];

export default function SeriesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <section className="relative py-20 bg-cream-100 overflow-hidden">
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-temple-gold via-saffron-500 to-maroon-500"
        />

        {/* Floating pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-80 h-80 opacity-[0.03]"
          >
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full text-temple-gold"
            >
              {[...Array(8)].map((_, i) => (
                <circle
                  key={i}
                  cx="100"
                  cy="100"
                  r={20 + i * 10}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              ))}
            </svg>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl text-cream-950 mb-6"
          >
            Series
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
            className="text-xl md:text-2xl text-cream-700 max-w-3xl"
          >
            Explore Chitra Raman's storytelling series—pasurams, legends, and
            festivals—depicted through handmade dolls and narration.
          </motion.p>
        </div>
      </section>

      <section ref={ref} className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {series.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-md border border-cream-200 h-full"
                >
                  <motion.div
                    className={`h-2 bg-gradient-to-r ${item.color}`}
                    whileHover={{ height: 8 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="p-6">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h2 className="font-display text-2xl text-cream-950 mb-1 group-hover:text-temple-gold transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-sm text-temple-gold mb-3">
                      {item.subtitle}
                    </p>
                    <p className="text-cream-600 text-sm mb-4">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-temple-gold font-medium text-sm">
                      Explore <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
