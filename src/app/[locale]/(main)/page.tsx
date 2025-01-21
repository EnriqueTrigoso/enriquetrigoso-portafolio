import AboutMe from "@/components/pages/home/AboutMe/AboutMe";
import Hero from "@/components/pages/home/Hero/Hero";
import Projects from "@/components/pages/home/Projects/Projects";
import Skills from "@/components/pages/home/Skills/Skills";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
    </main>
  );
}
