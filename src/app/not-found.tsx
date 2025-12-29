"use client"

import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-cream-50">
      <div className="text-center px-4">
        {/* Decorative element */}
        <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-temple-gold/20 to-saffron-500/20 flex items-center justify-center">
          <span className="text-5xl">🪔</span>
        </div>
        
        <h1 className="font-display text-6xl text-temple-gold mb-4">404</h1>
        <h2 className="font-display text-2xl text-cream-950 mb-4">Page Not Found</h2>
        <p className="text-cream-600 mb-8 max-w-md mx-auto">
          The page you're looking for seems to have wandered off like a lost pasuram. 
          Let's guide you back to familiar territory.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-temple-gold to-temple-copper text-white font-medium rounded-lg hover:shadow-lg transition-all"
          >
            <Home size={20} />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-cream-300 text-cream-700 font-medium rounded-lg hover:border-temple-gold hover:text-temple-gold transition-all"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}
