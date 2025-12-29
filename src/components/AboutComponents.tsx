"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const creations = [
  "Handmade doll depictions of Tiruppavai (30 pasurams) in Tamil and English",
  "Varanam Ayiram (11 pasurams) depicted through scenes and narration",
  "Divya Desam and temple legends (Srirangam, Tirupati, Anantha Padmanabha and more)",
  "Festival setups: Janmashtami, Navaratri Golu themes, Ramayana presentations",
  "Rangoli / Poo Kolam for temple festivals and special events",
];

const milestones = [
  { year: "2021", event: "Featured by IGK Tamil Channel for Navaratri Golu" },
  {
    year: "2022",
    event: "Brahmotsavam Rangoli at Ahobila Mutt Temple, Chembur",
  },
  {
    year: "2023",
    event: "Cultural presentations at Fine Arts Society, Mumbai",
  },
  {
    year: "2024",
    event: "First Prize - Navaratri Golu (Namba Aathu Periyava Channel)",
  },
  {
    year: "2025",
    event: "Second Prize - Navaratri Golu, continued YouTube series",
  },
];

export function TraditionalGreeting() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="py-12 bg-gradient-to-br from-maroon-500/10 via-cream-50 to-temple-gold/10 relative overflow-hidden"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-[0.03]"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full text-temple-gold">
          {[...Array(8)].map((_, i) => (
            <circle
              key={i}
              cx="100"
              cy="100"
              r={20 + i * 10}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
            />
          ))}
        </svg>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.8 }}
          className="inline-block"
        >
          <div className="w-32 h-32 mx-auto mb-6 rounded-xl overflow-hidden border-4 border-maroon-500 shadow-xl">
            <Image
              src="/greeting-image.png"
              alt="Mudaliandan Swamigal"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-2xl md:text-3xl text-maroon-600"
          >
            Mudaliandan SWAMIGAL tiruvadigale sharanam
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
}

export function AboutHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <section className="relative py-20 bg-cream-100 overflow-hidden">
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-temple-gold via-saffron-500 to-maroon-500"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-4xl md:text-5xl text-cream-950 mb-6"
            >
              About Chitra Raman
            </motion.h1>

            <div className="space-y-5 text-cream-700 text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Chitra Raman creates handmade dolls and soft-toy storytelling
                scenes that depict Vaishnavite culture—pasurams, Divya Desam
                legends, and festival narratives. Her work combines devotion,
                craft, and narration to make spiritual stories accessible to
                children, families, and audiences across generations.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                With a strong grounding in traditional arts and storytelling,
                Chitra's creative practice includes rangoli in colors and
                flowers, handmade doll depictions, and curated festival
                displays. Her depictions have been presented in cultural venues
                and homes, and shared widely through her YouTube channel.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/about-me-img.jpg"
                alt="Chitra Raman"
                width={600}
                height={750}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-3 border-2 border-temple-gold/30 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function WhatSheCreates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-cream-50 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(120 53 15) 1px, transparent 0)`,
          backgroundSize: "50px 50px",
        }}
      />

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
            What She Creates
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cream-600"
          >
            A diverse portfolio of devotional art and cultural presentations
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {creations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-cream-200 flex items-start gap-4"
            >
              <div className="w-2 h-2 rounded-full bg-temple-gold mt-2 flex-shrink-0" />
              <p className="text-cream-700">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyDolls() {
  return (
    <section className="py-20 bg-cream-950 text-cream-100 relative overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0, scale: 1.5 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[200px] font-serif text-temple-gold leading-none"
        >
          "
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl mb-6 -mt-20"
        >
          Why Dolls?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-cream-300 leading-relaxed"
        >
          Dolls make stories tangible. A scene with characters, props, and
          emotion can communicate meaning instantly—especially for children—and
          creates a memorable devotional experience for the whole family.
        </motion.p>

        <div className="mt-8 flex justify-center gap-2">
          {[0, 0.2, 0.4].map((delay, i) => (
            <motion.span
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay, duration: 0.3 }}
              className="w-2 h-2 rounded-full bg-temple-gold"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function JourneyTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-cream-100 relative overflow-hidden">
      {[...Array(8)].map((_, i) => (
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            Journey & Milestones
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cream-600"
          >
            A growing legacy of devotional storytelling
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-temple-gold to-saffron-500" />

          <div className="space-y-8">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: idx % 2 === 0 ? -50 : 50 }
                }
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`relative flex items-center gap-6 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-temple-gold border-4 border-cream-100 transform -translate-x-1/2 z-10" />

                <div
                  className={`flex-1 ml-12 md:ml-0 ${
                    idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-cream-200 inline-block">
                    <span className="text-temple-gold font-display text-xl">
                      {milestone.year}
                    </span>
                    <p className="text-cream-700 mt-1">{milestone.event}</p>
                  </div>
                </div>

                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Background() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <Image
              src="/gallery/krishna-janmashtami.jpg"
              alt="Ramayana Golu"
              width={300}
              height={300}
              className="rounded-xl aspect-square object-cover"
            />
            <Image
              src="/gallery/manavala-mamuni.jpg"
              alt="Ahobilam"
              width={300}
              height={300}
              className="rounded-xl aspect-square object-cover mt-6"
            />
            <Image
              src="/gallery/rangoli-temple-couple.jpg"
              alt="Poo Kolam"
              width={300}
              height={300}
              className="rounded-xl aspect-square object-cover -mt-6"
            />
            <Image
              src="/felicitations/podigai-tv.jpg"
              alt="Tirupati"
              width={300}
              height={300}
              className="rounded-xl aspect-square object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-cream-950 mb-6">
              Background
            </h2>

            <div className="space-y-5 text-cream-700">
              <p>
                An economics graduate and former HPCL professional, Chitra Raman
                discovered her calling in traditional arts and devotional
                storytelling. She learnt soft-toy creation and developed her
                unique style of depicting Vaishnavite narratives.
              </p>
              <p>
                Her work spans multiple mediums—from intricate rangoli designs
                to elaborate festival setups—each created with meticulous
                attention to detail and deep cultural reverence.
              </p>
              <p>
                Through her YouTube channel and live presentations, she has
                reached thousands of families, making complex spiritual stories
                accessible and engaging for all ages.
              </p>
            </div>

            <Link
              href="https://www.youtube.com/@chitraraman2008"
              target="_blank"
              className="inline-flex items-center gap-2 mt-8 text-temple-gold hover:text-temple-copper font-medium transition-colors"
            >
              Visit YouTube Channel <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function AboutCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-temple-gold to-saffron-500 relative overflow-hidden">
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
          className="font-display text-2xl md:text-3xl text-white mb-4"
        >
          Interested in a Cultural Program or Custom Depiction?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/90 mb-6"
        >
          If you would like Chitra to present a cultural program, conduct a
          workshop, or create a custom depiction for an event, please reach out.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-temple-copper font-medium rounded-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Contact Chitra <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
