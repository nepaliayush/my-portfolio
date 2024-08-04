"use client";

import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="h-screen overflow-auto">
      <section id="home" className="w-screen h-screen">
        <Landing />
      </section>
      <section id="projects" className="w-screen ">
        <Projects />
      </section>
      <section id="about-me" className="w-screen ">
        <AboutMe />
      </section>
      <section id="experience" className="w-screen ">
        <Experience />
      </section>
      <section id="contact" className="w-screen ">
        <Contact />
      </section>
    </main>
  );
}
