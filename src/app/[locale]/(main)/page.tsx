"use client"
import useAOS from "@/components/hooks/useAOS";
import AboutMe from "@/components/pages/home/AboutMe/AboutMe";
import Contact from "@/components/pages/home/Contact/Contact";
import Hero from "@/components/pages/home/Hero/Hero";
import Projects from "@/components/pages/home/Projects/Projects";
import Skills from "@/components/pages/home/Skills/Skills";
import Welcome from "@/components/pages/home/Welcome/Welcome";

export default function Home() {

  useAOS()

  return (
    <main className="relative">
      <Welcome>
        <>
          <Hero />
          <AboutMe />
          <Projects />
          <Skills />
          <Contact />
        </>
      </Welcome>

    </main>
  );
}
