import AboutMe from "@/components/pages/home/AboutMe";
import Hero from "@/components/pages/home/Hero";
import Navigation from "@/components/pages/home/Navigation";
import Projects from "@/components/pages/home/Projects/Projects";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />  
      <Hero />
      <AboutMe />
      <Projects />
    </main>
  );
}
