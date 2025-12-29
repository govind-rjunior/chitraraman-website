'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { GalleryItem } from '@/data/gallery'

interface GalleryCardProps {
  item: GalleryItem
}

export default function GalleryCard({ item }: GalleryCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div 
        className="group cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md img-zoom">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
            <h3 className="font-display text-lg text-white">{item.title}</h3>
            <p className="text-cream-200 text-sm">{item.category}</p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsOpen(false)}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 text-white hover:text-temple-gold transition-colors"
            aria-label="Close"
          >
            <X size={32} />
          </button>
          
          <div 
            className="max-w-4xl w-full bg-cream-50 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full max-h-[60vh] object-contain bg-black"
            />
            <div className="p-6">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-saffron-100 text-saffron-700 rounded-full mb-3">
                {item.category}
              </span>
              <h3 className="font-display text-2xl text-cream-950 mb-2">
                {item.title}
              </h3>
              <p className="text-cream-700 mb-4">
                {item.description}
              </p>
              {(item.year || item.venue) && (
                <div className="flex items-center gap-2 text-sm text-cream-600">
                  {item.year && <span>{item.year}</span>}
                  {item.year && item.venue && <span>•</span>}
                  {item.venue && <span>{item.venue}</span>}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
