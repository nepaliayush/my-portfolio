import Image from "next/image";
import Landing from "./components/Landing";
import VANTA from "vanta/dist/vanta.net.min";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col justify-between p-5">
      <section id="home"><Landing/></section>
      <section id="projects"><Projects/></section>
      <section id="about-me"><AboutMe/></section>
      <section id="experience"><Experience/></section>
      <section id="contact"><Contact /></section>
    </main>
  );
}
