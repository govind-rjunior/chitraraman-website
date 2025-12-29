'use client'

interface FilterButtonsProps {
  categories: string[]
  activeCategory: string
  onSelect: (category: string) => void
}

export default function FilterButtons({ categories, activeCategory, onSelect }: FilterButtonsProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeCategory === category
              ? 'bg-gradient-to-r from-temple-gold to-temple-copper text-white shadow-md'
              : 'bg-cream-100 text-cream-700 hover:bg-cream-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
