"use client";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export function ServicesHero() {
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

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 50, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
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
            <circle
              cx="100"
              cy="100"
              r="60"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <circle
              cx="100"
              cy="100"
              r="40"
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
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl text-cream-950 mb-6 leading-tight"
        >
          Services
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
          Chitra Raman offers handmade doll depictions, rangoli work, and
          cultural storytelling sessions for homes, schools, temples, and
          events. Sessions can be conducted in person (Mumbai) or online based
          on availability.
        </motion.p>
      </motion.div>
    </section>
  );
}

export function ServicesGrid({ services }: { services: any[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-cream-50 relative overflow-hidden">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-md border border-cream-200 h-full flex flex-col">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1 + 0.3,
                    type: "spring",
                  }}
                  className="text-4xl mb-4"
                >
                  {service.icon}
                </motion.div>
                <h3 className="font-display text-xl text-cream-950 mb-3">
                  {service.title}
                </h3>
                <p className="text-cream-600 mb-6 flex-1">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.details.map((detail: string, idx: number) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                      }
                      transition={{ duration: 0.4, delay: idx * 0.1 + 0.5 }}
                      className="flex items-start gap-2 text-sm text-cream-700"
                    >
                      <CheckCircle
                        size={16}
                        className="text-temple-gold mt-0.5 flex-shrink-0"
                      />
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EngagementSteps({ steps }: { steps: any[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-cream-100 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(120 53 15) 1px, transparent 0)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            How to Engage
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cream-600"
          >
            Simple steps to get started with your project
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Connector line with animation */}
              {step.step < steps.length && (
                <motion.div
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.15 + 0.5 }}
                  className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-temple-gold to-transparent"
                />
              )}

              <div className="bg-white rounded-xl p-6 shadow-sm border border-cream-200 text-center relative h-full">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={
                    isInView
                      ? { scale: 1, rotate: 0 }
                      : { scale: 0, rotate: -180 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.15 + 0.2,
                    type: "spring",
                  }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-temple-gold to-temple-copper text-white font-display text-xl flex items-center justify-center mx-auto mb-4"
                >
                  {step.step}
                </motion.div>
                <h4 className="font-display text-lg text-cream-950 mb-2">
                  {step.title}
                </h4>
                <p className="text-cream-600 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PerfectFor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const occasions = [
    {
      title: "Home Celebrations",
      desc: "Navaratri Golu, Janmashtami, and family gatherings",
    },
    {
      title: "Temple Events",
      desc: "Brahmotsavam, special pujas, and festival celebrations",
    },
    {
      title: "Schools & Institutions",
      desc: "Cultural programs and educational sessions",
    },
    {
      title: "Weddings & Events",
      desc: "Custom decorations and themed setups",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-cream-50">
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
            Perfect For
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cream-600"
          >
            Occasions and venues where devotional storytelling creates impact
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {occasions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-cream-200"
            >
              <h4 className="font-display text-lg text-cream-950 mb-2">
                {item.title}
              </h4>
              <p className="text-cream-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonial() {
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 1.5 }}
          animate={
            isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 1.5 }
          }
          transition={{ duration: 0.8 }}
          className="text-[200px] font-serif text-temple-gold leading-none"
        >
          "
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-cream-300 leading-relaxed -mt-20 mb-6"
        >
          Every depiction is created with devotion and attention to detail.
          Whether it's a simple home setup or an elaborate event installation,
          the goal is always to make sacred stories come alive for all ages.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-temple-gold font-display text-lg"
        >
          — Chitra Raman
        </motion.p>

        <div className="mt-8 flex justify-center gap-2">
          {[0, 0.2, 0.4].map((delay, i) => (
            <motion.span
              key={i}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: delay + 0.6 }}
              className="w-2 h-2 rounded-full bg-temple-gold"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-r from-temple-gold to-saffron-500 relative overflow-hidden"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="font-display text-2xl md:text-3xl text-white mb-4"
        >
          Ready to Create Something Special?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/90 mb-8 text-lg"
        >
          Share your requirements and let's discuss how to bring your vision to
          life.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-temple-copper font-medium rounded-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Get in Touch
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
