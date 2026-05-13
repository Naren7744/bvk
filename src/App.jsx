import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ScrollToTop from "./components/common/ScrollToTop";
import GetQuote from "./components/common/GetQuote";
import FloatingButtons from "./components/common/floating";

export default function App() {
  const location = useLocation();

  // INIT AOS (once)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // REFRESH ON ROUTE CHANGE
  useEffect(() => {
    AOS.refresh();
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
         <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/getQuote" element={<GetQuote />} />
      </Routes>

      <FloatingButtons />
      <Footer />
    </>
  );
}