import { Metadata } from "next";
import {
  HeroSection,
  AwardsSection,
  FelicitationsSection,
  MediaSection,
} from "@/components/FelicitationComponents";

export const metadata: Metadata = {
  title: "Felicitation & Awards - Chitra Raman",
  description:
    "Recognition and felicitation received for cultural presentations, festival depictions, and storytelling work.",
};

const awards = [
  {
    id: "award1",
    title: "Navaratri Golu 2024 - First Prize",
    description:
      "Won the first prize for Navaratri Golu submissions from across India.",
    year: "2024",
    organizer: "Namba Aathu Periyava Channel",
    photo: "/awards/golu-2024-photo.jpg",
    certificate: "/awards/golu-2024-certificate.jpg",
    videoUrl: "https://www.youtube.com/watch?v=uQKfsaTBM3E",
  },
  {
    id: "award2",
    title: "Navaratri Golu 2025 - Second Prize",
    description:
      "Awarded second prize for the outstanding Navaratri Golu display.",
    year: "2025",
    organizer: "Namba Aathu Periyava Channel",
    photo: "/awards/golu-2025-photo.jpg",
    certificate: "/awards/golu-2025-certificate.jpg",
  },
];

const felicitations = [
  {
    id: "1",
    title: "Ramanuja Story in Soft Toys",
    felicitatedBy: "Swamy Velukudi",
    venue: "Fine Arts Sabha, Chembur, Mumbai",
    description:
      "Felicitated for the creation of Ramanuja story depicted through soft toys.",
    image: "/felicitations/velukudi-swamy.jpg",
  },
  {
    id: "2",
    title: "Desikar Vaibhavam Creation",
    felicitatedBy: "Vedantam Swamy of SPVST Sabha",
    venue: "SPVST Sabha",
    description:
      "Recognized for the creation of Desikar Vaibhavam in soft toys.",
    image: "/felicitations/vedantam-swamy.jpg",
  },
  {
    id: "3",
    title: "Brahmo Utsavam Vahanam Display",
    felicitatedBy: "Smt Chandra Ramani",
    venue: "Ahobila Mutt",
    description:
      "Felicitated for display of dolls depicting various vahanam in Brahmo Utsavam.",
    image: "/felicitations/vahanam-display.jpg",
  },
  {
    id: "4",
    title: "Temple Rangoli Creations",
    felicitatedBy: "Smt Chandra Ramani",
    venue: "Sri Lakshmi Narasimha Temple",
    description: "Recognized for creating beautiful rangolis at the temple.",
    image: "/felicitations/rangoli-felicitation.jpg",
  },
  {
    id: "5",
    title: "Manavala Manuni 750 Years Videos",
    felicitatedBy: "Shri Ramanujan of Shree BRPS Sabha",
    venue: "BRPS Sabha",
    description:
      "Felicitated for creation of Manavala Manuni 750 years celebration videos in soft toys.",
    image: "/felicitations/manavala-manuni.jpg",
  },
  {
    id: "6",
    title: "Mentor Recognition",
    felicitatedBy: "Nagai Narasimha Swamy",
    venue: "",
    description:
      "Her mentor who imbibed the nuances of every Vaishnavite display.",
    image: "/felicitations/nagai-narasimha-swamy.jpg",
  },
  {
    id: "7",
    title: "Andal's Thiruppavai - Etra Kalangal",
    felicitatedBy: "Swami Anantha Padmanabhan",
    venue: "Ahobila Mutt Temple",
    description:
      'Introduced to TV channel Podigai for display of Andal\'s Thiruppavai Pashuram "Etra Kalangal" on Ekadashi day, 6th January 2020.',
    image: "/felicitations/podigai-tv.jpg",
  },
];

const mediaFeatures = [
  {
    id: "media1",
    title: "IGK Tamil Channel",
    description: "TV coverage of Navaratri Golu celebration.",
    url: "https://www.youtube.com/watch?v=hFHW_km5V38",
  },
  {
    id: "media2",
    title: "Namba Aathu Periyava",
    description: "YouTube feature on Vaishnavite storytelling.",
    url: "https://www.youtube.com/watch?v=VUIDq7Rx-n4",
  },
];

export default function FelicitationPage() {
  return (
    <>
      <HeroSection />
      <AwardsSection awards={awards} />
      <FelicitationsSection felicitations={felicitations} />
      <MediaSection features={mediaFeatures} />

      <section className="py-12 bg-cream-950 text-cream-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-cream-400 text-sm">
            All content and depictions are created with devotion and cultural
            respect.
          </p>
        </div>
      </section>
    </>
  );
}
