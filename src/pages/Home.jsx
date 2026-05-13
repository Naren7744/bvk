import Hero from "../sections/Hero";
import Services from "../sections/Services";
import About from "../sections/About";
import WhyChoose from "../sections/WhyChoose";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Testimonials from "../sections/Testimonials";
import FreeConsultation from "../sections/FreeConsultation";



export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <WhyChoose />
      <Projects />
      <FreeConsultation />
      <Testimonials />
      <Contact />
    </>
  );
}