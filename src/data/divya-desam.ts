export interface DivyaDesam {
  id: string
  name: string
  tamilName: string
  location: string
  state: string
  deity: string
  brief: string
  legend: string
  videoId?: string
  featured?: boolean
}

export const divyaDesams: DivyaDesam[] = [
  {
    id: 'srirangam',
    name: 'Srirangam',
    tamilName: 'ஸ்ரீரங்கம்',
    location: 'Tiruchirappalli',
    state: 'Tamil Nadu',
    deity: 'Sri Ranganathar',
    brief: 'The foremost of all 108 Divya Desams, Srirangam houses Lord Ranganatha in a reclining posture on Adisesha. The temple is the largest functioning Hindu temple in the world.',
    legend: 'Lord Ranganatha was originally worshipped by Lord Brahma, then passed to Ikshvaku, and eventually to Lord Rama. Vibhishana received the deity as a gift and was carrying it to Lanka when it got established at Srirangam.',
    videoId: '_E7KKXtPLrs',
    featured: true,
  },
  {
    id: 'tirupati',
    name: 'Tirupati Tirumala',
    tamilName: 'திருப்பதி',
    location: 'Tirumala Hills',
    state: 'Andhra Pradesh',
    deity: 'Lord Venkateswara (Balaji)',
    brief: 'The most visited pilgrimage center in the world, Lord Venkateswara stands atop the seven hills of Tirumala, blessing devotees who climb the sacred path.',
    legend: 'Lord Vishnu descended to Earth as Srinivasa to be with his consort Padmavati. He borrowed money from Kubera for the wedding and remains at Tirumala receiving offerings to repay the debt.',
    videoId: 'C7wVNlepfqM',
    featured: true,
  },
  {
    id: 'anantha-padmanabha',
    name: 'Thiruvananthapuram',
    tamilName: 'திருவனந்தபுரம்',
    location: 'Thiruvananthapuram',
    state: 'Kerala',
    deity: 'Anantha Padmanabha Swamy',
    brief: 'The 75th Divya Desam, this temple houses the magnificent 18-foot reclining form of Lord Vishnu on Anantha (Adisesha), viewable only through three doors.',
    legend: 'A sage named Divakara Muni performed severe penance. A boy appeared and tested his patience multiple times. When the sage chased him, the boy merged into a tree which fell and transformed into the massive reclining form of Vishnu.',
    videoId: 'mrRIvp0jRm8',
    featured: true,
  },
  {
    id: 'kanchipuram',
    name: 'Kanchipuram Varadaraja',
    tamilName: 'காஞ்சிபுரம்',
    location: 'Kanchipuram',
    state: 'Tamil Nadu',
    deity: 'Varadaraja Perumal',
    brief: 'One of the seven sacred cities (Sapta Puri), Kanchipuram houses multiple Divya Desams including the grand Varadaraja Perumal temple.',
    legend: 'Lord Brahma performed a yajna here and Lord Vishnu appeared as Varadaraja, the king who grants boons, blessing all who worship here.',
    featured: false,
  },
  {
    id: 'alwarthirunagari',
    name: 'Alwarthirunagari',
    tamilName: 'ஆழ்வார்திருநகரி',
    location: 'Thoothukudi District',
    state: 'Tamil Nadu',
    deity: 'Aadhinathar',
    brief: 'The birthplace of Nammalwar, the greatest of all Alwars. The sacred tamarind tree under which he meditated still stands.',
    legend: 'Nammalwar sat in meditation under the tamarind tree from birth, not eating or speaking, until Madhurakavi Alwar arrived guided by a divine light and awakened him.',
    featured: false,
  },
  {
    id: 'srivilliputhur',
    name: 'Srivilliputhur',
    tamilName: 'ஸ்ரீவில்லிபுத்தூர்',
    location: 'Virudhunagar District',
    state: 'Tamil Nadu',
    deity: 'Vadabadrasayee',
    brief: 'The birthplace of Andal and Periyalwar. The 192-foot gopuram is the official symbol of the Tamil Nadu government.',
    legend: 'Periyalwar found baby Andal under a Tulsi plant in the temple garden. She grew up with such devotion that she would wear the garlands meant for God before offering them.',
    featured: false,
  },
]

export const divyaDesamIntro = {
  title: 'Divya Desam Depictions',
  description: 'A collection of temple legends and sacred stories depicted in handmade dolls with narration. The 108 Divya Desams are temples sung by the Alwars in their verses. Each page includes a short story summary and links to the corresponding video.',
}
