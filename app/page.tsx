"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray("section");
    const totalWidth = containerRef.current!.scrollWidth - window.innerWidth;

    gsap.to(containerRef.current, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => `+=${totalWidth}`,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      if (containerRef.current) {
        gsap.killTweensOf(containerRef.current);
      }
    };
  }, []);

  return (
    <main className="h-screen overflow-hidden">
      <div ref={containerRef} className="flex">
        <section id="home" className="w-screen h-screen flex-shrink-0">
          <Landing />
        </section>
        <section id="projects" className="w-screen h-screen flex-shrink-0">
          <Projects />
        </section>
        <section id="about-me" className="w-screen h-screen flex-shrink-0">
          <AboutMe />
        </section>
        <section id="experience" className="w-screen h-screen flex-shrink-0">
          <Experience />
        </section>
        <section id="contact" className="w-screen h-screen flex-shrink-0">
          <Contact />
        </section>
      </div>
    </main>
  );
}
