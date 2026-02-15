"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Leadership from "@/sections/Leadership";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
