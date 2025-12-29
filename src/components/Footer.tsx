import Link from 'next/link'
import { Mail, MapPin, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-cream-950 text-cream-200">
      {/* Decorative border */}
      <div className="h-1 bg-gradient-to-r from-temple-gold via-saffron-500 to-temple-copper" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-display text-2xl text-temple-gold mb-4">Chitra Raman</h3>
            <p className="text-cream-400 text-sm leading-relaxed">
              Handmade dolls that bring Vaishnavite stories to life. 
              Creating devotional storytelling through soft-toy depictions, 
              rangoli, and cultural presentations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-cream-100 mb-4">Explore</h4>
            <ul className="space-y-2">
              {[
                { href: '/creations', label: 'Gallery' },
                { href: '/videos', label: 'Videos' },
                { href: '/services', label: 'Services' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-cream-400 hover:text-temple-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg text-cream-100 mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-temple-gold" />
                <a 
                  href="mailto:chitraraman2008@gmail.com"
                  className="text-cream-400 hover:text-temple-gold transition-colors text-sm"
                >
                  chitraraman2008@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={18} className="text-temple-gold" />
                <span className="text-cream-400 text-sm">Mumbai, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Youtube size={18} className="text-temple-gold" />
                <a 
                  href="https://www.youtube.com/@chitraraman2008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream-400 hover:text-temple-gold transition-colors text-sm"
                >
                  @chitraraman2008
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cream-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-cream-500 text-sm">
              © 2025 Chitra Raman. All rights reserved.
            </p>
            <p className="text-cream-600 text-xs italic">
              Content and depictions are created with devotion and cultural respect.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
