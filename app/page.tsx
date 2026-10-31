import React from 'react';
import { PetTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Header } from '@/components/common/Header';
import { Hero } from '@/components/sections/Hero';
import { AboutUs } from '@/components/sections/AboutUs';
import { OurService } from '@/components/sections/OurService';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Care } from '@/components/sections/Care';
import { Gallery } from '@/components/sections/Gallery';
import { OurTeam } from '@/components/sections/OurTeam';
import { Testimonial } from '@/components/sections/Testimonial';
import { Faq } from '@/components/sections/Faq';
import { Contact } from '@/components/sections/Contact';
import { BookAppointment } from '@/components/sections/BookAppointment';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: PetTemplateData = rawData;
  const sectionData = templateData?.categories?.Pet?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <Header data={sectionData.Header?.variants?.PetHeader2} />
      <Hero data={sectionData.Hero?.variants?.PetHero2} />
      <AboutUs data={sectionData.AboutUs?.variants?.PetAboutUs2} />
      <OurService data={sectionData.OurService?.variants?.PetOurService2} />
      <WhyChooseUs data={sectionData.WhyChooseUs?.variants?.PetWhyChooseUs2} />
      <Care data={sectionData.Care?.variants?.PetCare2} />
      <Gallery data={sectionData.Gallery?.variants?.PetGallery2} />
      <OurTeam data={sectionData.OurTeam?.variants?.PetOurTeam2} />
      <Testimonial data={sectionData.Testimonials?.variants?.PetTestimonials2} />
      <Faq data={sectionData.Faq?.variants?.PetFaq2} />
      <Contact data={sectionData.Contact?.variants?.PetContact2} />
      <BookAppointment data={sectionData.BookAppointment?.variants?.PetBookAppointment2} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
