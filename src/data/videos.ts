export interface Video {
  id: string;
  title: string;
  brief: string;
  category: string;
  youtubeUrl: string;
  youtubeId: string;
  year?: string;
  venue?: string;
  featured?: boolean;
}

export const categories = [
  "All",
  "Tiruppavai",
  "Divya Desam",
  "Festivals & Golu",
  "Rangoli",
  "Events & Commissions",
  "Awards",
  "External Coverage",
];

export const videos: Video[] = [
  {
    id: "1",
    title: "Andal's Tiruppavai in Soft Toys",
    brief:
      "A video presentation at Fine Arts Society, Mumbai by Chitra Raman. This is depiction of important Pasurams of Andal's Tiruppavai in soft toys with narration.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=hRhW-eO3WfQ",
    youtubeId: "hRhW-eO3WfQ",
    venue: "Fine Arts Society, Mumbai",
    featured: true,
  },
  {
    id: "2",
    title: "Srirangam - Divyadesam - Soft Toys Depiction English Story",
    brief:
      "English storytelling of the sacred Srirangam temple through soft toys depiction and narration by Chitra Raman.",
    category: "Divya Desam",
    youtubeUrl: "https://www.youtube.com/watch?v=_E7KKXtPLrs",
    youtubeId: "_E7KKXtPLrs",
    featured: true,
  },
  {
    id: "3",
    title: "Tirupati Balaji Story in Soft Toys",
    brief:
      "Depiction and narration of the beloved Tirupati Balaji story through handmade dolls by Chitra Raman.",
    category: "Divya Desam",
    youtubeUrl: "https://www.youtube.com/watch?v=C7wVNlepfqM",
    youtubeId: "C7wVNlepfqM",
  },
  {
    id: "4",
    title: "Tirupati Depiction at Fine Arts Chembur",
    brief:
      "The story of Tirupati depicted through soft toys, presented at Fine Arts Chembur with narration by Chitra Raman.",
    category: "Divya Desam",
    youtubeUrl: "https://www.youtube.com/watch?v=9VcUw9bGoow",
    youtubeId: "9VcUw9bGoow",
    venue: "Fine Arts Chembur",
  },
  {
    id: "5",
    title: "Anantha Padmanabha: The Boy Who Tested a Sage",
    brief:
      "This film traces the beloved legend of Anantha Padmanabha at Tiruvananthapuram—the 75th Divya Desam. Narration and curation by Chitra Raman for Navaratri Golu September 2025.",
    category: "Divya Desam",
    youtubeUrl: "https://www.youtube.com/watch?v=mrRIvp0jRm8",
    youtubeId: "mrRIvp0jRm8",
    year: "2025",
    featured: true,
  },
  {
    id: "6",
    title: "Janmashtami 2021 - Inspired by Anup Jalota's Bhajan",
    brief:
      "Janmashtami 2021 soft toys video created and narrated by Chitra Raman, inspired by Anup Jalota's bhajan.",
    category: "Festivals & Golu",
    youtubeUrl: "https://www.youtube.com/watch?v=YxXPHzjnvpA",
    youtubeId: "YxXPHzjnvpA",
    year: "2021",
  },
  {
    id: "7",
    title: "Navaratri Golu October 2021",
    brief:
      "Navaratri Golu shot by IGK Tamil Channel in October 2021 for the festival celebration.",
    category: "Festivals & Golu",
    youtubeUrl: "https://www.youtube.com/watch?v=68cJZSOq8bQ",
    youtubeId: "68cJZSOq8bQ",
    year: "2021",
  },
  {
    id: "8",
    title: "Janmashtami Mysore Colony 2023",
    brief:
      "Krishna Janmashtami depiction and celebration at Mysore Colony in 2023 by Chitra Raman.",
    category: "Festivals & Golu",
    youtubeUrl: "https://www.youtube.com/watch?v=iZtzbpyaBKU",
    youtubeId: "iZtzbpyaBKU",
    year: "2023",
  },
  {
    id: "9",
    title: "Navaratri Golu October 2023",
    brief:
      "Annual Navaratri Golu celebration and depiction in October 2023 by Chitra Raman.",
    category: "Festivals & Golu",
    youtubeUrl: "https://www.youtube.com/watch?v=rt8h2hE14rw",
    youtubeId: "rt8h2hE14rw",
    year: "2023",
  },
  {
    id: "10",
    title: "Ramayana Depiction for Golu",
    brief:
      "The epic Ramayana brought to life through handmade dolls for Golu celebration. Depiction and narration by Chitra Raman.",
    category: "Festivals & Golu",
    youtubeUrl: "https://www.youtube.com/watch?v=5jlORve5SR0",
    youtubeId: "5jlORve5SR0",
  },
  {
    id: "11",
    title: "Navaratri Golu October 2024 Mumbai",
    brief:
      "Grand Navaratri Golu depiction in Mumbai, October 2024. A showcase of devotional storytelling through handmade dolls.",
    category: "Festivals & Golu",
    youtubeUrl: "https://www.youtube.com/watch?v=v0KX_ePuSgo",
    youtubeId: "v0KX_ePuSgo",
    year: "2024",
    venue: "Mumbai",
    featured: true,
  },
  {
    id: "12",
    title: "Krishna Janmashtami 2025 - Achutam Keshavam",
    brief:
      "Celebration of Krishna Janmashtami 2025 featuring the timeless bhajan Achutam Keshavam, beautifully rendered by Suresh Wadkar.",
    category: "Festivals & Golu",
    youtubeUrl: "https://www.youtube.com/watch?v=vjJG0d3nnrA",
    youtubeId: "vjJG0d3nnrA",
    year: "2025",
  },
  {
    id: "13",
    title: "Janmashtami Decoration 2024",
    brief:
      "Beautiful Janmashtami decoration and setup for 2024. Video depiction by Chitra Raman.",
    category: "Festivals & Golu",
    youtubeUrl: "https://www.youtube.com/watch?v=HpvUP_V2Lvs",
    youtubeId: "HpvUP_V2Lvs",
    year: "2024",
  },
  {
    id: "14",
    title: "Ahobilam Nava Narasimhan - Navaratri 2024",
    brief:
      "Handmade doll depiction of Ahobilam Nava Narasimhan for Navaratri October 2024 by Chitra Raman.",
    category: "Festivals & Golu",
    youtubeUrl: "https://www.youtube.com/watch?v=hdIx7lRuus4",
    youtubeId: "hdIx7lRuus4",
    year: "2024",
  },
  {
    id: "15",
    title: "Ahobila Mutt Brahmotsavam Rangoli",
    brief:
      "Traditional rangoli created at Ahobila Mutt Temple during Brahmotsavam. Accompanied by song from Mambalam Sisters.",
    category: "Rangoli",
    youtubeUrl: "https://www.youtube.com/watch?v=j2KakguxWsI",
    youtubeId: "j2KakguxWsI",
    venue: "Ahobila Mutt Temple",
  },
  {
    id: "16",
    title: "Ahobila Mutt Brahmotsavam 2022 Rangoli & Poo Kolam",
    brief:
      "Collection of rangolis and Poo kolam created outside Ahobila Mutt Temple Chembur during the 10 days Brahmotsavam in 2022.",
    category: "Rangoli",
    youtubeUrl: "https://www.youtube.com/watch?v=fRwV1NqUhIs",
    youtubeId: "fRwV1NqUhIs",
    year: "2022",
    venue: "Ahobila Mutt Temple, Chembur",
  },
  {
    id: "17",
    title: "Ahobila Mutt Brahmotsavam Rangoli November 2023",
    brief:
      "Beautiful rangoli artwork created for Ahobila Mutt Brahmotsavam in November 2023 by Chitra Raman.",
    category: "Rangoli",
    youtubeUrl: "https://www.youtube.com/watch?v=KkapuxPIDHQ",
    youtubeId: "KkapuxPIDHQ",
    year: "2023",
    venue: "Ahobila Mutt",
    featured: true,
  },
  {
    id: "18",
    title: "Jio Convention Centre Wedding - Andal Dolls",
    brief:
      "Handmade Andal dolls and soft toys depiction created for a wedding at Jio Convention Centre.",
    category: "Events & Commissions",
    youtubeUrl: "https://www.youtube.com/watch?v=_bHtXEM7P-Y",
    youtubeId: "_bHtXEM7P-Y",
    venue: "Jio Convention Centre",
  },
  {
    id: "19",
    title: "Oberoi Towers Event - Ahobilam Depiction",
    brief:
      "Ahobilam depiction in soft toys created for an event at Oberoi Towers. Video and narration by Chitra Raman.",
    category: "Events & Commissions",
    youtubeUrl: "https://www.youtube.com/watch?v=GNWm6I16jZQ",
    youtubeId: "GNWm6I16jZQ",
    venue: "Oberoi Towers",
  },
  {
    id: "20",
    title: "Navaratri Golu 2024 - First Prize Winner",
    brief:
      "Won the first prize for Navaratri Golu 2024 submissions across India, organized by Namba Aathu Periyava Channel.",
    category: "Awards",
    youtubeUrl: "https://www.youtube.com/watch?v=uQKfsaTBM3E",
    youtubeId: "uQKfsaTBM3E",
    year: "2024",
  },
  {
    id: "21",
    title: "Namba Aathu Periyava Channel Coverage",
    brief:
      "External coverage and feature by Namba Aathu Periyava Channel showcasing the cultural work.",
    category: "External Coverage",
    youtubeUrl: "https://www.youtube.com/watch?v=VUIDq7Rx-n4",
    youtubeId: "VUIDq7Rx-n4",
  },
  {
    id: "22",
    title: "IGK Tamil Channel Coverage",
    brief:
      "Feature and coverage by IGK Tamil Channel showcasing Navaratri Golu celebration.",
    category: "External Coverage",
    youtubeUrl: "https://www.youtube.com/watch?v=hFHW_km5V38",
    youtubeId: "hFHW_km5V38",
  },
];

export const featuredVideos = videos.filter((v) => v.featured);
