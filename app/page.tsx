import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Services />
      <Projects />
    </div>
  );
}
