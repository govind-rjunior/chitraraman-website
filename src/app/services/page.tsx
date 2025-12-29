import { Metadata } from "next";
import {
  ServicesHero,
  ServicesGrid,
  EngagementSteps,
  PerfectFor,
  Testimonial,
  ServicesCTA,
} from "@/components/ServicesComponents";
import { services, engagementSteps } from "@/data/services";

export const metadata: Metadata = {
  title: "Services - Chitra Raman",
  description:
    "Handmade doll depictions, rangoli work, and cultural storytelling sessions for homes, schools, temples, and events.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid services={services} />
      <EngagementSteps steps={engagementSteps} />
      <PerfectFor />
      <Testimonial />
      <ServicesCTA />
    </>
  );
}
