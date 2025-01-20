import AboutMe from "@/components/AboutMe";
import ConnectMe from "@/components/ConnectMe";
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
      <ConnectMe />
    </div>
  );
}
