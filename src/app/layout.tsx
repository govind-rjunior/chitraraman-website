import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Chitra Raman | Handmade Dolls & Vaishnavite Storytelling',
  description: 'Chitra Raman creates handmade doll depictions of Vaishnavite culture—Tiruppavai, Varanam Ayiram, Divya Desam stories, and festival scenes—along with rangoli and cultural presentations for families, schools, and events.',
  keywords: 'Chitra Raman, handmade dolls, soft toy storytelling, Tiruppavai, Varanam Ayiram, Vaishnavite culture, Divya Desam, rangoli, Navaratri Golu, Indian festivals, cultural presentations',
  authors: [{ name: 'Chitra Raman' }],
  openGraph: {
    title: 'Chitra Raman | Handmade Dolls & Vaishnavite Storytelling',
    description: 'Handmade doll depictions that bring Vaishnavite stories to life',
    url: 'https://chitraraman.co',
    siteName: 'Chitra Raman',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#d4a847" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
