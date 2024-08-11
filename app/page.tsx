"use client";

import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main >
      <section id="home"  className="h-screen">
        <Landing />
      </section>

      <section id="about-me"  >
        <AboutMe />
      </section>
      <section id="experience" >
        <Experience />
      </section>
      <section id="contact" >
        <Contact />
      </section>
      
    </main>
  );
}
