export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  year?: string;
  venue?: string;
}

export const galleryCategories = [
  "All",
  "Rangoli",
  "Tiruppavai",
  "Varanam Ayiram",
  "Divya Desam",
  "Festivals & Golu",
];

export const galleryItems: GalleryItem[] = [
  // Rangolis
  {
    id: "1",
    title: "Peacock Rangoli Design",
    category: "Rangoli",
    description:
      "Traditional rangoli with vibrant peacock motif and colorful patterns.",
    imageUrl: "/gallery/rangoli-peacock.jpg",
  },
  {
    id: "11",
    title: "Temple Festival Poo Kolam",
    category: "Rangoli",
    description:
      "Elaborate poo kolam created for temple festival celebrations.",
    imageUrl: "/gallery/rangoli-temple-couple.jpg",
  },
  {
    id: "12",
    title: "Grand Floral Rangoli",
    category: "Rangoli",
    description: "Large-scale rangoli with intricate geometric patterns.",
    imageUrl: "/gallery/rangoli-elaborate.jpg",
  },
  {
    id: "13",
    title: "Circular Floral Kolam",
    category: "Rangoli",
    description: "Beautiful circular rangoli design with fresh flowers.",
    imageUrl: "/gallery/rangoli-circular-flowers.jpg",
  },
  {
    id: "14",
    title: "Vibrant Poo Kolam",
    category: "Rangoli",
    description: "Colorful floral kolam with traditional motifs.",
    imageUrl: "/gallery/rangoli-colorful.jpg",
  },
  {
    id: "15",
    title: "Mandala Rangoli",
    category: "Rangoli",
    description: "Intricate mandala design with vibrant colors.",
    imageUrl: "/gallery/rangoli-mandala.jpg",
  },

  // Story Telling - Divya Desam
  {
    id: "2",
    title: "Thirumangai Azwar Story",
    category: "Divya Desam",
    description:
      "The story of Thirumangai Azwar prostrating at the feet of Lord Narayana in the forest.",
    imageUrl: "/gallery/thirumangai-azwar.jpg",
  },
  {
    id: "4",
    title: "Manavala Mamuni Story",
    category: "Divya Desam",
    description:
      "Acharya Manavala Mamuni born in 1370 with 8 disciples who spread Vaishnavism and setup learning centers.",
    imageUrl: "/gallery/manavala-mamuni.jpg",
  },
  {
    id: "9",
    title: "Seven Alwars",
    category: "Divya Desam",
    description:
      "Depiction of seven Alwars: Poigai, Bhootath, Pey, Tirumalisai, Nammalwar, Madhurakavi, and Kulasekhara.",
    imageUrl: "/gallery/seven-alwars.jpg",
  },
  {
    id: "17",
    title: "Saint Ramanujar Story",
    category: "Divya Desam",
    description: "The story of Saint Ramanujar depicted in soft toys.",
    imageUrl: "/gallery/ramanujar-story.jpg",
  },

  // Varanam Ayiram
  {
    id: "3",
    title: "Andal's Varanam Ayiram",
    category: "Varanam Ayiram",
    description:
      "Andal narrates every step in her dream marriage to Lord Krishna to her sakhis.",
    imageUrl: "/gallery/varanam-ayiram.jpg",
  },

  // Tiruppavai
  {
    id: "6",
    title: "Tiruppavai - Final Pasuram",
    category: "Tiruppavai",
    description:
      "The last Pasuram of Tiruppavai - the Gopis dancing around Krishna and Andal.",
    imageUrl: "/gallery/tiruppavai-last-pasuram.jpg",
  },
  {
    id: "16",
    title: "Tiruppavai - Kings at Krishna's Feet",
    category: "Tiruppavai",
    description:
      "Pasuram where kings of this world come under Shri Krishna's feet to be freed from their sins.",
    imageUrl: "/gallery/tiruppavai-kings.jpg",
  },

  // Festivals & Golu
  {
    id: "5",
    title: "Samudra Manthan",
    category: "Festivals & Golu",
    description:
      "Scene of Samudra Manthan where Devas and Rakshasas churn the ocean for nectar.",
    imageUrl: "/gallery/samudra-manthan.jpg",
  },
  {
    id: "7",
    title: "Brahmotsavam Vahanas",
    category: "Festivals & Golu",
    description:
      "Depiction of Brahmotsavam where Vishnu is placed on different vahanas.",
    imageUrl: "/gallery/brahmotsavam-vahanas.jpg",
  },
  {
    id: "8",
    title: "Navaratri Golu Display",
    category: "Festivals & Golu",
    description: "Scenes of Navaratri Golu - the festival of display of dolls.",
    imageUrl: "/gallery/navaratri-golu.jpg",
  },
  {
    id: "10",
    title: "Krishna Janmashtami",
    category: "Festivals & Golu",
    description: "The birth of Shri Krishna depicted through soft toys.",
    imageUrl: "/gallery/krishna-janmashtami.jpg",
  },
];
