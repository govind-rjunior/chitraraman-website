import { Mail, MapPin, Youtube, Phone } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 bg-cream-100">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-temple-gold via-saffron-500 to-maroon-500" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl md:text-5xl text-cream-950 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-cream-700 max-w-3xl">
            For workshops, cultural sessions, event depictions, rangoli, or collaborations, 
            please share your requirement and preferred date. Chitra will respond with 
            availability and next steps.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-display text-2xl text-cream-950 mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-temple-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-temple-gold" size={22} />
                  </div>
                  <div>
                    <h3 className="font-medium text-cream-950">Email</h3>
                    <a 
                      href="mailto:chitraraman2008@gmail.com"
                      className="text-cream-600 hover:text-temple-gold transition-colors"
                    >
                      chitraraman2008@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-temple-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-temple-gold" size={22} />
                  </div>
                  <div>
                    <h3 className="font-medium text-cream-950">Location</h3>
                    <p className="text-cream-600">Mumbai, India</p>
                    <p className="text-cream-500 text-sm mt-1">
                      In-person sessions available in Mumbai
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-temple-gold/10 flex items-center justify-center flex-shrink-0">
                    <Youtube className="text-temple-gold" size={22} />
                  </div>
                  <div>
                    <h3 className="font-medium text-cream-950">YouTube</h3>
                    <a 
                      href="https://www.youtube.com/@chitraraman2008"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cream-600 hover:text-temple-gold transition-colors"
                    >
                      @chitraraman2008
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Info Box */}
              <div className="mt-10 p-6 bg-saffron-50 rounded-xl border border-saffron-200">
                <h3 className="font-display text-lg text-cream-950 mb-3">
                  Response Time
                </h3>
                <p className="text-cream-600 text-sm">
                  Typically responds within 2-3 business days. For urgent requests, 
                  please mention in the message.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-md border border-cream-200">
                <h2 className="font-display text-2xl text-cream-950 mb-6">
                  Send a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Reminder */}
      <section className="py-12 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-display text-xl text-cream-950 mb-6 text-center">
            Services Available
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Custom Doll Depictions',
              'Festival & Golu Curation',
              'Cultural Storytelling',
              'Workshops',
              'Rangoli / Poo Kolam',
            ].map((service) => (
              <span
                key={service}
                className="px-4 py-2 bg-white rounded-full text-sm text-cream-700 border border-cream-200"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
