"use client";
import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { Video } from "@/data/videos";

interface VideoCardProps {
  video: Video;
  showCategory?: boolean;
}

export default function VideoCard({
  video,
  showCategory = true,
}: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Try maxresdefault first, fallback to hqdefault
  const thumbnailUrl = imageError
    ? `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`
    : `https://i.ytimg.com/vi/${video.youtubeId}/maxresdefault.jpg`;

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-md border border-cream-200 group h-full flex flex-col"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-video overflow-hidden">
        {isPlaying ? (
          <motion.iframe
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <>
            <div className="relative w-full h-full">
              <img
                src={thumbnailUrl}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={() => setImageError(true)}
                loading="lazy"
              />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Play button */}
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center"
              aria-label={`Play ${video.title}`}
            >
              <motion.div
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                {/* Pulsing ring effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full bg-temple-gold"
                />

                {/* Main play button */}
                <div className="relative w-16 h-16 rounded-full bg-temple-gold/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </div>
              </motion.div>
            </button>

            {/* Video duration badge (optional - if you have duration data) */}
            {video.year && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute top-3 right-3 px-2 py-1 bg-black/70 text-white text-xs rounded backdrop-blur-sm"
              >
                {video.year}
              </motion.div>
            )}
          </>
        )}
      </div>

      <div className="p-5 flex-1 flex flex-col">
        {showCategory && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-block px-3 py-1 text-xs font-medium bg-saffron-100 text-saffron-700 rounded-full mb-3 w-fit"
          >
            {video.category}
          </motion.span>
        )}

        <h3 className="font-display text-lg text-cream-950 mb-2 line-clamp-2 group-hover:text-temple-gold transition-colors duration-300">
          {video.title}
        </h3>

        <p className="text-cream-700 text-sm line-clamp-2 mb-3 flex-1">
          {video.brief}
        </p>

        {(video.year || video.venue) && (
          <div className="flex items-center gap-2 text-xs text-cream-600 pt-3 border-t border-cream-100 mt-auto">
            {video.year && (
              <span className="flex items-center gap-1">📅 {video.year}</span>
            )}
            {video.year && video.venue && <span>•</span>}
            {video.venue && (
              <span className="flex items-center gap-1">📍 {video.venue}</span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
