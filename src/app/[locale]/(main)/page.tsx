"use client"
import useAOS from "@/components/hooks/useAOS";
import AboutMe from "@/components/pages/home/AboutMe/AboutMe";
import Contact from "@/components/pages/home/Contact/Contact";
import Hero from "@/components/pages/home/Hero/Hero";
import Projects from "@/components/pages/home/Projects/Projects";
import Skills from "@/components/pages/home/Skills/Skills";
import Welcome, { WELCOME_TOTAL_LIFE_TIME } from "@/components/pages/home/Welcome/Welcome";
import { useEffect } from "react";
import { disablePageScroll, enablePageScroll } from '@fluejs/noscroll';

export default function Home() {

  useAOS()

  useEffect(() => {
    
    disablePageScroll();

    const timer = setTimeout(() => {
      enablePageScroll();
      document.body.style.overflow = 'auto';
    }, WELCOME_TOTAL_LIFE_TIME);

    return () => clearTimeout(timer);

  }, [])

  return (
    <main className="relative">
      <Welcome />
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
