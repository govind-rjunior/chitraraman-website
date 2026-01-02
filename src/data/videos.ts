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
    title:
      "Tirupati Divya desam depiction in soft toys created for an event at Fine Arts. 2023 By Chitra Raman",
    brief:
      "The story of Tirupati depicted through soft toys, presented at Fine Arts Chembur with narration by Chitra Raman.",
    category: "Events & Commissions",
    youtubeUrl: "https://www.youtube.com/watch?v=9VcUw9bGoow",
    youtubeId: "9VcUw9bGoow",
    venue: "Fine Arts Chembur, 2023",
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
    category: "Divya Desam",
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
  {
    id: "23",
    title: "Veetu Navratri Golu Celebration",
    brief:
      "Chitra Raman Veetu Navratri Golu Celebration at Mysor Colony Chembur Mumbai ",
    category: "External Coverage",
    youtubeUrl: "https://www.youtube.com/watch?v=3Z4eKrMpY6g",
    youtubeId: "3Z4eKrMpY6g",
    year: "2023/2024",
  },
  {
    id: "24",
    title: "Tiruppavai Pasuram 1 - Tamil",
    brief:
      "மார்கழித் திங்கள் - First pasuram of Andal's Tiruppavai in Tamil, depicting the gopis gathering at dawn.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=qnciQEhehKg",
    youtubeId: "qnciQEhehKg",
  },
  {
    id: "25",
    title: "Tiruppavai Pasuram 1 - English",
    brief:
      "Margazhi Thingal - First pasuram of Andal's Tiruppavai narrated in English.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=WwFzNsTXzss",
    youtubeId: "WwFzNsTXzss",
  },
  {
    id: "26",
    title: "Tiruppavai Pasuram 2 - Tamil",
    brief:
      "வையத்து வாழ்வீர்காள் - Second pasuram explaining the vratam rules in Tamil.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=GpJBGq48t8M",
    youtubeId: "GpJBGq48t8M",
  },
  {
    id: "27",
    title: "Tiruppavai Pasuram 2 - English",
    brief:
      "Second pasuram of Tiruppavai explaining the observances of Pavai Nonbu in English.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=UWLMssc4arU",
    youtubeId: "UWLMssc4arU",
  },
  {
    id: "28",
    title: "Tiruppavai Pasuram 3 - Tamil",
    brief: "ஓங்கி உலகளந்த - Third pasuram praising Vamana avatar in Tamil.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=55fimw0FmAQ",
    youtubeId: "55fimw0FmAQ",
  },
  {
    id: "29",
    title: "Tiruppavai Pasuram 3 - English",
    brief:
      "Third pasuram describing prosperity through devotion, narrated in English.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=tSs9J6nDTyw",
    youtubeId: "tSs9J6nDTyw",
  },
  {
    id: "30",
    title: "Tiruppavai Pasuram 4 - Tamil",
    brief: "ஆழிமழைக் கண்ணா - Fourth pasuram invoking the rain god in Tamil.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=zxklw5grXvs",
    youtubeId: "zxklw5grXvs",
  },
  {
    id: "31",
    title: "Tiruppavai Pasuram 4 - English",
    brief: "Fourth pasuram describing clouds and rain, narrated in English.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=pfYt9Y9Z42c",
    youtubeId: "pfYt9Y9Z42c",
  },
  {
    id: "32",
    title: "Tiruppavai Pasuram 5 - Tamil",
    brief: "மாயனை மன்னு - Fifth pasuram praising Krishna as Mayavan in Tamil.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=yeDaUBv21G4",
    youtubeId: "yeDaUBv21G4",
  },
  {
    id: "33",
    title: "Tiruppavai Pasuram 5 - English",
    brief: "Fifth pasuram describing the eternal Lord of Dwaraka in English.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=PXvXx6S61C0",
    youtubeId: "PXvXx6S61C0",
  },
  {
    id: "34",
    title: "Tiruppavai Pasuram 6 - Tamil",
    brief:
      "புள்ளும் சிலம்பினகாண் - Sixth pasuram with birds chirping at dawn in Tamil.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=8jqtmJFlQWQ",
    youtubeId: "8jqtmJFlQWQ",
  },
  {
    id: "35",
    title: "Tiruppavai Pasuram 6 - English",
    brief:
      "Sixth pasuram wake-up call with morning bird sounds, narrated in English.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=yKQqbGPJTRw",
    youtubeId: "yKQqbGPJTRw",
  },
  {
    id: "36",
    title: "Tiruppavai Pasuram 7 - Tamil",
    brief:
      "கீசுகீசு என்றெங்கும் - Seventh pasuram with sounds of birds everywhere in Tamil.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=0HvkQCjocUI",
    youtubeId: "0HvkQCjocUI",
  },
  {
    id: "37",
    title: "Tiruppavai Pasuram 7 - English",
    brief: "Seventh pasuram as the village wakes up, narrated in English.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=pkuBL_tjtsg",
    youtubeId: "pkuBL_tjtsg",
  },
  {
    id: "38",
    title: "Tiruppavai Pasuram 8 - Tamil",
    brief:
      "கீழ்வானம் வெள்ளென்று - Eighth pasuram with eastern sky turning white in Tamil.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=ggeT4ATEp5s",
    youtubeId: "ggeT4ATEp5s",
  },
  {
    id: "39",
    title: "Tiruppavai Pasuram 8 - English",
    brief: "Eighth pasuram as dawn breaks, narrated in English.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=AubIMvZfVNc",
    youtubeId: "AubIMvZfVNc",
  },
  {
    id: "40",
    title: "Tiruppavai Pasuram 9 - Tamil",
    brief: "தூமணி மாடத்து - Ninth pasuram waking a gopi in a mansion in Tamil.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=IZuvH4AJfIg",
    youtubeId: "IZuvH4AJfIg",
  },
  {
    id: "41",
    title: "Tiruppavai Pasuram 9 - English",
    brief: "Ninth pasuram calling a gopi to join the vow, narrated in English.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=Ua9xbjT_S4A",
    youtubeId: "Ua9xbjT_S4A",
  },
  {
    id: "42",
    title: "Tiruppavai Pasuram 10 - Tamil",
    brief:
      "நோற்றுச் சுவர்க்கம் - Tenth pasuram describing heavenly rewards in Tamil.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=Ibub0SzTakQ",
    youtubeId: "Ibub0SzTakQ",
  },
  {
    id: "43",
    title: "Tiruppavai Pasuram 10 - English",
    brief: "Tenth pasuram on the merit of devotion, narrated in English.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=j_cqkFv44EE",
    youtubeId: "j_cqkFv44EE",
  },
  {
    id: "44",
    title: "Tiruppavai Pasuram 11 - Tamil",
    brief:
      "கற்றுக் கறவை - Eleventh pasuram describing young calves and cows in Tamil.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=5yOE-snePeM",
    youtubeId: "5yOE-snePeM",
  },
  {
    id: "45",
    title: "Tiruppavai Pasuram 11 - English",
    brief: "Eleventh pasuram depicting cowherd life, narrated in English.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=a_XFpBmhhNY",
    youtubeId: "a_XFpBmhhNY",
  },
  {
    id: "46",
    title: "Tiruppavai Pasuram 12 - Tamil",
    brief:
      "கனைத்திளங் கற்றெருமை - Twelfth pasuram with buffalo calves in Tamil.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=dXyC0tyNRsc",
    youtubeId: "dXyC0tyNRsc",
  },
  {
    id: "47",
    title: "Tiruppavai Pasuram 12 - English",
    brief:
      "Twelfth pasuram depicting rural village scene, narrated in English.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=msjUeJdiM5Y",
    youtubeId: "msjUeJdiM5Y",
  },
  {
    id: "48",
    title: "Tiruppavai Pasuram 13 - Tamil",
    brief:
      "புள்ளின்வாய் கீண்டானை - Thirteenth pasuram praising Krishna defeating Bakasura in Tamil.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=2IDdcTokCQI",
    youtubeId: "2IDdcTokCQI",
  },
  {
    id: "49",
    title: "Tiruppavai Pasuram 13 - English",
    brief: "Thirteenth pasuram on Krishna's heroic deeds, narrated in English.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=q9T83OUddhU",
    youtubeId: "q9T83OUddhU",
  },
  {
    id: "50",
    title: "Tiruppavai Pasuram 14 - Tamil",
    brief: "உங்கள் புழக்கடை - Fourteenth pasuram waking another gopi in Tamil.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=L-YWxo_SNy0",
    youtubeId: "L-YWxo_SNy0",
  },
  {
    id: "51",
    title: "Tiruppavai Pasuram 14 - English",
    brief: "Fourteenth pasuram describing her home, narrated in English.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=BFp-iUJPReo",
    youtubeId: "BFp-iUJPReo",
  },
  {
    id: "52",
    title: "Tiruppavai Pasuram 15 - Tamil",
    brief:
      "எல்லே இளங்கிளியே - Fifteenth pasuram addressing a young parrot-like girl in Tamil.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=ca8j2dqULWo",
    youtubeId: "ca8j2dqULWo",
  },
  {
    id: "53",
    title: "Tiruppavai Pasuram 15 - English",
    brief:
      "Fifteenth pasuram with affectionate wake-up call, narrated in English.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=XmPao2xyl7Y",
    youtubeId: "XmPao2xyl7Y",
  },
  {
    id: "54",
    title: "Tiruppavai Pasuram 16 - Tamil",
    brief:
      "நாயகனாய் நின்ற - Sixteenth pasuram praising Krishna as leader in Tamil.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=cpfNs4bqorM",
    youtubeId: "cpfNs4bqorM",
  },
  {
    id: "55",
    title: "Tiruppavai Pasuram 16 - English",
    brief: "Sixteenth pasuram on His supreme position, narrated in English.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=vDTtCISL4xI",
    youtubeId: "vDTtCISL4xI",
  },
  {
    id: "56",
    title: "Tiruppavai Pasuram 17 - Tamil",
    brief:
      "அம்பரமே தண்ணீரே - Seventeenth pasuram with nature elements praising Krishna in Tamil.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=nG7F3WQhCwI",
    youtubeId: "nG7F3WQhCwI",
  },
  {
    id: "57",
    title: "Tiruppavai Pasuram 18 - Tamil",
    brief: "உந்து மதகளிற்றன் - Eighteenth pasuram waking Nandagopa in Tamil.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=CHcSqyDu30g",
    youtubeId: "CHcSqyDu30g",
  },
  {
    id: "58",
    title: "Tiruppavai Pasuram 18 - English",
    brief:
      "Eighteenth pasuram at the chief of cowherds' mansion, narrated in English.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=aWA2RNZPJrs",
    youtubeId: "aWA2RNZPJrs",
  },
  {
    id: "59",
    title: "Tiruppavai Pasuram 19 - Tamil",
    brief:
      "குத்து விளக்கெரிய - Nineteenth pasuram with lamps burning bright in Tamil.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=dmN93qMVNDA",
    youtubeId: "dmN93qMVNDA",
  },
  {
    id: "60",
    title: "Tiruppavai Pasuram 19 - English",
    brief: "Nineteenth pasuram waking Yashoda, narrated in English.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=fn8aKfqQr1w",
    youtubeId: "fn8aKfqQr1w",
  },
  {
    id: "61",
    title: "Tiruppavai Pasuram 20 - Tamil",
    brief:
      "முப்பத்து மூவர் - Twentieth pasuram describing thirty-three gods in Tamil.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=ZzTmoaWZdPA",
    youtubeId: "ZzTmoaWZdPA",
  },
  {
    id: "62",
    title: "Tiruppavai Pasuram 20 - English",
    brief: "Twentieth pasuram on divine assembly, narrated in English.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=sOiXDevlVQs",
    youtubeId: "sOiXDevlVQs",
  },
  {
    id: "63",
    title: "Tiruppavai Pasuram 21 - Tamil",
    brief:
      "ஏற்ற கலங்கள் - Twenty-first pasuram with water pots filled in Tamil.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=tJb_zzjxiP4",
    youtubeId: "tJb_zzjxiP4",
  },
  {
    id: "64",
    title: "Tiruppavai Pasuram 21 - English",
    brief:
      "Twenty-first pasuram preparing for ritual bath, narrated in English.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=xdALJGreoig",
    youtubeId: "xdALJGreoig",
  },
  {
    id: "65",
    title: "Tiruppavai Pasuram 22 - Tamil",
    brief:
      "அங்கண் மாஞாலத்து - Twenty-second pasuram describing the beautiful world in Tamil.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=H0EOYlAMhFw",
    youtubeId: "H0EOYlAMhFw",
  },
  {
    id: "66",
    title: "Tiruppavai Pasuram 22 - English",
    brief: "Twenty-second pasuram on Krishna's presence, narrated in English.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=MkwlWZv1CQ4",
    youtubeId: "MkwlWZv1CQ4",
  },
  {
    id: "67",
    title: "Tiruppavai Pasuram 23 - Tamil",
    brief:
      "மாரிமலை முழஞ்சில் - Twenty-third pasuram with rain-bearing clouds in Tamil.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=srBQUrOrZWU",
    youtubeId: "srBQUrOrZWU",
  },
  {
    id: "68",
    title: "Tiruppavai Pasuram 23 - English",
    brief: "Twenty-third pasuram on nature imagery, narrated in English.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=KHKHH57i2KI",
    youtubeId: "KHKHH57i2KI",
  },
  {
    id: "69",
    title: "Tiruppavai Pasuram 24 - Tamil",
    brief:
      "அன்று இவ்வுலகம் - Twenty-fourth pasuram describing Krishna's cosmic form in Tamil.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=3yCCKi8avYM",
    youtubeId: "3yCCKi8avYM",
  },
  {
    id: "70",
    title: "Tiruppavai Pasuram 24 - English",
    brief:
      "Twenty-fourth pasuram on cosmic deeds in ancient times, narrated in English.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=D7tConVTtI0",
    youtubeId: "D7tConVTtI0",
  },
  {
    id: "71",
    title: "Tiruppavai Pasuram 25 - Tamil",
    brief:
      "ஒருத்தி மகனாய் - Twenty-fifth pasuram on Krishna's divine birth in Tamil.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=TQC1pKGNx0E",
    youtubeId: "TQC1pKGNx0E",
  },
  {
    id: "72",
    title: "Tiruppavai Pasuram 25 - English",
    brief:
      "Twenty-fifth pasuram describing Krishna's birth story, narrated in English.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=Bgd5UAPWkPo",
    youtubeId: "Bgd5UAPWkPo",
  },
  {
    id: "73",
    title: "Tiruppavai Pasuram 26 - Tamil",
    brief:
      "மாலே மணிவண்ணா - Twenty-sixth pasuram praying to sapphire-hued Lord in Tamil.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=EFxTfNVUEVo",
    youtubeId: "EFxTfNVUEVo",
  },
  {
    id: "74",
    title: "Tiruppavai Pasuram 26 - English",
    brief:
      "Twenty-sixth pasuram with prayer to blue Krishna, narrated in English.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=d6ZSgK6u8tU",
    youtubeId: "d6ZSgK6u8tU",
  },
  {
    id: "75",
    title: "Tiruppavai Pasuram 27 - Tamil",
    brief:
      "கூடாரை வெல்லும் - Twenty-seventh pasuram on Krishna as protector in Tamil.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=j6R1Rrv7nvs",
    youtubeId: "j6R1Rrv7nvs",
  },
  {
    id: "76",
    title: "Tiruppavai Pasuram 27 - English",
    brief: "Twenty-seventh pasuram on conquering enemies, narrated in English.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=SccjN6za_Vw",
    youtubeId: "SccjN6za_Vw",
  },
  {
    id: "77",
    title: "Tiruppavai Pasuram 28 - Tamil",
    brief:
      "கறவைகள் பின்சென்று - Twenty-eighth pasuram depicting Krishna tending cows in Tamil.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=LHqIAh2bcH4",
    youtubeId: "LHqIAh2bcH4",
  },
  {
    id: "78",
    title: "Tiruppavai Pasuram 28 - English",
    brief: "Twenty-eighth pasuram on cowherd duties, narrated in English.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=YDeAFcNdQUY",
    youtubeId: "YDeAFcNdQUY",
  },
  {
    id: "79",
    title: "Tiruppavai Pasuram 29 - Tamil",
    brief:
      "சிற்றஞ் சிறுகாலே - Twenty-ninth pasuram with final requests to Krishna in Tamil.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=qTUsS7IRkDg",
    youtubeId: "qTUsS7IRkDg",
  },
  {
    id: "80",
    title: "Tiruppavai Pasuram 30 - Tamil",
    brief:
      "வங்கக் கடல்கடைந்த - Final pasuram with gopis receiving blessings in Tamil.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=C-Pp9Wo5z3Y",
    youtubeId: "C-Pp9Wo5z3Y",
  },
  {
    id: "81",
    title: "Tiruppavai Pasuram 30 - English",
    brief:
      "Final pasuram on churning the ocean and surrender, narrated in English.",
    category: "Tiruppavai",
    youtubeUrl: "https://www.youtube.com/watch?v=9eCmcPR9W1g",
    youtubeId: "9eCmcPR9W1g",
  },
];

export const featuredVideos = videos.filter((v) => v.featured);
