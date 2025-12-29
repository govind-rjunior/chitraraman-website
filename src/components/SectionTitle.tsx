interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionTitle({ title, subtitle, centered = false, light = false }: SectionTitleProps) {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      <h2 className={`font-display text-3xl md:text-4xl mb-3 ${light ? 'text-cream-100' : 'text-cream-950'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${light ? 'text-cream-300' : 'text-cream-700'} max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-20 bg-gradient-to-r from-temple-gold to-saffron-500 rounded-full ${centered ? 'mx-auto' : ''}`} />
    </div>
  )
}
