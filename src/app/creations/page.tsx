import { Metadata } from "next";
import {
  GalleryHero,
  GalleryGrid,
  CategoryDescription,
} from "@/components/CreationsComponents";
import { galleryItems, galleryCategories } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Creations Gallery - Chitra Raman",
  description:
    "A visual gallery of handmade doll scenes, festival depictions, rangoli work, and cultural presentations.",
};

export default function CreationsPage() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid items={galleryItems} categories={galleryCategories} />
      <CategoryDescription />
    </>
  );
}
