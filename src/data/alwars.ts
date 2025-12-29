export interface Alwar {
  id: string;
  name: string;
  tamilName: string;
  era: "early" | "middle" | "later";
  period: string;
  birthplace: string;
  shortBio: string;
  keyWorks: string[];
  keyStories: string[];
  divyaDesams: string[];
}

export const alwars: Alwar[] = [
  {
    id: "poigai",
    name: "Poigai Alwar",
    tamilName: "பொய்கை ஆழ்வார்",
    era: "early",
    period: "7th Century CE",
    birthplace: "Kanchipuram",
    shortBio:
      "Poigai Alwar is one of the first three Alwars, known as Mudhal Alwars. Born from a golden lotus in a pond (poigai) at Kanchipuram, he composed the first hundred verses of Mudhal Tiruvandadi. Legend says he, along with Bhuthathalwar and Peyalwar, took shelter in a small space during a storm where they experienced the divine presence of Lord Vishnu.",
    keyWorks: ["Mudhal Tiruvandadi (100 verses)"],
    keyStories: [
      "The Three Alwars in the Storm",
      "Birth from the Golden Lotus",
    ],
    divyaDesams: ["Kanchipuram", "Thirukovilur"],
  },
  {
    id: "bhuthathalwar",
    name: "Bhuthathalwar",
    tamilName: "பூதத்தாழ்வார்",
    era: "early",
    period: "7th Century CE",
    birthplace: "Mahabalipuram",
    shortBio:
      "Bhuthathalwar, the second of the Mudhal Alwars, was born from a flower in Mahabalipuram. His name derives from the five elements (Pancha Bhutas). He composed Irandam Tiruvandadi, continuing the devotional poetry tradition.",
    keyWorks: ["Irandam Tiruvandadi (100 verses)"],
    keyStories: ["The Three Alwars in the Storm", "Birth at Mahabalipuram"],
    divyaDesams: ["Mahabalipuram", "Srirangam"],
  },
  {
    id: "peyalwar",
    name: "Peyalwar",
    tamilName: "பேயாழ்வார்",
    era: "early",
    period: "7th Century CE",
    birthplace: "Mylapore, Chennai",
    shortBio:
      'Peyalwar, the third Mudhal Alwar, was born from a red lily in Mylapore. His name means "the one possessed by divine love." He composed Moonram Tiruvandadi, completing the trilogy.',
    keyWorks: ["Moonram Tiruvandadi (100 verses)"],
    keyStories: [
      "The Three Alwars in the Storm",
      "Divine Vision at Thirukovilur",
    ],
    divyaDesams: ["Mylapore", "Thirukovilur"],
  },
  {
    id: "thirumazhisai",
    name: "Thirumazhisai Alwar",
    tamilName: "திருமழிசை ஆழ்வார்",
    era: "middle",
    period: "7th-8th Century CE",
    birthplace: "Thirumazhisai",
    shortBio:
      "Born in Thirumazhisai near Chennai, he explored various philosophies before embracing Vaishnavism. Known for his miracle at Kanchipuram where Lord Varadaraja followed him when he was insulted.",
    keyWorks: [
      "Thiruchanda Viruttam (120 verses)",
      "Nanmugan Tiruvandadi (96 verses)",
    ],
    keyStories: ["Lord Varadaraja Following Him", "Kanikannan Episode"],
    divyaDesams: ["Kanchipuram", "Thirumazhisai"],
  },
  {
    id: "nammalwar",
    name: "Nammalwar",
    tamilName: "நம்மாழ்வார்",
    era: "middle",
    period: "9th Century CE",
    birthplace: "Alwarthirunagari",
    shortBio:
      'Considered the greatest of all Alwars, called "Prapanna Jana Kootastha." He spent his early years in meditation under a tamarind tree and composed 1,352 verses including the celebrated Thiruvaimozhi, the Tamil Veda.',
    keyWorks: [
      "Thiruvaimozhi (1,102 verses)",
      "Thiruviruttam (100 verses)",
      "Thiruvasiriyam (7 verses)",
      "Periya Thiruvandadi (87 verses)",
    ],
    keyStories: [
      "Meditation Under the Tamarind Tree",
      "Teaching Madhurakavi Alwar",
    ],
    divyaDesams: ["Alwarthirunagari", "Srirangam", "Thirupathi"],
  },
  {
    id: "madhurakavi",
    name: "Madhurakavi Alwar",
    tamilName: "மதுரகவி ஆழ்வார்",
    era: "middle",
    period: "9th Century CE",
    birthplace: "Thirukkolur",
    shortBio:
      "Unique among Alwars as his sole composition praises his guru Nammalwar rather than Vishnu directly. He was drawn to Nammalwar by a divine light while on pilgrimage in North India.",
    keyWorks: ["Kanninun Siruthambu (11 verses)"],
    keyStories: [
      "Following the Divine Light to Nammalwar",
      "Establishing Nammalwar Worship",
    ],
    divyaDesams: ["Alwarthirunagari"],
  },
  {
    id: "kulasekhara",
    name: "Kulasekhara Alwar",
    tamilName: "குலசேகர ஆழ்வார்",
    era: "middle",
    period: "9th Century CE",
    birthplace: "Thiruvanjikkulam, Kerala",
    shortBio:
      "A Chera king who ruled from Mahodayapuram. Despite being a king, he was deeply devoted to Lord Rama and Krishna. Known for jumping into a snake pit to prove the innocence of devotees.",
    keyWorks: ["Perumal Thirumozhi (105 verses)", "Mukundamala (Sanskrit)"],
    keyStories: ["Jumping into Snake Pit", "Devotion to Ramayana"],
    divyaDesams: ["Srirangam", "Thiruvanjikkulam", "Thirupathi"],
  },
  {
    id: "periyalwar",
    name: "Periyalwar",
    tamilName: "பெரியாழ்வார்",
    era: "later",
    period: "9th Century CE",
    birthplace: "Srivilliputhur",
    shortBio:
      "Originally named Vishnuchitta, he was a temple priest at Srivilliputhur. He won a debate at the Pandya court and is the foster father of Andal. His verses depict Krishna's childhood with parental love.",
    keyWorks: ["Periyalwar Thirumozhi (473 verses)", "Thirupallandu"],
    keyStories: [
      "Debate at Pandya Court",
      "Finding Baby Andal",
      "Pallandu Blessing",
    ],
    divyaDesams: ["Srivilliputhur", "Srirangam"],
  },
  {
    id: "andal",
    name: "Andal",
    tamilName: "ஆண்டாள்",
    era: "later",
    period: "9th Century CE",
    birthplace: "Srivilliputhur",
    shortBio:
      "The only female Alwar, found as a baby under a Tulsi plant by Periyalwar. Her Thiruppavai (30 verses) is recited during Margazhi. She merged with Lord Ranganatha at Srirangam, fulfilling her divine marriage.",
    keyWorks: ["Thiruppavai (30 verses)", "Nachiyar Thirumozhi (143 verses)"],
    keyStories: [
      "Wearing Garlands Before Offering to God",
      "Marriage to Lord Ranganatha",
      "Margazhi Vratham",
    ],
    divyaDesams: ["Srivilliputhur", "Srirangam"],
  },
  {
    id: "thondaradippodi",
    name: "Thondaradippodi Alwar",
    tamilName: "தொண்டரடிப்பொடி ஆழ்வார்",
    era: "later",
    period: "9th Century CE",
    birthplace: "Thirumandangudi",
    shortBio:
      "Devoted to maintaining the flower garden for Lord Ranganatha at Srirangam. His name means \"dust at the feet of devotees.\" He was saved from a courtesan's trap by Lord Ranganatha's direct intervention.",
    keyWorks: ["Thirumalai (45 verses)", "Thiruppalliyezhuchi (10 verses)"],
    keyStories: [
      "The Courtesan Episode",
      "Lord Ranganatha's Rescue",
      "Temple Garden Service",
    ],
    divyaDesams: ["Srirangam", "Thirumandangudi"],
  },
  {
    id: "thiruppanalwar",
    name: "Thiruppanalwar",
    tamilName: "திருப்பாணாழ்வார்",
    era: "later",
    period: "9th Century CE",
    birthplace: "Woraiyur",
    shortBio:
      "Born in a community considered untouchable, yet his devotion transcended social barriers. Lord Ranganatha commanded a priest to carry him into the temple on his shoulders, breaking caste barriers.",
    keyWorks: ["Amalanathipiran (10 verses)"],
    keyStories: [
      "Carried into Temple by Priest",
      "Merging with Lord Ranganatha",
    ],
    divyaDesams: ["Srirangam", "Woraiyur"],
  },
  {
    id: "thirumangai",
    name: "Thirumangai Alwar",
    tamilName: "திருமங்கை ஆழ்வார்",
    era: "later",
    period: "9th Century CE",
    birthplace: "Thirukurayalur",
    shortBio:
      "Originally a chieftain who turned to highway robbery to feed devotees. After encountering Lord Vishnu, he transformed completely. He composed the most verses (1,361) and contributed to Srirangam temple construction.",
    keyWorks: [
      "Periya Thirumozhi (1,084 verses)",
      "Thirukkurun Thandakam",
      "Thirunedun Thandakam",
    ],
    keyStories: [
      "Transformation from Robber",
      "Building Srirangam Walls",
      "Marriage to Kumudavalli",
    ],
    divyaDesams: ["Srirangam", "Thirukurayalur"],
  },
];

export const alwarEras = [
  { id: "all", name: "All Alwars", count: 12 },
  { id: "early", name: "Mudhal Alwars (Early)", count: 3 },
  { id: "middle", name: "Middle Period", count: 4 },
  { id: "later", name: "Later Alwars", count: 5 },
];
