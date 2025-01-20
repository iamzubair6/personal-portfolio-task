import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Services />
      <Projects />
      <TestimonialSlider />
    </div>
  );
}
