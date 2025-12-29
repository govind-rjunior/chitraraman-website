export interface Award {
  id: string
  title: string
  description: string
  year: string
  organizer: string
  imageUrl?: string
  videoUrl?: string
}

export const awards: Award[] = [
  {
    id: '1',
    title: 'Navaratri Golu 2024 - First Prize',
    description: 'Won the first prize for Navaratri Golu submissions from across India. This prestigious recognition celebrates the devotional artistry and storytelling excellence in traditional Golu presentations.',
    year: '2024',
    organizer: 'Namba Aathu Periyava Channel',
    imageUrl: 'https://i.ytimg.com/vi/uQKfsaTBM3E/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=uQKfsaTBM3E',
  },
  {
    id: '2',
    title: 'Navaratri Golu 2025 - Second Prize',
    description: 'Awarded second prize for the outstanding Navaratri Golu display featuring the Anantha Padmanabha legend and other devotional themes.',
    year: '2025',
    organizer: 'Namba Aathu Periyava Channel',
  },
  {
    id: '3',
    title: 'IGK Tamil Channel Feature',
    description: 'Featured by IGK Tamil Channel for cultural contributions and devotional storytelling through handmade doll depictions.',
    year: '2021',
    organizer: 'IGK Tamil Channel',
    videoUrl: 'https://www.youtube.com/watch?v=hFHW_km5V38',
  },
  {
    id: '4',
    title: 'Namba Aathu Periyava Channel Coverage',
    description: 'Special coverage and feature highlighting the unique approach to Vaishnavite storytelling through soft toys.',
    year: '2025',
    organizer: 'Namba Aathu Periyava Channel',
    videoUrl: 'https://www.youtube.com/watch?v=VUIDq7Rx-n4',
  },
]

export const mediaFeatures = [
  {
    title: 'IGK Tamil Channel',
    description: 'TV coverage of Navaratri Golu celebration',
    year: '2021',
  },
  {
    title: 'Namba Aathu Periyava',
    description: 'YouTube feature on devotional storytelling',
    year: '2024-2025',
  },
]
