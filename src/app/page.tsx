import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Portfolio from '@/components/SharedComponent/portfollio';
import ExperienceSection from '@/components/Home/Experience';

export const metadata: Metadata = {
  title: "Daniel Xavier B. Legaspi | Portfolio",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ExperienceSection />
      <Portfolio />
    </main>
  )
}
