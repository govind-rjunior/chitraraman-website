export interface Service {
  id: string
  title: string
  description: string
  details: string[]
  icon: string
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Handmade Doll Depictions (Custom)',
    description: 'Custom story, festival, or tableau setups for homes, temples, and events. Each depiction is crafted with devotion to bring spiritual stories to life.',
    details: [
      'Tiruppavai pasuram scenes',
      'Divya Desam temple legends',
      'Festival-specific themes',
      'Custom storylines on request',
    ],
    icon: '🎎',
  },
  {
    id: '2',
    title: 'Festival & Golu Curation',
    description: 'Complete theme planning, storytelling flow, and setup support for Navaratri Golu and festival displays.',
    details: [
      'Theme conceptualization',
      'Doll arrangement guidance',
      'Storytelling script preparation',
      'Setup assistance (in Mumbai)',
    ],
    icon: '🪔',
  },
  {
    id: '3',
    title: 'Cultural Storytelling Sessions',
    description: 'Short talks with visual depictions covering Divya Desam legends, pasurams, and festivals. Perfect for families, schools, and community gatherings.',
    details: [
      'Tiruppavai explanations',
      'Temple legend narrations',
      'Festival significance stories',
      'Interactive Q&A sessions',
    ],
    icon: '📖',
  },
  {
    id: '4',
    title: 'Workshops (Online / In-person)',
    description: 'Introduction to soft-toy depiction basics and rangoli/poo-kolam sessions. Beginner-friendly and suitable for all ages.',
    details: [
      'Basic doll-making techniques',
      'Scene composition principles',
      'Rangoli fundamentals',
      'Poo kolam patterns',
    ],
    icon: '✏️',
  },
  {
    id: '5',
    title: 'Rangoli / Poo Kolam',
    description: 'Temple and event rangoli design and execution based on theme and venue. Traditional patterns with floral artistry.',
    details: [
      'Traditional kolam designs',
      'Floral rangoli (Poo Kolam)',
      'Festival-specific patterns',
      'Temple event decorations',
    ],
    icon: '🌸',
  },
]

export const engagementSteps = [
  {
    step: 1,
    title: 'Share Your Requirement',
    description: 'Tell us about the event type, date, theme, and venue.',
  },
  {
    step: 2,
    title: 'Feasibility & Planning',
    description: 'Chitra confirms feasibility and suggests a storyline/format.',
  },
  {
    step: 3,
    title: 'Finalize the Plan',
    description: 'Finalize the depiction plan and delivery mode (in-person/online).',
  },
  {
    step: 4,
    title: 'Execution',
    description: 'Execution with optional video coverage of the final work.',
  },
]
